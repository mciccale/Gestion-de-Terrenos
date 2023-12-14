class AlquilerController {
    constructor({ alquilerModel }) {
        this.alquilerModel = alquilerModel;
    }

    addAlquiler = async (req, res) => {
      try {
        const alquiler = await this.alquilerModel.addAlquiler(req.body);
        if (!alquiler) {
          res.status(400).send({ error: "Bad Request" });
        } else {
          res.status(201).send(alquiler);
        }
      } catch (error) {
        console.log(error);
        res.status(500).json({ error });
      }
    }
    /*
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
      }; */
}
module.exports = { AlquilerController };