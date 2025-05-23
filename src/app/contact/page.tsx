import React from 'react';
import Layout from '@/components/Layout';

const ContactPage: React.FC = () => {
  return (
    <Layout>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="bg-[#4B2E83] text-white py-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Get in touch with the Dilonland DAO team and community
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Get In Touch</h2>
            <div className="w-full max-w-3xl mx-auto h-1 bg-yellow-400 mb-8"></div>
            
            <p className="text-gray-700 text-center mb-8 max-w-2xl mx-auto">
              Have questions about the Dilonland DAO or the Dilon Concept? Want to get involved or contribute to the project? Fill out the form below and we'll get back to you as soon as possible.
            </p>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                  <select
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="citizenship">Citizenship Information</option>
                    <option value="technical">Technical Support</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="contribution">Contribution Interest</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                  ></textarea>
                </div>
                
                <div className="mb-6">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-5 w-5 text-yellow-400 rounded focus:ring-yellow-400"
                      required
                    />
                    <span className="ml-2 text-gray-700">
                      I agree to the privacy policy and consent to being contacted regarding my inquiry.
                    </span>
                  </label>
                </div>
                
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-md transition-colors"
                  >
                    Submit Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Get Involved Section */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Get Involved</h2>
            <div className="w-full max-w-3xl mx-auto h-1 bg-yellow-400 mb-8"></div>
            
            <p className="text-gray-700 text-center mb-8 max-w-2xl mx-auto">
              There are many ways to contribute to the Dilonland DAO and help build a virtual implementation of the Dilon Concept. Here are some ways you can get involved:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-400">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Become a Citizen</h3>
                <p className="text-gray-700 mb-4">
                  Join the Dilonland DAO as a citizen and participate in the virtual country. Experience resource-based economic principles firsthand and work toward Captain Dilon status.
                </p>
                <a href="/citizenship-nfts" className="text-[#4B2E83] font-semibold hover:text-yellow-500 transition-colors">
                  Learn More →
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-400">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Technical Contributions</h3>
                <p className="text-gray-700 mb-4">
                  Are you a developer, designer, or have other technical skills? Contribute to the development of the Dilonland DAO infrastructure, smart contracts, or virtual environment.
                </p>
                <a href="#" className="text-[#4B2E83] font-semibold hover:text-yellow-500 transition-colors">
                  Join Our Team →
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-400">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Community Building</h3>
                <p className="text-gray-700 mb-4">
                  Help grow and nurture the Dilonland DAO community. Organize events, create educational content, or moderate community forums and discussions.
                </p>
                <a href="#" className="text-[#4B2E83] font-semibold hover:text-yellow-500 transition-colors">
                  Join Community →
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-400">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Research & Development</h3>
                <p className="text-gray-700 mb-4">
                  Contribute to research on resource-based economics, governance models, or other aspects of the Dilon Concept. Help develop and refine the theoretical foundations.
                </p>
                <a href="#" className="text-[#4B2E83] font-semibold hover:text-yellow-500 transition-colors">
                  Explore Opportunities →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Connect Section */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Connect With Us</h2>
            <div className="w-full max-w-3xl mx-auto h-1 bg-yellow-400 mb-8"></div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
                <div className="bg-yellow-400 text-white p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
                <p className="text-gray-700 mb-4">
                  For general inquiries and support
                </p>
                <a href="mailto:dilonconcept@gmail.com" className="text-[#4B2E83] font-semibold hover:text-yellow-500 transition-colors">
                  dilonconcept@gmail.com
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
                <div className="bg-yellow-400 text-white p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Telegram</h3>
                <p className="text-gray-700 mb-4">
                  Join our community discussions
                </p>
                <a href="https://t.me/DilonConceptDA0" className="text-[#4B2E83] font-semibold hover:text-yellow-500 transition-colors">
                  t.me/DilonConceptDA0
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
                <div className="bg-yellow-400 text-white p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">X</h3>
                <p className="text-gray-700 mb-4">
                  Follow us for updates and news
                </p>
                <a href="https://twitter.com/DilonConcept" className="text-[#4B2E83] font-semibold hover:text-yellow-500 transition-colors">
                  @DilonConcept
                </a>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Subscribe to Our Newsletter</h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                Stay updated with the latest news, developments, and opportunities from the Dilonland DAO.
              </p>
              <form className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-grow px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-2 px-6 rounded-md transition-colors"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Our Virtual Location</h2>
            <div className="w-full max-w-3xl mx-auto h-1 bg-yellow-400 mb-8"></div>
            
            <p className="text-gray-700 text-center mb-8 max-w-2xl mx-auto">
              As a virtual country, the Dilonland DAO exists primarily in the digital realm. However, our team and community are distributed around the world, working together to build a new model of societal organization.
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-64 bg-gray-200 rounded-lg mb-4">
                {/* This would be replaced with an actual map or visualization in a real implementation */}
                <div className="h-full flex items-center justify-center">
                  <p className="text-gray-500 font-medium">Virtual World Map Visualization</p>
                </div>
              </div>
              <p className="text-gray-700 text-center">
                The Dilonland DAO virtual country is accessible from anywhere with an internet connection. Join our community and explore the possibilities of a resource-based economy.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-[#4B2E83] text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Ready to Join the Journey?</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Become part of the Dilonland DAO community and help build a virtual implementation of the Dilon Concept. Together, we can explore new models of resource management and societal organization.
            </p>
            <a 
              href="/citizenship-nfts" 
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-md transition-colors"
            >
              Become a Citizen
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ContactPage;
