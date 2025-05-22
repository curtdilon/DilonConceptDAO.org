import React from 'react';
import Layout from '@/components/Layout';
import Image from 'next/image';

const HomePage: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section with the provided image */}
      <section className="relative h-[600px] bg-[#4B2E83] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <Image 
            src="/images/hero-image.png" 
            alt="Dilon Concept" 
            width={1665} 
            height={1249} 
            className="object-contain"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-center">
            DILON CONCEPT
          </h1>
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-center">
            A Revolutionary Approach to Societal Restructuring
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="/about-concept" 
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-md transition-colors"
            >
              Discover the Dilon Concept
            </a>
            <a 
              href="/dilonland-dao" 
              className="bg-white hover:bg-gray-100 text-gray-900 font-bold py-3 px-8 rounded-md transition-colors"
            >
              Explore Dilonland DAO
            </a>
          </div>
        </div>
      </section>

      {/* Award-winning Content Section (similar to advancementstv.com) */}
      <section className="py-16 px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-2">
          Revolutionary Resource-Based Economy
        </h2>
        <div className="w-full max-w-3xl mx-auto h-1 bg-yellow-400 mb-12"></div>
        
        <div className="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed">
          <p className="mb-6">
            Shining a light on a new approach to societal organization and resource management. The Dilon Concept addresses several important issues and topics currently impacting society, proposing a comprehensive framework for a more equitable future.
          </p>
          <p className="mb-6">
            DilonConceptDAO covers a vast number of principles and ideas, featuring innovative approaches dedicated to shaping, molding, and transforming our world. Aiming to create a new level of social awareness, DilonConceptDAO brings this vital information to the public in an effort to educate on the effects of such significant contributions.
          </p>
        </div>
      </section>

      {/* Key Pillars Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Key Pillars of Our Vision</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-400">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Resource-Based Economy</h3>
              <p className="text-gray-600 mb-4">
                Transitioning towards a system where access to Earth's resources is a fundamental right, managed for collective well-being, not profit.
              </p>
              <a href="/about-concept#resource-economy" className="text-yellow-500 hover:text-yellow-700 font-semibold">Learn more &rarr;</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-400">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Meritocratic Governance</h3>
              <p className="text-gray-600 mb-4">
                Leadership based on proven abilities in resource management and societal contribution, fostering a truly capable and responsible governing body.
              </p>
              <a href="/governance#meritocracy" className="text-yellow-500 hover:text-yellow-700 font-semibold">Learn more &rarr;</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-400">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">NFT-Powered Citizenship</h3>
              <p className="text-gray-600 mb-4">
                A novel approach to citizenship within Dilonland DAO, utilizing NFTs to represent rights, responsibilities, and participation levels.
              </p>
              <a href="/citizenship-nfts#nft-details" className="text-yellow-500 hover:text-yellow-700 font-semibold">Learn more &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-[#4B2E83] text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Join Us on This Journey</h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto px-4">
          The Dilon Concept and Dilonland DAO represent a bold step towards a more sustainable and equitable world. We invite you to explore our ideas, engage with our community, and consider how you can be a part of this transformative initiative.
        </p>
        <a 
          href="/contact" 
          className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-md transition-colors"
        >
          Get Involved
        </a>
      </section>
    </Layout>
  );
};

export default HomePage;
