import FormInput from "./FormInput";

const FormControlado = () => {
  // const [username, setUsername] = useState('aaa')
  // const [erroresUsername, setErroresUsername] = useState([]);
  // const [username, setUsername, erroresUsername] = useInputField('', {minLength: 3, mayus: true})

  // const [email, setEmail, erroresEmail] = useInputField('', {email: true})

  // const [password, setPassword, erroresPassword] = useInputField('', {minLength: 7, mayus: true})


  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')



  // useEffect(() => {
  //   const errores = []
  //   if (username.length < 5) {
  //     errores.push({type: 'min-length', text: 'Necesitas 5 letras'})
  //   }

  //   if (username.toLowerCase() === username) {
  //     errores.push({type: 'mayus', text: 'Necesitas al menos una letra en mayúscula'})
  //   }

  //   setErroresUsername(errores)
  // }, [username])

  return (
    <div>
      <h3>Controlado</h3>

      <form>
        <FormInput label="Username" type="text" initialValue="" validations={{minLength: 3, mayus: true}} />

        <FormInput label="Email" type="email" initialValue="" validations={{email: true}} />

        <FormInput label="Password" type="password" initialValue="" validations={{minLength: 7, mayus: true}} />
        {/* <div>
          <label htmlFor="user">Username:</label>
          <input type="text" id="user" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <ul>
            {erroresUsername.map(error => <li key={error.type}>{error.text}</li>)}
          </ul>
        </div> */}
        {/* <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div> */}

        <button type="submit">Registro</button>
      </form>

    </div>
  )
}

export default FormControlado