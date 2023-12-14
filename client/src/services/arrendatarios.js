import axios from 'axios';

const baseUrl = 'http://localhost:3001/arrendatarios';

const create = async (newArrendatario) => {
  const response = await axios.post(baseUrl, newArrendatario);
  return response.data;
};

const eliminate = async (dni) => {
  const response = await axios.delete(`${baseUrl}/${dni}`);
  return response.data;
};

const modify = async (dni, modifyArrendatario) => {
  const response = await axios.put(`${baseUrl}/${dni}`, modifyArrendatario);
  return response.data;
};

export default { create, eliminate, modify };
