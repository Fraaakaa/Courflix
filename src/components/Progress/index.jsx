import "./style.scss"
import data from "../../data/seguir.json"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Progress(){
    const settings = {
        className: "center",
        centerMode: false,
        infinite: true,
        centerPadding: "140px",
        slidesToShow: 4,
        speed: 500
      };
    return <div className="serieContainer">
        <Slider {...settings}>
    {data.map((serie, key) =>{
     return <div className="series"><img key={key} src={serie.url} alt="serie" />
        <div className="bar">
            <div className="red"></div>
            <div className="grey"></div>
        </div>
            </div>
        })}
        </Slider>
    </div>
}

export default Progress;