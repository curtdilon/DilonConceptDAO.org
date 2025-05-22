import React from 'react';
import Layout from '@/components/Layout';

const CitizenshipNFTsPage: React.FC = () => {
  return (
    <Layout>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="bg-[#4B2E83] text-white py-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Citizenship & NFTs</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Blockchain-powered citizenship for the Dilonland virtual country
            </p>
          </div>
        </section>

        {/* NFT Citizenship Overview Section */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">NFT Citizenship Overview</h2>
            <div className="w-full max-w-3xl mx-auto h-1 bg-yellow-400 mb-8"></div>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              The Dilonland DAO implements a novel approach to citizenship through Non-Fungible Tokens (NFTs) that represent different levels of rights, responsibilities, and participation within the virtual country. This system creates a transparent, verifiable record of citizenship status while enabling a meritocratic advancement path.
            </p>
            
            <div className="bg-gray-50 border-l-4 border-yellow-400 p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Benefits of NFT Citizenship</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span><strong>Verifiable Ownership:</strong> Blockchain-based proof of citizenship status</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span><strong>Transparent Advancement:</strong> Clear criteria for progression between tiers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span><strong>Resource Rights:</strong> Tokenized representation of resource access and management rights</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span><strong>Governance Participation:</strong> Structured involvement in decision-making processes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span><strong>Community Building:</strong> Fostering a sense of belonging and shared purpose</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Citizenship Tiers Section */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Citizenship Tiers</h2>
            <div className="w-full max-w-3xl mx-auto h-1 bg-yellow-400 mb-8"></div>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              The Dilonland DAO features four NFT citizenship tiers, each representing increasing levels of rights, responsibilities, and participation in governance. Advancement between tiers is based on merit and contribution to the community.
            </p>
            
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-400">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-400 text-white p-2 rounded-full mr-4">
                    <span className="block text-center font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Resource Citizen</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  The entry-level citizenship tier, granted to all initial participants. Resource Citizens have basic access to the virtual environment and can participate in community discussions.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Rights & Responsibilities:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Access to the virtual environment</li>
                    <li>Participation in community forums</li>
                    <li>Basic resource allocation</li>
                    <li>Ability to delegate resource management to Captain Dilons</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-400">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-400 text-white p-2 rounded-full mr-4">
                    <span className="block text-center font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Resource Steward</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  The second tier, achieved by demonstrating commitment to the community and basic resource management skills. Resource Stewards take on greater responsibility in managing specific resource areas.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Rights & Responsibilities:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>All Resource Citizen rights</li>
                    <li>Participation in specialized working groups</li>
                    <li>Ability to submit proposals for community consideration</li>
                    <li>Access to additional virtual resources</li>
                    <li>Responsibility to contribute to resource management initiatives</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-400">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-400 text-white p-2 rounded-full mr-4">
                    <span className="block text-center font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Resource Guardian (Captain Dilon)</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  The third tier, earned by building a virtual Dilon House and demonstrating self-sufficiency for one year. Resource Guardians (also known as Captain Dilons) have voting rights and significant governance responsibilities.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Rights & Responsibilities:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>All previous tier rights</li>
                    <li>Voting rights in the General Assembly</li>
                    <li>Ability to manage resources entrusted by other citizens</li>
                    <li>Eligibility for committee positions</li>
                    <li>Responsibility to mentor lower-tier citizens</li>
                    <li>Participation in defining criteria for citizenship waves</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-400">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-400 text-white p-2 rounded-full mr-4">
                    <span className="block text-center font-bold">4</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Founding Steward</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  The highest tier, reserved for early contributors and those who have demonstrated exceptional commitment and contribution to the Dilonland DAO. Founding Stewards have the greatest governance influence and responsibility.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Rights & Responsibilities:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>All previous tier rights</li>
                    <li>Leadership positions in governance committees</li>
                    <li>Ability to propose major structural changes</li>
                    <li>Responsibility for long-term strategic planning</li>
                    <li>Mentorship of Resource Guardians</li>
                    <li>Representation of Dilonland DAO in external partnerships</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Implementation Section */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Technical Implementation</h2>
            <div className="w-full max-w-3xl mx-auto h-1 bg-yellow-400 mb-8"></div>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              The NFT citizenship system is implemented on the Polygon blockchain, chosen for its balance of transaction costs, ecosystem maturity, and NFT support. This technical foundation ensures transparency, security, and accessibility.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-400">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">NFT Standards</h3>
                <p className="text-gray-700">
                  Citizenship NFTs follow the ERC-721 standard with additional metadata extensions to store citizenship tier information, resource rights, and governance participation records. This ensures compatibility with major NFT marketplaces and wallets while providing the specialized functionality needed for the DAO.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-400">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Smart Contracts</h3>
                <p className="text-gray-700">
                  A suite of smart contracts manages citizenship issuance, tier advancement, resource rights, and governance participation. These contracts are designed with security, transparency, and upgradeability in mind, allowing the system to evolve while maintaining trust.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-400">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">User Interface</h3>
                <p className="text-gray-700">
                  A user-friendly interface allows citizens to view their NFT status, track progress toward advancement, participate in governance, and manage their resource rights. The interface is designed to be accessible to users with varying levels of blockchain experience.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-400">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Security Measures</h3>
                <p className="text-gray-700">
                  Multiple security measures protect the NFT citizenship system, including multi-signature requirements for critical operations, time-locked upgrades, and regular security audits. These measures ensure the integrity and reliability of the citizenship system.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How to Obtain Citizenship Section */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">How to Obtain Citizenship</h2>
            <div className="w-full max-w-3xl mx-auto h-1 bg-yellow-400 mb-8"></div>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Citizenship in the Dilonland DAO is distributed in waves, with specific criteria for each wave determined by the governance process. The initial wave will establish the founding community that will help shape the future of the virtual country.
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">First Wave Citizenship</h3>
              <p className="text-gray-700 mb-4">
                The first 1-10K citizenships may be given away for free with 1st wave Dilonland NFTs. These early citizens will have a unique opportunity to influence the development of the DAO and establish its initial governance structures.
              </p>
              <div className="bg-yellow-100 p-4 rounded-lg">
                <p className="text-gray-800 italic">
                  "First wave citizens will be pioneers in a new model of societal organization, helping to test and refine the principles of the Dilon Concept in a virtual environment before potential real-world implementation."
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Subsequent Waves</h3>
              <p className="text-gray-700 mb-4">
                After the first wave, subsequent citizenship waves will be governed by criteria defined by Captain Dilons from previous waves. This ensures that the community grows in a controlled manner aligned with the principles of the Dilon Concept.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-yellow-400 text-white p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                    <span className="block text-center font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Application Process</h4>
                    <p className="text-gray-700">Interested individuals will submit applications demonstrating their understanding of and commitment to the Dilon Concept principles.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-yellow-400 text-white p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                    <span className="block text-center font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Community Review</h4>
                    <p className="text-gray-700">Applications will be reviewed by existing Captain Dilons according to the established criteria for the current wave.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-yellow-400 text-white p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                    <span className="block text-center font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">NFT Minting</h4>
                    <p className="text-gray-700">Approved applicants will receive their Resource Citizen NFT, granting them basic access to the virtual environment.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-yellow-400 text-white p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                    <span className="block text-center font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Onboarding</h4>
                    <p className="text-gray-700">New citizens will participate in an onboarding process to familiarize themselves with the virtual environment and community norms.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-[#4B2E83] text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Join the Dilonland Community</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Stay informed about upcoming citizenship opportunities and be among the first to participate in this groundbreaking virtual implementation of the Dilon Concept.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-md transition-colors"
            >
              Get Involved
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CitizenshipNFTsPage;
