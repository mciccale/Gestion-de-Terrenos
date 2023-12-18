import { toast } from "react-toastify";
import { useState } from "react";
import FormInput from "./FormInput";
import { Button, Card } from "@material-tailwind/react";
import arrendatarios from "../services/arrendatarios";

const BajaArrendatarios = () => {
  const [dni, setDni] = useState('');

  const handleBajaArrendatario = async (event) => {
    event.preventDefault();
    try {
      await arrendatarios.eliminate(dni);
      toast.success(<>Arrendatario eliminado con éxito.</>);
    } catch (exception) {
      if (exception.response.status === 404) {
        toast.error("Arrendatario no encontrado");
      } else {
        toast.error("Ha ocurrido un error en el servidor");
        console.log("Ha ocurrido un error en el servidor");
      }
    }
  };

  const handleReset = async (event) => {
    event.preventDefault();
    setDni('');
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card color="transparent" shadow={false}>
          <form
            className="w-full max-w-screen-lg sm:w-96"
            onSubmit={handleBajaArrendatario}
          >
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="mb-1 flex flex-col gap-6">
                <FormInput
                  entry={dni}
                  setEntry={setDni}
                  entryName={"DNI Arrendatario"}
                  type={"string"}
                />
                <div className="flex items-center w-max gap-4">
                  <Button type="submit" className="mt-6">
                    Eliminar
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

export default BajaArrendatarios;
