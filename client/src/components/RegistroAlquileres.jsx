import { toast } from "react-toastify";
import { useState } from "react";
import FormInput from "./FormInput";
import {
    Button, Card, Input, Typography
} from "@material-tailwind/react";
import alquileres from "../services/alquileres";


const RegistroAlquileres = () => {
    const [dniArrendatario, setDniArrendatario] = useState('');
    const [terrenoId, setTerrenoId] = useState(0)
    const [fechaInicioAlquiler, setFechaInicioAlquiler] = useState('')
    const [periodoArrendamiento, setPeriodoArrendamiento] = useState(0)
    const [importeAlquiler, setImporteAlquiler] = useState(0.0)

    const handleRegistroAlquiler = async (event) => {
        event.preventDefault();
        try {
            await alquileres.create({
                dniArrendatario,
                terrenoId,
                fechaInicioAlquiler,
                periodoArrendamiento,
                importeAlquiler,
            });
            toast.success(<>Alquiler dado de alta con éxito.</>);
        } catch (exception) {
            toast.error('Formato del Alquiler Incorrecto');
            console.log('Formato del Alquiler Incorrecto');
        }
    };

    const handleReset = async (event) => {
        event.preventDefault();
        setDniArrendatario('');
        setTerrenoId(0);
        setFechaInicioAlquiler('');
        setPeriodoArrendamiento(0);
        setImporteAlquiler(0.0);
    };

    return (
        <>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Card color="transparent" shadow={false}>
                    <form
                        className="w-full max-w-screen-lg sm:w-96"
                        onSubmit={handleRegistroAlquiler}
                    >
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="mb-1 flex flex-col gap-6">

                                <FormInput
                                    entry={dniArrendatario}
                                    setEntry={setDniArrendatario}
                                    entryName={"DNI del Arrendatario"}
                                    type={"text"}
                                />
                                <FormInput
                                    entry={terrenoId}
                                    setEntry={setTerrenoId}
                                    entryName={"ID del Terreno"}
                                    type={"number"}
                                />
                                <FormInput
                                    entry={fechaInicioAlquiler}
                                    setEntry={setFechaInicioAlquiler}
                                    entryName={"Fecha de Inicio de alquiler: Formato: XXXX-MM-DD"}
                                    type={"text"}
                                />
                                <FormInput
                                    entry={periodoArrendamiento}
                                    setEntry={setPeriodoArrendamiento}
                                    entryName={"Periodo Arrendamiento"}
                                    type={"number"}
                                />
                                <Typography variant="h6" color="blue-gray" className="-mb-3">
                                    Importe de Alquiler
                                </Typography>
                                <Input
                                    size="lg"
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
                                    type="number"
                                    step="0.01"
                                    value={importeAlquiler}
                                    name="Importe del Alquiler"
                                    onChange={({ target }) => setImporteAlquiler(target.value)}
                                />
                                <div className="flex items-center w-max gap-4">
                                    <Button type="submit" className="mt-6">
                                        Alta Alquiler
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

export default RegistroAlquileres;
