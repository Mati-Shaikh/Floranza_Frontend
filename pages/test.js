import React from 'react';
import ServicesContent from '../components/ServicesContent';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import Services from '../components/services';
import Logo from '../components/logo';
import Talk from '../components/talk';
import GetIn from '../components/getIn';
import PerfumeSection from '../components/perfumeShop';
const Business = () => {
    return (
        <div>
      <Navbar />
      
        <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: 'url("/perfume1.jpg")' }}>
            <div className="absolute inset-0 bg-gray-900 opacity-40"></div>
            <div className="relative h-full flex flex-col justify-center items-center">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h1 className="text-white text-4xl md:text-6xl text-[#BBA14f] font-bold animate-bounce">
                        Perfumes Collection
                    </h1>
                    <p className="text-[#BBA14f] mt-4 mb-8 text-lg md:text-2xl">
                        Experience the Best Collection with Us
                    </p>
                    
                </div>
            </div>
            <PerfumeSection/>
{/* <Services/>
<GetIn/>
<Talk/> */}
<Footer/>
        </div>
       
        </div>
    );
};

export default Business;
