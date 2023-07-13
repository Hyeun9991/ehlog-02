import React from 'react';
import { navItems } from '../MenuItems';
import { Link } from 'react-router-dom';

const LeftHeader = () => {
  return (
    <nav className="hidden h-full md:block">
      <ul className="flex h-full gap-8">
        {navItems.map((item) => (
          <li key={item.id} className="flex items-center h-full">
            <Link
              to={item.to}
              className="flex items-center h-full text-sm hover-text"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default LeftHeader;
