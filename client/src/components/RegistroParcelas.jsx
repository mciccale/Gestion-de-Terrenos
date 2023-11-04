import { toast } from 'react-toastify';
import FormInputText from './FormInputText';
import FormInputPoint from './FormInputPoint';
import { useState } from 'react';
import parcelas from '../services/parcelas';
const RegistroParcelas = () => {
    const [terreno_id, setTerreno_id] = useState('')
    const [ubicacion, setUbicacion] = useState('')
    const [hectareas, setHectareas] = useState(0)
    const [coordenadas, setCoordenadas] = useState([[0, 0],[0, 0], [0, 0],[0, 0]])
    const handleNewParcela = async (event) => {
        event.preventDefault()
        try {
            await parcelas.create()
            toast.success("Parcela registrada con éxito.");
        } catch (exception) {
            toast.error("Formato de la parcela incorrecto");
            console.log('Formato de Parcela Incorrecto')
        }
        return
    }
    return (
        <>
            <form onSubmit={handleNewParcela}>
                <FormInputText entry={terreno_id} setEntry={setTerreno_id} entryName={"ID Latifundio"} />
                <FormInputText entry={ubicacion} setEntry={setUbicacion} entryName={"Ubicación"} />
                <FormInputText entry={hectareas} setEntry={setHectareas} entryName={"Hectáreas"} />
                <FormInputPoint coordenadas={coordenadas} setCoordenadas={setCoordenadas} />

                <button id='create-button' type="submit">Create</button>
            </form>
        </>
    )
}
export default RegistroParcelas