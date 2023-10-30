import * as db from "../../db.js";

export class SQLTerrainModel {
  static async getAllTerrains() {
    try {
      const query = "SELECT * FROM terrenos";
      const { rows } = await db.query(query);
      return rows;
    } catch (error) {
      console.error(error);
    }
  }
  static async getTerrainById({ terrainId }) {
    try {
      const query = "SELECT * FROM terrenos WHERE id = $1";
      const params = [terrainId];
      const { rows } = await db.query(query, params);
      return rows[0];
    } catch (error) {
      console.error(error);
    }
  }
}
