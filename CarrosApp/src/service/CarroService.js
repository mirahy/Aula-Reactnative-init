import Api from './api'

const getCarros = () => Api.get('/veiculo')
  .then(response => response.data.data)

const getCarro = id => {
  console.log('GET /veiculo/' + id)

  return Api.get('/veiculo/' + id)
  .then(response => response.data.data)
}

const updCarro = carro => {
  console.log('PUT /veiculo/' + carro.id, carro)

  return Api.put('/veiculo/' + carro.id, carro)
  .then(response => response.data.data)
}

export { getCarros, getCarro, updCarro }
