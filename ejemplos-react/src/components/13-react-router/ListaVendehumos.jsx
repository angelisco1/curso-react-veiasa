import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useSearchParams } from 'react-router-dom'
import Vendehumo from './Vendehumo'

const ListaVendehumos = () => {
  const [qParams, setQParams] = useSearchParams()
  const vendehumos = useSelector(state => {
    console.log(state)
    return state.vendehumosReducer.vendehumos
  })
  // const [vendehumos, setVendehumos] = useState([])


  useEffect(() => {
    const filtro = qParams.get('votos') || null
    // VendehumosService.getVendehumos(filtro)
    //   .then(datos => setVendehumos(datos))
  }, [qParams])

  return (
    <div>
      <h3>Vota a tu vendehumos favorito</h3>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <ul>
          {vendehumos.map(vh => <Vendehumo key={vh.id} vh={vh} />)}
        </ul>

        <section>
          <Outlet />
        </section>
      </div>
    </div>
  )
}

export default ListaVendehumos