import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dilon Concept Foundation | Dilon Concept DAO",
  description: "Learn about the Dilon Concept Foundation, its mission, governance, and how it funds R&D for the Dilon Concept ecosystem.",
};

const FoundationPage = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10 md:mb-12 text-gray-800">The Dilon Concept Foundation</h1>

      <section className="mb-10 md:mb-12 bg-white p-6 sm:p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-blue-600">1. Introduction</h2>
        <p className="text-md sm:text-lg text-gray-700 leading-relaxed">
          The Dilon Concept Foundation (DCF) serves as an international, transparent R&D fund. It is dedicated to the ongoing research, development, and refinement of the Dilon Concept and its associated technologies, including the Dilon Concept DAO, Dilonland, and DC [Country] Replicas. The Foundation’s primary goal is to ensure the long-term viability, ethical evolution, and global impact of the Dilon Concept.
        </p>
      </section>

      <section className="mb-10 md:mb-12 bg-white p-6 sm:p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-blue-600">2. Mission and Vision</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-medium mb-2 text-gray-700">Mission</h3>
            <p className="text-md sm:text-lg text-gray-700 leading-relaxed">
              To foster and fund cutting-edge research and development that advances the Dilon Concept, promoting resource-based economies, meritocratic governance, and sustainable societal structures for global benefit. The Foundation will ensure all R&D is conducted transparently and ethically, with outputs made available to the Dilon Concept ecosystem.
            </p>
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-medium mb-2 text-gray-700">Vision</h3>
            <p className="text-md sm:text-lg text-gray-700 leading-relaxed">
              To be a leading global R&D hub for societal innovation, empowering the Dilon Concept to create a more equitable, sustainable, and prosperous future for all participating nations and their citizens.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10 md:mb-12 bg-white p-6 sm:p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-blue-600">3. Legal Structure and Governance</h2>
        <p className="text-md sm:text-lg text-gray-700 leading-relaxed mb-4">
          The Dilon Concept Foundation will be established as an independent, non-profit international foundation, likely headquartered in a jurisdiction known for stable governance and favorable regulations (e.g., Switzerland, Netherlands, Singapore – pending further legal consultation).
        </p>
        <h3 className="text-xl sm:text-2xl font-medium mb-3 text-gray-700">Governance Structure:</h3>
        <ul className="list-disc list-inside space-y-3 text-md sm:text-lg text-gray-700 leading-relaxed">
          <li>
            <strong>Foundation Council (Board of Directors):</strong> 7-11 members including Dilon representatives, elected representatives from DC [Country] Replicas, independent experts, and a Dilonland DAO representative. Responsible for strategic direction, budget approval, and oversight.
          </li>
          <li>
            <strong>Executive Director & Secretariat:</strong> Appointed by the Council, responsible for day-to-day operations and implementation of strategic plans.
          </li>
          <li>
            <strong>R&D Advisory Committee(s):</strong> Experts providing advice on R&D priorities and proposal evaluation.
          </li>
          <li>
            <strong>Transparency & Ethics Oversight Body:</strong> Independent body auditing operations and publishing public reports.
          </li>
        </ul>
      </section>

      <section className="mb-10 md:mb-12 bg-white p-6 sm:p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-blue-600">4. Transparency Mechanisms</h2>
        <ul className="list-disc list-inside space-y-3 text-md sm:text-lg text-gray-700 leading-relaxed">
          <li>Public annual audited financial reporting.</li>
          <li>Publicly accessible R&D project database (objectives, funding, progress, outcomes).</li>
          <li>Public summaries of key Foundation Council meetings.</li>
          <li>Periodic public consultations on strategic priorities.</li>
          <li>Potential blockchain integration for tracking grants and milestones.</li>
          <li>Robust conflict of interest policies.</li>
        </ul>
      </section>

      <section className="mb-10 md:mb-12 bg-white p-6 sm:p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-blue-600">5. Fund Allocation Strategy for R&D</h2>
        <p className="text-md sm:text-lg text-gray-700 leading-relaxed mb-4">
          Funds are allocated based on strategic priorities. Key R&D areas include:
        </p>
        <ul className="list-disc list-inside space-y-2 text-md sm:text-lg text-gray-700 leading-relaxed">
          <li>Core Dilon Concept Principles (resource-based economics, meritocracy, Dilon House, Dilon School).</li>
          <li>Dilonland Virtual Environment Technology (VR/AR, AI, scalability).</li>
          <li>DAO Governance Models (decentralized governance, voting, treasury management).</li>
          <li>Economic Modeling & Simulation.</li>
          <li>Integration Technologies for Dilon Concept components.</li>
          <li>Ethical Frameworks.</li>
          <li>Gaming Environment R&D.</li>
        </ul>
        <p className="text-md sm:text-lg text-gray-700 leading-relaxed mt-4">
          The allocation process involves calls for proposals, rigorous peer review, and emphasis on high-impact, innovative projects aligned with Dilon Concept principles.
        </p>
      </section>

      <section className="mb-10 md:mb-12 bg-white p-6 sm:p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-blue-600">6. Funding Mechanisms ($50M Annual Target)</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-medium mb-2 text-gray-700">6.1. Tiered Participation Fees from DC [Country] Replicas</h3>
            <p className="text-md sm:text-lg text-gray-700 leading-relaxed">
              Countries benefiting from the Dilon Concept ecosystem contribute equitably based on capacity (GNI per capita, HDI). Each tier has an annual contribution amount, forming a primary component of the $50M target.
            </p>
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-medium mb-2 text-gray-700">6.2. Donations</h3>
            <p className="text-md sm:text-lg text-gray-700 leading-relaxed">
              Sourced from individual philanthropists, corporate social responsibility programs, other foundations/NGOs, crowdfunding, and potentially a portion of Dilonland Citizenship NFT sales.
            </p>
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-medium mb-2 text-gray-700">6.3. Revenue from Gaming Environment (Exploratory)</h3>
            <p className="text-md sm:text-lg text-gray-700 leading-relaxed">
              A portion of net revenue from the Dilon Concept DAO’s gaming environment could be allocated to the Foundation, providing a sustainable, ecosystem-generated funding stream.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-blue-600">7. Initial Setup and Phasing</h2>
        <ul className="list-disc list-inside space-y-3 text-md sm:text-lg text-gray-700 leading-relaxed">
          <li>
            <strong>Phase 1 (Year 1-2):</strong> Legal establishment, interim council/director appointment, core policy development, initial fundraising, launch of first R&D grant calls.
          </li>
          <li>
            <strong>Phase 2 (Year 3-5):</strong> Full operational capacity, established tiered fee collection, diversified donation streams, expanded R&D portfolio, active community engagement.
          </li>
        </ul>
      </section>

    </div>
  );
};

export default FoundationPage;

