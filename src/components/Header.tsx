import { useState } from 'react'
import './Header.css'

function Header(){
    return(
    <header>
        <nav>
            <img src="/src/assets/LogoFlowey.png" alt="Logotipo" />
            <div className='Op1'>
                <a href="index.html">Inicio</a>
                <a href="#">Productos</a>
                <a href="#">Nosotros</a>
            </div>

            <div className='Op2'>
                <a href="register.html">Registrarse</a>
                <a href="login.html">Iniciar sesión</a>
            </div>
        </nav>
    </header>
    )
}

export default Header;