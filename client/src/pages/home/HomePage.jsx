import React from 'react';
import MainLayout from '../../components/Layout/MainLayout';
import SearchBanner from './container/SearchBanner';
import Articles from './container/Articles';
import Banner from './container/Banner';
import AboutBanner from './container/AboutBanner';
import ArticleSliderBanner from './container/ArticleSliderBanner';

const HomePage = () => {
  return (
    <MainLayout>
      <Banner />
      <SearchBanner />
      <ArticleSliderBanner />
      {/* <Articles /> */}
      <AboutBanner />
    </MainLayout>
  );
};

export default HomePage;
