const FormInputPoint = ({ coordenadas, setCoordenadas}) => {
    const handleChange = (pos1, pos2, coordenada) => {
        const newCoordenadas = [...coordenadas]
        newCoordenadas[pos1][pos2] = coordenada
        setCoordenadas(newCoordenadas)
    }
    return (<>
        <div>
            Latitud 1:
            <input
                id="Latitud 1"
                type="number"
                step="any"
                value={coordenadas[0][0]}
                name="Latitud 1"
                onChange={({ target }) => handleChange(0,0, target.value)}
            />
            Longitud 1:
            <input
                id="Longitud 1"
                type="number"
                step="any"
                value={coordenadas[0][1]}
                name="Longitud 1"
                onChange={({ target }) => handleChange(0,1, target.value)}
            />
        </div>
        <div>
            Latitud 2:
            <input
                id="Latitud 2"
                type="number"
                step="any"
                value={coordenadas[1][0]}
                name="Latitud 2"
                onChange={({ target }) => handleChange(1,0, target.value)}
            />
            Longitud 2:
            <input
                id="Longitud 2"
                type="number"
                step="any"
                value={coordenadas[1][1]}
                name="Longitud 2"
                onChange={({ target }) => handleChange(1,1, target.value)}
            />
        </div>
        <div>
            Latitud 3:
            <input
                id="Latitud 3"
                type="number"
                step="any"
                value={coordenadas[2][0]}
                name="Latitud 3"
                onChange={({ target }) => handleChange(2,0, target.value)}
            />
            Longitud 3:
            <input
                id="Longitud 3"
                type="number"
                step="any"
                value={coordenadas[2][1]}
                name="Longitud 3"
                onChange={({ target }) => handleChange(2,1, target.value)}
            />
        </div>
        <div>
            Latitud 4:
            <input
                id="Latitud 4"
                type="number"
                step="any"
                value={coordenadas[3][0]}
                name="Latitud 4"
                onChange={({ target }) => handleChange(3,0, target.value)}
            />
            Longitud 4:
            <input
                id="Longitud 4"
                type="number"
                step="any"
                value={coordenadas[3][1]}
                name="Longitud 4"
                onChange={({ target }) => handleChange(3,1, target.value)}
            />
        </div>
    </>
    )
}

export default FormInputPoint