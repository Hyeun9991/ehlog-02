import React from 'react';
import { images } from '../../../constants';
import { linkItems } from '../../../components/Layout/Header/MenuItems';

const CTA = () => {
  return (
    <section className="border-b-2 py-14 bg-secondColor-defaultColor border-secondColor-light dark:border-secondColor-dark dark:bg-bgColor-dark">
      <div className="container flex flex-col items-center justify-center w-full h-full gap-4 mx-auto">
        {/* Profile */}
        <div className="w-24 h-24">
          <img
            src={images.PostProfileImage}
            alt="profile"
            className="w-full h-full border-2 rounded-full border-secondColor-light dark:border-secondColor-dark"
          />
        </div>
        {/* Info */}
        <div className="flex flex-col items-center">
          <p className="text-lg text-white logo-text">
            qkrdmsgp_eh{' '}
            <span className="text-2xl text-primary-gradient"> .</span>
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
                className="hover-icon text-white/60"
              >
                {item.icon}
              </a>
            </li>
          ))}
        </ul>
        {/* More Button */}
        <div className="flex justify-center gap-4 mt-6">
          <button className="py-3 text-sm font-normal text-white border-2 border-secondColor-light px-9 hover-text font-crimson hover:font-sans hover:font-semibold">
            More About
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
