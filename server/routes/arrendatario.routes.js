const { Router } = require('express');
const {
  ArrendatarioController,
} = require('../controllers/arrendatario.controller.js');

const createArrendatarioRouter = ({ arrendatarioModel }) => {
  const arrendatarioRouter = Router();
  const arrendatarioController = new ArrendatarioController({
    arrendatarioModel,
  });

  arrendatarioRouter.post('/', arrendatarioController.addArrendatario);
  arrendatarioRouter.delete('/:dni', arrendatarioController.deleteArrendatario);
  arrendatarioRouter.put('/:dni', arrendatarioController.modifyArrendatario);
  
  return arrendatarioRouter;
};

module.exports = { createArrendatarioRouter };
