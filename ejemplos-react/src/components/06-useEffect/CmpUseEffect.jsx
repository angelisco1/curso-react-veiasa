import { useEffect, useState } from "react"
import UsuariosService from '../../services/usuarios.service'
import HoraActual from "./HoraActual"
import Usuario from "./Usuario"

const CmpUseEffect = () => {
  const [mostrarHora, setMostrarHora] = useState(false)
  const [usuarios, setUsuarios] = useState([])
  const [filtro, setFiltro] = useState('')

  const [idSeleccionado, setIdSeleccionado] = useState(null)
  const [infoUsuario, setInfoUsuario] = useState(null)

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

  useEffect(() => {
    if (idSeleccionado) {
      UsuariosService.getUsuarioById(idSeleccionado)
        .then(usuario => {
          setInfoUsuario(usuario)
        })
    }
  }, [idSeleccionado])


  console.log('render', filtro)

  return (
    <div>
      <h2>useEffect</h2>
      <button type="button" onClick={() => setMostrarHora(!mostrarHora)}>{mostrarHora ? 'Ocultar' : 'Mostrar'} hora</button>
      {mostrarHora && <HoraActual />}
      <br />

      <input type="text" value={filtro} onChange={(e) => setFiltro(e.target.value)} />
      {usuarios.map(usuario => <Usuario key={usuario.id} usuario={usuario} setId={setIdSeleccionado} />)}

      <hr />
      <h3>Usuario seleccionado</h3>
      <pre>{JSON.stringify(infoUsuario, null, 2)}</pre>

    </div>
  )
}

export default CmpUseEffect