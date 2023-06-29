import React from 'react';
import MainLayout from '../components/MainLayout';

const HomePage = () => {
  return (
    <MainLayout>
      <div className="h-[10000px]">
        <div className="w-full h-96 bg-yellow-400">hello</div>
        <div className="w-full h-96 bg-yellow-500">hello</div>
        <div className="w-full h-96 bg-yellow-600">hello</div>
        <div className="w-full h-96 bg-yellow-700">hello</div>
      </div>
    </MainLayout>
  );
};

export default HomePage;
