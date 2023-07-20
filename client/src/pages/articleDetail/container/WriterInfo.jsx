import React from 'react';
import { images } from '../../../constants';
import { linkItems } from '../../../components/Layout/Header/MenuItems';

const WriterInfo = () => {
  return (
    <section className=" bg-secondColor-light/5 dark:bg-secondColor-dark/5">
      <div className="flex flex-col gap-3 border-b main-container border-secondColor-light/20">
        {/* Writer Profile */}
        <img
          src={images.PostProfileImage}
          alt="profile"
          className="w-16 sm:w-20"
        />
        <div className="flex flex-col justify-between gap-3 sm:gap-0 sm:items-center sm:flex-row">
          {/* Name & Description */}
          <div className="flex flex-col gap-1">
            <p className="text-xl font-medium sm:text-2xl text-textColor-light dark:text-textColor-dark">
              Written by qkrdmsgp_eh{' '}
              <span className="text-3xl primary-dot-2xl"> .</span>
            </p>
            <p className="text-sm text-textColor-light/80 dark:text-textColor-dark/60">
              Frontend Developer
            </p>
          </div>
          {/* Link Items */}
          <ul className="flex gap-2 sm:gap-4">
            {linkItems.map((item) => (
              <li key={item.id}>
                <a href={item.to} className="active-button-sm sm:active-button">
                  <span>{item.icon}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WriterInfo;
