const { query } = require('./db.js');

// Las consultas de inicialización
const queries = [
  // Nota: La creación de la base de datos puede no ser posible a través de este método, ya que normalmente requiere permisos de superusuario.
  `SELECT 'CREATE DATABASE test_gestion_terrenos_db' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'test_gestion_terrenos_db')`,
  `CREATE TABLE IF NOT EXISTS terrenos (id SERIAL PRIMARY KEY, ubicacion VARCHAR(255), hectareas FLOAT, limites POINT[4], UNIQUE (id));`,
  `CREATE TABLE IF NOT EXISTS arrendatarios (dni VARCHAR(20) PRIMARY KEY, nombre VARCHAR(50), edad INT, sexo CHAR, fincas_alquiladas INT[], parcelas_alquiladas INT[], UNIQUE (dni));`,
  // Agrega el resto de tus consultas aquí
];

// Función para ejecutar cada consulta
const executeQuery = async (queryText) => {
  try {
    const res = await query(queryText);
    console.log('Query executed successfully:', res.command);
  } catch (err) {
    console.error('Error executing query:', err.message);
  }
};

// Función principal para ejecutar todas las consultas
const initializeDatabase = () => {
  queries.forEach(async (q) => {
    await executeQuery(q);
  });
};

// Ejecutamos la función principal
initializeDatabase();