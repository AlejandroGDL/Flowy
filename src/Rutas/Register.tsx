import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import '../Rutas/Register.css'

function Register(){
    return(
        <article>
            <div>
                <Link 
                to={"/"}><Button variant="contained" startIcon={<ChevronLeftIcon />}>Regresar</Button></Link>
            </div>
            <div className='Titulo_R'>
                <h1>Registro</h1>
            </div>
            
            <form action="" method="post" className='Form_Register'>
                <div>
                    <div className='Inputs_R'>
                        <div>
                            <p>Nombre:</p>
                            <input type="text" />
                        </div>
                        
                        <div>
                            <p>Apellidos:</p>
                            <input type="text" />
                        </div>
                        
                        <div>
                            <p>Correo Electronico:</p>
                            <input type="email" name="" id="" />
                        </div>
                        
                        <div>
                            <p>Contraseña:</p>
                            <input type="password" name="" id="" />
                        </div>
                    </div>
                    <div className='Datos_R'>
                        <img src="src/assets/LogoFlowey.png" alt="Logotipo Flowey" />
                        <p>Tus datos no serán compartidos con ningún tercero</p>
                    </div>
                </div>
                <a className='Divider_R'></a>
                <div>
                    <p>Al Registrate aceptas nuestros Terminos y Condiciones</p>
                    <Button variant='contained' type='submit'> Registrate</Button>
                </div>
            </form>
            
        </article>
    )
}

export default Register;