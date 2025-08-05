import React from 'react';
import check from '../../images/check.svg';
import line from '../../images/line.svg';
import bannerBg from '../../images/ban-bg.png';
import bannerBgTwo from '../../images/bg-grd.png';

const Partner = () => {
  return (
    <>
      <section className='hr-section relative z-[9] overflow-x-clip pt-[180px] pb-[120px] md:pt-[200px]'>
        <img src={bannerBg} alt='Image' className='ban-bg-two' />
        <img src={bannerBgTwo} alt='Image' className='bg-grd-two' />
        <div className='container mx-auto px-[16px] md:px-6'>
          <div className='mx-auto max-w-[850px] text-center'>
            <h1 className='text-[30px] leading-[1.4] font-bold tracking-tight whitespace-pre-line text-white sm:text-4xl md:!text-5xl'>
              You're One Step Away from a More Profitable Partnership.
            </h1>
            <p className='mx-auto mt-[25px] max-w-[670px] text-[18px] leading-8 whitespace-pre-line text-[#FFFFFF]'>
              Complete the form below to join the Vijilan Partner Network. Our team will review your
              application and grant you access to our Partner Portal, sales enablement kit, and
              pricing simulator within the hour.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className='container mx-auto px-[16px] md:px-6'>
          <div
            className='relative flex h-full w-full flex-col items-start gap-12 rounded-[24px] bg-[#00AEEF3D] p-5 text-white sm:p-8 md:p-14 lg:flex-row'
            style={{
              border: '1px solid transparent',
              backgroundClip: 'padding-box',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              className='pointer-events-none absolute inset-0 rounded-[24px] p-[1px]'
              style={{
                background:
                  'linear-gradient(135deg, rgba(0,174,239,0.8) 0%, rgba(0,174,239,0.2) 50%, rgba(0,174,239,0) 100%)',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
                zIndex: 0,
              }}
            />

            <div className='h-full w-full'>
              <h2 className='mb-6 text-2xl font-bold text-[#FFFFFF] md:text-[32px]'>
                Partner Application
              </h2>
              <form className='grid grid-cols-1 gap-5 lg:grid-cols-2'>
                <input
                  type='text'
                  placeholder='First Name'
                  className='rounded-[16px] border border-none bg-[#97D0FA3D] px-[16px] py-[20px] text-sm placeholder:!text-[#ffffff70] focus:border-1 focus:bg-[#00AEEF3D] focus:ring-1 focus:ring-[#FFFFFF80] focus:outline-none md:text-[16px]'
                />
                <input
                  type='text'
                  placeholder='Last Name'
                  className='rounded-[16px] border border-none bg-[#97D0FA3D] px-[16px] py-[20px] text-sm placeholder:!text-[#ffffff70] focus:border-1 focus:bg-[#00AEEF3D] focus:ring-1 focus:ring-[#FFFFFF80] focus:outline-none md:text-[16px]'
                />
                <input
                  type='text'
                  placeholder='Company Name'
                  className='rounded-[16px] border border-none bg-[#97D0FA3D] px-[16px] py-[20px] text-sm placeholder:!text-[#ffffff70] focus:border-1 focus:bg-[#00AEEF3D] focus:ring-1 focus:ring-[#FFFFFF80] focus:outline-none md:text-[16px]'
                />
                <input
                  type='email'
                  placeholder='Work Email'
                  className='rounded-[16px] border border-none bg-[#97D0FA3D] px-[16px] py-[20px] text-sm placeholder:!text-[#ffffff70] focus:border-1 focus:bg-[#00AEEF3D] focus:ring-1 focus:ring-[#FFFFFF80] focus:outline-none md:text-[16px]'
                />
                <input
                  type='text'
                  placeholder='Phone Number'
                  className='rounded-[16px] border border-none bg-[#97D0FA3D] px-[16px] py-[20px] text-sm placeholder:!text-[#ffffff70] focus:border-1 focus:bg-[#00AEEF3D] focus:ring-1 focus:ring-[#FFFFFF80] focus:outline-none md:text-[16px]'
                />
                <input
                  type='text'
                  placeholder='Company Website'
                  className='rounded-[16px] border border-none bg-[#97D0FA3D] px-[16px] py-[20px] text-sm placeholder:!text-[#ffffff70] focus:border-1 focus:bg-[#00AEEF3D] focus:ring-1 focus:ring-[#FFFFFF80] focus:outline-none md:text-[16px]'
                />
                <select className='focus:bg-opacity-25 appearance-none rounded-[16px] border border-none bg-[#97D0FA3D] px-[16px] py-[20px] text-sm focus:border-1 focus:bg-[#00AEEF3D] focus:ring-1 focus:ring-[#FFFFFF80] focus:outline-none md:text-[16px]'>
                  <option className='text-black'>Partner Type</option>
                  <option className='text-black'>MSP</option>
                  <option className='text-black'>MSSP</option>
                  <option className='text-black'>Reseller</option>
                </select>
                <select
                  className='rounded-[16px] border border-none bg-[#97D0FA3D] px-[16px] py-[20px] text-[16px] focus:border-1 focus:bg-[#00AEEF3D] focus:ring-1 focus:ring-[#FFFFFF80] focus:outline-none'
                  defaultValue=''
                >
                  <option value='' disabled className='text-black'>
                    No. of Endpoints You Manage
                  </option>
                  <option value='1' className='text-black'>
                    1
                  </option>
                  <option value='2' className='text-black'>
                    2
                  </option>
                  <option value='3' className='text-black'>
                    3
                  </option>
                </select>
                <div className='col-span-1 md:col-span-2'>
                  <button
                    type='submit'
                    className='w-full rounded-[16px] px-[16px] py-[20px] font-semibold text-white transition duration-300 hover:opacity-90'
                    style={{
                      backgroundImage: 'linear-gradient(to right, #F89B29, #FF0F7B)',
                    }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>

            <div className='hidden h-full pt-[15px] min-h-full items-center justify-center md:flex lg:!block'>
              <img src={line} alt='Divider' className='h-[450px] object-cover' />
            </div>

            <div className='h-full w-full max-w-[376px] space-y-6'>
              <h2 className='mb-6 text-2xl font-bold text-[#FFFFFF] md:text-[32px]'>
                What Happens Next?
              </h2>
              <ul className='space-y-[24px] text-[14px] text-gray-200'>
                <li>
                  <span className='text-sm font-bold md:text-[20px]'>1- Instant Confirmation</span>
                  <br />
                  You'll receive an email confirming we've received your <br /> application
                </li>
                <li>
                  <span className='text-sm font-bold md:text-[20px]'>2- Team Review</span>
                  <br />
                  You'll receive an email confirming we've received your <br /> application
                </li>
                <li>
                  <span className='text-sm font-bold md:text-[20px]'>3- Portal Access</span>
                  <br />
                  Upon approval, you'll receive your login credentials for the <br /> Partner
                  Portal.
                </li>
                <li>
                  <span className='text-sm font-bold md:text-[20px]'>4- Welcome & Onboarding</span>
                  <br />
                  Your dedicated Partner Manager will reach out to schedule <br /> a brief welcome
                  call.
                </li>
              </ul>
            </div>
          </div>

          <div className='mt-5 flex justify-end sm:mr-[50px] md:-mt-[20px] lg:-mt-[50px]'>
            <div className='relative w-fit rounded-[16px] bg-[#80808080] p-[30px_24px] text-white'>
              {/* Background element for the content */}
              <div className='relative z-10 text-center'>
                <h4 className='mb-[16px] text-[24px] font-semibold !text-[#00AEEF]'>
                  Your Portal Access Unlocks
                </h4>
                <div className='space-y-2'>
                  <div className='flex items-center justify-center gap-[10px]'>
                    <img src={check} className='h-[17px] w-[17px]' alt='Checkmark' />
                    <span className='text-[16px]'>
                      Interactive Pricing Simulator & Quoting Tool
                    </span>
                  </div>
                  <div className='flex items-center justify-center gap-[10px]'>
                    <img src={check} className='h-[17px] w-[17px]' alt='Checkmark' />
                    <span className='text-[16px]'>The Full Sales & Marketing Enablement Kit</span>
                  </div>
                  <div className='flex items-center justify-center gap-[10px]'>
                    <img src={check} className='h-[17px] w-[17px]' alt='Checkmark' />
                    <span className='text-[16px]'>
                      Not-For-Resale (NFR) Licenses for Internal Use
                    </span>
                  </div>
                  <div className='flex items-center justify-center gap-[10px]'>
                    <img src={check} className='h-[17px] w-[17px]' alt='Checkmark' />
                    <span className='text-[16px]'>Dedicated Partner Manager Support</span>
                  </div>
                </div>
              </div>

              {/* Gradient border using pseudo-elements */}
              <div
                className='absolute inset-0 rounded-[16px] p-[1px]'
                style={{
                  background:
                    'conic-gradient(from 180deg at 50% 50%, #FF98E2 0deg, #FFC876 35.77deg, #79FFF7 153.75deg, #9F53FF 258.75deg, #FF98E2 360deg)',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                  zIndex: 0,
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partner;
