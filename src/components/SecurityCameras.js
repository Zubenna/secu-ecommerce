import { useState } from 'react';
import { Link } from 'react-router-dom';
import Style from '../styles/SecurityCameras.module.css';
import secuCamOne from '../images/security-cameras/secu-cam-1.webp';
import secuCamTwo from '../images/security-cameras/secu-cam-2.webp';
import secuCamThree from '../images/security-cameras/secu-cam-3.webp';
import secuCamFour from '../images/security-cameras/secu-cam-4.webp';
import secuCamFive from '../images/security-cameras/secu-cam-5.webp';
import secuCamSix from '../images/security-cameras/secu-cam-6.webp';
import secuCamSeven from '../images/security-cameras/secu-cam-7.webp';
import secuCamEight from '../images/security-cameras/secu-cam-8.webp';
import secuCamNine from '../images/security-cameras/secu-cam-9.webp';

const SecurityCameras = () => {
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
        Security Cameras
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
        <div className={Style.secuCamBox}>
          <Link to="/" state="security camera">
            <div className="w-52 flex h-32 border-solid border-2 border-slate-300">
              <img
                src={secuCamOne}
                alt="Security Cameras"
                className="flex items-center w-28 h-28"
              />
              <div className="font-extrabold w-46 flex items-center pl-2 text-left test-dark">
                CCTV Cameras
              </div>
            </div>
          </Link>
          <Link to="/" state="2 Camera Systems">
            <div className="w-52 flex h-32 border-solid border-2 border-slate-300">
              <img
                src={secuCamTwo}
                alt="Security Cameras"
                className="flex items-center w-28 h-28"
              />
              <div className="font-extrabold w-46 text-left pl-2 flex items-center test-dark">
                HD CCTV Cameras
              </div>
            </div>
          </Link>
          <Link to="/" state="2 Camera Systems">
            <div className="w-52 flex h-32 border-solid border-2 border-slate-300">
              <img
                src={secuCamThree}
                alt="Security Cameras"
                className="flex items-center w-28 h-28"
              />

              <div className="font-extrabold pl-2 w-46 text-left flex items-center test-dark">
                Network Ip Cameras
              </div>
            </div>
          </Link>
          <Link to="/" state="2 Camera Systems">
            <div className="w-52 flex h-32 border-solid border-2 border-slate-300">
              <img
                src={secuCamFour}
                alt="Security Cameras"
                className="flex items-center w-28 h-28"
              />

              <div className="font-extrabold w-46 pl-2 text-left flex items-center test-dark">
                Camera Lenses
              </div>
            </div>
          </Link>
          <Link to="/" state="2 Camera Systems">
            <div className="w-52 flex h-32 border-solid border-2 border-slate-300">
              <img
                src={secuCamFive}
                alt="Security Cameras"
                className="flex items-center w-16 h-28"
              />

              <div className="font-extrabold w-46 text-left flex items-center test-dark">
                Body Temperature
              </div>
            </div>
          </Link>
          <Link to="/" state="2 Camera Systems">
            <div className="w-52 flex h-32 border-solid border-2 border-slate-300">
              <img
                src={secuCamSix}
                alt="Security Cameras"
                className="flex items-center w-28 h-28"
              />

              <div className="font-extrabold w-46 pl-2 text-left flex items-center test-dark">
                Enclosures &#38; Mounts
              </div>
            </div>
          </Link>
          <Link to="/" state="2 Camera Systems">
            <div className="w-52 flex h-32 border-solid border-2 border-slate-300">
              <img
                src={secuCamSeven}
                alt="Security Cameras"
                className="flex items-center w-28 h-28"
              />

              <div className="font-extrabold w-46 pl-2 text-left flex items-center test-dark">
                NDAA Products
              </div>
            </div>
          </Link>
          <Link to="/" state="2 Camera Systems">
            <div className="w-52 flex h-32 border-solid border-2 border-slate-300">
              <img
                src={secuCamEight}
                alt="Security Cameras"
                className="flex items-center w-28 h-28"
              />

              <div className="font-extrabold w-46 pl-2 text-left flex items-center test-dark">
                Illumination Products
              </div>
            </div>
          </Link>
          <Link to="/" state="2 Camera Systems">
            <div className="w-52 flex h-32 border-solid border-2 border-slate-300">
              <img
                src={secuCamNine}
                alt="Security Cameras"
                className="flex items-center w-28 h-28"
              />

              <div className="font-extrabold w-46 pl-2 text-left flex items-center test-dark">
                Cameras Accessories
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SecurityCameras;
