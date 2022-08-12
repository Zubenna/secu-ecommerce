import React, { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import { Link, useNavigate } from 'react-router-dom';
import { Badge } from '@material-ui/core';
import { ShoppingCartOutlined } from '@material-ui/icons';
import logo from '../images/homandoff.jpeg';
import Style from '../styles/Navbar.module.css';
import CameraSystems from './CameraSystems';
import SecurityCameras from './SecurityCameras';
import Recorders from './Recorders';
import {
  SearchIcon,
  QuestionMarkCircleIcon,
  PhoneIcon,
  PencilIcon,
  ChatIcon,
  UserIcon,
} from '@heroicons/react/solid';
import AudioVideo from './AudioVideo';
import Networking from './Networking';
import Transmission from './Transmission';
import Security from './Security';
import Accessories from './Accessories';
import Clearance from './Clearance';
import SmartHome from './SmartHome';
import Brands from './Brands';
import { useDispatch, useSelector } from 'react-redux';
import { getTotalPrice } from '../redux/cartRedux';
import { logout } from '../redux/apiCalls';

const Navbar = () => {
  let user = useSelector((state) => state.user.currentUser);
  // console.log('user in Navbar is', user);
  const message = useSelector((state) => state.user.message);
  const [isOpen, setIsOpen] = useState(false);
  let cart = useSelector((state) => state.cart);
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getTotalPrice());
  }, [dispatch, cart]);

  const handleLogout = (e) => {
    e.preventDefault();
    logout(dispatch);
    message === 'Logged out successfully' && navigate('/');
    // user = null;
  };

  const handleCart = (e) => {
    if (cartTotalQuantity > 0 && user !== null) {
      navigate('/cart');
    }
    if (user === null) {
      // navigate('/');
      alert('Please sign in before checking out');
    }
  };
  return (
    <nav>
      <div className={Style.menuBox}>
        <div className={Style.logoBox}>
          <div className={Style.imgBox}>
            <img src={logo} className="w-10 h-10 p-2" alt="" />
          </div>
          <Link to="/" className={Style.brandName}>
            Homandoff
          </Link>
        </div>
        <div className={Style.searchBox}>
          <input type="text" placeholder="Search" className={Style.setInput} />
          <button className="">
            <SearchIcon className="w-6 h-6 text-slate-50" />
          </button>
        </div>
        <div className={Style.setAdmin}>
          {user !== null && user.isAdmin ? (
            <Link
              to="/admin"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              <span className="text-sm font-bold">Admin Page</span>
            </Link>
          ) : (
            <span className="text-xs text-dark">
              {user !== null && user.email}
            </span>
          )}
        </div>

        <div className={Style.menuHolder}>
          <a href="#">
            <div className="flex items-center">
              <QuestionMarkCircleIcon className={Style.iconSize} />
              <span className={Style.menuText}> Help</span>
            </div>
          </a>
          <a href="#">
            <div className="flex items-center">
              <PhoneIcon className={Style.iconSize} />
              <span className={Style.menuText}>080 7112 7654</span>
            </div>
          </a>
          <a href="#">
            <div className="flex items-center">
              <PencilIcon className={Style.iconSize} />
              <span className={Style.menuText}>My Quotes</span>
            </div>
          </a>
          <a href="#">
            <div className="flex items-center">
              <ChatIcon className={Style.iconSize} />
              <span className={Style.menuText}>Chat</span>
            </div>
          </a>
          {user !== null ? (
            <span onClick={handleLogout} className={Style.menuText}>
              Logout
            </span>
          ) : (
            <Link to="/login">
              <div className="flex items-center">
                <UserIcon className={Style.iconSize} />
                <span className={Style.menuText}>Login</span>
              </div>
            </Link>
          )}
        </div>

        {/* <Link to="/cart"> */}
        <div onClick={handleCart} className="flex cursor-pointer items-center">
          <Badge
            badgeContent={cartTotalQuantity}
            color="primary"
            className={Style.iconBasket}
          >
            <ShoppingCartOutlined />
          </Badge>
        </div>
        {/* </Link> */}
      </div>
      <div className="w-full">
        <nav className="bg-blue-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
            <div className="flex items-center justify-between h-12">
              <div className="flex items-center">
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <CameraSystems />
                    <SecurityCameras />
                    <Recorders />
                    <AudioVideo />
                    <Networking />
                    <Transmission />
                    <Security />
                    <Accessories />
                    <SmartHome />
                    <Brands />
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="bg-gray-900 inline-flex items-center justify-center rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
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
                    <SecurityCameras />
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
                  {user.isAdmin && (
                    <Link
                      to="/admin"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      <span>Admin Page</span>
                    </Link>
                  )}
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
