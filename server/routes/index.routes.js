const { createTerrainRouter } = require("./terrain.routes.js");
const { createParcelaRouter } = require("./parcela.routes.js");

const mountRoutes = ({ app, models }) => {
  console.log(models)
  app.use("/terrains", createTerrainRouter({ terrainModel: models.terrain }));
  app.use("/parcelas", createParcelaRouter({ parcelaModel: models.parcela }));
};

module.exports = { mountRoutes };
