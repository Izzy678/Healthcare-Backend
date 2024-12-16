import * as joi from 'joi'
export const signUpSchema = joi.object({
    firstName:joi.string().required(),
    lastName:joi.string().required(),
    userName:joi.string().required(),
    email:joi.string().email().required(),
    password: joi.string().required().min(8),
})

export const updateUserSchema = joi.object({
    firstName:joi.string().optional(),
    lastName:joi.string().optional(),
    userName:joi.string().optional(),
})