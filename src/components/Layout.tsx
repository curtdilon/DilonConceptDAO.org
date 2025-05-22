"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // For hamburger menu icons

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/about-concept", label: "ABOUT" },
    { href: "/dilonland-dao", label: "DAO" },
    { href: "/governance", label: "GOVERNANCE" },
    { href: "/citizenship-nfts", label: "CITIZENSHIP" },
    { href: "/technology", label: "TECHNOLOGY" },
    { href: "/roadmap", label: "ROADMAP" },
    { href: "/blog", label: "BLOG" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800 font-sans">
      {/* Top Navigation Bar */}
      <header className="bg-white text-gray-800 py-4 shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          {/* Logo */}
          <div className="flex items-center mb-4 md:mb-0">
            <Link href="/" className="text-2xl font-bold hover:text-yellow-400 transition-colors">
              <span className="text-yellow-400">Dilon</span>ConceptDAO.org
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="px-4 py-2 hover:bg-yellow-400 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu" className="p-2">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <nav className="md:hidden bg-white">
            <ul className="flex flex-col space-y-2 p-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="block py-2 px-3 hover:bg-yellow-400 hover:text-white transition-colors" 
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>
      
      <main className="flex-grow">
        {children}
      </main>
      
      <footer className="bg-gray-800 text-white p-6 text-center">
        <p>&copy; {new Date().getFullYear()} DilonConceptDAO. All rights reserved.</p>
        <p className="text-sm text-gray-400 mt-1">A project dedicated to exploring new societal models through the Dilon Concept.</p>
      </footer>
    </div>
  );
};

export default Layout;
