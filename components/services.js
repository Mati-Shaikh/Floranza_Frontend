import React from 'react';
import { Check } from 'lucide-react';

export default function PerfumeSection() {
  return (
    <div className="min-h-screen bg-[#1e1e1e] py-20">
      <div className="container mx-auto px-4">
        {/* Top Heading Section */}
        <div className="text-center mb-20">
          <h3 className="text-5xl font-mono text-[#ffd700] mb-4">Perfume</h3>
          <h2 className="text-6xl font-bold text-white">Create Your Signature</h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Image Section */}
          <div className="relative">
            <div className="rounded-[40px] overflow-hidden h-full">
              <img
                src="/perfume1.jpg"
                alt="Perfume bottle"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Middle Content Section */}
          <div className="flex flex-col justify-center space-y-6 p-6">
            <h3 className="text-4xl font-bold text-white">Our<br />Product</h3>
            <p className="text-gray-400">
            Frances brings you the finest order processing experience, ensuring seamless management of your product needs. With a focus on efficiency and reliability, we strive to simplify your shopping journey while delivering quality at every step. Experience a smooth, hassle-free process tailored to your satisfaction
            </p>
            <button className="text-white border-2 border-white rounded-full px-8 py-3 w-fit hover:bg-white hover:text-black transition-colors duration-300">
              Learn More
            </button>
          </div>

          {/* Right Features Section */}
          <div className="flex flex-col justify-center p-6 bg-[#252525] rounded-3xl">
            <h3 className="text-3xl font-bold text-white mb-4">Sunset Lime</h3>
            <p className="text-gray-400 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            
            <div className="space-y-4">
              {[
                'sed quia non numquam',
                'modi tempora incidunt',
                'nostrum exercitationem',
                'vel illum qui dolorem'
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="bg-[#ffd700] rounded-full p-1">
                    <Check className="w-4 h-4 text-black" />
                  </div>
                  <span className="text-[#ffd700]">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}