import React from "react";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Style from "../styles/SliderBox.module.css";
import SliderOne from "../images/slider-pictures/slider-one.webp";
import SliderTwo from "../images/slider-pictures/slider-two.webp";
import SliderThree from "../images/slider-pictures/slider-three.webp";
import SliderFour from "../images/slider-pictures/slider-four.webp";
import SliderFive from "../images/slider-pictures/slider-five.webp";
import { ChevronLeftIcon,  ChevronRightIcon} from "@heroicons/react/solid";

const SliderBox = () => {

const ArrowLeft = (props) => (
    <ChevronLeftIcon {...props}
    className={Style.prev} />
);
const ArrowRight = (props) => (
        <ChevronRightIcon {...props}
        className={Style.next} />
);
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />
  };
      return (
        <div className="relative">
        <div className={Style.leftDim} ></div>
        <Slider {...settings} className="absolute">
          <a href="#">
          <div className={Style.itemBox}>
            <img src={SliderOne} className={Style.setImg} />
          </div>
          </a>
          <a href="#">
          <div className={Style.itemBox} >
            <img src={SliderTwo} className={Style.setImg} />
          </div>
          </a>
          <a href="#">
          <div className={Style.itemBox} >
            <img src={SliderThree} className={Style.setImg} />
          </div>
          </a>
          <a href="#">
          <div className={Style.itemBox} >
            <img src={SliderFour} className={Style.setImg} />
          </div>
          </a>
          <a href="#">
          <div className={Style.itemBox} >
            <img src={SliderFive} className={Style.setImg} />
          </div>
          </a>
        </Slider>
         <div className={Style.rightDim} >
         </div>
        </div>
      );
}

export default SliderBox;
