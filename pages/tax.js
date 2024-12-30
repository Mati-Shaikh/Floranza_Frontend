import React from 'react';
import TaxContent from '../components/taxContent';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import Services from '../components/services';
import Logo from '../components/logo';
import Talk from '../components/talk';
import GetIn from '../components/getIn';
const Tax = () => {
    return (
        <div>
      <Navbar />
      
        <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: 'url("/perfume1.jpg")' }}>
            <div className="absolute inset-0 bg-gray-900 opacity-40"></div>
            <div className="relative h-full flex flex-col justify-center items-center">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h1 className="text-[#BBA14F] text-4xl md:text-6xl font-bold animate-bounce">
                        BLOGs and Articles
                    </h1>
                    <p className="text-[#BBA14F] mt-4 mb-8 text-lg md:text-2xl">
                        Experience the Best Services with Us
                    </p>
                    
                </div>
            </div>
            <TaxContent/>
    
            
<Services/>
<Talk/>
<Footer/>
        </div>
       
        </div>
    );
};

export default Tax;
