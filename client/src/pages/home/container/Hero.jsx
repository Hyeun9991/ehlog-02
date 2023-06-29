import React from 'react';
import { FiSearch } from 'react-icons/fi';

const Hero = () => {
  return (
    <section className="bg-bgColor-light dark:bg-bgColor-dark border-secondColor-light border-b-2 h-72 lg:h-56">
      <div className="container mx-auto w-full h-full flex items-center flex-col justify-center gap-10 lg:flex-row lg:justify-around">
        <h1 className="font-crimson text-2xl md:text-3xl font-semibold">
          Read the most interesting articles.
        </h1>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="search article"
              className="bg-transparent border-secondColor-light border-b-2 w-64 h-10 outline-none font-semibold text-primaryColor-light placeholder:font-crimson placeholder:font-light dark:text-primaryColor-dark"
            />
            <button className="bg-primaryColor-light p-2 rounded-full text-black border-secondColor-light border-2 cursor-pointer hover:bg-blue-500 transition-all duration-200">
              <FiSearch />
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-crimson font-semibold italic text-xs opacity-50 text-textColor-light dark:text-textColor-dark">
              Popular Tags:
            </span>
            <ul className="font-crimson font-bold text-xs flex gap-2 text-textColor-light dark:text-textColor-dark">
              <li className="cursor-pointer hover:font-sans hover:text-primaryColor-light dark:hover:text-primaryColor-dark">
                Design
              </li>
              <li className="cursor-pointer hover:font-sans hover:text-primaryColor-light dark:hover:text-primaryColor-dark">
                User Experience
              </li>
              <li className="cursor-pointer hover:font-sans hover:text-primaryColor-light dark:hover:text-primaryColor-dark">
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
