import React from 'react';
import Layout from '@/components/Layout';

const BlogPage: React.FC = () => {
  return (
    <Layout>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="bg-[#4B2E83] text-white py-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Blog & Updates</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Latest news and developments from the Dilonland DAO community
            </p>
          </div>
        </section>

        {/* Blog Posts Section */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Latest Articles</h2>
            <div className="w-full max-w-3xl mx-auto h-1 bg-yellow-400 mb-12"></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Blog Post 1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gray-200 relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-1 rounded">Announcement</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Introducing the Dilonland DAO Virtual Country</h3>
                  <p className="text-gray-600 text-sm mb-3">May 15, 2025 • 5 min read</p>
                  <p className="text-gray-700 mb-4">
                    We're excited to announce the launch of Dilonland DAO, a virtual country implementation of the Dilon Concept that will allow for testing resource-based economic principles in a controlled environment.
                  </p>
                  <a href="/blog/introducing-dilonland-dao" className="text-[#4B2E83] font-semibold hover:text-yellow-500 transition-colors">
                    Read More →
                  </a>
                </div>
              </div>
              
              {/* Blog Post 2 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gray-200 relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-1 rounded">Technology</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Why We Chose Polygon for Our Blockchain Infrastructure</h3>
                  <p className="text-gray-600 text-sm mb-3">May 10, 2025 • 8 min read</p>
                  <p className="text-gray-700 mb-4">
                    An in-depth look at our decision to build the Dilonland DAO on the Polygon blockchain, examining the technical considerations, ecosystem benefits, and alignment with our values.
                  </p>
                  <a href="/blog/why-polygon" className="text-[#4B2E83] font-semibold hover:text-yellow-500 transition-colors">
                    Read More →
                  </a>
                </div>
              </div>
              
              {/* Blog Post 3 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gray-200 relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-1 rounded">Governance</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">The Path to Becoming a Captain Dilon</h3>
                  <p className="text-gray-600 text-sm mb-3">May 5, 2025 • 6 min read</p>
                  <p className="text-gray-700 mb-4">
                    A detailed guide to the process of earning Captain Dilon status in the Dilonland DAO, including the requirements, testing procedures, and responsibilities that come with this role.
                  </p>
                  <a href="/blog/captain-dilon-path" className="text-[#4B2E83] font-semibold hover:text-yellow-500 transition-colors">
                    Read More →
                  </a>
                </div>
              </div>
              
              {/* Blog Post 4 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gray-200 relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-1 rounded">Resources</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Resource Management in a Virtual Economy</h3>
                  <p className="text-gray-600 text-sm mb-3">April 28, 2025 • 7 min read</p>
                  <p className="text-gray-700 mb-4">
                    Exploring how resource management principles from the Dilon Concept are implemented in the virtual environment, and what this means for participants in the Dilonland DAO.
                  </p>
                  <a href="/blog/resource-management" className="text-[#4B2E83] font-semibold hover:text-yellow-500 transition-colors">
                    Read More →
                  </a>
                </div>
              </div>
              
              {/* Blog Post 5 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gray-200 relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-1 rounded">Community</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Meet the Founding Stewards</h3>
                  <p className="text-gray-600 text-sm mb-3">April 20, 2025 • 10 min read</p>
                  <p className="text-gray-700 mb-4">
                    Introducing the initial group of Founding Stewards who are helping to shape the vision and implementation of the Dilonland DAO, and their backgrounds in resource management.
                  </p>
                  <a href="/blog/founding-stewards" className="text-[#4B2E83] font-semibold hover:text-yellow-500 transition-colors">
                    Read More →
                  </a>
                </div>
              </div>
              
              {/* Blog Post 6 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gray-200 relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-1 rounded">Education</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Understanding the Dilon Concept: A Beginner's Guide</h3>
                  <p className="text-gray-600 text-sm mb-3">April 15, 2025 • 12 min read</p>
                  <p className="text-gray-700 mb-4">
                    A comprehensive introduction to the core principles of the Dilon Concept, designed for newcomers who want to understand the philosophical and practical foundations of our approach.
                  </p>
                  <a href="/blog/dilon-concept-guide" className="text-[#4B2E83] font-semibold hover:text-yellow-500 transition-colors">
                    Read More →
                  </a>
                </div>
              </div>
            </div>
            
            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <nav className="inline-flex rounded-md shadow">
                <a href="#" className="py-2 px-4 bg-white border border-gray-300 text-sm font-medium text-gray-500 hover:bg-gray-50">
                  Previous
                </a>
                <a href="#" className="py-2 px-4 bg-white border-t border-b border-gray-300 text-sm font-medium text-yellow-500">
                  1
                </a>
                <a href="#" className="py-2 px-4 bg-white border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50">
                  2
                </a>
                <a href="#" className="py-2 px-4 bg-white border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50">
                  3
                </a>
                <a href="#" className="py-2 px-4 bg-white border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50">
                  Next
                </a>
              </nav>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Stay Updated</h2>
            <div className="w-full max-w-xs mx-auto h-1 bg-yellow-400 mb-6"></div>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest updates, announcements, and insights about the Dilonland DAO and the Dilon Concept.
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
              <p className="text-xs text-gray-500 mt-2">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Categories</h2>
            <div className="w-full max-w-xs mx-auto h-1 bg-yellow-400 mb-8"></div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <a href="/blog/category/announcements" className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-400">
                <h3 className="font-semibold text-gray-800">Announcements</h3>
                <p className="text-gray-600 text-sm">12 articles</p>
              </a>
              
              <a href="/blog/category/technology" className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-400">
                <h3 className="font-semibold text-gray-800">Technology</h3>
                <p className="text-gray-600 text-sm">8 articles</p>
              </a>
              
              <a href="/blog/category/governance" className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-400">
                <h3 className="font-semibold text-gray-800">Governance</h3>
                <p className="text-gray-600 text-sm">15 articles</p>
              </a>
              
              <a href="/blog/category/resources" className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-400">
                <h3 className="font-semibold text-gray-800">Resources</h3>
                <p className="text-gray-600 text-sm">9 articles</p>
              </a>
              
              <a href="/blog/category/community" className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-400">
                <h3 className="font-semibold text-gray-800">Community</h3>
                <p className="text-gray-600 text-sm">11 articles</p>
              </a>
              
              <a href="/blog/category/education" className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-400">
                <h3 className="font-semibold text-gray-800">Education</h3>
                <p className="text-gray-600 text-sm">14 articles</p>
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default BlogPage;
