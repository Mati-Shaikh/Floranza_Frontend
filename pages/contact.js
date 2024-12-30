import React from 'react';
import About from '../components/about';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import Services from '../components/services';
import Logo from '../components/logo';
import Talk from '../components/talk';
import GetIn from '../components/getIn';
const ContactCard = ({ icon, title, description }) => {
    return (
      <div className="flex flex-col items-center text-center p-6 hover:-translate-y-2 transition-transform duration-300">
        <div className="w-16 h-16 mb-6 text-amber-400 border-2 border-amber-400 rounded-lg flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-white text-xl font-bold mb-4">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    );
  };
  
  const ContactSection = () => {
    const contacts = [
      {
        icon: (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        ),
        title: '+82 543 6544',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Ut elit tellus.'
      },
      {
        icon: (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        ),
        title: 'mail@grance.co',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Ut elit tellus.'
      },
      {
        icon: (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        ),
        title: 'London Eye, UK',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Ut elit tellus.'
      }
    ];
    return (
        <div>
      <Navbar />
      
        <div >
        <div className="w-full bg-black py-36 px-4">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-amber-400 text-6xl text-bold font-light mb-4">Contact</h2>
        <h1 className="text-white text-5xl font-bold">Contact Information</h1>
      </div>
      
      {/* Contact Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {contacts.map((contact, index) => (
          <ContactCard
            key={index}
            icon={contact.icon}
            title={contact.title}
            description={contact.description}
          />
        ))}
      </div>

      <style jsx>{`
        .outline-title {
          -webkit-text-stroke: 1px #b45309;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </div>
            {/* <Logo/>
<Services/>
<GetIn/> */}
<Talk/>
<Footer/>
        </div>
       
        </div>
    );
};

export default ContactSection;
