import { Request, Response, NextFunction } from "express";
import { bookDoctorConsultation, getMyConsultations } from "../service/doctorConsultation.service";
import { BookDoctorConsultationDto } from "../dto/doctorConsultation.dto";
import { HttpStatusCode } from "../../common/enums/httpStatusCode.enum";

export async function bookDoctorConsultationHandler(
    req: Request<{}, {}, BookDoctorConsultationDto>,
    res: Response,
    next: NextFunction
) {
    try {
        const tokenData = res.locals.user;
        const consultation = await bookDoctorConsultation(req.body, tokenData.user);
        res.status(HttpStatusCode.SUCCESS).send(consultation);
    } catch (error) {
        next(error)
    }
}

export async function getMyConsultationsHandler(
    req: Request<{}, {}, BookDoctorConsultationDto>,
    res: Response,
    next: NextFunction
) {
  try {
    const tokenData = res.locals.user;
    const consultation = await getMyConsultations(tokenData.user);
    res.status(HttpStatusCode.SUCCESS).send(consultation);
  } catch (error) {
    next(error)
  }
}