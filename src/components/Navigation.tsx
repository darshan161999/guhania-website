'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ChefHat } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Careers', href: '#careers' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-lg border-b border-olive-100' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <button onClick={() => scrollToSection('#home')} className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center shadow-sm">
              <ChefHat className="text-white h-6 w-6" />
            </div>
            <div>
              <div className="text-xl font-bold tracking-tight text-olive-900">GUHANIA</div>
              <div className="text-xs font-medium tracking-wider text-olive-600">
                RESTAURANTGROUP
              </div>
            </div>
          </button>

          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="px-4 py-2 text-sm font-semibold text-olive-700 hover:text-orange-500 rounded-lg transition-colors"
              >
                {item.name}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => scrollToSection('#contact')}
              className="hidden md:flex items-center space-x-2 bg-orange-500 text-white font-semibold px-5 py-2.5 rounded-full shadow-lg hover:bg-orange-600 transition-transform transform hover:scale-105 duration-300 ease-in-out"
            >
              <span>Get Started</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-olive-700 hover:bg-olive-100 focus:outline-none"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-lg animate-slide-down">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-olive-700 hover:text-orange-500 hover:bg-olive-50"
              >
                {item.name}
              </button>
            ))}
          </div>
          <div className="px-4 py-3 border-t border-olive-100">
            <button
              onClick={() => scrollToSection('#contact')}
              className="w-full flex items-center justify-center space-x-2 bg-orange-500 text-white font-semibold px-5 py-3 rounded-full shadow-lg hover:bg-orange-600 transition-colors"
            >
              <span>Get Started</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation; 