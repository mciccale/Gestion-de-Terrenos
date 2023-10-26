import { useState, useEffect } from "react";

const url = "http://localhost:3001";

function App() {
  const [terrains, setTerrains] = useState(null);
  useEffect(() => {
    fetch(`${url}/terrains`)
      .then((res) => res.json())
      .then((data) => {
        setTerrains(data);
        console.log("Data Loaded");
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <main>
      <h1>Gestión de Terrenos</h1>
      <article>
        <h3>Listado de terrenos</h3>
        {terrains ? (
          terrains.map((terrain) => (
            <li key={terrain.id}>
              <strong>{terrain.name}</strong>: {terrain.hectares} ha
            </li>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </article>
    </main>
  );
}

export default App;
