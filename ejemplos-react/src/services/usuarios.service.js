const getUsuariosByName = (name) => {
  return fetch('http://localhost:3000/usuarios')
    .then(resp => resp.json())
}

export default {
  getUsuariosByName
}