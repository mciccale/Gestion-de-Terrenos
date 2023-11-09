import { Router } from "express";
import { ParcelaController } from "../controllers/parcela.controller.js";

export const createParcelaRouter = ({ parcelaModel }) => {
  const parcelaRouter = Router();
  const parcelaController = new ParcelaController({ parcelaModel });

  parcelaRouter.post("/", parcelaController.addParcela);
  parcelaRouter.delete("/:id", parcelaController.deleteParcela);
  parcelaRouter.put("/:id", parcelaController.modifyParcela);

  return parcelaRouter;
};


