'use client';

import React, { useState } from 'react';
import { 
  MapPin, 
  Clock, 
  Users, 
  Truck, 
  Heart, 
  Star,
  ArrowRight,
  Briefcase,
  Code,
  Headphones,
  TrendingUp,
  Award,
  Coffee,
  Wifi,
  GraduationCap,
  Shield
} from 'lucide-react';

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState(null);

  const jobCategories = [
    { id: 'all', name: 'All Positions', count: 12 },
    { id: 'tech', name: 'Technology', count: 5 },
    { id: 'operations', name: 'Operations', count: 4 },
    { id: 'customer', name: 'Customer Success', count: 3 }
  ];

  const jobs = [
    {
      id: 1,
      title: "Senior Software Engineer",
      department: "Technology",
      location: "Boston, MA",
      type: "Full-time",
      level: "Senior",
      description: "Build the future of food delivery technology",
      requirements: ["5+ years React/Node.js", "Cloud platforms experience", "Microservices architecture"],
      salary: "$120K - $160K",
      category: "tech",
      featured: true
    },
    {
      id: 2,
      title: "Delivery Operations Manager",
      department: "Operations",
      location: "Boston, MA",
      type: "Full-time",
      level: "Mid-Level",
      description: "Optimize delivery routes and manage driver network",
      requirements: ["Operations experience", "Data analysis skills", "Team leadership"],
      salary: "$80K - $110K",
      category: "operations",
      featured: false
    },
    {
      id: 3,
      title: "Customer Success Specialist",
      department: "Customer Success",
      location: "Remote",
      type: "Full-time",
      level: "Entry-Level",
      description: "Help customers have amazing food delivery experiences",
      requirements: ["Customer service experience", "Communication skills", "Problem solving"],
      salary: "$50K - $70K",
      category: "customer",
      featured: false
    },
    {
      id: 4,
      title: "Product Designer",
      department: "Technology",
      location: "Boston, MA",
      type: "Full-time",
      level: "Mid-Level",
      description: "Design beautiful and intuitive user experiences",
      requirements: ["UI/UX design experience", "Figma proficiency", "Mobile design"],
      salary: "$90K - $120K",
      category: "tech",
      featured: true
    }
  ];

  const benefits = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, dental, and vision coverage",
      color: "text-red-500",
      bgColor: "bg-red-50"
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Work-Life Balance",
      description: "Flexible hours, unlimited PTO, and remote work options",
      color: "text-delivery-orange",
      bgColor: "bg-light-orange"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Learning & Growth",
      description: "Professional development budget and conference attendance",
      color: "text-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Equity & Bonuses",
      description: "Stock options and performance-based bonuses",
      color: "text-delivery-green",
      bgColor: "bg-light-green"
    }
  ];

  const perks = [
    "🍕 Free daily meals from partner restaurants",
    "🏠 Remote work flexibility",
    "💰 Competitive salary & equity",
    "🏥 Premium health benefits",
    "🎓 $2,000 learning budget",
    "🏖️ Unlimited vacation policy"
  ];

  const stats = [
    { number: "150+", label: "Team Members", icon: "👥" },
    { number: "4.8★", label: "Glassdoor Rating", icon: "⭐" },
    { number: "95%", label: "Employee Satisfaction", icon: "😊" },
    { number: "12", label: "Open Positions", icon: "💼" }
  ];

  return (
    <section id="careers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-delivery-green/10 border border-delivery-green/20 rounded-full mb-6">
            <Briefcase className="w-4 h-4 text-delivery-green" />
            <span className="text-sm font-semibold text-delivery-green">Join Our Team</span>
          </div>
          
          <h2 className="text-delivery-lg font-display text-gray-900 mb-6">
            Build the Future of
            <span className="block text-delivery-green">Food Delivery</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our mission to revolutionize how people discover and enjoy great food. 
            We're looking for passionate individuals who want to make a real impact.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="delivery-card p-6 text-center hover:scale-105 transform transition-all duration-300"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Why Join Us */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-delivery-md font-display text-gray-900 mb-4">
              Why Work at Guhania?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We believe in creating an environment where everyone can do their best work
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="delivery-card p-6 text-center hover:scale-105 transform transition-all duration-300"
              >
                <div className={`w-16 h-16 ${benefit.bgColor} rounded-2xl mx-auto mb-4 flex items-center justify-center ${benefit.color}`}>
                  {benefit.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h4>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Perks List */}
          <div className="feature-highlight">
            <div className="relative z-10 text-center">
              <h4 className="text-xl font-bold text-gray-900 mb-6">Additional Perks</h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {perks.map((perk, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="text-lg">{perk.split(' ')[0]}</span>
                    <span className="text-gray-700 font-medium">{perk.substring(2)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-delivery-md font-display text-gray-900 mb-4">
              Open Positions
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find your next opportunity and help us shape the future of food delivery
            </p>
          </div>

          <div className="space-y-4">
            {jobs.map((job) => (
              <div 
                key={job.id}
                className={`delivery-card p-6 hover:scale-102 transform transition-all duration-300 ${
                  job.featured ? 'delivery-card-featured' : ''
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h4 className="text-xl font-bold text-gray-900">{job.title}</h4>
                      {job.featured && (
                        <span className="success-badge">Featured</span>
                      )}
                    </div>
                    
                    <p className="text-gray-600 mb-3">{job.description}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <TrendingUp className="w-4 h-4" />
                        <span>{job.level}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Award className="w-4 h-4" />
                        <span>{job.salary}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {job.requirements.slice(0, 3).map((req, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-4 lg:mt-0 lg:ml-6">
                    <button className="btn-delivery-primary px-6 py-3 rounded-xl font-semibold flex items-center space-x-2">
                      <span>Apply Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Culture Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-delivery-md font-display text-gray-900 mb-4">
              Our Culture
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're building more than just a company – we're creating a community
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="delivery-card p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-delivery-green/10 rounded-xl flex items-center justify-center text-delivery-green">
                    <Heart className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Customer Obsessed</h4>
                    <p className="text-gray-600">Every decision we make starts with our customers and restaurant partners in mind.</p>
                  </div>
                </div>
              </div>

              <div className="delivery-card p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-delivery-orange/10 rounded-xl flex items-center justify-center text-delivery-orange">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Team First</h4>
                    <p className="text-gray-600">We support each other, celebrate wins together, and learn from our mistakes.</p>
                  </div>
                </div>
              </div>

              <div className="delivery-card p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500">
                    <Code className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Innovation Driven</h4>
                    <p className="text-gray-600">We're always looking for better ways to solve problems and improve experiences.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="food-category-card h-96 flex items-center justify-center text-6xl">
              👥💼🚀
              <div className="absolute inset-0 bg-gradient-to-tr from-delivery-green/10 to-delivery-orange/10 rounded-2xl"></div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="feature-highlight max-w-4xl mx-auto">
            <div className="relative z-10">
              <h3 className="text-delivery-lg font-display text-gray-900 mb-4">
                Ready to Join Our Mission?
              </h3>
              <p className="text-gray-600 mb-8 text-lg">
                Don't see the perfect role? We're always looking for talented people who share our passion.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-delivery-primary px-8 py-4 rounded-xl text-lg font-semibold flex items-center justify-center space-x-2">
                  <Briefcase className="w-5 h-5" />
                  <span>View All Positions</span>
                </button>
                <button className="btn-delivery-outline px-8 py-4 rounded-xl text-lg font-semibold flex items-center justify-center space-x-2">
                  <Heart className="w-5 h-5" />
                  <span>Send Resume</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 