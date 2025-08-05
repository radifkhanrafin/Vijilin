import React from 'react';
import GroupIcon from '../../images/Group.svg';
import GroupIcon2 from '../../images/Group (1).svg';

const TailoredSolutions = () => {
  return (
    <section className='pb-[120px]'>
      <div className='container mx-auto px-[16px] md:px-6'>
        <div className='mb-12 text-center'>
          <h1 className='mb-3 text-3xl font-bold md:text-[40px]' style={{ color: '#00AEEF' }}>
            Tailored Cybersecurity Solutions
          </h1>
          <h2 className='text-4xl font-bold text-white md:text-[40px]'>For Your Needs </h2>
        </div>

        {/* Cards Container */}
        <div className='grid gap-8 md:grid-cols-2'>
          <div className='relative rounded-[24px] bg-[#00AEEF3D] px-2 py-5 md:py-10'>
            <div
              className='absolute inset-0 z-0 rounded-[24px] p-[2px]'
              style={{
                background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8, 34, 53, 0) 50%),
                        linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8, 34, 53, 0) 66.77%)`,
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
              }}
            />
            <div className='mb-[30px] flex items-center justify-center'>
              <img src={GroupIcon} alt='' className='h-[144px] w-[136px]' />
            </div>
            <h1 className='text-center text-[24px] font-medium'>For MSPs, VARs & MSSPs</h1>
            <p className='mt-[30px] text-center text-[18px] md:px-5'>
              Elevate Your Cybersecurity Offerings. Partner with Vijilan to deliver enterprise-grade
              security, enhance your service portfolio, and drive profitable growth.
            </p>
            <div className='mx-auto mt-[30px] flex items-center justify-center'>
              <button
                className='rounded-[8px] bg-white p-[18px] text-[16px] font-medium md:py-[16px] md:px-[24px] md:text-[18px]'
                style={{ color: '#082235' }}
              >
                EMPOWER YOUR MSP/VAR/MSSP
              </button>
            </div>
          </div>

          <div className='relative rounded-[24px] bg-[#00AEEF3D] px-2 py-5 md:py-10'>
            <div
              className='absolute inset-0 z-0 rounded-[24px] p-[2px]'
              style={{
                background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8, 34, 53, 0) 50%),
                        linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8, 34, 53, 0) 66.77%)`,
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
              }}
            />
            <div className='mb-[32px] flex items-center justify-center'>
              <img src={GroupIcon2} alt='' className='h-[144px] w-[136px]' />
            </div>
            <h1 className='text-center text-[24px] font-medium'>
              For SMBs & Mid-Market Enterprises
            </h1>
            <p className='mt-[30px] text-center text-[18px] md:px-5'>
              Affordable, Expert Protection. Secure your business with our comprehensive managed
              security services, tailored to your size and industry needs.
            </p>
            <div className='mx-auto mt-[30px] flex items-center justify-center'>
              <button
                className='rounded-[8px] bg-white p-[18px] text-[16px] font-medium md:py-[16px] md:px-[24px] md:text-[18px]'
                style={{ color: '#082235' }}
              >
                SECURE YOUR BUSINESS
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TailoredSolutions;
