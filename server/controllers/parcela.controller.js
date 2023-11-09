export class ParcelaController {
    constructor({ parcelaModel }) {
        this.parcelaModel = parcelaModel;
    }
    addParcela = async (req, res) => {
        try {
            const Parcelas = await this.parcelaModel.addParcela(req.body);
            if (!Parcelas) {
                res.status(404).send({ error: "Not found" });
            } else {
                res.status(200).send(Parcelas);
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ error });
        }
    };
    deleteParcela = async (req, res) => {
        try {
            const Parcelas = await this.parcelaModel.deleteParcela(req.params.id);
            res.status(200).send(Parcelas);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error });
        }
    };
    modifyParcela = async (req,res) => {
        try{
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