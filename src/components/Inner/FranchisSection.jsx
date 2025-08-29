import React from 'react';

export default function FitvantageSection() {
  return (
    <section className="bg-black text-white min-h-screen flex items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                alt="Person exercising in modern gym" 
                className="w-full h-64 sm:h-80 lg:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-8 lg:mb-12">
                Why Franchise with Fitvantage?
              </h1>
            </div>

            <div className="space-y-8">
              {/* Feature 1 */}
              <div className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-semibold">
                  The vantage sales engine
                </h2>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  Robust demand generation and best-in-class marketing.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-semibold">
                  The vantage sales engine
                </h2>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  Robust demand generation and best-in-class marketing.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-semibold">
                  The vantage sales engine
                </h2>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  Robust demand generation and best-in-class marketing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}