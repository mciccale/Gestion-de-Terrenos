import { toast } from "react-toastify";
import { useState } from "react";
import FormInput from "./FormInput";
import { Button, Card } from "@material-tailwind/react";
import alquileres from "../services/alquileres";

const AltaAlquileres = () => {
    const[terreno_id, setTerreno_id] = useState(0);
    const[fecha_inicio_alquiler, setFechaInicioAlquiler] = useState(new Date());
    const[periodo_arrendamiento, setPeriodo] = useState(0);
    const[importe_alquiler, setImporte] = useState(0);
    const[dni_arrendatario, setDNI] = useState("");

const handleNewAlquiler = async (event) => {
    event.preventDefault();
    try {
      const response = await alquileres.create({
        terreno_id,
        fecha_inicio_alquiler,
        periodo_arrendamiento,
        importe_alquiler,
        dni_arrendatario
      });
      toast.success(<>Alquiler dado de alta con éxito. Su id es {response.id}</>);
    } catch (exception) {
        toast.error("Ha ocurrido un error en el servidor");
        console.log("Ha ocurrido un error en el servidor");
      }
  };

  const handleReset = async (event) => {
    event.preventDefault();
    setTerreno_id(0);
    setFechaInicioAlquiler(new Date());
    setPeriodo(0);
    setImporte(0);
    setDNI("");
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card color="transparent" shadow={false}>
        <form
          className="w-full max-w-screen-lg sm:w-96"
          onSubmit={handleNewAlquiler}
        >
          <div className="flex flex-wrap -mx-3 -mb-3">
            <div className="mb-1 flex flex-col gap-6">
              <FormInput
                entry={terreno_id}
                setEntry={setTerreno_id}
                entryName={"ID Terreno"}
                type={"number"}
              />
              {/*Poner un tipo 'date', no 'number'*/}
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Fecha de inicio de alquiler
              </Typography>
              <Input
                size="lg"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                type="number"
                step="0.01"
                value={fecha_inicio_alquiler}
                name={`fecha_inicio_alquiler`}
                onChange={({ target }) => setFechaInicioAlquiler(target.value)}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Peridodo de arrendamiento
              </Typography>
              <Input
                size="lg"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                type="number"
                step="0.01"
                value={periodo_arrendamiento}
                name={`periodo_arrendamiento`}
                onChange={({ target }) => setPeriodo(target.value)}
              />
              {/*Introducir importe?*/}
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Importe
              </Typography>
              <Input
                size="lg"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                type="number"
                step="0.01"
                value={importe_alquiler}
                name={`importe_alquiler`}
                onChange={({ target }) => setPeriodo(target.value)}
              />
              {/*DNI arrendatario cuando esten creados los arrendatarios*/}
              {/* <FormInput
                entry={dni_arrendatario}
                setEntry={setDNI}
                entryName={"DNI arrendatario"}
                type={"text"}
              /> */}
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
  );
};

  export default AltaAlquileres;
