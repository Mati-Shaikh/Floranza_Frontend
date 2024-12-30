import React, { useState, useEffect } from 'react';
import { Play } from 'lucide-react';

export default function HeroSection() {
  const [text, setText] = useState('F');

  useEffect(() => {
    const words = [
      'F', 'Fl', 'Flo', 'Flor', 'Flora', 'Floranz', 'Floranza',
      ' ', 'C', 'Ca', 'Car', 'Care', 'Cares', ' ',
      'Y', 'Yo', 'You', ' ',
      'S', 'Sm', 'Sme', 'Smel', 'Smell'
    ];
    let index = 0;
    const interval = setInterval(() => {
      setText(words[index]);
      index = (index + 1) % words.length;
    }, 400);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="min-h-screen bg-black pt-16 relative overflow-hidden">
      {/* Left curved rectangle */}
      <div className="absolute left-24 top-1/2 -translate-y-1/2 w-80 h-96">
        <div className="w-full h-full rounded-[40px] overflow-hidden border-2 border-[#ffd700] relative">
          <img
            src="/perfume3.jpg"
            alt="Left decoration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div> {/* Dark overlay */}
        </div>
      </div>

      {/* Center circle */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px]">
        <div className="w-full h-full rounded-full overflow-hidden border-2 border-[#ffd700] relative">
          <img
            src="/perfume2.jpg"
            alt="Center decoration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div> {/* Dark overlay */}
        </div>
      </div>

      {/* Right curved rectangle with bottom-right curve */}
      <div className="absolute right-24 top-1/2 -translate-y-1/2 w-80 h-96">
        <div className="w-full h-full relative">
          <div className="absolute inset-0 border-2 border-[#ffd700] rounded-[40px] overflow-hidden" 
               style={{
                 borderBottomRightRadius: '160px'
               }}>
            <img
              src="/perfume3.jpg"
              alt="Right decoration"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-40"></div> {/* Dark overlay */}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-screen flex flex-col items-center justify-center text-center">
        {/* Flipping sentence */}
        <div className="max-w-3xl mx-auto px-6 text-center">
                    <h1 className="text-[#BBA14f] text-4xl md:text-6xl font-bold animate-bounce">
                        Welcome to Floranzon
                    </h1>
                    <p className="text-[#BBA14f] mt-4 mb-8 text-lg md:text-2xl">
                        Experience the Best Services with Us
                    </p>
                    
                </div>

        <div className="flex items-center gap-4">
          {/* <button className="px-8 py-3 text-white border-2 border-white rounded-full hover:bg-white hover:text-black transition-colors duration-300">
            Learn More
          </button>
          <button className="w-12 h-12 bg-[#ffd700] rounded-full flex items-center justify-center hover:bg-[#e6c200] transition-colors duration-300">
            <Play className="w-6 h-6 text-black ml-1" />
          </button> */}
        </div>
      </div>
    </div>
  );
}
