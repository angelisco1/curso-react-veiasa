import { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import { delToken, getToken, setToken } from '../../services/auth.service'
import VendehumosService from '../../services/vendehumos.service'
import { inicializarVendehumos } from '../../store/vendehumos/actions'
import Error from './Error'
import InfoVendehumo from './InfoVendehumo'
import ListaVendehumos from './ListaVendehumos'
import NuevoVendehumo from './NuevoVendehumo'


const handleClickLogin = (setIsLoggedIn) => {
  setToken(Math.random())
  setIsLoggedIn(true)
}

const CmpRouting = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    VendehumosService.getVendehumos()
      .then(datos => {
        const action = inicializarVendehumos(datos)
        dispatch(action)
      })
  }, [])

  useEffect(() => {
    const token = getToken()
    setIsLoggedIn(Boolean(token))
  }, [])

  const handleClickLogout = useCallback(() => {
    delToken()
    setIsLoggedIn(false)
  }, [])

  return (
    <div>
      <h2>React router</h2>

      {isLoggedIn ? <button onClick={handleClickLogout}>Logout</button> : <button onClick={() => handleClickLogin(setIsLoggedIn)}>Login</button>}

      <Link to="/">Inicio</Link>
      <Link to="/vendehumos?votos=30">Vendehumos + votados</Link>
      <Link to="/nuevo-vendehumo">Añade tu vendehumo</Link>


      {/* Las siguientes rutas deberían de estar en el App.jsx */}
      <Routes>
        <Route
          path="/vendehumos"
          element={<ListaVendehumos />}>
          <Route
            path=":id"
            element={<InfoVendehumo />} />
        </Route>
        {isLoggedIn && <Route
          path="/nuevo-vendehumo"
          element={<NuevoVendehumo />} />}
        <Route
          path="/"
          element={<Navigate to="/vendehumos" replace={true} />} />
        <Route
          path="*"
          element={<Error />} />
      </Routes>

    </div>
  )
}

export default CmpRouting