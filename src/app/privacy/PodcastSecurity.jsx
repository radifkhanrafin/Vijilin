import { ArrowRight, Play } from 'lucide-react';
import React, { useEffect } from 'react';
import { Clock, User } from 'lucide-react';
import Heading_Btn from '@components/Heading_Btn';

const episodes = [
  {
    id: 1,
    episodeNumber: 126,
    date: 'JANUARY 8 2025',
    title: 'ZERO TRUST IN THE AGE OF AI',
    description:
      'exploring how artificial intelligence is changing zero trust implementation and the new challenges it presents for identity verification and access control in modern enterprise environments.',
    guest: '🎙️ Guest: Dr. Sarah Mitchell, AI Security Expert',
    duration: '⏱️ 28 min',
  },
  {
    id: 2,
    episodeNumber: 126,
    date: 'JANUARY 8 2025',
    title: 'ZERO TRUST IN THE AGE OF AI',
    description:
      'exploring how artificial intelligence is changing zero trust implementation and the new challenges it presents for identity verification and access control in modern enterprise environments.',
    guest: '🎙️ Guest: Dr. Sarah Mitchell, AI Security Expert',
    duration: '⏱️ 28 min',
  },
  {
    id: 3,
    episodeNumber: 126,
    date: 'JANUARY 8 2025',
    title: 'ZERO TRUST IN THE AGE OF AI',
    description:
      'exploring how artificial intelligence is changing zero trust implementation and the new challenges it presents for identity verification and access control in modern enterprise environments.',
    guest: '🎙️ Guest: Dr. Sarah Mitchell, AI Security Expert',
    duration: '⏱️ 28 min',
  },
  {
    id: 4,
    episodeNumber: 126,
    date: 'JANUARY 8 2025',
    title: 'ZERO TRUST IN THE AGE OF AI',
    description:
      'exploring how artificial intelligence is changing zero trust implementation and the new challenges it presents for identity verification and access control in modern enterprise environments.',
    guest: '🎙️ Guest: Dr. Sarah Mitchell, AI Security Expert',
    duration: '⏱️ 28 min',
  },
  {
    id: 5,
    episodeNumber: 126,
    date: 'JANUARY 8 2025',
    title: 'ZERO TRUST IN THE AGE OF AI',
    description:
      'exploring how artificial intelligence is changing zero trust implementation and the new challenges it presents for identity verification and access control in modern enterprise environments.',
    guest: '🎙️ Guest: Dr. Sarah Mitchell, AI Security Expert',
    duration: '⏱️ 28 min',
  },
  {
    id: 6,
    episodeNumber: 126,
    date: 'JANUARY 8 2025',
    title: 'ZERO TRUST IN THE AGE OF AI',
    description:
      'exploring how artificial intelligence is changing zero trust implementation and the new challenges it presents for identity verification and access control in modern enterprise environments.',
    guest: '🎙️ Guest: Dr. Sarah Mitchell, AI Security Expert',
    duration: '⏱️ 28 min',
  },
];

