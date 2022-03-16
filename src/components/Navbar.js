import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import logo from '../images/secu-logo.png';
import CameraSystems from "./CameraSystems";
import Recorders from "./Recorders";
import { SearchIcon,
   QuestionMarkCircleIcon, 
   ShoppingCartIcon, 
   PhoneIcon,
   PencilIcon,
   ChatIcon,
   UserIcon
  } from "@heroicons/react/solid";
import AudioVideo from "./AudioVideo";
import Networking from "./Networking";
import Transmission from "./Transmission";
import Security from "./Security";
import Accessories from "./Accessories";
import Clearance from "./Clearance";
import SmartHome from "./SmartHome";
import Brands from "./Brands";
// space-x-4
const Navbar = () => {
const [isOpen, setIsOpen] = useState(false);

 return (
  <nav className="">
   <div className="flex h-20 items-center w-screen">
     <div className="h-16 pl-8 flex items-center">
       <img src={logo} className="h-14 w-16 mr-2"/>
       <a href="" className="tracking-wide font-semibold text-2xl"><span className="text-sky-900">Homandoff</span><span className="text-neutral-900">Security</span><span className="text-neutral-600">Products</span></a>
     </div>
     <div className="pl-2 flex items-center">
       <input type="text" placeholder="Search" className="outline-0 rounded-tl rounded-bl p-2 h-10 w-2/3 bg-slate-300" />
       <button className="h-10 w-24 bg-lime-700 text-white rounded-br outline-0 rounded-tr"><SearchIcon className="ml-8 h-8 w-8"/></button>
     </div>
     <div className="ml-12 flex items-center">
      <div className="flex items-center">
        <QuestionMarkCircleIcon className="w-7 h-7 pl-2 pr-1"/>
        <span className="tracking-wide text-xs font-bold">Help</span>
      </div>
      <div className="flex items-center">
        <PhoneIcon className="w-7 h-7 pl-2 pr-1"/>
        <span className="tracking-wide text-xs font-bold">080 7112 7654</span>
      </div>
      <div className="flex items-center">
        <PencilIcon className="w-7 h-7 pl-2 pr-1"/>
        <span className="tracking-wide text-xs font-bold">My Quotes</span>
      </div>
      <div className="flex items-center">
        <ChatIcon className="w-7 h-7 pl-2 pr-1"/>
        <span className="tracking-wide text-xs font-bold">Chat</span>
      </div>
      <div className="flex items-center">
        <UserIcon className="w-7 h-7 pl-2 pr-1"/>
        <span className="tracking-wide text-xs font-bold">My Account</span>
      </div>
      <div className="flex items-center">
        <ShoppingCartIcon className="w-10 h-8 ml-10 pr-2 text-blue-500"/>
      </div>
     </div>
   </div>
   <div>
      <nav className="bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline justify-evenly">
                   <CameraSystems />
                   <Recorders />
                   <AudioVideo />
                   <Networking />
                   <Transmission />
                   <Security />
                   <Accessories />
                   <Clearance />
                   <SmartHome />
                   <Brands />
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  <CameraSystems />
                </a>
               
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                 <Recorders />
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  <AudioVideo />
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                 <Networking />
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                   <Transmission />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                   <Security />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  <Accessories />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  <Clearance />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  <SmartHome />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                <Brands />
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  </nav>
 );
};

export default Navbar;
