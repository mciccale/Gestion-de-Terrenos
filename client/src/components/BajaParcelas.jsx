import { toast } from 'react-toastify';
import { useState } from 'react';
import FormInput from './FormInput';
import parcelas from '../services/parcelas';
const bajaParcela = () => {
    const [parcela_id, setParcela_id] = useState(0)

    const handleBajaParcela = async (event) => {
        event.preventDefault()
        try {

            const bajaParcela = await parcelas.eliminate({ parcela_id })
            if (bajaParcela.length === 0) {
                toast.error("Parcela no encontrada");
            } else {
                toast.success(<>Parcela eliminada con éxito.</>);
            }
        } catch (exception) {
            toast.error("Parcela no encontrada");
            console.log('Parcela no encontrada')
        }
    }
    return (
        <>
            <form onSubmit={handleBajaParcela}>
                <FormInput entry={parcela_id} setEntry={setParcela_id} entryName={"ID Parcela"} type={"number"} />
                <button id='eliminate-button' type="submit">Eliminar</button>
            </form>
        </>
    )
}
export default bajaParcela