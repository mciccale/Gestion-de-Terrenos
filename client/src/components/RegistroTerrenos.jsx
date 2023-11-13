import { toast } from "react-toastify";
import FormInput from "./FormInput";
import FormInputPoint from "./FormInputPoint";
import { useState } from "react";
import terrenos from "../services/terrenos";
import { Card, Button, Typography, Input, Select, Option } from "@material-tailwind/react";

const RegistroTerrenos = () => {
  const [ubicacion, setUbicacion] = useState("");
  const [hectareas, setHectareas] = useState(0);
  const [limites, setLimites] = useState([
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
  ]);
  const [tipoTerreno, setTipoTerreno] = useState("")
  const [tipoFinca, setTipoFinca] = useState("")
  const handleNewTerreno = async (event) => {
    event.preventDefault();
    try {
      const newTerreno = await terrenos.create({
        tipoFinca,
        tipoTerreno,
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
    setTipoTerreno("");
    setFinca("");
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
              <Typography variant="h6" color="blue-gray">
                Tipo de Terreno
              </Typography>
              <Select label="Tipo de Terreno" onChange={(element) => { console.log(element); setTipoTerreno(element) }}>
                <Option value="Latifundio">Latifundio</Option>
                <Option value="Finca">Finca</Option>
              </Select>
              {tipoTerreno == "Finca" ? <div>
                <Typography variant="h6" color="blue-gray">
                  Tipo de Finca
                </Typography>
                <Select label="Tipo de Finca" onChange={(element) => setTipoFinca(element)}>
                  <Option value="avicola">Avícola</Option>
                  <Option value="ganadera">Ganadera</Option>
                </Select>
              </div> : <></>
              }
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
