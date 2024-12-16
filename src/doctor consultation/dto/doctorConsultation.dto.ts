export interface BookDoctorConsultationDto { 
    doctorId: string,
    patientId: string,
    consultationTime: string,
    consultationDate: Date,
    consultationType: 'TEXT'|'VIDEO'
}