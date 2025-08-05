
import Partner from '@components/pages/Partner';
import QuoteTwo from '@components/pages/QuoteTwo';
import React, {useEffect} from 'react';

const BecomeAPartner = () => {
    useEffect(() => {
      document.body.classList.add('home-body');
  
      return () => {
        document.body.classList.remove('home-body');
      };
    }, []);
  return (
    <>
      <Partner />
      <QuoteTwo />
    </>
  );
};

export default BecomeAPartner;
