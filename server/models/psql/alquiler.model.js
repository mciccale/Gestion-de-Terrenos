const db = require("../../database/db.js");

class SQLAlquilerModel {
    static async addAlquiler({ terreno_id, fecha_inicio_alquiler, periodo_arrendamiento, importe_alquiler, dni_arrendatario }) {
        try {
            const query = "INSERT INTO alquileres(terreno_id,fecha_inicio_alquiler,periodo_arrendamiento,importe_alquiler,dni_arrendatario) VALUES($1,$2,$3,$4,$5) RETURNING *";
            const params = [terreno_id, fecha_inicio_alquiler, periodo_arrendamiento, importe_alquiler, dni_arrendatario];
            const { rows } = await db.query(query, params);
            return rows[0];
        } catch (error) {
            console.error(error);
        }
    }
    static async deleteAlquiler(alquilerId) {
        try {
            let query = "DELETE FROM alquileres WHERE id=$1 RETURNING *";
            let params = [alquilerId];
            let { rows } = await db.query(query, params);
            const deleteRow = rows;
            if (rows.length !== 0) {
                query = "SELECT * FROM terrenos WHERE id=$1";
                params = [deleteRow[0].terreno_id];
                ({ rows } = await db.query(query, params));

                query = rows[0].tipo_terreno == 'finca' ? "UPDATE fincas SET alquilada=$1, alquiler_id=$2 WHERE terreno_id=$3" : "UPDATE parcelas SET alquilada=$1, alquiler_id=$2 WHERE terreno_id=$3";
                params = [false, null, deleteRow[0].terreno_id];
                await db.query(query, params);
            }
            return deleteRow;
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

      static async modifyAlquiler({alquilerId, terreno_id, fechaInicioAlquiler, periodoArrendamiento, importeAlquiler, dniArrendatario}) {
        try {
          const query = "UPDATE alquileres SET terreno_id=$2, fecha_inicio_alquiler=$3, periodo_arrendamiento=$4, importe_alquiler=$5, dni_arrendatario=$6 WHERE id=$1 RETURNING *";
          const params = [alquilerId, terreno_id, fechaInicioAlquiler, periodoArrendamiento, importeAlquiler, dniArrendatario];
          const { rows } = await db.query(query, params);
          return rows;
        } catch (error) {
          console.error(error);
          return error;
        }
      }
}

module.exports = { SQLAlquilerModel };