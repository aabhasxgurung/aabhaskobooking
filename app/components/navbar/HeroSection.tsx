"use client";

import { useSpring, animated } from "react-spring";

import React from "react";
import Categories from "./Categories";

const HeroSection = () => {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 3000 },
  });
  return (
    <div>
      <Categories />
      <div
        className="relative min-h-screen bg-cover bg-center bg-no-repeat "
        style={{ backgroundImage: 'url("/images/image.jpg")' }}
      >
        <animated.div className="p-8 text-center" style={fadeIn}>
          <div className="absolute inset-0 bg-gradient-to-b from-black opacity-40"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h1 className="text-4xl font-bold mb-6">Find your best stay</h1>
            <p className="text-lg">
              Explore the best listings and find your perfect stay.
            </p>
          </div>
        </animated.div>
      </div>
    </div>
  );
};

export default HeroSection;
