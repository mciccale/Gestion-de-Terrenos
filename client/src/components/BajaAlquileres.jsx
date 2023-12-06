import { toast } from "react-toastify";
import { useState } from "react";
import FormInput from "./FormInput";
import { Button, Card } from "@material-tailwind/react";
import alquileres from "../services/alquileres";

const BajaAlquileres = () => {
  const [alquilerId, setAlquilerId] = useState(0);

  const handleBajaAlquiler = async (event) => {
    event.preventDefault();
    try {
      await alquileres.eliminate({ alquilerId });
      toast.success(<>Alquiler eliminado con éxito.</>);
    } catch (exception) {
      if (exception.response.status === 404) {
        toast.error("Alquiler no encontrado");
      } else {
        toast.error("Ha ocurrido un error en el servidor");
        console.log("Ha ocurrido un error en el servidor");
      }
    }
  };

  const handleReset = async (event) => {
    event.preventDefault();
    setAlquilerId(0);
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card color="transparent" shadow={false}>
          <form
            className="w-full max-w-screen-lg sm:w-96"
            onSubmit={handleBajaAlquiler}
          >
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="mb-1 flex flex-col gap-6">
                <FormInput
                  entry={alquilerId}
                  setEntry={setAlquilerId}
                  entryName={"ID Alquiler"}
                  type={"number"}
                />
                <div className="flex items-center w-max gap-4">
                  <Button type="submit" className="mt-6">
                    Eliminar Alquiler
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

export default BajaAlquileres;
