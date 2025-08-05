import React from 'react';
import bannerBg from '../../images/ban-bg.png';
import bannerBgTwo from '../../images/bg-grd.png';

const AboutBanner = () => {
  return (
    <section className='relative z-10 w-full pt-[180px] md:pt-[220px] pb-[120px] text-center overflow-x-clip hr-section'>
      <img src={bannerBg} alt='Image' className='ban-bg-two' />
      <img src={bannerBgTwo} alt='Image' className='bg-grd-two' />
      <div className='w-full px-6'>
        <div className='mx-auto max-w-7xl'>
          <div className='mx-auto max-w-4xl'>
            <h1 className='mb-6 text-3xl font-bold text-white md:text-5xl'>
              The People Behind Your Protection
            </h1>
            <p className='mb-12 text-[18px] leading-relaxed text-[#FFFFFF]'>
              We are a team of passionate cybersecurity experts, problem solvers, and client <br />{' '}
              advocates dedicated to one mission: keeping you and your customers safe and thriving.
            </p>
          </div>

          <div className='mx-auto aspect-video h-[260px] md:h-[490px] w-full max-w-[1160px] rounded-[16px] bg-[#D9D9D9]'></div>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
