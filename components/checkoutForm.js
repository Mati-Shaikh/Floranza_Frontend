import React, { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';

export default function CheckoutForm({ total, onClose, cart }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    paymentMethod: 'cod'
  });
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the order submission
    setShowConfirmation(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-[#1e1e1e] rounded-lg w-full max-w-2xl p-6 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-white"
        >
          <X className="w-6 h-6" />
        </button>

        {showConfirmation ? (
          <div className="text-center py-8">
            <CheckCircle className="w-16 h-16 text-[#BBA14F] mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Order Confirmed!</h2>
            <p className="text-gray-400">
              Thank you for your order. Well send you a confirmation email shortly.
            </p>
            <button
              onClick={onClose}
              className="mt-6 bg-[#BBA14F] text-black px-8 py-3 rounded-full hover:bg-[#a08a3d] transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-6">Checkout</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full bg-[#2a2a2a] border border-[#BBA14F] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#BBA14F]"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-[#2a2a2a] border border-[#BBA14F] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#BBA14F]"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full bg-[#2a2a2a] border border-[#BBA14F] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#BBA14F]"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Delivery Address</label>
                  <textarea
                    name="address"
                    required
                    rows="3"
                    className="w-full bg-[#2a2a2a] border border-[#BBA14F] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#BBA14F]"
                    value={formData.address}
                    onChange={handleChange}
                  ></textarea>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Payment Method</label>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="jazzcash"
                        checked={formData.paymentMethod === 'jazzcash'}
                        onChange={handleChange}
                        className="text-[#BBA14F]"
                      />
                      <span>JazzCash</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cod"
                        checked={formData.paymentMethod === 'cod'}
                        onChange={handleChange}
                        className="text-[#BBA14F]"
                      />
                      <span>Cash on Delivery</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#BBA14F] pt-4">
                <div className="flex justify-between text-xl font-bold mb-4">
                  <span>Total Amount:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#BBA14F] text-black py-3 rounded-full hover:bg-[#a08a3d] transition-colors"
                >
                  Place Order
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}