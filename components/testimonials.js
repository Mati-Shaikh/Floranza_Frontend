import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image'; // Import the Image component

const testimonials = [
  {
    quote: "This product is amazing! It changed my life.",
    name: "John Doe",
    title: "CEO, Example Corp",
    image: "/image.jpg"
  },
  {
    quote: "Fantastic service and support. Highly recommend!",
    name: "Jane Smith",
    title: "CTO, Another Corp",
    image: "/image.jpg"
  },
  {
    quote: "High quality and great customer service.",
    name: "Sam Wilson",
    title: "Manager, Some Company",
    image: "/image.jpg"
  }
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-[#BBA14F] mb-8">
          Testimonials
        </h2>
        <div className="relative flex items-center justify-center">
          <button
            onClick={handlePrev}
            className="absolute left-0 ml-4 bg-transparent text-[#BBA14F] py-2 px-4 hover:text-white transition duration-300"
          >
            <FontAwesomeIcon icon={faChevronLeft} size="2x" />
          </button>
          <div className="flex justify-center">
            <div className="bg-black rounded-lg shadow-lg p-8 text-center max-w-md">
              <div className="flex justify-center mb-4">
                <Image
                  src={testimonials[currentIndex].image} // Dynamic image source
                  alt={testimonials[currentIndex].name}   // Alt text for the image
                  width={80}  // Specify width in pixels (same as w-20)
                  height={80} // Specify height in pixels (same as h-20)
                  className="rounded-full object-cover"   // Keep the same classes for styling
                />
              </div>
              <p className="text-xl italic text-[#BBA14F] mb-4">
                {testimonials[currentIndex].quote}
              </p>
              <p className="text-[#BBA14F] font-semibold">
                {testimonials[currentIndex].name}
              </p>
              <p className="text-[#BBA14F]">
                {testimonials[currentIndex].title}
              </p>
            </div>
          </div>
          <button
            onClick={handleNext}
            className="absolute right-0 mr-4 bg-transparent text-[#BBA14F] py-2 px-4 hover:text-white transition duration-300"
          >
            <FontAwesomeIcon icon={faChevronRight} size="2x" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
