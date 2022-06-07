import { useEffect, useState } from "react"
import UsuariosService from '../../services/usuarios.service'
import Usuario from "./Usuario"

const CmpUseEffect = () => {
  const [usuarios, setUsuarios] = useState([])
  const [filtro, setFiltro] = useState('')

  useEffect(() => {
    UsuariosService.getUsuariosByName(filtro)
      .then(usuarios => {
        console.log('Pasa por aquí')
        setUsuarios(usuarios)
      })
  }, [filtro])

  return (
    <div>
      <h2>useEffect</h2>
      <input type="text" value={filtro} onChange={(e) => setFiltro(e.target.value)} />
      {usuarios.map(usuario => <Usuario key={usuario.id} usuario={usuario} />)}
    </div>
  )
}

export default CmpUseEffect