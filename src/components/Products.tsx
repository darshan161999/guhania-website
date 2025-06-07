'use client';

import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Clock, 
  Star, 
  MapPin, 
  Truck, 
  Smartphone, 
  CreditCard,
  Shield,
  Users,
  Award,
  ArrowRight,
  CheckCircle,
  Zap,
  Heart,
  Globe
} from 'lucide-react';

export default function Products() {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      id: 1,
      title: "Food Delivery",
      description: "Get your favorite meals delivered fresh and fast",
      icon: <Truck className="w-8 h-8" />,
      features: ["25min delivery", "Real-time tracking", "500+ restaurants"],
      color: "text-delivery-green",
      bgColor: "bg-light-green",
      image: "🍔"
    },
    {
      id: 2,
      title: "Restaurant Tech",
      description: "Complete technology solutions for restaurants",
      icon: <Smartphone className="w-8 h-8" />,
      features: ["POS Systems", "Online ordering", "Analytics dashboard"],
      color: "text-delivery-orange",
      bgColor: "bg-light-orange",
      image: "📱"
    },
    {
      id: 3,
      title: "Payment Solutions",
      description: "Secure and seamless payment processing",
      icon: <CreditCard className="w-8 h-8" />,
      features: ["Multiple payment methods", "Secure processing", "Instant settlements"],
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      image: "💳"
    },
    {
      id: 4,
      title: "Customer Support",
      description: "24/7 support for customers and restaurants",
      icon: <Users className="w-8 h-8" />,
      features: ["24/7 availability", "Live chat", "Phone support"],
      color: "text-purple-500",
      bgColor: "bg-purple-50",
      image: "🎧"
    }
  ];

  const features = [
    {
      title: "Lightning Fast Delivery",
      description: "Average delivery time of 25 minutes with real-time tracking",
      icon: <Zap className="w-6 h-6" />,
      color: "text-delivery-green"
    },
    {
      title: "Secure Payments",
      description: "Multiple payment options with bank-level security",
      icon: <Shield className="w-6 h-6" />,
      color: "text-blue-500"
    },
    {
      title: "Quality Guaranteed",
      description: "Only partner with top-rated restaurants",
      icon: <Star className="w-6 h-6" />,
      color: "text-yellow-500"
    },
    {
      title: "24/7 Support",
      description: "Always here to help with any issues",
      icon: <Heart className="w-6 h-6" />,
      color: "text-red-500"
    }
  ];

  const stats = [
    { number: "500+", label: "Restaurants", icon: "🍽️" },
    { number: "50K+", label: "Happy Users", icon: "😊" },
    { number: "25min", label: "Avg Delivery", icon: "⚡" },
    { number: "4.9★", label: "App Rating", icon: "⭐" }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-delivery-green/10 border border-delivery-green/20 rounded-full mb-6">
            <ShoppingBag className="w-4 h-4 text-delivery-green" />
            <span className="text-sm font-semibold text-delivery-green">Our Services</span>
          </div>
          
          <h2 className="text-delivery-lg font-display text-gray-900 mb-6">
            Everything You Need for
            <span className="block text-delivery-green">Food Delivery Success</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From lightning-fast delivery to comprehensive restaurant technology, 
            we provide complete solutions for the modern food industry.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="delivery-card p-6 text-center hover:scale-105 transform transition-all duration-300"
            >
              <div className="text-4xl mb-4">{service.image}</div>
              <div className={`w-16 h-16 ${service.bgColor} rounded-2xl mx-auto mb-4 flex items-center justify-center ${service.color}`}>
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{service.description}</p>
              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-delivery-green" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <button className="w-full btn-delivery-primary mt-4 py-2 rounded-lg font-semibold">
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-delivery-md font-display text-gray-900 mb-4">
              Why Choose Our Platform?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Built with cutting-edge technology and designed for the best user experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="delivery-card p-6 text-center hover:scale-105 transform transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gray-100 rounded-xl mx-auto mb-4 flex items-center justify-center ${feature.color}`}>
                  {feature.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-20">
          <div className="feature-highlight">
            <div className="relative z-10">
              <div className="text-center mb-8">
                <h3 className="text-delivery-md font-display text-gray-900 mb-4">
                  Trusted by Thousands
                </h3>
                <p className="text-gray-600">
                  Join the growing community of satisfied customers and restaurant partners
                </p>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-delivery-md font-display text-gray-900 mb-4">
              How It Works
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple steps to get your favorite food delivered
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-delivery-green/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-delivery-green">1</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Choose Restaurant</h4>
              <p className="text-gray-600">Browse 500+ restaurants and select your favorites</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-delivery-orange/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-delivery-orange">2</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Place Order</h4>
              <p className="text-gray-600">Add items to cart and securely checkout</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-500">3</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Enjoy Food</h4>
              <p className="text-gray-600">Track delivery and enjoy your meal</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="delivery-card p-8 max-w-2xl mx-auto">
            <h3 className="text-delivery-md font-display text-gray-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-8">
              Join thousands of satisfied customers and start ordering today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-delivery-primary px-8 py-4 rounded-xl text-lg font-semibold flex items-center justify-center space-x-2">
                <ShoppingBag className="w-5 h-5" />
                <span>Start Ordering</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="btn-delivery-outline px-8 py-4 rounded-xl text-lg font-semibold flex items-center justify-center space-x-2">
                <Globe className="w-5 h-5" />
                <span>Partner With Us</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 