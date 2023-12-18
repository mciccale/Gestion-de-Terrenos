const app = require('../app');
const supertest = require('supertest');
const api = supertest(app);

const { SQLArrendatarioModel } = require('../models/psql/arrendatario.model');

let newArrendatario;

// Antes de cada test borrmamos todos los terrenos de la BD de test
beforeEach(async () => {
  await SQLArrendatarioModel.clearArrendatarios();
  newArrendatario = await SQLArrendatarioModel.addArrendatario({
    dni: "12345E",
    nombre: "Juan Carlos",
    edad: 54,
    sexo: 'H'

  });
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

describe('Eliminar arrendatario', () => {
  test('existente', async () => {
    const response = await api
      .delete('/arrendatarios/12345E')
      .expect(200)
      .expect('Content-Type', /application\/json/);
      
    expect(response.body.nombre).toEqual(newArrendatario.nombre);
  });
});

describe('Modificar arrendatario', () => {
  test('existente', async () => {
    const response = await api
      .put('/arrendatarios/12345E')
      .send({
        nombre: 'Pepito',
        edad: 20,
        sexo: 'M'
      })
      .expect(200)
      .expect('Content-Type', /application\/json/);

    expect(response.body.sexo).toEqual('M');
  });
});

