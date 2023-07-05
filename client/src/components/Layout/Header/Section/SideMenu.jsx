import React, { useState } from 'react';
import { navItems, linkItems } from '../MenuItems';
import { IoCloseOutline, IoMenuOutline } from 'react-icons/io5';

const SideMenu = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowSidebar(!showSidebar)}
        className={`md:hidden fixed z-50 flex items-center text-2xl cursor-pointer right-6 top-4.5 ${
          showSidebar
            ? 'text-white'
            : 'text-secondColor-light dark:text-secondColor-dark'
        }`}
      >
        {showSidebar ? <IoCloseOutline /> : <IoMenuOutline />}
      </button>
      <div
        className={`top-0 right-0 w-[83vw] sm:w-[280px] bg-zinc-900 fixed h-full z-40 ease-in-out duration-200 ${
          showSidebar ? 'translate-x-0 ' : 'translate-x-full'
        }`}
      >
        <ul className="flex flex-col items-center justify-center w-full h-full">
          {navItems.map((item) => (
            <li key={item.id} className="w-full">
              <a
                href={item.to}
                className="flex items-center justify-center w-full py-3 text-base font-normal text-white hover-text hover:font-semibold"
              >
                {item.name}
              </a>
            </li>
          ))}

          {/* Link Items */}
          <div className="flex gap-6 mt-8">
            {linkItems.map((item) => (
              <a key={item.id} href={item.to} target="_blank" rel="noreferrer">
                <span className="text-lg text-white cursor-pointer hover-icon">
                  {item.icon}
                </span>
              </a>
            ))}
          </div>

          {/* Logo */}
          <a href="/">
            <h1 className="fixed text-sm font-semibold text-white transform -translate-x-1/2 bottom-8 left-1/2 font-crimson dark:text-textColor-dark">
              qkrdmsgp_eh{' '}
              <span className="text-2xl text-primary-gradient"> .</span>
            </h1>
          </a>
        </ul>
      </div>
      {showSidebar && (
        <div
          onClick={() => setShowSidebar(!showSidebar)}
          className="fixed top-0 left-0 w-full h-full bg-black/80"
        ></div>
      )}
    </>
  );
};

export default SideMenu;
