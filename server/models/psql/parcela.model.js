const db = require("../../database/db.js");

class SQLParcelaModel {
  static async addParcela({ terreno_id, ubicacion, hectareas, limites }) {
    try {
      //falta añadir el terreno_id
      const query = `INSERT INTO parcelas(terreno_id, alquilada, fecha_inicio_alquiler, periodo_arrendamiento, 
        importe_alquiler, dni_arrendatario, ubicacion, hectareas, limites)
        VALUES ($1,$2,$3,$4,$5,$6,$7,$8,
        ARRAY[POINT($9,$10),POINT($11,$12),POINT($13,$14),POINT($15,$16)]) RETURNING *`;
      const params = [
        terreno_id,
        false,
        null,
        null,
        null,
        null,
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
      console.log(rows)
      return rows[0];
    } catch (error) {
      console.error(error);
    }
  }
  static async deleteParcela(parcela_id) {
    try {
      const query = "DELETE FROM parcelas WHERE id=$1 RETURNING *";
      const params = [parcela_id];
      const { rows } = await db.query(query, params);
      return rows;
    } catch (error) {
      console.error(error);
    }
  }

  static async modifyParcela({ parcela_id, ubicacion, hectareas, limites }) {
    try {
      const query = "UPDATE parcelas SET ubicacion=$2,hectareas=$3,limites=ARRAY[POINT($4,$5),POINT($6,$7),POINT($8,$9),POINT($10,$11)] WHERE id=$1 RETURNING *";
      const params = [
        parcela_id,
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
  static async clearParcelas() {
    try {
      const query = "DELETE FROM parcelas";
      const { rows } = await db.query(query);
      return rows;
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = { SQLParcelaModel };
