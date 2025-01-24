import React, { useState } from 'react';

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "5b3f21ca-8959-4103-8f86-0ec1f3eeab25");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="min-h-screen bg-[black] flex">
      <div className="w-full flex flex-col md:flex-row items-center justify-center p-8 gap-16">
        {/* Left section */}
        <div className="w-full md:w-1/2 space-y-6">
          <div className="space-y-4">
            <h3 className="text-6xl font-bold text-[#BBA14F] font-montessori">Contact Us Form</h3>
            <h2 className="text-7xl font-bold text-white">Get In Touch !!</h2>
            <p className="text-gray-400 text-lg max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore 
              magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea 
              commodo consequat.
            </p>
          </div>
        </div>

        {/* Right section */}
        <div className="w-full md:w-1/2">
          <form onSubmit={onSubmit} className="space-y-6">
            <div className="space-y-6">
              <input
                name="email"
                type="email"
                required
                className="w-full bg-transparent text-white px-6 py-4 rounded-full border-2 border-[#333333] focus:border-[#ffd700] focus:outline-none placeholder-gray-500"
                placeholder="Email"
              />
              
              <input
                name="phone"
                type="tel"
                required
                className="w-full bg-transparent text-white px-6 py-4 rounded-full border-2 border-[#333333] focus:border-[#ffd700] focus:outline-none placeholder-gray-500"
                placeholder="Phone"
              />
              
              <input
                name="name"
                type="text"
                required
                className="w-full bg-transparent text-white px-6 py-4 rounded-full border-2 border-[#333333] focus:border-[#ffd700] focus:outline-none placeholder-gray-500"
                placeholder="Name"
              />
              
              <textarea
                name="message"
                required
                rows="4"
                className="w-full bg-transparent text-white px-6 py-4 rounded-3xl border-2 border-[#333333] focus:border-[#ffd700] focus:outline-none placeholder-gray-500 resize-none"
                placeholder="Message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#BBA14F] hover:bg-[#e6c200] text-black font-medium py-4 px-8 rounded-full transition-colors duration-200"
            >
              Submit Button
            </button>
          </form>

          {result && (
            <div className="mt-4 text-center">
              <span className="text-white">{result}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}