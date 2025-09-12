import React from "react";
import HeroSection from "../components/Hero";
import ServiceCarousel from "../components/ServiceCarousel";
import ProgramCarousel from "../components/ProgramCarousel";
import CenterSlider from "../components/CenterSlider";
import WorkoutFormat from "../components/WorkoutFormat";
import SportsFormat from "../components/SportsFormat";
import FitvantagePass from "../components/pass";
import ReviewSection from "../components/ReviewSection";
import { User } from "lucide-react";
import UserStoryCarousel from "../components/UserStory";
import PricingPlan from "../components/Services/PricingPlan";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ServiceCarousel />
      <ProgramCarousel />
       <FitvantagePass />
      <CenterSlider/> 
       <WorkoutFormat /> 
       <SportsFormat/> 
       <UserStoryCarousel/>
       <ReviewSection/>
       
      <PricingPlan/>

    </>
  );
};

export default Home;
