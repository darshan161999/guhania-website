'use client';

import { useState, useEffect, useRef } from 'react';
import { 
  CreditCard, 
  ShoppingCart, 
  BarChart3, 
  Users, 
  Calendar, 
  Smartphone,
  Filter,
  ArrowRight,
  Star,
  CheckCircle,
  Zap
} from 'lucide-react';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: 'all', name: 'All Solutions', count: 6 },
    { id: 'pos', name: 'Point of Sale', count: 2 },
    { id: 'online', name: 'Online Ordering', count: 2 },
    { id: 'analytics', name: 'Analytics', count: 2 }
  ];

  const products = [
    {
      id: 1,
      category: 'pos',
      title: 'Smart POS System',
      subtitle: 'Next-Generation Point of Sale',
      description: 'Intuitive, cloud-based POS system designed for modern restaurants with advanced inventory management and real-time reporting.',
      icon: CreditCard,
      features: ['Cloud-Based', 'Real-Time Sync', 'Inventory Management', 'Multi-Location'],
      price: 'Starting at $99/month',
      rating: 4.9,
      reviews: 234,
      color: 'from-orange-400 to-red-500',
      bgPattern: 'pos-pattern'
    },
    {
      id: 2,
      category: 'pos',
      title: 'Mobile POS',
      subtitle: 'Tableside Service Revolution',
      description: 'Empower your staff with mobile ordering capabilities, reducing wait times and enhancing customer satisfaction.',
      icon: Smartphone,
      features: ['Tableside Ordering', 'Payment Processing', 'Kitchen Integration', 'Staff Management'],
      price: 'Starting at $79/month',
      rating: 4.8,
      reviews: 189,
      color: 'from-blue-400 to-purple-500',
      bgPattern: 'mobile-pattern'
    },
    {
      id: 3,
      category: 'online',
      title: 'Online Ordering Platform',
      subtitle: 'Seamless Digital Experience',
      description: 'Complete online ordering solution with customizable menus, delivery tracking, and integrated payment processing.',
      icon: ShoppingCart,
      features: ['Custom Branding', 'Delivery Tracking', 'Menu Management', 'Customer Profiles'],
      price: 'Starting at $149/month',
      rating: 4.9,
      reviews: 312,
      color: 'from-green-400 to-teal-500',
      bgPattern: 'online-pattern'
    },
    {
      id: 4,
      category: 'online',
      title: 'Delivery Management',
      subtitle: 'Optimize Your Delivery Operations',
      description: 'Advanced delivery management system with route optimization, driver tracking, and customer communication.',
      icon: Users,
      features: ['Route Optimization', 'Driver Tracking', 'Customer Updates', 'Performance Analytics'],
      price: 'Starting at $129/month',
      rating: 4.7,
      reviews: 156,
      color: 'from-yellow-400 to-orange-500',
      bgPattern: 'delivery-pattern'
    },
    {
      id: 5,
      category: 'analytics',
      title: 'Business Intelligence',
      subtitle: 'Data-Driven Decision Making',
      description: 'Comprehensive analytics dashboard providing insights into sales, customer behavior, and operational efficiency.',
      icon: BarChart3,
      features: ['Real-Time Dashboards', 'Predictive Analytics', 'Custom Reports', 'KPI Tracking'],
      price: 'Starting at $199/month',
      rating: 4.9,
      reviews: 278,
      color: 'from-purple-400 to-pink-500',
      bgPattern: 'analytics-pattern'
    },
    {
      id: 6,
      category: 'analytics',
      title: 'Reservation System',
      subtitle: 'Smart Table Management',
      description: 'Intelligent reservation and table management system with waitlist optimization and customer preferences.',
      icon: Calendar,
      features: ['Smart Scheduling', 'Waitlist Management', 'Customer Preferences', 'Staff Coordination'],
      price: 'Starting at $89/month',
      rating: 4.8,
      reviews: 203,
      color: 'from-indigo-400 to-blue-500',
      bgPattern: 'reservation-pattern'
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

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

    return () => observer.disconnect();
  }, []);

  return (
    <section id="products" ref={sectionRef} className="py-24 bg-gradient-to-br from-olive-50 via-white to-orange-25 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-orange-200 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-olive-200 rounded-full animate-float"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center glass rounded-full px-6 py-3 mb-6 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
            <Zap className="h-5 w-5 text-orange-600 mr-2" />
            <span className="text-orange-600 font-semibold text-lg">Our Solutions</span>
          </div>
          <h2 className={`text-4xl md:text-6xl font-bold font-display text-olive-900 mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
            Powerful Tools for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">Modern Restaurants</span>
          </h2>
          <p className={`text-lg text-olive-700 max-w-3xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{animationDelay: '0.4s'}}>
            Discover our comprehensive suite of restaurant technology solutions designed to streamline operations, boost efficiency, and enhance customer experiences.
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-4 mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{animationDelay: '0.6s'}}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-lg'
                  : 'glass text-olive-700 hover:bg-white/30'
              } btn-magnetic`}
            >
              <Filter className="h-4 w-4 mr-2" />
              {category.name}
              <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                activeCategory === category.id ? 'bg-white/20' : 'bg-olive-100'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => {
            const Icon = product.icon;
            return (
              <div
                key={product.id}
                className={`card-hover glass rounded-3xl overflow-hidden group ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                style={{animationDelay: `${0.8 + index * 0.1}s`}}
              >
                {/* Card Header */}
                <div className={`relative p-8 bg-gradient-to-br ${product.color} text-white`}>
                  <div className="absolute inset-0 opacity-10">
                    <div className="w-full h-full bg-repeat" 
                         style={{
                           backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.1'%3E%3Cpath d='M20 20c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zm0-20c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8z'/%3E%3C/g%3E%3C/svg%3E")`,
                           backgroundSize: '40px 40px'
                         }}>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-white/20 rounded-full">
                        <Icon className="h-8 w-8" />
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="text-sm font-semibold">{product.rating}</span>
                        <span className="text-xs opacity-80">({product.reviews})</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
                    <p className="text-sm opacity-90">{product.subtitle}</p>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-8">
                  <p className="text-olive-700 mb-6 leading-relaxed">{product.description}</p>
                  
                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-sm text-olive-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-bold text-olive-900">{product.price}</span>
                    <span className="text-sm text-olive-600">per location</span>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full btn-gradient text-white font-semibold py-3 rounded-full shadow-lg btn-magnetic flex items-center justify-center space-x-2 group-hover:shadow-xl transition-all duration-300">
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{animationDelay: '1.4s'}}>
          <div className="glass rounded-3xl p-8 max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-olive-900 mb-4">Ready to Transform Your Operations?</h3>
            <p className="text-lg text-olive-700 mb-8">
              Get a personalized demo of our solutions and see how they can revolutionize your restaurant business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-gradient text-white font-semibold px-8 py-4 rounded-full shadow-xl btn-magnetic">
                Schedule Demo
              </button>
              <button className="glass text-olive-700 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-white/30 btn-magnetic">
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products; 