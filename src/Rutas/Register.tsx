import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import '../Rutas/Register.css'
import TextField from '@mui/material/TextField';
import CookieIcon from '@mui/icons-material/Cookie';

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
                <div className='Container_Form'>
                    <div className='Inputs_R'>
                        <div>
                            {/* <p>Nombre:</p> */}
                            {/* <input type="text" id='Text_R' /> */}
                            <TextField type='Text' id='Text_R' label="Nombre" variant="filled" margin="normal"/>
                        </div>
                        
                        <div>
                            {/* <p>Apellidos:</p>
                            <input type="text" id="Text_R" /> */}
                            <TextField type='Text' id='Text_R' label="Apellidos" variant="filled" margin="normal"/>
                        </div>
                        
                        <div>
                            {/* <p>Correo Electronico:</p>
                            <input type="email" name="" id="Text_R" /> */}
                            <TextField type='Email' id='Text_R' label="Correo Electronico" variant="filled" margin="normal"/>
                        </div>
                        
                        <div>
                            {/* <p>Contraseña:</p>
                            <input type="password" name="" id="Text_R" /> */}
                            <TextField type='password' id='Text_R' label="Contraseña" variant="filled" margin="normal"/>
                        </div>
                    </div>
                    <div className='Datos_R'>
                        <img src="src/assets/LogoFlowey.png" alt="Logotipo Flowey" />
                        <p>Tus datos no serán compartidos con ningún tercero</p>
                    </div>
                </div>
                <div className='Container_Divider_R'>
                    <a className='Divider_R'></a>
                </div>
                <div className='Footer_R'>
                    <p>Al Registrate aceptas nuestros <Link to={"/"}><span>Terminos y Condiciones</span></Link> <CookieIcon /></p>
                    <Button variant='contained' type='submit'>Registrate</Button>
                </div>
            </form>
            
        </article>
    )
}

export default Register;