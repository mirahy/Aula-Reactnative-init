import Carros from './CarrosDb'
import Api from './api'

const pegarCarros = () => {
    return Api.get('/veiculo')
    .then(resposta => resposta.data.data)
}

const pegarCarro = id => Carros[id]

export {pegarCarros, pegarCarro}