import React from 'react';
import aws from '../../Assets/aws.png';
import corelight from '../../Assets/corelight.png';
import microsoft from '../../Assets/microsoft.png';
import crible from '../../Assets/crible.png';
import rowstrike from '../../Assets/rowstrike.png';
import fortinet from '../../Assets/fortinet.png';

import soc2 from '../../Assets/soc2.png';

const Sponsor = () => {
  return (
    <section className='pt-[120px] pb-16'>
      <div className='container mx-auto px-[16px] md:px-6'>
        <div className='space-y-6 text-center'>
          <h2 className='text-center text-2xl font-bold  text-white md:text-4xl lg:text-[40px]'>
            Built on an Elite{' '}
            <span className='!text-[#00AEEF]'>
              Technology <br /> Foundation
            </span>
            <br />
          </h2>

          {/* Company Logos */}
          <div className='flex flex-wrap items-center justify-center gap-6 md:gap-8 mt-[30px]'>
            {[
              { src: rowstrike },
              { src: fortinet },
              { src: corelight },
              { src: crible },
              { src: microsoft },
              { src: aws },
            ].map((item, idx) => (
              <div
                key={idx}
                className='flex h-[40px] w-fit items-center justify-center rounded-[8px] bg-[#00AEEF] px-[16px] py-[10px]'
              >
                <img src={item.src} alt='' className={item.height || 'h-[24px]'} />
              </div>
            ))}
          </div>
        </div>

        {/* Certification Badge */}
        <div
          className='relative mx-auto mt-[50px] max-w-2xl rounded-2xl px-5 py-[48px] text-center md:px-[32px]'
          style={{
            background: `linear-gradient(0deg, rgba(0, 0, 0, 0.33), rgba(0, 0, 0, 0.33)),
                    linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2))`,
          }}
        >
          <div
            className={`$ absolute inset-0 z-0 rounded-[16px] p-[1px]`}
            style={{
              background:
                'conic-gradient(from 180deg at 50% 50%, #FF98E2 0deg, #FFC876 35.77deg, #79FFF7 153.75deg, #9F53FF 258.75deg, #FF98E2 360deg)',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
            }}
          />
          {/* SOC 2 Badge */}
          <div className='relative mb-8'>
            <div className='mx-auto flex h-auto w-auto items-center justify-center rounded-full md:h-[192px] md:w-[192px]'>
              <img src={soc2} alt='' />
            </div>
            <div className='-mt-[130px] inline-block rounded-[8px] bg-[#082235] px-[40px] py-[18px] text-[24px] font-medium text-white'>
              Certified
            </div>
          </div>

          {/* Heading */}
          <h2 className='mb-6 text-[23px] leading-tight font-medium text-[#00AEEF]'>
            Independently Audited & Certified for Your Peace of Mind
          </h2>

          {/* Description */}
          <p className='mx-auto max-w-xl text-[16px] leading-relaxed'>
            Our commitment to security and operational excellence is validated by our SOC 2 Type 2
            certification. We provide audit-ready documentation and support for major compliance
            frameworks, including HIPAA, PCI DSS, GDPR, and CMMC.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sponsor;
