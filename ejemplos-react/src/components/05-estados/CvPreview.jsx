const CvPreview = (props) => {
  const {nombre, apellidos, email} = props

  return (
    <div>
      <h3>Preview del CV</h3>
      <p>CV de {nombre} {apellidos}</p>
      <p>Email: {email}</p>
    </div>
  )
}

export default CvPreview