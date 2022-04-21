import Carros from './CarrosDb'

const pegarCarros = () => Carros

const pegarCarro = id => Carros[id]

export {pegarCarros, pegarCarro}