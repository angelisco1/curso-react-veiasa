import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { SpinnerDotted } from 'spinners-react';
import VendehumosService from "../../services/vendehumos.service";

const InfoVendehumo = () => {
  const { id } = useParams()
  const [info, setInfo] = useState(null)

  useEffect(() => {
    VendehumosService.getVendehumoById(id)
      .then(datos => setInfo(datos))
  })

  return (
    <div>
      {info ? (<>
        <h4>{info.nombre}</h4>
        <p>{info.descripcion}</p>
        <button>{info.votos} ⬆️</button>
      </>) : <p><SpinnerDotted />Cargando info...</p>}
    </div>
  )
}

export default InfoVendehumo