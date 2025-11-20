
import './App.css'

function App() {

  const user = "Douglas Anselmo Castellanos"
  const templateSaludo = "Hola " + user + " bienvenido a React.Js"

  function saludar() {
    alert( templateSaludo )
  }

  return (
    <>
      <div>
        <h1> {templateSaludo} </h1>
        <img  width={400} src="https://www.meme-arsenal.com/memes/884d82d8ba3275dbefe7924c55d5dff2.jpg" alt="Meme" />
      </div>

      <div>
        <h2>Mi primera aplicacion en react</h2>
      </div>

      <div>
        <p>douggie fucking bear</p>
        <button onClick={saludar}>Click Acá </button>
      </div>
    </>
  )
}

export default App
