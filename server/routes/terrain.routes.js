import { Router } from "express";
import { TerrainController } from "../controllers/terrain.controller.js";

export const createTerrainRouter = ({ terrainModel }) => {
  const terrainRouter = Router();
  const terrainController = new TerrainController({ terrainModel });

  terrainRouter.get("/", terrainController.getAllTerrains);
  terrainRouter.get("/:id", terrainController.getTerrainById);
  terrainRouter.delete("/:id", terrainController.deleteTerreno);
  terrainRouter.put("/:id", terrainController.modifyTerrain);

  return terrainRouter;
};
