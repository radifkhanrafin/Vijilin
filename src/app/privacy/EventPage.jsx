import React, { useEffect } from 'react';
import pc from '../../Assets/pc.png';
import investi from '../../Assets/Investigate.png';
import manCall from '../../Assets/callMane.png';
import writing from '../../Assets/writing.png';

const webinars = [
  {
    date: 'January 18, 2025',
    time: '1:00 PM EST',
    description:
      'Learn how to implement zero trust architecture in your organization with practical guidance and real-world examples.',
    speakerName: 'John Davis',
    title: '',
    speakerTitle: 'Senior Security Architect',
    speakerInitials: 'JD',
  },
  {
    date: 'January 18, 2025',
    time: '1:00 PM EST',
    title: 'Zero Trust Implementation: A Step-by-Step Guide',
    description:
      'Learn how to implement zero trust architecture in your organization with practical guidance and real-world examples.',
    speakerName: 'John Davis',
    speakerTitle: 'Senior Security Architect',
    speakerInitials: 'JD',
  },
  {
    date: 'January 18, 2025',
    time: '1:00 PM EST',
    title: 'Zero Trust Implementation: A Step-by-Step Guide',
    description:
      'Learn how to implement zero trust architecture in your organization with practical guidance and real-world examples.',
    speakerName: 'John Davis',
    speakerTitle: 'Senior Security Architect',
    speakerInitials: 'JD',
  },
  {
    date: 'January 18, 2025',
    time: '1:00 PM EST',
    title: 'Zero Trust Implementation: A Step-by-Step Guide',
    description:
      'Learn how to implement zero trust architecture in your organization with practical guidance and real-world examples.',
    speakerName: 'John Davis',
    speakerTitle: 'Senior Security Architect',
    speakerInitials: 'JD',
  },
  {
    date: 'January 18, 2025',
    time: '1:00 PM EST',
    title: 'Zero Trust Implementation: A Step-by-Step Guide',
    description:
      'Learn how to implement zero trust architecture in your organization with practical guidance and real-world examples.',
    speakerName: 'John Davis',
    speakerTitle: 'Senior Security Architect',
    speakerInitials: 'JD',
  },
  {
    date: 'January 18, 2025',
    time: '1:00 PM EST',
    title: 'Zero Trust Implementation: A Step-by-Step Guide',
    description:
      'Learn how to implement zero trust architecture in your organization with practical guidance and real-world examples.',
    speakerName: 'John Davis',
    speakerTitle: 'Senior Security Architect',
    speakerInitials: 'JD',
  },
];

