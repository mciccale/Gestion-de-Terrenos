import { createTerrainRouter } from "./terrain.routes.js";

export const mountRoutes = ({ app, models }) => {
  app.use("/terrains", createTerrainRouter({ terrainModel: models.terrain }));
};
