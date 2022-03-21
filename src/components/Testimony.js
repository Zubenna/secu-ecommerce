import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { StarIcon } from "@heroicons/react/solid";
import Style from "../styles/Testimony.module.css";
import Slider from 'react-slick';

const Testimony = () => {
        const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      };
          return (
            <div className={Style.testiSection}>
            <Slider {...settings} className="absolute">
              <div className={Style.testiBox}>
              <div className={Style.starBox}>
              {Array(5)
                .fill()
                .map((_, i) => (
                  <StarIcon key={i} className="h-8 text-xl text-yellow-500" />
                ))}
            </div>
             <blockquote className='text-xl'><span>&ldquo;</span>Called to make sure I ordered correct Camera for the location. You were very helpful and quick and I have 
             always had a good experience when purchase from you.<span>&rdquo;</span></blockquote>
             <span className='mt-6 italic text-lg text-blue-700'>Mathew M</span>
              </div>
              <div className={Style.testiBox}>
              <div className={Style.starBox}>
              {Array(5)
                .fill()
                .map((_, i) => (
                  <StarIcon key={i} className="h-8 text-xl text-yellow-500" />
                ))}
            </div>
             <blockquote className='text-xl'><span>&ldquo;</span>Very Impressed with customer service and product line...will be purchasing addition products in 
             near future.<span>&rdquo;</span></blockquote>
             <span className='mt-6 italic text-lg text-blue-700'>George S</span>
              </div>
              <div className={Style.testiBox}>
              <div className={Style.starBox}>
              {Array(5)
                .fill()
                .map((_, i) => (
                  <StarIcon key={i} className="h-8 text-xl text-yellow-500" />
                ))}
            </div>
             <blockquote className='text-xl'><span>&ldquo;</span>Great Selection and prices, excellent search bar for quick product.<span>&rdquo;</span></blockquote>
             <span className='mt-6 italic text-lg text-blue-700'>John P</span>
              </div>
            </Slider>
            </div>
          );
}

export default Testimony
