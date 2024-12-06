import './App.css'
import Listar from './components/ListarCategorias'
import { Outlet } from "react-router-dom";

function App() {

  return (
    <>
      <Outlet />
    </>
  )
}

export default App
