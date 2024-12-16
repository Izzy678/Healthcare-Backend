export interface MedicalRecord {
    patientId: string;
    doctorId: string;
    visitDate: Date;
    diagnosis: string;

    symptoms: string[];

    prescribedMedications: {
        name: string;
        dosage: string;
        duration: string;
    }[];

    testsOrdered: {
        testName: string;
        result?: string;
        dateConducted?: Date;
    }[];

    allergies: string[];

    medicalHistory: {
        condition: string;
        diagnosisDate: Date;
        status: 'Active' | 'Resolved';
    }[];

    notes: string;
}
