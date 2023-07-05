import React from 'react';
import ArticleCard from '../../../components/ArticleCard';

const Articles = () => {
  return (
    <section className="border-b-2 pb-14 border-secondColor-light bg-bgColor-light dark:bg-bgColor-dark dark:border-secondColor-dark">
      <div className="w-full md:w-[700px] p-4 mx-auto">
        <h1 className="mb-4 mt-14 text-textColor-light title-2xl dark:text-textColor-dark">
          Never Miss a New Post
          <span className="text-4xl text-primary-gradient"> .</span>
        </h1>
        <ArticleCard />
        <div className="flex justify-center gap-4">
          <button className="py-3 text-sm border-2 border-secondColor-light px-9 hover-text font-crimson hover:font-sans">
            More Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default Articles;
