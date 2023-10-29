import "dotenv/config";
import express, { json } from "express";
import cors from "cors";
import { createTerrainRouter } from "./routes/terrain.js";
import { SQLTerrainModel } from "./models/psql/terrain.js";

const app = express();

app.use(json());
app.use(
  cors({
    // Only accept requests from Client
    origin: "http://localhost:5173",
  })
);

// Disable express header
app.disable("x-powered-by");

// Assigning a Router and a Model to /terrains route
app.use("/terrains", createTerrainRouter({ terrainModel: SQLTerrainModel }));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
