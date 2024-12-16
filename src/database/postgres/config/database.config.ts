import { Sequelize } from "sequelize";
import pg from 'pg'

export const sequelize = new Sequelize('Healthcare', 'postgres', 'ozaveshe123', {
    host: 'localhost',
    port:5432,
    dialect: 'postgres',
    dialectModule: pg,
    omitNull: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
   // sync: { alter: { drop: true } },
    // dialectOptions: { ssl: { require: false } },
    // ssl: true,
  });