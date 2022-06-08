import { useEffect, useState } from 'react';

const HoraActual = () => {
  const [hora, setHora] = useState(null)

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nuevaHora = new Date().toLocaleTimeString()
      console.log(nuevaHora)
      setHora(nuevaHora)
    }, 3000)
    console.log('useEffect', hora)

    return () => {
      console.log('useEffect return', hora)
      clearInterval(intervalId)
    }
  }, [])

  // useEffect(() => {
  //   const intervalId = setTimeout(() => {
  //     const nuevaHora = new Date().toLocaleTimeString()
  //     console.log(nuevaHora)
  //     setHora(nuevaHora)
  //   }, 3000)
  //   console.log('useEffect', hora)

  //   return () => {
  //     console.log('useEffect return', hora)
  //     // clearInterval(intervalId)
  //   }
  // }, [hora])

  console.log('render', hora)

  return (
    <p>Hora actual: {hora}</p>
  )
}

export default HoraActual