import { click } from "@testing-library/user-event/dist/click";
import "./style.scss";
import { useState } from "react";

function NavBar(props){
    const [visible, setVisible] = useState("sectionContainer");
    const [close, setClose] = useState(false)
    function handleClick(){
        setClose(true)
        setVisible("visible");

    }

    function handleClose(){
        setVisible("sectionContainer");
        setClose(false);
    }

    return <div className="navbar">
        <div className="menuContainer">
            {close == true ? (
                <button className="menu" onClick={handleClose}>CERRAR</button>
            ) :(
                <button className="menu" onClick={handleClick}>ABRIR</button>
            )}
            
            
        </div> 
        <div className="logoContainer">
        <img className="logo" src="https://gonzafco.github.io/courflix/assets/image/logo/logo.png" alt="Courflix" />
        </div>
        <div className={visible}>
        <h1 className="sections">Inicio</h1>
        <h1 className="sections">Series</h1>
        <h1 className="sections">Películas</h1>
        <h1 className="sections">Agregados recientemente</h1>
        <h1 className="sections">Mi lista</h1>
        </div>
    </div>
}

export default NavBar;