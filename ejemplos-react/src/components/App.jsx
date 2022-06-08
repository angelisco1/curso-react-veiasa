
// const App = () => {
//   return jsx(
//     'div',
//     {
//       children: jsx(
//         'h1',
//         {
//           children: 'Curso de React sin JSX'
//         }
//       )
//     }
//   )
// }

import CmpUseRef from "./08-useRef/CmpUseRef"

const App = () => {
  return (
    <div>
      <h1>Curso de React</h1>
      {/* <CmpComponentes /> */}
      {/* <CmpPropiedades /> */}
      {/* <CmpCondicionalYListas /> */}
      {/* <CmpEventos /> */}
      {/* <CmpEstados /> */}
      {/* <CmpUseEffect /> */}
      {/* <CmpFormularios /> */}
      <CmpUseRef />
    </div>
  )
}

export default App