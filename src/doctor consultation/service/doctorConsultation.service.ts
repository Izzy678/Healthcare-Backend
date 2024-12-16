import { Op } from "sequelize";
import { User } from "../../users/model/user.model";
import { BookDoctorConsultationDto } from "../dto/doctorConsultation.dto";
import { DoctorConsultation } from "../model/doctorConsulation.model";

export async function bookDoctorConsultation(data: BookDoctorConsultationDto, patientId: string) {
    const doctorConsultation = await DoctorConsultation.create({
        consultationTime: data.consultationTime,
        consultationDate: data.consultationDate,
        consultationType: data.consultationType,
        doctorId: data.doctorId,
        patientId,
    });
    return doctorConsultation;
}

export async function getMyConsultations(user: string) {
    const consultations = await DoctorConsultation.findAll({
        where: {
            [Op.or]: [
                { patientId: user },
                { doctorId: user }
            ]
        },
        include: [
            {
                model: User,
                as: 'patient',
                attributes: ['id', 'firstName', 'email'], 
            },
            {
                model: User,
                as: 'doctor',
                attributes: ['id', 'firstName', 'email'], 
            }
        ],
        order: [['consultationDate', 'DESC'], ['consultationTime', 'DESC']], // Sort consultations by date and time
    });

    return consultations;
}
