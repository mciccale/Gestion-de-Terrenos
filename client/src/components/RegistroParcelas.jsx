import { toast } from 'react-toastify';
import FormInputText from './FormInputText';
import FormInputPoint from './FormInputPoint';
import { useState } from 'react';
import parcelas from '../services/parcelas';
const RegistroParcelas = () => {
    const [terreno_id, setTerreno_id] = useState('')
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
        return
    }
    return (
        <>
            <form onSubmit={handleNewParcela}>
                <FormInputText entry={terreno_id} setEntry={setTerreno_id} entryName={"ID Latifundio"} />
                <FormInputText entry={ubicacion} setEntry={setUbicacion} entryName={"Ubicación"} />
                <div>
                    Hectáreas
                    <input
                        id="Hectareas"
                        type="number"
                        step="0.01"
                        value={hectareas}
                        name={`hectareas`}
                        onChange={({ target }) => setHectareas(target.value)}
                    />
                </div>
                <FormInputPoint coordenadas={coordenadas} setCoordenadas={setCoordenadas} />

                <button id='create-button' type="submit">Create</button>
            </form>
        </>
    )
}
export default RegistroParcelas