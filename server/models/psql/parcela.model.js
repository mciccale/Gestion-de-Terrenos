const db = require("../../database/db.js");

class SQLParcelaModel {
  static async getParcelaById({ parcelaId }) {
    try {
      const query = "SELECT * FROM parcelas INNER JOIN terrenos ON terrenos.id=parcelas.terreno_id WHERE terreno_id = $1";
      const params = [parcelaId];
      const { rows } = await db.query(query, params);
      return rows[0];
    } catch (error) {
      console.error(error);
    }
  }
  static async addParcela({ terreno_id, ubicacion, hectareas, limites }) {
    try {
      await db.query('BEGIN');
      let query = "INSERT INTO terrenos(tipo_terreno, ubicacion, hectareas, limites) VALUES ($1,$2,$3,ARRAY[POINT($4,$5),POINT($6,$7),POINT($8,$9),POINT($10,$11)]) RETURNING *";
      let params = [
        'parcela',
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
      let { rows } = await db.query(query, params);
      const terRow = rows;
      query = `INSERT INTO parcelas(terreno_id, latifundio_id, alquilada, alquiler_id) VALUES($1,$2,$3,$4) RETURNING *`;
      params = [
        rows[0].id,
        terreno_id,
        false,
        null
      ];
      ({ rows } = await db.query(query, params));
      console.log(rows);
      query = `INSERT INTO latifundios(terreno_id, parcela_id) VALUES($1,$2)`;
      params = [
        terreno_id,
        rows[0].terreno_id,
      ];
      await db.query(query, params);
      await db.query('COMMIT');
      return terRow[0];
    } catch (error) {
      await db.query('ROLLBACK');
      console.error(error);
      return error;
    }
  }
  static async deleteParcela(parcela_id) {
    try {
      const query = "DELETE FROM terrenos WHERE id=$1 AND tipo_terreno='parcela' RETURNING *";
      const params = [parcela_id];
      const { rows } = await db.query(query, params);
      return rows;
    } catch (error) {
      console.error(error);
    }
  }

  static async modifyParcela({ parcela_id, ubicacion, hectareas, limites }) {
    try {
      const query =
        "UPDATE terrenos SET ubicacion=$2,hectareas=$3,limites=ARRAY[POINT($4,$5),POINT($6,$7),POINT($8,$9),POINT($10,$11)] WHERE id=$1 AND tipo_terreno='parcela' RETURNING *";
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
