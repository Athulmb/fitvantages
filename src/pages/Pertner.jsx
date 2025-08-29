import React from 'react';

export default function FitVantageLanding() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
     

      {/* Hero Section */}
      <section className="text-center px-8 py-20">
        <h1 className="text-5xl font-bold mb-6 leading-tight">
          Take your brand where <span className="text-green-400">millions</span> are watching
        </h1>
        <p className="text-gray-400 text-lg mb-10 max-w-lg mx-auto">
          Join our team of professionals and help the world around to<br />
          #BeBetterEveryDay
        </p>
        <button className="bg-green-400 hover:bg-green-500 px-8 py-3 rounded-full text-black font-semibold text-sm uppercase tracking-wider">
          JOIN US NOW
        </button>
      </section>

      {/* Professionals Grid */}
      <section className="px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          {/* Top Row - 3 cards */}
          <div className="grid grid-cols-3 gap-6 mb-6">
            {/* Fitness Trainers */}
            <div className="relative group">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=face"
                alt="Fitness Trainer"
                className="w-full h-72 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl font-bold mb-2">Fitness Trainers</h3>
                <p className="text-gray-300 text-sm mb-4">Lorem Ipsum is simply dummy text</p>
                <button className="flex items-center space-x-2 bg-green-400 hover:bg-green-500 px-4 py-2 rounded-full text-black text-sm font-medium">
                  <span>Know more</span>
                  <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>

            {/* Yoga Trainers */}
            <div className="relative group">
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop&crop=face"
                alt="Yoga Trainer"
                className="w-full h-72 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl font-bold mb-2">Yoga Trainers</h3>
                <p className="text-gray-300 text-sm mb-4">Lorem Ipsum is simply dummy text</p>
                <button className="flex items-center space-x-2 bg-green-400 hover:bg-green-500 px-4 py-2 rounded-full text-black text-sm font-medium">
                  <span>Know more</span>
                  <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>

            {/* Therapists */}
            <div className="relative group">
              <img 
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=300&fit=crop&crop=face"
                alt="Therapist"
                className="w-full h-72 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl font-bold mb-2">Therapists</h3>
                <p className="text-gray-300 text-sm mb-4">Lorem Ipsum is simply dummy text</p>
                <button className="flex items-center space-x-2 bg-green-400 hover:bg-green-500 px-4 py-2 rounded-full text-black text-sm font-medium">
                  <span>Know more</span>
                  <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Middle Row - 3 cards */}
          <div className="grid grid-cols-3 gap-6 mb-6">
            {/* Nutritionists */}
            <div className="relative group">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=300&fit=crop&crop=face"
                alt="Nutritionist"
                className="w-full h-72 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl font-bold mb-2">Nutritionists</h3>
                <p className="text-gray-300 text-sm mb-4">Lorem Ipsum is simply dummy text</p>
                <button className="flex items-center space-x-2 bg-green-400 hover:bg-green-500 px-4 py-2 rounded-full text-black text-sm font-medium">
                  <span>Know more</span>
                  <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>

            {/* Doctors */}
            <div className="relative group">
              <img 
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=300&fit=crop&crop=face"
                alt="Doctor"
                className="w-full h-72 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl font-bold mb-2">Doctors</h3>
                <p className="text-gray-300 text-sm mb-4">Lorem Ipsum is simply dummy text</p>
                <button className="flex items-center space-x-2 bg-green-400 hover:bg-green-500 px-4 py-2 rounded-full text-black text-sm font-medium">
                  <span>Know more</span>
                  <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>

            {/* Psychiatrists */}
            <div className="relative group">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop&crop=face"
                alt="Psychiatrist"
                className="w-full h-72 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl font-bold mb-2">Psychiatrists</h3>
                <p className="text-gray-300 text-sm mb-4">Lorem Ipsum is simply dummy text</p>
                <button className="flex items-center space-x-2 bg-green-400 hover:bg-green-500 px-4 py-2 rounded-full text-black text-sm font-medium">
                  <span>Know more</span>
                  <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Row - 1 centered card */}
          <div className="flex justify-center">
            <div className="w-1/3">
              <div className="relative group">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop&crop=face"
                  alt="Physiotherapist"
                  className="w-full h-72 object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-2xl"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-2xl font-bold mb-2">Physiotherapists</h3>
                  <p className="text-gray-300 text-sm mb-4">Lorem Ipsum is simply dummy text</p>
                  <button className="flex items-center space-x-2 bg-green-400 hover:bg-green-500 px-4 py-2 rounded-full text-black text-sm font-medium">
                    <span>Know more</span>
                    <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}