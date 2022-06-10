import { lazy, Suspense, useEffect, useState } from "react";
import { SpinnerDotted } from 'spinners-react';
import ProductosService from '../../services/productos.service';

// import ProcesoPago from './ProcesoPago';
const ProcesoPago = lazy(() => import('./ProcesoPago'))

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

      {/* {listaCompra.length > 0 && <Suspense fallback={<Loading />}> */}
      {listaCompra.length > 0 && <Suspense fallback={<SpinnerDotted />}>
        <ProcesoPago />
      </Suspense>}

    </div>
  )
}

export default CmpSuspense