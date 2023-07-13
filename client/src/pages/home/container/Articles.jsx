import React from 'react';
import ArticleCard from '../../../components/ArticleCard';

const Articles = () => {
  return (
    <section className="border-b-2 border-secondColor-light bg-bgColor-light dark:bg-bgColor-dark dark:border-secondColor-dark">
      <div className="main-container">
        <h1 className="title-2xl">
          Never Miss a New Post
          <span className="text-4xl primary-dot-2xl"> .</span>
        </h1>
        <ArticleCard />
        <div className="flex justify-center gap-4">
          <button className="secondary-button-sm sm:secondary-button">
            More Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default Articles;
