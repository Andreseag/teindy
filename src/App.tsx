const App = () => {
  let strNuevo = 'hola mundo'

  const submit = () => {
    console.log('Holiwis')
  }

  return (
    <div className="App">
      <h1>Hola mundoooo {str} </h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia provident dolorum laudantium doloribus dignissimos atque, ratione modi autem commodi alias, porro repellat nesciunt, vero soluta voluptatibus tempore dolores nobis odio?</p>
      <div>
        <form action="">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, sapiente.</p>
          <button onClick={submit}>Holis</button>
        </form>
      </div>
    </div>
  )
}

export default App
