import Button from "./Button";
import "./Banner.css"

function Carousel (){

    return(
        <div className="Banner">
            <div>
                <h1>Haz tu Plantas Inteligentes</h1>
                <p>Con nuestro Kit para plantas podrás tener un mejor control de tus plantas</p>

                <Button></Button>
            </div>
            <div>
                <img src="/src/assets/BannerImg.png" alt="Banner_Image" width="680px" height="475px" />
            </div>
        </div>
        
    )

}


export default Carousel;