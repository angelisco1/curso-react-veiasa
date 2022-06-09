import { Suspense, useEffect, useState } from "react";
import ProductosService from '../../services/productos.service';
import ProcesoPago from './ProcesoPago';

const CmpSuspense = () => {
  const [mostrarProcesoPago, setMostrarProcesoPago] = useState(false)
  const [listaProductos, setListaProductos] = useState([])
  const [listaCompra, setListaCompra] = useState([])

  useEffect(() => {
    ProductosService.getProductos()
      .then((productos) => {
        setListaProductos(productos)
      })
  }, [])

  useEffect(() => {
    if (!mostrarProcesoPago) {
      setMostrarProcesoPago(true)
    }
  }, [listaCompra])

  return (
    <div>
      <h2>Suspense</h2>

      <ul>
        {listaProductos.map(p => {
          return (
            <li key={p.id}>
              {p.nombre} ({p.precio}€) - <button type="button" onClick={() => setListaCompra([...listaCompra, p])}>Comprar</button>
            </li>
          )
        })}
      </ul>

      <Suspense>
        <ProcesoPago />
      </Suspense>

    </div>
  )
}

export default CmpSuspense