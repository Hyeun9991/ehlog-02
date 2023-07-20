import React from 'react';
import { BsFillImageFill } from 'react-icons/bs';

const EmptyImage = ({ className }) => {
  return (
    <div
      className={`flex items-center justify-center object-cover w-full bg-zinc-200/70 ${className}`}
    >
      <BsFillImageFill className="text-5xl text-zinc-600" />
    </div>
    // <div
    //   className={`flex items-center justify-center object-cover w-full bg-primary-gradient ${className}`}
    // >
    //   <BsFillImageFill className="text-5xl text-blue-50/60" />
    // </div>
  );
};

export default EmptyImage;
