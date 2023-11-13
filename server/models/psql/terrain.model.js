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
      const query = "DELETE FROM terrenos WHERE id=$1 RETURNING *";
      const params = [terreno_id];
      const { rows } = await db.query(query, params);
      return rows;
    } catch (error) {
      console.error(error);
    }
  }
  static async addTerrain({tipoFinca,tipoTerreno, ubicacion, hectareas, limites }) {
    try {
      console.log(limites[0]);
      let query =
        "INSERT INTO terrenos(ubicacion, hectareas, limites) VALUES ($1,$2,ARRAY[POINT($3,$4),POINT($5,$6),POINT($7,$8),POINT($9,$10)]) RETURNING *";
      let params = [
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
      if(tipoTerreno.localeCompare("Latifundio")===0){
        query = "INSERT INTO latifundios(terreno_id, parcela_id) VALUES ($1,$2)";
        params = [
          rows[0].id,
          0
        ];
      } else {
        query = "INSERT INTO fincas(terreno_id, tipo_finca, alquilada, fecha_inicio_alquiler, periodo_arrendamiento, importe_alquiler, dni_arrendatario) VALUES ($1,$2,$3,$4,$5,$6,$7)";
        params = [
          rows[0].id,
          tipoFinca,
          false,
          null,
          null,
          null,
          null
        ];
      }
      await db.query(query, params);
      return rows[0];
    } catch (error) {
      console.log(error);
    }
  }
  static async modifyTerrain({ terreno_id, ubicacion, hectareas, limites }) {
    try {
      const query =
        "UPDATE terrenos SET ubicacion=$2,hectareas=$3,limites=ARRAY[POINT($4,$5),POINT($6,$7),POINT($8,$9),POINT($10,$11)] where id=$1 RETURNING *";
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
