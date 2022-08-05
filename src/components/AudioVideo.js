import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Style from '../styles/AudioVideo.module.css';
import AudOne from '../images/Audio-video/audioOne.webp';
import AudTwo from '../images/Audio-video/audioTwo.webp';
import AudThree from '../images/Audio-video/audioThree.webp';
import AudFour from '../images/Audio-video/audioFour.webp';
import AudFive from '../images/Audio-video/audioFive.webp';

const AudioVideo = () => {
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
        Audio/Video
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
        <div className={Style.audioBox}>
          <Link to="/" state="">
            <div className="w-52 flex flex-col items-center h-48 border-solid border-2 border-slate-300">
              <div className="font-extrabold my-4 w-46 text-center test-dark">
                Audio Surveillance
              </div>
              <img
                src={AudOne}
                alt="Audio Surveillance"
                className="pb-2 w-40 h-44"
              />
            </div>
          </Link>
          <Link to="/" state="">
            <div className="w-52 flex flex-col items-center h-48 border-solid border-2 border-slate-300">
              <div className="font-extrabold my-4 w-46 text-center test-dark">
                Intercom Systems
              </div>
              <img
                src={AudTwo}
                alt="Intercom Systems"
                className="pb-2 w-40 h-44"
              />
            </div>
          </Link>
          <Link to="/" state="">
            <div className="w-52 flex flex-col items-center h-48 border-solid border-2 border-slate-300">
              <div className="font-extrabold my-4 w-46 text-center test-dark">
                Monitors
              </div>
              <img src={AudThree} alt="Monitors" className="pb-2 w-40 h-36" />
            </div>
          </Link>
          <Link to="/" state="">
            <div className="w-52 flex flex-col items-center h-48 border-solid border-2 border-slate-300">
              <div className="font-extrabold my-4 w-46 text-center test-dark">
                Mounts &#38; Stands
              </div>
              <img
                src={AudFour}
                alt="Mounts & Stands"
                className="pb-2 w-40 h-36"
              />
            </div>
          </Link>
          <Link to="/" state="">
            <div className="w-52 flex flex-col items-center h-48 border-solid border-2 border-slate-300">
              <div className="font-extrabold my-4 w-46 text-center test-dark">
                Wire Connectors &#38; Wall Jacks
              </div>
              <img
                src={AudFive}
                alt="Wire Connectors & Wall Jacks"
                className="pb-2 w-40 h-36"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AudioVideo;
