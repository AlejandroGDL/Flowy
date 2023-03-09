import "./Button.css"

type Propiedades ={
    Clase: string
    Variante: string
    Texto: string
}

const MyButton = ({Clase,Texto,Variante}:Propiedades)=>{
    return(
        <button 
        className={Clase} 
        id={Variante}>
        {Texto}</button>
    )
}

export default MyButton;