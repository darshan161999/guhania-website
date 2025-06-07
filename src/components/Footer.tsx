'use client';

import { useState, useEffect, useRef } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Youtube,
  Heart,
  ExternalLink,
  ChevronUp,
  Zap
} from 'lucide-react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Products', href: '#products' },
    { name: 'Careers', href: '#careers' },
    { name: 'Contact', href: '#contact' }
  ];

  const products = [
    { name: 'Smart POS System', href: '#' },
    { name: 'Online Ordering', href: '#' },
    { name: 'Analytics Dashboard', href: '#' },
    { name: 'Mobile Solutions', href: '#' }
  ];

  const resources = [
    { name: 'Documentation', href: '#' },
    { name: 'API Reference', href: '#' },
    { name: 'Support Center', href: '#' },
    { name: 'System Status', href: '#' }
  ];

  const legal = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
    { name: 'GDPR Compliance', href: '#' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook', color: 'hover:text-blue-600' },
    { icon: Twitter, href: '#', name: 'Twitter', color: 'hover:text-sky-500' },
    { icon: Linkedin, href: '#', name: 'LinkedIn', color: 'hover:text-blue-700' },
    { icon: Instagram, href: '#', name: 'Instagram', color: 'hover:text-pink-600' },
    { icon: Youtube, href: '#', name: 'YouTube', color: 'hover:text-red-600' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <footer ref={sectionRef} className="relative bg-gradient-to-br from-olive-900 via-olive-800 to-olive-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" 
               style={{
                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                 backgroundSize: '60px 60px'
               }}>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-64 h-64 bg-orange-400/10 rounded-full animate-float"></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-yellow-400/10 rounded-full animate-pulse-slow"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Newsletter Section */}
          <div className={`py-16 border-b border-olive-700/50 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center glass-dark rounded-full px-6 py-3 mb-6">
                <Zap className="h-5 w-5 text-orange-400 mr-2" />
                <span className="text-orange-400 font-semibold">Stay Updated</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold font-display mb-4">
                Get the Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">Restaurant Tech</span> Insights
              </h3>
              <p className="text-olive-200 text-lg mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter for industry trends, product updates, and exclusive insights from restaurant technology experts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-olive-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                />
                <button className="btn-gradient text-white font-semibold px-8 py-4 rounded-full shadow-lg btn-magnetic flex items-center justify-center space-x-2">
                  <span>Subscribe</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Main Footer Content */}
          <div className={`py-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Company Info */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h2 className="text-3xl font-bold font-display mb-4">Guhania LLC</h2>
                  <p className="text-olive-200 text-lg leading-relaxed">
                    Transforming the restaurant industry through innovative technology solutions. We empower restaurant owners with tools that drive growth, efficiency, and exceptional customer experiences.
                  </p>
                </div>

                {/* Contact Info */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-orange-400/20 rounded-lg">
                      <Mail className="h-5 w-5 text-orange-400" />
                    </div>
                    <span className="text-olive-200">hello@guhaniallc.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-orange-400/20 rounded-lg">
                      <Phone className="h-5 w-5 text-orange-400" />
                    </div>
                    <span className="text-olive-200">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-orange-400/20 rounded-lg">
                      <MapPin className="h-5 w-5 text-orange-400" />
                    </div>
                    <span className="text-olive-200">123 Innovation Drive, Boston, MA 02101</span>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={social.name}
                          href={social.href}
                          className={`p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 ${social.color} card-hover`}
                          aria-label={social.name}
                        >
                          <Icon className="h-5 w-5" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
                <ul className="space-y-3">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-olive-200 hover:text-orange-400 transition-colors duration-300 flex items-center group"
                      >
                        <span>{link.name}</span>
                        <ArrowRight className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Products */}
              <div>
                <h4 className="text-lg font-semibold mb-6">Products</h4>
                <ul className="space-y-3">
                  {products.map((product) => (
                    <li key={product.name}>
                      <a
                        href={product.href}
                        className="text-olive-200 hover:text-orange-400 transition-colors duration-300 flex items-center group"
                      >
                        <span>{product.name}</span>
                        <ExternalLink className="h-3 w-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources & Legal */}
              <div className="space-y-8">
                <div>
                  <h4 className="text-lg font-semibold mb-6">Resources</h4>
                  <ul className="space-y-3">
                    {resources.map((resource) => (
                      <li key={resource.name}>
                        <a
                          href={resource.href}
                          className="text-olive-200 hover:text-orange-400 transition-colors duration-300 flex items-center group"
                        >
                          <span>{resource.name}</span>
                          <ExternalLink className="h-3 w-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-6">Legal</h4>
                  <ul className="space-y-3">
                    {legal.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-olive-200 hover:text-orange-400 transition-colors duration-300"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className={`py-8 border-t border-olive-700/50 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{animationDelay: '0.4s'}}>
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 text-olive-300">
                <span>© 2024 Guhania LLC. Made with</span>
                <Heart className="h-4 w-4 text-red-400 animate-pulse" />
                <span>for restaurants worldwide.</span>
              </div>
              <div className="flex items-center space-x-6 text-sm text-olive-300">
                <span>All rights reserved</span>
                <span>•</span>
                <span>Powered by innovation</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 btn-gradient rounded-full shadow-lg btn-magnetic z-50 animate-bounce"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-6 w-6 text-white" />
        </button>
      )}
    </>
  );
};

export default Footer; 