import './Header.css'
import {Link} from 'react-router-dom'

function Header(){
    return(
    <header>
        <nav>
            <img src="/src/assets/LogoFlowey.png" alt="Logotipo" />
            <div className='Op1'>
                <Link to={"/"}>Inicio</Link>
                <a href="#">Productos</a>
                <a href="#">Nosotros</a>
            </div>

            <div className='Op2'>
                <Link to={"/Register"}>Registrarse</Link>
                <Link to={"/Login"}>Iniciar sesión</Link>
            </div>
        </nav>
    </header>
    )
}

export default Header;