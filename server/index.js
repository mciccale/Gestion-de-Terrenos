const express = require("express");
const cors = require("cors");
const { randomUUID } = require("node:crypto");

const app = express();

app.use(
  cors({
    // Only accept requests from Client
    origin: "http://localhost:5173",
  })
);

// Disable express header
app.disable("x-powered-by");

const sampleTerrains = [
  {
    id: randomUUID(),
    name: "El Álamo",
    hectares: 300,
  },
  {
    id: randomUUID(),
    name: "Esplanada del olivero",
    hectares: 400,
  },
  {
    id: randomUUID(),
    name: "Cultivo de zanahorias",
    hectares: 250,
  },
  {
    id: randomUUID(),
    name: "Huertito",
    hectares: 50,
  },
];

app.get("/terrains", (_req, res) => {
  res.send(JSON.stringify(sampleTerrains)).status(200);
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
