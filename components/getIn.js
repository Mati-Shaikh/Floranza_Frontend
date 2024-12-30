import React from 'react';
import Image from 'next/image'; // Import the Image component
import { useRouter } from 'next/router';

const AboutUsComponent = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push('/story');
    };

    return (
        <div className="flex flex-col md:flex-row items-center justify-center h-screen bg-white">
            {/* Left Side (Image) */}
            <div className="md:w-1/2 pl-4">
                <Image 
                    src="/3.PNG" // Replace with the correct path to your image
                    alt="About Us" 
                    width={640} // Specify the width
                    height={480} // Specify the height
                    className="rounded-lg"
                />
            </div>
            {/* Right Side (Content and Button) */}
            <div className="md:w-1/2 text-black p-8 md:p-12 mt-6 md:mt-0">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us?</h2>
                <p className="text-lg mb-8">
                    Here at Wise Numbers Limited, our skilled Accountants, Tax Consultants, and Business Advisors are here to help small and medium-sized businesses. Our team comprises extensively qualified Chartered Accountants and renowned industry business consultants.
                </p>
                <button className="bg-white text-gray-900 px-6 py-3 rounded-lg shadow-md hover:bg-gray-300 transition duration-300 ease-in-out" onClick={handleClick}>
                    About Us
                </button>
            </div>
        </div>
    );
};

export default AboutUsComponent;
