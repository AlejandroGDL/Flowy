import Button from "../components/Button"
import "../Rutas/Login.css"
function Login(){

    return(
        <article>
            <div>
            <img src="/src/assets/LoginVector.png" alt="Login Vector" />    
            </div>
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
                </form>
            </div>
        </article>
    )

}

export default Login