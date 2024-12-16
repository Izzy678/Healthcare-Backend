import { HealthTestBookingTestType } from "../model/healthTestbooking.model";

export interface CreateHealthTestBookingDto { 
    testType: HealthTestBookingTestType,
    appointmentTime: string,
    appointmentDate: Date,
}