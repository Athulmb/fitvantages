import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import FlexHero from '../components/Flex/FlexHero';
import FeatureGrid from '../components/Flex/Features';
import CenterClassSlider from '../components/Flex/ClassesSection';
import CenterSlider from '../components/CenterSlider';
import ElitePricingCards from '../components/EliteCare/ElitePricing';
import PricingTable from '../components/Flex/PricingTable';
import FAQSection from '../components/Flex/FAQ';

const Flex = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#flex-hero') {
      document.getElementById('flex-hero')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <>
      <div id="flex-hero">
        <FlexHero />
      </div>
      <FeatureGrid />
      <CenterSlider />
      <CenterClassSlider />
      <PricingTable />
      <ElitePricingCards />
      <FAQSection />
    </>
  );
};

export default Flex;
