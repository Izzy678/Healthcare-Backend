import { DoctorConsultation } from "../../../doctor consultation/model/doctorConsulation.model";
import { HealthTestBooking } from "../../../healthTestBooking/model/healthTestbooking.model";
import { User } from "../../../users/model/user.model";


export async function initializeAssociations() {
    // HealthTestBooking associations
    User.hasMany(HealthTestBooking, { foreignKey: 'userId', as: 'healthTestBookings' });
    HealthTestBooking.belongsTo(User, { foreignKey: 'userId', as: 'user' });

    // DoctorConsultation associations
    DoctorConsultation.belongsTo(User, { foreignKey: 'patientId', as: 'patient' }); // Fix alias syntax
    DoctorConsultation.belongsTo(User, { foreignKey: 'doctorId', as: 'doctor' }); // Fix alias syntax

    User.hasMany(DoctorConsultation, { foreignKey: 'patientId', as: 'patient' });
    User.hasMany(DoctorConsultation, { foreignKey: 'doctorId', as: 'doctor' });
}
