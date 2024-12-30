import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

// Dynamically import the MapContainer and other Leaflet components
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS

const cities = [
  { name: 'London', position: [51.5074, -0.1278] },
  { name: 'Manchester', position: [53.4839, -2.2446] },
  { name: 'Birmingham', position: [52.4862, -1.8904] },
  { name: 'Liverpool', position: [53.4084, -2.9916] },
  // Add more cities as needed
];

const LogoComponent = () => {
  const [hoveredCity, setHoveredCity] = useState(null);
  const router = useRouter();

  const handleClick = () => {
    router.push('/test');
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white pb-24">
      {/* Left Side: Content Section */}
      <div className="flex-1 flex flex-col justify-center items-center bg-white p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Our Services Across the UK</h2>
          <p className="text-gray-700 mb-4">
            Explore our extensive range of services offered across various cities in the UK. We provide top-notch solutions tailored to your needs, wherever you are.
          </p>
          <button className="bg-[#3b445f] text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300" onClick={handleClick}>
            Our Services
          </button>
        </div>
      </div>

      {/* Right Side: Map Section */}
      <div className="bg-white relative w-full md:w-1/2 h-96 md:h-auto mt-16 pr-4"> {/* Added mt-16 for spacing */}
        <MapContainer center={[54.5, -3]} zoom={6} style={{ height: '100%', width: '100%', borderRadius: '20px', zIndex: 0 }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {cities.map((city, index) => (
            <Marker
              key={index}
              position={city.position}
              eventHandlers={{
                mouseover: () => setHoveredCity(city.name),
                mouseout: () => setHoveredCity(null),
              }}
            >
              <Popup>{city.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
        {hoveredCity && (
          <div className="absolute top-4 right-4 bg-white p-2 rounded shadow-lg z-20">
            <p className="text-lg font-semibold">{hoveredCity}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LogoComponent;
