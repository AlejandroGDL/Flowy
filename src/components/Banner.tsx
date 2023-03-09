import "./Banner.css"
import {Link} from 'react-router-dom'
import { Button } from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

//Banner ó carrusel Pagina inicio
function Carousel (){

    return(
        <div className="Banner">
            <div>
                <h1>Haz tu Plantas Inteligentes</h1>
                <p>Con nuestro Kit para plantas podrás tener un mejor control de tus plantas</p>
                <div className="Con_Botón">
                    <Link 
                    to={"/Register"}>
                    <Button 
                    variant="contained"
                    size="large"
                    endIcon={<ChevronRightIcon />}
                    >Registate!</Button></Link>
                </div>
            </div>
            <div>
                <img src="/src/assets/BannerImg.png" alt="Banner_Image" width="680px" height="475px" />
            </div>
        </div>
    )
}


export default Carousel;