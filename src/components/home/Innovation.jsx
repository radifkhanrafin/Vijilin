import React from 'react';
import { Star } from 'lucide-react';
import quote from '../../Assets/quote.png';
import aws from '../../Assets/aws.png';
import mask from '../../Assets/mask.png';
import corelight from '../../Assets/corelight.png';
import microsoft from '../../Assets/microsoft.png';
import crible from '../../Assets/crible.png';
import rowstrike from '../../Assets/rowstrike.png';
import fortinet from '../../Assets/fortinet.png';
import badge from '../../Assets/badge.png';
import avater from '../../Assets/avater.png';
import leftIcon from '../../Assets/leftIcon.png';
import rightIcon from '../../Assets/rightIcon.png';
import vendor from '../../Assets/vendor.png';
import { Link } from 'react-router-dom';


const Innovation = () => {
  return (
    <>
      <section>
        <div className="container mx-auto px-[16px] md:px-6">
            <div
        className='relative  overflow-hidden rounded-[24px]  py-16'
        style={{ background: 'linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)' }}
      >
        {/* Background decorative circles */}
        <div className='absolute top-0 z-10 h-[152px] w-[243px] opacity-40 mix-blend-soft-light'>
          <img src={quote} alt='' style={{ color: '#E6F7FD' }} />
        </div>

        {/* Left side solid background */}
        <div
          className='absolute inset-0'
          style={{
            background:
              
              'linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)'
          }}
        />

        {/* Right side pattern with smooth blend */}
        <div
          className='absolute inset-0'
          style={{
            backgroundImage: `url(${mask})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.8,
            maskImage:
              'linear-gradient(90deg, transparent 0%, transparent 30%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,1) 100%)',
            WebkitMaskImage:
              'linear-gradient(90deg, transparent 0%, transparent 30%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,1) 100%)',
          }}
        />


        <div className='relative mx-auto max-w-6xl px-8'>
          {/* Header Section */}
          <div className='space-y-6 py-10 text-center'>
            <div className='text-3xl font-bold text-white md:text-4xl lg:text-[40px]'>
              <h1
                className='mb-2 text-3xl font-bold text-white md:text-4xl lg:text-[40px]'
                style={{ color: '#00AEEF' }}
              >
                Trusted by Leaders,
              </h1>

              <h1 className='text-3xl font-bold text-white md:text-4xl lg:text-[40px]'>
                Powered by Innovation
              </h1>
            </div>

            {/* Company Logos */}
            <div className='flex flex-wrap items-center justify-center gap-6 md:gap-8'>
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

            <p className='mx-auto max-w-3xl text-[18px] text-white'>
              Our platform is built on leading technologies and integrates with hundreds of <br />{' '}
              security products and cloud services you already use.
            </p>
          </div>

          {/* Testimonial and Certification Section */}
          <div className='grid items-start gap-8 md:grid-cols-2'>
            {/* Testimonial */}
            <div className='mx-auto max-w-md'>
              <div className='flex flex-col text-center items-center space-y-5 md:!items-start md:!text-left'>
                <div className='gap-4'>
                  <div className='h-[52px] w-[52px] overflow-hidden rounded-full text-left'>
                    <img
                      src={avater}
                      alt='Customer testimonial'
                      width={52}
                      height={52}
                      className='h-full w-full object-cover'
                    />
                  </div>
                </div>

                <blockquote className='text-[15px] leading-relaxed text-white'>
                  "Vijilan has transformed our security posture and <br /> empowered our team to
                  focus on strategic growth <br /> while ensuring our clients are protected with{' '}
                  <br /> enterprise-grade cybersecurity."
                </blockquote>

                <div>
                  <div className='flex gap-1'>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className='h-2 w-2 fill-[#FFD300]'
                        style={{ color: '#FFD300' }}
                      />
                    ))}
                  </div>
                </div>

                <p className='text-[15px] text-[#00AEEF]' style={{ color: '#00AEEF' }}>
                  Leading MSP Partner
                </p>

                          <div className='md:mt-[80px]  flex gap-4'>
            <div className=''>
              <img
                src={leftIcon}
                alt=''
                className='flex h-[44px] w-[44px] items-center justify-center'
              />
            </div>
            <div className=''>
              <img
                src={rightIcon}
                alt=''
                className='flex h-[44px] w-[44px] items-center justify-center'
              />
            </div>
          </div>
              </div>
            </div>

            {/* Certification Badge */}
            <div className='flex justify-center'>
              <div className='relative min-h-[294px] space-y-3 rounded-[24px] bg-[#00AEEF3D] px-[24px] py-[50px] text-center backdrop-blur-sm'>
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
                <div className='mx-auto h-[100px] w-[100px]'>
                  <div className='text-xs font-bold text-white'>
                    <img src={badge} alt='' />
                  </div>
                </div>
                <h3 className='mb-2 text-[24px] font-medium text-white'>SOC 2 Type 2 Certified</h3>
                <p className='text-[15px] text-white'>
                  Independently audited for security, availability, processing <br />
                  integrity, confidentiality, and privacy.
                </p>
                
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}

          {/* vendor image */}
          <div className='pb-[60px] pt-[40px] md:pt-0'>
            <img src={vendor} alt='' />
          </div>
        </div>
      </div>
      <Link
        to={'/case-studies'}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className='mt-5 flex items-center justify-center'
      >
        <button
          className='mt-[12px] inline-flex items-center space-x-3 rounded-[8px] p-[18px] text-[16px] font-medium text-white md:py-[18px] md:px-[24px] md:text-lg'
          style={{
            background: 'linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)',
          }}
        >
          <span className='uppercase'>Read More Success Stories</span>
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
      </section>
    </>
  );
};

export default Innovation;
