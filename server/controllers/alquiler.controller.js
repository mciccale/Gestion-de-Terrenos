class AlquilerController {
    constructor({ alquilerModel }) {
        this.alquilerModel = alquilerModel;
    }

    deleteAlquiler = async (req, res) => {
        try {
            const alquiler = await this.alquilerModel.deleteAlquiler(req.params.id);
            if (alquiler.length === 0) {
                res.status(404).send({ error: "Not found" })
            } else {
                res.status(200).send(alquiler[0]);
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ error });
        }
    };

    modifyAlquiler = async (req, res) => {
        try {
          const alquiler = await this.alquilerModel.modifyAlquiler(req.body);
          if (!alquiler) {
            res.status(404).send({ error: "Not found" });
          } else {
            res.status(200).send(alquiler[0]);
          }
        } catch (error) {
          console.log(error);
          res.status(500).json({ error });
        }
      };
}
module.exports = { AlquilerController };