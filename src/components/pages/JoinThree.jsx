import React from 'react';
import { Link } from 'react-router-dom';
import imageTwo from '../../images/new-one.png';
import imageThree from '../../images/new-two.png';

const JoinThree = ({ title, highlightedText, subtitle, buttonText, url }) => {
  return (
    <section className='!relative z-10 overflow-x-clip py-15 !pb-0'>
      <img src={imageTwo} alt='Image' className='ne-bg' />
      <img src={imageThree} alt='Image' className='ne-bg-two' />
      <div className='container mx-auto px-[16px] md:px-6'>
        <div
          className='relative flex h-auto flex-col items-center justify-center overflow-hidden rounded-[24px] px-[16px] py-[60px]'
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
          <div className='join-mission-body absolute inset-0' />

          {/* Overlay for color consistency */}
          <div className='absolute inset-0' />

          <div className='relative z-10 text-center'>
            <h2 className='mb-4 text-lg font-bold text-white text-[24px] lg:text-[35px]'>
              {title} <span className='text-[#00AEEF]'>{highlightedText}</span>
            </h2>
            <p className='mx-auto mb-8 max-w-2xl text-[16px] leading-relaxed font-medium text-white'>
              {subtitle}
            </p>
            <Link to={url ? url : ''}>
              <button
                className='inline-flex items-center space-x-3 rounded-[8px] p-[16px] text-[16px] font-medium text-white transition hover:scale-105 md:px-[24px] md:py-[18px] md:text-lg'
                style={{
                  background: 'linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)',
                  boxShadow: '0 8px 32px rgba(255, 107, 53, 0.3)',
                }}
              >
                <span className='text-sm md:text-lg'>{buttonText}</span>
                <div className='flex h-6 w-6 items-center justify-center rounded-full bg-white/20'>
                  <svg
                    className='h-3 w-3 text-white'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={3}
                      d='M9 5l7 7-7 7'
                    />
                  </svg>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinThree;
