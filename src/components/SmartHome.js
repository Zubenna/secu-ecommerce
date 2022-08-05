import React, { useState } from 'react';
import Style from '../styles/SmartHome.module.css';
import { Link } from 'react-router-dom';
import smartOne from '../images/SmartHomes/smartOne.webp';
import smartTwo from '../images/SmartHomes/smartTwo.webp';
import smartThree from '../images/SmartHomes/smartThree.webp';
import smartFour from '../images/SmartHomes/smartFour.webp';
import smartFive from '../images/SmartHomes/smartFive.webp';
import smartSix from '../images/SmartHomes/smartSix.webp';
import smartSeven from '../images/SmartHomes/smartSeven.webp';
import smartEight from '../images/SmartHomes/smartEight.webp';
import smartNine from '../images/SmartHomes/smartNine.webp';
import smartTen from '../images/SmartHomes/smartTen.webp';

const SmartHome = () => {
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
        Smart Home
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
        <div className={Style.smartBox}>
          <Link to="/" state="">
            <div className="w-44 flex flex-col items-center h-48 border-solid border-2 border-slate-300">
              <div className="font-extrabold px-2 my-4 text-center test-dark">
                Alarm Systems
              </div>
              <img
                src={smartOne}
                alt="Cables and Wires"
                className="pb-2 w-44 h-32"
              />
            </div>
          </Link>
          <Link to="/" state="">
            <div className="w-44 flex flex-col items-center h-48 border-solid border-2 border-slate-300">
              <div className="font-extrabold px-2 my-4 text-center test-dark">
                Cameras
              </div>
              <img
                src={smartTwo}
                alt="Cables and Wires"
                className="pb-2 w-44 h-32"
              />
            </div>
          </Link>
          <Link to="/" state="">
            <div className="w-44 flex flex-col items-center h-48 border-solid border-2 border-slate-300">
              <div className="font-extrabold px-2 my-4 text-center test-dark">
                Door Locks
              </div>
              <img
                src={smartThree}
                alt="Cables and Wires"
                className="pb-2 w-44 h-32"
              />
            </div>
          </Link>
          <Link to="/" state="">
            <div className="w-44 flex flex-col items-center h-48 border-solid border-2 border-slate-300">
              <div className="font-extrabold px-2 my-4 text-center test-dark">
                Kits &#38; Hubs
              </div>
              <img
                src={smartFour}
                alt="Cables and Wires"
                className="pb-2 w-44 h-32"
              />
            </div>
          </Link>
          <Link to="/" state="">
            <div className="w-44 flex flex-col items-center h-48 border-solid border-2 border-slate-300">
              <div className="font-extrabold px-2 my-4 text-center test-dark">
                Outlets
              </div>
              <img
                src={smartFive}
                alt="Cables and Wires"
                className="pb-2 w-44 h-32"
              />
            </div>
          </Link>
          <Link to="/" state="">
            <div className="w-44 flex flex-col items-center h-48 border-solid border-2 border-slate-300">
              <div className="font-extrabold px-2 my-4 text-center test-dark">
                Sensors
              </div>
              <img
                src={smartSix}
                alt="Cables and Wires"
                className="pb-2 w-44 h-32"
              />
            </div>
          </Link>
          <Link to="/" state="">
            <div className="w-44 flex flex-col items-center h-48 border-solid border-2 border-slate-300">
              <div className="font-extrabold px-1 my-4 text-center test-dark">
                Thermostats
              </div>
              <img
                src={smartSeven}
                alt="Cables and Wires"
                className="pb-2 w-44 h-28"
              />
            </div>
          </Link>
          <Link to="/" state="">
            <div className="w-44 flex flex-col items-center h-48 border-solid border-2 border-slate-300">
              <div className="font-extrabold px-2 my-4 text-center test-dark">
                Doorbells
              </div>
              <img
                src={smartEight}
                alt="Cables and Wires"
                className="pb-2 w-44 h-32"
              />
            </div>
          </Link>
          <Link to="/" state="">
            <div className="w-44 flex flex-col items-center h-48 border-solid border-2 border-slate-300">
              <div className="font-extrabold px-2 my-4 text-center test-dark">
                Accessories
              </div>
              <img
                src={smartNine}
                alt="Cables and Wires"
                className="pb-2 w-44 h-32"
              />
            </div>
          </Link>
          <Link to="/" state="">
            <div className="w-44 flex flex-col items-center h-48 border-solid border-2 border-slate-300">
              <div className="font-extrabold px-2 my-4 text-center test-dark">
                Smart Appliances
              </div>
              <img
                src={smartTen}
                alt="Cables and Wires"
                className="pb-2 w-36 h-32"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SmartHome;
