import * as joi from "joi";

export const signInValidator = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required()
});

export const signUpValidator = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
    firstName: joi.string().required(),
    lastName: joi.string().optional().allow(null),
    address: joi.string().optional().allow(null)
});

export const refreshTokenValidator = joi.object({
    refreshToken: joi.string().required()
})