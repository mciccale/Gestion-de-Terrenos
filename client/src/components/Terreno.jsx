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

  if (!terreno) {
    return <p>Loading...</p>;
  }

  return terreno.tipo_terreno === "finca" ? (
    <div className="flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl p-10 max-w-5xl w-full m-4">
        <h1 className="text-3xl font-bold mb-2">
          Información de la Finca {terreno.id}
        </h1>
        <div className="text-lg text-gray-700 mb-2">
          <strong>Tipo de finca</strong>: {terreno.tipo_finca}
        </div>
        <div className="text-lg text-gray-700 mb-2">
          <strong>Ubicación</strong>: {terreno.ubicacion}
        </div>
        <div className="text-lg text-gray-700 mb-2">
          <strong>Tamaño</strong>: {terreno.hectareas} hectáreas
        </div>
        <div className="text-lg text-gray-700 mb-2">
          <strong>Alquilada</strong>: {String(terreno.alquilada)}
        </div>
        <p className="text-lg text-gray-700 mb-2">
          <strong>Límites</strong>
        </p>
        {terreno.limites.map(({ x, y }, i) => {
          return (
            <div key={i} className="text-lg text-gray-700 mb-2">
              Punto {i}: ({x}, {y})
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl p-10 max-w-5xl w-full m-4">
        <h1 className="text-3xl font-bold mb-2">
          Información del Latifundio {terreno.id}
        </h1>
        <div className="text-lg text-gray-700 mb-2">
          <strong>Ubicación</strong>: {terreno.ubicacion}
        </div>
        <div className="text-lg text-gray-700 mb-2">
          <strong>Tamaño</strong>: {terreno.hectareas} hectáreas
        </div>
        <div className="text-lg text-gray-700 mb-2">
          <strong>Identificadores de Parcelas</strong>:{" "}
          {terreno.parcelas.map((parcela) => (
            <p key={parcela}>{parcela}</p>
          ))}
        </div>
        <p className="text-lg text-gray-700 mb-2">
          <strong>Límites</strong>
        </p>
        {terreno.limites.map(({ x, y }, i) => {
          return (
            <div key={i} className="text-lg text-gray-700 mb-2">
              Punto {i}: ({x}, {y})
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Terreno;
