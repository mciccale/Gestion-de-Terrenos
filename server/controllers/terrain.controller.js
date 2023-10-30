export class TerrainController {
  constructor({ terrainModel }) {
    this.terrainModel = terrainModel;
  }
  getAllTerrains = async (_req, res) => {
    try {
      const terrains = await this.terrainModel.getAllTerrains();
      if (terrains.length === 0) {
        res.status(404).json({ error: "Not found" });
      }
      res.status(200).json(terrains);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  };
  getTerrainById = async (req, res) => {
    try {
      const terrain = await this.terrainModel.getTerrainById({
        id: parseInt(req.params.id),
      });
      if (!terrain) {
        res.status(404).json({ error: "Not found" });
      }
      res.status(200).json(terrain);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error });
    }
  };
}
