import React from 'react';
import Lottie from 'react-lottie-player';
import lottieJson from '../assets/emailAnimation.json';

export default function EmailAnimation() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
      style={{ width: 75, height: 75 }}
    />
  );
}
