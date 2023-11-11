import axios from "axios";

const baseUrl = "http://localhost:3001/terrenos";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const getById = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`);
  return response.data;
};

const eliminate = async (bajaTerreno) => {
  const response = await axios.delete(`${baseUrl}/${bajaTerreno.terreno_id}`);
  return response.data;
};

const modify = async (modifyTerreno) => {
  const response = await axios.put(
    `${baseUrl}/${modifyTerreno.terreno_id}`,
    modifyTerreno
  );
  return response.data;
};
// Añadir create
export default { getAll, getById, eliminate, modify };
