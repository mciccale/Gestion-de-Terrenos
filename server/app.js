import "dotenv/config";
import express, { json } from "express";
import cors from "cors";
import { mountRoutes } from "./routes/index.routes.js";
import { LocalTerrainModel } from "./models/local/terrain.model.js";
import { SQLTerrainModel } from "./models/psql/terrain.model.js";

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

// Mounting the routes
const models = {
  terrain: LocalTerrainModel,
};
mountRoutes({ app, models });

app.listen(process.env.PORT ?? 3001, () => {
  console.log(`Server listening on port: ${process.env.PORT ?? 3001}`);
});
