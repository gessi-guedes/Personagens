import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import Home from "./routes/Home.jsx"
import Lista from "./routes/Lista.jsx"
import { StrictMode } from 'react'
import App from './App.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Lista",  // Defina o caminho absoluto para a rota "Lista"
        element: <Lista />,
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
