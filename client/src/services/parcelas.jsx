import axios from 'axios'

const baseUrl = '/parcelas'

const create = async newBlog => {
    const config = {
      headers: { Authorization: token },
    }
  
    const response = await axios.post(baseUrl, newBlog, config)
    return response.data
  }
export default { create }