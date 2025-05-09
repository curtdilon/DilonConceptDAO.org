import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <Link href="/privacy-policy" className="hover:text-white mx-2">Privacy Policy</Link>
          <span className="text-gray-500">|</span>
          <Link href="/terms-of-service" className="hover:text-white mx-2">Terms of Service</Link>
          {/* Add other relevant links here, e.g., social media icons */}
        </div>
        <p>&copy; {new Date().getFullYear()} Dilon Concept DAO. All rights reserved.</p>
        <p className="text-sm mt-2">
          Built with passion for a decentralized future.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

