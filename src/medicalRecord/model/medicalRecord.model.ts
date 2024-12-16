import mongoose, { Schema, Document } from 'mongoose';
import { mongooseSchemaConfig } from '../../database/mongodb/mongoose-schema.config';
import { MedicalRecord } from '../dto/medicalRecord.dto';

export type MedicalRecordDocument = mongoose.Document & MedicalRecord;

const MedicalRecordSchema = new mongoose.Schema({
    patientId: String,
    doctorId: String,
    visitDate: Date,
    diagnosis: String,
    symptoms:
    {
        type: [String],
    },
    prescribedMedications: [
        {
            name: { type: String },
            dosage: { type: String },
            duration: { type: String },
        },
    ],
    testsOrdered: [
        {
            testName: { type: String, required: true },
            result: { type: String },
            dateConducted: { type: Date },
        },
    ],
    allergies:
    {
        type: [String],
    },
    medicalHistory: [
        {
            condition: { type: String },
            diagnosisDate: { type: Date },
            status: { type: String, enum: ['Active', 'Resolved'] },
        },
    ],
    notes: String,
}, mongooseSchemaConfig);

export const medicalRecordModel = mongoose.model<MedicalRecordDocument>('MedicalRecord', MedicalRecordSchema);
