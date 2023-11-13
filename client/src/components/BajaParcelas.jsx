import { toast } from "react-toastify";
import { useState } from "react";
import FormInput from "./FormInput";
import parcelas from "../services/parcelas";
import { Button, Card } from "@material-tailwind/react";

const BajaParcelas = () => {
  const [parcela_id, setParcela_id] = useState(0);

  const handleBajaParcela = async (event) => {
    event.preventDefault();
    try {
      await parcelas.eliminate({ parcela_id });
      toast.success(<>Parcela eliminada con éxito.</>);
    } catch (exception) {
      if (exception.response.status === 404) {
        toast.error("Parcela no encontrada");
      } else {
        toast.error("Ha ocurrido un error en el servidor");
        console.log("Ha ocurrido un error en el servidor");
      }
    }
  };

  const handleReset = async (event) => {
    event.preventDefault();
    setParcela_id(0);
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card color="transparent" shadow={false}>
          <form
            className="w-full max-w-screen-lg sm:w-96"
            onSubmit={handleBajaParcela}
          >
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="mb-1 flex flex-col gap-6">
                <FormInput
                  entry={parcela_id}
                  setEntry={setParcela_id}
                  entryName={"ID Parcela"}
                  type={"number"}
                />
                <div className="flex items-center w-max gap-4">
                  <Button type="submit" className="mt-6">
                    Dar de Baja
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

export default BajaParcelas;
