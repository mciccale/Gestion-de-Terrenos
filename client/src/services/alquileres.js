import axios from "axios";

const baseUrl = "http://localhost:3001/alquileres";

const eliminate = async (bajaAlquiler) => {
  const response = await axios.delete(`${baseUrl}/${bajaAlquiler.alquilerId}`);
  return response.data;
};
const modify = async (modifyAlquiler) => {
  const response = await axios.put(
    `${baseUrl}/${modifyAlquiler.alquilerId}`,
    modifyAlquiler
    );
    return response.data;
  };
  const create = async (newAlquiler) => {
    const response = await axios.post(baseUrl, newAlquiler);
    return response.data;
  };
  
export default { eliminate, modify, create };
