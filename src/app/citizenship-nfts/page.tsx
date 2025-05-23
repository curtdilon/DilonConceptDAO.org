import React from 'react';
import Layout from '@/components/Layout';

const CitizenshipNFTsPage: React.FC = () => {
  return (
    <Layout>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="bg-[#4B2E83] text-white py-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Citizenship Options</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Participation models for governments and citizens in the DilonConceptDAO platform
            </p>
          </div>
        </section>

        {/* Citizenship Overview Section */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Platform Participation Overview</h2>
            <div className="w-full max-w-3xl mx-auto h-1 bg-yellow-400 mb-8"></div>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              DilonConceptDAO provides a platform for governments to build virtual replicas of their countries to test and implement Dilon Concept principles. This platform offers various participation options for both governments and their citizens, creating a comprehensive ecosystem for exploring resource-based economic models.
            </p>
            
            <div className="bg-gray-50 border-l-4 border-yellow-400 p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Benefits of Government Participation</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span><strong>Risk-Free Testing:</strong> Experiment with resource-based economic principles in a controlled environment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span><strong>Citizen Engagement:</strong> Involve citizens in a new form of participatory governance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span><strong>Resource Optimization:</strong> Develop and test advanced resource management systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span><strong>Data-Driven Insights:</strong> Gather valuable data on resource allocation and management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span><strong>International Collaboration:</strong> Connect with other participating governments in a shared ecosystem</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Citizenship Options Section */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Citizenship Options</h2>
            <div className="w-full max-w-3xl mx-auto h-1 bg-yellow-400 mb-8"></div>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              The DilonConceptDAO platform offers several citizenship options for participation in virtual country replicas, each with distinct rights and responsibilities. These options ensure broad participation while maintaining a meritocratic structure.
            </p>
            
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-400">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Founding Citizen DC [Country]</h3>
                <p className="text-gray-700 mb-4">
                  For citizens of participating countries who actively work on the launch and development of their country's virtual replica. These individuals contribute expertise, time, and resources to establish the foundation of their nation's digital twin.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Rights & Responsibilities:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Direct involvement in platform development</li>
                    <li>Participation in governance decisions</li>
                    <li>Recognition as founding contributors</li>
                    <li>Access to advanced resource management tools</li>
                    <li>Responsibility to help establish initial governance structures</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-400">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Citizen DC [Country]</h3>
                <p className="text-gray-700 mb-4">
                  Every citizen of a participating country receives an unrestricted right to obtain citizenship in their country's virtual replica. This ensures broad participation and representation in the digital nation-building process.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Rights & Responsibilities:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Automatic eligibility for citizens of participating nations</li>
                    <li>Participation in virtual country activities</li>
                    <li>Access to resource management systems</li>
                    <li>Ability to delegate resource management to Captain Dilons</li>
                    <li>Participation in community forums and discussions</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-400">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Dilonland Citizen</h3>
                <p className="text-gray-700 mb-4">
                  For those interested in the broader Dilon Concept implementation, citizenship in the international virtual country Dilonland is available through NFT purchase at <a href="https://dilonland.org" className="text-yellow-500 hover:text-yellow-700" target="_blank" rel="noopener noreferrer">dilonland.org</a>.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Rights & Responsibilities:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Open to anyone globally</li>
                    <li>NFT-based citizenship verification</li>
                    <li>Participation in the international virtual country</li>
                    <li>Access to Dilonland DAO resources and activities</li>
                    <li>Opportunity to contribute to the global implementation of Dilon Concept</li>
                  </ul>
                </div>
                <div className="mt-4 p-4 bg-yellow-100 rounded-lg">
                  <p className="text-gray-800">
                    <strong>Note:</strong> Dilonland citizenship is managed through <a href="https://dilonland.org" className="text-yellow-500 hover:text-yellow-700 underline" target="_blank" rel="noopener noreferrer">dilonland.org</a>, a separate platform focused on the international virtual country implementation of the Dilon Concept.
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-400">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Captain Dilon Status</h3>
                <p className="text-gray-700 mb-4">
                  This special status can be granted to existing citizens who pass the Captain Dilon examination. During the initial phases, Dilon may appoint Captain Dilon status to qualified individuals to jump-start the project.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Rights & Responsibilities:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Enhanced governance rights</li>
                    <li>Leadership responsibilities</li>
                    <li>Resource management authority</li>
                    <li>Voting rights in the General Assembly</li>
                    <li>Ability to manage resources entrusted by other citizens</li>
                    <li>Responsibility to mentor other citizens</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Implementation Section */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Platform Implementation</h2>
            <div className="w-full max-w-3xl mx-auto h-1 bg-yellow-400 mb-8"></div>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              The DilonConceptDAO platform is built on secure, scalable technology that enables governments to create and manage virtual country replicas with robust citizenship management systems.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-400">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Digital Twin Technology</h3>
                <p className="text-gray-700">
                  Our platform uses advanced digital twin technology to create accurate virtual replicas of participating countries, including geographic features, resource distribution, and population demographics to enable realistic simulation and testing.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-400">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Citizenship Management</h3>
                <p className="text-gray-700">
                  A comprehensive citizenship management system allows governments to register citizens, track participation, and manage resource rights within their virtual country replica, ensuring transparent and equitable access.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-400">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Governance Framework</h3>
                <p className="text-gray-700">
                  The platform includes customizable governance frameworks that allow each participating country to implement and test various decision-making processes based on Dilon Concept principles while maintaining their unique cultural and political contexts.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-400">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Data Analytics</h3>
                <p className="text-gray-700">
                  Comprehensive data analytics tools provide governments with valuable insights into resource allocation, citizen participation, and governance effectiveness, enabling data-driven decision-making and continuous improvement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Government Participation Section */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">How Governments Can Participate</h2>
            <div className="w-full max-w-3xl mx-auto h-1 bg-yellow-400 mb-8"></div>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Governments interested in exploring the Dilon Concept through virtual country replicas can join the DilonConceptDAO platform through a structured partnership process designed to ensure successful implementation.
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Partnership Process</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-yellow-400 text-white p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                    <span className="block text-center font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Initial Consultation</h4>
                    <p className="text-gray-700">Government representatives meet with our team to discuss objectives, requirements, and potential implementation approaches for their virtual country replica.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-yellow-400 text-white p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                    <span className="block text-center font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Partnership Agreement</h4>
                    <p className="text-gray-700">A formal partnership agreement outlines the scope, timeline, resource requirements, and expected outcomes for the virtual country implementation.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-yellow-400 text-white p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                    <span className="block text-center font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Platform Configuration</h4>
                    <p className="text-gray-700">Our technical team works with government representatives to configure the platform according to the country's specific needs, including resource mapping and citizenship registration.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-yellow-400 text-white p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                    <span className="block text-center font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Citizen Onboarding</h4>
                    <p className="text-gray-700">The government implements a citizen onboarding process, starting with Founding Citizens who will help develop and refine the virtual country implementation.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-yellow-400 text-white p-2 rounded-full mr-3 mt-1 flex-shrink-0">
                    <span className="block text-center font-bold">5</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Ongoing Support and Development</h4>
                    <p className="text-gray-700">Our team provides ongoing technical support, training, and development assistance to ensure the successful implementation and evolution of the virtual country.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-yellow-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Ready to Explore?</h3>
              <p className="text-gray-700 mb-4">
                If your government is interested in exploring how the DilonConceptDAO platform can help create a virtual replica of your country to test and implement resource-based economic principles, we invite you to contact us for an initial consultation.
              </p>
              <div className="text-center">
                <a 
                  href="/contact" 
                  className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-md transition-colors"
                >
                  Request Government Partnership
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CitizenshipNFTsPage;
