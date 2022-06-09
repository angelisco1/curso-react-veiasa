const PRODUCTOS = [
  {id: 1, nombre: 'Perrito piloto', precio: 12},
  {id: 2, nombre: 'Pistola de bolas', precio: 10},
  {id: 3, nombre: 'Tamagochi', precio: 5},
]

// Debería de traer los productos de alguna API
const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(PRODUCTOS)
    }, 1000)
  })
}

export default {
  getProductos
}