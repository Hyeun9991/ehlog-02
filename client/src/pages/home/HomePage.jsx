import React from 'react';
import MainLayout from '../../components/MainLayout';
import Hero from './container/Hero';
import Articles from './container/Articles';

const HomePage = () => {
  return (
    <MainLayout>
      <Hero />
      <Articles />
      {/* <div className="w-full bg-blue-300 h-60">Container</div>
      <div className="w-full bg-blue-400 h-60">Container</div>
      <div className="w-full bg-blue-500 h-60">Container</div>
      <div className="w-full bg-blue-600 h-60">Container</div>
      <div className="w-full bg-blue-700 h-60">Container</div>
      <div className="w-full bg-blue-800 h-60">Container</div>
      <div className="w-full bg-blue-700 h-60">Container</div>
      <div className="w-full bg-blue-600 h-60">Container</div>
      <div className="w-full bg-blue-500 h-60">Container</div>
      <div className="w-full bg-blue-400 h-60">Container</div>
      <div className="w-full bg-blue-300 h-60">Container</div> */}
    </MainLayout>
  );
};

export default HomePage;
