// HeroSection.js

import React from 'react';

const Hero = () => {
  return (
    <div className="bg-blue-500 text-white py-16">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Explore the Boat Lifestyle</h1>
        <p className="text-lg mb-8">Discover the freedom of life on the water.</p>
        <button className="bg-white text-blue-500 hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded-full">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
