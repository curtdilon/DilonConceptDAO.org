import React from 'react';
import Layout from '@/components/Layout';

const PriceStructurePage: React.FC = () => {
  return (
    <Layout>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="bg-[#4B2E83] text-white py-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Price Structure</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Investment details for governments participating in the DilonConceptDAO platform
            </p>
          </div>
        </section>

        {/* Price Structure Overview */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Investment Overview</h2>
            <div className="w-full max-w-3xl mx-auto h-1 bg-yellow-400 mb-8"></div>
            
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <p className="text-gray-700 mb-6">
                The DilonConceptDAO platform offers governments a comprehensive solution for creating virtual country replicas to test and implement Dilon Concept principles. Our pricing structure is designed to be transparent and flexible, accommodating different government sizes and requirements.
              </p>
              
              <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-6">
                <p className="text-gray-800 font-medium">
                  Note: The prices shown below are approximate ranges for first adapters and are subject to change upon signing the agreement. These figures are provided to give potential investors or sponsors a ballpark estimate of the investment required.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Pricing Structure</h2>
            <div className="w-full max-w-3xl mx-auto h-1 bg-yellow-400 mb-8"></div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Small Country Tier */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="bg-[#4B2E83] text-white p-6 text-center">
                  <h3 className="text-2xl font-bold">Small Country</h3>
                  <p className="text-sm opacity-80 mt-1">Population under 5 million</p>
                </div>
                <div className="p-6">
                  <div className="text-center mb-6">
                    <p className="text-gray-500 text-sm">One-time setup fee</p>
                    <p className="text-4xl font-bold text-gray-800">$500K - $750K</p>
                  </div>
                  <div className="text-center mb-8">
                    <p className="text-gray-500 text-sm">Monthly maintenance</p>
                    <p className="text-2xl font-bold text-gray-800">$50K - $75K</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Basic virtual infrastructure</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Up to 100K virtual citizens</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Standard resource mapping</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Basic governance tools</span>
                    </li>
                  </ul>
                  <div className="text-center">
                    <a href="/contact" className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-2 px-6 rounded-md transition-colors">
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Medium Country Tier */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform scale-105 z-10">
                <div className="bg-yellow-400 text-gray-900 p-6 text-center">
                  <h3 className="text-2xl font-bold">Medium Country</h3>
                  <p className="text-sm opacity-80 mt-1">Population 5-20 million</p>
                  <span className="absolute top-0 right-0 bg-[#4B2E83] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">RECOMMENDED</span>
                </div>
                <div className="p-6">
                  <div className="text-center mb-6">
                    <p className="text-gray-500 text-sm">One-time setup fee</p>
                    <p className="text-4xl font-bold text-gray-800">$750K - $1.5M</p>
                  </div>
                  <div className="text-center mb-8">
                    <p className="text-gray-500 text-sm">Monthly maintenance</p>
                    <p className="text-2xl font-bold text-gray-800">$75K - $150K</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Advanced virtual infrastructure</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Up to 500K virtual citizens</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Detailed resource mapping</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Advanced governance tools</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Custom analytics dashboard</span>
                    </li>
                  </ul>
                  <div className="text-center">
                    <a href="/contact" className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-2 px-6 rounded-md transition-colors">
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Large Country Tier */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="bg-[#4B2E83] text-white p-6 text-center">
                  <h3 className="text-2xl font-bold">Large Country</h3>
                  <p className="text-sm opacity-80 mt-1">Population over 20 million</p>
                </div>
                <div className="p-6">
                  <div className="text-center mb-6">
                    <p className="text-gray-500 text-sm">One-time setup fee</p>
                    <p className="text-4xl font-bold text-gray-800">$1.5M - $3M+</p>
                  </div>
                  <div className="text-center mb-8">
                    <p className="text-gray-500 text-sm">Monthly maintenance</p>
                    <p className="text-2xl font-bold text-gray-800">$150K - $300K+</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Premium virtual infrastructure</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Unlimited virtual citizens</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Comprehensive resource mapping</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Full governance suite</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Advanced analytics & simulations</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">Dedicated support team</span>
                    </li>
                  </ul>
                  <div className="text-center">
                    <a href="/contact" className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-2 px-6 rounded-md transition-colors">
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">What's Included</h2>
            <div className="w-full max-w-3xl mx-auto h-1 bg-yellow-400 mb-8"></div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="bg-yellow-400 text-gray-900 w-8 h-8 rounded-full flex items-center justify-center mr-3">1</span>
                  Initial Setup & Development
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Virtual country infrastructure development</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Resource mapping and tokenization</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Governance system implementation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Citizenship NFT system setup</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Initial data integration</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="bg-yellow-400 text-gray-900 w-8 h-8 rounded-full flex items-center justify-center mr-3">2</span>
                  Ongoing Maintenance & Support
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>System maintenance and updates</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Technical support and troubleshooting</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Security monitoring and enhancements</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Regular data backups and recovery</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Performance optimization</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="bg-yellow-400 text-gray-900 w-8 h-8 rounded-full flex items-center justify-center mr-3">3</span>
                  Consulting & Implementation
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Dilon Concept implementation strategy</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Resource management consulting</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Governance structure design</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Transition planning for real-world implementation</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="bg-yellow-400 text-gray-900 w-8 h-8 rounded-full flex items-center justify-center mr-3">4</span>
                  Training & Education
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Administrator training programs</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Citizen onboarding materials</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Educational resources on Dilon Concept</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Documentation and knowledge base</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Funding Options */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Funding Options</h2>
            <div className="w-full max-w-3xl mx-auto h-1 bg-yellow-400 mb-8"></div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#4B2E83]">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Government Funding</h3>
                <p className="text-gray-700 mb-4">
                  Direct allocation from government budget for digital transformation and innovation initiatives.
                </p>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Full government control</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Streamlined decision-making</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Long-term sustainability</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-400">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Private Investment</h3>
                <p className="text-gray-700 mb-4">
                  Funding through private investors, venture capital, or corporate partnerships interested in government innovation.
                </p>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Reduced government burden</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Additional expertise</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Faster implementation</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#4B2E83]">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Crowdfunding</h3>
                <p className="text-gray-700 mb-4">
                  Public participation through NFT citizenship sales and community contributions to fund the virtual country development.
                </p>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Public engagement</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Distributed funding model</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Community ownership</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pioneer Discount */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-yellow-100 border-2 border-yellow-400 p-8 rounded-lg text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Pioneer Founder Discount</h2>
              <p className="text-xl text-gray-700 mb-6">
                The first three countries to join as Pioneer Founders will receive a <span className="font-bold">20% discount</span> on the one-time setup fee and a <span className="font-bold">10% discount</span> on monthly maintenance fees for the first year.
              </p>
              <a 
                href="/contact" 
                className="inline-block bg-[#4B2E83] hover:bg-[#3a2366] text-white font-bold py-3 px-8 rounded-md transition-colors"
              >
                Become a Pioneer Founder
              </a>
            </div>
          </div>
        </section>

        {/* Custom Solutions */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Custom Solutions</h2>
            <div className="w-full max-w-3xl mx-auto h-1 bg-yellow-400 mb-8"></div>
            
            <p className="text-gray-700 text-center mb-8 max-w-3xl mx-auto">
              We understand that each country has unique needs and requirements. Our team can work with you to develop a custom solution tailored to your specific situation, resources, and goals.
            </p>
            
            <div className="text-center">
              <a 
                href="/contact" 
                className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-md transition-colors"
              >
                Request Custom Quote
              </a>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-[#4B2E83] text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Ready to Build Your Country's Digital Twin?</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Join the DilonConceptDAO platform and be at the forefront of testing and implementing the Dilon Concept principles in a controlled virtual environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-md transition-colors"
              >
                Contact Us
              </a>
              <a 
                href="/status" 
                className="inline-block bg-transparent hover:bg-white/10 text-white border-2 border-white font-bold py-3 px-8 rounded-md transition-colors"
              >
                View Country Status
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default PriceStructurePage;
