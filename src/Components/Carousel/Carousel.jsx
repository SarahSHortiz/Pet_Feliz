import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../Components/Carousel/Carousel.css";
import img1 from '../img/1c.svg'
import img2 from '../img/1.svg'
import img3 from '../img/2.svg'
import img4 from '../img/c2.svg'

import icon from '../../assets/icons8-divisa-circulada-à-esquerda-48 (1).png'
import icon2 from '../../assets/icons8-divisa-circulada-à-esquerda-48.png'

export default function SimpleSlider() {


  const settings = {
    className: "slider variable-width",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          variableWidth: true

        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,

        }
      }
    ], nextArrow: (
      <div>
        <div className="next-slick-arrow"><img src={icon} alt="" /> </div>
      </div>
    ),
    prevArrow: (
      <div>
        <div className="prev-slick-arrow"> <img src={icon2} alt="" /> </div>
      </div>
    )
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        <div style={{ width: "100%" }}>
          <img src={img1} alt="Imagem 1" style={{ width: "100%", height: "auto" }} />
        </div >
        <div style={{ width: "100%" }}>
          <img src={img2} alt="Imagem 2" style={{ width: "100%", height: "auto" }} />
        </div>
        <div style={{ width: "100%" }}>
          <img src={img3} alt="Imagem 3" style={{ width: "100%", height: "auto" }} />
        </div>
        <div style={{ width: "100%" }}>
          <img src={img4} alt="Imagem 3" style={{ width: "100%", height: "auto" }} />
        </div>
      
      </Slider>
    </div>
  );
}