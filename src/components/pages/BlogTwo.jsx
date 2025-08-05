import React from 'react';
import blog_ai from '../../Assets/blog_AI.png';

import LandingPageCard from '@components/LandingPageCard';

import { Blog_landing_Data } from '@app/Constant/Constant';
import mask from '../../images/blog-bg.png';
import backgroundPattern from '../../images/Background pattern.png';
import vector from '../../Assets/Vector.png';
import { Link } from 'react-router-dom';
const tabs = [
  ' All posts',
  ' Threat and Intelligence',
  'Enterprise Security',
  'Compliance and Risk',
  'Product & Partner News',
];

const pages = ['1', '2', '3', '...', '8', '9'];

const BlogTwo = () => {
  return (
    <section className='mb-20 pt-[180px] text-white !relative z-[9] overflow-x-clip'>
        <img src={mask} alt='Image' className='bc-bg' />
      <div className='container mx-auto px-6 py-12'>
        <div className='grid grid-cols-1 justify-between space-y-10 md:grid-cols-6 md:space-y-0'>
          <div className='col-span-1 space-y-5 md:col-span-3'>
            <div className=''>
              <span className='inline-block rounded-[13px] bg-[#00AEEF] px-2 py-[16px] text-[16px] font-medium tracking-wide text-white uppercase lg:px-[24px]'>
                THREAT INTELLIGENCE
              </span>
            </div>
            <h1 className='space-y-2 font-sans text-xl font-bold capitalize md:text-3xl md:text-[47px]'>
              Threat Intelligence <br />
              The Rise of Malware-Free Attacks: How to Defend Your Organization
            </h1>

            <p className='text-sm md:text-[18px]'>
              {' '}
              Modern cyber attackers are increasingly leveraging legitimate tools and processes to
              infiltrate networks without deploying traditional malware. Learn the advanced
              detection strategies your organization needs to defend against these sophisticated
              threats.
            </p>
            <Link
              to={'/blog-landing'}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className='mt-8'>
                <button
                  className='inline rounded-[8px] p-[20px] px-5 text-[18px] font-medium'
                  style={{
                    background: 'linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)',
                  }}
                >
                  {' '}
                  Read the full story
                </button>
              </div>
            </Link>
          </div>

          <div className='col-span-1 md:col-span-3'>
            <div className='flex items-end justify-end'>
              <img className='h-[458px] w-[500px]' src={blog_ai} alt='' />
            </div>
          </div>
        </div>

        {/* tabs */}
        <div className='mt-10 flex flex-wrap gap-5 md:gap-7'>
          {tabs.map((tab, index) => (
            <p
              key={index}
              className={`inline cursor-pointer rounded-[40px] border border-[#00AEEF] px-5 py-3 text-xl text-[14px] font-bold md:px-[40px] md:py-[15px] ${
                index === 0 ? 'bg-[#00AEEF] text-white' : ''
              }`}
            >
              {tab}
            </p>
          ))}
        </div>

        <section className='relative z-10 py-16'>
          <div className='container mx-auto'>
            <div
              className='relative flex h-[304px] items-center justify-center overflow-hidden rounded-[24px]'
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

              <div className='relative z-10 space-y-5 !p-[20px] text-center'>
                <h2 className='text-[20px] font-bold text-white md:text-[40px]'>
                  Get Security Insights Delivered to Your Inbox.
                </h2>
                <p className='mx-auto max-w-2xl text-[15px] leading-relaxed font-medium text-white md:text-[16px]'>
                  Subscribe to our newsletter for the latest threat analysis, partner strategies,
                  and product updates from the experts at Vijilan.
                </p>
                <div className='relative mx-auto w-full max-w-2xl'>
                  <input
                    className='w-full rounded-[10px] py-[24px] pr-[130px] pl-[14px] text-[#0000007A]'
                    placeholder='Enter Your Email'
                    type='search'
                  />

                  <button
                    className='absolute top-1/2 right-3 -translate-y-1/2 rounded-[10px] px-[20px] py-[12px] text-[16px] font-bold whitespace-nowrap text-white transition-opacity hover:opacity-90'
                    style={{
                      background: 'linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)',
                    }}
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog  Cards */}

        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {Blog_landing_Data.map((card, index) => (
            <Link
              to={'/blog-landing'}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <LandingPageCard
                key={index}
                banner={card.banner}
                author={card.author}
                title={card.category}
                details={card.title}
                date={card.date}
              />
            </Link>
          ))}
        </div>

        <div className='mt-12 flex gap-[16px] flex-col md:flex-row items-center justify-between'>
          <div className='rounded bg-blue-500 p-2 !opacity-50 md:block'>
            <img src={vector} alt='' className='mx-auto h-[22px] w-[22px]' />
          </div>

          <div className='flex flex-wrap gap-3 md:gap-[16px]'>
            {pages.map((n, index) => (
              <p
                key={index}
                className='inline-flex h-[52px] w-[52px] cursor-pointer items-center justify-center rounded-[14px] border border-[#CDCDD466] px-2 py-1 text-sm font-medium !text-[rgba(205,205,212,0.40)] transition-all duration-700 ease-in-out hover:border-[#ffffff] hover:!text-white md:px-[21px] md:py-[8px] md:!text-[20px]'
              >
                {n}
              </p>
            ))}
          </div>
          {/* <FaAngleDoubleRight className='text-[#00AEEF] text-3xl' /> */}
          <div className='rounded-[6px] bg-[#00AEEF] p-2 md:flex'>
            <img
              src={vector}
              alt=''
              className='flex h-auto items-center justify-center md:block md:h-[22px] md:w-[22px]'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogTwo;
