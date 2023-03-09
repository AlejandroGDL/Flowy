import './Header.css'
import {Link} from 'react-router-dom'

function Header(){
    return(
    <header>
        <nav>
            <div>
                <img src="/src/assets/LogoFlowey.png" alt="Logotipo" />
            </div>
            <div className='Op1'>
                <Link to={"/"}>Inicio</Link>
                <Link to={"/"}>Productos</Link>
                <Link to={"/"}>Nosotros</Link>
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