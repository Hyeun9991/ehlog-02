import React from 'react';
import MainLayout from '../../components/MainLayout';
import Hero from './container/Hero';

const HomePage = () => {
  return (
    <MainLayout>
      <Hero />
      <div className="bg-blue-300 w-full h-60">Container</div>
      <div className="bg-blue-400 w-full h-60">Container</div>
      <div className="bg-blue-500 w-full h-60">Container</div>
      <div className="bg-blue-600 w-full h-60">Container</div>
      <div className="bg-blue-700 w-full h-60">Container</div>
      <div className="bg-blue-800 w-full h-60">Container</div>
      <div className="bg-blue-900 w-full h-60">Container</div>
    </MainLayout>
  );
};

export default HomePage;
