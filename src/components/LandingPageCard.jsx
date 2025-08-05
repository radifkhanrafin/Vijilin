import React from 'react';
import { FaCalendar, FaLink, FaUser } from 'react-icons/fa';

const LandingPageCard = ({ banner, author, title, heading, details, sales, date }) => {
  return (
    <div className='mx-auto max-w-md overflow-hidden'>
      {/* Hero Image Section */}
      <div className='order-2'>
        <img src={banner} alt='photo' fill className='h-[227px] w-full rounded-[24px]' />

        {/* MSP Growth Badge */}
        <div className='top-4 left-4'>
          <span className='mt-[16px] mb-2 inline-flex items-center rounded-[15px] bg-[#00AEEF3B] px-3 py-2 text-[10px] font-semibold text-[#00AEEF] opacity-80'>
            MSP GROWTH
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className='z-10 mt-[8px] space-y-2'>
        <h2 className='text-[24px] leading-tight font-medium text-white'>{title}</h2>

        <p className='!mt-[12px] text-[16px] leading-relaxed text-[#FFFFFF]'>{details}</p>

        {/* Meta Information */}
        <div className='!mt-[20px] flex items-center space-x-4 text-[16px] !text-[#00AEEF]'>
          <div className='flex items-center space-x-1 !text-[#00AEEF]'>
            {/* <FaUser className="w-4 h-4" /> */}
            <span className='!text-[#00AEEF]'>{author}</span>
          </div>
          <div className='flex items-center space-x-1 text-[16px] !text-[#00AEEF]'>
            {/* <FaCalendar className="w-4 h-4" /> */}
            <span className='!text-[#00AEEF]'>{date}</span>
          </div>
          <div className='flex cursor-pointer items-center space-x-1 text-[16px] !text-[#00AEEF] transition-colors'>
            <span className='!text-[#00AEEF]'>Read More...</span>
            {/* <FaLink className="w-3 h-3" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageCard;
