import { useState, useEffect } from "react";

const ListadoTerrenos = () => {
    const url = "http://localhost:3001";
    const [terrenos, setTerrenos] = useState([]);
    useEffect(() => {
        (async () => {
            const res = await fetch(`${url}/terrains`);
            const data = await res.json();
            console.log(data);
            setTerrenos(data);
            console.log("Data loaded");
        })();
    }, []);
    return (
        <>
            <h1 className="header">Gestión de Terrenos</h1>
            <main className="main-container">
                <article>
                    <h2 className="list-header">Listado de terrenos</h2>
                    <table border="1">
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Ubicación</th>
                        <th>Hectáreas</th>
                        <th>Limites</th>
                        </tr>
                    </thead>
                    {terrenos ? (
                        <tbody>
                        {terrenos.map((terrain) => (
                          <tr key={terrain.id}>
                            <td>{terrain.id}</td>
                            <td>{terrain.ubicacion}</td>
                            <td>{terrain.hectareas}</td>
                            <td>{JSON.stringify(terrain.limites)}</td>
                          </tr>
                        ))}
                      </tbody>
                    ) : (
                        <p>Loading...</p>
                    )}
                    </table>
                </article>
            </main>
        </>
    )
}
export default ListadoTerrenos