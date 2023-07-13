import React from 'react';
import { navItems, linkItems } from './Header/MenuItems';
import { Link } from 'react-router-dom';

const NavItem = ({ name, to }) => {
  return (
    <li>
      <Link
        to={to}
        className="flex items-center text-textColor-light hover:font-sans hover:text-primary-gradient"
      >
        {name}
      </Link>
    </li>
  );
};

const Footer = () => {
  return (
    <div className="bg-bgColor-light dark:bg-bgColor-dark">
      <div className="container flex items-center justify-center gap-6 py-3 mx-auto sm:py-4 md:gap-4">
        <div className="items-center hidden gap-6 md:flex">
          {/* Menu Items */}
          <ul className="flex items-center gap-6 text-sm font-semibold md:gap-4 font-crimson">
            {navItems.map((item, index) => (
              <NavItem key={index} name={item.name} to={item.to} />
            ))}
          </ul>

          <span className="hidden text-2xl md:block text-primary-gradient">
            ·
          </span>

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

        <span className="hidden text-2xl md:block text-primary-gradient">
          ·
        </span>

        {/* Logo */}
        <Link to="/">
          <h1 className="text-sm logo-text">
            qkrdmsgp_eh <span className="primary-dot-2xl"> .</span>
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
