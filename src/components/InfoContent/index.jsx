import { Link } from "react-router-dom";
import "./style.scss";

function InfoContent(){
    return <div className="infoGrapper">
        <h2 className="subtitle">Original de COURFLIX</h2>
        <h1 className="title">BLACK SUMMER</h1>
        <div className="containerButton">
        <Link className="button">Reproducir</Link>
        <a className="button">+ Mi lista</a>
        </div>
        <p className="text">Ve la temporada 1</p>
        <p className="text">Una ansiada luna de miel. Un asesinato terrible. Varios sospechosos. Si sobreviven, serán unas vacaciones de ensueño.</p>

    </div>

}

export default InfoContent;