import React, { useState } from 'react';
import Style from '../styles/Security.module.css';
import { Link } from 'react-router-dom';
import secOne from '../images/Security/secOne.webp';
import secTwo from '../images/Security/secTwo.webp';
import secThree from '../images/Security/secThree.webp';
import secFour from '../images/Security/secFour.webp';

const Security = () => {
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
        Security
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
        <div className={Style.secuBox}>
          <Link to="/" state="">
            <div className="w-56 flex flex-col items-center h-48 border-solid border-2 border-slate-300">
              <div className="font-extrabold my-4 w-46 text-center test-dark">
                Access Control
              </div>
              <img
                src={secOne}
                alt="Audio Surveillance"
                className="pb-2 w-44 h-44"
              />
            </div>
          </Link>
          <Link to="/" state="">
            <div className="w-56 flex flex-col items-center h-48 border-solid border-2 border-slate-300">
              <div className="font-extrabold my-4 w-46 text-center test-dark">
                Fire Safety
              </div>
              <img
                src={secTwo}
                alt="Audio Surveillance"
                className="pb-2 w-44 h-44"
              />
            </div>
          </Link>
          <Link to="/" state="">
            <div className="w-56 flex flex-col items-center h-48 border-solid border-2 border-slate-300">
              <div className="font-extrabold my-4 w-46 text-center test-dark">
                Intrusion Detection
              </div>
              <img
                src={secThree}
                alt="Audio Surveillance"
                className="pb-2 w-32 h-40"
              />
            </div>
          </Link>
          <Link to="/" state="">
            <div className="w-56 flex flex-col items-center h-48 border-solid border-2 border-slate-300">
              <div className="font-extrabold my-4 w-46 text-center test-dark">
                Intercom Systems
              </div>
              <img
                src={secFour}
                alt="Audio Surveillance"
                className="pb-2 w-44 h-44"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Security;
