import { Fragment, useEffect, useReducer } from 'react'

const styles = {
  caja: {
    width: '100px',
    height: '100px',
    border: '1px solid black',
    position: 'relative'
  }
}

const initialState = {
  posH: 0,
  posV: 0
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'ArrowRight':
      return {...state, posH: state.posH + 10}
    case 'ArrowLeft':
      return {...state, posH: state.posH - 10}
    case 'ArrowUp':
      return {...state, posV: state.posV - 10}
    case 'ArrowDown':
      return {...state, posV: state.posV + 10}
    default:
      return state
  }
}


const CmpUseReducer = () => {
  // const [posH, setPosH] = useState(0)
  // const [posV, setPosV] = useState(0)
  const [posicion, dispatch] = useReducer(reducer, initialState)

  // const changeState = useCallback((e) => {
  //   const code = e.key
  //   if (code === 'ArrowRight') {
  //     setPosH((prevPosH) => prevPosH + 10)
  //   }
  //   if (code === 'ArrowLeft') {
  //     setPosH((prevPosH) => prevPosH - 10)
  //   }
  //   if (code === 'ArrowUp') {
  //     setPosV((prevPosV) => prevPosV - 10)
  //   }
  //   if (code === 'ArrowDown') {
  //     setPosV((prevPosV) => prevPosV + 10)
  //   }
  // }, [])

  const dispatchKeyPressed = (e) => {
    dispatch({type: e.key})
  }

  useEffect(() => {
    window.addEventListener('keydown', dispatchKeyPressed)
    return () => window.removeEventListener('keydown', dispatchKeyPressed)

    // window.addEventListener('keydown', changeState)
    // return () => window.removeEventListener('keydown', changeState)
  }, [])

  return (
    <Fragment>
      <h2>useReducer</h2>

      <div style={{
        ...styles.caja,
        top: posicion.posV + 'px',
        left: posicion.posH + 'px'
      }}></div>
    </Fragment>
  )
}

export default CmpUseReducer