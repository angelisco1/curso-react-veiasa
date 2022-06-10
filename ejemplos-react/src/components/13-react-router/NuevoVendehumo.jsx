import { useNavigate } from "react-router-dom"

const NuevoVendehumo = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    // Guardar los datos
    navigate('/', {replace: true})
  }

  return (
    <div>
      <h3>Añade otro vendehumo</h3>

      <button onClick={handleClick}>Añadir</button>
    </div>
  )
}

export default NuevoVendehumo