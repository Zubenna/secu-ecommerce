import React from 'react';
import Style from "../styles/PopularProducts.module.css";
import { StarIcon } from "@heroicons/react/outline";
import prodOne from "../images/popular-products/prod-one.webp";
import prodTwo from "../images/popular-products/prod-two.jpg";
import prodThree from "../images/popular-products/prod-three.jpg";


const PopularProducts = () => {
  return (
    <div className={Style.popularBox}>
    <div className={Style.popBox} >
      <div className={Style.mainBox}>
        <h1 className='font-semibold text-lg text-center py-4'>Security Camera System of The Month</h1>
        <div className={Style.msgBox}>
        <div className={Style.imgBox}>
            <img src={prodOne} />
        </div>
        <div className={Style.textBox}>
            <a href="" className='text-blue-800 text-sm py-3'>INVID2KIT 16 Security Cameras Kit 2MP Dome Cameras 3TB</a>
            <span className='font-semibold text-lg my-3'>&#8358; 804.99</span>
            <div className="flex">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <StarIcon key={i} className="h-5 text-xl text-yellow-500" />
                ))}
            </div>
            <div className={Style.alignButton}>
            <button className="button mt-4 w-36">
               Add to Cart
            </button>
            </div>
        </div>
        </div>
        </div>
        <div className={Style.mainBox}>
        <h1 className='font-semibold text-lg text-center py-4'>Camera of The Month</h1>
        <div className={Style.msgBox}>
        <div className={Style.imgBox}>
            <img src={prodTwo} />
        </div>
        <div className={Style.textBox}>
            <a href="" className='text-blue-800 text-sm py-3'>InVid ELEV-C5BXIR28 5 Megapixel HD-TVI/AHD/CVI/Analog IR Outdoor Bullet Camera, 2.8mm Lens</a>
            <span className='font-semibold text-lg my-3'>&#8358; 32.00</span>
            <div className="flex">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <StarIcon key={i} className="h-5 text-xl text-yellow-500" />
                ))}
            </div>
            <div className={Style.alignButton}>
            <button className="button mt-4 w-36">
               Add to Cart
            </button>
            </div>
        </div>
        </div>
        </div>
        <div className={Style.mainBox}>
        <h1 className='font-semibold text-lg text-center py-4'>Recorder of The Month</h1>
        <div className={Style.msgBox}>
        <div className={Style.imgBox}>
            <img src={prodThree} />
        </div>
        <div className={Style.textBox}>
            <a href="" className='text-blue-800 text-sm py-3'>InVid ED3AI-4 4 Channel TVI/AHD/CVI/Analog/IP Digital Video Recorder, No HDD</a>
            <span className='font-semibold text-lg my-3'>&#8358; 44.00</span>
            <div className="flex">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <StarIcon key={i} className="h-5 text-xl text-yellow-500" />
                ))}
            </div>
            <div className={Style.alignButton}>
            <button className="button mt-4 w-36">
               Add to Cart
            </button>
            </div>
        </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default PopularProducts;