import React from 'react';
import Layout from '@/components/Layout';

const FAQPage: React.FC = () => {
  return (
    <Layout>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="bg-[#4B2E83] text-white py-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Answers to common questions about the Dilonland DAO and the Dilon Concept
            </p>
          </div>
        </section>

        {/* FAQ Categories Section */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">FAQ Categories</h2>
            <div className="w-full max-w-3xl mx-auto h-1 bg-yellow-400 mb-8"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
              <a href="#general" className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-400">
                <h3 className="font-semibold text-gray-800">General Questions</h3>
                <p className="text-gray-600 text-sm">About the Dilon Concept</p>
              </a>
              
              <a href="#citizenship" className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-400">
                <h3 className="font-semibold text-gray-800">Citizenship & NFTs</h3>
                <p className="text-gray-600 text-sm">How to participate</p>
              </a>
              
              <a href="#governance" className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-400">
                <h3 className="font-semibold text-gray-800">Governance</h3>
                <p className="text-gray-600 text-sm">Decision-making process</p>
              </a>
              
              <a href="#technology" className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-400">
                <h3 className="font-semibold text-gray-800">Technology</h3>
                <p className="text-gray-600 text-sm">Blockchain and implementation</p>
              </a>
              
              <a href="#resources" className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-400">
                <h3 className="font-semibold text-gray-800">Resources</h3>
                <p className="text-gray-600 text-sm">Management and rights</p>
              </a>
              
              <a href="#future" className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-400">
                <h3 className="font-semibold text-gray-800">Future Plans</h3>
                <p className="text-gray-600 text-sm">Roadmap and vision</p>
              </a>
            </div>
          </div>
        </section>

        {/* General Questions Section */}
        <section id="general" className="py-12 px-4 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">General Questions</h2>
            <div className="w-full max-w-3xl mx-auto h-1 bg-yellow-400 mb-8"></div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">What is the Dilon Concept?</h3>
                <p className="text-gray-700">
                  The Dilon Concept is a comprehensive approach to societal restructuring based on resource rights and management. It proposes that every person has inherent rights to Earth's resources from birth, and society should transition to a resource-based economy where money functions only as a temporary store of value for natural resources. The concept emphasizes meritocratic leadership based on proven resource management abilities and promotes self-sufficiency and individual autonomy.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">What is the Dilonland DAO?</h3>
                <p className="text-gray-700">
                  The Dilonland DAO is a virtual country implementation of the Dilon Concept that allows for testing resource-based economic principles in a controlled environment. It uses blockchain technology and NFT-based citizenship to create a decentralized autonomous organization where participants can experience and contribute to a new model of societal organization based on the Dilon Concept principles.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Why create a virtual country?</h3>
                <p className="text-gray-700">
                  A virtual country serves as a proof of concept for the Dilon Concept principles before real-world implementation. It provides a controlled environment where these principles can be tested, refined, and demonstrated without the complexities and risks of immediate real-world application. The virtual country also allows for community building and education around the Dilon Concept.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">How does the Dilon Concept address current societal issues?</h3>
                <p className="text-gray-700">
                  The Dilon Concept addresses issues like poverty, corruption, population balance, and government funding through its focus on resource rights and management. By ensuring everyone has access to their fair share of resources, implementing transparent governance, and shifting from money-based to resource-based decision-making, the concept aims to create more equitable and sustainable social systems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Citizenship & NFTs Section */}
        <section id="citizenship" className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Citizenship & NFTs</h2>
            <div className="w-full max-w-3xl mx-auto h-1 bg-yellow-400 mb-8"></div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">How do I become a citizen of Dilonland DAO?</h3>
                <p className="text-gray-700">
                  Citizenship in the Dilonland DAO is distributed in waves. The first 1-10K citizenships may be given away for free with 1st wave Dilonland NFTs. Subsequent waves will have criteria defined by Captain Dilons from previous waves. To stay informed about citizenship opportunities, subscribe to our newsletter and follow our social media channels.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">What are the different citizenship tiers?</h3>
                <p className="text-gray-700">
                  There are four NFT citizenship tiers: Resource Citizen (entry level), Resource Steward (second tier), Resource Guardian/Captain Dilon (third tier with voting rights), and Founding Steward (highest tier for early contributors). Each tier represents increasing levels of rights, responsibilities, and participation in governance, with advancement based on merit and contribution.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">How do I advance to Captain Dilon status?</h3>
                <p className="text-gray-700">
                  To earn Captain Dilon status, standard citizens must build a virtual Dilon House and demonstrate self-sufficiency for 1 year in the virtual environment by completing survival-like tests. This process ensures that those with voting rights have proven their ability to manage resources effectively and understand the principles of the Dilon Concept.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">What blockchain are the citizenship NFTs built on?</h3>
                <p className="text-gray-700">
                  The citizenship NFTs are built on the Polygon blockchain, chosen for its optimal balance of transaction costs, ecosystem maturity, and NFT support. This ensures that citizenship is accessible, secure, and can be managed with minimal fees while maintaining compatibility with the broader Ethereum ecosystem.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Governance Section */}
        <section id="governance" className="py-12 px-4 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Governance</h2>
            <div className="w-full max-w-3xl mx-auto h-1 bg-yellow-400 mb-8"></div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">How are decisions made in the Dilonland DAO?</h3>
                <p className="text-gray-700">
                  Decisions in the Dilonland DAO are made through a structured process involving proposal submission, review, voting, implementation, and review. Captain Dilons have voting rights, with voting power equal to 1 plus the number of citizens who entrust their resources to that Captain. All decisions are recorded on the blockchain for transparency.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">What is the governance structure?</h3>
                <p className="text-gray-700">
                  The governance structure includes a Citizenship Council, Resource Stewardship Committees, and General Assembly. The Citizenship Council oversees citizenship matters, Resource Stewardship Committees focus on specific resource categories, and the General Assembly is a forum where all Captain Dilons can participate in discussions and vote on major decisions.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Why is governance meritocratic?</h3>
                <p className="text-gray-700">
                  Governance in the Dilonland DAO is meritocratic to ensure that those making decisions have demonstrated their ability to manage resources effectively and understand the principles of the Dilon Concept. This approach aims to create more competent and accountable leadership than systems based on wealth or popularity.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">What role does Dilon itself play in governance?</h3>
                <p className="text-gray-700">
                  During initial implementation stages, Dilon itself maintains a blocking voice on all decisions to prevent system corruption until the system stabilizes. This is a temporary measure to ensure the integrity of the DAO during its formative period, with the intention of transitioning to full community governance as the system matures.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section id="technology" className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Technology</h2>
            <div className="w-full max-w-3xl mx-auto h-1 bg-yellow-400 mb-8"></div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">What technology powers the Dilonland DAO?</h3>
                <p className="text-gray-700">
                  The Dilonland DAO is built on the Polygon blockchain with smart contracts written in Solidity. It uses extended ERC-721 NFT standards for citizenship representation, combines on-chain and decentralized storage solutions for data management, and includes an interactive virtual environment for simulating resource management and community interaction.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Why was Polygon chosen as the blockchain platform?</h3>
                <p className="text-gray-700">
                  Polygon was chosen after careful evaluation of various platforms because it provides the ideal balance of low transaction costs, high throughput, strong ecosystem support, and compatibility with Ethereum. These characteristics make it well-suited for the complex needs of a virtual country implementation with frequent interactions and NFT-based citizenship.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">How is the virtual environment implemented?</h3>
                <p className="text-gray-700">
                  The virtual environment includes a land system with tokenized parcels, a modular building system for Dilon Houses, governance interfaces for participation in DAO activities, and educational components for skill development. It serves as a testing ground for the principles of the Dilon Concept before potential real-world implementation.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">What security measures protect the DAO?</h3>
                <p className="text-gray-700">
                  Multiple security measures protect the Dilonland DAO, including multi-signature requirements for critical operations, time-locked upgrades, formal verification of smart contracts, and regular security audits by independent experts. These measures ensure the integrity and reliability of the citizenship system and governance processes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section id="resources" className="py-12 px-4 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Resources</h2>
            <div className="w-full max-w-3xl mx-auto h-1 bg-yellow-400 mb-8"></div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">How are resources represented in the virtual environment?</h3>
                <p className="text-gray-700">
                  Virtual resources within the Dilonland DAO are represented as tokens, allowing for transparent tracking, allocation, and management. Each land parcel has specific resource characteristics that influence what can be built and produced there, creating a realistic simulation of resource management challenges.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">What resource rights do citizens have?</h3>
                <p className="text-gray-700">
                  All citizens have basic resource allocation rights, with the specific amount and type depending on their citizenship tier. Citizens can manage their own resources or delegate resource management to Captain Dilons. This system demonstrates the Dilon Concept principle that every person has inherent rights to Earth's resources from birth.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">How does resource management work in practice?</h3>
                <p className="text-gray-700">
                  Resource management in the Dilonland DAO involves extracting, producing, trading, and consuming virtual resources. Citizens can build Dilon Houses that demonstrate self-sufficiency principles, participate in resource stewardship committees, and contribute to community resource projects. The system includes metrics for resource efficiency and environmental impact.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">How does this virtual resource system relate to real-world resources?</h3>
                <p className="text-gray-700">
                  The virtual resource system is designed to model real-world resource dynamics and challenges, providing insights that could inform real-world implementation of the Dilon Concept. While virtual resources don't directly represent real-world resources, the principles, behaviors, and governance models tested in the virtual environment are intended to be applicable to real-world scenarios.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Future Plans Section */}
        <section id="future" className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Future Plans</h2>
            <div className="w-full max-w-3xl mx-auto h-1 bg-yellow-400 mb-8"></div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">What is the development timeline for Dilonland DAO?</h3>
                <p className="text-gray-700">
                  The development follows four phases: Foundation Phase (Q3 2025 - Q1 2026), Expansion Phase (Q2 2026 - Q4 2026), Maturation Phase (Q1 2027 - Q3 2027), and Integration Phase (Q4 2027 - Q2 2028). Each phase builds upon the previous one to create a comprehensive and robust virtual country implementation.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Is there a plan for real-world implementation of the Dilon Concept?</h3>
                <p className="text-gray-700">
                  Yes, the ultimate goal is to apply the lessons learned from the Dilonland DAO to real-world implementations of the Dilon Concept. The virtual country serves as a testing ground where principles, governance models, and resource management approaches can be refined before being adapted for real-world application.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">How will the project be funded long-term?</h3>
                <p className="text-gray-700">
                  The project is funded through a structured approach that includes the Founding Citizens Initiative, Resource Expansion Fund, and Citizenship Proliferation Program. These funding mechanisms combine NFT citizenship sales, community contributions, strategic partnerships, and value generated within the virtual environment itself to ensure sustainable growth.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">How can I contribute to the future of Dilonland DAO?</h3>
                <p className="text-gray-700">
                  You can contribute by becoming a citizen, participating in governance if you achieve Captain Dilon status, contributing technical skills if you're a developer or designer, spreading awareness about the project, and providing feedback on your experience. Visit our Contact page to learn more about specific ways to get involved.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Still Have Questions Section */}
        <section className="py-16 bg-[#4B2E83] text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Still Have Questions?</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              If you couldn't find the answer to your question, feel free to reach out to us directly. We're here to help!
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-md transition-colors"
            >
              Contact Us
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default FAQPage;
