import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import './App.css'

function App() {

  return (
    <div>
      <NavBar />
      <ItemListContainer saludo={"Hola Gorras"}/>
      </div>
  )
}

export default App
