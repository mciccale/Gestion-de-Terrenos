const db = require("../../database/db.js");

class SQLAlquilerModel {
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
}

module.exports = { SQLAlquilerModel };