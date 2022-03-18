import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Style from "../styles/BestSeller.module.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { StarIcon } from "@heroicons/react/outline";
import bestOne from "../images/BestSellers/bestOne.webp";
import bestTwo from "../images/BestSellers/bestTwo.webp";
import bestThree from "../images/BestSellers/bestThree.webp";
import bestFour from "../images/BestSellers/bestFour.webp";
import bestFive from "../images/BestSellers/bestFive.webp";
import bestSix from "../images/BestSellers/bestSix.webp";
import bestSeven from "../images/BestSellers/bestSeven.webp";
import bestEight from "../images/BestSellers/bestEight.webp";
import bestNine from "../images/BestSellers/bestNine.webp";
import bestTen from "../images/BestSellers/bestTen.webp";
import bestEleven from "../images/BestSellers/bestEleven.webp";
import bestTwelf from "../images/BestSellers/bestTwelf.webp";
import bestThirteen from "../images/BestSellers/bestThirteen.webp";
import bestFourteen from "../images/BestSellers/bestFourteen.webp";

export const BestSellers = () => {
  const ArrowLeft = (props) => (
    <ChevronLeftIcon {...props} className={Style.prev} />
  );
  const ArrowRight = (props) => (
    <ChevronRightIcon {...props} className={Style.next} />
  );
  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 1000,
    slidesToShow: 7,
    slidesToScroll: 7,
    arrows: true,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
  };
  return (
    <div className={Style.bestSeller}>
      <h1 className="my-8 text-center font-black text-black text-3xl">
        Shop Best Sellers
      </h1>
      <div className={Style.leftDim}></div>
      <Slider {...settings} className="absolute">
        <a href="#">
          <div className={Style.sellerBox}>
            <img src={bestOne} className={Style.sellerImg} />
            <div className={Style.textBox}>
              <a className="text-center pt-1 text-blue-900">
                Hikvision DS-2CD2185FWD-I-2.8MM 8 Megapixel Network Dome Camera,
                2.8mm Lens
              </a>
            </div>
            <span className={Style.nairaSign}>&#8358; 34567</span>
            <div className="flex mt-4">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <StarIcon key={i} className="h-5 text-yellow-500" />
                ))}
            </div>
          </div>
        </a>
        <a href="#">
          <div className={Style.sellerBox}>
            <img src={bestTwo} className={Style.sellerImg} />
            <div className={Style.textBox}>
              <a className="text-center pt-1 text-blue-900">
              Interlogix VT1101M AM Video Mini Transmitter with Contact Closure
              </a>
            </div>
            <span className={Style.nairaSign}>&#8358; 152.00</span>
            <div className="flex mt-4">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <StarIcon key={i} className="h-5 text-yellow-500" />
                ))}
            </div>
          </div>
        </a>
        <a href="#">
          <div className={Style.sellerBox}>
            <img src={bestThree} className={Style.sellerImg} />
            <div className={Style.textBox}>
              <a className="text-center pt-1 text-blue-900">
              ZKTeco SF1008T+ Body Temperature + Mask Detection Access Control Reader
              </a>
            </div>
            <span className={Style.nairaSign}>&#8358; 1,645.75</span>
            <div className="flex mt-4">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <StarIcon key={i} className="h-5 text-yellow-500" />
                ))}
            </div>
          </div>
        </a>
        <a href="#">
          <div className={Style.sellerBox}>
            <img src={bestFour} className={Style.sellerImg} />
            <div className={Style.textBox}>
              <a className="text-center pt-1 text-blue-900">
              Bogen S86T725PG8UBRVK Ceiling Speaker Volume Knob Bright White Grille
              </a>
            </div>
            <span className={Style.nairaSign}>&#8358; 34.99</span>
            <div className="flex mt-4">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <StarIcon key={i} className="h-5 text-yellow-500" />
                ))}
            </div>
          </div>
        </a>
        <a href="#">
          <div className={Style.sellerBox}>
            <img src={bestFive} className={Style.sellerImg} />
            <div className={Style.textBox}>
              <a className="text-center pt-1 text-blue-900">
              Optex KX-08 Pet Tolerant Ceiling Mount PIR
              </a>
            </div>
            <span className={Style.nairaSign}>&#8358; 25.99</span>
            <div className="flex mt-4">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <StarIcon key={i} className="h-5 text-yellow-500" />
                ))}
            </div>
          </div>
        </a>
        <a href="#">
          <div className={Style.sellerBox}>
            <img src={bestSix} className={Style.sellerImg} />
            <div className={Style.textBox}>
              <a className="text-center pt-1 text-blue-900">
              Flir N253V8 8 Megapixel 4K Mini Vandal Dome Camera, 2.8mm Lens
              </a>
            </div>
            <span className={Style.nairaSign}>&#8358; 99.00</span>
            <div className="flex mt-4">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <StarIcon key={i} className="h-5 text-yellow-500" />
                ))}
            </div>
          </div>
        </a>
        <a href="#">
          <div className={Style.sellerBox}>
            <img src={bestSeven} className={Style.sellerImg} />
            <div className={Style.textBox}>
              <a className="text-center pt-1 text-blue-900">
              Hikvision DS-2CD2043G0-I-4MM 4 Megapixel Network IR Outdoor Bullet Camera, 4mm Lens
              </a>
            </div>
            <span className={Style.nairaSign}>&#8358; 129.99</span>
            <div className="flex mt-4">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <StarIcon key={i} className="h-5 text-yellow-500" />
                ))}
            </div>
          </div>
        </a>
        <a href="#">
          <div className={Style.sellerBox}>
            <img src={bestEight} className={Style.sellerImg} />
            <div className={Style.textBox}>
              <a className="text-center pt-1 text-blue-900">
              INVID3KIT-4 4 Camera Security System, 5MP Bullet Cameras 3TB
              </a>
            </div>
            <span className={Style.nairaSign}>&#8358; 286.35</span>
            <div className="flex mt-4">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <StarIcon key={i} className="h-5 text-yellow-500" />
                ))}
            </div>
          </div>
        </a>
        <a href="#">
          <div className={Style.sellerBox}>
            <img src={bestNine} className={Style.sellerImg} />
            <div className={Style.textBox}>
              <a className="text-center pt-1 text-blue-900">
              Hikvision DS-2CE16C5T-IT1-2-8MM 720p TurboHD EXIR Low Light Bullet Camera, 2.8mm Lens
              </a>
            </div>
            <span className={Style.nairaSign}>&#8358; 46.58</span>
            <div className="flex mt-4">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <StarIcon key={i} className="h-5 text-yellow-500" />
                ))}
            </div>
          </div>
        </a>
        <a href="#">
          <div className={Style.sellerBox}>
            <img src={bestTen} className={Style.sellerImg} />
            <div className={Style.textBox}>
              <a className="text-center pt-1 text-blue-900">
              Hikvision EKI-K164T412 16-Channel NVR 4TB with 12 x 4MP Outdoor Turret Cameras, 2.8mm Lens
              </a>
            </div>
            <span className={Style.nairaSign}>&#8358; 1,713.50</span>
            <div className="flex mt-4">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <StarIcon key={i} className="h-5 text-yellow-500" />
                ))}
            </div>
          </div>
        </a>
        <a href="#">
          <div className={Style.sellerBox}>
            <img src={bestEleven} className={Style.sellerImg} />
            <div className={Style.textBox}>
              <a className="text-center pt-1 text-blue-900">
              Hikvision EKI-K41T44 4-Channel NVR 1TB with 4 x 4MP Outdoor Turret Cameras, 2.8mm Lens
              </a>
            </div>
            <span className={Style.nairaSign}>&#8358; 399.95</span>
            <div className="flex mt-4">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <StarIcon key={i} className="h-5 text-yellow-500" />
                ))}
            </div>
          </div>
        </a>
        <a href="#">
          <div className={Style.sellerBox}>
            <img src={bestTwelf} className={Style.sellerImg} />
            <div className={Style.textBox}>
              <a className="text-center pt-1 text-blue-900">
              Panavise 209 Vacuum Base PV Jr.
              </a>
            </div>
            <span className={Style.nairaSign}>&#8358; 19.99</span>
            <div className="flex mt-4">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <StarIcon key={i} className="h-5 text-yellow-500" />
                ))}
            </div>
          </div>
        </a>
        <a href="#">
          <div className={Style.sellerBox}>
            <img src={bestThirteen} className={Style.sellerImg} />
            <div className={Style.textBox}>
              <a className="text-center pt-1 text-blue-900">
              Bosch NDN-832V09-IP 1080p Day-Night HD Dome IP Camera, 9-40mm Lens
              </a>
            </div>
            <span className={Style.nairaSign}>&#8358; 985.00</span>
            <div className="flex mt-4">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <StarIcon key={i} className="h-5 text-yellow-500" />
                ))}
            </div>
          </div>
        </a>
        <a href="#">
          <div className={Style.sellerBox}>
            <img src={bestFourteen} className={Style.sellerImg} />
            <div className={Style.textBox}>
              <a className="text-center pt-1 text-blue-900">
              Hikvision DS-7616NI-Q2-16P-8TB 16 Channels 4K Network Video Recorder, 8TB
              </a>
            </div>
            <span className={Style.nairaSign}>&#8358; 744.99</span>
            <div className="flex mt-4">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <StarIcon key={i} className="h-5 text-yellow-500" />
                ))}
            </div>
          </div>
        </a>
      </Slider>
      <div className={Style.rightDim}></div>
    </div>
  );
};

export default BestSellers;
