import React from 'react';

const BenefitCard = ({ icon, title, description }) => {
  return (
    <div className="group h-64 w-full perspective">
      <div className="relative preserve-3d group-hover:rotate-y-180 w-full h-full duration-1000">
        {/* Front of card */}
        <div className="absolute backface-hidden w-full h-full">
          <div className="flex flex-col items-center justify-center h-full p-8 bg-gray-800 rounded-lg border border-gray-700">
            <div className="w-16 h-16 mb-4 text-amber-400 border-2 border-amber-400 rounded-full flex items-center justify-center">
              {icon}
            </div>
            <h3 className="text-white text-2xl font-bold mb-2">{title}</h3>
            <p className="text-gray-400 text-center">{description}</p>
          </div>
        </div>
        
        {/* Back of card */}
        <div className="absolute backface-hidden w-full h-full rotate-y-180">
          <div className="flex flex-col items-center justify-center h-full p-8 bg-amber-400 rounded-lg text-gray-900">
            <h4 className="text-xl font-bold mb-4">More About {title}</h4>
            <ul className="text-left space-y-2">
              <li>• Feature 1 for {title}</li>
              <li>• Feature 2 for {title}</li>
              <li>• Feature 3 for {title}</li>
            </ul>
            <button className="mt-4 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const BenefitsSection = () => {
  const benefits = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Quick Payment',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Ut elit tellus.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Affordable Prices',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Ut elit tellus.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Big Deals',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Ut elit tellus.'
    }
  ];

  return (
    <div className="w-full bg-black py-16 px-4">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-amber-400 text-6xl font-light mb-4">Benefit</h2>
        <h1 className="text-white text-5xl font-bold">Perks & Benefit</h1>
      </div>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <BenefitCard
            key={index}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
          />
        ))}
      </div>
    </div>
  );
};

export default BenefitsSection;