import React, { useState, useEffect } from 'react';
import { Search, Filter, ShoppingCart, X,Minus,Plus } from 'lucide-react';
import axios from 'axios';
import { toast } from 'react-hot-toast'; // Add toast for notifications

const PerfumeShop = () => {
  const [perfumes, setPerfumes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [priceFilter, setPriceFilter] = useState("all");
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [filteredPerfumes, setFilteredPerfumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [orderProcessing, setOrderProcessing] = useState(false);

 
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  

  const [checkoutDetails, setCheckoutDetails] = useState({
    name: "",
    email: "",
    address: "",
  });


  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem('perfumeCart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('perfumeCart', JSON.stringify(cart));
  }, [cart]);

  const getImageUrl = (imagePath) => {
    if (!imagePath) return '';
    const filename = imagePath.split('uploads\\').pop() || imagePath.split('uploads/').pop();
    if (!filename) return '';
    return `http://localhost:5000/uploads/${filename}`;
  };

  // Fetch perfumes from API
  useEffect(() => {
    const fetchPerfumes = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/perfumes');
        const perfumesWithValidImages = response.data.map(perfume => ({
          ...perfume,
          imageUrl: getImageUrl(perfume.image)
        }));
        setPerfumes(perfumesWithValidImages);
        setFilteredPerfumes(perfumesWithValidImages);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching perfumes:', error);
        setLoading(false);
        toast.error('Failed to fetch perfumes');
      }
    };
    fetchPerfumes();
  }, []);

  // Search and filter functionality
  useEffect(() => {
    let filtered = perfumes;

    if (searchQuery) {
      filtered = filtered.filter(perfume =>
        perfume.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        perfume.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (priceFilter !== "all") {
      filtered = filtered.filter(perfume => {
        if (priceFilter === "low") return perfume.price <= 1000;
        if (priceFilter === "medium") return perfume.price > 1000 && perfume.price <= 5000;
        if (priceFilter === "high") return perfume.price > 5000;
        return true;
      });
    }

    setFilteredPerfumes(filtered);
  }, [searchQuery, priceFilter, perfumes]);

 

  const handleCheckoutChange = (e) => {
    setCheckoutDetails({
      ...checkoutDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckoutSubmit = async (e) => {
    e.preventDefault();
    setOrderProcessing(true);
  
    try {
      // Send email with order summary using Web3Forms
      const formData = new FormData();
      formData.append('access_key', '5b3f21ca-8959-4103-8f86-0ec1f3eeab25'); // Web3Forms API Key
      formData.append('name', checkoutDetails.name);
      formData.append('email', checkoutDetails.email);
      formData.append(
        'message',
        `Order Summary: 
        ${cart.map((item) => `${item.name} - $${item.price.toFixed(2)}`).join(', ')}
        Total: $${totalAmount.toFixed(2)}
        Address: ${checkoutDetails.address}`
      );
  
      const emailResponse = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
  
      const emailData = await emailResponse.json();
  
      if (!emailData.success) {
        console.error('Error sending email:', emailData);
        toast.error('Failed to send confirmation email.');
        setOrderProcessing(false);
        return;
      }
  
      // Place orders for each item in cart
      const orderPromises = cart.map((item) =>
        axios.post('http://localhost:5000/api/orders', {
          customerName: checkoutDetails.name,
          customerEmail: checkoutDetails.email,
          perfumeId: item._id,
          paymentStatus: 'Pending',
        })
      );
  
      await Promise.all(orderPromises);
  
      // Handle success
      setCheckoutSuccess(true);
      setCart([]);
      localStorage.removeItem('perfumeCart');
      toast.success('Order placed and email confirmation sent successfully!');
  
      // Reset form and close modal after short delay
      setTimeout(() => {
        setCheckoutSuccess(false);
        setShowCheckout(false);
        setCheckoutDetails({
          name: '',
          email: '',
          address: '',
        });
      }, 2000);
    } catch (error) {
      console.error('Error during checkout:', error);
      toast.error('Failed to place order. Please try again.');
    } finally {
      setOrderProcessing(false);
    }
  };
  

  const addToCart = (perfume) => {
    const existingItem = cart.find(item => item._id === perfume._id);
    if (existingItem) {
      // If item exists, increment quantity
      setCart(cart.map(item => 
        item._id === perfume._id 
          ? {...item, quantity: (item.quantity || 1) + 1} 
          : item
      ));
    } else {
      // If new item, add with quantity 1
      setCart([...cart, {...perfume, quantity: 1}]);
    }
    toast.success('Added to cart');
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item._id !== id));
    toast.success('Removed from cart');
  };

  const updateQuantity = (id, change) => {
    setCart(cart.map(item => {
      if (item._id === id) {
        const newQuantity = (item.quantity || 1) + change;
        return newQuantity > 0 ? {...item, quantity: newQuantity} : item;
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const totalAmount = cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);


  if (loading) {
    return (
      <div className="min-h-screen bg-[#1e1e1e] text-white flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

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
            onChange={(e) => setPriceFilter(e.target.value)}
          >
            <option value="all">All Prices</option>
            <option value="low">Under $1000</option>
            <option value="medium">$1000 - $5000</option>
            <option value="high">Above $5000</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredPerfumes.map((perfume) => (
            <div 
              key={perfume._id}
              className="bg-[#2a2a2a] rounded-lg overflow-hidden border border-[#BBA14F] hover:shadow-lg transition-shadow"
            >
              <img
                src={perfume.imageUrl}
                alt={perfume.name}
                className="w-full h-48 object-cover"
                onError={(e) => {
                  e.target.src = '/perfume2.jpg';
                  e.target.onerror = null;
                }}
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{perfume.name}</h3>
                <p className="text-gray-400 mt-2">{perfume.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-[#BBA14F] font-bold">${perfume.price}</span>
                  <span className="text-gray-400">Stock: {perfume.stock}</span>
                </div>
                <button
                  onClick={() => addToCart(perfume)}
                  disabled={cart.some(item => item._id === perfume._id)}
                  className={`w-full mt-4 px-4 py-2 rounded-full transition-colors ${
                    cart.some(item => item._id === perfume._id)
                      ? 'bg-gray-500 cursor-not-allowed'
                      : 'bg-[#BBA14F] text-black hover:bg-[#a08a3d]'
                  }`}
                >
                  {cart.some(item => item._id === perfume._id) ? 'In Cart' : 'Add to Cart'}
                </button>
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
                    <div key={item._id} className="flex justify-between items-center">
                      <div className="flex-1">
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-[#BBA14F]">${item.price}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button 
                          onClick={() => updateQuantity(item._id, -1)}
                          className="bg-[#2a2a2a] p-1 rounded"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span>{item.quantity || 1}</span>
                        <button 
                          onClick={() => updateQuantity(item._id, 1)}
                          className="bg-[#2a2a2a] p-1 rounded"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item._id)}
                        className="text-red-500 hover:text-red-700 ml-2"
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
      <div className="relative max-w-2xl mx-auto">
        <button
          onClick={() => setShowCheckout(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-bold mb-6">Checkout</h2>

        {checkoutSuccess ? (
          <div className="text-center py-8">
            <p className="text-green-500 text-xl mb-4">
              Order Confirmed Successfully!
            </p>
            <p className="text-gray-400">Thank you for shopping with us!</p>
            <p className="text-gray-500">The page will refresh shortly...</p>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setOrderProcessing(true);

              setTimeout(() => {
                setOrderProcessing(false);
                setCheckoutSuccess(true);

                // Close modal and refresh page after 3 seconds
                setTimeout(() => {
                  setShowCheckout(false);
                  setCheckoutSuccess(false);
                  window.location.reload(); // Refreshes the page
                }, 3000);
              }, 2000); // Simulating order processing delay
            }}
            className="space-y-4"
          >
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
                rows="3"
              ></textarea>
            </div>
            <div className="mt-6">
              <h3 className="font-semibold mb-3">Order Summary</h3>
              <div className="space-y-2">
                {cart.map((item) => (
                  <div
                    key={item._id}
                    className="flex justify-between text-sm"
                  >
                    <span>{item.name}</span>
                    <span>${item.price.toFixed(2)}</span>
                  </div>
                ))}
                <div className="border-t border-[#BBA14F] pt-2 mt-2">
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>${totalAmount.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
            <button
              type="submit"
              disabled={orderProcessing}
              className={`w-full py-3 rounded-full transition-colors ${
                orderProcessing
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-[#BBA14F] text-black hover:bg-[#a08a3d]"
              }`}
            >
              {orderProcessing ? "Processing..." : "Submit Order"}
            </button>
          </form>
        )}
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default PerfumeShop;