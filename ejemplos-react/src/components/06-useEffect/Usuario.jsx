const Usuario = ({usuario, setId}) => {
  const {name, username, email, id} = usuario

  return (
    <div>
      <p>{id} - {name} ({username})</p>
      <p>Email: {email}</p>
      <button type="button" onClick={() => setId(id)}>Ver + info</button>
    </div>
  )
}

export default Usuario