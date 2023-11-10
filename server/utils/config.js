require("dotenv").config();
const DATABASE_NAME = process.env.NODE_ENV === 'test'
  ? "test_gestion_terrenos_db"
  : "gestion_terrenos_db"
  
module.exports = {
  DATABASE_NAME
}