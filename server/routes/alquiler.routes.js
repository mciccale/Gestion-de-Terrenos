const { Router } = require("express");
const { AlquilerController } = require("../controllers/alquiler.controller.js");

const createAlquilerRouter = ({ alquilerModel }) => {
  const alquilerRouter = Router();
  const alquilerController = new AlquilerController({ alquilerModel });

  alquilerRouter.delete("/:id", alquilerController.deleteAlquiler);
  alquilerRouter.put("/:id",alquilerController.modifyAlquiler);

  return alquilerRouter;
};

module.exports = { createAlquilerRouter };