const app = require("../app");
const supertest = require("supertest");
const api = supertest(app);

const { SQLParcelaModel } = require("../models/psql/parcela.model");
const { SQLTerrainModel } = require("../models/psql/terrain.model");

let newTerrain;
let newParcela;
beforeEach(async () => {
  await SQLParcelaModel.clearParcelas();
  await SQLTerrainModel.clearTerrains();

  newTerrain = await SQLTerrainModel.addTerrain({
    ubicacion: "Madrid",
    hectareas: 100,
    limites: [
      [10, 10],
      [10, 10],
      [10, 10],
      [10, 10],
    ],
  });

  newParcela = await SQLParcelaModel.addParcela({
    terreno_id: newTerrain.id,
    ubicacion: "Móstoles",
    hectareas: 10,
    limites: [
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
    ],
  });
});

describe("Registrar Parcelas", () => {
  test("Registro de Parcela", async () => {
    const response = await api
      .post("/parcelas")
      .send({
        terreno_id: newTerrain.id,
        ubicacion: "Navalcarnero",
        hectareas: 5,
        limites: [
          [2, 2],
          [2, 2],
          [2, 2],
          [2, 2],
        ],
      })
      .expect(200)
      .expect("Content-Type", /application\/json/);

    expect(response.body.id).toBeDefined();
    const get = await api.get('/parcelas/' + response.body.id)
      .expect(200)
      .expect('Content-Type', /application\/json/)
    expect(get.body.id).toEqual(response.body.id)
  });

  test("Terreno inexistente", async () => {
    const response = await api
      .post("/parcelas")
      .send({
        terreno_id: 4,
        ubicacion: "No existente",
        hectareas: 5,
        limites: [
          [10, 10],
          [10, 10],
          [10, 10],
          [10, 10],
        ],
      })
      .expect(400)
      .expect("Content-Type", /application\/json/);

    expect(response.body.code).toEqual("23503");
  });

  test("Coordenadas Mal", async () => {
    await api
      .post("/parcelas")
      .send({
        terreno_id: 4,
        ubicacion: "No existente",
        hectareas: 5,
        limites: [[10], [10, 10], [10, 10], [10, 10]],
      })
      .expect(400);
  });
});
describe("Baja Parcela", () => {
  test("Parcela Existente", async () => {
    await api.delete("/parcelas/" + newParcela.id).expect(204);
  });
  test("Parcela inexistente", async () => {
    await api.delete("/parcelas/" + 4).expect(404);
  });
});