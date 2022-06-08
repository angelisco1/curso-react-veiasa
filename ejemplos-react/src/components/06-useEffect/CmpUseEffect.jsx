import { useEffect, useState } from "react"
import UsuariosService from '../../services/usuarios.service'
import HoraActual from "./HoraActual"
import Usuario from "./Usuario"

const CmpUseEffect = () => {
  const [mostrarHora, setMostrarHora] = useState(false)
  const [usuarios, setUsuarios] = useState([])
  const [filtro, setFiltro] = useState('')

  useEffect(() => {
    UsuariosService.getUsuariosFiltrados(filtro)
      .then(listaUsuarios => {
        console.log('Pasa por aquí')
        setUsuarios(listaUsuarios)
      })
      console.log('useEffect', filtro)

      return () => {
        console.log('useEffect return', filtro)
      }
    }, [filtro])

  useEffect(() => {
    document.title = 'Usuarios con: ' + filtro
  }, [filtro])

  console.log('render', filtro)

  return (
    <div>
      <h2>useEffect</h2>
      <button type="button" onClick={() => setMostrarHora(!mostrarHora)}>{mostrarHora ? 'Ocultar' : 'Mostrar'} hora</button>
      {mostrarHora && <HoraActual />}
      <br />

      <input type="text" value={filtro} onChange={(e) => setFiltro(e.target.value)} />
      {usuarios.map(usuario => <Usuario key={usuario.id} usuario={usuario} />)}

      <hr />
      <h3>Usuario seleccionado</h3>
      <pre>{JSON.stringify(usuarios[3], null, 2)}</pre>

    </div>
  )
}

export default CmpUseEffect