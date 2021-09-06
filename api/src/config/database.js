require("dotenv").config();

const host = process.env.DATABASE_HOST;
const database = process.env.DATABASE_NAME;
const username = process.env.DATABASE_USERNAME;
const password = process.env.DATABASE_PASSWORD;

module.exports = {
  dialect: "mysql",
  host: host,
  database: database,
  username: username,
  password: password,
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
  },
};
