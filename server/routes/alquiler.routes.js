const { Router } = require("express");
const { AlquilerController } = require("../controllers/alquiler.controller.js");

const createAlquilerRouter = ({ alquilerModel }) => {
  const alquilerRouter = Router();
  const alquilerController = new AlquilerController({ alquilerModel });

  alquilerRouter.post("/", alquilerController.addAlquiler)

  return alquilerRouter;
};

module.exports = { createAlquilerRouter };