import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Style from '../styles/Accessories.module.css';
import aceOne from '../images/Accessories/aceOne.webp';
import aceTwo from '../images/Accessories/aceTwo.webp';
import aceThree from '../images/Accessories/aceThree.webp';
import aceFour from '../images/Accessories/aceFour.webp';
import aceFive from '../images/Accessories/aceFive.webp';
import aceSix from '../images/Accessories/aceSix.webp';
import aceSeven from '../images/Accessories/aceSeven.webp';
import aceEight from '../images/Accessories/aceEight.webp';
import aceNine from '../images/Accessories/aceNine.webp';
import aceTen from '../images/Accessories/aceTen.webp';
import aceEleven from '../images/Accessories/aceEleven.webp';
import aceTwelf from '../images/Accessories/aceTwelf.webp';

export const Accessories = () => {
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
        Accessories
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
        <div className={Style.accessBox}>
          <Link to="/" state="">
            <div className="w-44 flex flex-col items-center h-48 border-solid border-2 border-slate-300">
              <div className="font-extrabold px-2 my-4 text-center test-dark">
                Cables &#38; Wires
              </div>
              <img
                src={aceOne}
                alt="Cables and Wires"
                className="pb-2 w-32 h-32"
              />
            </div>
          </Link>
          <Link to="/" state="">
            <div className="w-44 flex flex-col items-center h-48 border-solid border-2 border-slate-300">
              <div className="font-extrabold px-2 my-4 text-center test-dark">
                Camera Lenses
              </div>
              <img
                src={aceTwo}
                alt="Audio Surveillance"
                className="pb-2 w-32 h-32"
              />
            </div>
          </Link>
          <Link to="/" state="">
            <div className="w-44 flex flex-col items-center h-48 border-solid border-2 border-slate-300">
              <div className="font-extrabold px-2 my-4 text-center test-dark">
                Controllers Keyboards
              </div>
              <img
                src={aceThree}
                alt="Audio Surveillance"
                className="pb-2 w-32 h-32"
              />
            </div>
          </Link>
          <Link to="/" state="">
            <div className="w-44 flex flex-col items-center h-48 border-solid border-2 border-slate-300">
              <div className="font-extrabold px-2 my-4 text-center test-dark">
                Enclosures
              </div>
              <img
                src={aceFour}
                alt="Audio Surveillance"
                className="pb-2 w-32 h-32"
              />
            </div>
          </Link>
          <Link to="/" state="">
            <div className="w-44 flex flex-col items-center h-48 border-solid border-2 border-slate-300">
              <div className="font-extrabold px-2 my-4 text-center test-dark">
                Mounts
              </div>
              <img
                src={aceFive}
                alt="Audio Surveillance"
                className="pb-2 w-32 h-32"
              />
            </div>
          </Link>
          <Link to="/" state="">
            <div className="w-44 flex flex-col items-center h-48 border-solid border-2 border-slate-300">
              <div className="font-extrabold px-2 my-4 text-center test-dark">
                Lighting
              </div>
              <img
                src={aceSix}
                alt="Audio Surveillance"
                className="pb-2 w-32 h-32"
              />
            </div>
          </Link>
          <Link to="/" state="">
            <div className="w-44 flex flex-col items-center h-48 border-solid border-2 border-slate-300">
              <div className="font-extrabold px-2 my-4 text-center test-dark">
                Pan/Tilts &#38; Scanners
              </div>
              <img
                src={aceSeven}
                alt="Audio Surveillance"
                className="pb-2 w-32 h-32"
              />
            </div>
          </Link>
          <Link to="/" state="">
            <div className="w-44 flex flex-col items-center h-48 border-solid border-2 border-slate-300">
              <div className="font-extrabold px-2 my-4 text-center test-dark">
                Point of Sale (PoS)
              </div>
              <img
                src={aceEight}
                alt="Audio Surveillance"
                className="pb-2 w-32 h-32"
              />
            </div>
          </Link>
          <Link to="/" state="">
            <div className="w-44 flex flex-col items-center h-48 border-solid border-2 border-slate-300">
              <div className="font-extrabold px-2 my-4 text-center test-dark">
                Power
              </div>
              <img
                src={aceNine}
                alt="Audio Surveillance"
                className="pb-2 w-32 h-32"
              />
            </div>
          </Link>
          <Link to="/" state="">
            <div className="w-44 flex flex-col items-center h-48 border-solid border-2 border-slate-300">
              <div className="font-extrabold px-2 my-4 text-center test-dark">
                Security Signs
              </div>
              <img
                src={aceTen}
                alt="Audio Surveillance"
                className="pb-2 w-32 h-32"
              />
            </div>
          </Link>
          <Link to="/" state="">
            <div className="w-44 flex flex-col items-center h-48 border-solid border-2 border-slate-300">
              <div className="font-extrabold px-2 my-4 text-center test-dark">
                Tools &#38; Hardware
              </div>
              <img
                src={aceEleven}
                alt="Audio Surveillance"
                className="pb-2 w-32 h-32"
              />
            </div>
          </Link>
          <Link to="/" state="">
            <div className="w-44 flex flex-col items-center h-48 border-solid border-2 border-slate-300">
              <div className="font-extrabold px-2 my-4 text-center test-dark">
                GPS Tracking
              </div>
              <img
                src={aceTwelf}
                alt="Audio Surveillance"
                className="pb-2 w-32 h-32"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Accessories;
