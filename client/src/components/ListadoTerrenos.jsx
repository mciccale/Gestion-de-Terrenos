import { useState, useEffect } from "react";

const ListadoTerrenos = () => {
    const url = "http://localhost:3001";
    const [terrains, setTerrains] = useState(null);
    useEffect(() => {
        (async () => {
            const res = await fetch(`${url}/terrains`);
            const data = await res.json();
            setTerrains(data);
            console.log("Data loaded");
        })();
    }, []);
    return (
        <>
            <h1 className="header">Gestión de Terrenos</h1>
            <main className="main-container">
                <article>
                    <h2 className="list-header">Listado de terrenos</h2>
                    {terrains ? (
                        terrains.map((terrain) => (
                            <span className="list-item" key={terrain.id}>
                                <strong>{terrain.name}</strong>
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