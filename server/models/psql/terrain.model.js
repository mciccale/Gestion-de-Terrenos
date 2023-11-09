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
  static async deleteTerreno(terreno_id) {
    try {
      const query = "DELETE FROM terrenos WHERE id=$1 RETURNING *"
      const params = [terreno_id]
      const { rows } = await db.query(query, params)
      return rows
    } catch (error) {
      console.error(error)
    }
  }
  static async modifyTerrain({terreno_id,ubicacion,hectareas,limites}){
    const query = "UPDATE terrenos SET ubicacion=$2,hectareas=$3,limites=ARRAY[POINT($4,$5),POINT($6,$7),POINT($8,$9),POINT($10,$11)] where id=$1 RETURNING *";
    const params = [
      terreno_id,
      ubicacion,
      hectareas,
      limites[0][0],
      limites[0][1],
      limites[1][0],
      limites[1][1],
      limites[2][0],
      limites[2][1],
      limites[3][0],
      limites[3][1],
    ];
    const { rows } = await db.query(query, params);
    return rows;
  } catch (error) {
    console.error(error);
  }    
  }

