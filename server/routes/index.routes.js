import { createTerrainRouter } from "./terrain.routes.js";
import { createParcelaRouter } from "./parcela.routes.js";

export const mountRoutes = ({ app, models }) => {
  console.log(models)
  app.use("/terrains", createTerrainRouter({ terrainModel: models.terrain }));
  app.use("/parcelas", createParcelaRouter({ parcelaModel: models.parcela }));
};
