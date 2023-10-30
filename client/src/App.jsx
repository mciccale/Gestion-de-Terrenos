import { useState, useEffect } from "react";

const url = "http://localhost:3001";

function App() {
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
    <main>
      <h1>Gestión de Terrenos</h1>
      <article>
        <h3>Listado de terrenos</h3>
        {terrains ? (
          terrains.map((terrain) => (
            <span key={terrain.id}>
              <strong>{terrain.name}</strong>: {terrain.hectares} ha <br />
            </span>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </article>
    </main>
  );
}

export default App;
