const db = require('../../database/db.js');

class SQLArrendatarioModel {
  static async addArrendatario({ dni, nombre, edad, sexo }) {
    try {
      const query =
        'INSERT INTO arrendatarios VALUES($1,$2,$3,$4,$5,$6) RETURNING *';
      const params = [dni, nombre, edad, sexo, [], []];
      const { rows } = await db.query(query, params);
      return rows[0];
    } catch (error) {
      console.error(error);
    }
  }

  static async deleteArrendatario(dni) {
    try {
      let query = "DELETE FROM arrendatarios WHERE dni=$1 RETURNING *";
      let params = [dni];
      let { rows } = await db.query(query, params);
      //Opcionalmente, habría que recorrer el array de fincas y terrenos e ir actualizandolos sin alquiler, porque se eliminan automáticamente.
      return rows;
    } catch (error) {
      console.error(error);
    }
  }

  static async modifyArrendatario(dni, { nombre, edad, sexo }) {
    try {
      const query = "UPDATE arrendatarios SET nombre=$1, edad=$2, sexo=$3 WHERE dni=$4 RETURNING *";
      const params = [nombre, edad, sexo, dni];
      const { rows } = await db.query(query, params);
      return rows;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  static async clearArrendatarios() {
    try {
      const query = 'DELETE FROM arrendatarios';
      const { rows } = await db.query(query);
      return rows;
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = { SQLArrendatarioModel };
