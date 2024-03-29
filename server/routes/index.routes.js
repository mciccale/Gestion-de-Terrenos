const { createTerrainRouter } = require('./terrain.routes.js');
const { createParcelaRouter } = require('./parcela.routes.js');
const { createAlquilerRouter } = require('./alquiler.routes.js');
const { createArrendatarioRouter } = require('./arrendatario.routes.js');

const mountRoutes = ({ app, models }) => {
  console.log(models);
  app.use('/terrenos', createTerrainRouter({ terrainModel: models.terrain }));
  app.use('/parcelas', createParcelaRouter({ parcelaModel: models.parcela }));
  app.use(
    '/alquileres',
    createAlquilerRouter({ alquilerModel: models.alquiler })
  );
  app.use(
    '/arrendatarios',
    createArrendatarioRouter({ arrendatarioModel: models.arrendatario })
  );
};

module.exports = { mountRoutes };
