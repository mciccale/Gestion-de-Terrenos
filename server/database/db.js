const pg = require("pg");
const { DATABASE_NAME } = require("../utils/config.js");
const pool = new pg.Pool({
  host: "localhost",
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: DATABASE_NAME,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

const query = (text, params = []) => {
  console.log(
    `Text: ${text}
    Params: ${params}`
  );
  return pool.query(text, params);
};

module.exports = { query };