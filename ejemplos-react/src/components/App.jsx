
import CmpComponentes from './01-componentes/CmpComponentes';
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

const App = () => {
  return (
    <div>
      <h1>Curso de React</h1>
      <CmpComponentes />
    </div>
  )
}

export default App