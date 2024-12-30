import React from 'react';

const LogoComponent = () => {
  // Array of service sectors
  const serviceSectors = [
    { title: 'Healthcare', description: 'Medical practices, GPs, dentists, supported living, and care homes.' },
    { title: 'Construction', description: 'Contractors, builders, and construction management firms.' },
    { title: 'Real Estate', description: 'Property management, real estate agencies, and developers.' },
    { title: 'Retail', description: 'Shops, e-commerce businesses on Shopify, Amazon, and TikTok.' },
    { title: 'Hospitality', description: 'Hotels, restaurants, and event venues.' },
    { title: 'Car Dealerships', description: 'Car garages, mechanics, paint, and spare parts shops.' },
    { title: 'Financial Services', description: 'Mortgage brokers, insurance, investment firms, and financial advisors.' },
    { title: 'Professional Services', description: 'Legal firms, consulting agencies, and marketing companies.' },
    { title: 'Education', description: 'Schools, colleges, universities, and educational institutions.' },
    { title: 'Technology', description: 'IT firms, software companies, and tech startups.' },
    { title: 'Non-Profit Organizations', description: 'Charities, foundations, and community organizations.' },
    { title: 'Transport and Logistics', description: 'Shipping companies, freight carriers, and logistics providers.' },
    { title: 'Entertainment and Media', description: 'Film production, music, publishing, and media companies.' },
    { title: 'Agriculture', description: 'Farms, agricultural businesses, and agribusinesses.' },
    { title: 'Energy and Utilities', description: 'Oil, gas, renewable energy, and utility companies.' },
    { title: 'Self-Employed Individuals', description: 'Chauffeurs, cleaning businesses, home food catering, hairdressers, and nail salons.' }
  ];

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Heading */}
      <div className="text-center my-8">
        <h1 className="text-4xl font-extrabold text-black mb-4">Our Service Sectors</h1>
        <p className="text-lg text-gray-700 mb-8">
          We offer specialized accounting services tailored to various industries.
        </p>
      </div>

      {/* Grid of Cards */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {serviceSectors.map((sector, index) => (
          <div key={index} className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-center">{sector.title}</h3>
            <p className="text-gray-700 text-center">{sector.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoComponent;
