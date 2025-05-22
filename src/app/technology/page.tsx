import React from 'react';
import Layout from '@/components/Layout';

const TechnologyPage: React.FC = () => {
  return (
    <Layout>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="bg-[#4B2E83] text-white py-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Technology</h1>
            <p className="text-xl max-w-3xl mx-auto">
              The blockchain infrastructure powering the Dilonland DAO virtual country
            </p>
          </div>
        </section>

        {/* Technology Overview Section */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Technology Overview</h2>
            <div className="w-full max-w-3xl mx-auto h-1 bg-yellow-400 mb-8"></div>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              The Dilonland DAO virtual country is built on a robust technological foundation that combines blockchain technology, smart contracts, and interactive virtual environments. This infrastructure enables transparent governance, secure resource management, and meaningful participation in a decentralized community.
            </p>
            
            <div className="bg-gray-50 border-l-4 border-yellow-400 p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Core Technology Stack</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span><strong>Blockchain Platform:</strong> Polygon network for optimal balance of transaction costs, ecosystem maturity, and NFT support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span><strong>Smart Contracts:</strong> Solidity-based contracts for governance, resource management, and citizenship</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span><strong>NFT Standards:</strong> Extended ERC-721 implementation for citizenship representation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span><strong>Virtual Environment:</strong> Interactive platform for simulating resource management and community interaction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span><strong>Data Storage:</strong> Combination of on-chain and decentralized storage solutions for efficiency and permanence</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Blockchain Implementation Section */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Blockchain Implementation</h2>
            <div className="w-full max-w-3xl mx-auto h-1 bg-yellow-400 mb-8"></div>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              The Dilonland DAO is built on the Polygon blockchain, chosen after careful evaluation of various platforms. Polygon provides the ideal balance of low transaction costs, high throughput, strong ecosystem support, and compatibility with Ethereum, making it well-suited for the complex needs of a virtual country implementation.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-400">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Smart Contract Architecture</h3>
                <p className="text-gray-700">
                  The DAO's functionality is implemented through a suite of interconnected smart contracts that handle governance, resource management, citizenship, and virtual environment interactions. These contracts are designed with security, upgradeability, and interoperability in mind.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-400">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Governance Mechanisms</h3>
                <p className="text-gray-700">
                  On-chain governance mechanisms enable transparent and verifiable decision-making processes. Voting power is calculated based on citizenship status and delegated resources, with all votes and decisions permanently recorded on the blockchain.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-400">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Resource Tokenization</h3>
                <p className="text-gray-700">
                  Virtual resources within the Dilonland DAO are represented as tokens, allowing for transparent tracking, allocation, and management. This tokenization enables the implementation of resource-based economic principles in a verifiable manner.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-400">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Security Measures</h3>
                <p className="text-gray-700">
                  Multiple security measures protect the blockchain implementation, including multi-signature requirements for critical operations, time-locked upgrades, formal verification of smart contracts, and regular security audits by independent experts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Virtual Environment Section */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Virtual Environment</h2>
            <div className="w-full max-w-3xl mx-auto h-1 bg-yellow-400 mb-8"></div>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              The virtual environment is where citizens interact with the Dilonland DAO, manage resources, participate in governance, and build their virtual Dilon Houses. This environment serves as a testing ground for the principles of the Dilon Concept before potential real-world implementation.
            </p>
            
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-400">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Land System</h3>
                <p className="text-gray-700 mb-4">
                  The virtual environment includes a land system where citizens can claim and develop parcels. Each parcel has specific resource characteristics that influence what can be built and produced there, creating a realistic simulation of resource management challenges.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Tokenized land parcels with unique resource attributes</li>
                    <li>Interactive map interface for exploration and development</li>
                    <li>Resource extraction and management simulations</li>
                    <li>Environmental impact modeling</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-400">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Dilon House Building</h3>
                <p className="text-gray-700 mb-4">
                  Citizens can design and build virtual Dilon Houses that demonstrate self-sufficiency principles. These houses serve as both personal spaces within the virtual environment and as demonstrations of resource management capabilities.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Modular building system with sustainable components</li>
                    <li>Energy, water, and food production simulations</li>
                    <li>Resource efficiency metrics and feedback</li>
                    <li>Community sharing and learning opportunities</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-400">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Governance Interfaces</h3>
                <p className="text-gray-700 mb-4">
                  The virtual environment includes interfaces for participating in governance activities, such as proposal submission, discussion, and voting. These interfaces make governance accessible and engaging for citizens at all levels.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Proposal creation and submission tools</li>
                    <li>Discussion forums with reputation systems</li>
                    <li>Secure voting mechanisms with real-time results</li>
                    <li>Implementation tracking and accountability features</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-400">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Citizen Experience</h3>
                <p className="text-gray-700 mb-4">
                  The virtual environment is designed to provide an engaging and educational experience for citizens, with opportunities for learning, collaboration, and meaningful contribution to the community.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Interactive tutorials and learning resources</li>
                    <li>Community events and collaborative projects</li>
                    <li>Achievement system for skill development</li>
                    <li>Mentorship opportunities between citizenship tiers</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Roadmap Section */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Technical Roadmap</h2>
            <div className="w-full max-w-3xl mx-auto h-1 bg-yellow-400 mb-8"></div>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              The development of the Dilonland DAO technology follows a phased approach, with each phase building upon the previous one to create a comprehensive and robust virtual country implementation.
            </p>
            
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row">
                <div className="bg-yellow-400 text-white p-3 rounded-full md:rounded-l-full md:rounded-r-none flex items-center justify-center md:w-1/4">
                  <span className="font-bold">Phase 1: Foundation</span>
                </div>
                <div className="bg-white p-4 md:rounded-r-lg md:w-3/4 shadow-md">
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <div className="bg-yellow-400 text-white p-1 rounded-full mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Core smart contract development for citizenship and governance</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-yellow-400 text-white p-1 rounded-full mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Basic web interface for citizenship management</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-yellow-400 text-white p-1 rounded-full mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Initial NFT minting for first wave citizens</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row">
                <div className="bg-yellow-400 text-white p-3 rounded-full md:rounded-l-full md:rounded-r-none flex items-center justify-center md:w-1/4">
                  <span className="font-bold">Phase 2: Expansion</span>
                </div>
                <div className="bg-white p-4 md:rounded-r-lg md:w-3/4 shadow-md">
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <div className="bg-yellow-400 text-white p-1 rounded-full mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Resource tokenization and management systems</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-yellow-400 text-white p-1 rounded-full mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Enhanced governance interfaces and voting mechanisms</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-yellow-400 text-white p-1 rounded-full mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Basic virtual environment with land system</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row">
                <div className="bg-yellow-400 text-white p-3 rounded-full md:rounded-l-full md:rounded-r-none flex items-center justify-center md:w-1/4">
                  <span className="font-bold">Phase 3: Maturation</span>
                </div>
                <div className="bg-white p-4 md:rounded-r-lg md:w-3/4 shadow-md">
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <div className="bg-yellow-400 text-white p-1 rounded-full mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Advanced virtual environment with Dilon House building</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-yellow-400 text-white p-1 rounded-full mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Resource simulation and testing systems</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-yellow-400 text-white p-1 rounded-full mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Citizenship advancement mechanisms and testing</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row">
                <div className="bg-yellow-400 text-white p-3 rounded-full md:rounded-l-full md:rounded-r-none flex items-center justify-center md:w-1/4">
                  <span className="font-bold">Phase 4: Integration</span>
                </div>
                <div className="bg-white p-4 md:rounded-r-lg md:w-3/4 shadow-md">
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <div className="bg-yellow-400 text-white p-1 rounded-full mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Full integration of all systems into cohesive virtual country</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-yellow-400 text-white p-1 rounded-full mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Advanced data analytics and feedback mechanisms</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-yellow-400 text-white p-1 rounded-full mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Preparation for potential real-world implementation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-[#4B2E83] text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Contribute to Our Technology</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              We welcome contributions from developers, designers, and technology enthusiasts who share our vision for a more equitable and sustainable future.
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

export default TechnologyPage;
