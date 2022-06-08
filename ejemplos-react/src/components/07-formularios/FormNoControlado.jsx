const FormNoControlado = () => {



  return (
    <div>
      <h3>No controlado</h3>

      <form onSubmit={(e) => {
        e.preventDefault()
        // console.log(e.target.username.value)
        // console.log(e.target.email.value)
        // console.log(e.target.password.value)
        const datosRegistro = {
          username: e.target.username.value,
          email: e.target.email.value,
          password: e.target.password.value,
        }
        // Petición POST /registro (con los datosRegistro)
        console.log(datosRegistro)
      }}>
        <div>
          <label htmlFor="user">Username:</label>
          <input type="text" id="user" name="username" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" name="password" />
        </div>

        <button type="submit">Registro</button>
      </form>
    </div>
  )
}

export default FormNoControlado