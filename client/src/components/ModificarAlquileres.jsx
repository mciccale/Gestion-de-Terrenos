import { toast } from "react-toastify";
import { useState } from "react";
import alquileres from "../services/alquileres";
import FormInput from "./FormInput";
import { Card, Button } from "@material-tailwind/react";

const ModificarAlquileres = () => {
  const [alquilerId, setAlquiler_id] = useState(0);
  const [terreno_id, setTerreno_id] = useState(0);
  const [fechaInicioAlquiler, setFechaInicioAlquiler] = useState('');
  const [periodoArrendamiento, setPeriodoArrendamiento] = useState(0);
  const [importeAlquiler, setImporteAlquiler] = useState(0.0);
  const [dniArrendatario, setDniArrendatario] = useState('');


  const handleModifyAlquiler = async (event) => {
    event.preventDefault();
    try {
      const modifyAlquiler = await alquileres.modify({
        alquilerId,
        terreno_id,
        fechaInicioAlquiler,
        periodoArrendamiento,
        importeAlquiler,
        dniArrendatario
      });
      console.log(modifyAlquiler);
      if (modifyAlquiler.length === 0) {
        toast.error("Alquiler no encontrado");
      } else {
        toast.success(<>Modificada con éxito.</>);
      }
    } catch (exception) {
      console.log(exception);
      toast.error(exception.response.data.error);
      toast.error("Alquiler no encontrado");
      console.log("Alquiler no encontrado");
    }
  };

  const handleReset = async (event) => {
    event.preventDefault();
    setAlquiler_id(0);
    setTerreno_id(0);
    setFechaInicioAlquiler('');
    setPeriodoArrendamiento(0);
    setImporteAlquiler(0.0);
    setDniArrendatario('');
  }

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card color="transparent" shadow={false}>
          <form
            className="w-full max-w-screen-lg sm:w-96"
            onSubmit={handleModifyAlquiler}
          >
            <div className="flex flex-wrap -mx-3 -mb-3">
              <div className="mb-1 flex flex-col gap-6">
                <FormInput
                  entry={alquilerId}
                  setEntry={setAlquiler_id}
                  entryName={"ID Alquiler"}
                  type={"number"}
                />
                <FormInput
                  entry={terreno_id}
                  setEntry={setTerreno_id}
                  entryName={"ID Terreno"}
                  type={"number"}
                />
                <FormInput      
                  entry={fechaInicioAlquiler}
                  setEntry={setFechaInicioAlquiler}
                  entryName={"Fecha inicio alquiler"}
                  type={"string"}
                />
                <FormInput  
                  entry={periodoArrendamiento}
                  setEntry={setPeriodoArrendamiento}
                  entryName={"Periodo arrendamiento"}
                  type={"number"}
                />
                <FormInput  
                  entry={importeAlquiler}
                  setEntry={setImporteAlquiler}
                  entryName={"Importe alquiler"}
                  type={"number"}
                />
                <FormInput  
                  entry={dniArrendatario}
                  setEntry={setDniArrendatario}
                  entryName={"DNI arrendatario"}
                  type={"string"}
                />
                <div className="flex items-center w-max gap-4">
                  <Button type="submit" className="mt-6">
                    Modify
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


export default ModificarAlquileres;
