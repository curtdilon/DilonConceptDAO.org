import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gaming Environment | Dilon Concept DAO",
  description: "Explore the Dilon Concept DAO gaming environment, designed for engagement, education, and exploring Dilon principles.",
};

const GamingPage = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10 md:mb-12 text-gray-800">The Dilon Concept Gaming Environment</h1>

      <section className="mb-10 md:mb-12 bg-white p-6 sm:p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-green-600">1. Vision & Purpose</h2>
        <p className="text-md sm:text-lg text-gray-700 leading-relaxed mb-4">
          The Dilon Concept Gaming Environment is envisioned as a vibrant, engaging layer within Dilonland and DC [Country] Replicas. It aims to offer interactive experiences that are not only entertaining but also deeply aligned with Dilon principles, fostering a new way for citizens to connect with and understand the ecosystem.
        </p>
        <h3 className="text-xl sm:text-2xl font-medium mb-3 text-gray-700">Core Purposes:</h3>
        <ul className="list-disc list-inside space-y-3 text-md sm:text-lg text-gray-700 leading-relaxed">
          <li>
            <strong>Enhanced Citizen Engagement:</strong> Make participation in the virtual environment more appealing and accessible to a wider audience, moving beyond traditional DAO interfaces.
          </li>
          <li>
            <strong>Education & Skill Development:</strong> Offer gamified learning modules on resource management, sustainability, civic participation, and the core tenets of the Dilon Concept.
          </li>
          <li>
            <strong>Exploration & Experimentation:</strong> Allow citizens to playfully explore complex societal systems, economic models, and resource allocation strategies in a consequence-free virtual setting.
          </li>
          <li>
            <strong>Community Building:</strong> Foster collaboration, teamwork, and shared experiences among citizens, strengthening the social fabric of the Dilon Concept DAO.
          </li>
        </ul>
      </section>

      <section className="mb-10 md:mb-12 bg-white p-6 sm:p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-green-600">2. Key Features & Concepts</h2>
        <p className="text-md sm:text-lg text-gray-700 leading-relaxed mb-4">
          Drawing inspiration from metaverse and blockchain gaming advancements, the Dilon Gaming Environment will incorporate several key features:
        </p>
        <ul className="list-disc list-inside space-y-3 text-md sm:text-lg text-gray-700 leading-relaxed">
          <li>
            <strong>Alignment with Dilon Principles:</strong> Games will be designed to reflect or allow exploration of resource management, self-sufficiency (e.g., building virtual Dilon Houses), meritocracy, and collaborative projects.
          </li>
          <li>
            <strong>NFT-Powered Asset Ownership:</strong> Players can truly own in-game assets (cosmetics, special tools, decorative items for virtual Dilon Houses) as NFTs, tradable on a dedicated marketplace.
          </li>
          <li>
            <strong>DAO-Integrated Governance:</strong> Aspects of the gaming environment, such as new game module proposals or economic parameter adjustments, could be influenced or governed by community input through the Dilon Concept DAO or a specialized gaming sub-DAO.
          </li>
          <li>
            <strong>Focus on Simulation & Strategy:</strong> Emphasis will be on simulation, strategy, building, and educational games rather than purely speculative Play-to-Earn (P2E) models, ensuring alignment with the Dilon Concept’s constructive ethos.
          </li>
          <li>
            <strong>Cross-Platform Accessibility:</strong> Aim for accessibility across various devices, potentially starting with web-based experiences and exploring VR/AR integrations in the future.
          </li>
        </ul>
      </section>

      <section className="mb-10 md:mb-12 bg-white p-6 sm:p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-green-600">3. Potential Revenue Streams</h2>
        <p className="text-md sm:text-lg text-gray-700 leading-relaxed mb-4">
          While the primary goal is engagement and education, the gaming environment can also generate sustainable revenue to support the Dilon Concept DAO and the Dilon Concept Foundation. Potential streams include:
        </p>
        <ul className="list-disc list-inside space-y-3 text-md sm:text-lg text-gray-700 leading-relaxed">
          <li>
            <strong>Sale of Unique In-Game Assets (NFTs):</strong> Primary sales of cosmetic or utility-based gaming NFTs (non-essential for core Dilon access or governance participation).
          </li>
          <li>
            <strong>Marketplace Fees:</strong> A small percentage fee on player-to-player trades of gaming NFTs within the official Dilon marketplace.
          </li>
          <li>
            <strong>Premium Experiences/Events:</strong> Fees for accessing specialized gaming experiences, tournaments, or exclusive content modules (optional for users).
          </li>
          <li>
            <strong>User-Generated Content Sales:</strong> If the platform supports it, a share from sales of community-created game assets or experiences.
          </li>
        </ul>
        <p className="text-md sm:text-lg text-gray-700 leading-relaxed mt-4">
          A portion of net revenue generated will be allocated to the Dilon Concept Foundation to fund further R&D, creating a virtuous cycle.
        </p>
      </section>

      <section className="mb-10 md:mb-12 bg-white p-6 sm:p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-green-600">4. Technical Considerations</h2>
        <p className="text-md sm:text-lg text-gray-700 leading-relaxed mb-4">
          The development will leverage modern game development practices and blockchain technology:
        </p>
        <ul className="list-disc list-inside space-y-3 text-md sm:text-lg text-gray-700 leading-relaxed">
          <li>
            <strong>Platform Choice:</strong> Built on Polygon for scalability, lower transaction fees, and faster processing, consistent with the Dilon Concept DAO infrastructure.
          </li>
          <li>
            <strong>Game Engines & Tools:</strong> Utilizing industry-standard game engines (e.g., Unity, Unreal Engine) with SDKs for blockchain integration, or exploring web-native game development frameworks.
          </li>
          <li>
            <strong>Smart Contracts:</strong> For NFT minting, ownership, marketplace transactions, and potentially aspects of game logic or reward distribution.
          </li>
          <li>
            <strong>User Experience (UX):</strong> Prioritizing a seamless and intuitive experience, especially for users who may not be familiar with blockchain or crypto wallets.
          </li>
        </ul>
      </section>

      <section className="bg-blue-600 text-white p-10 sm:p-12 md:p-16 rounded-lg text-center shadow-xl">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Enter the Dilonverse!</h2>
        <p className="text-md sm:text-lg mb-10 max-w-2xl mx-auto">
          The Dilon Concept Gaming Environment is currently under development. Stay tuned for updates, sneak peeks, and opportunities to get involved in shaping this exciting new dimension of the Dilon Concept DAO.
        </p>
        <button className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-lg text-lg sm:text-xl transition-colors duration-200">
          Stay Updated
        </button>
      </section>
    </div>
  );
};

export default GamingPage;

