const Usuario = (props) => {
  const {name, username, email, id} = props.usuario

  return (
    <div>
      <p>{id} - {name} ({username})</p>
      <p>Email: {email}</p>
      <button>Ver + info</button>
    </div>
  )
}

export default Usuario