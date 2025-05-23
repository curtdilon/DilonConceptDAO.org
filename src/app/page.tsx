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
        <div className="absolute inset-0 flex flex-col items-center justify-end text-white p-4">
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-light text-center">
              A Revolutionary Approach to Societal Restructuring
            </h2>
          </div>
        </div>
      </section>

      {/* Platform for Governments Section */}
      <section className="py-16 px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-2">
          Virtual Country Platform for Governments
        </h2>
        <div className="w-full max-w-3xl mx-auto h-1 bg-yellow-400 mb-12"></div>
        
        <div className="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed">
          <p className="mb-6">
            DilonConceptDAO provides a comprehensive platform for governments to build virtual replicas of their countries to test and implement Dilon Concept principles. This controlled environment allows for safe experimentation with resource-based economic models before real-world implementation.
          </p>
          <p className="mb-6">
            Our platform enables governments to create digital twins of their nations, complete with resource mapping, citizenship management, and governance structures aligned with Dilon Concept principles. This approach offers a risk-free way to explore transformative societal models while gathering valuable data and insights.
          </p>
        </div>
      </section>

      {/* Key Benefits for Governments Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Key Benefits for Participating Governments</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-400">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Risk-Free Testing</h3>
              <p className="text-gray-600 mb-4">
                Experiment with resource-based economic principles in a virtual environment before implementing changes in the real world, minimizing political and economic risks.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-400">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Citizen Engagement</h3>
              <p className="text-gray-600 mb-4">
                Engage citizens in a new form of participatory governance through digital citizenship, creating stronger connections between government and the people.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-400">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Resource Optimization</h3>
              <p className="text-gray-600 mb-4">
                Develop and test advanced resource management systems that can lead to more efficient allocation and utilization of national resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Governance Structure Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-2">
            Governance Structure
          </h2>
          <div className="w-full max-w-3xl mx-auto h-1 bg-yellow-400 mb-12"></div>
          
          <p className="text-gray-700 leading-relaxed mb-6 max-w-4xl mx-auto">
            The governance structure of DilonConceptDAO is designed to implement the core principles of the Dilon Concept in a virtual environment. It establishes a meritocratic system where leadership and decision-making authority are earned through demonstrated ability and contribution.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-400">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Citizenship Council</h3>
              <p className="text-gray-700">
                Composed of Captain Dilons who have demonstrated exceptional resource management abilities. The council oversees citizenship matters, including the approval of new citizenship waves and the establishment of criteria for advancement.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-400">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Resource Stewardship Committees</h3>
              <p className="text-gray-700">
                Specialized committees focused on specific resource categories (e.g., energy, food, water, housing). Each committee is responsible for developing and implementing policies for sustainable management of their respective resources.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-400">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">General Assembly</h3>
              <p className="text-gray-700">
                A forum where all Captain Dilons can participate in discussions and vote on major decisions affecting the entire DAO. Voting power is determined by the Captain's own vote plus the number of citizens who have entrusted their resources to them.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-400">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Technical Implementation Council</h3>
              <p className="text-gray-700">
                Responsible for overseeing the technical aspects of the DAO, including blockchain infrastructure, smart contract development, and virtual environment maintenance. Members are selected based on technical expertise and contribution.
              </p>
            </div>
          </div>
          
          <div className="bg-gray-50 border-l-4 border-yellow-400 p-6 mb-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Core Governance Principles</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                <span><strong>Meritocratic Leadership:</strong> Authority is earned through demonstrated competence in resource management</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                <span><strong>Equal Starting Point:</strong> All citizens begin with standard citizenship status</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                <span><strong>Earned Voting Rights:</strong> Voting privileges are granted to those who prove their capability</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                <span><strong>Resource-Based Decision Making:</strong> Governance focuses on equitable resource management</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                <span><strong>Transparent Operations:</strong> All governance activities are recorded on the blockchain</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Citizenship Options Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-2">
            Citizenship Options
          </h2>
          <div className="w-full max-w-3xl mx-auto h-1 bg-yellow-400 mb-12"></div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 border-b-2 border-yellow-400 pb-2">Founding Citizen DC [Country]</h3>
              <p className="text-gray-700 mb-4">
                For citizens of participating countries who actively work on the launch and development of their country's virtual replica. These individuals contribute expertise, time, and resources to establish the foundation of their nation's digital twin.
              </p>
              <ul className="list-disc pl-5 text-gray-700 mb-4">
                <li>Direct involvement in platform development</li>
                <li>Participation in governance decisions</li>
                <li>Recognition as founding contributors</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 border-b-2 border-yellow-400 pb-2">Citizen DC [Country]</h3>
              <p className="text-gray-700 mb-4">
                Every citizen of a participating country receives an unrestricted right to obtain citizenship in their country's virtual replica. This ensures broad participation and representation in the digital nation-building process.
              </p>
              <ul className="list-disc pl-5 text-gray-700 mb-4">
                <li>Automatic eligibility for citizens of participating nations</li>
                <li>Participation in virtual country activities</li>
                <li>Access to resource management systems</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 border-b-2 border-yellow-400 pb-2">Dilonland Citizen</h3>
              <p className="text-gray-700 mb-4">
                For those interested in the broader Dilon Concept implementation, citizenship in the international virtual country Dilonland is available through NFT purchase at <a href="https://dilonland.org" className="text-yellow-500 hover:text-yellow-700" target="_blank" rel="noopener noreferrer">dilonland.org</a>.
              </p>
              <ul className="list-disc pl-5 text-gray-700 mb-4">
                <li>Open to anyone globally</li>
                <li>NFT-based citizenship verification</li>
                <li>Participation in the international virtual country</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 border-b-2 border-yellow-400 pb-2">Captain Dilon Status</h3>
              <p className="text-gray-700 mb-4">
                This special status can be granted to existing citizens who pass the Captain Dilon examination. During the initial phases, Dilon may appoint Captain Dilon status to qualified individuals to jump-start the project.
              </p>
              <ul className="list-disc pl-5 text-gray-700 mb-4">
                <li>Enhanced governance rights</li>
                <li>Leadership responsibilities</li>
                <li>Resource management authority</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md mt-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Requirements to Achieve Captain Status</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-yellow-400 text-white p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                  <span className="block text-center font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Build a Virtual Dilon House</h4>
                  <p className="text-gray-700">Construct and maintain a self-sufficient dwelling in the virtual environment, demonstrating understanding of sustainable resource use.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-yellow-400 text-white p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                  <span className="block text-center font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Demonstrate Self-Sufficiency</h4>
                  <p className="text-gray-700">Maintain self-sufficiency for a full year in the virtual environment, showing ability to manage resources over time.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-yellow-400 text-white p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                  <span className="block text-center font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Complete Resource Management Tests</h4>
                  <p className="text-gray-700">Pass a series of survival-like tests that evaluate resource management skills, problem-solving abilities, and commitment to Dilon Concept principles.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Technology</h2>
          <div className="w-full max-w-3xl mx-auto h-1 bg-yellow-400 mb-8"></div>
          
          <p className="text-gray-700 leading-relaxed mb-6 max-w-4xl mx-auto">
            The DilonConceptDAO platform is built on a robust technological foundation that combines blockchain technology, smart contracts, and interactive virtual environments. This infrastructure enables transparent governance, secure resource management, and meaningful participation.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-400">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Blockchain Implementation</h3>
              <p className="text-gray-700">
                Built on the Polygon blockchain for optimal balance of transaction costs, ecosystem maturity, and NFT support. Smart contracts handle governance, resource management, citizenship, and virtual environment interactions with security and upgradeability in mind.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-400">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Virtual Environment</h3>
              <p className="text-gray-700">
                An interactive platform where citizens manage resources, participate in governance, and build virtual Dilon Houses. Features include a land system with resource characteristics, building tools, governance interfaces, and educational components.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-400">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Resource Tokenization</h3>
              <p className="text-gray-700">
                Virtual resources are represented as tokens, allowing for transparent tracking, allocation, and management. This tokenization enables the implementation of resource-based economic principles in a verifiable manner across country replicas.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-400">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Security Measures</h3>
              <p className="text-gray-700">
                Multiple security measures protect the platform, including multi-signature requirements for critical operations, time-locked upgrades, formal verification of smart contracts, and regular security audits by independent experts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-2">
            Development Roadmap
          </h2>
          <div className="w-full max-w-3xl mx-auto h-1 bg-yellow-400 mb-12"></div>
          
          <div className="space-y-6 max-w-4xl mx-auto">
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
                    <span>Development of virtual environment with land system</span>
                  </li>
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
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row">
              <div className="bg-yellow-400 text-white p-3 rounded-full md:rounded-l-full md:rounded-r-none flex items-center justify-center md:w-1/4">
                <span className="font-bold">Phase 3: Integration</span>
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
                    <span>Full implementation of Captain Dilon testing and advancement system</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-yellow-400 text-white p-1 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Integration with real-world data sources for resource modeling</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-yellow-400 text-white p-1 rounded-full mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Advanced analytics and reporting for governance decisions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dilon Concept Ecosystem Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">The Dilon Concept Ecosystem</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-400">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">dilonconcept.org</h3>
              <p className="text-gray-600 mb-4">
                The foundation website dedicated to describing Dilon Concept principles, publishing updates and articles, and collecting donations to support the movement.
              </p>
              <a href="https://dilonconcept.org" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-700 font-semibold">Visit Site &rarr;</a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-400 ring-2 ring-yellow-400">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">dilonconceptdao.org</h3>
              <p className="text-gray-600 mb-4">
                The platform for governments to participate by building virtual replicas of their countries to test Dilon Concept principles in controlled environments.
              </p>
              <span className="text-yellow-500 font-semibold">You are here</span>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-400">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">dilonland.org</h3>
              <p className="text-gray-600 mb-4">
                The virtual artificial country open to global participation through NFT citizenship, focused on implementing Dilon Concept principles internationally. It can also be used as a template for DC [Country] replicas.
              </p>
              <a href="https://dilonland.org" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-700 font-semibold">Visit Site &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-[#4B2E83] text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Partner With Us</h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto px-4">
          We invite government representatives to explore how the DilonConceptDAO platform can help create a virtual replica of your country to test and implement resource-based economic principles in a controlled environment.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/contact" 
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-md transition-colors"
          >
            Request Government Partnership
          </a>
          <a 
            href="/presentation.pdf" 
            download
            className="inline-block bg-white hover:bg-gray-100 text-gray-900 font-bold py-3 px-8 rounded-md transition-colors"
          >
            Download Presentation
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
