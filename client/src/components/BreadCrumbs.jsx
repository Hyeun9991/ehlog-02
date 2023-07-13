import React from 'react';
import { Link } from 'react-router-dom';

const BreadCrumbs = ({ data }) => {
  return (
    <div className="flex items-center pt-4 overflow-x-auto whitespace-nowrap sm:pt-0">
      {data.map((item, index) => (
        <div className="text-xs hover-text" key={item.id}>
          <Link to={item.to}>{item.name}</Link>
          {index !== data.length - 1 && <span>/</span>}
        </div>
      ))}
    </div>
  );
};

export default BreadCrumbs;
