import React from 'react';
import { navItems, linkItems } from './Header/MenuItems';

const NavItem = ({ name }) => {
  return (
    <li>
      <a
        href="/"
        className="flex items-center text-textColor-light hover:font-sans hover:text-primary-gradient"
      >
        {name}
      </a>
    </li>
  );
};

const Footer = () => {
  return (
    <div className="bg-bgColor-light dark:bg-bgColor-dark h-[300px] md:h-[195px]">
      <div className="container relative flex flex-col items-center justify-center h-full mx-auto">
        <div className="flex flex-col items-center gap-3 mb-6 md:gap-6 md:flex-row">
          {/* Menu Items */}
          <ul className="flex items-center gap-6 text-sm font-semibold md:gap-4 font-crimson">
            {navItems.map((item, index) => (
              <NavItem key={index} name={item.name} />
            ))}
          </ul>

          <span className="text-2xl text-primary-gradient">·</span>

          {/* Link Items */}
          <ul className="flex gap-6 text-lg text-textColor-light md:gap-4">
            {linkItems.map((item) => (
              <li key={item.id}>
                <a href={item.to} target="_blank" rel="noreferrer">
                  <span className="transition-all duration-200 hover:text-primaryColor-defaultColor">
                    {item.icon}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <span className="block text-2xl md:hidden text-primary-gradient">
          ·
        </span>

        {/* Logo */}
        <a href="/">
          <h1 className="text-sm font-bold md:transform md:-translate-x-1/2 md:absolute text-textColor-light md:bottom-8 md:left-1/2 font-crimson">
            qkrdmsgp_eh{' '}
            <span className="text-2xl text-primary-gradient"> .</span>
          </h1>
        </a>
      </div>
    </div>
  );
};

export default Footer;
