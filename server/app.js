require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { mountRoutes } = require("./routes/index.routes.js");
const { LocalTerrainModel } = require("./models/local/terrain.model.js");
const { SQLTerrainModel } = require("./models/psql/terrain.model.js");
const { SQLParcelaModel } = require("./models/psql/parcela.model.js");
const middleware = require("./middlewares/middleware.js");
const app = express();

app.use(express.json());
app.use(
  cors({
    // Only accept requests = require( Client
    origin: "http://localhost:5173",
  })
);
app.use(middleware.requestLogger);
// Disable express header
app.disable("x-powered-by");

// Mounting the routes
const models = {
  terrain: SQLTerrainModel,
  parcela: SQLParcelaModel,
};
mountRoutes({ app, models });

const server = app.listen(process.env.PORT ?? 3001, () => {
  console.log(`Server listening on port: ${process.env.PORT ?? 3001}`);
});
module.exports = server 