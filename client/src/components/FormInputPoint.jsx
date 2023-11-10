import {
    Typography,
    Input
} from "@material-tailwind/react";
const FormInputPoint = ({ limites, setLimites }) => {
    const handleChange = (pos1, pos2, coordenada) => {
        const newLimites = [...limites]
        newLimites[pos1][pos2] = coordenada
        setLimites(newLimites)
    }
    return (
        <div className="flex flex-wrap -mx-3 mb-6">
            <div className="mb-1 flex flex-col gap-6">
                <div className='flex items-center w-max gap-4'>
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Latitud 1:
                    </Typography>
                    <Input
                        size="lg"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                        type="number"
                        step="any"
                        value={limites[0][0]}
                        name="Latitud 1"
                        onChange={({ target }) => handleChange(0, 0, target.value)}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Longitud 1:
                    </Typography>
                    <Input
                        size="lg"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                        type="number"
                        step="any"
                        value={limites[0][1]}
                        name="Longitud 1"
                        onChange={({ target }) => handleChange(0, 1, target.value)}
                    />
                </div>
                <div className='flex items-center w-max gap-4'>
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Latitud 2:
                    </Typography>
                    <Input
                        size="lg"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                        type="number"
                        step="any"
                        value={limites[1][0]}
                        name="Latitud 2"
                        onChange={({ target }) => handleChange(1, 0, target.value)}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Longitud 2
                    </Typography>
                    <Input
                        size="lg"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                        type="number"
                        step="any"
                        value={limites[1][1]}
                        name="Longitud 2"
                        onChange={({ target }) => handleChange(1, 1, target.value)}
                    />
                </div>
                <div className='flex items-center w-max gap-4'>
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Latitud 3:
                    </Typography>

                    <Input
                        size="lg"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                        type="number"
                        step="any"
                        value={limites[2][0]}
                        name="Latitud 3"
                        onChange={({ target }) => handleChange(2, 0, target.value)}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Longitud 3:
                    </Typography>

                    <Input
                        size="lg"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                        type="number"
                        step="any"
                        value={limites[2][1]}
                        name="Longitud 3"
                        onChange={({ target }) => handleChange(2, 1, target.value)}
                    />
                </div>
                <div className='flex items-center w-max gap-4'>
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Latitud 4:
                    </Typography>

                    <Input
                        size="lg"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                        type="number"
                        step="any"
                        value={limites[3][0]}
                        name="Latitud 4"
                        onChange={({ target }) => handleChange(3, 0, target.value)}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Longitud 4:
                    </Typography>

                    <Input
                        size="lg"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                        type="number"
                        step="any"
                        value={limites[3][1]}
                        name="Longitud 4"
                        onChange={({ target }) => handleChange(3, 1, target.value)}
                    />
                </div>
            </div>
        </div>
    )
}

export default FormInputPoint