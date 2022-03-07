import './index.css'

const App = () => {
  const submit = () => {
    console.log('Holiwis')
  }

  return (
    <div className="App">
      <h2>Holis nueva rama</h2>
      <h1>Hola mundoooo </h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia provident dolorum laudantium doloribus dignissimos atque, ratione modi autem commodi alias, porro repellat nesciunt, vero soluta voluptatibus tempore dolores nobis odio?</p>
      <div>
        <form action="">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, sapiente.</p>
          <button className='bg-cyan-500 shadow-lg' onClick={submit}>Subscribe</button>
        </form>
      </div>
    </div>
  )
}

export default App
