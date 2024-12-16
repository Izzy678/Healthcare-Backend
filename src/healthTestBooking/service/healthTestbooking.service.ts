import { User } from "../../users/model/user.model";
import { CreateHealthTestBookingDto } from "../dto/healthTestbooking.dto";
import { HealthTestBooking } from "../model/healthTestbooking.model";

export async function createHealthBookingTest(data: CreateHealthTestBookingDto, user: string) {
    const healthTestBooking = await HealthTestBooking.create({
        appointmentDate: data.appointmentDate,
        appointmentTime: data.appointmentTime,
        testType: data.testType,
        userId: user
    });
    return healthTestBooking;
}


export async function getUserHealthTestBookings(user: string) {
    return await HealthTestBooking.findAll({
        where: {
            userId: user
        },
        include: [
            {
                model: User,
                as: 'user',
                attributes: ['id', 'firstName', 'email'],
            },
        ],
    });
}


export async function getAllHealthTestBookings() {
    return await HealthTestBooking.findAll({
        include: [
            {
                model: User,
                as: 'user',
                attributes: ['id', 'firstName', 'email'],
            },
        ],
    });
}
