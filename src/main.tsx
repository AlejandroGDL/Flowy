import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './login.css'
import './register.css'
import Home from './components/Home'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
