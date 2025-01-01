import React, { useState } from 'react';
import { Star } from 'lucide-react';

const PerfumePromoSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeEvent, setActiveEvent] = useState('all');

  const categories = [
    { id: 'men', name: 'Men', icon: '👔' },
    { id: 'women', name: 'Women', icon: '👗' },
    { id: 'business', name: 'Business', icon: '💼' },
    { id: 'luxury', name: 'Luxury', icon: '✨' }
  ];

  const events = [
    { id: 'wedding', name: 'Wedding', season: 'All Seasons', icon: '💑' },
    { id: 'winter', name: 'Winter Collection', season: 'Winter', icon: '❄️' },
    { id: 'summer', name: 'Summer Breeze', season: 'Summer', icon: '☀️' },
    { id: 'autumn', name: 'Autumn Elegance', season: 'Autumn', icon: '🍂' },
    { id: 'spring', name: 'Spring Bloom', season: 'Spring', icon: '🌸' },
    { id: 'party', name: 'Party Night', season: 'All Seasons', icon: '🎉' },
    { id: 'date', name: 'Date Night', season: 'All Seasons', icon: '💝' },
    { id: 'business', name: 'Business Meeting', season: 'All Seasons', icon: '💼' }
  ];

  const bestSellers = [
    {
      id: 1,
      name: 'Midnight Rose',
      price: 129.99,
      rating: 4.8,
      category: 'women',
      events: ['wedding', 'party', 'date'],
      image: '/perfume2.jpg'
    },
    {
      id: 2,
      name: 'Ocean Breeze',
      price: 99.99,
      rating: 4.7,
      category: 'men',
      events: ['summer', 'date', 'party'],
      image: '/perfume2.jpg'
    },
    {
      id: 3,
      name: 'Executive Suite',
      price: 149.99,
      rating: 4.9,
      category: 'business',
      events: ['business', 'winter'],
      image: '/perfume2.jpg'
    }
  ];

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section with Sale Banner */}
      <div className="relative h-96 overflow-hidden animate-fade-in">
        <img 
          src="/perfume2.jpg" 
          alt="Luxury Perfumes" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-[#BBA14F] mb-4 animate-pulse">
              25% OFF
            </h1>
            <p className="text-2xl text-[#BBA14F] animate-bounce">
              Exclusive Perfume Collection
            </p>
            <button className="mt-8 px-8 py-3 bg-[#BBA14F] text-black rounded-full font-semibold 
              hover:bg-[#9A844A] transition-all duration-300 ease-in-out 
              hover:scale-105 active:scale-95">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-[#BBA14F] mb-8 text-center">
          Shop By Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-gray-900 rounded-lg p-6 text-center cursor-pointer 
                hover:bg-gray-800 transition-all duration-300 ease-in-out
                hover:scale-105 active:scale-95 transform"
              onClick={() => setActiveCategory(category.id)}
            >
              <div className="text-4xl mb-4 hover:animate-bounce">{category.icon}</div>
              <h3 className="text-[#BBA14F] font-semibold">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Events Section */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#BBA14F] mb-8 text-center">
            Perfect for Every Occasion
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-black rounded-lg p-6 text-center cursor-pointer
                  transform transition-all duration-300 ease-in-out
                  hover:scale-105 active:scale-95"
                onClick={() => setActiveEvent(event.id)}
              >
                <div className="text-4xl mb-4 hover:animate-bounce">{event.icon}</div>
                <h3 className="text-[#BBA14F] font-semibold mb-2">{event.name}</h3>
                <p className="text-gray-400 text-sm">{event.season}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Best Sellers Section */}
      <div className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-[#BBA14F] mb-8 text-center">
          Best Sellers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bestSellers.map((perfume) => (
            <div
              key={perfume.id}
              className="bg-gray-900 rounded-lg overflow-hidden transform
                transition-all duration-300 ease-in-out hover:scale-105
                opacity-0 animate-fade-slide-up"
            >
              <img
                src={perfume.image}
                alt={perfume.name}
                className="w-full h-64 object-cover hover:opacity-80 transition-opacity duration-300"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#BBA14F] mb-2">
                  {perfume.name}
                </h3>
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-[#BBA14F] fill-current" />
                  <span className="text-[#BBA14F] ml-2">{perfume.rating}</span>
                </div>
                <p className="text-2xl text-[#BBA14F] font-bold mb-4">
                  ${perfume.price}
                </p>
                <button className="w-full py-3 bg-[#BBA14F] text-black rounded-md font-semibold
                  hover:bg-[#9A844A] transition-all duration-300 ease-in-out
                  hover:scale-105 active:scale-95">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#BBA14F] mb-4">
            Stay Updated
          </h2>
          <p className="text-gray-400 mb-8">
            Subscribe to receive exclusive offers and new arrival updates
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md bg-black text-[#BBA14F] 
                border border-[#BBA14F] focus:outline-none focus:ring-2 
                focus:ring-[#BBA14F] transition-all duration-300"
            />
            <button className="px-6 py-3 bg-[#BBA14F] text-black rounded-md font-semibold
              hover:bg-[#9A844A] transition-all duration-300 ease-in-out
              hover:scale-105 active:scale-95">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfumePromoSection;