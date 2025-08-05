import React from 'react';
import image from '../../images/thread-bg.png';
import imageTwo from '../../images/thr-bg.png';
import { Link } from 'react-router-dom';

const ThreatLandscape = () => {
  return (
    <section className='relative'>
            <img src={imageTwo} alt="Image" className='trd-bg' />

        <div className='container relative mx-auto px-[16px] md:px-6'>
      <div className='relative mx-auto overflow-hidden rounded-[24px] sm:container sm:px-6'>
        {/* Background Image */}
        <div
          className='absolute inset-0 z-0 bg-cover bg-center bg-no-repeat'
          style={{
            backgroundImage: `url(${image})`,
          }}
        ></div>

        <div className='relative z-20 container mx-auto min-h-[593px] rounded-[24px] px-6 py-16'>
          <div className='grid gap-12 lg:grid-cols-2'>
            <div className='lg:pt-[30px]'>
              <h2 className='mb-6 text-[24px] font-bold text-white leading-[1.4] md:text-5xl'>
                The Evolving Threat
                Landscape Demands
                a New Defense
              </h2>
              <Link to={'contact'} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <button
                  className='mt-[20px] inline-flex items-center space-x-3 rounded-[8px] p-[18px] text-lg font-medium text-white md:p-[24px]'
                  style={{
                    background: 'linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)',
                  }}
                >
                  <span>GET STARTED FREE</span>
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
              </Link>
            </div>
            <div className='relative min-h-[444] space-y-4 overflow-hidden rounded-[24px] bg-[#00AEEF3D] p-[24px] text-[18px] leading-relaxed text-white xl:min-w-[490px]'>
              <div
                className='absolute inset-0 z-0 h-full rounded-[24px] p-[1px]'
                style={{
                  background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
                 linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }}
              />
              <p>
                Modern cyber threats are more sophisticated and faster than ever. Adversaries
                execute complex cross-domain attacks, exploiting vulnerabilities across endpoints,
                identities, and cloud environments simultaneously. A staggering 75% of attacks are
                now malware-free, often leveraging stolen credentials to bypass traditional
                defenses. Siloed security tools can't keep up, leaving your organization exposed.
              </p>

              <p>
                <span className='' style={{ color: '#00AEEF' }}>
                  Vijilan's Unified Security Platform
                </span>{' '}
                – powered by industry leaders like CrowdStrike, Fortinet, Corelight, Cribl, and an
                extensive integration ecosystem – combined with our 24/7 Expert Services, provides
                the comprehensive answer.
              </p>
            </div>
          </div>
        </div>
      </div>
        </div>
    </section>
  );
};

export default ThreatLandscape;
