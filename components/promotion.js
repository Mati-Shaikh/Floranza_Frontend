import React, { useState } from 'react';
import { Star, UserCircle2, Crown, Briefcase, Sparkles, ShoppingBag, Heart, Store } from 'lucide-react';
import { useRouter } from 'next/router'; // Import the useRouter hook

const PerfumePromoSection = () => {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeEvent, setActiveEvent] = useState('all');

  const categories = [
    { id: 'men', name: 'Men', icon: UserCircle2 },
    { id: 'women', name: 'Women', icon: Crown },
    { id: 'business', name: 'Business', icon: Briefcase },
    { id: 'luxury', name: 'Luxury', icon: Sparkles }
  ];

  const bestSellers = [
    {
      id: 1,
      name: 'Floral Crown',
      description: 'A seductive blend of Damascus rose, vanilla, and amber',
      price: 2450,
      rating: 4.8,
      reviews: 256,
      category: 'women',
      events: ['wedding', 'party', 'date'],
      image: '/FC.png'
    },
    {
      id: 2,
      name: 'Rosalina',
      description: 'Fresh aquatic notes with cedar and citrus undertones',
      price: 1550,
      rating: 4.7,
      reviews: 189,
      category: 'men',
      events: ['summer', 'date', 'party'],
      image: '/Rosalina.png'
    },
    {
      id: 3,
      name: 'Oud Previlage',
      description: 'Sophisticated leather and wood notes with a hint of spice',
      price: 1979.99,
      rating: 4.9,
      reviews: 324,
      category: 'business',
      events: ['business', 'winter'],
      image: '/Oud.png'
    }
  ];

  const newArrivals = [
   
    {
      id: 2,
      name: 'Rosalina',
      description: 'Fresh aquatic notes with cedar and citrus undertones',
      price: 1550,
      rating: 4.7,
      reviews: 189,
      category: 'men',
      events: ['summer', 'date', 'party'],
      image: '/Rosalina.png'
    },
    {
      id: 3,
      name: 'Oud Previlage',
      description: 'Sophisticated leather and wood notes with a hint of spice',
      price: 1979.99,
      rating: 4.9,
      reviews: 324,
      category: 'business',
      events: ['business', 'winter'],
      image: '/Oud.png'
    },
    {
      id: 5,
      name: 'Ruby Seduction',
      description: 'Sophisticated leather and wood notes with a hint of spice',
      price: 1759.99,
      rating: 4.9,
      reviews: 324,
      category: 'business',
      events: ['business', 'winter'],
      image: '/RS.png'
    },
    {
      id: 6,
      name: 'Spicewave',
      description: 'Sophisticated leather and wood notes with a hint of spice',
      price: 1849.99,
      rating: 4.9,
      reviews: 324,
      category: 'business',
      events: ['business', 'winter'],
      image: '/Spicewave.png'
    }
  ];

  const ourCollection = [
    {
      id: 1,
      name: 'Floral Crown',
      description: 'A seductive blend of Damascus rose, vanilla, and amber',
      price: 2450,
      rating: 4.8,
      reviews: 256,
      category: 'women',
      events: ['wedding', 'party', 'date'],
      image: '/FC.png'
    },
    {
      id: 2,
      name: 'Rosalina',
      description: 'Fresh aquatic notes with cedar and citrus undertones',
      price: 1550,
      rating: 4.7,
      reviews: 189,
      category: 'men',
      events: ['summer', 'date', 'party'],
      image: '/Rosalina.png'
    },
    {
      id: 3,
      name: 'Oud Previlage',
      description: 'Sophisticated leather and wood notes with a hint of spice',
      price: 1979.99,
      rating: 4.9,
      reviews: 324,
      category: 'business',
      events: ['business', 'winter'],
      image: '/Oud.png'
    },
    {
      id: 4,
      name: 'Floral Crown 2',
      description: 'Sophisticated leather and wood notes with a hint of spice',
      price: 2449.99,
      rating: 4.9,
      reviews: 324,
      category: 'business',
      events: ['business', 'winter'],
      image: '/FC2.png'
    },
    {
      id: 5,
      name: 'Ruby Seduction',
      description: 'Sophisticated leather and wood notes with a hint of spice',
      price: 1759.99,
      rating: 4.9,
      reviews: 324,
      category: 'business',
      events: ['business', 'winter'],
      image: '/RS.png'
    },
    {
      id: 6,
      name: 'Spicewave',
      description: 'Sophisticated leather and wood notes with a hint of spice',
      price: 1849.99,
      rating: 4.9,
      reviews: 324,
      category: 'business',
      events: ['business', 'winter'],
      image: '/Spicewave.png'
    }
  ];

  const renderPerfumeSection = (title, perfumes) => (
    <div className="max-w-7xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-[#BBA14F] mb-8 text-center">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {perfumes.map((perfume) => (
          <div
            key={perfume.id}
            className="bg-gray-900 rounded-lg overflow-hidden group"
          >
            <div className="relative">
              <img
                src={perfume.image}
                alt={perfume.name}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute top-4 right-4">
                <button className="p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75">
                  <Heart className="w-6 h-6 text-[#BBA14F]" />
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-[#BBA14F]">
                  {perfume.name}
                </h3>
                <p className="text-2xl text-[#BBA14F] font-bold">
                  RS{perfume.price}
                </p>
              </div>
              <p className="text-gray-400 text-sm mb-4">{perfume.description}</p>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-[#BBA14F] fill-current" />
                  <span className="text-[#BBA14F] ml-2">{perfume.rating}</span>
                  <span className="text-gray-400 text-sm ml-2">({perfume.reviews} reviews)</span>
                </div>
                <div className="flex gap-2">
                  {perfume.events.slice(0, 2).map((event) => (
                    <span key={event} className="px-2 py-1 bg-black rounded-full text-xs text-[#BBA14F]">
                      {event}
                    </span>
                  ))}
                </div>
              </div>
              <button
                className="w-full py-3 bg-[#BBA14F] text-black rounded-md font-semibold
                          hover:bg-[#9A844A] transition-all duration-300 ease-in-out
                          flex items-center justify-center gap-2"
                onClick={() => router.push('/test')} // Add navigation to '/test'
              >
                <ShoppingBag className="w-5 h-5" />
                Go to Perfume Section
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section with Sale Banner */}
      <div className="relative h-96 overflow-hidden">
        <img 
          src="/perfume2.jpg " 
          alt="Luxury Perfumes" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-[#BBA14F] mb-4">
              25% OFF
            </h1>
            <p className="text-2xl text-[#BBA14F]">
              Exclusive Perfume Collection
            </p>
            <button className="mt-8 px-8 py-3 bg-[#BBA14F] text-black rounded-full font-semibold 
              hover:bg-[#9A844A] transition-all duration-300 ease-in-out">
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
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className={`bg-gray-900 rounded-lg p-6 text-center cursor-pointer 
                  hover:bg-gray-800 transition-all duration-300 ease-in-out
                  ${activeCategory === category.id ? 'ring-2 ring-[#BBA14F]' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                <div className="flex justify-center mb-4">
                  <IconComponent className="w-12 h-12 text-[#BBA14F]" />
                </div>
                <h3 className="text-[#BBA14F] font-semibold">{category.name}</h3>
              </div>
            );
          })}
        </div>
      </div>

      {/* Best Sellers Section */}
      {renderPerfumeSection('Best Sellers', bestSellers)}

      {/* New Arrivals Section */}
      {renderPerfumeSection('New Arrivals', newArrivals)}

      {/* Our Collection Section */}
      {renderPerfumeSection('Our Collection', ourCollection)}

      {/* Rest of the component remains the same */}
      {/* Events Section and Newsletter Section */}
      
    </div>
  );
};

export default PerfumePromoSection;