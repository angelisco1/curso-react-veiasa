import Sugus from '../02-propiedades/Sugus'

const CmpCondicionalYListas = () => {
  const isLoggedIn = false
  const listaSugus = [
    { sabor: 'limón', color: 'yellow', id: 1 },
    { sabor: 'naranja', color: 'orange', id: 2 },
    { sabor: 'fresa', color: 'red', id: 3 },
  ]

  return (
    <div>
      <h2>Renderizado condicional</h2>
      {isLoggedIn ? <button>Logout</button> : <button>Login</button>}
      {/* {
        listaSugus.length > 0 ?
        (<h2>Listas</h2>)
        :
        null
      } */}
      {listaSugus.length > 0 && <h2>Listas</h2>}
      {listaSugus.map((sugus) => <Sugus key={sugus.id} sabor={sugus.sabor} color={sugus.color} />)}
    </div>
  )
}

export default CmpCondicionalYListas