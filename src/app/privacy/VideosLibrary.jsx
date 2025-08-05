import React, { useEffect } from 'react';
import circlePlay from '../../Assets/circlePlay.png';

const videosData = [
  {
    id: 1,
    date: 'JANUARY 10, 2025',
    title: 'THREATREMEDIATE: AUTOMATED RESPONSE DEMO',
    description:
      'See how our platform automatically responds to threats in real-time, from initial detection to complete remediation, watch live threat scenarios being neutralized without human intervention.',
    views: '👁️ 2,345 VIEWS',
    thumbnail: '/placeholder.svg?height=200&width=400',
  },
  {
    id: 2,
    date: 'JANUARY 10, 2025',
    title: 'THREATREMEDIATE: AUTOMATED RESPONSE DEMO',
    description:
      'See how our platform automatically responds to threats in real-time, from initial detection to complete remediation, watch live threat scenarios being neutralized without human intervention.',
    views: '👁️ 2,345 VIEWS',
    thumbnail: '/placeholder.svg?height=200&width=400',
  },
  {
    id: 3,
    date: 'JANUARY 10, 2025',
    title: 'THREATREMEDIATE: AUTOMATED RESPONSE DEMO',
    description:
      'See how our platform automatically responds to threats in real-time, from initial detection to complete remediation, watch live threat scenarios being neutralized without human intervention.',
    views: '👁️ 2,345 VIEWS',
    thumbnail: '/placeholder.svg?height=200&width=400',
  },
  {
    id: 4,
    date: 'JANUARY 10, 2025',
    title: 'THREATREMEDIATE: AUTOMATED RESPONSE DEMO',
    description:
      'See how our platform automatically responds to threats in real-time, from initial detection to complete remediation, watch live threat scenarios being neutralized without human intervention.',
    views: '👁️ 2,345 VIEWS',
    thumbnail: '/placeholder.svg?height=200&width=400',
  },
];

