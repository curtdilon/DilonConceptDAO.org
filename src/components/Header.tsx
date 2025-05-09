import Image from "next/image";
import Link from "next/link";
import { useState } from "react"; // Import useState for mobile menu toggle

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/foundation", label: "Foundation" },
    { href: "/gaming", label: "Gaming" },
    { href: "/community", label: "Community" },
    { href: "/resources", label: "Resources" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/dilon_concept_logo.png"
            alt="Dilon Concept DAO Logo"
            width={40}
            height={40}
            priority
          />
          <span className="ml-3 text-xl font-bold text-gray-800">Dilon Concept DAO</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex">
          <ul className="flex space-x-6 text-gray-600">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-blue-600 transition-colors duration-200">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            className="text-gray-600 hover:text-blue-600 focus:outline-none focus:text-blue-600"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg absolute top-full left-0 right-0 py-2">
          <nav>
            <ul className="flex flex-col items-center space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 w-full text-center transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

