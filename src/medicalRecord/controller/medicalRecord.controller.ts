import { Request, Response, NextFunction } from "express";
import { createMedicalRecord, getMedicalRecords } from "../service/medicalRecord.service";
import { HttpStatusCode } from "../../common/enums/httpStatusCode.enum";

export async function createMedicalRecordHandler(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const tokenData = res.locals.user
        const medicalRecord = await createMedicalRecord({...req.body, doctorId: tokenData.user});
        res.status(HttpStatusCode.SUCCESS).send(medicalRecord)
    } catch (error) {
        next(error)
    }
}

export async function getMedicalRecordsHandler(
    req: Request<{}, {}, {}, { patientId: string }>,
    res: Response, next: NextFunction
) {
    const { patientId } = req.query;
    try {
        const records = await getMedicalRecords(patientId);
        return res.status(200).send(records);
    } catch (error) {
        next(error)
    }
}
