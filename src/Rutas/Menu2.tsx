import '../Rutas/Menu2.css'
import { Button } from '@mui/material'
import Divider from '@mui/material/Divider'

function Menu2 (){
    return(
        <div className="Contenedor_M">
            <aside className="Sidebar_M"></aside>

            <article className="Cuerpo_M">
                <div><img src="" alt="" /></div>

                <div>
                    <Button>Inicio</Button>
                    <Button>Tus plantas</Button>
                    <Divider />
                    <Button>Cerrar sesión</Button>
                </div>
                
            </article>
        </div>
    )
}

export default Menu2 