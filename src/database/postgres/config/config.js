const dotenv = require("dotenv")
dotenv.config()

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: 5432,
    pool: {
      min: 2,
      max: 10,
    },
    logging: true, 
    define: {
      underscored: true,
    },
    dialect: "postgres",
    ssl: false,
    dialectOptions: {},
  },

  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    host: process.env.DATABASE_HOST,
    port: 5432,
    pool: {
      min: 2,
      max: 10,
    },
    logging: false,
    define: {
      underscored: true,
    },
    dialect: "postgres",
    ssl: true,
    dialectOptions: { ssl: { require: true } },
  },
}
