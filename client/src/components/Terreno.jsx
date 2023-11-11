import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import terrenosService from "../services/terrenos";

const Terreno = () => {
  const { id } = useParams();
  const [terreno, setTerreno] = useState(null);

  useEffect(() => {
    terrenosService.getById(id).then((terreno) => {
      setTerreno(terreno);
    });
  }, []);

  return !terreno ? (
    <p>Loading...</p>
  ) : (
    <div className="flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl p-10 max-w-5xl w-full m-4">
        <h1 className="text-3xl font-bold mb-4">
          Información del Terreno {terreno.id}
        </h1>
        <div className="text-lg text-gray-700 mb-2">
          Ubicación: {terreno.ubicacion}
        </div>
        <div className="text-lg text-gray-700">
          Tamaño: {terreno.hectareas} hectáreas
        </div>
      </div>
    </div>
  );
};

export default Terreno;
