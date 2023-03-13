import '../Rutas/Menu2.css'
import * as React from 'react'
import { Button } from '@mui/material'
import Divider from '@mui/material/Divider'
import Avatar from '@mui/material/Avatar';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';

function Menu2 (){
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

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
          

          <div>
              <Avatar />
          </div>
      </article>
    </div>

    );
}

export default Menu2 