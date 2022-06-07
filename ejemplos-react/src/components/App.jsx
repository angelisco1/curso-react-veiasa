
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

import CmpUseEffect from "./06-useEffect/CmpUseEffect"

const App = () => {
  return (
    <div>
      <h1>Curso de React</h1>
      {/* <CmpComponentes /> */}
      {/* <CmpPropiedades /> */}
      {/* <CmpCondicionalYListas /> */}
      {/* <CmpEventos /> */}
      {/* <CmpEstados /> */}
      <CmpUseEffect />
    </div>
  )
}

export default App