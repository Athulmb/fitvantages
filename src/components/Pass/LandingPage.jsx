import React, { useState } from 'react';

export default function GymLandingPage() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert('Thank you for subscribing!');
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-green-500 to-white">
      {/* Main Hero Section */}
      <div className="container mx-auto px-8 py-8 lg:py-16 ">
        <div className="bg-transparent overflow-hidden ">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Content */}
            <div className="p-8 lg:p-12 xl:p-16 flex flex-col justify-center">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
                Starting a new gym?
              </h1>
              <p className="text-white/90 text-base lg:text-lg mb-8 leading-relaxed max-w-md">
                Partner with cult.fit and get that competitive advantage from our expertise on best practices, 
                equipment vendors, training academy and marketing machinery
              </p>
              <button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-fit uppercase tracking-wide">
                Contact Us
              </button>
            </div>
            
            {/* Right Image */}
            <div className="relative h-64 lg:h-auto min-h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 to-black/60"></div>
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Man working out with cable machine"
                className="w-full h-full object-cover"
              />
           
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-gray-200 via-green-200 to-green-300 py-16 lg:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Sign up for our newsletter
          </h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto text-lg">
            Stay on top of all news and updates regarding our franchises and outpass programme
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full sm:flex-1 px-6 py-3 rounded-full bg-gray-800 text-white placeholder-gray-400 border-none focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
            />
            <button
              onClick={handleSubscribe}
              className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg uppercase tracking-wide"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="fixed top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="fixed bottom-10 right-10 w-32 h-32 bg-green-400/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="fixed top-1/2 left-1/4 w-16 h-16 bg-blue-400/15 rounded-full blur-lg animate-pulse"></div>
    </div>
  );
}