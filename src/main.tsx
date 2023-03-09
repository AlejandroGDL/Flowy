import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Home from './components/Home'
import Login from './Rutas/Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createMuiTheme, ThemeProvider } from '@mui/material'
import { green, red } from '@mui/material/colors'


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

/*=====Material UI=====*/
//Modificar la paleta de colores Material MUI

const Tema = createMuiTheme({
  palette:{
    primary: {
      main: '#465A52',
    },
    secondary: {
      main: '#fff',
    }
  }
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={Tema}>
      <RouterProvider router={Router} />
    </ThemeProvider>
  </React.StrictMode>,
)
