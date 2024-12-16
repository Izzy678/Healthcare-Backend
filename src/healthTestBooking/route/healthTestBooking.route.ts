import { Router } from "express";
import requireUser from "../../middleware/requireUser.middleware";
import { createHealthBookingTestHandler, getAllHealthTestBookingsHandler, getUserHealthTestBookingsHandler } from "../controller/healthTestbooking.controller";
import { ValidateUserInput } from "../../middleware/validation.middleware";
import { createHealthTestBookingValidator } from "../validator/healthTestBooking.validator";

const healthTestBookingRoute = Router();

healthTestBookingRoute.post('/book',
    [requireUser, ValidateUserInput(createHealthTestBookingValidator)],
    createHealthBookingTestHandler);
healthTestBookingRoute.get('/get-my-bookings', requireUser, getUserHealthTestBookingsHandler);
healthTestBookingRoute.get('/get-all-bookings', requireUser, getAllHealthTestBookingsHandler);


export default healthTestBookingRoute;