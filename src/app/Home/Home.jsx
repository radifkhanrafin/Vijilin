import React, { useEffect } from 'react';
import HeroSection from './HeroSection';
import TailoredSolutions from '@components/home/TailoredSolutions';
import ThreatLandscape from '@components/home/ThreatLandscape';
import VijilanAdvantage from '@components/home/VijilanAdvantage';
import Innovation from '@components/home/Innovation';
import Integration from '@components/home/Integration';
import Stories from '@components/home/Stories';
import DeepDive from '@components/home/DeepDive';
import JoinMissionSection from '@components/JoinMissionSection';

const Home = () => {
  useEffect(() => {
    document.body.classList.add('home-body');

    return () => {
      document.body.classList.remove('home-body');
    };
  }, []);

  return (
    <>
      <HeroSection />
      <TailoredSolutions />
      <ThreatLandscape />
      <VijilanAdvantage />
      <Innovation />
      <Integration />
      <Stories />
      <DeepDive />
      <JoinMissionSection
        title='Ready to Elevate Your'
        highlightedText='Security?'
        subtitle="Let's discuss your unique cybersecurity challenges and how Vijilan can provide the protection and peace of mind you need."
        buttonText='Get Your Free Security Consultation'
        url='contact'
      />
    </>
  );
};

export default Home;
