import { useState } from 'react'
import './Header.css'

function Header(){
    return(
    <header>
        <nav>
            <img src="/src/assets/LogoFlowey.png" alt="Logotipo" />
            <div className='Op1'>
                <a href="#">Inicio</a>
                <a href="#">Productos</a>
                <a href="#">Nosotros</a>
            </div>

            <div className='Op2'>
                <a href="#">Registrarse</a>
                <a href="#">Iniciar sesión</a>
            </div>
        </nav>
    </header>
    )
}

export default Header;