import { CREAR_VENDEHUMO, INICIALIZAR_VENDEHUMOS } from './action-types';

export const inicializarVendehumos = (vendehumos) => {
  return {
    type: INICIALIZAR_VENDEHUMOS,
    payload: vendehumos
  }
}

export const crearVendehumo = (nuevoVendehumo) => {
  return {
    type: CREAR_VENDEHUMO,
    payload: nuevoVendehumo
  }
}


// {
//   type: '',
//   payload: {}
// }
