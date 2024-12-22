require("dotenv").config();

const DATABASE_CONNECT_STRING = process.env.DATABASE_CONNECT_STRING;
const PORT = process.env.PORT || 5000; // Fix: Prioritize Render's dynamic PORT
const SECRET = process.env.SECRET;

module.exports = {
  DATABASE_CONNECT_STRING,
  PORT,
  SECRET,
};
