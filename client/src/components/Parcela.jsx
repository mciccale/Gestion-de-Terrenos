import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import parcelasService from "../services/parcelas";

const Parcela = () => {
  const { id } = useParams();
  const [parcela, setParcela] = useState(null);

  useEffect(() => {
    parcelasService.getById(id).then((parcela) => {
      setParcela(parcela);
    });
  }, []);

  return !parcela ? (
    <p>Loading...</p>
  ) : (
    <div className="flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl p-10 max-w-5xl w-full m-4">
        <h1 className="text-3xl font-bold mb-4">
          Información de la Parcela {parcela.id}
        </h1>
        <div className="text-lg text-gray-700 mb-2">
          Ubicación: {parcela.ubicacion}
        </div>
        <div className="text-lg text-gray-700">
          Tamaño: {parcela.hectareas} hectáreas
        </div>
      </div>
    </div>
  );
};

export default Parcela;
