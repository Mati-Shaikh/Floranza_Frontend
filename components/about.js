import React, { useEffect, useState } from 'react';
import BenefitsSection from './benefits';

const AnimatedCounter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime;
    let animationFrame;
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      const percentage = Math.min(progress / duration, 1);
      const currentCount = Math.floor(end * percentage);
      
      setCount(currentCount);
      
      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);
  
  return <span className="text-amber-400 text-5xl font-bold">{count}</span>;
};

const StatisticsSection = () => {
  const [shouldAnimate, setShouldAnimate] = useState(true);
  
  useEffect(() => {
    // Restart animation every 10 seconds
    const interval = setInterval(() => {
      setShouldAnimate(false);
      setTimeout(() => setShouldAnimate(true), 100);
    }, 10000);
    
    return () => clearInterval(interval);
  }, []);
  
  const stats = [
    { label: 'Years Experience', value: 13 },
    { label: 'Product', value: 20 },
    { label: 'Happy Customers', value: 100 },
    { label: 'outlets', value: 11 }
  ];
  
  return (
    <div className="w-full bg-black py-16 px-4">
      {/* Featured Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-[#BBA14F] text-6xl font-bold mb-4">Featured</h2>
        <h1 className="text-white text-5xl font-bold mb-4">The Perfection</h1>
        <p className="text-gray-400 max-w-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
        </p>
      </div>
      
      {/* Services Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Free Shipping Card */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700">
          <div className="flex flex-col items-center text-center">
            <div className="text-white mb-4">
              <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-white text-xl font-bold mb-2">Free Shipping</h3>
            <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
            <a href="#" className="text-amber-400 mt-4 flex items-center hover:text-amber-300 transition-colors">
              Learn More
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
        
        {/* 24/7 Support Card */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700">
          <div className="flex flex-col items-center text-center">
            <div className="text-white mb-4">
              <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-white text-xl font-bold mb-2">24/7 Support</h3>
            <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
            <a href="#" className="text-amber-400 mt-4 flex items-center hover:text-amber-300 transition-colors">
              Learn More
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Statistics Counter */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            {shouldAnimate && <AnimatedCounter end={stat.value} />}
            {!shouldAnimate && <span className="text-amber-400 text-5xl font-bold">{stat.value}</span>}
            <span className="text-gray-400 mt-2">{stat.label}</span>
          </div>
        ))}
      </div>
      <BenefitsSection/>
    </div>
  );
};

export default StatisticsSection;