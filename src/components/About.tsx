'use client';

import React from 'react';
import { 
  Clock, 
  Shield, 
  Users, 
  Award, 
  MapPin, 
  Heart,
  CheckCircle,
  Zap
} from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Clock className="icon-lg" />,
      title: "Lightning Fast",
      description: "Average delivery time of 25 minutes",
      highlight: "30min guarantee"
    },
    {
      icon: <Shield className="icon-lg" />,
      title: "Safe & Secure",
      description: "Contactless delivery and secure payments",
      highlight: "100% secure"
    },
    {
      icon: <Users className="icon-lg" />,
      title: "Community First",
      description: "Supporting local restaurants and jobs",
      highlight: "500+ partners"
    },
    {
      icon: <Award className="icon-lg" />,
      title: "Quality Assured",
      description: "Only top-rated restaurants",
      highlight: "4.9★ rating"
    }
  ];

  const values = [
    {
      icon: <Heart className="icon" />,
      title: "Customer Love",
      description: "Every order matters. We treat your cravings like our own family's hunger."
    },
    {
      icon: <Zap className="icon" />,
      title: "Innovation",
      description: "Constantly improving our technology to serve you better and faster."
    },
    {
      icon: <Users className="icon" />,
      title: "Community",
      description: "Building stronger neighborhoods by connecting people with local restaurants."
    },
    {
      icon: <CheckCircle className="icon" />,
      title: "Support",
      description: "24/7 customer support because your satisfaction is our priority."
    }
  ];

  const achievements = [
    { number: "50K+", label: "Happy Customers", emoji: "😊" },
    { number: "500+", label: "Restaurant Partners", emoji: "🍽️" },
    { number: "25 min", label: "Average Delivery", emoji: "⚡" },
    { number: "4.9★", label: "Customer Rating", emoji: "⭐" },
    { number: "99.8%", label: "Uptime", emoji: "🛡️" },
    { number: "24/7", label: "Support", emoji: "💬" }
  ];

  return (
    <section id="about" className="bg-gray section">
      <div className="container">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="badge badge-green mb-6">
            <MapPin className="icon mr-2" />
            About Guhania
          </div>
          
          <h2 className="text-4xl font-bold text-primary mb-6">
            Revolutionizing Food Delivery
            <span className="block text-green">One Meal at a Time</span>
          </h2>
          
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            We're not just a food delivery service – we're your neighborhood food champions, 
            connecting you with the best local restaurants while supporting our community's culinary dreams.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-primary">Our Story</h3>
            <div className="space-y-4 text-secondary">
              <p>
                Founded in 2020 in the heart of Boston, Guhania started as a simple idea: 
                <strong className="text-green"> what if ordering food could be as easy as breathing?</strong>
              </p>
              <p>
                Our founders, passionate food lovers and tech enthusiasts, noticed that amazing local restaurants 
                were struggling to reach customers during the pandemic. We built a platform that doesn't just deliver food – 
                <strong className="text-orange"> it delivers experiences.</strong>
              </p>
              <p>
                Today, we've grown into Boston's favorite food delivery platform, serving thousands of hungry customers 
                and supporting hundreds of local restaurants. But we're just getting started.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn btn-primary">
                Join Our Mission
              </button>
              <button className="btn btn-outline">
                Read More
              </button>
            </div>
          </div>

          <div className="card card-padding text-center bg-light">
            <div className="text-6xl mb-4">🍕🍔🍜🍣</div>
            <p className="text-secondary">Connecting communities through great food</p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">
              Why Choose Guhania?
            </h3>
            <p className="text-secondary max-w-2xl mx-auto">
              We've built our platform around four core principles that make us different
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="card card-padding text-center">
                <div className="text-green mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-bold text-primary mb-2">{feature.title}</h4>
                <p className="text-secondary text-sm mb-3">{feature.description}</p>
                <div className="badge badge-green">
                  {feature.highlight}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">
              Our Values
            </h3>
            <p className="text-secondary max-w-2xl mx-auto">
              These principles guide everything we do, from technology development to customer service
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div key={index} className="card card-padding flex items-start space-x-4">
                <div className="text-green flex-shrink-0">
                  {value.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary mb-2">{value.title}</h4>
                  <p className="text-secondary">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">
              Our Impact
            </h3>
            <p className="text-secondary max-w-2xl mx-auto">
              Numbers that showcase our commitment to excellence and community growth
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="card card-padding-sm text-center">
                <div className="text-3xl mb-2">{achievement.emoji}</div>
                <div className="text-2xl font-bold text-primary mb-1">{achievement.number}</div>
                <div className="text-sm text-secondary font-medium">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="card card-padding text-center bg-light">
          <div className="text-4xl mb-6">🚀</div>
          <h3 className="text-3xl font-bold text-primary mb-6">
            Our Mission
          </h3>
          <p className="text-xl text-secondary mb-8 max-w-4xl mx-auto">
            To make delicious, high-quality food accessible to everyone while empowering local restaurants 
            to thrive in the digital age. We're building a future where great food is just a tap away, 
            and every meal supports our local community.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn btn-primary btn-lg">
              <Users className="icon mr-2" />
              Join Our Team
            </button>
            <button className="btn btn-outline btn-lg">
              <Award className="icon mr-2" />
              Become a Partner
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 