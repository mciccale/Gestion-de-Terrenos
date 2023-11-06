import axios from 'axios'

const baseUrl = 'http://localhost:3001/terrenos'

const eliminate = async bajaTerreno => {
  const response = await axios.delete(`${baseUrl}/${bajaTerreno.terreno_id}`)
  return response.data
}
export default { create, eliminate }