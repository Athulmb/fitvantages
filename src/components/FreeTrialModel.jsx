import React from 'react';
import { X } from 'lucide-react';

const FreeTrialModal = ({ isOpen, onClose }) => {
  const sessions = [
    {
      title: 'Group Classes',
      desc: 'Lorem ipsum dolor sit amet consec',
      img: '/group.png',
    },
    {
      title: 'Gym Sessions',
      desc: 'Lorem ipsum dolor sit amet consec',
      img: '/gym.png',
    },
    {
      title: '7-DAY HOME TRIAL',
      desc: 'Lorem ipsum dolor sit amet consec',
      img: '/home.png',
    },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <div className="bg-[#1E1E1E] w-full max-w-lg rounded-xl p-8 text-white relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        <h2 className="text-center text-3xl font-bold mb-2">Take a free trial</h2>
        <p className="text-center text-base text-gray-400 mb-8">Lorem ipsum dolor sit amet consectetur</p>
        {sessions.map((session, index) => (
          <div key={index}>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-5">
                <img src={session.img} alt={session.title} className="w-16 h-16 rounded-full object-cover" />
                <div>
                  <p className="font-medium text-lg">{session.title}</p>
                  <p className="text-base text-gray-400">{session.desc}</p>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <button className="bg-green-400 text-black font-semibold text-sm px-4 py-2 rounded-full hover:bg-green-500 transition-colors mb-2">
                  Book Now
                </button>
                <span className="text-sm text-gray-400">03 Free Sessions</span>
              </div>
            </div>
            {index < sessions.length - 1 && <hr className="border-gray-700 mb-6" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FreeTrialModal;