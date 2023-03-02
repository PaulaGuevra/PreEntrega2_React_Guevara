import Header from "./components/Header/Header"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div><Header/>
      <ItemListContainer greeting={"Listado de Productos"} />
    </div>
    
  )
  
}

export default App
