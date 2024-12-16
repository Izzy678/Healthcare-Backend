import { Router } from "express";
import authRouter from "./auth/route/auth.router";
import userRoutes from "./users/route/user.route";
import healthTestBookingRoute from "./healthTestBooking/route/healthTestBooking.route";
import doctorConsulationRoutes from "./doctor consultation/route/doctorConsultation.route";
import medicalRoutes from "./medicalRecord/routes/medicalRecord.routes";

const appRoute = Router();
appRoute.use('/api/auth',authRouter);
appRoute.use('/api/users', userRoutes);
appRoute.use('/api/consultations', doctorConsulationRoutes);
appRoute.use('/api/health-test',healthTestBookingRoute);
appRoute.use('/api/medical-records',medicalRoutes);
export default appRoute;