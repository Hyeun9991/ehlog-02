import React, { useRef } from 'react';
import ArticleItem from '../../../components/ArticleItem';
import { BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs';

const ArticleSliderBanner = () => {
  const contentRef = useRef(null);

  const scrollLeft = () => {
    if (contentRef.current) {
      contentRef.current.scrollLeft -= 540;
    }
  };
  const scrollRight = () => {
    if (contentRef.current) {
      contentRef.current.scrollLeft += 540;
    }
  };

  return (
    <section className="border-b-2 border-secondColor-light bg-bgColor-light dark:bg-bgColor-dark dark:border-secondColor-dark">
      <div className="container mx-auto px-4 lg:px-0 lg:w-[1080px] py-14">
        <h1 className="title-2xl">
          Never Miss a New Post
          <span className="text-4xl primary-dot-2xl"> .</span>
        </h1>
        <div className="relative py-10 md:py-12">
          <div className="flex gap-3 text-2xl">
            <button
              className="hidden lg:secondary-button-icon absolute top-1/2 left-[-4rem]"
              onClick={scrollLeft}
            >
              <BsArrowLeftShort />
            </button>
            <button
              className="hidden lg:secondary-button-icon absolute top-1/2 right-[-4rem]"
              onClick={scrollRight}
            >
              <BsArrowRightShort />
            </button>
          </div>
          {/* Slider Items */}
          <div
            ref={contentRef}
            className="flex gap-6 p-0 overflow-x-auto sm:p-4 md:gap-8 slider scroll-smooth"
          >
            <div>
              <ArticleItem />
            </div>
            <div>
              <ArticleItem />
            </div>
            <div>
              <ArticleItem />
            </div>
            <div>
              <ArticleItem />
            </div>
            <div>
              <ArticleItem />
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-4">
          <button className="secondary-button-sm sm:secondary-button">
            More Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default ArticleSliderBanner;
