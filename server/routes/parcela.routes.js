import { Router } from "express";
import { ParcelaController } from "../controllers/parcela.controller.js";

export const createParcelaRouter = ({ parcelaModel }) => {
  console.log(parcelaModel)
  const parcelaRouter = Router();
  const parcelaController = new ParcelaController({ parcelaModel });

  parcelaRouter.post("/", parcelaController.addParcela);
  parcelaRouter.delete("/:id", parcelaController.deleteParcela);

  return parcelaRouter;
};
