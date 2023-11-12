const app = require("../app");
const supertest = require("supertest");
const api = supertest(app);

const { SQLTerrainModel } = require("../models/psql/terrain.model");

// Antes de cada test borrmamos todos los terrenos de la BD de test
beforeEach(async () => {
  await SQLTerrainModel.clearTerrains();
});

describe("Registrar terreno", () => {
  test("no existente", async () => {
    // Creamos un terreno no existente
    const response = await api
      .post("/terrenos")
      .send({
        ubicacion: "Almudena Grande",
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
  });
});

describe("Borrar Terreno", () => {
  test("existente", async () => {
    // Añadimos un terreno
    const newTerrain = await SQLTerrainModel.addTerrain({
      ubicacion: "Madrid",
      hectareas: 100,
      limites: [
        [10, 10],
        [10, 10],
        [10, 10],
        [10, 10],
      ],
    });


    // Lo borramos y vemos si ha ido bien la operación
    const response = await api
      .delete(`/terrenos/${newTerrain.id}`)
      .send()
      .expect(200)
      .expect("Content-Type", /application\/json/);

    expect(response.body).toBeDefined();
  });
});

describe("Obtener terrenos", () => {
  test("lista de terrenos existentes", async () => {
    // Realizamos una solicitud para obtener la lista de terrenos
    await api
      .post("/terrenos")
      .send({
        ubicacion: "Almudena Grande",
        hectareas: 5,
        limites: [
          [2, 2],
          [2, 2],
          [2, 2],
          [2, 2],
        ],
      })

      await api
      .post("/terrenos")
      .send({
        ubicacion: "Barcelona",
        hectareas: 100,
        limites: [
          [2, 4],
          [2, 3],
          [1, 2],
          [2, 2],
        ],
      })

    const response = await api
      .get("/terrenos")
      .expect(200)
      .expect("Content-Type", /application\/json/);

    // Obtenemos los terrenos
    expect(response.body).toBeDefined();
    expect(response.body.length).toBeGreaterThan(0);
  });
});