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
}
module.exports = { ArrendatarioController };
