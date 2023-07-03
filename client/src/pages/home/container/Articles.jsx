import React from 'react';
import ArticleCard from '../../../components/ArticleCard';

const Articles = () => {
  return (
    <section className="p-4 border-b-2 bg-bgColor-light border-secondColor-light dark:bg-bgColor-dark dark:border-secondColor-dark">
      <div className="container flex flex-col gap-8 mx-auto mb-16">
        <h1 className="mt-16 text-textColor-light title-2xl dark:text-textColor-dark">
          Never Miss a New Post
          <span className="text-4xl text-primary-gradient"> .</span>
        </h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </div>
      </div>
    </section>
  );
};

export default Articles;
