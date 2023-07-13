import React from 'react';
import { images } from '../../../constants';
import { linkItems } from '../../../components/Layout/Header/MenuItems';

const AboutBanner = () => {
  return (
    <section className="border-b-2 bg-secondColor-defaultColor border-secondColor-light dark:border-secondColor-dark dark:bg-bgColor-dark">
      <div className="flex flex-col items-center justify-center w-full h-full gap-4 main-container">
        {/* Profile */}
        <div className="w-16 sm:w-24">
          <img
            src={images.PostProfileImage}
            alt="profile"
            className="w-full h-full border-2 rounded-full border-secondColor-light dark:border-secondColor-dark"
          />
        </div>
        {/* Info */}
        <div className="flex flex-col items-center select-none">
          <p className="text-base text-white md:text-lg logo-text">
            qkrdmsgp_eh <span className="primary-dot-2xl"> .</span>
          </p>
          <p className="mt-1 text-xs font-light text-white/60">
            Frontend Developer
          </p>
        </div>
        {/* Link Items */}
        <ul className="flex items-center gap-4 mt-4">
          {linkItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.to}
                target="_blank"
                rel="noreferrer"
                className="active-button-res bg-secondColor-light/60 text-white/60"
              >
                {item.icon}
              </a>
            </li>
          ))}
        </ul>
        {/* More Button */}
        <div className="flex justify-center gap-4 mt-6">
          <button className="text-white sm:text-white sm:secondary-button secondary-button-sm">
            More About
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
