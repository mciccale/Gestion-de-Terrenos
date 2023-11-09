import { toast } from 'react-toastify';
import { useState } from 'react';
import parcelas from '../services/parcelas';
import FormInput from './FormInput';
import FormInputPoint from './FormInputPoint';

const ModificarParcela = () => {
    const [parcela_id, setParcela_id] = useState(0)
    const [ubicacion, setUbicacion] = useState('')
    const [hectareas, setHectareas] = useState(0)
    const [coordenadas, setCoordenadas] = useState([[0, 0], [0, 0], [0, 0], [0, 0]])
    
    const handleModifyParcela = async (event) => {
        event.preventDefault();
        try {
            const modparcela = await parcelas.modify({parcela_id, ubicacion, hectareas, coordenadas})
            console.log(modparcela);
            if (modparcela.length === 0) {
                toast.error("Parcela no encontrada");
            } else {
                toast.success(<>Modificada con éxito.</>);
            }
        } catch (exception) {
            toast.error("Parcela no encontrada");
            console.log('Parcela no encontrada')
        }
    }   
        return (
            <>
                <form onSubmit={handleModifyParcela}>
                    <FormInput entry={parcela_id} setEntry={setParcela_id} entryName={"ID parcela"} type={"number"} />
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
                    <FormInputPoint coordenadas={coordenadas} setCoordenadas={setCoordenadas} />
                    <button id='modify-button' type="submit">Modify</button>
                </form>
            </>
        )
}

export default ModificarParcela