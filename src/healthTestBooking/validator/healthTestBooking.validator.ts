import Joi from "joi";
import { HealthTestBookingTestType } from "../model/healthTestbooking.model";

export const createHealthTestBookingValidator = Joi.object({
    testType: Joi.string().valid(...Object.values(HealthTestBookingTestType)).required(),
    appointmentTime: Joi.string().required(),
    appointmentDate: Joi.string().required()
})