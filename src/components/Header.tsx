'use client';

import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="bg-white shadow-sm fixed top-0 w-full z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-3xl font-bold text-gray-900">
              CMBL
            </div>
            <div className="ml-2 text-sm text-red-600 font-semibold uppercase tracking-wider">
              Construction
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-red-600 font-medium transition-colors duration-200 text-sm uppercase tracking-wider"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <a 
              href="tel:+234-856-849-8752"
              className="flex items-center text-gray-600 hover:text-red-600 transition-colors"
            >
              <Phone className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">+234-856-849-8752</span>
            </a>
            <a
              href="#contact"
              className="bg-red-600 text-white px-6 py-2 text-sm font-semibold hover:bg-red-700 transition-colors uppercase tracking-wider"
            >
              Get Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-100 mt-4">
                <a
                  href="tel:+234-856-849-8752"
                  className="block px-3 py-2 text-sm text-gray-600"
                >
                  📞 +234-856-849-8752
                </a>
                <a
                  href="#contact"
                  className="block px-3 py-2 text-center bg-red-600 text-white font-semibold hover:bg-red-700 mt-2 uppercase tracking-wider"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Quote
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}