const PodcastSecurity = () => {
  useEffect(() => {
    document.body.classList.add('home-body');

    return () => {
      document.body.classList.remove('home-body');
    };
  }, []);

  return (
    <div className='pod-bg'>
      {/* hero section */}
      <section className='pt-[180px]'>
        <div className='container mx-auto px-[16px] md:px-6'>
          {/* content */}
          <div className='mb-10'>
            <h1 className='text-center text-3xl font-bold md:text-4xl lg:text-[48px]'>
              🎧 Vijilan Security Podcast
            </h1>
            <p className='mt-10 text-center text-[18px]'>
              Weekly conversations with cybersecurity experts, threat researchers, and industry{' '}
              <br /> leaders. Get insider insights on the latest threats, defense strategies, and
              real-world <br /> incident response stories.
            </p>
          </div>
          {/* card */}
          <div className='flex flex-wrap justify-center gap-5'>
            <div className='w-fit rounded-[8px] bg-[#CDCDD466] px-[22px] py-[12px] text-[16px] font-bold uppercase'>
              Apple podcast
            </div>

            <div className='w-fit rounded-[8px] bg-[#CDCDD466] px-[22px] py-[12px] text-[16px] font-bold uppercase'>
              SPOTIFY
            </div>
            <div className='w-fit rounded-[8px] bg-[#CDCDD466] px-[22px] py-[12px] text-[16px] font-bold uppercase'>
              google podcast
            </div>
            <div className='w-fit rounded-[8px] bg-[#CDCDD466] px-[22px] py-[12px] text-[16px] font-bold uppercase'>
              stitcher
            </div>
            <div className='w-fit rounded-[8px] bg-[#CDCDD466] px-[22px] py-[12px] text-[16px] font-bold uppercase'>
              RSS FEED
            </div>
          </div>
        </div>
      </section>

      {/*  */}
      <section className='py-16'>
        <div className='container mx-auto px-[16px] md:px-6'>
          <div
            className='flex items-center justify-center rounded-[24px] p-[20px] md:p-[40px] lg:p-[54px]'
            style={{
              background: 'linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)',
            }}
          >
            <div className='mx-auto w-full max-w-4xl'>
              {/* Main Title */}
              <h1
                className='mb-8 text-center text-2xl leading-tight font-bold text-[#FFFFFFCC] sm:text-3xl md:text-[36px]'
                style={{ color: '#FFFFFFCC' }}
              >
                FEATURED EPISODE: THE PSYCHOLOGY OF SOCIAL <br /> ENGINEERING
              </h1>

              {/* Episode Content Card */}
              <div className='rounded-[24px] bg-[#CDCDD466] p-[20px] md:p-[45px]'>
                {/* Play Button and Episode Info */}
                <div className='mb-[35px] flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6'>
                  <button className='flex w-fit items-center gap-2 rounded-lg bg-[#00AEEF] px-[16px] py-[8px] text-[16px] font-bold'>
                    <Play className='h-4 w-4 fill-current' />
                    PLAY EPISODE
                  </button>

                  <div className='text-[16px]'>EPISODE 127 • 32 MINUTES • JANUARY 3, 2025</div>
                </div>

                {/* Progress Bar */}
                <div className='mb-6'>
                  <div className='h-[5px] w-full max-w-[700px] bg-[#EBEBEB]'>
                    <div
                      className='h-[5px] bg-gradient-to-r from-orange-500 to-red-500'
                      style={{
                        background: 'linear-gradient(90deg, #00AEEF 0%, #F24E1E 100%)',
                        width: '25%',
                      }}
                    ></div>
                  </div>
                </div>

                {/* Episode Description */}
                <p className='text-[18px] leading-relaxed'>
                  Our CISO discusses the human element in cybersecurity attacks and how <br />
                  organizations can build stronger security awareness cultures. Learn practical{' '}
                  <br /> strategies for identifying social engineering tactics and implementing
                  effective <br /> training programs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  */}
      <section className='py-16'>
        <div className='container mx-auto px-[16px] md:px-6'>
          <div className='relative z-10'>
            {/* Header Section */}
            <div className='mb-12 text-center'>
              <h1 className='mb-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl'>
                Latest Episodes
              </h1>
              <p className='text-lg leading-relaxed'>
                Stay current with the evolving cybersecurity landscape through expert analysis and{' '}
                <br /> real-world insights
              </p>
            </div>

            {/* Episodes Grid */}
            <div className='mx-auto grid max-w-6xl gap-8 md:grid-cols-2'>
              {episodes.map((episode) => (
                <div
                  key={episode.id}
                  className='rounded-[24px] p-[34px] backdrop-blur-sm'
                  style={{
                    background: 'linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)',
                  }}
                >
                  {/* Episode Badge */}
                  <div className='mb-6'>
                    <span
                      className='inline-block rounded-[8px] px-[24px] py-[12px] text-[16px] font-bold tracking-wide text-white uppercase'
                      style={{
                        background: 'linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)',
                      }}
                    >
                      Episode {episode.episodeNumber}
                    </span>
                  </div>

                  {/* Date */}
                  <div className='mb-4 text-[16px] font-bold tracking-wider uppercase'>
                    {episode.date}
                  </div>

                  {/* Title */}
                  <h2 className='text-[16px] font-bold tracking-wide uppercase'>{episode.title}</h2>

                  {/* Description */}
                  <p className='mb-6 text-[16px] leading-relaxed'>{episode.description}</p>

                  {/* Episode Info */}
                  <div className='mb-8 flex items-center justify-between'>
                    <div className='text-[14px] font-medium'>
                      <span>{episode.guest}</span>
                    </div>
                    <div className='text-[14px] font-medium'>
                      <span>{episode.duration}</span>
                    </div>
                  </div>

                  {/* Play Button */}
                  <button className='flex items-center rounded-[7px] bg-[#00AEEF] px-[14px] py-[8px] font-bold tracking-wide text-white uppercase'>
                    <Play className='mr-2 h-4 w-4 transition-transform group-hover:scale-110' />
                    Play Episode
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/*  */}
      <section className='pb-[120px]'>
        <div className='container mx-auto px-[16px] md:px-6'>
          <div
            className='flex items-center justify-center rounded-[24px] px-[24px] py-[44px] !pt-[80px]'
            style={{
              background: 'linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)',
            }}
          >
            <div className='mx-auto max-w-4xl text-center'>
              {/* Main Heading */}
              <h1 className='mb-8 text-3xl font-bold text-white md:text-4xl lg:text-5xl'>
                Never Miss an Episode
              </h1>

              {/* Description */}
              <p className='mb-12 text-lg leading-relaxed'>
                Subscribe to our podcast newsletter and get notified about new episodes, exclusive{' '}
                <br /> content, and special guest announcements. Join over 5,000 cybersecurity{' '}
                <br /> professionals who stay informed with our weekly insights.
              </p>

              {/* Email Subscription Form */}
              <div className='relative z-20 mx-auto mb-8 flex w-full items-center rounded-[10px] bg-white p-2 md:max-w-xl'>
                <input
                  type='email'
                  placeholder='Enter your email'
                  className='w-full flex-1 border-none px-6 py-2 text-lg text-gray-700 placeholder-gray-400 outline-none focus:ring-1'
                />
                <button
                  className='rounded-[16px] px-8 py-3 text-[16px] font-bold text-white'
                  style={{
                    background: 'linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)',
                  }}
                >
                  Subscribe
                </button>
              </div>

              {/* Action Buttons */}
              <div className='-mt-[80px] flex flex-col items-center justify-center md:flex-row'>
                <Heading_Btn btn6={'GET EMAIL NOTIFICATIONS'} />
                <div className='-mt-[140px] md:-mt-0'>
                  <Heading_Btn btn7={'MORE RESOURCES'} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PodcastSecurity;
