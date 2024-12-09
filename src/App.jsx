import './App.css'
import Home from './routes/Home'
import { Outlet } from "react-router-dom";

function App() {

  return (
    <>
      <Outlet />
      <Home />
    </>
  )
}

export default App
