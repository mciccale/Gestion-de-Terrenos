const db = require("../../database/db.js");

class SQLTerrainModel {
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
      const query = "SELECT * FROM terrenos WHERE id=$1";
      const params = [terrainId];
      const res = await db.query(query, params);
      const result = res.rows[0];
      if (result.tipo_terreno === "finca") {
        const query = "SELECT * FROM fincas WHERE terreno_id=$1";
        const params = [terrainId];
        const { rows } = await db.query(query, params);
        return {...result, ...rows[0] };
      } else {
        const query = "SELECT * FROM latifundios WHERE terreno_id=$1";
        const params = [terrainId];
        const { rows } = await db.query(query, params);
        return {...result, parcelas: rows.map((row) => row.parcela_id)};
      }
    } catch (error) {
      console.error(error);
    }
  }
  static async deleteTerreno(terrenoId) {
    try {
      const query = "DELETE FROM terrenos WHERE id=$1 AND (tipo_terreno='finca' OR tipo_terreno='latifundio') RETURNING *";
      const params = [terrenoId];
      const { rows } = await db.query(query, params);
      return rows;
    } catch (error) {
      console.error(error);
    }
  }
  static async addTerrain({ tipoFinca, tipoTerreno, ubicacion, hectareas, limites }) {
    try {
      console.log(limites[0]);
      let query =
        "INSERT INTO terrenos(tipo_terreno, ubicacion, hectareas, limites) VALUES ($1,$2,$3,ARRAY[POINT($4,$5),POINT($6,$7),POINT($8,$9),POINT($10,$11)]) RETURNING *";
      let params = [
        tipoTerreno,
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
      if (tipoTerreno == "finca") {
        query = "INSERT INTO fincas(terreno_id, tipo_finca, alquilada, alquiler_id) VALUES ($1,$2,$3,$4)";
        params = [
          rows[0].id,
          tipoFinca,
          false,
          null
        ];
      }
      await db.query(query, params);
      return rows[0];
    } catch (error) {
      console.log(error);
    }
  }
  static async modifyTerrain({ terrenoId, ubicacion, hectareas, limites }) {
    try {
      const query =
        "UPDATE terrenos SET ubicacion=$2,hectareas=$3,limites=ARRAY[POINT($4,$5),POINT($6,$7),POINT($8,$9),POINT($10,$11)] where id=$1 AND (tipo_terreno='finca' OR tipo_terreno='latifundio') RETURNING *";
      const params = [
        terrenoId,
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
  static async clearTerrains() {
    try {
      const query = "DELETE FROM terrenos";
      const { rows } = await db.query(query);
      return rows;
    } catch (error) {
      console.error(error);
    }
  }
}
module.exports = { SQLTerrainModel };
