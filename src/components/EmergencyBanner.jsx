import React from 'react';
import { Link } from 'react-router-dom';

const EmergencyBanner = () => {
  return (
    <div className='mx-auto mt-4 w-11/12 lg:max-w-[1160px]'>
      <div
        className='flex flex-col items-center justify-center gap-4 rounded-[12px] px-[16px] py-[15px] backdrop-blur-3xl sm:flex-row'
        style={{
          background: 'linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)',
        }}
      >
        <span className='text-[16px] text-white sm:text-[18px]'>
          Under Attack or Suspect a Breach?
        </span>
        <Link to={'/contact'} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <button className='inline-block rounded-[8px] bg-white px-[15px] py-[17px] text-[13px] leading-0 font-medium !text-[#082235] !transition-all !duration-500 !ease-in-out hover:!bg-[#191624] hover:!text-white'>
            GET HELP NOW
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EmergencyBanner;
