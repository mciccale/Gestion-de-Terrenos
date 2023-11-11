const { Router } = require("express");
const { TerrainController } = require("../controllers/terrain.controller.js");

const createTerrainRouter = ({ terrainModel }) => {
  const terrainRouter = Router();
  const terrainController = new TerrainController({ terrainModel });

  terrainRouter.get("/", terrainController.getAllTerrains);
  terrainRouter.post("/", terrainController.addTerrain);
  terrainRouter.get("/:id", terrainController.getTerrainById);
  terrainRouter.delete("/:id", terrainController.deleteTerreno);
  terrainRouter.put("/:id", terrainController.modifyTerrain);

  return terrainRouter;
};

module.exports = { createTerrainRouter };
