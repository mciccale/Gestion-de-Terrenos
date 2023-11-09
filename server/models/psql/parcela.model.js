import * as db from "../../db.js";

export class SQLParcelaModel {
  static async addParcela({ terreno_id, ubicacion, hectareas, coordenadas }) {
    try {
      //falta añadir el terreno_id
      const query = `INSERT INTO parcelas (alquilada, fecha_inicio_alquiler, periodo_arrendamiento, importe_alquiler, dni_arrendatario, ubicacion, hectareas, limites) VALUES ($1,$2,$3,$4,$5,$6,$7,
        ARRAY[POINT($8,$9),POINT($10,$11),POINT($12,$13),POINT($14,$15)]) RETURNING *`;
      const params = [
        false,
        null,
        null,
        null,
        null,
        ubicacion,
        hectareas,
        coordenadas[0][0],
        coordenadas[0][1],
        coordenadas[1][0],
        coordenadas[1][1],
        coordenadas[2][0],
        coordenadas[2][1],
        coordenadas[3][0],
        coordenadas[3][1],
      ];
      const { rows } = await db.query(query, params);
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

  static async modifyParcela({parcela_id,ubicacion,hectareas,coordenadas}){
    const query = "UPDATE parcelas SET ubicacion=$2,hectareas=$3,limites=ARRAY[POINT($4,$5),POINT($6,$7),POINT($8,$9),POINT($10,$11)] WHERE id=$1 RETURNING *";
    const params = [
      parcela_id,
      ubicacion,
      hectareas,
      coordenadas[0][0],
      coordenadas[0][1],
      coordenadas[1][0],
      coordenadas[1][1],
      coordenadas[2][0],
      coordenadas[2][1],
      coordenadas[3][0],
      coordenadas[3][1],
    ];
    const { rows } = await db.query(query, params);
    return rows;
  } catch (error) {
    console.error(error);
  }
}
