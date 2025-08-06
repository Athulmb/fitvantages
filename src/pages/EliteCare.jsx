import React from 'react'
import HeroSection from '../components/EliteCare/EliteHero';
import FitnessResultSection from '../components/EliteCare/FitnessResult';
import AccessSection from '../components/EliteCare/AccessSection';
import TestimonialSection from '../components/EliteCare/Testimoni';
import ElitePricingCards from '../components/EliteCare/ElitePricing';
import TransformCoaches from '../components/EliteCare/TransformCoach';
import ComparisonTable from '../components/EliteCare/ComparisonTable';

const EliteCare = () => {
  return (
    <>
    <HeroSection/>
    <FitnessResultSection/>
    <AccessSection/>
    <TestimonialSection/>
    <ElitePricingCards/>
    <TransformCoaches/>
    <ComparisonTable/>
    </>
  )
}

export default EliteCare;
