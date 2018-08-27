import random from 'lodash.random'
import {format} from 'money-formatter'

let id = 0

const generateType = () => {
  const types = ['SELIC', 'IPCA', 'Pré-Fixado']

  return types[Math.floor(Math.random() * types.length)]
}

const generateTaxa = () => {
  const taxas = ['SELIC + 0.02%', 'IPCA + 5.73%', '10.91%']

  return taxas[Math.floor(Math.random() * taxas.length)]
}

const generatePrzo = () => {
  const prazo = random(180, 2000)
  return `${prazo} dias`
}

const generateValue = () => {
  const value = random(30, 10000)

  return format('USD', value)
}

const createInvestment = emitter => ({
  id: id++,
  emitter,
  type: generateType(),
  prompt: generatePrzo(),
  tax: generateTaxa(),
  min: generateValue(),
})

const data = [
  createInvestment('Tesouro 2023'),
  createInvestment('Tesouro 2021'),
  createInvestment('Tesouro 2035'),
  createInvestment('Tesouro 2045'),
  createInvestment('Tesouro 2029'),
  createInvestment('Tesouro 2024'),
  createInvestment('Tesouro 2025'),
  createInvestment('Tesouro 2023'),
  createInvestment('Tesouro 2021'),
  createInvestment('Tesouro 2035'),
  createInvestment('Tesouro 2045'),
  createInvestment('Tesouro 2029'),
  createInvestment('Tesouro 2024'),
  createInvestment('Tesouro 2025'),
]

export default data
