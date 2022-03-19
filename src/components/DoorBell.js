import React from 'react';
import Style from "../styles/DoorBell.module.css";
import bellOne from "../images/Door-bell/bell-one.png";
import bellOneS from "../images/Door-bell/bell-one-s.png";
import bellTwo from "../images/Door-bell/bell-two-s.webp";
import bellTwoA from "../images/Door-bell/bell-twoBig.png";

const DoorBell = () => {
  return (
    <div className={Style.doorBell}>
    <a href="#">
       <div className={Style.bellBox}>
          <div className={Style.imgBox}>
            <img src={bellOne} className={Style.bellImg}/>
          </div>
          <div className={Style.imgBoxTwo}>
            <img src={bellOneS} />
          </div>

          <div className={Style.bellText}>
             <h1><span className='text-sky-700 font-bold text-2xl tracking-widest'>RING </span><span className='text-sky-900 font-black text-2xl tracking-widest'>DORBELL 3+ </span><span className='text-rose-600 font-semibold text-lg'>&#8358; 167.99</span></h1>
             <h3 className='text-stone-800 text-lg font-extrabold'>Wi-Fi 1080p HD Video Doorbell</h3>
             <ul className={Style.listBox}>
               <li className='pr-2 border-r border-r-blue-500'>HD video</li>
               <li className='px-2 border-r border-r-blue-500'>Motion Detection</li>
               <li className='px-2 border-r border-r-blue-500' >Cloud Recording</li>
               <li>Day/Night</li>
             </ul>
             <button className="button mt-4 w-56">
               Shop Now
              </button>
          </div>
       </div>
    </a>
    <a href="#">
       <div className={Style.bellBox}>
          <div className={Style.camBox}>
            <img src={bellTwoA} className={Style.camImg}/>
          </div>
          <div className={Style.camBoxTwo}>
            <img src={bellTwo} />
          </div>

          <div className={Style.bellText}>
             <h1><span className='text-sky-700 font-bold text-2xl tracking-widest'>WINTER </span><span className='text-sky-900 font-black text-2xl tracking-widest'>WARRIOR</span><span className='text-rose-600 font-semibold text-lg'>&#8358; 52.40</span></h1>
             <h3 className='text-stone-800 text-lg font-extrabold'>5 Megapixel HD Outdoor Dome Camera</h3>
             <ul className={Style.listBox}>
               <li className='pr-2 border-r border-r-blue-500'>HD video</li>
               <li className='px-2 border-r border-r-blue-500'>Nightvision</li>
               <li className='px-2 border-r border-r-blue-500' >NDAA Compliant</li>
               <li className='pl-2'>IP66</li>
             </ul>
             <button className="button mt-10 w-56">
               Shop Now
              </button>
          </div>
       </div>
    </a>
      
    </div>
  )
}

export default DoorBell;
