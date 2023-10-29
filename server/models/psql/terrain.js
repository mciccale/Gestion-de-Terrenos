import pg from "pg";

const pool = new pg.Pool({
  host: "localhost",
  port: 5432,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: "terrenos",
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

export class SQLTerrainModel {
  static async getAllTerrains() {
    try {
      const response = await pool.query("SELECT * FROM terrenos");
      return response.rows;
    } catch (error) {
      return [];
    }
  }
}
