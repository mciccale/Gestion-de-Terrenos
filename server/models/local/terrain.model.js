const sampleTerrains = [
  {
    id: 1,
    name: "El Álamo",
    hectares: 300,
  },
  {
    id: 2,
    name: "Esplanada del olivero",
    hectares: 400,
  },
  {
    id: 3,
    name: "Cultivo de zanahorias",
    hectares: 250,
  },
  {
    id: 4,
    name: "Huertito",
    hectares: 50,
  },
];

export class LocalTerrainModel {
  static getAllTerrains() {
    return new Promise((resolve, _reject) => {
      resolve(sampleTerrains);
    });
  }
  static getTerrainById(terrainId) {
    return new Promise((resolve, _reject) => {
      resolve(sampleTerrains.find(({ id }) => id === terrainId));
    });
  }
}
