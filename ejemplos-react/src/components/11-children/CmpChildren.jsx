import { useState } from 'react'
import Modal from "./Modal"

const CmpChildren = () => {
  const [mostrarModal, setMostrarModal] = useState(false)
  const [mostrarModal2, setMostrarModal2] = useState(false)


  return (
    <div>
      <h2>Propiedad children</h2>

      <button type="button" onClick={() => setMostrarModal(true)}>Mostrar ingredientes</button>
      <button type="button" onClick={() => setMostrarModal2(true)}>Mostrar logo</button>

      {mostrarModal && <Modal
        title="Lista de ingredientes"
        cerrarModal={() => setMostrarModal(false)}
      >
        <ul>
          <li>Tomate</li>
          <li>Pollo</li>
          <li>Queso</li>
        </ul>
      </Modal>}

      {mostrarModal2 && <Modal title="Logo" cerrarModal={() => setMostrarModal2(false)}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" alt="Logo de React" width="200" />
      </Modal>}


    </div>
  )
}

export default CmpChildren