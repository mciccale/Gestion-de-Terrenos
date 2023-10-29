import { randomUUID } from "node:crypto";

const sampleTerrains = [
  {
    id: randomUUID(),
    name: "El Álamo",
    hectares: 300,
  },
  {
    id: randomUUID(),
    name: "Esplanada del olivero",
    hectares: 400,
  },
  {
    id: randomUUID(),
    name: "Cultivo de zanahorias",
    hectares: 250,
  },
  {
    id: randomUUID(),
    name: "Huertito",
    hectares: 50,
  },
];

export class LocalTerrainModel {
  static getAllTerrains() {
    return new Promise((resolve, _reject) => {
      if (sampleTerrains) {
        resolve(sampleTerrains);
      } else {
        resolve([]);
      }
    });
  }
}
