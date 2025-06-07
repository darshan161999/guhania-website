'use client';

import { ArrowRight, Play, TrendingUp, Users, Star, Zap, Shield, Swords } from 'lucide-react';

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
    <section id="home" className="relative bg-shadow-900 min-h-screen flex items-center justify-center overflow-hidden pt-20 lg:pt-0">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-shadow-900 via-shadow-800 to-shadow-700">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-t from-shadow-900/90 to-transparent"></div>
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center max-w-6xl mx-auto">
          
          {/* Level Badge */}
          <div className="inline-flex items-center level-badge rounded-full px-6 py-3 mb-8 animate-level-up">
            <Shield className="h-6 w-6 mr-3 animate-shadow-pulse" />
            <span className="text-lg font-gaming font-bold">LEVEL ∞ ELITE SOLUTIONS</span>
            <Zap className="h-6 w-6 ml-3 animate-shadow-pulse" />
          </div>

          {/* Main Title with Glow Effect */}
          <h1 className="text-6xl md:text-8xl font-bold font-display text-shadow-50 mb-8 animate-shadow-rise leading-tight">
            <span className="text-glow">SHADOW</span>{' '}
            <span className="text-power animate-mana-flow bg-clip-text">MONARCH</span>{' '}
            <span className="text-glow">SOLUTIONS</span>
          </h1>

          <p className="text-xl md:text-2xl text-shadow-200 mb-12 max-w-4xl mx-auto animate-status-effect font-display" style={{animationDelay: '0.3s'}}>
            Ascend beyond ordinary business solutions. Unlock your restaurant&apos;s true potential with our legendary-tier technology systems.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-status-effect mb-16" style={{animationDelay: '0.6s'}}>
            <button 
              onClick={scrollToProducts}
              className="glow-button font-gaming px-10 py-4 rounded-full text-xl flex items-center space-x-3 group"
            >
              <Swords className="h-6 w-6 group-hover:rotate-12 transition-transform" />
              <span>ENTER DUNGEON</span>
              <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button 
              onClick={scrollToContact}
              className="power-card font-gaming px-10 py-4 rounded-full text-xl text-shadow-100 flex items-center space-x-3 group hover:text-white transition-colors"
            >
              <Play className="h-6 w-6 group-hover:scale-110 transition-transform" />
              <span>REQUEST GUILD INVITE</span>
            </button>
          </div>
          
          {/* Stats Cards - Solo Leveling Style */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left animate-status-effect" style={{animationDelay: '0.9s'}}>
            
            {/* Restaurants Conquered */}
            <div className="shadow-card p-8 rounded-2xl group">
              <div className="flex items-center justify-between mb-4">
                <div className="p-4 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl border border-purple-500/30">
                  <Users className="h-8 w-8 text-purple-400" />
                </div>
                <div className="level-badge px-3 py-1 rounded-lg text-sm">S-RANK</div>
              </div>
              <div className="mb-4">
                <p className="font-gaming font-bold text-4xl text-shadow-50 mb-2">500+</p>
                <p className="text-lg font-display text-shadow-300">Restaurants Conquered</p>
              </div>
              {/* XP Bar */}
              <div className="stat-bar rounded-full h-2 mb-2">
                <div className="stat-fill h-full rounded-full" style={{width: '85%'}}></div>
              </div>
              <p className="text-sm text-shadow-400 font-gaming">EXP: 850/1000</p>
            </div>

            {/* Power Level */}
            <div className="shadow-card p-8 rounded-2xl group">
              <div className="flex items-center justify-between mb-4">
                <div className="p-4 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl border border-blue-500/30">
                  <TrendingUp className="h-8 w-8 text-blue-400" />
                </div>
                <div className="level-badge px-3 py-1 rounded-lg text-sm">SSS-RANK</div>
              </div>
              <div className="mb-4">
                <p className="font-gaming font-bold text-4xl text-shadow-50 mb-2">35%+</p>
                <p className="text-lg font-display text-shadow-300">Power Level Boost</p>
              </div>
              {/* Mana Bar */}
              <div className="stat-bar rounded-full h-2 mb-2">
                <div className="stat-fill h-full rounded-full animate-mana-flow" style={{width: '90%'}}></div>
              </div>
              <p className="text-sm text-shadow-400 font-gaming">MANA: 900/1000</p>
            </div>

            {/* Guild Rating */}
            <div className="shadow-card p-8 rounded-2xl group">
              <div className="flex items-center justify-between mb-4">
                <div className="p-4 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-xl border border-yellow-500/30">
                  <Star className="h-8 w-8 text-yellow-400" />
                </div>
                <div className="level-badge px-3 py-1 rounded-lg text-sm">LEGEND</div>
              </div>
              <div className="mb-4">
                <p className="font-gaming font-bold text-4xl text-shadow-50 mb-2">4.9/5</p>
                <p className="text-lg font-display text-shadow-300">Guild Rating</p>
              </div>
              {/* Health Bar */}
              <div className="stat-bar rounded-full h-2 mb-2">
                <div className="stat-fill h-full rounded-full" style={{width: '98%'}}></div>
              </div>
              <p className="text-sm text-shadow-400 font-gaming">HP: 980/1000</p>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
            <div className="glass-shadow w-12 h-20 rounded-full flex justify-center pt-3 border border-purple-500/30">
              <div className="w-3 h-6 bg-gradient-to-b from-purple-400 to-blue-400 rounded-full animate-shadow-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-float opacity-60" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-float opacity-40" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-cyan-400 rounded-full animate-float opacity-50" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-purple-300 rounded-full animate-float opacity-30" style={{animationDelay: '1.5s'}}></div>
      </div>
    </section>
  );
};

export default Hero; 