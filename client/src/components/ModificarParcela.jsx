import { toast } from "react-toastify";
import { useState } from "react";
import parcelas from "../services/parcelas";
import FormInput from "./FormInput";
import FormInputPoint from "./FormInputPoint";
import { Card, Typography, Input, Button } from "@material-tailwind/react";

const ModificarParcela = () => {
  const [parcela_id, setParcela_id] = useState(0);
  const [ubicacion, setUbicacion] = useState("");
  const [hectareas, setHectareas] = useState(0);
  const [limites, setLimites] = useState([
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
  ]);

  const handleModifyParcela = async (event) => {
    event.preventDefault();
    try {
      const modparcela = await parcelas.modify({
        parcela_id,
        ubicacion,
        hectareas,
        limites,
      });
      console.log(modparcela);
      if (modparcela.length === 0) {
        toast.error("Parcela no encontrada");
      } else {
        toast.success(<>Modificada con éxito.</>);
      }
    } catch (exception) {
      toast.error("Parcela no encontrada");
      console.log("Parcela no encontrada");
    }
  };

  const handleReset = async (event) => {
    event.preventDefault();
    setParcela_id(0);
    setUbicacion("");
    setHectareas(0);
    setLimites([
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
    ]);
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card color="transparent" shadow={false}>
          <form
            className="w-full max-w-screen-lg sm:w-96"
            onSubmit={handleModifyParcela}
          >
            <div className="flex flex-wrap -mx-3 -mb-3">
              <div className="mb-1 flex flex-col gap-6">
                <FormInput
                  entry={parcela_id}
                  setEntry={setParcela_id}
                  entryName={"ID parcela"}
                  type={"number"}
                />
                <FormInput
                  entry={ubicacion}
                  setEntry={setUbicacion}
                  entryName={"Ubicación"}
                  type={"text"}
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Hectáreas
                </Typography>
                <Input
                  size="lg"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  type="number"
                  step="0.01"
                  value={hectareas}
                  name={`hectareas`}
                  onChange={({ target }) => setHectareas(target.value)}
                />
                <FormInputPoint limites={limites} setLimites={setLimites} />
                <div className="flex items-center w-max gap-4">
                  <Button type="submit" className="mt-6">
                    Create
                  </Button>
                  <Button className="mt-6" onClick={handleReset}>
                    Reset
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </Card>
      </div>
    </>
  );
};

export default ModificarParcela;
