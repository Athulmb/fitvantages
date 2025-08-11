import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import FitVantagePlay from '../components/Play/PlayHero';
import FeatureGrid from '../components/Flex/Features';
import CenterSlider from '../components/CenterSlider';
import ElitePricingCards from '../components/EliteCare/ElitePricing';
import RatingBanner from '../components/Play/RatingBanner';
import PricingTable from '../components/Flex/PricingTable';
import SportsCards from '../components/Play/SportsCard';

const Play = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#play-hero') {
      document.getElementById('play-hero')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <>
      <div id="play-hero">
        <FitVantagePlay />
      </div>
      <FeatureGrid />
      <CenterSlider />
<SportsCards/>
      <ElitePricingCards />
      <RatingBanner />
    </>
  );
};

export default Play;
