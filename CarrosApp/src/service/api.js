import axios from 'react-native-axios'

const BASE_FOTO = 'https://carros.chiquitto.com.br/storage/'

let Api = axios.create({
  baseURL: 'https://carros.chiquitto.com.br/api/chiquitto',
  timeout: 10000
})

export default Api
export { BASE_FOTO }
