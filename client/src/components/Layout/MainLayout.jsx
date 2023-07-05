import React, { useState, useEffect } from 'react';
import Header from './Header/Header';
import Footer from './Footer';

const MainLayout = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollActive, setScrollActive] = useState(false);

  const scrollHandler = () => {
    if (scrollY > 200) {
      setScrollY(window.pageYOffset);
      setScrollActive(true);
    } else {
      setScrollY(window.pageYOffset);
      setScrollActive(false);
    }
  };

  useEffect(() => {
    const scrollListener = () => {
      window.addEventListener('scroll', scrollHandler);
    };
    scrollListener();

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  });

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
