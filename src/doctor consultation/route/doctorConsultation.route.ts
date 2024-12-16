import { Router } from "express";
import requireUser from "../../middleware/requireUser.middleware";
import { bookDoctorConsultationHandler, getMyConsultationsHandler } from "../controller/doctorConsultation.controller";
import { ValidateUserInput } from "../../middleware/validation.middleware";
import { bookConsultationValidator } from "../validator/doctorConsultation.validator";

const doctorConsulationRoutes = Router();

doctorConsulationRoutes.get('/doctor/book',
    [requireUser, ValidateUserInput(bookConsultationValidator)],
    bookDoctorConsultationHandler);
doctorConsulationRoutes.get('/get-all', requireUser, getMyConsultationsHandler);

export default doctorConsulationRoutes;