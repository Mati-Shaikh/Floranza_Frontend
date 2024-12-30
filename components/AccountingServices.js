import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function PerfumeFAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How long does the perfume scent last?",
      answer: "Our perfumes are crafted with high-quality ingredients to ensure longevity. On average, they last 6-8 hours on the skin, with some notes remaining for up to 12 hours. The exact duration depends on factors like skin type, climate, and application method."
    },
    {
      question: "What's the difference between Eau de Parfum and Eau de Toilette?",
      answer: "Eau de Parfum (EDP) has a higher concentration of fragrance oils (15-20%), making it more intense and longer-lasting. Eau de Toilette (EDT) has a lower concentration (5-15%), making it lighter and more suitable for daily wear."
    },
    {
      question: "Are your perfumes cruelty-free?",
      answer: "Yes, all our perfumes are cruelty-free. We never test on animals and work only with suppliers who maintain the same ethical standards. Our commitment to cruelty-free practices is part of our core values."
    },
    {
      question: "Do you offer samples before full bottle purchase?",
      answer: "Yes! We offer sample sets that include 2ml vials of our fragrances. This allows you to try the scents at home and find your perfect match before investing in a full-size bottle."
    },
    {
      question: "What's your return policy for perfumes?",
      answer: "We accept returns of unopened, sealed perfumes within 30 days of purchase. For opened items, we handle each case individually through our customer service team to ensure your satisfaction."
    },
    {
      question: "How should I store my perfume?",
      answer: "Store your perfume in a cool, dry place away from direct sunlight and heat. Avoid keeping it in the bathroom as humidity can affect the fragrance. The ideal storage temperature is between 55-75°F (12-24°C)."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to most countries worldwide. International shipping times vary by location, typically taking 7-14 business days. All international orders are fully tracked and insured."
    }
  ];

  return (
    <div className="min-h-screen bg-[#1e1e1e] py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-[#BBA14F] text-xl font-mono mb-2">FAQ</h2>
          <h3 className="text-white text-4xl font-bold">Frequently Asked Questions</h3>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Find answers to common questions about our perfumes, shipping, and services.
          </p>
        </div>

        {/* FAQ Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-[#BBA14F] rounded-lg overflow-hidden bg-[#2a2a2a] hover:border-[#d4b85c] transition-colors"
            >
              <button
                className="w-full px-6 py-4 flex justify-between items-center text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-white font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-[#BBA14F]" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#BBA14F]" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-400 animate-fadeIn">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 text-center p-6 bg-[#2a2a2a] rounded-lg border border-[#BBA14F]">
          <h4 className="text-white text-xl font-semibold mb-2">
            Still have questions?
          </h4>
          <p className="text-gray-400 mb-4">
            Can't find the answer you're looking for? Please reach out to our customer support team.
          </p>
          <button className="bg-[#BBA14F] text-black px-8 py-3 rounded-full hover:bg-[#d4b85c] transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}