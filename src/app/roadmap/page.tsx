import React from 'react';
import Layout from '@/components/Layout';

const RoadmapPage: React.FC = () => {
  return (
    <Layout>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="bg-[#4B2E83] text-white py-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Roadmap & Funding Phases</h1>
            <p className="text-xl max-w-3xl mx-auto">
              The development journey and funding strategy for the Dilonland DAO
            </p>
          </div>
        </section>

        {/* Roadmap Overview Section */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Roadmap Overview</h2>
            <div className="w-full max-w-3xl mx-auto h-1 bg-yellow-400 mb-8"></div>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              The Dilonland DAO development follows a strategic roadmap designed to build a robust virtual country implementation of the Dilon Concept. This phased approach ensures sustainable growth, community involvement, and thorough testing of resource-based economic principles.
            </p>
            
            <div className="bg-gray-50 border-l-4 border-yellow-400 p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Milestones</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span><strong>Concept Development:</strong> Refinement of the Dilon Concept principles for virtual implementation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span><strong>Technical Foundation:</strong> Development of core blockchain infrastructure and smart contracts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span><strong>Community Building:</strong> Initial citizenship distribution and community formation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span><strong>Governance Implementation:</strong> Establishment of functional governance structures</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span><strong>Virtual Environment:</strong> Development of interactive resource management simulations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span><strong>Real-world Integration:</strong> Application of lessons learned to potential real-world implementations</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Development Phases Section */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Development Phases</h2>
            <div className="w-full max-w-3xl mx-auto h-1 bg-yellow-400 mb-8"></div>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              The development of Dilonland DAO is structured into four distinct phases, each building upon the achievements of the previous phase while expanding the scope and capabilities of the virtual country.
            </p>
            
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-400">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-400 text-white p-2 rounded-full mr-4">
                    <span className="block text-center font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Foundation Phase</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  The initial phase focuses on establishing the conceptual and technical foundations of the Dilonland DAO. This includes developing the core smart contracts, creating the citizenship NFT system, and building the basic web interface.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Key Deliverables:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Whitepaper and technical documentation</li>
                    <li>Core smart contract development</li>
                    <li>Citizenship NFT implementation</li>
                    <li>Basic web interface</li>
                    <li>Initial community formation</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-400">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-400 text-white p-2 rounded-full mr-4">
                    <span className="block text-center font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Expansion Phase</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  The second phase expands the functionality of the Dilonland DAO with the implementation of resource tokenization, enhanced governance interfaces, and the basic virtual environment. This phase also includes the first citizenship wave.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Key Deliverables:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Resource tokenization system</li>
                    <li>Enhanced governance interfaces</li>
                    <li>Basic virtual environment with land system</li>
                    <li>First citizenship wave distribution</li>
                    <li>Community governance activation</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-400">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-400 text-white p-2 rounded-full mr-4">
                    <span className="block text-center font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Maturation Phase</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  The third phase focuses on maturing the Dilonland DAO with advanced virtual environment features, resource simulation systems, and citizenship advancement mechanisms. This phase also includes the emergence of the first Captain Dilons.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Key Deliverables:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Advanced virtual environment with Dilon House building</li>
                    <li>Resource simulation and testing systems</li>
                    <li>Citizenship advancement mechanisms</li>
                    <li>First Captain Dilon elections</li>
                    <li>Second citizenship wave distribution</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-400">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-400 text-white p-2 rounded-full mr-4">
                    <span className="block text-center font-bold">4</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Integration Phase</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  The final phase integrates all systems into a cohesive virtual country, implements advanced data analytics, and prepares for potential real-world applications of the Dilon Concept principles tested in the virtual environment.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Key Deliverables:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Full integration of all systems</li>
                    <li>Advanced data analytics and feedback mechanisms</li>
                    <li>Comprehensive documentation of outcomes and lessons</li>
                    <li>Framework for real-world implementation</li>
                    <li>Transition to community-led governance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Funding Structure Section */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Funding Structure</h2>
            <div className="w-full max-w-3xl mx-auto h-1 bg-yellow-400 mb-8"></div>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              The Dilonland DAO is funded through a structured approach that aligns with the development phases and ensures sustainable growth. The funding strategy combines NFT citizenship sales, community contributions, and strategic partnerships.
            </p>
            
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-400">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Founding Citizens Initiative</h3>
                <p className="text-gray-700 mb-4">
                  The initial funding phase focuses on establishing a core community of founding citizens who receive special recognition and benefits in exchange for their early support. This phase funds the Foundation Phase of development.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Key Elements:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Limited release of Founding Steward NFTs</li>
                    <li>Early supporter benefits and recognition</li>
                    <li>Community building and engagement activities</li>
                    <li>Initial development team funding</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-400">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Resource Expansion Fund</h3>
                <p className="text-gray-700 mb-4">
                  The second funding phase supports the Expansion Phase of development through broader citizenship NFT sales and strategic partnerships. This fund focuses on building out the resource management and governance systems.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Key Elements:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>First wave citizenship NFT sales</li>
                    <li>Strategic partnerships with aligned organizations</li>
                    <li>Development grants and contributions</li>
                    <li>Community-led funding initiatives</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-400">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Citizenship Proliferation Program</h3>
                <p className="text-gray-700 mb-4">
                  The third funding phase supports the Maturation and Integration Phases through continued citizenship sales, resource management fees, and value generated within the virtual environment itself.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Key Elements:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Subsequent citizenship wave NFT sales</li>
                    <li>Resource management and transaction fees</li>
                    <li>Value generated within the virtual economy</li>
                    <li>Research and development partnerships</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Development Timeline</h2>
            <div className="w-full max-w-3xl mx-auto h-1 bg-yellow-400 mb-8"></div>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              The Dilonland DAO development follows a flexible timeline that allows for community input and adaptation based on learning and feedback. The following represents the general timeframe for each phase.
            </p>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-yellow-400"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                <div className="relative">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="flex-1 md:pr-8 md:text-right order-2 md:order-1">
                      <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold text-gray-800">Foundation Phase</h3>
                        <p className="text-gray-600">Q3 2025 - Q1 2026</p>
                        <p className="text-gray-700 mt-2">Establishing core infrastructure and community</p>
                      </div>
                    </div>
                    <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 flex items-center justify-center order-1 md:order-2">
                      <div className="bg-yellow-400 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold z-10">1</div>
                    </div>
                    <div className="flex-1 md:pl-8 mt-4 md:mt-0 order-3">
                      <div className="bg-white p-4 rounded-lg shadow-md md:invisible">
                        <h3 className="text-lg font-semibold text-gray-800">Foundation Phase</h3>
                        <p className="text-gray-600">Q3 2025 - Q1 2026</p>
                        <p className="text-gray-700 mt-2">Establishing core infrastructure and community</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="flex-1 md:pr-8 md:text-right order-2 md:order-1 md:invisible">
                      <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold text-gray-800">Expansion Phase</h3>
                        <p className="text-gray-600">Q2 2026 - Q4 2026</p>
                        <p className="text-gray-700 mt-2">Building out functionality and first citizenship wave</p>
                      </div>
                    </div>
                    <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 flex items-center justify-center order-1 md:order-2">
                      <div className="bg-yellow-400 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold z-10">2</div>
                    </div>
                    <div className="flex-1 md:pl-8 mt-4 md:mt-0 order-3">
                      <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold text-gray-800">Expansion Phase</h3>
                        <p className="text-gray-600">Q2 2026 - Q4 2026</p>
                        <p className="text-gray-700 mt-2">Building out functionality and first citizenship wave</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="flex-1 md:pr-8 md:text-right order-2 md:order-1">
                      <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold text-gray-800">Maturation Phase</h3>
                        <p className="text-gray-600">Q1 2027 - Q3 2027</p>
                        <p className="text-gray-700 mt-2">Advanced features and first Captain Dilons</p>
                      </div>
                    </div>
                    <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 flex items-center justify-center order-1 md:order-2">
                      <div className="bg-yellow-400 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold z-10">3</div>
                    </div>
                    <div className="flex-1 md:pl-8 mt-4 md:mt-0 order-3">
                      <div className="bg-white p-4 rounded-lg shadow-md md:invisible">
                        <h3 className="text-lg font-semibold text-gray-800">Maturation Phase</h3>
                        <p className="text-gray-600">Q1 2027 - Q3 2027</p>
                        <p className="text-gray-700 mt-2">Advanced features and first Captain Dilons</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="flex-1 md:pr-8 md:text-right order-2 md:order-1 md:invisible">
                      <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold text-gray-800">Integration Phase</h3>
                        <p className="text-gray-600">Q4 2027 - Q2 2028</p>
                        <p className="text-gray-700 mt-2">Full integration and preparation for real-world applications</p>
                      </div>
                    </div>
                    <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 flex items-center justify-center order-1 md:order-2">
                      <div className="bg-yellow-400 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold z-10">4</div>
                    </div>
                    <div className="flex-1 md:pl-8 mt-4 md:mt-0 order-3">
                      <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold text-gray-800">Integration Phase</h3>
                        <p className="text-gray-600">Q4 2027 - Q2 2028</p>
                        <p className="text-gray-700 mt-2">Full integration and preparation for real-world applications</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-[#4B2E83] text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Join Our Journey</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Be part of the Dilonland DAO development from its early stages. Stay informed about upcoming citizenship opportunities and contribute to this groundbreaking project.
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

export default RoadmapPage;
