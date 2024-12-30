import React from 'react';

const Content = () => {
    return (
        <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: 'url("/back.jpg")' }}>
            <div className="absolute inset-0 bg-gray-900 opacity-40"></div>
            <div className="relative h-full flex flex-col justify-center items-center">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h1 className="text-white text-4xl md:text-6xl font-bold animate-bounce">
                        Welcome to Our Website
                    </h1>
                    <p className="text-white mt-4 mb-8 text-lg md:text-2xl">
                        Experience the Best Services with Us
                    </p>
                    <button className="px-8 py-3 bg-[#3b445f] text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300">
                        Lets Start
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Content;
