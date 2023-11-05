export class ParcelaController {
    constructor({ parcelaModel }) {
        this.parcelaModel = parcelaModel;
    }
    createParcela = async (req, res) => {
        try {
            console.log(this.parcelaModel)
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
}