const EventPage = () => {
  useEffect(() => {
    document.body.classList.add('home-body');

    return () => {
      document.body.classList.remove('home-body');
    };
  }, []);

  return (
    <div className='ev-bg'>
      {/* hero section */}
      <section className='pt-[180px] pb-16'>
        <div className='container mx-auto px-[16px] md:px-6'>
          {/* content */}
          <div className='mb-10'>
            <h1 className='text-center text-3xl font-bold md:text-4xl lg:text-[48px]'>
              Events & Webinars
            </h1>
            <p className='mt-10 text-center text-[18px]'>
              Join cybersecurity experts for live training sessions, product demonstrations, and in-{' '}
              <br />
              depth discussions on the latest threats and security strategies. All events are free{' '}
              <br /> and designed for security professionals, MSPs, and business leaders.
            </p>
          </div>
          {/* card */}
          <div className='flex flex-wrap justify-center gap-5'>
            <div className='w-fit rounded-[40px] bg-[#00AEEF] px-[40px] py-[15px] text-[14px] font-bold'>
              All Events
            </div>

            <div className='w-fit rounded-[40px] border border-[#00AEEF] px-[40px] py-[15px] text-[14px] font-bold'>
              Upcoming
            </div>
            <div className='w-fit rounded-[40px] border border-[#00AEEF] px-[40px] py-[15px] text-[14px] font-bold'>
              Live now
            </div>
            <div className='w-fit rounded-[40px] border border-[#00AEEF] px-[40px] py-[15px] text-[14px] font-bold'>
              On demand
            </div>
            <div className='w-fit rounded-[40px] border border-[#00AEEF] px-[40px] py-[15px] text-[14px] font-bold'>
              Webinars
            </div>
            <div className='w-fit rounded-[40px] border border-[#00AEEF] px-[40px] py-[15px] text-[14px] font-bold'>
              Conferences
            </div>
          </div>
        </div>
      </section>

      {/*  */}
      <section className='py-16'>
        <div className='container mx-auto px-[16px] md:px-6'>
          <div
            className='space-y-6 px-[20px] py-[65px] md:px-[58px]'
            style={{
              background: 'linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)',
            }}
          >
            <h1 className='text-center text-[30px] font-bold md:text-4xl lg:text-[48px]'>
              Featured Event: Securing the AI-Driven <br /> Enterprise
            </h1>
            <p
              className='text-center text-[16px] font-medium text-[#00AEEF]'
              style={{ color: '#00AEEF' }}
            >
              January 25, 2025 | 2:00 PM EST
            </p>
            <p className='text-center text-[18px]'>
              Join our CISO and leading AI security experts as they discuss the unique challenges of{' '}
              <br /> securing AI-powered business processes, from data protection to model
              integrity. <br /> Learn practical strategies for implementing AI security controls and
              governance <br /> frameworks.
            </p>

            <div className='flex flex-col items-center justify-center gap-10 md:flex-row'>
              <div className='relative rounded-lg bg-[#00AEEF]'>
                <button className='m-[2px] inline-flex items-center space-x-3 rounded-[8px] border-2 border-white p-[18px] text-lg text-white uppercase'>
                  <span className='text-[18px] font-medium uppercase'>Register free</span>

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

              <div className='inline-flex items-center space-x-3 rounded-lg border-1 border-[#00AEEF] p-[18px] text-white capitalize'>
                <span className='text-[18px] font-medium uppercase'>add to calender</span>

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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6 card */}
      <section className='py-16'>
        <div className='container mx-auto px-[16px] md:px-6'>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
            {webinars.map((webinar, index) => (
              // <WebinarCard key={index} {...webinar} />
              <div
                key={index}
                className='relative flex flex-col overflow-hidden rounded-[22px]'
                style={{
                  background: 'linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)',
                }}
              >
                <div className='relative h-44'>
                  {/* Top Tags */}
                  <div className='absolute top-0 left-0 flex w-full justify-between p-4'>
                    <span
                      className='rounded-full px-[16px] py-[10px] text-[10px] font-semibold text-[#F5F5F5]'
                      style={{ background: '#191624' }}
                    >
                      Webinar
                    </span>

                    <span className='rounded-full bg-[#37D962D6] px-[16px] py-[10px] text-[10px] font-semibold text-[#F5F5F5]'>
                      Upcoming
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className='flex flex-1 flex-col justify-between bg-[#CDCDD466]'>
                  <p
                    className='mt-3 text-center text-[15px] font-semibold text-[#00AEEF]'
                    style={{ color: '#00AEEF' }}
                  >
                    {webinar.date} | {webinar.time}
                  </p>

                  <div className='space-y-5 py-6'>
                    <div className='space-y-3'>
                      <h3 className='pl-5 text-[15px] text-white'>{webinar.title}</h3>
                      <p className='pl-5 text-[15px]'>{webinar.description}</p>
                    </div>

                    {/* Speaker Info */}
                    <div className='flex items-center gap-3 pl-10'>
                      <div className='flex h-12 w-12 items-center justify-center rounded-full bg-[#00AEEF] text-[12px] font-medium text-white'>
                        <h1>{webinar.speakerInitials}</h1>
                      </div>
                      <div>
                        <p className='text-[12px] font-bold text-white'>{webinar.speakerName}</p>
                        <p className='text-[12px] font-light'>{webinar.speakerTitle}</p>
                      </div>
                    </div>

                    {/* Register Button */}
                    <div className='mx-auto flex items-center justify-center'>
                      <button className='w-fit rounded-[7px] bg-[#00AEEF] px-[20px] py-[10px] text-white'>
                        REGISTER NOW
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 card */}
      <section className='py-16'>
        <div className='container mx-auto px-[16px] md:px-6'>
          <div
            className='flex flex-col items-center justify-center px-4 py-16 text-white sm:px-6 lg:px-8'
            style={{
              background: 'linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)',
            }}
          >
            <div className='mb-12 max-w-4xl text-center'>
              <h1 className='mb-3 text-[30px] font-bold md:text-4xl lg:text-5xl'>
                Cybersecurity Fundamentals Series
              </h1>
              <p className='text-[18px]'>
                A comprehensive 6-part series covering essential cybersecurity topics for modern{' '}
                <br /> businesses.
              </p>
            </div>

            <div className='grid w-full max-w-2xl grid-cols-1 gap-6 md:grid-cols-2'>
              {/* Card 1: Threat Landscape Overview */}
              <div className='relative flex flex-col items-center rounded-[12px] bg-[#00AEEF3D] p-6 text-center text-white lg:h-[280px]'>
                <div
                  className={`absolute inset-0 z-0 rounded-[12px] p-[2px]`}
                  style={{
                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                />
                <div className='mb-4'>
                  <img src={pc} alt='' className='h-[70px] w-[70px]' />
                </div>
                <div className='mb-2 p-0'>
                  <h2 className='text-[17px] font-medium'>Threat Landscape Overview</h2>
                </div>
                <h1 className='p-0 text-[13px]'>
                  Understanding current cyber threats <br /> and attack vectors
                </h1>
              </div>

              {/* Card 2: Security Framework Selection */}
              <div className='relative flex flex-col items-center rounded-[12px] bg-[#00AEEF3D] p-6 text-center text-white lg:h-[220px]'>
                <div
                  className={`absolute inset-0 z-0 rounded-[12px] p-[2px]`}
                  style={{
                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                />
                <div className='mb-4'>
                  <img src={investi} alt='' className='h-[70px] w-[70px]' />
                </div>
                <div className='mb-2 p-0'>
                  <h2 className='text-[17px] font-medium'>
                    Security Framework <br /> Selection
                  </h2>
                </div>
                <h1 className='p-0 text-[13px]'>
                  Choosing the right framework for your <br /> organization
                </h1>
              </div>

              {/* Card 3: Detection and Monitoring */}
              <div className='relative flex flex-col items-center rounded-[12px] bg-[#00AEEF3D] p-6 text-center text-white lg:h-[241px]'>
                <div
                  className={`absolute inset-0 z-0 rounded-[12px] p-[2px]`}
                  style={{
                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                />
                <div className='mb-4'>
                  <img src={manCall} alt='' className='h-[70px] w-[70px]' />
                </div>
                <div className='mb-2 p-0'>
                  <h2 className='text-[17px] font-medium'>Detection and Monitoring </h2>
                </div>
                <h1 className='p-0 text-[13px]'>
                  Building effective security monitoring <br /> capabilities
                </h1>
              </div>

              {/* Card 4: Incident Response Planning */}
              <div className='relative flex flex-col items-center rounded-[12px] bg-[#00AEEF3D] p-6 text-center text-white lg:-mt-[60px] lg:h-[233px]'>
                <div
                  className={`absolute inset-0 z-0 rounded-[12px] p-[2px]`}
                  style={{
                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                />
                <div className='mb-4'>
                  <img src={writing} alt='' className='h-[70px] w-[70px]' />
                </div>
                <div className='mb-2 p-0'>
                  <h2 className='text-[17px] font-medium'>Incident Response Planning</h2>
                </div>
                <h1 className='p-0 text-[13px]'>
                  Developing and testing incident <br /> response procedures
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1 card */}
      <section className='py-16'>
        <div className='container mx-auto px-[16px] md:px-6'>
          <div className='mb-12 text-center'>
            <h1 className='mb-3 text-[30px] font-bold md:text-4xl lg:text-5xl'>
              Recently Completed Events
            </h1>
            <p className='text-[18px]'>
              Catch up on recent sessions - all recordings are available on-demand.
            </p>
          </div>

          {/* card */}
          <div
            className='relative flex flex-col overflow-hidden rounded-[22px]'
            style={{
              background: 'linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)',
            }}
          >
            <div className='relative h-44'>
              {/* Top Tags */}
              <div className='absolute top-0 left-0 flex w-full justify-between p-4'>
                <span
                  className='rounded-full px-[16px] py-[10px] text-[10px] font-semibold text-[#F5F5F5]'
                  style={{ background: '#191624' }}
                >
                  Webinar
                </span>

                <span className='rounded-full bg-[#37D962D6] px-[16px] py-[10px] text-[10px] font-semibold text-[#F5F5F5]'>
                  Upcoming
                </span>
              </div>
            </div>

            {/* Content Area */}
            <div className='mb-14 flex flex-1 flex-col justify-between rounded-b-[22px] bg-[#CDCDD466]'>
              <p
                className='mt-3 text-center text-[15px] font-semibold text-[#00AEEF]'
                style={{ color: '#00AEEF' }}
              >
                January 18, 2025 | 1:00 PM EST
              </p>

              <div className='space-y-10 py-6'>
                <div className='space-y-10 text-center'>
                  <h3 className='pl-5 text-[15px] text-white'>
                    Zero Trust Implementation: A Step-by-Step Guide
                  </h3>
                  <p className='text-[15px]'>
                    Learn how to implement zero trust architecture in your organization with
                    practical guidance and real-world examples.
                  </p>
                </div>

                {/* Speaker Info */}
                <div className='flex items-center justify-center gap-3'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-full bg-[#00AEEF] text-[12px] font-medium text-white'>
                    <h1>JD</h1>
                  </div>
                  <div>
                    <p className='text-[12px] font-bold text-white'>John Davis </p>
                    <p className='text-[12px] font-light'>Senior Security Architect</p>
                  </div>
                </div>

                {/* Register Button */}
                <div className='mx-auto flex items-center justify-center'>
                  <button className='w-fit rounded-[7px] bg-[#00AEEF] px-[20px] py-[10px] text-white'>
                    REGISTER NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
      <section className='py-16 md:px-10'>
        <div className='container mx-auto px-[16px] md:px-6'>
          <div className='space-y-10 rounded-[24px] border border-[#00AEEF] px-[20px] py-14'>
            <h1
              className='text-center text-[30px] font-bold md:text-4xl lg:text-5xl'
              style={{ color: '#00AEEF' }}
            >
              Want to Host a Private Event?
            </h1>
            <p className='text-center text-[18px]'>
              We offer custom training sessions and workshops tailored to your organization's <br />{' '}
              specific needs. Perfect for team training, partner events, or industry groups.
            </p>

            <div className='mx-auto flex items-center justify-center'>
              <button
                className='rounded-[8px] bg-[#00AEEF] p-[18px] text-[20px] font-medium'
                style={{ color: '#000000' }}
              >
                REQUEST A CUSTOM TRAINING
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventPage;
