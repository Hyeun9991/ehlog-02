import React from 'react';
import { navItems } from '../MenuItems';

const LeftHeader = () => {
  return (
    <nav className="hidden h-full md:block">
      <ul className="flex h-full gap-8">
        {navItems.map((item) => (
          <li key={item.id} className="flex items-center h-full">
            <a
              href={item.to}
              className="flex items-center h-full text-sm hover-text"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default LeftHeader;
