const getUsuariosFiltrados = (filtro) => {
  return fetch('http://localhost:3000/usuarios?q=' + filtro)
    .then(resp => resp.json())
}

export default {
  getUsuariosFiltrados
}