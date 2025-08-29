import React from 'react';

const FitvantageClone = () => {
  return (
    <div className="min-h-screen bg-black text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-12">
            Fitvantage - The industry leader
          </h1>
          
          {/* Gym Images Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex flex-col items-center">
                <div className="relative w-full aspect-square mb-4 rounded-lg overflow-hidden">
                  <img 
                    src="/api/placeholder/300/300"
                    alt={`Fitness chain ${item}`}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay with logo */}
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto mb-2 bg-yellow-400 rounded-full flex items-center justify-center">
                        <span className="text-black font-bold text-xl">G</span>
                      </div>
                      <div className="w-8 h-8 mx-auto bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">$</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-sm font-semibold mb-2">India's largest fitness chain</h3>
                <p className="text-xs text-gray-400 text-center leading-relaxed">
                  Strong presence with 500+ gyms across 50+ cities
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Returns Section */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-12">
            The best returns in the industry
          </h2>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 md:gap-16">
            {/* First Return Box */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 mb-4 rounded-full border-2 border-yellow-600 flex items-center justify-center bg-yellow-600 bg-opacity-20">
                <div className="w-8 h-10 bg-yellow-600 rounded-sm flex items-center justify-center">
                  <span className="text-black font-bold text-xs">₹</span>
                </div>
              </div>
              <div className="text-xl font-bold mb-1">~ 5500</div>
              <div className="text-sm text-gray-400">Sq ft area</div>
            </div>
            
            {/* Second Return Box */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 mb-4 rounded-full border-2 border-yellow-600 flex items-center justify-center bg-yellow-600 bg-opacity-20">
                <div className="w-8 h-10 bg-yellow-600 rounded-sm flex items-center justify-center">
                  <span className="text-black font-bold text-xs">₹</span>
                </div>
              </div>
              <div className="text-xl font-bold mb-1">~ 5500</div>
              <div className="text-sm text-gray-400">Sq ft area</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FitvantageClone;