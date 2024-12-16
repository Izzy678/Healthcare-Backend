import { Router } from "express";
import { LoginUserHandler, refreshUserTokenHanlder, SignUpUserHandler } from "../controller/auth.controller";
import { ValidateUserInput } from "../../middleware/validation.middleware";
import { refreshTokenValidator, signInValidator, signUpValidator } from "../validation/auth.validation";

const authRoutes = Router();

authRoutes.post('/sign-up',ValidateUserInput(signUpValidator),SignUpUserHandler);
authRoutes.post('/login',ValidateUserInput(signInValidator),LoginUserHandler);
authRoutes.post('/refresh-token',ValidateUserInput(refreshTokenValidator),refreshUserTokenHanlder);

export default authRoutes;