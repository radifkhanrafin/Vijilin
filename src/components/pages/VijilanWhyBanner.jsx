import React from 'react';
import happyMan from "../../Assets/happyMan.png";
import bannerBg from '../../images/ban-bg.png';
import bannerBgTwo from '../../images/bg-grd.png';

const VijilanWhyBanner = () => {
  return (
    <section className='relative z-[9] pt-[180px] md:pt-[220px] pb-[120px]'>
              <img src={bannerBg} alt='Image' className='ban-bg-two' />
              <img src={bannerBgTwo} alt='Image' className='bg-grd-two' />
      <div className='container mx-auto px-[16px] md:px-6'>
        <div className='grid grid-cols-1 items-center justify-center gap-12 lg:grid-cols-2'>
          {/* Left Content */}
          <div className='space-y-6 text-center lg:!text-start mx-auto max-w-[500px] lg:max-w-full'>
            <h1 className='text-[30px] sm:text-4xl leading-[1.4] font-bold lg:text-[40px]'>
              <span className='!text-[#00AEEF]'>The Vijilan Difference: </span>
              
              <span className='text-white'>
                Expertise, Technology,
                
                and a True Partnership
              </span>
            </h1>

            <p className='text-lg leading-relaxed text-white'>
              We are not just another security vendor. We are an integrated security partner,
              combining an expert-led 24/7 SOC with an AI-driven platform to deliver unparalleled
              protection and value for your business and your clients.
            </p>
          </div>

          {/* Right Content - Profile */}
          <div className='flex flex-col items-center space-y-4 lg:items-end'>
            <div className='relative'>
              <img
                src={happyMan}
                alt='Kevin Nejad'
                className='h-[342px] w-[342px] rounded-full object-cover'
              />
            </div>

            <div className=''>
              <div
                className='relative flex items-center justify-between gap-10 rounded-[8px] px-[16px] py-[14px]'
                style={{
                  background: `linear-gradient(0deg, rgba(0, 0, 0, 0.33), rgba(0, 0, 0, 0.33)), linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2))`,
                }}
              >
                <div
                  className={`$ absolute inset-0 z-0 rounded-[8px] p-[1px]`}
                  style={{
                    background:
                      'conic-gradient(from 180deg at 50% 50%, #FF98E2 0deg, #FFC876 35.77deg, #79FFF7 153.75deg, #9F53FF 258.75deg, #FF98E2 360deg)',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                />
                <h3 className='text-[20px] font-medium text-white'>Kevin Nejad</h3>
                <p className='text-[14px] text-[#00AEEF]'>Founder & CEO</p>
              </div>
              <p className='mt-2 text-center text-sm'>Leading Vijilan's Mission</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VijilanWhyBanner;
