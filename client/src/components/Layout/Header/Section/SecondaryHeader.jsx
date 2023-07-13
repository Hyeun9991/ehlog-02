import React from 'react';
import { linkItems } from '../MenuItems';
import { Link } from 'react-router-dom';

const SecondaryHeader = () => {
  return (
    <div className="h-12 p-4 border-b-2 sm:p-0 bg-bgColor-light dark:bg-bgColor-light border-secondColor-light dark:border-secondColor-dark md:h-16">
      <div className="container flex items-center justify-between h-full mx-auto md:px-6">
        <Link to="/">
          <h1 className="logo-text">
            qkrdmsgp_eh{' '}
            <span className="text-2xl text-primary-gradient"> .</span>
          </h1>
        </Link>
        <ul className="flex items-center gap-4">
          {linkItems.map((item) => (
            <li key={item.id}>
              <a href={item.to} className="hover-icon">
                {item.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SecondaryHeader;
