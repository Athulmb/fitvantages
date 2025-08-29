import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const FitnessTrainerPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Back Button */}
      <div className="p-6">
        <button className="flex items-center text-gray-400 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          <span className="text-sm">Back</span>
        </button>
      </div>

      <div className="px-6 pb-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Section */}
          <div className="relative">
            {/* Dark card background */}
            <div className="bg-gray-800 rounded-3xl p-8 max-w-md">
              {/* Hero Text */}
              <div className="text-center mb-8">
                <h1 className="text-xl font-medium leading-tight text-white">
                  Make an impact on<br />
                  world with Fitvantage
                </h1>
              </div>

              {/* Trainer Image */}
              <div className="flex justify-center">
                <img
                  src="https://images.unsplash.com/photo-1605296867424-35fc25c9212a?w=300&h=400&fit=crop&crop=center"
                  alt="Muscular fitness trainer with dumbbells"
                  className="w-48 h-64 object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-10 pt-4">
            {/* Header */}
            <div>
              <h2 className="text-4xl font-bold mb-4 text-white">Fitness Trainer</h2>
              <p className="text-gray-300 text-base leading-relaxed max-w-lg">
                Passionate about helping people achieve their fitness goals? Keen about creating fun yet
                challenging strength & endurance workouts? Then this one's for you!
              </p>
            </div>

            {/* Working with us section */}
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-white">Working with us is easy</h3>
              
              <div className="space-y-6">
                {/* Feature 1 */}
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gray-800 rounded-xl border border-gray-700 flex-shrink-0"></div>
                  <div>
                    <p className="text-white text-sm">Work from where you are, when you can</p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gray-800 rounded-xl border border-gray-700 flex-shrink-0"></div>
                  <div>
                    <p className="text-white text-sm">Connect with millions, digitally</p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gray-800 rounded-xl border border-gray-700 flex-shrink-0"></div>
                  <div>
                    <p className="text-white text-sm">Get paid for all your sessions, regularly and on time</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Partners Speak Section */}
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-white">Partners Speak</h3>
              
              {/* Testimonial Card */}
              <div className="bg-gray-800 rounded-2xl p-6">
                <div className="flex space-x-4">
                  <div className="flex-shrink-0 relative">
                    <img
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=center"
                      alt="Lenora Fernandez"
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-gray-800 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      <span className="font-semibold text-white">Lorem Ipsum is simply dummy text</span> of the printing and typesetting 
                      industry. Lorem Ipsum has been the industry's standard dummy 
                      text ever since the 1500s, when an unknown printer took a galley 
                      of type and scrambled it to make a type specimen book. It has 
                      survived not only five centuries, but also the leap into electronic 
                      type containing Lorem Ipsum passages, and more recently
                    </p>
                    
                    <div>
                      <h4 className="font-semibold text-white text-base">Lenora Fernandez</h4>
                      <p className="text-gray-400 text-sm">Therapist</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-center space-x-3 pt-2">
                <button className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition-colors">
                  <ArrowLeft className="w-4 h-4 text-gray-300" />
                </button>
                <button className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition-colors">
                  <ArrowRight className="w-4 h-4 text-gray-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FitnessTrainerPage;