'use client';

import { ArrowRight, Play, TrendingUp, Users, Star, Award } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProducts = () => {
    const element = document.querySelector('#products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-orange-25 min-h-screen flex items-center justify-center overflow-hidden pt-20 lg:pt-0">
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          
          <div className="inline-flex items-center bg-white rounded-full px-4 py-2 mb-6 shadow-md animate-slide-down">
            <Award className="h-5 w-5 text-yellow-500 mr-2" />
            <span className="text-sm font-semibold text-olive-700">Premium Restaurant Solutions</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold font-display text-olive-900 mb-6 animate-slide-up leading-tight">
            Elevate Your Restaurant with <span className="text-orange-500">Effortless</span> Technology
          </h1>

          <p className="text-lg md:text-xl text-olive-700 mb-12 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.3s'}}>
            From intuitive point-of-sale systems to seamless online ordering, we provide the tools you need to thrive in the digital age.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{animationDelay: '0.6s'}}>
            <button 
              onClick={scrollToProducts}
              className="bg-orange-500 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-orange-600 transition-transform transform hover:scale-105 duration-300 ease-in-out flex items-center space-x-2 text-lg"
            >
              <span>Our Solutions</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            
            <button 
              onClick={scrollToContact}
              className="bg-white text-olive-600 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-olive-50 transition-transform transform hover:scale-105 duration-300 ease-in-out flex items-center space-x-2 text-lg"
            >
              <Play className="h-5 w-5" />
              <span>Book a Demo</span>
            </button>
          </div>
          
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-left animate-fade-in" style={{animationDelay: '0.9s'}}>
            <div className="bg-white p-6 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
              <div className="flex items-center mb-2">
                <div className="p-3 bg-olive-100 rounded-full mr-4">
                  <Users className="h-6 w-6 text-olive-600" />
                </div>
                <div>
                  <p className="font-bold text-3xl text-olive-900">500+</p>
                  <p className="text-sm font-semibold text-olive-600">Restaurants Empowered</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
              <div className="flex items-center mb-2">
                <div className="p-3 bg-olive-100 rounded-full mr-4">
                  <TrendingUp className="h-6 w-6 text-olive-600" />
                </div>
                <div>
                  <p className="font-bold text-3xl text-olive-900">35%+</p>
                  <p className="text-sm font-semibold text-olive-600">Average Growth</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
              <div className="flex items-center mb-2">
                <div className="p-3 bg-olive-100 rounded-full mr-4">
                  <Star className="h-6 w-6 text-olive-600" />
                </div>
                <div>
                  <p className="font-bold text-3xl text-olive-900">4.9/5</p>
                  <p className="text-sm font-semibold text-olive-600">Customer Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-olive-300 rounded-full flex justify-center pt-2">
          <div className="w-2 h-4 bg-olive-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 