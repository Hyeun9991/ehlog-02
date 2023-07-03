import React from 'react';
import { FiSearch } from 'react-icons/fi';

const Hero = () => {
  return (
    <section className="border-b-2 bg-bgColor-light dark:bg-bgColor-dark border-secondColor-light h-72 lg:h-56">
      <div className="container flex flex-col items-center justify-center w-full h-full gap-10 mx-auto lg:flex-row lg:justify-around">
        <h1 className="title-2xl">
          Read the most interesting articles{' '}
          <span className="text-4xl text-primary-gradient"> .</span>
        </h1>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search article"
              className="w-64 h-10 text-sm font-semibold bg-transparent border-b-2 outline-none border-secondColor-light text-primary-gradient placeholder:font-crimson placeholder:font-light dark:text-primaryColor-dark"
            />
            <button className="p-2 rounded-full cursor-pointer primary-button">
              <FiSearch />
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs italic font-semibold opacity-50 font-crimson text-textColor-light dark:text-textColor-dark">
              Popular Tags:
            </span>
            <ul className="flex gap-2 text-xs font-bold font-crimson text-textColor-light dark:text-textColor-dark">
              <li className="cursor-pointer hover:font-sans hover:text-primary-gradient">
                Design
              </li>
              <li className="cursor-pointer hover:font-sans hover:text-primary-gradient">
                User Experience
              </li>
              <li className="cursor-pointer hover:font-sans hover:text-primary-gradient">
                User Interfaces
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
