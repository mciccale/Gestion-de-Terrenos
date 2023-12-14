class ArrendatarioController {
  constructor({ arrendatarioModel }) {
    this.arrendatarioModel = arrendatarioModel;
  }

  addArrendatario = async (req, res) => {
    try {
      const arrendatario = await this.arrendatarioModel.addArrendatario(
        req.body
      );
      if (!arrendatario) {
        res.status(400).send({ error: 'Bad Request' });
      } else {
        res.status(201).send(arrendatario);
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  };

  deleteArrendatario = async (req, res) => {
    try {
      const arrendatario = await this.arrendatarioModel.deleteArrendatario(req.params.dni);
      if (arrendatario.length === 0) {
        res.status(404).send({ error: "Not found" })
      } else {
        res.status(200).send(arrendatario[0]);
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  };

  modifyArrendatario = async (req, res) => {
    try {
      const arrendatario = await this.arrendatarioModel.modifyArrendatario(req.params.dni, req.body);
      if (arrendatario.length === 0) {
        res.status(404).send({ error: "Not found" });
      } else {
        res.status(200).send(arrendatario[0]);
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  };
}
module.exports = { ArrendatarioController };
