import { pool } from "../../db.js";

export class SQLTerrainModel {
  static async getAllTerrains() {
    try {
      const response = await pool.query("SELECT * FROM terrenos");
      return response.rows;
    } catch (error) {
      console.error(error);
    }
  }
  static async getTerrainById({ id }) {
    try {
      const response = await pool.query("SELECT * FROM terrenos WHERE id=$1", [
        id,
      ]);
      return response.rows[0];
    } catch (error) {
      console.error(error);
    }
  }
}
