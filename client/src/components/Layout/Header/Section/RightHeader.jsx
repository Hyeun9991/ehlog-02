import React, { useState } from 'react';
import { linkItems } from '../MenuItems';

const RightHeader = () => {
  const [token, setToken] = useState(false);

  return (
    <nav className="hidden h-full md:block">
      <ul className="flex items-center h-full gap-4">
        {token ? (
          <>
            {linkItems.map((item) => (
              <li key={item.id}>
                <a href={item.to} className="hover-icon">
                  {item.icon}
                </a>
              </li>
            ))}
            <div className="h-full">
              <a
                href="/writer"
                className="flex items-center justify-center h-full px-6 text-sm hover-text"
              >
                Writer
              </a>
            </div>
          </>
        ) : (
          <>
            {linkItems.map((item) => (
              <li key={item.id}>
                <a href={item.to} className="hover-icon">
                  {item.icon}
                </a>
              </li>
            ))}
          </>
        )}
      </ul>
    </nav>
  );
};

export default RightHeader;
