'use client';

import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  ArrowRight,
  Play,
  Shield,
  Clock,
  Star
} from 'lucide-react';

export default function Hero() {
  const [searchLocation, setSearchLocation] = useState('');

  const featuredRestaurants = [
    { name: "Tony's Italian", cuisine: "Italian", rating: 4.8, time: "25-35", emoji: "🍝" },
    { name: "Dragon Palace", cuisine: "Chinese", rating: 4.9, time: "20-30", emoji: "🥡" },
    { name: "Burger Haven", cuisine: "American", rating: 4.7, time: "15-25", emoji: "🍔" },
    { name: "Sushi Masters", cuisine: "Japanese", rating: 4.9, time: "30-40", emoji: "🍣" }
  ];

  const stats = [
    { number: "500+", label: "Restaurants", emoji: "🍽️" },
    { number: "25 min", label: "Delivery", emoji: "⚡" },
    { number: "4.9★", label: "Rating", emoji: "⭐" },
    { number: "50K+", label: "Customers", emoji: "😊" }
  ];

  return (
    <section className="bg-white section-lg">
      <div className="container">
        
        {/* Main Hero */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="badge badge-green">
              #1 Food Delivery in Boston
            </div>

            {/* Title */}
            <div>
              <h1 className="hero-title text-primary mb-4">
                Craving something 
                <span className="text-green"> delicious?</span>
                <br />
                <span className="text-orange">We deliver!</span>
              </h1>
              
              <p className="hero-subtitle">
                Get your favorite meals delivered fresh and fast from the best local restaurants. 
                <strong className="text-green"> 500+ restaurants</strong> at your fingertips.
              </p>
            </div>

            {/* Search */}
            <div className="space-y-4">
              <div className="flex bg-light rounded-xl p-2 max-w-lg">
                <div className="flex items-center px-4">
                  <MapPin className="icon text-green" />
                </div>
                <input
                  type="text"
                  placeholder="Enter your delivery address..."
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  className="flex-1 bg-transparent px-4 py-3 text-base border-0 focus:outline-none"
                />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn btn-primary btn-lg">
                  <span>Find Restaurants</span>
                  <ArrowRight className="icon ml-2" />
                </button>
                
                <button className="btn btn-outline btn-lg">
                  <Play className="icon mr-2" />
                  <span>Watch Demo</span>
                </button>
              </div>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <Shield className="icon text-green" />
                <span className="text-sm font-medium text-secondary">Safe Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="icon text-orange" />
                <span className="text-sm font-medium text-secondary">30min or Less</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="icon text-orange" />
                <span className="text-sm font-medium text-secondary">Highly Rated</span>
              </div>
            </div>
          </div>

          {/* Right Content - Featured Restaurant */}
          <div className="card card-padding text-center">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-primary mb-2">Featured Today</h3>
              <p className="text-secondary">Handpicked favorites from top-rated restaurants</p>
            </div>

            <div className="bg-light rounded-xl p-6 mb-6">
              <div className="text-6xl mb-4">🍝</div>
              <h4 className="text-xl font-bold text-primary mb-2">Tony's Italian Kitchen</h4>
              <p className="text-secondary mb-4">Italian • $$</p>
              
              <div className="flex justify-center items-center gap-4 mb-4">
                <div className="badge badge-orange">
                  <Clock className="icon mr-1" />
                  25-35 min
                </div>
                <div className="badge badge-green">
                  <Star className="icon mr-1" />
                  4.8
                </div>
              </div>
              
              <button className="btn btn-primary w-full">
                View Menu
              </button>
            </div>

            <div className="grid grid-cols-4 gap-2">
              {featuredRestaurants.slice(1).map((restaurant, index) => (
                <div key={index} className="bg-light rounded-lg p-3 text-center">
                  <div className="text-2xl mb-1">{restaurant.emoji}</div>
                  <div className="text-xs font-medium text-muted">{restaurant.rating}★</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="card card-padding-sm text-center">
              <div className="text-4xl mb-3">{stat.emoji}</div>
              <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
              <div className="text-secondary font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="card card-padding text-center bg-light">
          <h3 className="text-3xl font-bold text-primary mb-4">
            Ready to satisfy your cravings?
          </h3>
          <p className="text-lg text-secondary mb-8 max-w-2xl mx-auto">
            Join thousands of happy customers and experience the future of food delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn btn-primary btn-lg">
              Start Ordering
            </button>
            <button className="btn btn-secondary btn-lg">
              Partner With Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 