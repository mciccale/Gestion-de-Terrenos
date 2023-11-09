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
                    {terrenos ? (
                        terrenos.map((terrain) => (
                            <span className="list-item" key={terrain.id}>
                                <strong>{terrain.ubicacion}</strong>
                                <br />
                            </span>
                        ))
                    ) : (
                        <p>Loading...</p>
                    )}
                </article>
            </main>
        </>
    )
}
export default ListadoTerrenos