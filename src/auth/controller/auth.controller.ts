import { Request, Response, NextFunction } from "express";
import { signIn } from "../service/auth.service";
import { HttpStatusCode } from "../../common/enums/httpStatusCode.enum";
import { generateTokens, reIssueAccessTokens } from "../service/token.service";
import { SignUpDto } from "../dto/auth.dto";
import { createUser } from "../../users/servies/user.service";

export async function LoginUserHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const user = await signIn(req.body);
    console.log('user', user)
    //generate token
    const { accessToken, refreshToken } = generateTokens(user);
    res
      .status(HttpStatusCode.SUCCESS)
      .json({ user, accessToken, refreshToken, message: "Sign in successfully" });
  } catch (error) {
    next(error);
  }
}


export async function SignUpUserHandler(
  req: Request<{}, {}, SignUpDto>,
  res: Response,
  next: NextFunction
) {
  try {
    const { email, firstName, lastName, password } = req.body;
    const user = await createUser({
      firstName,
      lastName,
      email,
      password
    });
    res
      .status(HttpStatusCode.SUCCESS)
      .send({ message: "Signup successfully", user });
  } catch (error) {
    next(error);
  }

}

export async function refreshUserTokenHanlder(
  req: Request<{}, {}, { refreshToken: string }>,
  res: Response,
  next: NextFunction
) {
  try {
    const tokens = await reIssueAccessTokens(req.body.refreshToken);
    res
      .status(HttpStatusCode.SUCCESS)
      .json({ ...tokens, message: "Token successfully refreshed"});
  } catch (error) {
    next(error);
  }

}