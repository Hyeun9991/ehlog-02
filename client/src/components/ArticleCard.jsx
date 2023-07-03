import React from 'react';
import { images } from '../constants';
import { BsFillPatchCheckFill } from 'react-icons/bs';

const ArticleCard = ({ className }) => {
  return (
    <div
      className={`overflow-hidden border-2 border-secondColor-light ${className}`}
    >
      <img
        src={images.PostImage}
        alt="title"
        className="object-cover object-center w-full h-auto"
      />
      <div className="p-5">
        <div className="flex items-center justify-between">
          {/* Writer Info */}
          <div className="flex items-center gap-2 mb-4">
            <img src={images.PostProfileImage} alt="post profile" />
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-semibold text-textColor-light font-crimson dark:text-textColor-dark">
                qkrdmsgp_eh
              </h4>
              <span>
                <BsFillPatchCheckFill className="text-sm text-primaryColor-defaultColor" />
              </span>
            </div>
          </div>
          <p className="mb-2 text-xs italic opacity-50 font-crimson text-textColor-light">
            2023.07.03 · 1시간전
          </p>
        </div>
        <h2 className="mb-1 text-lg font-bold md:text-xl text-textColor-light">
          Post Title 1
        </h2>
        <p className="text-sm text-textColor-light opacity-70">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
          molestiae esse sequi, error quia quasi asperiores aperiam nobis
          distinctio excepturi.
        </p>
      </div>
    </div>
  );
};

export default ArticleCard;
