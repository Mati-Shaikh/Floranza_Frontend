import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Course = () => {
    const router = useRouter();

    const handleClick = () => {
      router.push('/Train');
    };

    const sectors = [
        { title: 'Healthcare', description: 'Medical practices, GPs, dentists, supported living and care homes.', icon: 'fas fa-cogs', bgColor: 'bg-blue-500' },
        { title: 'Financial Services', description: 'Mortgage brokers, insurance and investment firms and financial advisors.', icon: 'fas fa-chart-line', bgColor: 'bg-green-500' },
        { title: 'Professional Services', description: 'Legal firms, consulting agencies, and marketing companies', icon: 'fas fa-headset', bgColor: 'bg-red-500' },
        { title: 'Construction', description: 'Builders, electricians, plumbers, and contractors.', icon: 'fas fa-hard-hat', bgColor: 'bg-yellow-500' },
        { title: 'Retail', description: 'Shops, ecommerce stores, and brick & mortar businesses.', icon: 'fas fa-store', bgColor: 'bg-indigo-500' },
        { title: 'Education', description: 'Schools, tutoring services, and educational consultants.', icon: 'fas fa-graduation-cap', bgColor: 'bg-purple-500' },
        { title: 'Hospitality', description: 'Restaurants, cafes, and hotels.', icon: 'fas fa-utensils', bgColor: 'bg-orange-500' },
        { title: 'IT & Tech', description: 'Software companies, IT consultancies, and tech startups.', icon: 'fas fa-laptop-code', bgColor: 'bg-teal-500' },
        { title: 'Transportation', description: 'Logistics companies, delivery services, and transportation firms.', icon: 'fas fa-truck', bgColor: 'bg-pink-500' },
        { title: 'Real Estate', description: 'Real estate agents, property managers, and realtors.', icon: 'fas fa-building', bgColor: 'bg-gray-500' },
        { title: 'Self-Employed', description: 'Freelancers, consultants, and independent contractors.', icon: 'fas fa-user-tie', bgColor: 'bg-cyan-500' },
        { title: 'Non-Profits', description: 'Charities, community organizations, and NGOs.', icon: 'fas fa-hands-helping', bgColor: 'bg-lime-500' }
    ];

    return (
        <div className="relative bg-center min-h-screen bg-white">
            <div className="absolute inset-0 bg-white opacity-75"></div>
            <div className="relative h-full flex flex-col justify-center items-center text-center">
                {/* Heading Section */}
                <div className="max-w-4xl mx-auto px-6 py-12">
                    <h1 className="text-4xl font-extrabold text-black mb-4 animate__animated animate__fadeIn animate__delay-1s">
                        Sectors we Know Best
                    </h1>
                    <p className="text-lg text-gray-900 mb-8 animate__animated animate__fadeIn animate__delay-2s">
                        Our comprehensive business services are tailored to meet the unique needs of each client, offering everything from financial planning and bookkeeping to strategic management advice. We provide expert guidance on navigating complex regulatory landscapes, optimizing business operations, and driving growth. At Wise Numbers LTD, we empower businesses to achieve long-term success with personalized, proactive support.
                    </p>
                    <button className="bg-[#3b445f] text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300 animate__animated animate__fadeIn animate__delay-3s" onClick={handleClick}> 
                        All Services
                    </button>
                </div>

                {/* Cards Section */}
                <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
                    {sectors.map((sector, index) => (
                        <div key={index} className="bg-white bg-opacity-80 p-6 rounded-lg shadow-2xl flex flex-col items-center text-center">
                        <div className={`${sector.bgColor} text-white p-4 rounded-full mb-4`}>
                            <i className={`${sector.icon} text-2xl`}></i> {/* Replace with actual logo */}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{sector.title}</h3>
                        <p className="text-gray-700 mb-4">{sector.description}</p>
                        <Link href="/test">
                            <a className="bg-[#3b445f] text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">Read More</a>
                        </Link>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Course;
