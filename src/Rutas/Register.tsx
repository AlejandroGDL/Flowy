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
            <h1>Registro</h1>
            <form action="" method="post">
                <div>
                    <div></div>
                    <div></div>
                </div>
                <a className='Divider'></a>
                <div>
                    <p>Al Registrate aceptas nuestros Terminos y Condiciones</p>
                    <Button variant='contained' type='submit'> Registrate</Button>
                </div>
            </form>
            
        </article>
    )
}

export default Register;