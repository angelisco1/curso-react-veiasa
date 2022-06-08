const getUsuariosFiltrados = (filtro) => {
  return fetch('http://localhost:3000/usuarios?q=' + filtro)
    .then(resp => resp.json())
}

const getUsuarioById = (id) => {
  return fetch('http://localhost:3000/usuarios/' + id)
    .then(resp => resp.json())
}

export default {
  getUsuariosFiltrados,
  getUsuarioById
}