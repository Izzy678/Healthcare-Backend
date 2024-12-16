import { Router } from "express";
import { chatWithVirtualAsssitantHandler, getAllDoctorHandler, updateUserProfileHandler, viewUserProfileHandler } from "../controller/user.controller";
import { ValidateUserInput } from "../../middleware/validation.middleware";
import { updateUserSchema } from "../validator/user.validator";
import requireUser from "../../middleware/requireUser.middleware";

const userRoutes = Router();

userRoutes.get('/view-profile', requireUser, viewUserProfileHandler);
userRoutes.get('/doctors',requireUser,getAllDoctorHandler);
userRoutes.patch('/update-profile', [requireUser, ValidateUserInput(updateUserSchema)], updateUserProfileHandler);
userRoutes.post('/chat/Itura',chatWithVirtualAsssitantHandler)

export default userRoutes;