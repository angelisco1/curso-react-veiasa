const styles = {
  backdrop: {
    position: 'absolute',
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(10, 10, 10, 0.3)',
    top: 0,
    left: 0
  },
  modal: {
    position: 'relative',
    margin: '25vh auto',
    border: '1px solid black',
    width: '40%',
    backgroundColor: 'white'
  },
  header: {
    textAlign: 'center',
    fontWeigth: 'bold',
    borderBottom: '1px solid black',
  },
  content: {
    padding: '15px'
  }
}


const Modal = (props) => {
  const {title, children, cerrarModal} = props

  return (
    <div style={styles.backdrop}>
      <div style={styles.modal}>
        <div style={styles.header}>
          <h3>{title}</h3>
          <button type="button" onClick={cerrarModal}>Cerrar</button>
        </div>
        <div style={styles.content}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal