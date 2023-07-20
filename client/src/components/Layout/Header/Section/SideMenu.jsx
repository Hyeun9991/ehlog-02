import React, { useState } from 'react';
import { navItems, linkItems } from '../MenuItems';
import { IoCloseOutline, IoMenuOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const SideMenu = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      {/* Side Button */}
      <button
        onClick={() => setShowSidebar(!showSidebar)}
        className={`md:hidden fixed z-50 flex items-center text-2xl cursor-pointer hover-icon right-6 top-4.5 ${
          showSidebar
            ? 'text-white'
            : 'text-secondColor-light dark:text-secondColor-dark'
        }`}
      >
        {showSidebar ? <IoCloseOutline /> : <IoMenuOutline />}
      </button>

      {/* Side Bar */}
      <div
        className={`top-0 right-0 w-[83vw] sm:w-[280px] bg-zinc-900 fixed h-full z-40 ease-in-out duration-200 ${
          showSidebar ? 'translate-x-0 ' : 'translate-x-full'
        } `}
      >
        <ul className="flex flex-col items-center justify-center w-full h-full">
          {navItems.map((item) => (
            <li key={item.id} className="w-full">
              <a
                href={item.to}
                className="flex items-center justify-center w-full py-3 text-white/70 hover-text hover:font-semibold"
              >
                {item.name}
              </a>
            </li>
          ))}

          {/* Link Items */}
          <div className="flex flex-col gap-6 mt-8 sm:gap-4">
            {linkItems.map((item) => (
              <Link key={item.id} to={item.to} target="_blank" rel="noreferrer">
                <span className="opacity-60 active-button hover:opacity-100">
                  {item.icon}
                </span>
              </Link>
            ))}
          </div>

          {/* Logo */}
          <Link to="/">
            <h1 className="text-white logo-text position-center-bottom">
              qkrdmsgp_eh{' '}
              <span className="text-2xl text-primary-gradient"> .</span>
            </h1>
          </Link>
        </ul>
      </div>
      {showSidebar && (
        <div
          onClick={() => setShowSidebar(!showSidebar)}
          className="fixed top-0 left-0 w-full h-full bg-black/20"
        ></div>
      )}
    </>
  );
};

export default SideMenu;
