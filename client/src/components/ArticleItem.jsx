import React from 'react';
import { images } from '../constants';
import EmptyImage from './EmptyImage';

const ArticleItem = () => {
  return (
    <div className="w-[300px] md:w-[360px] border-full-2">
      <EmptyImage className="h-[150px] md:h-[200px]" />
      <div className="flex flex-col gap-3 p-4">
        {/* Written Info */}
        <div className="flex items-center gap-2">
          <img src={images.PostProfileImage} alt="profile" className="w-6" />
          <p className="text-xs font-medium">
            qkrdmsgp_eh{' '}
            <span className="text-lg leading-3 primary-dot-2xl">.</span>
          </p>
        </div>
        {/* Content */}
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold sm:text-xl">New Post Title 1</h2>
          <p className="overflow-hidden text-sm leading-6 whitespace-normal sm:text-base font-nanum line-clamp-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            laboriosam nihil provident quidem doloribus perspiciatis vel itaque,
            impedit quasi, recusandae harum amet et rerum aspernatur iure nobis
            velit nostrum veniam adipisci cum tempore nemo commodi optio
            quaerat? Praesentium iusto hic amet voluptas tenetur! Facilis nemo
            perspiciatis debitis rem minus vitae eum quam excepturi est
            delectus, dolores, laborum consequuntur ratione quibusdam saepe
            obcaecati odit adipisci odio modi, non vel ipsam error.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArticleItem;
