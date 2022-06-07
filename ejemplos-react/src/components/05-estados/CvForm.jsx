const CvForm = (props) => {
  const {nombre, apellidos, email, setNombre, setApellidos, setEmail} = props

  return (
    <div>
      <h3>Form CV</h3>
      <div>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      </div>
      <div>
        <label htmlFor="apellidos">Apellidos:</label>
        <input type="text" id="apellidos" value={apellidos} onChange={(e) => setApellidos(e.target.value)} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
    </div>
  )
}

export default CvForm