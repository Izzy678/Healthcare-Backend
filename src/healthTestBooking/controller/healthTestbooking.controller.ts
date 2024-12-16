import { Request, Response, NextFunction } from "express";
import { createHealthBookingTest, getAllHealthTestBookings, getUserHealthTestBookings } from "../service/healthTestbooking.service";
import { CreateHealthTestBookingDto } from "../dto/healthTestbooking.dto";
import { HttpStatusCode } from "../../common/enums/httpStatusCode.enum";

export async function createHealthBookingTestHandler(
    req: Request<{}, {}, CreateHealthTestBookingDto>,
    res: Response,
    next: NextFunction
) {
    try {
        const tokenData = res.locals.user;
        const healthTestBooking = await createHealthBookingTest(req.body, tokenData.user);
        res.status(HttpStatusCode.SUCCESS).send(healthTestBooking);
    } catch (error) {
        next(error)
    }
}

export async function getUserHealthTestBookingsHandler(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const data = res.locals.user;
        const healthTestBookings = await getUserHealthTestBookings(data.user);
        res.status(HttpStatusCode.SUCCESS).send(healthTestBookings);
    } catch (error) {
        next(error);
    }
}


export async function getAllHealthTestBookingsHandler(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const healthTestBookings = await getAllHealthTestBookings();
        res.status(HttpStatusCode.SUCCESS).send(healthTestBookings);
    } catch (error) {
        next(error);
    }
}
