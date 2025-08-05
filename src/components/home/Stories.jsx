import React from 'react';
import mask from '../../images/ma-bg.png';
import { Link } from 'react-router-dom';

const Stories = () => {
  return (
    <section className='relative z-[9]'>
      <img src={mask} alt='Image' className='ma-bg' />
      <div className='container mx-auto px-[16px] md:px-6'>
        <div className='mb-12 text-center'>
          <h2 className='text-[30px] md:text-[40px] font-bold text-white'>
            Our Partners'{' '}
            <span className='' style={{ color: '#00AEEF' }}>
              Success Stories
            </span>
          </h2>
        </div>
        <div className='grid gap-6 px-2 sm:px-4 md:grid-cols-2 md:px-0 lg:grid-cols-3 lg:px-3 xl:px-0'>
          {[
            {
              title: 'MSP Achieves 30% MRR Growth with ThreatRemediate',
              description:
                'Discover how a Gold Tier MSP partner leveraged Vijilans flagship ThreatRemediate service to expand their security offerings, increase monthly recurring revenue, and cybersecurity to their clients.',
            },
            {
              title: 'MSSP Reduces SIEM Costs by 40% with LogScale Management',
              description:
                'Learn how an established MSSP modernized their SIEM infrastructure using Vijilans LogScale implementation and management services, achieving significant cost savings and improved performance.',
            },
            {
              title: 'Enterprise Achieves Full Security Visibility with Cribl Optimization',
              description:
                'See how a mid-market enterprise transformed their data chaos into actionable intelligence using Vijilans Cribl Professional Services, reducing ingestion costs while enhancing threat detection.',
            },
          ].map((story, index) => (
            <div
              key={index}
              className='relative rounded-[24px] bg-[#00AEEF3D] py-[40px] px-[30px] backdrop-blur-sm'
            >
              <div
                className='absolute inset-0 z-0 h-full rounded-[24px] p-[2px]'
                style={{
                  background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
                 linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }}
              />
              <h3 className='mb-3 text-center text-[24px] font-medium text-white'>{story.title}</h3>
              <p className='mb-4 text-center text-[15px] leading-relaxed text-white'>
                {story.description}
              </p>
              <div
                className='cursor-pointer text-center text-[15px] text-[#00AEEF]'
                style={{ color: '#00AEEF' }}
              >
                Read Full Story →
              </div>
            </div>
          ))}
        </div>
        <Link to={'/case-studies'} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className='mx-auto mt-5 flex items-center justify-center'>
            <button
              className='mt-[12px] inline-flex items-center space-x-3 rounded-[8px] px-[20px] py-[18px] text-lg font-medium text-white'
              style={{
                background: 'linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)',
              }}
            >
              <span className='uppercase'>View All Partner Success Stories</span>
              <div className='flex h-6 w-6 items-center justify-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <circle cx='12' cy='12' r='10'></circle>
                  <polyline points='12 16 16 12 12 8'></polyline>
                  <line x1='8' y1='12' x2='16' y2='12'></line>
                </svg>
              </div>
            </button>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Stories;
