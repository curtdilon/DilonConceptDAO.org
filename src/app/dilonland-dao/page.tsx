import React from 'react';
import Layout from '@/components/Layout';

const DilonlandDAOPage: React.FC = () => {
  return (
    <Layout>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="bg-[#4B2E83] text-white py-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Dilonland DAO</h1>
            <p className="text-xl max-w-3xl mx-auto">
              A virtual country implementation of the Dilon Concept
            </p>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Virtual Country Concept</h2>
            <div className="w-full max-w-3xl mx-auto h-1 bg-yellow-400 mb-8"></div>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              The Dilonland DAO is a virtual country implementation of the Dilon Concept that allows for testing resource-based economic principles in a controlled environment. It serves as a proof of concept before real-world implementation, providing a space where participants can experience and contribute to a new model of societal organization.
            </p>
            
            <div className="bg-gray-50 border-l-4 border-yellow-400 p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Elements</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>NFT-based citizenship tiers that represent different levels of participation and resource rights</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>A virtual environment that simulates real-world resource distribution and management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Blockchain-based governance through a DAO (Decentralized Autonomous Organization) structure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Integration with public funding campaigns where backers receive citizenship NFTs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>A testing ground for Dilon Concept principles before real-world implementation</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Implementation Details Section */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Implementation Details</h2>
            <div className="w-full max-w-3xl mx-auto h-1 bg-yellow-400 mb-8"></div>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              The Dilonland DAO virtual country is built on the Polygon blockchain, chosen for its optimal balance of transaction costs, ecosystem maturity, and NFT support. This implementation creates a virtual country where Dilon Concept principles can be tested while generating funding through NFT citizenship sales.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-400">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Governance Structure</h3>
                <p className="text-gray-700">
                  The governance structure includes a Citizenship Council, Resource Stewardship Committees, and General Assembly to implement Dilon Concept principles. This multi-tiered approach ensures balanced representation and specialized focus on different aspects of resource management.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-400">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">NFT Citizenship Tiers</h3>
                <p className="text-gray-700">
                  Four NFT citizenship tiers (Resource Citizen, Resource Steward, Resource Guardian, and Founding Steward) provide increasing rights and responsibilities with a meritocratic advancement system. Each tier represents a different level of involvement and commitment to the DAO.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-400">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Virtual Testing Environment</h3>
                <p className="text-gray-700">
                  The virtual testing environment includes land system, resource management, governance interfaces, and citizen experience components. This comprehensive simulation allows for realistic testing of resource allocation and management principles.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-400">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Funding Structure</h3>
                <p className="text-gray-700">
                  Funding is structured through three phases: Founding Citizens Initiative, Resource Expansion Fund, and Citizenship Proliferation Program. This staged approach allows for sustainable growth and development of the DAO.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Governance Principles Section */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Governance Principles</h2>
            <div className="w-full max-w-3xl mx-auto h-1 bg-yellow-400 mb-8"></div>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              The Dilonland DAO governance follows strict meritocratic principles aligned with the Dilon Concept. All citizens start with standard citizenship status with no exceptions, ensuring a fair and equal starting point for all participants.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Captain Dilon Status</h3>
              <p className="text-gray-700 mb-4">
                To earn 'Captain Dilon' status, which grants voting rights, standard citizens must:
              </p>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li className="flex items-start">
                  <div className="bg-yellow-400 text-white p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Build a virtual Dilon House in the DAO environment</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-yellow-400 text-white p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Demonstrate self-sufficiency for 1 year in the virtual environment</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-yellow-400 text-white p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Complete survival-like tests to prove resource management abilities</span>
                </li>
              </ul>
              <p className="text-gray-700">
                Voting power for each Captain Dilon equals 1 plus the number of citizens who entrust their resources to that Captain. Citizens can transfer resource management to different Captains, creating a dynamic and responsive governance system.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Citizenship Waves</h3>
              <p className="text-gray-700 mb-4">
                Citizenship is distributed in waves:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <div className="bg-yellow-400 text-white p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>First wave: 1-10K citizenships potentially given away for free with 1st wave Dilonland NFTs</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-yellow-400 text-white p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Subsequent waves: Conditions defined by Captain Dilons from previous waves</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-yellow-400 text-white p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Initial implementation: Dilon itself maintains blocking voice on all decisions to prevent system corruption until the system stabilizes</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-[#4B2E83] text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Become a Citizen</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Learn more about how you can participate in the Dilonland DAO and become a citizen in this groundbreaking virtual country.
            </p>
            <a 
              href="/citizenship-nfts" 
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-md transition-colors"
            >
              Explore Citizenship & NFTs
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default DilonlandDAOPage;
