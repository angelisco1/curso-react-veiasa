import { useState } from "react"
import CvForm from "./CvForm"
import CvPreview from "./CvPreview"

const CmpEstados = () => {
  const [cuenta, setCuenta] = useState(1)
  const [nombre, setNombre] = useState('Charly')
  const [apellidos, setApellidos] = useState('Falco')
  const [email, setEmail] = useState('cfalco@gmail.com')

  // const [isLoggedIn, setIsLoggedIn] = useState(false)
  // const [listaSugus, setListaSugus] = useState([])

  // const [state, setState] = useState({
  //   cuenta: 1,
  //   isLoggedIn: false,
  //   listaSugus: []
  // })

  return (
    <div>
      <h2>Estados</h2>
      <p>Cuenta: {cuenta}</p>
      <button onClick={() => {
          // Batching
          setApellidos('')
          setCuenta(cuenta + 1)
          setCuenta(cuenta + 2)
          // setCuenta((prevCuenta) => prevCuenta + 3)
        }}>+1</button>
      {/* <p>Cuenta: {state.cuenta}</p>
      <button onClick={() => setState({...state, cuenta: state.cuenta + 1})}>+1</button> */}

      <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
        <CvForm
          nombre={nombre}
          apellidos={apellidos}
          email={email}
          setNombre={setNombre}
          setApellidos={setApellidos}
          setEmail={setEmail}
        />
        <CvPreview nombre={nombre} apellidos={apellidos} email={email} />
      </div>

    </div>
  )
}

export default CmpEstados