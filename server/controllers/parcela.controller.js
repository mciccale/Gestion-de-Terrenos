class ParcelaController {
  constructor({ parcelaModel }) {
    this.parcelaModel = parcelaModel;
  }
  getParcelaById = async (req, res) => {
    try {
      const parcela = await this.parcelaModel.getParcelaById({
        parcelaId: parseInt(req.params.id),
      });
      if (!parcela) {
        res.status(404).send({ error: "Not found" });
      } else {
        res.status(200).send(parcela);
      }
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: "Not found" });
    }
  };
  addParcela = async (req, res) => {
    try {
      const parcelas = await this.parcelaModel.addParcela(req.body);
      if (parcelas.severity) {
        res.status(400).send(parcelas);
      } else {
        res.status(200).send(parcelas);
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  };
  deleteParcela = async (req, res) => {
    try {
      const parcela = await this.parcelaModel.deleteParcela(req.params.id);
      console.log(parcela)
      if (parcela.length===0) {
        res.status(404).send({ error: "Not found" })
      } else {
        res.status(204).send();
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  };
  modifyParcela = async (req, res) => {
    try {
      const parcela = await this.parcelaModel.modifyParcela(req.body);
      if (!parcela) {
        res.status(404).send({ error: "Not found" });
      } else {
        res.status(200).send(parcela);
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  };
}

module.exports = { ParcelaController };
