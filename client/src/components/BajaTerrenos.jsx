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
    const handleReset = async (event) => {
        event.preventDefault()
        setTerreno_id(0)
        setUbicacion('')
        setHectareas(0)
        setCoordenadas([[0, 0], [0, 0], [0, 0], [0, 0]])
    }
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Card color="transparent" shadow={false}></Card>
                <form className="w-full max-w-screen-lg sm:w-96" onSubmit={handleBajaTerreno}>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="mb-1 flex flex-col gap-6">
                            <FormInput entry={terreno_id} setEntry={setTerreno_id} entryName={"ID Terreno"} type={"number"} />
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
                </form>
            </div>
        </>
    )
}
export default bajaTerreno