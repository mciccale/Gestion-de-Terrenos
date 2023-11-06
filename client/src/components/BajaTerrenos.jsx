import { toast } from 'react-toastify';
import { useState } from 'react';
import FormInput from './FormInput';
import terrenos from '../services/terrenos';
const bajaTerreno = () => {
    const [terreno_id, setTerreno_id] = useState(0)

    const handleBajaTerreno = async (event) => {
        event.preventDefault()
        try {

            const bajaTerreno = await terrenos.eliminate({ terreno_id })
            if (bajaTerreno.length === 0) {
                toast.error("Terreno no encontrado");
            } else {
                toast.success(<>Terreno eliminado con éxito.</>);
            }
        } catch (exception) {
            toast.error("Terreno no encontrado");
            console.log('Terreno no encontrado')
        }
    }
    return (
        <>
            <form onSubmit={handleBajaTerreno}>
                <FormInput entry={terreno_id} setEntry={setTerreno_id} entryName={"ID Terreno"} type={"number"} />
                <button id='eliminate-button' type="submit">Eliminar</button>
            </form>
        </>
    )
}
export default bajaTerreno