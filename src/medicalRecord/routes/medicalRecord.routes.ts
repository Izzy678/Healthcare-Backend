import { Router } from "express";
import requireUser from "../../middleware/requireUser.middleware";
import { createMedicalRecordHandler, getMedicalRecordsHandler } from "../controller/medicalRecord.controller";
import { ValidateUserInput } from "../../middleware/validation.middleware";
import { createMedicalRecordValidator, getMedicalRecordsValidator } from "../validator/medicalRecord.validator";

const medicalRoutes = Router();

medicalRoutes.post('/submit', [requireUser , ValidateUserInput(createMedicalRecordValidator)], createMedicalRecordHandler);

// Endpoint to fetch medical records for a patient
medicalRoutes.get('/get-all', [requireUser, ValidateUserInput(getMedicalRecordsValidator)], getMedicalRecordsHandler);

export default  medicalRoutes;