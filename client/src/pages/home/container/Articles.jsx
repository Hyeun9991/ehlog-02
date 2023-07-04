import React from 'react';
import ArticleCard from '../../../components/ArticleCard';

const Articles = () => {
  return (
    <div className="bg-bgColor-light dark:bg-bgColor-dark">
      {/* Post Container */}
      <div className="flex flex-col w-full md:w-[700px] p-4 mx-auto">
        <h1 className="mb-4 mt-14 text-textColor-light title-2xl dark:text-textColor-dark">
          Never Miss a New Post
          <span className="text-4xl text-primary-gradient"> .</span>
        </h1>

        {/* Post Items */}
        <ArticleCard />
      </div>
    </div>
  );
};

export default Articles;
