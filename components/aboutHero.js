import React from 'react';

const FragranceHero = () => {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-full">
          <img 
            src="/perfume2.jpg"
            alt="Fragrance bottle"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="container mx-auto px-6 py-24 md:py-32">
          <div className="max-w-xl">
            <h2 className="text-yellow-500 text-4xl md:text-5xl lg:text-6xl font-light mb-4">
              About
            </h2>
            <h1 className="text-[#BBA14F] text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              The New Fresh Sensation
            </h1>
            <p className="text-[#BBA14F] text-lg mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore 
              magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea.
            </p>
            <button className="px-8 py-3 border border-white text-[#BBA14F] rounded-full 
                             hover:bg-white hover:text-gray-900 transition-colors duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FragranceHero;