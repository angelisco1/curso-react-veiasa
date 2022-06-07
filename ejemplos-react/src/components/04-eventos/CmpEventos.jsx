const CmpEventos = () => {
  return (
    <div>
      <h2>Eventos</h2>
      <button type="button" onClick={(e) => {
          console.log(e)
          alert('Un mensaje cualquiera...')
        }}>Mostrar alert</button>

      <input type="text" onChange={(e) => console.log(e.target.value)} />

      <div
        style={{width: '200px', height: '200px', border: '1px solid black'}}
          onClick={() => console.log('Has pulsado en la caja grande')}
      >
        <div
          style={{width: '100px', height: '100px', border: '1px solid black'}}
          onClick={(e) => {
            e.stopPropagation()
            console.log('Has pulsado en la caja pequeña')
          }}
        >
        </div>
      </div>

      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" name="nombre" />
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default CmpEventos
