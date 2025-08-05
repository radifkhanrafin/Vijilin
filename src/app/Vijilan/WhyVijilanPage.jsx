import React from 'react';
import Sets from '@components/pages/Sets';
import Sponsor from '@components/pages/Sponsor';
import VijilanWhyBanner from '@components/pages/VijilanWhyBanner';
import JoinThree from '@components/pages/JoinThree';

const WhyVijilanPage = () => {
  return (
    <>
      <VijilanWhyBanner />
      <Sets />
      <Sponsor />
      <JoinThree
        title='Experience the Vijilan Difference Firsthand'
        highlightedText='Security'
        subtitle='Ready to see how our unique approach can transform your security posture or your MSP business? Schedule a call with one of our security strategists today'
        buttonText='SCHEDULE A STRATEGIC CALL'
        url={'/contact'}
      />
    </>
  );
};
  
export default WhyVijilanPage;
