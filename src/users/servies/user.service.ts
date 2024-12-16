import {
  IcreateUser,
} from "../dto/user.dto";
import { User } from "../model/user.model";
import {
  hashPassword,
} from "../../common/utils/function/bcrypt";
import {
  ConflictException,
  NotFoundException,
} from "../../common/error/http.error.";

export async function findUserByEmail(email: string) {
  const foundUser = await User.findOne({
    where: {
      // [Op.or]:{id,email}
      email,
    },
  });
  return foundUser;
}

export async function findUserById(id: string) {
  const foundUser = await User.findOne({
    where: {
      id,
    },
  });
  if (!foundUser)
    throw new NotFoundException("user with the provided Id not found");
  return foundUser;
}

export async function createUser(createUserDto: IcreateUser): Promise<User> {
  const { email, firstName, lastName, password } = createUserDto;
  const foundUser = await findUserByEmail(email);
  if (foundUser)
    throw new ConflictException("User with the provided email already exist");
  const hashedPassword = await hashPassword(password);
  return await User.create({
    password: hashedPassword,
    email,
    firstName,
    lastName,
  });
}

export async function updateUser(query:object,updateDto:User) {
  const user = await User.findOne({where:{...query}});
  if(!user) throw new NotFoundException("user not found");
  const updatedUser = await user.update(updateDto);
  return updatedUser;
}

export async function getAllDoctors() {
  return await User.findAll({
    where: {role: 'DOCTOR'}
  })
}