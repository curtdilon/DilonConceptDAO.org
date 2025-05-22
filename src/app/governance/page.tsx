import React from 'react';
import Layout from '@/components/Layout';

const GovernancePage: React.FC = () => {
  return (
    <Layout>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="bg-[#4B2E83] text-white py-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Governance</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Meritocratic principles for a fair and effective resource-based society
            </p>
          </div>
        </section>

        {/* Governance Overview Section */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Governance Overview</h2>
            <div className="w-full max-w-3xl mx-auto h-1 bg-yellow-400 mb-8"></div>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              The governance structure of DilonConceptDAO is designed to implement the core principles of the Dilon Concept in a virtual environment. It establishes a meritocratic system where leadership and decision-making authority are earned through demonstrated ability and contribution, rather than wealth or status.
            </p>
            
            <div className="bg-gray-50 border-l-4 border-yellow-400 p-6 mb-8">
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

        {/* Governance Structure Section */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Governance Structure</h2>
            <div className="w-full max-w-3xl mx-auto h-1 bg-yellow-400 mb-8"></div>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              The DilonConceptDAO governance is organized into multiple bodies, each with specific responsibilities and authority. This structure ensures balanced representation and specialized focus on different aspects of resource management.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-400">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Citizenship Council</h3>
                <p className="text-gray-700">
                  Composed of Captain Dilons who have demonstrated exceptional resource management abilities. The council oversees citizenship matters, including the approval of new citizenship waves and the establishment of criteria for advancement between tiers.
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
          </div>
        </section>

        {/* Captain Dilon Status Section */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Captain Dilon Status</h2>
            <div className="w-full max-w-3xl mx-auto h-1 bg-yellow-400 mb-8"></div>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              The Captain Dilon status is a key element of the DilonConceptDAO governance system. It represents individuals who have proven their ability to manage resources effectively and contribute to the community.
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
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
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Captain Dilon Responsibilities and Powers</h3>
              
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="bg-yellow-400 text-white p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span><strong>Voting Rights:</strong> Participate in governance decisions through the General Assembly</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-yellow-400 text-white p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span><strong>Resource Management:</strong> Manage resources entrusted by other citizens, increasing voting power</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-yellow-400 text-white p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span><strong>Committee Eligibility:</strong> Qualify for positions on specialized governance committees</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-yellow-400 text-white p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span><strong>Proposal Rights:</strong> Submit proposals for consideration by the governance bodies</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-yellow-400 text-white p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span><strong>Mentorship Role:</strong> Guide and support standard citizens working toward Captain status</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Decision Making Process Section */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Decision Making Process</h2>
            <div className="w-full max-w-3xl mx-auto h-1 bg-yellow-400 mb-8"></div>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              The DilonConceptDAO employs a structured decision-making process that balances efficiency with broad participation. All decisions are recorded on the blockchain for transparency and accountability.
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Governance Process Flow</h3>
              
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row">
                  <div className="bg-yellow-400 text-white p-3 rounded-full md:rounded-l-full md:rounded-r-none flex items-center justify-center md:w-1/4">
                    <span className="font-bold">Proposal Submission</span>
                  </div>
                  <div className="bg-gray-50 p-4 md:rounded-r-lg md:w-3/4">
                    <p className="text-gray-700">Any Captain Dilon can submit proposals for consideration. Proposals must include clear objectives, resource requirements, and expected outcomes.</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row">
                  <div className="bg-yellow-400 text-white p-3 rounded-full md:rounded-l-full md:rounded-r-none flex items-center justify-center md:w-1/4">
                    <span className="font-bold">Review Period</span>
                  </div>
                  <div className="bg-gray-50 p-4 md:rounded-r-lg md:w-3/4">
                    <p className="text-gray-700">Proposals undergo a review period during which Captain Dilons can discuss, ask questions, and suggest modifications. This period typically lasts 7-14 days.</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row">
                  <div className="bg-yellow-400 text-white p-3 rounded-full md:rounded-l-full md:rounded-r-none flex items-center justify-center md:w-1/4">
                    <span className="font-bold">Voting</span>
                  </div>
                  <div className="bg-gray-50 p-4 md:rounded-r-lg md:w-3/4">
                    <p className="text-gray-700">After the review period, proposals proceed to voting. Captain Dilons cast votes weighted by their own vote plus the number of citizens who have entrusted resources to them.</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row">
                  <div className="bg-yellow-400 text-white p-3 rounded-full md:rounded-l-full md:rounded-r-none flex items-center justify-center md:w-1/4">
                    <span className="font-bold">Implementation</span>
                  </div>
                  <div className="bg-gray-50 p-4 md:rounded-r-lg md:w-3/4">
                    <p className="text-gray-700">Approved proposals are implemented by the relevant committees or working groups. Implementation progress is regularly reported to the community.</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row">
                  <div className="bg-yellow-400 text-white p-3 rounded-full md:rounded-l-full md:rounded-r-none flex items-center justify-center md:w-1/4">
                    <span className="font-bold">Review & Iteration</span>
                  </div>
                  <div className="bg-gray-50 p-4 md:rounded-r-lg md:w-3/4">
                    <p className="text-gray-700">Implemented proposals are periodically reviewed for effectiveness. Based on outcomes, adjustments may be proposed through the same governance process.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-[#4B2E83] text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Participate in Governance</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Learn how you can become a citizen and work toward Captain Dilon status to participate in the governance of DilonConceptDAO.
            </p>
            <a 
              href="/citizenship-nfts" 
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-md transition-colors"
            >
              Explore Citizenship Options
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default GovernancePage;
