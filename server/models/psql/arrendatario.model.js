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
