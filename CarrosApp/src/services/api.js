import axios from 'react-native-axios'

const BASE_FOTO = 'https://carros.chiquitto.com.br/storage'

const Api = axios.create({
    baseURL: 'https://carros.chiquitto.com.br/api/chiquitto',
    timeout: 10000,
    headers: {'X-Custom-Header': 'foobar'}
  });

  export default Api
  export {BASE_FOTO}