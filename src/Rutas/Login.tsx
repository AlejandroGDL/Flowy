import "../Rutas/Login.css"
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

function Login(){

    return(
        <article>
            <div>
                <Link to={"/"}><Button variant="contained" startIcon={<ChevronLeftIcon />}>Regresar</Button></Link>
            </div>
            <div className="Body_Contenedor">
                <img src="/src/assets/LoginVector.png" alt="Login Vector" />    
                <a className="Divider"></a>
                <div className="FormLogin">
                    <form action="" method="post">
                        <h2>¡Bienvenido!</h2>
                        <div className="Inputs">
                            <p>Correo Electronico:</p>
                            <input type="email" name="" id="Text"/>
                            <p>Contraseña:</p>
                            <input type="password" name="" id="Text"/>
                        </div>
                        <input type="submit" value="Iniciar sesión" id="Button" />
                        <p>¿No tienes cuenta? <Link to={"/Register"}><span>Registrate</span></Link></p>
                    </form> 
                </div>
            </div>
        </article>
    )
}

export default Login