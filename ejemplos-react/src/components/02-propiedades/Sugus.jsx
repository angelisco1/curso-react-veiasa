import PropTypes from 'prop-types'

const styles = {
  div: {
    border: '1px solid black',
    width: '100px',
    height: '100px',
    borderRadius: '5px',
    color: 'white',
    position: 'relative',
    margin: '10px',
    overflow: 'hidden',
  },
  p: {
    textAlign: 'center',
    transformOrigin: 'center center',
    transform: 'rotate(-45deg)',
    position: 'absolute',
    top: '25px',
    left: '30px',
    textShadow: '60px 0px 0px, -60px 0px 0px, -25px 30px 0px, 25px -30px 0px, 30px 30px 0px, -30px -30px 0px, 0px 60px 0px, 0px -60px 0px',
  },
}

const Sugus = (props) => {
  // const sabor = 'limón'
  // const color = 'yellow'
  const { sabor, color } = props


  return (
    <div style={{...styles.div, backgroundColor: color}}>
      <p style={styles.p}>{sabor}</p>
    </div>
  )
}

Sugus.defaultProps = {
  color: 'blue',
  sabor: 'piña'
}

Sugus.propTypes = {
  color: PropTypes.string.isRequired,
  sabor: PropTypes.string.isRequired
}

export default Sugus