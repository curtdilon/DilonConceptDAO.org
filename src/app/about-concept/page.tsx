import React from 'react';
import Layout from '@/components/Layout';

const AboutConceptPage: React.FC = () => {
  return (
    <Layout>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="bg-[#4B2E83] text-white py-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">About the Dilon Concept</h1>
            <p className="text-xl max-w-3xl mx-auto">
              A comprehensive approach to societal restructuring based on resource rights and management
            </p>
          </div>
        </section>

        {/* Core Principles Section */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Core Principles</h2>
            <div className="w-full max-w-3xl mx-auto h-1 bg-yellow-400 mb-8"></div>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              The Dilon Concept is a comprehensive approach to societal restructuring rooted in the fundamental idea that every individual has inherent rights to Earth's resources from birth. It proposes a transition towards a resource-based economy where the primary focus is on equitable distribution and sustainable management of global resources, rather than monetary wealth accumulation.
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="bg-gray-50 p-4 rounded-lg border-l-4 border-yellow-400">
                <strong className="text-gray-800 font-semibold">Inherent Resource Rights:</strong>
                <p className="text-gray-700 mt-1">Every person is entitled to a share of Earth's natural resources, ensuring basic needs can be met.</p>
              </li>
              
              <li className="bg-gray-50 p-4 rounded-lg border-l-4 border-yellow-400">
                <strong className="text-gray-800 font-semibold">Resource-Based Economy:</strong>
                <p className="text-gray-700 mt-1">Shifting from a monetary system to one where resources are the basis of economic activity and societal organization.</p>
              </li>
              
              <li className="bg-gray-50 p-4 rounded-lg border-l-4 border-yellow-400">
                <strong className="text-gray-800 font-semibold">Money as a Temporary Store of Value:</strong>
                <p className="text-gray-700 mt-1">Money's role is limited to a temporary representation of natural resource value, not an end in itself.</p>
              </li>
              
              <li className="bg-gray-50 p-4 rounded-lg border-l-4 border-yellow-400">
                <strong className="text-gray-800 font-semibold">Meritocratic Leadership:</strong>
                <p className="text-gray-700 mt-1">Governance and leadership positions are earned based on demonstrated abilities in resource management and societal contribution, ensuring competence and accountability.</p>
              </li>
              
              <li className="bg-gray-50 p-4 rounded-lg border-l-4 border-yellow-400">
                <strong className="text-gray-800 font-semibold">Self-Sufficiency and Autonomy:</strong>
                <p className="text-gray-700 mt-1">Emphasis on empowering individuals and communities to achieve self-sufficiency and maintain autonomy.</p>
              </li>
            </ul>
          </div>
        </section>

        {/* Four Main Components Section */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Four Main Components</h2>
            <div className="w-full max-w-3xl mx-auto h-1 bg-yellow-400 mb-8"></div>
            
            <p className="text-gray-700 leading-relaxed mb-8">
              The Dilon Concept is actualized through four interconnected components designed to create a holistic and functional societal framework:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-400">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">1. Democracy 2.0 Platform</h3>
                <p className="text-gray-700">
                  A sophisticated digital platform for transparently tracking global resources, managing their distribution based on rights, and facilitating democratic participation in resource governance. This system aims to ensure fairness and prevent mismanagement.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-400">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">2. Dilon House</h3>
                <p className="text-gray-700">
                  A model for sustainable and autonomous living. Dilon Houses are designed to be self-sufficient in terms of energy, food, and water, utilizing advanced technology and ecological principles to minimize environmental impact and maximize inhabitant well-being.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-400">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">3. Dilon School</h3>
                <p className="text-gray-700">
                  An educational institution focused on practical skills, critical thinking, and resource management. The Dilon School aims to equip individuals with the knowledge and abilities necessary to thrive in a resource-based economy and contribute to societal well-being.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-400">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">4. Worldview Ideology Institute</h3>
                <p className="text-gray-700">
                  An institute dedicated to the research, development, and promotion of a worldview that aligns with the principles of the Dilon Concept. It focuses on fostering values of cooperation, sustainability, and shared responsibility for the planet and its inhabitants.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Addressing Societal Challenges Section */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Addressing Societal Challenges</h2>
            <div className="w-full max-w-3xl mx-auto h-1 bg-yellow-400 mb-8"></div>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              The Dilon Concept offers a systemic approach to tackling some of the world's most pressing issues, including:
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-yellow-400 text-white p-2 rounded-full mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <strong className="text-gray-800 font-semibold">Poverty and Inequality:</strong>
                  <p className="text-gray-700 mt-1">By guaranteeing resource rights and focusing on equitable distribution.</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="bg-yellow-400 text-white p-2 rounded-full mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <strong className="text-gray-800 font-semibold">Corruption:</strong>
                  <p className="text-gray-700 mt-1">Through transparent resource management (Democracy 2.0) and meritocratic leadership.</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="bg-yellow-400 text-white p-2 rounded-full mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <strong className="text-gray-800 font-semibold">Environmental Degradation:</strong>
                  <p className="text-gray-700 mt-1">By promoting sustainable living (Dilon House) and responsible resource use.</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="bg-yellow-400 text-white p-2 rounded-full mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <strong className="text-gray-800 font-semibold">Population Balance:</strong>
                  <p className="text-gray-700 mt-1">By creating conditions where population growth is naturally managed through improved living standards and education.</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="bg-yellow-400 text-white p-2 rounded-full mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <strong className="text-gray-800 font-semibold">Ineffective Government Funding:</strong>
                  <p className="text-gray-700 mt-1">By shifting the economic basis from money to resources, thereby changing how public services and initiatives are supported.</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-[#4B2E83] text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Ready to Learn More?</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Explore how the Dilon Concept is being implemented through the Dilonland DAO virtual country.
            </p>
            <a 
              href="/dilonland-dao" 
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-md transition-colors"
            >
              Explore Dilonland DAO
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AboutConceptPage;
