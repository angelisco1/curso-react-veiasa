const CvPreview = (props) => {
  const {nombreCompleto, email} = props

  return (
    <div>
      <h3>Preview del CV</h3>
      <p>CV de {nombreCompleto}</p>
      <p>Email: {email}</p>
    </div>
  )
}

export default CvPreview