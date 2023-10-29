export class TerrainController {
  constructor({ terrainModel }) {
    this.terrainModel = terrainModel;
  }
  getAllTerrains = async (_req, res) => {
    try {
      const terrains = await this.terrainModel.getAllTerrains();
      res.status(200).json(terrains);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  };
}
