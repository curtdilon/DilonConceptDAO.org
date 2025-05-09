import Image from "next/image";

export default function HomePage() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="text-center py-16 md:py-24">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-800">
          Empowering Communities Through Decentralized Governance
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl mb-10 text-gray-600 max-w-3xl mx-auto">
          Discover how the Dilon Concept DAO is revolutionizing resource management and fostering global collaboration.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-lg text-lg sm:text-xl transition-colors duration-200">
          Learn More
        </button>
      </section>

      {/* About Us Snippet */}
      <section id="about-snippet" className="w-full max-w-5xl mx-auto mb-16 md:mb-24 bg-gray-100 p-6 sm:p-8 md:p-10 rounded-lg shadow-md">
        <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">Our Vision</h3>
        <p className="text-md sm:text-lg text-gray-700 mb-6 leading-relaxed">
          The Dilon Concept DAO aims to create a transparent and equitable framework for managing shared resources. We leverage blockchain technology to empower communities and promote sustainable development. Our goal is to build a global network of interconnected DAOs working towards a common good.
        </p>
        <a href="/about" className="text-blue-600 hover:text-blue-700 font-semibold text-md sm:text-lg transition-colors duration-200">
          Explore Our Mission &rarr;
        </a>
      </section>

      {/* Key Features Section */}
      <section id="features" className="w-full max-w-5xl mx-auto mb-16 md:mb-24">
        <h3 className="text-2xl sm:text-3xl font-bold text-center mb-10 md:mb-12 text-gray-800">Key Features</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h4 className="text-xl sm:text-2xl font-semibold mb-3 text-blue-600">Decentralized Governance</h4>
            <p className="text-md sm:text-lg text-gray-700 leading-relaxed">Decisions made by the community, for the community, ensuring fairness and transparency.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h4 className="text-xl sm:text-2xl font-semibold mb-3 text-blue-600">Transparent Resource Management</h4>
            <p className="text-md sm:text-lg text-gray-700 leading-relaxed">Track resources and their allocation in real-time on the blockchain.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h4 className="text-xl sm:text-2xl font-semibold mb-3 text-blue-600">Global Collaboration</h4>
            <p className="text-md sm:text-lg text-gray-700 leading-relaxed">Connect with like-minded individuals and organizations worldwide to build a better future.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="cta" className="w-full max-w-5xl mx-auto text-center bg-blue-600 text-white p-10 sm:p-12 md:p-16 rounded-lg shadow-xl">
        <h3 className="text-2xl sm:text-3xl font-bold mb-6">Get Involved</h3>
        <p className="text-md sm:text-lg mb-10 max-w-2xl mx-auto">
          Join the Dilon Concept DAO community and contribute to a more sustainable and equitable future. Whether you are a developer, a researcher, or simply passionate about our mission, there are many ways to get involved.
        </p>
        <button className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-lg text-lg sm:text-xl transition-colors duration-200">
          Join Our Community
        </button>
      </section>
    </div>
  );
}

