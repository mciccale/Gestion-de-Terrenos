const app = require("../app");
const supertest = require("supertest");
const api = supertest(app);

const { SQLParcelaModel } = require("../models/psql/parcela.model");
const { SQLTerrainModel } = require("../models/psql/terrain.model");
const { SQLAlquilerModel } = require("../models/psql/alquiler.model")
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
        terreno_id: newLatifundio.id,
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
        terreno_id: newParcelaAlquilada.id,
        fecha_inicio_alquiler: '2022-10-5',
        periodo_arrendamiento: 12,
        importe_alquiler: 500.5,
        dni_arrendatario: '12345E'
    });
    newParcelaSinAlquiler = await SQLParcelaModel.addParcela({
        terreno_id: newLatifundio.id,
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
        terreno_id: newFincaAlquilada.id,
        fecha_inicio_alquiler: '2022-10-5',
        periodo_arrendamiento: 12,
        importe_alquiler: 500.5,
        dni_arrendatario: '12345E'
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
describe("Eliminar Alquileres", () => {
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
        await api
            .delete("/alquileres/" + newParcelaSinAlquiler.id)
            .expect(404)
    });
    test("Baja de Finca sin alquiler", async () => {
        await api
            .delete("/alquileres/" + newFincaSinAlquiler.id)
            .expect(404)
    });
})