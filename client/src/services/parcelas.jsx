import axios from 'axios'

const baseUrl = 'http://localhost:3001/terrains'

const create = async newParcela => {
  console.log(axios.defaults.baseURL)
    const response = await axios.get(baseUrl)
    return response.data
  }
export default { create }