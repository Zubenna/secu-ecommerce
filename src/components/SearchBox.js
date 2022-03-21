import React from 'react';
import { SearchIcon } from "@heroicons/react/outline";
import {AiOutlineFacebook, AiOutlineYoutube} from "react-icons/ai";
import {RiLinkedinLine} from "react-icons/ri";
import Style from "../styles/SearchBox.module.css";
import brandOne from "../images/Brand-logo/brand-one.webp";
import brandTwo from "../images/Brand-logo/brand-two.webp";
import brandThree from "../images/Brand-logo/brand-three.webp";
import brandFour from "../images/Brand-logo/brand-four.webp";
import brandFive from "../images/Brand-logo/brand-five.webp";
import brandSix from "../images/Brand-logo/brand-six.webp";

const SearchBox = () => {
  return (
    <div className='w-screen'>
    <div>
    <h1 className='text-center font-semibold text-xl pt-8 pb-1'>Discover More</h1>
    <div className='w-14 h-4 flex mx-auto'>
    <hr className='text-center border-0 h-1 bg-blue-800 w-16'/>
    </div>
    <div className={Style.searchArea}>
        <button className={Style.btn}>
        <SearchIcon className='h-6 w-6'/>
        </button>
        <input type="text" className={Style.setInput} placeholder='Search'/>
    </div>
    <div className={Style.brandBox}>
       <div>
       <img src={brandOne} />
       </div>
       <div>
       <img src={brandTwo} />
       </div>
       <div>
       <img src={brandThree}/>
       </div>
       <div>
       <img src={brandFour} />
       </div>
       <div>
       <img src={brandFive} />
       </div>
       <div>
       <img src={brandSix} />
       </div>
    </div>
    </div>
    <div className={Style.socialBox}>
      <div className={Style.textBox}>
        <h2 className='font-extrabold text-lg text-sky-800 my-2'>KEEP IN TOUCH</h2>
        <p className='font-semibold py-3'>Be sure to follow us on social media for exclusives!</p>
      </div>
      <div className={Style.iconBox}>
        <a href="">
        <AiOutlineFacebook size={50} style={{ fill: '#006eff' }}/>
        </a>
        <a href="">
        <RiLinkedinLine size={50} style={{ fill: '#006eff' }} />
        </a>
        <a href="">
        <AiOutlineYoutube size={50} style={{ fill: '#006eff' }} />
        </a>
      </div>
    </div>
    </div>
  );
}

export default SearchBox;