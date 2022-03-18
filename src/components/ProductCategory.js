import React from 'react';
import Style from "../styles/ProductCategory.module.css";
import cateOne from "../images/product-category/cate-one.webp";
import cateTwo from "../images/product-category/cate-two.webp";
import cateThree from "../images/product-category/cate-three.webp";
import cateFour from "../images/product-category/cate-four.webp";
import cateFive from "../images/product-category/cate-five.webp";
import cateSix from "../images/product-category/cate-six.webp";
import cateSeven from "../images/product-category/cate-seven.webp";
import cateEight from "../images/product-category/cate-eight.webp";
import cateNine from "../images/product-category/cate-nine.webp";
import cateTen from "../images/product-category/cate-ten.webp";

const ProductCategory = () => {

  return (
    <div className={Style.sectionBox}>
      <h1 className='mt-10 text-center font-black text-black text-3xl'>Shop By Category</h1>
    <section className={Style.cateBox}>
    <a href="#">
      <div className={`${Style.productBox} ${Style.borderRBottom}`}>
          <img src={cateOne} className={Style.prodImg}/>
          <div className={Style.textBox}>
            <a className="text-center pt-1 text-blue-900">Security Camera Systems</a>
          </div>
      </div>
    </a>
    <a href="#">
      <div className={`${Style.productBox} ${Style.borderRBottom}`}>
          <img src={cateTwo} className={Style.prodImg}/>
          <div className={Style.textBox}>
            <a className="text-center pt-1 text-blue-900">Security Cameras</a>
          </div>
      </div>
    </a>
    <a href="#">
      <div className={`${Style.productBox} ${Style.borderRBottom}`}>
          <img src={cateThree} className={Style.prodImg}/>
          <div className={Style.textBox}>
            <a className="text-center pt-1 text-blue-900">Digital Video Recorders</a>
          </div>
      </div>
    </a>
    <a href="#">
      <div className={`${Style.productBox} ${Style.borderRBottom}`}>
          <img src={cateFour} className={Style.prodImg}/>
          <div className={Style.textBox}>
            <a className="text-center pt-1 text-blue-900">Network Security Cameras</a>
          </div>
      </div>
    </a>
    <a href="#" className=''>
      <div className={`${Style.productBox} ${Style.borderBottom}`}>
          <img src={cateFive} className={Style.prodImg}/>
          <div className={Style.textBox}>
            <a className="text-center pt-1 text-blue-900">Monitors</a>
          </div>
      </div>
    </a>
    <a href="#">
      <div className={`${Style.productBox} ${Style.borderRight}`}>
          <img src={cateSix} className={Style.prodImg}/>
          <div className={Style.textBox}>
          <a className="text-center pt-1 text-blue-900">Power Solutions</a>
          </div>
      </div>
    </a>
    <a href="#">
      <div className={`${Style.productBox} ${Style.borderRight}`}>
          <img src={cateSeven} className={Style.prodImg}/>
          <div className={Style.textBox}>
          <a className="text-center pt-1 text-blue-900">Networking</a>
          </div>
      </div>
    </a>
    <a href="#">
      <div className={`${Style.productBox} ${Style.borderRight}`}>
          <img src={cateEight} className={Style.prodImg}/>
          <div className={Style.textBox}>
          <a className="text-center pt-1 text-blue-900">Video Transmission</a>
          </div>
      </div>
    </a>
    <a href="#">
      <div className={`${Style.productBox} ${Style.borderRight}`}>
          <img src={cateNine} className={Style.prodImg}/>
          <div className={Style.textBox}>
          <a className="text-center pt-1 text-blue-900">Accessories</a>
          </div>
      </div>
    </a>
    <a href="#">
      <div className={Style.productBox}>
          <img src={cateTen} className={`${Style.prodImg}`}/>
          <div className={Style.textBox}>
          <a className="text-center pt-1 text-blue-900">Wire/Cables</a>
          </div>
      </div>
    </a>
    </section>
    </div>
  );
}

export default ProductCategory;
