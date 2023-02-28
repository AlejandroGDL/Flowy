import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './login.css'
import './register.css'
import Header from './components/Header'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Header/>
  </React.StrictMode>,
)
