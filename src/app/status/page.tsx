import React from 'react';
import Layout from '@/components/Layout';

const StatusPage: React.FC = () => {
  return (
    <Layout>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="bg-[#4B2E83] text-white py-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Country Participation Status</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Track the progress of countries joining the DilonConceptDAO platform
            </p>
          </div>
        </section>

        {/* Pioneer Founder Section */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Pioneer Founder Status</h2>
            <div className="w-full max-w-3xl mx-auto h-1 bg-yellow-400 mb-8"></div>
            
            <div className="bg-yellow-100 border-l-4 border-yellow-500 p-6 mb-8 rounded-lg">
              <p className="text-xl font-bold text-gray-800 mb-2">
                The First Three Country Participants Will Earn the Title "Pioneer Founder"
              </p>
              <p className="text-gray-700">
                The country's participation could be funded through private investors, crowdfunding, or direct government funding. Pioneer Founders will receive special recognition and benefits in the DilonConceptDAO ecosystem.
              </p>
            </div>
          </div>
        </section>

        {/* Country Status Tracker */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Country Participation Tracker</h2>
            <div className="w-full max-w-3xl mx-auto h-1 bg-yellow-400 mb-8"></div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
                <thead className="bg-[#4B2E83] text-white">
                  <tr>
                    <th className="py-3 px-4 text-left">Country</th>
                    <th className="py-3 px-4 text-center">Contact Initiated</th>
                    <th className="py-3 px-4 text-center">Proposal</th>
                    <th className="py-3 px-4 text-center">Signed</th>
                    <th className="py-3 px-4 text-center">Work Started</th>
                    <th className="py-3 px-4 text-center">Launched</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-yellow-50 transition-colors">
                    <td className="py-4 px-4 font-medium">Kazakhstan</td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-green-500 text-white rounded-full">
                        ✓
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-gray-200 text-gray-400 rounded-full">
                        -
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-gray-200 text-gray-400 rounded-full">
                        -
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-gray-200 text-gray-400 rounded-full">
                        -
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-gray-200 text-gray-400 rounded-full">
                        -
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-yellow-50 transition-colors">
                    <td className="py-4 px-4 font-medium">United Arab Emirates</td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-gray-200 text-gray-400 rounded-full">
                        -
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-gray-200 text-gray-400 rounded-full">
                        -
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-gray-200 text-gray-400 rounded-full">
                        -
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-gray-200 text-gray-400 rounded-full">
                        -
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-gray-200 text-gray-400 rounded-full">
                        -
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-yellow-50 transition-colors">
                    <td className="py-4 px-4 font-medium">Singapore</td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-gray-200 text-gray-400 rounded-full">
                        -
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-gray-200 text-gray-400 rounded-full">
                        -
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-gray-200 text-gray-400 rounded-full">
                        -
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-gray-200 text-gray-400 rounded-full">
                        -
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-gray-200 text-gray-400 rounded-full">
                        -
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-yellow-50 transition-colors">
                    <td className="py-4 px-4 font-medium">Estonia</td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-gray-200 text-gray-400 rounded-full">
                        -
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-gray-200 text-gray-400 rounded-full">
                        -
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-gray-200 text-gray-400 rounded-full">
                        -
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-gray-200 text-gray-400 rounded-full">
                        -
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-gray-200 text-gray-400 rounded-full">
                        -
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-yellow-50 transition-colors">
                    <td className="py-4 px-4 font-medium">Malta</td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-gray-200 text-gray-400 rounded-full">
                        -
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-gray-200 text-gray-400 rounded-full">
                        -
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-gray-200 text-gray-400 rounded-full">
                        -
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-gray-200 text-gray-400 rounded-full">
                        -
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-gray-200 text-gray-400 rounded-full">
                        -
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-yellow-50 transition-colors">
                    <td className="py-4 px-4 font-medium">Bahrain</td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-gray-200 text-gray-400 rounded-full">
                        -
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-gray-200 text-gray-400 rounded-full">
                        -
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-gray-200 text-gray-400 rounded-full">
                        -
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-gray-200 text-gray-400 rounded-full">
                        -
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-gray-200 text-gray-400 rounded-full">
                        -
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-yellow-50 transition-colors">
                    <td className="py-4 px-4 font-medium">Luxembourg</td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-gray-200 text-gray-400 rounded-full">
                        -
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-gray-200 text-gray-400 rounded-full">
                        -
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-gray-200 text-gray-400 rounded-full">
                        -
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-gray-200 text-gray-400 rounded-full">
                        -
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-gray-200 text-gray-400 rounded-full">
                        -
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Status Definitions</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-green-500 text-white rounded-full mr-3 mt-0.5">
                    ✓
                  </span>
                  <div>
                    <span className="font-medium">Contact Initiated:</span> Initial discussions have begun with government representatives.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-green-500 text-white rounded-full mr-3 mt-0.5">
                    ✓
                  </span>
                  <div>
                    <span className="font-medium">Proposal:</span> Formal proposal has been presented to government decision-makers.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-green-500 text-white rounded-full mr-3 mt-0.5">
                    ✓
                  </span>
                  <div>
                    <span className="font-medium">Signed:</span> Agreement has been signed to proceed with country replica development.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-green-500 text-white rounded-full mr-3 mt-0.5">
                    ✓
                  </span>
                  <div>
                    <span className="font-medium">Work Started:</span> Development of the virtual country replica has begun.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-green-500 text-white rounded-full mr-3 mt-0.5">
                    ✓
                  </span>
                  <div>
                    <span className="font-medium">Launched:</span> The virtual country replica is live and operational.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-[#4B2E83] text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Interested in Becoming a Pioneer Founder?</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              If you represent a government or have connections with government officials who might be interested in implementing the Dilon Concept, we'd love to hear from you.
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

export default StatusPage;
