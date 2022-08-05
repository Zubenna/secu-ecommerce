import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Style from '../styles/Networking.module.css';
import netOne from '../images/Networking/netOne.webp';
import netTwo from '../images/Networking/netTwo.webp';
import netThree from '../images/Networking/netThree.webp';
import netFour from '../images/Networking/netFour.webp';
import netFive from '../images/Networking/netFive.webp';
import netSix from '../images/Networking/netSix.webp';
import netSeven from '../images/Networking/netSeven.webp';
import netEight from '../images/Networking/netEight.webp';
import netNine from '../images/Networking/netNine.webp';

const Networking = () => {
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
        Networking
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
        <div className={Style.networkBox}>
          <Link to="/" state="">
            <div className="w-52 flex flex-col items-center h-48 border-solid border-2 border-slate-300">
              <div className="font-extrabold my-4 w-46 text-center test-dark">
                Network Switches
              </div>
              <img
                src={netOne}
                alt="Audio Surveillance"
                className="pb-2 w-40 h-44"
              />
            </div>
          </Link>
          <Link to="/" state="">
            <div className="w-52 flex flex-col items-center h-48 border-solid border-2 border-slate-300">
              <div className="font-extrabold my-4 w-46 text-center test-dark">
                Routers
              </div>
              <img
                src={netTwo}
                alt="Audio Surveillance"
                className="pb-2 w-40 h-44"
              />
            </div>
          </Link>
          <Link to="/" state="">
            <div className="w-52 flex flex-col items-center h-48 border-solid border-2 border-slate-300">
              <div className="font-extrabold my-4 w-46 text-center test-dark">
                Brackets &#38; Racks
              </div>
              <img
                src={netThree}
                alt="Audio Surveillance"
                className="pb-2 w-40 h-44"
              />
            </div>
          </Link>
          <Link to="/" state="">
            <div className="w-52 flex flex-col items-center h-48 border-solid border-2 border-slate-300">
              <div className="font-extrabold my-4 w-46 text-center test-dark">
                Cable &#38; Patch Cords
              </div>
              <img
                src={netFour}
                alt="Audio Surveillance"
                className="pb-2 w-40 h-44"
              />
            </div>
          </Link>
          <Link to="/" state="">
            <div className="w-52 flex flex-col items-center h-48 border-solid border-2 border-slate-300">
              <div className="font-extrabold my-4 w-46 text-center test-dark">
                Cable Management
              </div>
              <img
                src={netFive}
                alt="Audio Surveillance"
                className="pb-2 w-40 h-44"
              />
            </div>
          </Link>
          <Link to="/" state="">
            <div className="w-52 flex flex-col items-center h-48 border-solid border-2 border-slate-300">
              <div className="font-extrabold my-4 w-46 text-center test-dark">
                Installation Tools
              </div>
              <img
                src={netSix}
                alt="Audio Surveillance"
                className="pb-2 w-40 h-44"
              />
            </div>
          </Link>
          <Link to="/" state="">
            <div className="w-52 flex flex-col items-center h-48 border-solid border-2 border-slate-300">
              <div className="font-extrabold my-4 w-46 text-center test-dark">
                PowerLine Products
              </div>
              <img
                src={netSeven}
                alt="Audio Surveillance"
                className="pb-2 w-32 h-32"
              />
            </div>
          </Link>
          <Link to="/" state="">
            <div className="w-52 flex flex-col items-center h-48 border-solid border-2 border-slate-300">
              <div className="font-extrabold my-4 w-46 text-center test-dark">
                Test Equipment
              </div>
              <img
                src={netEight}
                alt="Audio Surveillance"
                className="pb-2 w-40 h-44"
              />
            </div>
          </Link>
          <Link to="/" state="">
            <div className="w-52 flex flex-col items-center h-48 border-solid border-2 border-slate-300">
              <div className="font-extrabold my-4 w-46 text-center test-dark">
                Work Area Outlets
              </div>
              <img
                src={netNine}
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

export default Networking;
