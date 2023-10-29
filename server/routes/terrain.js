import { Router } from "express";
import { TerrainController } from "../controllers/terrain.js";

export const createTerrainRouter = ({ terrainModel }) => {
  const terrainRouter = Router();
  const terrainController = new TerrainController({ terrainModel });

  terrainRouter.get("/", terrainController.getAllTerrains);

  return terrainRouter;
};
