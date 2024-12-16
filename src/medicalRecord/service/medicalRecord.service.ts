import { MedicalRecord } from "../dto/medicalRecord.dto";
import { medicalRecordModel } from "../model/medicalRecord.model";

export async function createMedicalRecord(data: MedicalRecord) {
    return medicalRecordModel.create({ ...data });
}

export async function getMedicalRecords(userId: string) {
    return medicalRecordModel.find({patientId: userId})
}
