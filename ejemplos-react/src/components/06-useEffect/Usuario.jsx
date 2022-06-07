const Usuario = (props) => {
  const {name, username, email} = props.usuario

  return (
    <div>
      <p>{name} ({username})</p>
      <p>Email: {email}</p>
    </div>
  )
}

export default Usuario