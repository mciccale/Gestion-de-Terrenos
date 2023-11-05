import axios from 'axios'

const baseUrl = 'http://localhost:3001/parcelas'

const create = async newParcela => {
  console.log(axios.defaults.baseURL)
    const response = await axios.post(baseUrl, newParcela)
    return response.data
  }
export default { create }