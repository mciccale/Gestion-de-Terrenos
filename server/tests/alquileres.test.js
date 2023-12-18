const app = require("../app");
const supertest = require("supertest");
const api = supertest(app);

const { SQLParcelaModel } = require("../models/psql/parcela.model");
const { SQLTerrainModel } = require("../models/psql/terrain.model");
const { SQLAlquilerModel } = require("../models/psql/alquiler.model");
//ARRENDATARIOS
// El unico arrendatario disponible es Juan Carlos con DNI 12345E
let newLatifundio;
let newParcelaAlquilada;
let alquilerParcela;
let newFincaAlquilada;
let alquilerFinca;
let newParcelaSinAlquiler;
let newFincaSinAlquiler;
beforeEach(async () => {
  await SQLTerrainModel.clearTerrains();
  await SQLAlquilerModel.clearAlquileres();

  newLatifundio = await SQLTerrainModel.addTerrain({
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

  newParcelaAlquilada = await SQLParcelaModel.addParcela({
    terrenoId: newLatifundio.id,
    ubicacion: "Con Alquiler",
    hectareas: 10,
    limites: [
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
    ],
  });
  alquilerParcela = await SQLAlquilerModel.addAlquiler({
    terrenoId: newParcelaAlquilada.id,
    fechaInicioAlquiler: "2022-10-5",
    periodoArrendamiento: 12,
    importeAlquiler: 500.5,
    dniArrendatario: "12345E",
  });
  newParcelaSinAlquiler = await SQLParcelaModel.addParcela({
    terrenoId: newLatifundio.id,
    ubicacion: "Sin Alquiler",
    hectareas: 10,
    limites: [
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
    ],
  });
  newFincaAlquilada = await SQLTerrainModel.addTerrain({
    tipoTerreno: "finca",
    tipoFinca: "avicola",
    ubicacion: "Con Alquiler",
    hectareas: 100,
    limites: [
      [20, 20],
      [20, 20],
      [20, 20],
      [20, 20],
    ],
  });
  alquilerFinca = await SQLAlquilerModel.addAlquiler({
    terrenoId: newFincaAlquilada.id,
    fechaInicioAlquiler: "2022-10-5",
    periodoArrendamiento: 12,
    importeAlquiler: 500.5,
    dniArrendatario: "12345E",
  });
  newFincaSinAlquiler = await SQLTerrainModel.addTerrain({
    tipoTerreno: "finca",
    tipoFinca: "ganadera",
    ubicacion: "Sin Alquiler",
    hectareas: 100,
    limites: [
      [20, 20],
      [20, 20],
      [20, 20],
      [20, 20],
    ],
  });
});
describe("Alta Alquiler", () => {
  test("Alta exitosa", async () => {
    // Creamos un arrendatario no existente
    const response = await api
      .post('/alquileres')
      .send({
        terrenoId: newFincaSinAlquiler.id,
        fechaInicioAlquiler: "2002-9-19",
        periodoArrendamiento: 252,
        importeAlquiler: 500.5,
        dniArrendatario: "12345E",
      })
      .expect(201)
      .expect('Content-Type', /application\/json/);

    expect(response.body.id).toBeDefined();
  });
})
/*describe("Eliminar Alquileres", () => {
  test("Baja de Parcela con alquiler", async () => {
    console.log(newParcelaAlquilada);
    const response = await api
      .delete("/alquileres/" + alquilerParcela.id)
      .expect(200)
      .expect("Content-Type", /application\/json/);
    expect(response.body.terreno_id).toEqual(newParcelaAlquilada.id);
    const get = await api
      .get("/parcelas/" + response.body.terreno_id)
      .expect(200)
      .expect("Content-Type", /application\/json/);
    expect(get.body.alquilada).toEqual(false);
  });
  test("Baja de Finca con alquiler", async () => {
    const response = await api
      .delete("/alquileres/" + alquilerFinca.id)
      .expect(200)
      .expect("Content-Type", /application\/json/);
    expect(response.body.terreno_id).toEqual(newFincaAlquilada.id);
    const get = await api
      .get("/terrenos/" + response.body.terreno_id)
      .expect(200)
      .expect("Content-Type", /application\/json/);
    expect(get.body.alquilada).toEqual(false);
  });
  test("Baja de Parcela sin alquiler", async () => {
    await api.delete("/alquileres/" + newParcelaSinAlquiler.id).expect(404);
  });
  test("Baja de Finca sin alquiler", async () => {
    await api.delete("/alquileres/" + newFincaSinAlquiler.id).expect(404);
  });
});
describe("Modificar Alquiler", () => {
  test("Modificar parcela con alquiler", async () => {

    const updatedAlquiler = await SQLAlquilerModel.modifyAlquiler({
      alquilerId: alquilerParcela.id,
      terreno_id: newParcelaAlquilada.id,
      fechaInicioAlquiler: "2023-10-08",
      periodoArrendamiento: 10,
      importeAlquiler: 200.3,
      dniArrendatario: "12345E",
    });
    // alquilerId, terreno_id, fechaInicioAlquiler, periodoArrendamiento, importeAlquiler, dniArrendatario
    console.log(updatedAlquiler);

    console.log(alquilerParcela);

    expect(updatedAlquiler).toBeDefined();
    expect(updatedAlquiler[0].periodo_arrendamiento).toBe(10);
  });
});*/
