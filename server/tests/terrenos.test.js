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
        tipoTerreno: "latifundio",
        ubicacion: "Almudena Grande",
        hectareas: 5,
        limites: [
          [2, 2],
          [2, 2],
          [2, 2],
          [2, 2],
        ],
      })
      .expect(201)
      .expect("Content-Type", /application\/json/);

    expect(response.body.id).toBeDefined();
  });
});

describe("Borrar Terreno", () => {
  test("existente", async () => {
    // Añadimos un terreno
    const newTerrain = await SQLTerrainModel.addTerrain({
      tipoTerreno: "latifundio",
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
        tipoTerreno: "finca",
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
        tipoTerreno: "latifundio",
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

describe("Modificar terrenos", () => {
  test("lista de terrenos existentes", async () => {
    
    const newTerrain = await SQLTerrainModel.addTerrain({
      tipoTerreno: "latifundio",
      ubicacion: "Madrid",
      hectareas: 100,
      limites: [
        [10, 10],
        [10, 10],
        [10, 10],
        [10, 10],
      ],
    });

    expect(newTerrain).toBeDefined();
    expect(newTerrain.hectareas).toBe(100);
    expect(newTerrain.ubicacion).toBe("Madrid");

    const updatedTerrain = await SQLTerrainModel.modifyTerrain({
      terrenoId: newTerrain.id,
      ubicacion: "Barcelona",
      hectareas: 150,
      limites: [
        [15, 15],
        [15, 15],
        [15, 15],
        [15, 15],
      ],
    });

    // Get the specific modified terrain from the array
    const modifiedTerrains = await api
      .get("/terrenos")
      .expect(200)
      .expect("Content-Type", /application\/json/);

    const modifiedTerrain = modifiedTerrains.body.find(t => t.id === newTerrain.id);

    expect(modifiedTerrain).toBeDefined();
    expect(modifiedTerrain.hectareas).toBe(150); 
    expect(modifiedTerrain.ubicacion).toBe("Barcelona");
  });
});



