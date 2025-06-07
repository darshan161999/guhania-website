'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Clock, ShoppingBag, Star } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Products', href: '#products' },
    { name: 'Careers', href: '#careers' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-white'
    }`}>
      <div className="container">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green rounded-xl flex items-center justify-center">
              <ShoppingBag className="icon text-white" />
            </div>
            <div>
              <div className="font-bold text-xl text-primary">Guhania</div>
              <div className="text-xs text-green font-medium">Food Solutions</div>
            </div>
            
            {/* Location */}
            <div className="hidden md:flex items-center space-x-2 ml-6 px-3 py-1 bg-light rounded-lg">
              <MapPin className="icon text-green" />
              <span className="text-sm font-medium text-secondary">Boston, MA</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-secondary hover:text-green font-medium text-sm transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Delivery Time */}
            <div className="hidden sm:flex items-center space-x-1 badge badge-green">
              <Clock className="icon" />
              <span className="font-semibold">25-35 min</span>
            </div>

            {/* Rating */}
            <div className="hidden md:flex items-center space-x-1 badge badge-orange">
              <Star className="icon" />
              <span className="font-semibold">4.9</span>
            </div>

            {/* Order Button */}
            <button className="btn btn-primary">
              Order Now
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-secondary hover:bg-light"
            >
              {isMenuOpen ? <X className="icon" /> : <Menu className="icon" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <div className="container py-4 space-y-3">
            
            {/* Location - Mobile */}
            <div className="md:hidden flex items-center space-x-2 px-4 py-3 bg-light rounded-lg">
              <MapPin className="icon text-green" />
              <span className="font-medium text-secondary">Boston, MA</span>
            </div>

            {/* Navigation Items */}
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 text-secondary hover:bg-light hover:text-green font-medium rounded-lg"
              >
                {item.name}
              </a>
            ))}

            {/* Mobile Stats */}
            <div className="flex items-center justify-between px-4 py-3 bg-light rounded-lg">
              <div className="badge badge-green">
                <Clock className="icon mr-1" />
                <span className="font-semibold">25-35 min</span>
              </div>
              <div className="badge badge-orange">
                <Star className="icon mr-1" />
                <span className="font-semibold">4.9</span>
              </div>
            </div>

            {/* Mobile CTA */}
            <button className="w-full btn btn-primary btn-lg">
              🍔 Start Your Order
            </button>
          </div>
        </div>
      )}
    </nav>
  );
} 