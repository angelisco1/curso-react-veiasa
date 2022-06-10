const URL_BASE = 'http://localhost:3000'

const getVendehumos = (filtroVotos) => {
  let url = URL_BASE + '/vendehumos'
  if (filtroVotos) {
    url += '?votos_gte=' + filtroVotos
  }
  return fetch(url)
    .then(resp => resp.json())
}

const getVendehumoById = (id) => {
  return fetch(`${URL_BASE}/vendehumos/${id}`)
    .then(resp => resp.json())
}

export default {
  getVendehumos,
  getVendehumoById
}