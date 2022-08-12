import React from 'react';
import Style from '../styles/Footer.module.css';
// import { Link } from 'react-router-dom';
import { BsChatFill, BsGearFill } from 'react-icons/bs';
import logo from '../images/homandoff.jpeg';
import { FiYoutube, FiFacebook, FiLinkedin } from 'react-icons/fi';
// import FiLinkedin} from "react-icons/ri";

const Footer = () => {
  return (
    <>
      <div className={Style.footerBox}>
        <div className="flex justify-between">
          <nav className="flex">
            <div className="w-36">
              <h1 className="text-zinc-50 pb-2 tracking-wide font-semibold">
                COMPANY
              </h1>
              <hr className="pb-2 h-2 text-zinc" />
              <ul className={Style.menuList}>
                <li>
                  <a href="" className="tracking-wide text-slate-200">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="" className="tracking-wide text-slate-200">
                    Reviews
                  </a>
                </li>
                <li>
                  <a href="" className="tracking-wide text-slate-200">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="" className="tracking-wide text-slate-200">
                    Our Brands
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-36 mx-4">
              <h1 className="text-zinc-50 pb-2 tracking-wide font-semibold">
                CATEGORIES
              </h1>
              <hr className="pb-2 h-2 text-zinc" />
              <ul className={Style.menuList}>
                <li>
                  <a href="" className="tracking-wide text-slate-200">
                    Camera Systems
                  </a>
                </li>
                <li>
                  <a href="" className="tracking-wide text-slate-200">
                    Cameras
                  </a>
                </li>
                <li>
                  <a href="" className="tracking-wide text-slate-200">
                    Security
                  </a>
                </li>
                <li>
                  <a href="" className="tracking-wide text-slate-200">
                    Smart Home
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-36">
              <h1 className="text-zinc-50 pb-2 tracking-wide font-semibold">
                HELP
              </h1>
              <hr className="pb-2 h-2 text-zinc" />
              <ul className={Style.menuList}>
                <li>
                  <a href="" className="tracking-wide text-slate-200">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="" className="tracking-wide text-slate-200">
                    My Orders
                  </a>
                </li>
                <li>
                  <a href="" className="tracking-wide text-slate-200">
                    Returns & Warranty
                  </a>
                </li>
                <li>
                  <a href="" className="tracking-wide text-slate-200">
                    Compare Products
                  </a>
                </li>
                <li>
                  <a href="" className="tracking-wide text-slate-200">
                    Shipping & Delivery
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <div>
            <div className="flex">
              <div className={Style.helpBox}>
                <div className={Style.makeCenter}>
                  <BsChatFill size={30} style={{ fill: '#fff' }} />
                  <h1 className="text-white font-semibold pb-2">NEED HELP?</h1>
                </div>
                <p className="text-white py-3">
                  Talk to our Gearheads 24/7 about your needs
                </p>
                <button className="button font-semibold mt-2 h4 w-32">
                  Chat Now
                </button>
                <p className="text-white font-semibold pt-2">
                  <span>Call: </span> +234 8077711223
                </p>
              </div>
              <div className={Style.helpBox}>
                <div className={Style.makeCenter}>
                  <BsGearFill size={30} style={{ fill: '#fff' }} />
                  <h1 className="text-white font-semibold pb-2">
                    TECH SUPPORT
                  </h1>
                </div>
                <p className="text-white py-3">
                  Free Tech Support for lifetime of your products
                </p>
                <button className="button font-semibold mt-2 h4 w-32">
                  Start Now
                </button>
                <p className="text-white font-semibold pt-2">
                  ask@hommandoff.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={Style.socialBox}>
          <div>
            <h2 className="font-extrabold text-lg text-white my-2">
              KEEP IN TOUCH
            </h2>
          </div>
          <div className={Style.iconBox}>
            <a href="">
              <FiFacebook className="p-1" size={60} style={{ color: '#fff' }} />
            </a>
            <a href="">
              <FiLinkedin
                className="pr-4"
                size={60}
                style={{ color: '#fff' }}
              />
            </a>
            <a href="">
              <FiYoutube size={60} style={{ color: '#fff' }} />
            </a>
          </div>
        </div>
      </div>
      <div className="flex bg-white w-full px-24 pb-3 pt-2 h-12">
        <div className="flex justify-start items-center">
          <img src={logo} className="h-8 w-8" />
          <a href="" className="tracking-wide font-semibold text-sm">
            <span className="text-sky-900">Homandoff</span>
          </a>
        </div>
        <p className="flex items-center text-xs px-2">
          <span>&#xA9;2022</span>Hommandoff. All Rights Reserved
        </p>
        <ul className={Style.footerBrand}>
          <li className="px-2 text-xs font-semibold border-r-2 border-r-gray-900">
            <a href="">Privacy Policy</a>
          </li>
          <li className="pl-2 text-xs font-semibold">
            <a href="">Terms of Use</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
