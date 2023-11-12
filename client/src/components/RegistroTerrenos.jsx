import { toast } from "react-toastify";
import FormInput from "./FormInput";
import FormInputPoint from "./FormInputPoint";
import { useState } from "react";
import terrenos from "../services/terrenos";
import { Card, Button, Typography, Input } from "@material-tailwind/react";

const RegistroTerrenos = () => {
  const [ubicacion, setUbicacion] = useState("");
  const [hectareas, setHectareas] = useState(0);
  const [limites, setLimites] = useState([
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
  ]);
  const handleNewTerreno = async (event) => {
    event.preventDefault();
    try {
      const newTerreno = await terrenos.create({
        ubicacion,
        hectareas,
        limites,
      });
      toast.success(
        <>Terreno registrado con éxito. Su id es {newTerreno.id}</>
      );
    } catch (exception) {
      toast.error("Formato del Terreno Incorrecto");
      console.log("Formato del Terreno Incorrecto");
    }
  };
  const handleReset = async (event) => {
    event.preventDefault();
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
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card color="transparent" shadow={false}>
        <form
          className="w-full max-w-screen-lg sm:w-96"
          onSubmit={handleNewTerreno}
        >
          <div className="flex flex-wrap -mx-3 -mb-3">
            <div className="mb-1 flex flex-col gap-6">
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
  );
};
export default RegistroTerrenos;
