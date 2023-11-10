import axios from 'axios'

const baseUrl = 'http://localhost:3001/parcelas'

const create = async newParcela => {
  const response = await axios.post(baseUrl, newParcela)
  return response.data
}
const eliminate = async bajaParcela => {
  const response = await axios.delete(`${baseUrl}/${bajaParcela.parcela_id}`)
  return response.data
}

const modify = async modifyParcela => {
  const response = await axios.put(`${baseUrl}/${modifyParcela.parcela_id}`,modifyParcela)
  return response.data
}

export default { create, eliminate, modify }