import "./Button.css"

type Propiedades ={
    Clase: string
    Variante: string
    Texto: string
}

const Button = ({Clase,Texto,Variante}:Propiedades)=>{
    return(
        <button 
        className="{Clase} {Variante}">
        {Texto}</button>
    )
}

export default Button;