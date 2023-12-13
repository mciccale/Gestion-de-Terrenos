import axios from 'axios';

const baseUrl = 'http://localhost:3001/arrendatarios';

const create = async (newArrendatario) => {
  const response = await axios.post(baseUrl, newArrendatario);
  return response.data;
};

export default { create };
