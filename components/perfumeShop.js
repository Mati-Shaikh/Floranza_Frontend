import React, { useState } from 'react';
import { Search, Filter, ShoppingCart, X } from 'lucide-react';

// Sample perfume data
const perfumes = [
  {
    id: 1,
    name: "Midnight Rose",
    price: 129.99,
    description: "A seductive blend of dark roses and vanilla",
    image: "/perfume2.jpg"
  },
  {
    id: 2,
    name: "Ocean Breeze",
    price: 89.99,
    description: "Fresh aquatic notes with a hint of citrus",
    image: "/perfume2.jpg"
  },
  {
    id: 3,
    name: "Golden Oud",
    price: 199.99,
    description: "Rich middle eastern oud with golden amber",
    image: "/perfume2.jpg"
  },
];

export default function PerfumeShop() {
  const [searchQuery, setSearchQuery] = useState("");
  const [priceFilter, setPriceFilter] = useState("all");
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);

  const [checkoutDetails, setCheckoutDetails] = useState({
    name: "",
    email: "",
    address: "",
  });
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  const [subCategories, setSubCategories] = useState([]);

  const handleCategoryChange = (category) => {
    setPriceFilter(category);

    // Update subcategories based on selected category
    if (category === 'Men') {
      setSubCategories(['Winter Specialist', 'Summer', 'Autumn', 'Business', 'Party']);
    } else if (category === 'Women') {
      setSubCategories(['Marriage', 'Luxury', 'Winter Specialist', 'Summer', 'Party']);
    } else {
      setSubCategories([]); // Reset if "All" or no specific category is selected
    }
  };

  const addToCart = (perfume) => {
    setCart([...cart, perfume]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const handleCheckoutChange = (e) => {
    setCheckoutDetails({
      ...checkoutDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    setCheckoutSuccess(true);
    setCart([]);
    setShowCheckout(false);
  };

  const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-[#1e1e1e] text-white">
      {/* Header Section */}
      <header className="py-6 px-4 border-b border-[#BBA14F]">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl text-[#BBA14f] font-bold">Luxury Perfumes</h1>
          <button 
            onClick={() => setShowCart(true)}
            className="relative p-2"
          >
            <ShoppingCart className="w-6 h-6 text-[#BBA14F]" />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#BBA14F] text-black rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cart.length}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Search and Filter Section */}
      <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search perfumes..."
            className="w-full bg-[#2a2a2a] border border-[#BBA14F] rounded-full py-3 px-12 focus:outline-none focus:ring-2 focus:ring-[#BBA14F]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <select
          className="bg-[#2a2a2a] border border-[#BBA14F] rounded-full py-3 px-6 focus:outline-none focus:ring-2 focus:ring-[#BBA14F]"
          value={priceFilter}
          onChange={(e) => handleCategoryChange(e.target.value)}
        >
          <option value="all">Categories</option>
          <option value="Men">Men</option>
          <option value="Women">Women</option>
        </select>
      </div>

      {/* Subcategories Section */}
      {subCategories.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-4">
          {subCategories.map((subCategory, index) => (
            <div
              key={index}
              className="bg-[#2a2a2a] border border-[#BBA14F] rounded-full py-2 px-4 text-[#BBA14F] cursor-pointer hover:bg-[#BBA14F] hover:text-black transition"
            >
              {subCategory}
            </div>
          ))}
        </div>
      )}
    </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {perfumes.map((perfume) => (
            <div 
              key={perfume.id}
              className="bg-[#2a2a2a] rounded-lg overflow-hidden border border-[#BBA14F] hover:shadow-lg transition-shadow"
            >
              <img
                src={perfume.image}
                alt={perfume.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{perfume.name}</h3>
                <p className="text-gray-400 mt-2">{perfume.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-[#BBA14F] font-bold">${perfume.price}</span>
                  <button
                    onClick={() => addToCart(perfume)}
                    className="bg-[#BBA14F] text-black px-4 py-2 rounded-full hover:bg-[#a08a3d] transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Sidebar */}
      {showCart && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="absolute right-0 top-0 h-full w-full md:w-96 bg-[#1e1e1e] p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Your Cart</h2>
              <button onClick={() => setShowCart(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {cart.length === 0 ? (
              <p className="text-gray-400">Your cart is empty</p>
            ) : (
              <>
                <div className="space-y-4 mb-6">
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-[#BBA14F]">${item.price}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="border-t border-[#BBA14F] pt-4 mb-6">
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total:</span>
                    <span>${totalAmount.toFixed(2)}</span>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setShowCart(false);
                    setShowCheckout(true);
                  }}
                  className="w-full bg-[#BBA14F] text-black py-3 rounded-full hover:bg-[#a08a3d] transition-colors"
                >
                  Proceed to Checkout
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Checkout Form */}
      {showCheckout && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="absolute inset-0 md:inset-y-10 md:inset-x-20 bg-[#1e1e1e] p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Checkout</h2>
            {checkoutSuccess ? (
              <p className="text-green-500">Thank you for your purchase!</p>
            ) : (
              <form onSubmit={handleCheckoutSubmit} className="space-y-4">
                <div>
                  <label className="block mb-2 text-sm">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={checkoutDetails.name}
                    onChange={handleCheckoutChange}
                    required
                    className="w-full bg-[#2a2a2a] border border-[#BBA14F] py-3 px-4 rounded-md focus:ring-[#BBA14F]"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={checkoutDetails.email}
                    onChange={handleCheckoutChange}
                    required
                    className="w-full bg-[#2a2a2a] border border-[#BBA14F] py-3 px-4 rounded-md focus:ring-[#BBA14F]"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm">Address</label>
                  <textarea
                    name="address"
                    value={checkoutDetails.address}
                    onChange={handleCheckoutChange}
                    required
                    className="w-full bg-[#2a2a2a] border border-[#BBA14F] py-3 px-4 rounded-md focus:ring-[#BBA14F]"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#BBA14F] text-black py-3 rounded-full hover:bg-[#a08a3d] transition-colors"
                >
                  Submit Order
                </button>
              </form>
            )}
            <button
              onClick={() => setShowCheckout(false)}
              className="absolute top-4 right-4 text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
