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

const create = async (newTerreno) => {
  const response = await axios.post(baseUrl, newTerreno);
  return response.data;
};

const modify = async (modifyTerreno) => {
  const response = await axios.put(
    `${baseUrl}/${modifyTerreno.terrenoId}`,
    modifyTerreno
  );
  return response.data;
};
export default { getAll, getById, eliminate, create, modify };