const VideosLibrary = () => {
  useEffect(() => {
    document.body.classList.add('home-body');

    return () => {
      document.body.classList.remove('home-body');
    };
  }, []);

  return (
    <div className='vid-lib pt-[150px]'>
      {/* hero section */}
      <section className='py-16 md:px-6'>
        <div className='container mx-auto px-[16px] md:px-6'>
          <div className='mb-10'>
            <h1 className='text-center text-3xl font-bold md:text-4xl lg:text-[48px]'>
              🎥 Vijilan Video Library
            </h1>
            <p className='mt-10 text-center text-[18px]'>
              Learn cybersecurity best practices through our comprehensive video library. Watch{' '}
              <br /> product demos, training sessions, expert interviews, and real-world case
              studies <br /> designed to enhance your security knowledge and skills.
            </p>
          </div>
          {/* card */}
          <div className='flex flex-wrap justify-center gap-5'>
            <div className='w-fit rounded-[40px] cursor-pointer bg-[#00AEEF] px-[40px] py-[15px] text-[14px] font-bold'>
              All videos
            </div>

            <div className='w-fit rounded-[40px] cursor-pointer border border-[#00AEEF] px-[40px] py-[15px] text-[14px] font-bold'>
              Product Demos
            </div>
            <div className='w-fit rounded-[40px] cursor-pointer border border-[#00AEEF] px-[40px] py-[15px] text-[14px] font-bold'>
              Training
            </div>
            <div className='w-fit rounded-[40px] cursor-pointer border border-[#00AEEF] px-[40px] py-[15px] text-[14px] font-bold'>
              Expert interviews
            </div>
            <div className='w-fit rounded-[40px] cursor-pointer border border-[#00AEEF] px-[40px] py-[15px] text-[14px] font-bold'>
              Case Studies
            </div>
            <div className='w-fit rounded-[40px] cursor-pointer border border-[#00AEEF] px-[40px] py-[15px] text-[14px] font-bold'>
              Tutorials
            </div>
          </div>
        </div>
      </section>

      {/* video card */}
      <section className='pb-16'>
        <div className='container mx-auto px-[16px] md:px-6'>
          {/* Featured Video Section */}
          <div
            className='rounded-[24px] px-10 py-[60px] backdrop-blur-sm'
            style={{
              background: 'linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)',
            }}
          >
            {/* Title */}
            <h1 className='mb-10 text-center text-2xl font-bold tracking-wide text-white md:text-3xl lg:text-4xl'>
              FEATURED: THREATREMEDIATE PLATFORM DEEP DIVE
            </h1>

            {/* Video Player Container */}
            <div className='relative mx-auto aspect-video h-[287px] w-full overflow-hidden rounded-[24px] bg-[#CDCDD466] md:max-w-[820px]'>
              {/* Video Background Overlay
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-400/20 to-slate-700/40"></div> */}

              {/* Play Button */}
              <div className='absolute inset-0 flex items-center justify-center'>
                <img
                  src={circlePlay}
                  alt=''
                  className='h-[85px] w-[100px] md:h-[150px] md:w-[165px]'
                />
              </div>

              {/* Subtle grid pattern overlay */}
              <div className='absolute inset-0 opacity-10'>
                <div
                  className='h-full w-full'
                  style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
                    backgroundSize: '20px 20px',
                  }}
                ></div>
              </div>
            </div>

            {/* Description Text */}
            <div className='mx-auto mt-12 md:max-w-4xl'>
              <p className='text-center text-[18px] leading-relaxed'>
                Get an in-depth look at our ThreatRemediate platform, including automated threat{' '}
                <br /> detection, investigation workflows, and remediation capabilities. Perfect for
                security <br /> teams evaluating XDR solutions and experiencing the power of active
                threat <br /> remediation.
              </p>
            </div>
          </div>

          {/* Additional spacing for mobile */}
          <div className='h-8 md:h-16'></div>
        </div>
      </section>

      {/* security video cards */}
      <section className='pt-16 pb-[120px]'>
        <div className='container mx-auto px-[16px] md:px-6'>
          <div className='relative z-10'>
            {/* Header Section */}
            <div className='mb-12 text-center'>
              <h1 className='mb-3 text-3xl font-bold text-white md:text-4xl lg:text-5xl'>
                Latest Security Videos
              </h1>
              <p className='text-center text-lg leading-relaxed'>
                Stay current with the latest cybersecurity insights, product demonstrations, and{' '}
                <br /> expert guidance
              </p>
            </div>

            {/* Videos Grid */}
            <div className='mx-auto grid max-w-6xl gap-8 md:grid-cols-2'>
              {videosData.map((video) => (
                <div
                  key={video.id}
                  className='overflow-hidden rounded-[24px] bg-[#CDCDD466] backdrop-blur-sm'
                >
                  {/* Video Thumbnail */}
                  <div
                    className='relative h-48'
                    style={{
                      background: 'linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)',
                    }}
                  >
                    {/* DEMO Badge */}
                    <div className='absolute top-10 z-10'>
                      <span
                        className='rounded-lg px-[24px] py-[12px] text-[16px] font-bold text-white'
                        style={{
                          background: 'linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)',
                        }}
                      >
                        DEMO
                      </span>
                    </div>
                  </div>

                  {/* Video Info */}
                  <div className='space-y-4 p-6' style={{ background: '#576675' }}>
                    {/* Date */}
                    <div className='text-[12px] font-medium tracking-wide text-[#00AEEF]'>
                      {video.date}
                    </div>

                    {/* Title */}
                    <h3 className='text-[16px] leading-tight font-medium text-white'>
                      {video.title}
                    </h3>

                    {/* Description */}
                    <p className='text-[12px] leading-relaxed'>{video.description}</p>

                    {/* Views */}
                    <div className='flex justify-between text-[12px] font-light'>
                      <span>{video.views}</span>
                      <span>{video.views}</span>
                    </div>

                    {/* Footer */}
                    <div className='mx-auto flex items-center justify-center pt-4'>
                      {/* Demo Button */}
                      <button
                        className='rounded-lg px-[24px] py-[12px] text-[16px] font-bold text-white'
                        style={{
                          background: 'linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)',
                        }}
                      >
                        DEMO
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VideosLibrary;
