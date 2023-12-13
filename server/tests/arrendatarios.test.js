const app = require('../app');
const supertest = require('supertest');
const api = supertest(app);

const { SQLArrendatarioModel } = require('../models/psql/arrendatario.model');

// Antes de cada test borrmamos todos los terrenos de la BD de test
beforeEach(async () => {
  await SQLArrendatarioModel.clearArrendatarios();
});

describe('Registrar arrendatario', () => {
  test('no existente', async () => {
    // Creamos un arrendatario no existente
    const response = await api
      .post('/arrendatarios')
      .send({
        dni: '00000000A',
        nombre: 'Pepito',
        edad: 20,
        sexo: 'H',
      })
      .expect(201)
      .expect('Content-Type', /application\/json/);

    expect(response.body.dni).toBeDefined();
  });
});
