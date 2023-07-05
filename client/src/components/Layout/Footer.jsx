import React from 'react';
import { BsGithub, BsFillSendCheckFill } from 'react-icons/bs';

const navItemsInfo = [
  {
    name: 'Home',
  },
  {
    name: 'About',
  },
  {
    name: 'Articles',
  },
];

const linkItems = [
  {
    id: 1,
    icon: <BsGithub />,
    href: 'https://github.com/Hyeun9991',
  },
  {
    id: 2,
    icon: <BsFillSendCheckFill />,
    href: 'mailto:hyeun9991@gmail.com',
  },
];

const NavItem = ({ name, isLastItem }) => {
  return (
    <li>
      <a
        href="/"
        className="flex items-center text-white hover:font-sans hover:text-primary-gradient"
      >
        {name}
      </a>
    </li>
  );
};

const Footer = () => {
  return (
    <div className="bg-secondColor-defaultColor dark:bg-bgColor-dark h-[45vh] md:h-[195px]">
      <div className="container relative flex flex-col items-center justify-center h-full mx-auto">
        <div className="flex flex-col items-center gap-3 mb-6 md:gap-6 md:flex-row">
          {/* Menu Items */}
          <ul className="flex items-center gap-6 text-sm font-semibold md:gap-4 font-crimson">
            {navItemsInfo.map((item, index) => (
              <NavItem
                key={index}
                name={item.name}
                isLastItem={index === navItemsInfo.length - 1}
              />
            ))}
          </ul>

          <span className="text-2xl text-primary-gradient">·</span>

          {/* Link Items */}
          <ul className="flex gap-6 text-lg text-white md:gap-4">
            {linkItems.map((item) => (
              <li key={item.id}>
                <a href={item.href} target="_blank" rel="noreferrer">
                  <span className="transition-all duration-200 hover:text-primaryColor-defaultColor">
                    {item.icon}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Logo */}
        <a href="/">
          <h1 className="absolute text-sm font-bold text-white transform -translate-x-1/2 bottom-8 left-1/2 font-crimson">
            qkrdmsgp_eh{' '}
            <span className="text-2xl text-primary-gradient"> .</span>
          </h1>
        </a>
      </div>
    </div>
  );
};

export default Footer;
