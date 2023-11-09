import { toast } from 'react-toastify';
import FormInput from './FormInput';
import FormInputPoint from './FormInputPoint';
import { useState } from 'react';
import parcelas from '../services/parcelas';
import {
    Card,
    Button,
    Typography,
    Input
} from "@material-tailwind/react";
const RegistroParcelas = () => {
    const [terreno_id, setTerreno_id] = useState(0)
    const [ubicacion, setUbicacion] = useState('')
    const [hectareas, setHectareas] = useState(0)
    const [coordenadas, setCoordenadas] = useState([[0, 0], [0, 0], [0, 0], [0, 0]])
    const handleNewParcela = async (event) => {
        event.preventDefault()
        try {
            const newParcela = await parcelas.create({ terreno_id, ubicacion, hectareas, coordenadas })
            toast.success(<>Parcela registrada con éxito. Su id es {newParcela.id}</>);
        } catch (exception) {
            toast.error("Formato de la parcela incorrecto");
            console.log('Formato de Parcela Incorrecto')
        }
    }
    const handleReset = async (event) => {
        event.preventDefault()
        setTerreno_id(0)
        setUbicacion('')
        setHectareas(0)
        setCoordenadas([[0, 0], [0, 0], [0, 0], [0, 0]])
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Card color="transparent" shadow={false}>
                <form className="w-full max-w-screen-lg sm:w-96" onSubmit={handleNewParcela}>
                    <div className="flex flex-wrap -mx-3 -mb-3">
                        <div className="mb-1 flex flex-col gap-6">
                            <FormInput entry={terreno_id} setEntry={setTerreno_id} entryName={"ID Latifundio"} type={"number"} />
                            <FormInput entry={ubicacion} setEntry={setUbicacion} entryName={"Ubicación"} type={"text"} />
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
                            <FormInputPoint coordenadas={coordenadas} setCoordenadas={setCoordenadas} />
                            <div className='flex items-center w-max gap-4'>
                                <Button type="submit" className="mt-6" >
                                    Create
                                </Button>
                                <Button className="mt-6" onClick={handleReset}>
                                    Reset
                                </Button>
                            </div>
                        </div>
                    </div>
                </form >
            </Card>
        </div>
    )
}
export default RegistroParcelas