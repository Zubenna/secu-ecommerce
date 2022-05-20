import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Style from '../styles/CameraSystems.module.css';
import secuOne from '../images/menu-pictures/sec-one.webp';
import secutwo from '../images/menu-pictures/sec-two.webp';
import secuthree from '../images/menu-pictures/sec-three.webp';
import secufour from '../images/menu-pictures/sec-four.webp';
import secufive from '../images/menu-pictures/sec-five.webp';

const CameraSystems = () => {
  const [style, setStyle] = useState({ display: 'none' });

  return (
    <div>
      <button
        className="h-12 px-2 font-bold text-white hover:bg-white hover:text-blue-800 hover:border-t"
        onMouseEnter={(e) => {
          setStyle({ display: 'block' });
        }}
        onMouseLeave={(e) => {
          setStyle({ display: 'none' });
        }}
      >
        Camera Systems
      </button>
      <div
        style={style}
        className="productbox"
        onMouseEnter={(e) => {
          setStyle({ display: 'block' });
        }}
        onMouseLeave={(e) => {
          setStyle({ display: 'none' });
        }}
      >
        <div className={Style.boxone}>
          <Link to="/listsubproducts" state="2 Camera Systems">
            <div className="w-52 h-64 border-solid border-2 border-slate-300">
              <img src={secuOne} alt="Camera Systems" className="w-52 h-32" />
              <div className="font-extrabold w-46 px-3 text-center flex items-center h-32 test-dark">
                VIEW ALL CAMERA SYSTEMS
              </div>
            </div>
          </Link>
          <a href="">
            <div className="w-52 h-64 border-solid border-2 border-slate-300">
              <img src={secutwo} className="w-52 h-32" />
              <div className={Style.numbox}>2</div>
              <div className="font-extrabold w-46 pl-8 text-center flex items-center h-14 test-dark">
                CAMERA SYSTEMS
              </div>
            </div>
          </a>
          <a href="">
            <div className="w-52 h-64 border-solid border-2 border-slate-300">
              <img src={secuthree} className="w-52 h-32" />
              <div className={Style.numbox}>4</div>
              <div className="font-extrabold w-46 pl-8 text-center flex items-center h-14 test-dark">
                CAMERA SYSTEMS
              </div>
            </div>
          </a>
          <a href="">
            <div className="w-52 h-64 border-solid border-2 border-slate-300">
              <img src={secufour} className="w-52 h-32" />
              <div className={Style.numbox}>8</div>
              <div className="font-extrabold w-46 pl-8 text-center flex items-center h-14 test-dark">
                CAMERA SYSTEMS
              </div>
            </div>
          </a>
          <a href="">
            <div className="w-52 h-64 border-solid border-2 border-slate-300">
              <img src={secufive} className="w-52 h-32" />
              <div className={Style.numbox}>16</div>
              <div className="font-extrabold w-46 pl-8 text-center flex items-center h-14 test-dark">
                CAMERA SYSTEMS
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CameraSystems;
