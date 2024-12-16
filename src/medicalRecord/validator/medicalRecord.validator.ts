import Joi from 'joi';

export const createMedicalRecordValidator = Joi.object({
  patientId: Joi.string().required(),
  visitDate: Joi.date().iso().required(), 
  diagnosis: Joi.string().required(),
  symptoms: Joi.array().items(Joi.string()).required(),
  prescribedMedications: Joi.array().items(
    Joi.object({
      name: Joi.string().required(), 
      dosage: Joi.string().required(),
      duration: Joi.string().required() 
    })
  ).required(),
  testsOrdered: Joi.array().items(
    Joi.object({
      testName: Joi.string().required(), 
      result: Joi.string().optional(), 
      dateConducted: Joi.date().iso().optional() 
    })
  ).optional(), 
  allergies: Joi.array().items(Joi.string()).optional(),
  medicalHistory: Joi.array().items(
    Joi.object({
      condition: Joi.string().required(), 
      diagnosisDate: Joi.date().iso().required(), 
      status: Joi.valid('Active', 'Resolved').required()
    })
  ).optional(), 
  notes: Joi.string().optional(),
});


export const getMedicalRecordsValidator = Joi.object({
patientId: Joi.string().required()
})
