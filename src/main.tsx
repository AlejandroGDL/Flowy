import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Home from './components/Home'
import Login from './Rutas/Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

/*=====React Router DOM=====*/
//Crea las rutas para nuestras paginas, mediante componentes del propio REACT
const Router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement: <h1>Sucedio un error! Verifica el URL</h1>
  },
  {
    path: '/Login',
    element: <Login/>,
  },
  {
    path: '/Register',
    element: <h1>Registro</h1>,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>,
)
