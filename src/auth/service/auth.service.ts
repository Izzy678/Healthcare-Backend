import { BadRequestException } from "../../common/error/http.error.";
import { comparePassword } from "../../common/utils/function/bcrypt";
import { ISignIn } from "../../users/dto/user.dto";
import { User } from "../../users/model/user.model";
import { findUserByEmail } from "../../users/servies/user.service";


export async function signIn(signInUserData: ISignIn): Promise<User> {
  const { email, password } = signInUserData;
  const foundUser = await findUserByEmail(email);
  if (!foundUser) throw new BadRequestException("Invalid email or password");
  const isValidPassword = await comparePassword(password, foundUser.password);
  if (!isValidPassword) throw new BadRequestException("Invalid email or password");
  return foundUser;
}
