import express from "express";
import appRoute from "./route";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import morgan from "morgan";
import { appErrorHandler } from "./middleware/errorHandler.middleware";
import TokenMiddleware from "./middleware/token.middleware";
import { initializeAssociations } from "./database/postgres/associations";
import { connectToMongoDb } from "./database/mongodb/mongoose";

const app = express();

// Start your Express server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
connectToMongoDb();
initializeAssociations();
app.use(express.json());
app.use(cookieParser());
app.use(cors()); // Enables Cross-Origin Resource Sharing
app.use(helmet()); // Sets various security-related HTTP headers
app.use(compression()); // Compresses HTTP responses
app.use(morgan("combined")); // Logs HTTP requests
app.use(TokenMiddleware); //always run and deserialize each time a request comes in
app.use(appRoute); //takes incomming http request and execute it
app.use(appErrorHandler); //Handle any error that kick in our application
