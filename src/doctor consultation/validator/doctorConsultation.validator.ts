import Joi from "joi";

export const bookConsultationValidator = Joi.object({
    doctorId: Joi.string().required(),
    consultationTime: Joi.string().required(),
    consultationType: Joi.string().valid('TEXT','VIDEO').required(),
    consultationDate: Joi.string().required(),
})