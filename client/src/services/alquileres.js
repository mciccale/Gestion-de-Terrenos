import axios from "axios";

const baseUrl = "http://localhost:3001/alquileres";

const create = async (newAlquiler) => {
  const response = await axios.post(baseUrl, newAlquiler);
  return response.data;
}

export default { create };
