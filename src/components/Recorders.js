import React, {useState} from "react";
import Style from "../styles/Recorders.module.css";
import prodOne from "../images/Recorders-pictures/rec-one.webp";
import prodTwo from "../images/Recorders-pictures/rec-two.webp";
import prodThree from "../images/Recorders-pictures/rec-three.webp";
import prodFour from "../images/Recorders-pictures/rec-four.webp";
import prodFive from "../images/Recorders-pictures/rec-five.webp";
import prodSix from "../images/Recorders-pictures/rec-six.webp";
import prodSeven from "../images/Recorders-pictures/rec-seven.webp";
import prodEight from "../images/Recorders-pictures/rec-eight.webp";

const Recorders = () => {
    const [style, setStyle] = useState({display: 'none'});

    return (
        <div>
            <button className="h-16 px-4 font-bold text-white hover:bg-white hover:text-blue-800 hover:border-t"
                 onMouseEnter={e => {
                     setStyle({display: 'block'});
                 }}
                 onMouseLeave={e => {
                     setStyle({display: 'none'})
                 }}
            >Recorders
            </button>
             <div style={style} className="productbox" onMouseEnter={e => {
              setStyle({display: 'block'});
            }}
            onMouseLeave={e => {
              setStyle({display: 'none'})
            }}>
              <div className={Style.recordbox}>
                <a href="#">
                <div className={Style.recordersitem}>
                   <div className={Style.textbox}>
                     <h2 className="text-center">Analog(CCTV)</h2>
                   </div>
                   <img src={prodOne} className={Style.recordimg}/>
                </div>
                </a>
                <a href="#">
                <div className={Style.recordersitem}>
                   <div className={Style.textbox}>
                     <h2 className="text-center">HD DVR</h2>
                   </div>
                   <img src={prodTwo} className={Style.recordimg}/>
                </div>
                </a>
                <a href="#">
                <div className={Style.recordersitem}>
                   <div className={Style.textbox}>
                     <h2 className="text-center">HVR</h2>
                   </div>
                   <img src={prodThree} className={Style.recordimg}/>
                </div>
                </a>
                <a href="#">
                <div className={Style.recordersitem}>
                   <div className={Style.textbox}>
                     <h2 className="text-center">NVR</h2>
                   </div>
                   <img src={prodFour} className={Style.recordimg}/>
                </div>
                </a>
                <a href="#">
                <div className={Style.recordersitem}>
                   <div className={Style.textbox}>
                     <h2 className="text-center">Capture Cards</h2>
                   </div>
                   <img src={prodFive} className={Style.recordimg}/>
                </div>
                </a>
                <a href="#">
                <div className={Style.recordersitem}>
                   <div className={Style.textbox}>
                     <h2 className="text-center">Recording Software</h2>
                   </div>
                   <img src={prodSix} className={Style.recordimg}/>
                </div>
                </a>
                <a href="#">
                <div className={Style.recordersitem}>
                   <div className={Style.textbox}>
                     <h2 className="text-center">Drives and Storage</h2>
                   </div>
                   <img src={prodSeven} className={Style.recordimg}/>
                </div>
                </a>
                <a href="#">
                <div className={Style.recordersitem}>
                   <div className={Style.textbox}>
                     <h2 className="text-center">Recording Accessories</h2>
                   </div>
                   <img src={prodEight} className={Style.recordimg}/>
                </div>
                </a>
              </div>
             </div>
        </div> 
    );
}

export default Recorders;