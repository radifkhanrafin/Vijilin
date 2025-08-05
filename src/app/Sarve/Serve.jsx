import { StrategicData, weServe } from '@app/Constant/Constant';
import CardContent from '@components/CardContent';
import React, {useEffect} from 'react';
import play from '../../Assets/play.png';
import backgroundPattern from '../../Assets/Background pattern.png';
import { Link } from 'react-router-dom';
import bannerBg from '../../images/ban-bg.png';
import bannerBgTwo from '../../images/bg-grd.png';
import serveBgTwo from '../../images/serve-bg.png';
import serveBgThree from '../../images/serve-bg-three.png';
import serveBgFour from '../../images/serve-bc.png';

const Serve = () => {

    useEffect(() => {
      document.body.classList.add('home-body');
  
      return () => {
        document.body.classList.remove('home-body');
      };
    }, []);


  return (
    <>
      <section className='hr-section relative z-[1] overflow-x-clip pt-[320px] sm:pt-[290px]'>
        <img src={bannerBg} alt='Image' className='ban-bg-two' />
        <img src={bannerBgTwo} alt='Image' className='bg-grd-two' />
        <div className='container mx-auto px-[16px] md:px-6'>
          <div className='space-y-3 pb-[120px]'>
            <h1 className='text-center text-3xl leading-[1.4] font-bold md:text-5xl'>
              {' '}
              Tailored Cybersecurity for Every <br /> Organization
            </h1>
            <p className='my-5 text-center text-[22px] font-medium'>
              {' '}
              Whether you're an MSP looking to grow your security practice or an enterprise
              defending <br /> against advanced threats, Vijilan has a solution built for your
              specific needs. this is Serve system{' '}
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className='container mx-auto px-[16px] md:px-6'>
          <div>
            <h1 className='mb-10 text-center text-[30px] font-bold capitalize lg:text-[40px]'>
              A message from our ceo
            </h1>
            <div className='grid grid-cols-1 gap-10 md:grid-cols-2'>
              <div className='relative col-span-1 h-[500px] rounded-[26px] bg-[#00AEEF3D]'>
                <div
                  className='absolute inset-0 z-0 rounded-[26px] p-[2px]'
                  style={{
                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
                             linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                />
                <div className='flex h-full w-full items-center justify-center'>
                  <img src={play} alt='' className='h-[150px] w-[150px]' />
                </div>
              </div>

              <div className='col-span-1 flex flex-col items-center justify-center'>
                <p className='mb-3 text-[19px]'>
                  We founded Vijilan on a simple principle: to provide clarity and control in a
                  complex digital world. We are deeply committed to the success of our partners and
                  the security of our clients. This page is dedicated to showing you exactly how we
                  tailor our expertise to meet your unique challenges.
                </p>
                <p className='mt-[40px] self-start text-[14px] font-medium !text-[#00AEEF]'>
                  -Kevin Najed, Founder and CEO
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='relative z-[1] overflow-x-clip pt-[120px]'>
        <img src={serveBgTwo} alt='Image' className='serve-bg' />
        <div className='container mx-auto px-[16px] md:px-6'>
          <div className='grid grid-cols-1 gap-10 items-start lg:grid-cols-2 slr'>
            {weServe.map((Serve, index) => (
              <CardContent
              key={index}
                index={index + 2}
                icon={Serve.icon}
                title={Serve.audience}
                description={Serve.description}
                cardFooter={Serve.action}
                className={Serve.className}
              />
            ))}
          </div>
        </div>
      </section>
      <section className='relative z-[1] overflow-x-clip pt-[120px]'>
        <img src={serveBgThree} alt='Image' className='serve-bg-two' />
        <div className='container mx-auto px-[16px] md:px-6'>
          <div className=''>
            <h1 className='mb-10 text-center text-[30px] font-bold lg:text-[40px]'>
              Strategic Resources for your Role
            </h1>
            <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
              {StrategicData.map((data, index) => (
                <CardContent head={data.title} key={index} sub={data.description} grdBtn={data.action} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className='relative z-[1] pt-[120px] pb-[120px]'>
        <img src={serveBgFour} alt='Image' className='serve-bc' />
        <div className='container mx-auto px-[16px] md:px-6'>
          <div
            className='relative flex px-[24px] py-[60px] min-h-[304px] items-center justify-center overflow-hidden rounded-[24px]'
            style={{
              background: 'linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)',
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
                backgroundImage: `url(${backgroundPattern})`,
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

            <div className='relative z-10 space-y-5 text-center'>
              <h2 className='text-2xl font-bold text-white md:text-[40px]'>
                Not Sure Where to Start?
              </h2>
              <p className='mx-auto max-w-2xl text-[16px] leading-relaxed font-medium text-white'>
                Let's discuss your unique cybersecurity challenges and how Vijilan can provide the
                protection and peace of mind you need to focus on growing your business.
              </p>
              <Link to={'/contact'} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <button
                  className='inline-flex items-center space-x-3 rounded-[8px] p-[20px] text-lg font-medium text-white transition hover:scale-105'
                  style={{
                    background: 'linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)',
                    boxShadow: '0 8px 32px rgba(255, 107, 53, 0.3)',
                  }}
                >
                  <span>Get Your Free Security Consultation</span>
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Serve;
