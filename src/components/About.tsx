'use client';

import { useState, useEffect, useRef } from 'react';
import { Target, Users, Lightbulb, Award, TrendingUp, Shield, Clock, Globe } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const values = [
    {
      icon: Target,
      title: "Precision-Driven",
      description: "Every solution is crafted with meticulous attention to detail, ensuring optimal performance for your restaurant operations.",
      color: "from-orange-100 to-orange-200",
      delay: "0s"
    },
    {
      icon: Users,
      title: "Customer-Centric",
      description: "We prioritize your success above all else, building lasting partnerships that drive mutual growth and innovation.",
      color: "from-olive-100 to-olive-200",
      delay: "0.2s"
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "Constantly pushing boundaries with cutting-edge technology to keep your restaurant ahead of the competition.",
      color: "from-yellow-100 to-yellow-200",
      delay: "0.4s"
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "Built on a foundation of trust, our systems provide 99.9% uptime with enterprise-grade security.",
      color: "from-blue-100 to-blue-200",
      delay: "0.6s"
    }
  ];

  const achievements = [
    { icon: Award, value: "15+", label: "Years Experience", color: "text-orange-600" },
    { icon: TrendingUp, value: "500+", label: "Success Stories", color: "text-olive-600" },
    { icon: Clock, value: "24/7", label: "Support Available", color: "text-yellow-600" },
    { icon: Globe, value: "25+", label: "Countries Served", color: "text-blue-600" }
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

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-gradient-to-br from-white via-orange-25 to-olive-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
               backgroundSize: '60px 60px'
             }}>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className={`inline-block ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
            <span className="text-orange-600 font-semibold text-lg tracking-wide uppercase">About Guhania LLC</span>
          </div>
          <h2 className={`text-4xl md:text-6xl font-bold font-display text-olive-900 mt-4 mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
            Transforming Restaurants Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">Innovation</span>
          </h2>
          <p className={`text-lg text-olive-700 max-w-3xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{animationDelay: '0.4s'}}>
            We're not just a technology company – we're your strategic partner in revolutionizing the restaurant industry with intelligent solutions that drive growth and efficiency.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Story Section */}
          <div className={`space-y-8 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`} style={{animationDelay: '0.6s'}}>
            <div className="glass rounded-3xl p-8 card-hover">
              <h3 className="text-3xl font-bold text-olive-900 mb-6">Our Story</h3>
              <div className="space-y-4 text-olive-700">
                <p>
                  Founded with a vision to bridge the gap between traditional hospitality and modern technology, Guhania LLC has been at the forefront of restaurant innovation for over a decade.
                </p>
                <p>
                  What started as a small team of passionate technologists has grown into a comprehensive platform serving hundreds of restaurants worldwide, each with unique needs and ambitious goals.
                </p>
                <p>
                  Today, we continue to push boundaries, developing solutions that not only meet current market demands but anticipate future trends in the ever-evolving restaurant landscape.
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="glass rounded-3xl p-8 card-tilt bg-gradient-to-br from-orange-50 to-yellow-50">
              <h3 className="text-2xl font-bold text-olive-900 mb-4">Our Mission</h3>
              <p className="text-olive-700 text-lg">
                To empower restaurant owners with intelligent technology solutions that streamline operations, enhance customer experiences, and drive sustainable growth in an increasingly competitive market.
              </p>
            </div>
          </div>

          {/* Values Masonry Grid */}
          <div className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`} style={{animationDelay: '0.8s'}}>
            <div className="masonry-grid">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div 
                    key={index}
                    className={`masonry-item card-hover glass rounded-2xl p-6 bg-gradient-to-br ${value.color} animate-fade-in-up`}
                    style={{animationDelay: value.delay}}
                  >
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-white/80 rounded-full mr-4 shadow-lg">
                        <Icon className="h-6 w-6 text-olive-700" />
                      </div>
                      <h4 className="text-xl font-bold text-olive-900">{value.title}</h4>
                    </div>
                    <p className="text-olive-700">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{animationDelay: '1s'}}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-olive-900 mb-4">Our Impact</h3>
            <p className="text-lg text-olive-700">Numbers that speak to our commitment and success</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div 
                  key={index}
                  className="card-hover glass rounded-2xl p-6 text-center animate-scale-in"
                  style={{animationDelay: `${1.2 + index * 0.1}s`}}
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-white/80 rounded-full shadow-lg">
                      <Icon className={`h-8 w-8 ${achievement.color}`} />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="font-bold text-3xl text-olive-900">{achievement.value}</p>
                    <p className="text-sm font-semibold text-olive-600">{achievement.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{animationDelay: '1.6s'}}>
          <div className="glass rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-olive-900 mb-4">Ready to Transform Your Restaurant?</h3>
            <p className="text-olive-700 mb-6">
              Join hundreds of successful restaurants that have already revolutionized their operations with our innovative solutions.
            </p>
            <button className="btn-gradient text-white font-semibold px-8 py-4 rounded-full shadow-xl btn-magnetic">
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 