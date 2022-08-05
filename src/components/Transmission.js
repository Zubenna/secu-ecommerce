import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Style from '../styles/Transmission.module.css';
import traOne from '../images/Transmission/traOne.webp';
import traTwo from '../images/Transmission/traTwo.webp';
import traThree from '../images/Transmission/traThree.webp';
import traFour from '../images/Transmission/traFour.webp';
import traFive from '../images/Transmission/traFive.webp';
import traSix from '../images/Transmission/traSix.webp';

const Transmission = () => {
  const [style, setStyle] = useState({ display: 'none' });

  return (
    <div>
      <button
        className="h-12 px-4 font-bold text-white hover:bg-white hover:text-blue-800 hover:border-t"
        onMouseEnter={(e) => {
          setStyle({ display: 'block' });
        }}
        onMouseLeave={(e) => {
          setStyle({ display: 'none' });
        }}
      >
        Transmission
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
        <div className={Style.transBox}>
          <Link to="/" state="">
            <div className="w-44 flex flex-col items-center h-48 border-solid border-2 border-slate-300">
              <div className="font-extrabold px-2 my-4 text-center test-dark">
                Encoders &#38; Decoders
              </div>
              <img
                src={traOne}
                alt="Audio Surveillance"
                className="pb-2 w-40 h-44"
              />
            </div>
          </Link>
          <Link to="/" state="">
            <div className="w-44 flex flex-col items-center h-48 border-solid border-2 border-slate-300">
              <div className="font-extrabold px-2 my-4 text-center test-dark">
                Fiber Optic Transmission
              </div>
              <img
                src={traTwo}
                alt="Audio Surveillance"
                className="pb-2 w-40 h-44"
              />
            </div>
          </Link>
          <Link to="/" state="">
            <div className="w-44 flex flex-col items-center h-48 border-solid border-2 border-slate-300">
              <div className="font-extrabold px-2 my-4 text-center test-dark">
                Serial Transmission
              </div>
              <img
                src={traThree}
                alt="Audio Surveillance"
                className="pb-2 w-40 h-44"
              />
            </div>
          </Link>
          <Link to="/" state="">
            <div className="w-44 flex flex-col items-center h-48 border-solid border-2 border-slate-300">
              <div className="font-extrabold px-2 my-4 text-center test-dark">
                Twisted Pair Transmission
              </div>
              <img
                src={traFour}
                alt="Audio Surveillance"
                className="pb-2 w-40 h-44"
              />
            </div>
          </Link>
          <Link to="/" state="">
            <div className="w-44 flex flex-col items-center h-48 border-solid border-2 border-slate-300">
              <div className="font-extrabold px-2 my-4 text-center test-dark">
                Converters and DA's
              </div>
              <img
                src={traFive}
                alt="Audio Surveillance"
                className="pb-2 w-40 h-44"
              />
            </div>
          </Link>
          <Link to="/" state="">
            <div className="w-44 flex flex-col items-center h-48 border-solid border-2 border-slate-300">
              <div className="font-extrabold px-2 my-4 text-center test-dark">
                Wireless Transmission
              </div>
              <img
                src={traSix}
                alt="Audio Surveillance"
                className="pb-2 w-40 h-44"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Transmission;
