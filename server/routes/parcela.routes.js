const { Router } = require("express");
const { ParcelaController } = require("../controllers/parcela.controller.js");

const createParcelaRouter = ({ parcelaModel }) => {
  const parcelaRouter = Router();
  const parcelaController = new ParcelaController({ parcelaModel });

  parcelaRouter.post("/", parcelaController.addParcela);
  parcelaRouter.get("/:id", parcelaController.getParcelaById);
  parcelaRouter.delete("/:id", parcelaController.deleteParcela);
  parcelaRouter.put("/:id", parcelaController.modifyParcela);

  return parcelaRouter;
};

module.exports = { createParcelaRouter };
