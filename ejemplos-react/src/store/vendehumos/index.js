
import { CREAR_VENDEHUMO, INICIALIZAR_VENDEHUMOS } from './action-types';


const initialState = {
  vendehumos: []
}

const guardarVendehumo = (state, nuevoVendehumo) => {
  const vendehumosActualizados = [...state.vendehumos, nuevoVendehumo]
  return {
    vendehumos: vendehumosActualizados
  }
}

export const vendehumosReducer = (state = initialState, action) => {
  switch (action.type) {
    case INICIALIZAR_VENDEHUMOS:
      return { vendehumos: action.payload }
    case CREAR_VENDEHUMO:
      return guardarVendehumo(state, action.payload)
    default:
      return state;
  }
}