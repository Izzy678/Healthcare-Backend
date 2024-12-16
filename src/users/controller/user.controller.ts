import { NextFunction, Request, Response } from "express";
import { createUser, findUserById, getAllDoctors, updateUser } from "../servies/user.service";
import { HttpStatusCode } from "../../common/enums/httpStatusCode.enum";
import { TokenDto } from "../../auth/dto/token.dto";

export const createUserHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const createdUser = await createUser(req.body);
    res.status(HttpStatusCode.SUCCESS).send(createdUser);
  } catch (error: any) {
    next(error);
  }
};

export const viewUserProfileHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const tokenData = res.locals.user as unknown as TokenDto;
    const user = await findUserById(tokenData.user);
    res.status(HttpStatusCode.SUCCESS).send(user);
  } catch (error) {
    next(error);
  }
};

export const updateUserProfileHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const tokenData = res.locals.user as TokenDto;
  const updatedUser = await updateUser({ id: tokenData.user }, req.body);
  res.status(HttpStatusCode.SUCCESS).send({
    message: "user updated succesfully",
    updatedUser,
  });
};


export async function getAllDoctorHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const doctors = await getAllDoctors();
    res.status(HttpStatusCode.SUCCESS).send(doctors);
  } catch (error) {
    next(error);
  }
}


export async function chatWithVirtualAsssitantHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const message = req.body.message;
    let reply: string;

    if (!message) {
        reply = "Hello! How can I assist you today?";
    } else if (message.toLowerCase().includes("book consultation")) {
        reply = "Sure! I can help you book a consultation. Could you provide more details?";
    } else if (message.toLowerCase().includes("help")) {
        reply = "I’m here to help! What do you need assistance with?";
    } else {
        reply = "Hmm, I’m not sure about that. Could you rephrase?";
    }

    // Simulate delay for a more realistic interaction
    res.status(HttpStatusCode.SUCCESS).send({
      assistant: "Itura",
      userMessage: message,
      reply,
  });
  } catch (error) {
    next(error)
  }
 
}
