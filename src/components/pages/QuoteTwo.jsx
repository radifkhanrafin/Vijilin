import React from 'react';
import content from '../../images/background.png';
import contentTwo from '../../images/jc-t.png';

const QuoteTwo = () => {
  return (
    <section className='relative z-[1] pt-[120px] overflow-x-clip'>
        <img src={contentTwo} alt='Image' className='mas-bg' />
      <div className='container mx-auto px-[16px] md:px-6'>
        <div
          className='relative flex items-center justify-center overflow-hidden rounded-[24px] px-[16px] py-12 text-white'
          style={{
            background:
              'linear-gradient(90deg, #082135 0%, #082135 40%, #1a3a4f 60%, #1a3a4f 100%)',
          }}
        >
          {/* Left side solid background */}
          <div
            className='absolute inset-0'
            style={{
              background:
                'linear-gradient(90deg, #082135 0%, #082135 50%, rgba(23, 51, 71, 0.8) 70%, rgba(23, 51, 71, 0.4) 100%)',
            }}
          />

          {/* Right side pattern with smooth blend */}
          <div
            className='absolute inset-0'
            style={{
              backgroundImage: `url(${content})`,
              backgroundSize: 'contain',
              backgroundPosition: 'right center',
              backgroundRepeat: 'no-repeat',
              opacity: 0.8,
              maskImage:
                'linear-gradient(90deg, transparent 0%, transparent 30%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,1) 100%)',
              WebkitMaskImage:
                'linear-gradient(90deg, transparent 0%, transparent 30%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,1) 100%)',
            }}
          />

          {/* Overlay for color consistency */}
          <div
            className='absolute inset-0'
            style={{
              background:
                'linear-gradient(90deg, rgba(23, 51, 71, 0.9) 0%, rgba(23, 51, 71, 0.7) 40%, rgba(26, 58, 79, 0.5) 60%, rgba(26, 58, 79, 0.3) 100%)',
            }}
          />

          {/* Content */}
          <div className='relative z-10 container mx-auto p-3 text-center font-normal sm:p-0'>
            <p className='text-[16px] font-medium leading-relaxed italic'>
              The sign-up process was incredibly simple. We had access to the portal and were <br />
              building quotes for our clients the same day. It's the easiest and most transparent
              <br />
              partner program we've ever joined.
            </p>
            <p className='mt-[20px] text-sm font-medium !text-[#00AEEF] md:text-base'>
              — Mark T., New Bronze Tier MSP Partner
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteTwo;
