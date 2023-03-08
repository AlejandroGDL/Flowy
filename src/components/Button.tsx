import "./Button.css"

function Button(Clase:any,Texto:any){
    return(
        <button className={Clase}>{Texto}</button>
    )
}

export default Button;