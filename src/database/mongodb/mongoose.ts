import mongoose from "mongoose";
import { config } from "../../config/environment.config";

export async function connectToMongoDb() {
    const { DATABASE } = config;
    mongoose
      .connect(DATABASE.mongoDbUri ?? '')
      .then(() => {
        console.info('Connected to database');
      })
      .catch((error) => {
        console.error(`Error connecting to database: ${error.message}`);
      });
  }
