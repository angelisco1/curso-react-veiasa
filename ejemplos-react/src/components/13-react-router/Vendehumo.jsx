import { Link } from 'react-router-dom'

const Vendehumo = (props) => {
  const {nombre, id} = props.vh
  return (
    <li>
      {nombre}
      <Link to={'/vendehumos/' + id}>Ver + info</Link>
    </li>
  )
}

export default Vendehumo