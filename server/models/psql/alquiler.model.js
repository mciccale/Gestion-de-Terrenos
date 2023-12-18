const db = require("../../database/db.js");

class SQLAlquilerModel {
  static async addAlquiler({ terrenoId, fechaInicioAlquiler, periodoArrendamiento, importeAlquiler, dniArrendatario }) {
    try {
      let query = "INSERT INTO alquileres(terreno_id,fecha_inicio_alquiler,periodo_arrendamiento,importe_alquiler,dni_arrendatario) VALUES($1,$2,$3,$4,$5) RETURNING *";
      let params = [terrenoId, fechaInicioAlquiler, periodoArrendamiento, importeAlquiler, dniArrendatario];
      let { rows } = await db.query(query, params);
      // Actualizar Fincas y Terrenos con Id del alquiler
      const addedRow = rows;
      query = "SELECT * FROM terrenos WHERE id=$1";
      params = [addedRow[0].terreno_id];
      ({ rows } = await db.query(query, params));

      query = rows[0].tipo_terreno === 'finca' ? "UPDATE fincas SET alquilada=$1, alquiler_id=$2 WHERE terreno_id=$3" : "UPDATE parcelas SET alquilada=$1, alquiler_id=$2 WHERE terreno_id=$3";
      params = [true, addedRow[0].id, addedRow[0].terreno_id];
      await db.query(query, params);
      // Opcionalmente, añadir a arrendatarios id de la finca o parcela que haya alquilado
      return addedRow[0];
    } catch (error) {
      console.error(error);
    }
  }

  static async clearAlquileres() {
    try {
      const query = "DELETE FROM alquileres";
      const { rows } = await db.query(query);
      return rows;
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = { SQLAlquilerModel };