import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './components/Home'
import Login from './Rutas/Login' //Overplap
import Register from './Rutas/Register' //Overlap
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material'

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
    element: <Register />,
  },
]);

/*=====Material UI=====*/
//Modificar la paleta de colores Material MUI

const Tema = createTheme({
  palette:{
    primary: {
      main: '#465A52',
    },
    secondary: {
      main: '#000000',
    },
  }
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={Tema}>
      <RouterProvider router={Router} />
    </ThemeProvider>
  </React.StrictMode>,
)
