import React, { useState, useEffect } from 'react';
import LeftHeader from './Section/LeftHeader';
import { navItems, linkItems } from './MenuItems';

import RightHeader from './Section/RightHeader';
import SideMenu from './Section/SideMenu';

const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollActive, setScrollActive] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const scrollHandler = () => {
    if (scrollY > 240) {
      setScrollY(window.pageYOffset);
      setScrollActive(true);
    } else {
      setScrollY(window.pageYOffset);
      setScrollActive(false);
    }
  };

  useEffect(() => {
    const scrollListener = () => {
      window.addEventListener('scroll', scrollHandler);
    };
    scrollListener();

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  });

  return (
    <header
      className={`bg-bgColor-light dark:bg-bgColor-light border-b-2 border-secondColor-light dark:border-secondColor-dark z-50 fixed left-0 w-full h-12 md:h-16 ease-in-out duration-200 ${
        scrollActive ? 'top-0' : 'top-[-48px] md:top-[-64px]'
      }`}
    >
      <div className="container flex items-center justify-between w-full h-full mx-auto">
        {/* Left Section - Menu Items */}
        <LeftHeader />

        {/* Center Section - Logo*/}
        <div className="position-center">
          <a href="/">
            <h1 className="logo-text">
              qkrdmsgp_eh{' '}
              <span className="text-2xl text-primary-gradient"> .</span>
            </h1>
          </a>
        </div>

        {/* Right Section - Link Items */}
        <RightHeader />

        {/* Side Menu */}
        <SideMenu />
      </div>
    </header>
  );
};

export default Header;
