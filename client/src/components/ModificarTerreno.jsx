import { toast } from 'react-toastify';
import { useState } from 'react';
import terrenos from '../services/terrenos';
import FormInput from './FormInput';
import FormInputPoint from './FormInputPoint';

const   ModificarTerreno = () => {
    const [terreno_id, setTerreno_id] = useState(0)
    const [ubicacion, setUbicacion] = useState('')
    const [hectareas, setHectareas] = useState(0)
    const [limites, setLimites] = useState([[0, 0], [0, 0], [0, 0], [0, 0]])
    
    const handleModifyTerreno = async (event) => {
        event.preventDefault();
        try {
            const modTerreno = await terrenos.modify({terreno_id, ubicacion, hectareas, limites})
            if (modTerreno.length === 0) {
                toast.error("Terreno no encontrado");
            } else {
                toast.success(<>Modificada con éxito.</>);
            }
        } catch (exception) {
            toast.error("Terreno no encontrado");
            console.log('Terreno no encontrado')
        }
    }   
        return (
            <>
                <form onSubmit={handleModifyTerreno}>
                    <FormInput entry={terreno_id} setEntry={setTerreno_id} entryName={"ID Terreno"} type={"number"} />
                    <FormInput entry={ubicacion} setEntry={setUbicacion} entryName={"Ubicación"} type={"text"} />
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
                    <FormInputPoint coordenadas={limites} setCoordenadas={setLimites} />
                    <button id='modify-button' type="submit">Modify</button>
                </form>
            </>
        )
}

export default ModificarTerreno