import React from 'react'
import BlogSlider from '../components/Blog/BlogSilder';
import HeroSection from '../components/Blog/HeroSection';
import TrendingTopics from '../components/Blog/TrendingTopic';
import NewsLetter from '../components/Blog/NewsLetter';
import Subscription from '../components/Blog/Subscription';



const Blog = () => {
  return (
    <div className='bg-[#010A04] min-h-screen pt-[24px] md:pt-[100px] px-4 pb-10 sm:px-8 md:px-16 lg:px-32 xl:px-[128px] relative overflow-hidden'>
      {/* Animated Blur Circles */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Circle 1 - Diagonal corner movement */}
        <div
          className="absolute w-32 h-32 bg-[#7FFA88] rounded-full opacity-20 blur-3xl"
          style={{
            animation: 'cornerMove1 15s linear infinite'
          }}
        />

        {/* Circle 2 - Left to right movement */}
        <div
          className="absolute w-28 h-30 bg-[#7FFA88] rounded-full opacity-15 blur-3xl"
          style={{
            animation: 'leftToRight2 18s linear infinite'
          }}
        />

        {/* Circle 3 - Top to bottom slow */}
        <div
          className="absolute w-36 h-36 bg-[#7FFA88] rounded-full opacity-10 blur-3xl"
          style={{
            animation: 'topToBottomSlow3 20s linear infinite'
          }}
        />

        {/* Circle 4 - Right to left movement */}
        <div
          className="absolute w-30 h-30 bg-[#7FFA88] rounded-full opacity-25 blur-3xl"
          style={{
            animation: 'rightToLeft4 16s linear infinite'
          }}
        />

        {/* Circle 5 - Bottom corner to top corner */}
        <div
          className="absolute w-24 h-24 bg-[#7FFA88] rounded-full opacity-30 blur-3xl"
          style={{
            animation: 'bottomToTop5 22s linear infinite'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <HeroSection />
        <BlogSlider />
        <NewsLetter />


        <Subscription />
        <TrendingTopics />
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
                @keyframes cornerMove1 {
                    0% { 
                        top: -5%; 
                        left: -5%; 
                        opacity: 0;
                        transform: scale(0.8);
                    }
                    25% { 
                        top: 25%; 
                        left: 25%; 
                        opacity: 0.2;
                        transform: scale(1.1);
                    }
                    50% { 
                        top: 50%; 
                        left: 50%; 
                        opacity: 0.2;
                        transform: scale(0.9);
                    }
                    75% { 
                        top: 75%; 
                        left: 75%; 
                        opacity: 0.15;
                        transform: scale(1.05);
                    }
                    100% { 
                        top: 105%; 
                        left: 105%; 
                        opacity: 0;
                        transform: scale(0.8);
                    }
                }
                
                @keyframes leftToRight2 {
                    0% { 
                        top: 20%; 
                        left: -10%; 
                        opacity: 0;
                        transform: scale(0.7);
                    }
                    25% { 
                        top: 25%; 
                        left: 25%; 
                        opacity: 0.15;
                        transform: scale(1.2);
                    }
                    50% { 
                        top: 30%; 
                        left: 50%; 
                        opacity: 0.15;
                        transform: scale(0.9);
                    }
                    75% { 
                        top: 35%; 
                        left: 75%; 
                        opacity: 0.1;
                        transform: scale(1.1);
                    }
                    100% { 
                        top: 40%; 
                        left: 110%; 
                        opacity: 0;
                        transform: scale(0.7);
                    }
                }
                
                @keyframes topToBottomSlow3 {
                    0% { 
                        top: -10%; 
                        left: 45%; 
                        opacity: 0;
                        transform: scale(0.6);
                    }
                    20% { 
                        top: 20%; 
                        left: 47%; 
                        opacity: 0.1;
                        transform: scale(1.3);
                    }
                    40% { 
                        top: 40%; 
                        left: 43%; 
                        opacity: 0.1;
                        transform: scale(0.8);
                    }
                    60% { 
                        top: 60%; 
                        left: 49%; 
                        opacity: 0.08;
                        transform: scale(1.1);
                    }
                    80% { 
                        top: 80%; 
                        left: 46%; 
                        opacity: 0.05;
                        transform: scale(0.9);
                    }
                    100% { 
                        top: 110%; 
                        left: 45%; 
                        opacity: 0;
                        transform: scale(0.6);
                    }
                }
                
                @keyframes rightToLeft4 {
                    0% { 
                        top: 60%; 
                        left: 110%; 
                        opacity: 0;
                        transform: scale(0.9);
                    }
                    25% { 
                        top: 55%; 
                        left: 75%; 
                        opacity: 0.25;
                        transform: scale(1.15);
                    }
                    50% { 
                        top: 50%; 
                        left: 50%; 
                        opacity: 0.25;
                        transform: scale(0.85);
                    }
                    75% { 
                        top: 45%; 
                        left: 25%; 
                        opacity: 0.15;
                        transform: scale(1.2);
                    }
                    100% { 
                        top: 40%; 
                        left: -10%; 
                        opacity: 0;
                        transform: scale(0.9);
                    }
                }
                
                @keyframes bottomToTop5 {
                    0% { 
                        top: 105%; 
                        left: -5%; 
                        opacity: 0;
                        transform: scale(0.8);
                    }
                    20% { 
                        top: 80%; 
                        left: 15%; 
                        opacity: 0.3;
                        transform: scale(1.3);
                    }
                    40% { 
                        top: 60%; 
                        left: 35%; 
                        opacity: 0.3;
                        transform: scale(0.9);
                    }
                    60% { 
                        top: 40%; 
                        left: 55%; 
                        opacity: 0.25;
                        transform: scale(1.1);
                    }
                    80% { 
                        top: 20%; 
                        left: 75%; 
                        opacity: 0.15;
                        transform: scale(0.95);
                    }
                    100% { 
                        top: -5%; 
                        left: 105%; 
                        opacity: 0;
                        transform: scale(0.8);
                    }
                }
            `}</style>
    </div>
  )
}

export default Blog;