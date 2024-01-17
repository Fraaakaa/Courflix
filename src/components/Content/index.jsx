import "./style.scss"
import data from "../../data/series.json"; 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function Content(){
    const settings = {
        className: "center",
        centerMode: false,
        infinite: true,
        Padding: "150px",
        responsive: true,
        adaptiveHeight: true,
        slidesToShow: 4,
        speed: 500
      };
  
    return <div className="contentContainer">
        <Slider {...settings}>
        {data.map((serie, key) =>{
            return <div className="imgcontainer">
            <img key={key} src={serie.url} alt="serie" />
            </div>
            
        })}
        </Slider>
    </div>

}

export default Content;