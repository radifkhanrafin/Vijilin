import React from 'react';
import logo from '../Assets/logo.png';
import logoSub from '../Assets/logoSub.png';
import vendor from '../Assets/vendor.png';
import footerBg from '../images/footer-bg.png';
// import footerBg from '../images/footer.svg';
import smallVendor from '../Assets/smallVendor.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer
      className='relative !z-[999] pt-[360px] pb-10 footer'

    >
      <div className="bg-gr"       style={{
        backgroundImage: `url(${footerBg})`,
        backgroundRepeat: 'no-repeat',
      }}></div>
      <div className='relative z-10 container mx-auto px-[20px] md:px-6'>
        <div>
          <div className='mb-[70px] sm:grid gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
            <Link
              to={'/'}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className='text-center col-span-4 lg:col-span-1'
            >
              <div className=' flex w-full  justify-center lg:!justify-start sm:-ml-[22px] md:-ml-[0px]'>
                {/* Footer Logo */}
                <div className='mb-6'>
                  <img src={logo} alt='company logo' className='h-[34px] w-[100px]' />
                  <img
                    src={logoSub}
                    alt='logo text'
                    className='-mt-[6px] ml-[38px] h-[5px] w-[56px]'
                  />
                </div>
              </div>
            </Link>

            <div className='mt-[20px] sm:mt-0 inline-flex sm:flex w-[50%] sm:w-full justify-start sm:justify-start'>
              <div className='text-left'>
                <h4 className='mb-[35px] text-[19px] !text-[#00AEEF] sm:text-[18px] md:text-left'>
                  Insights
                </h4>
                <div className='space-y-3 text-gray-300'>
                  {[
                    { to: '/blog', label: 'Blog' },
                    { to: '/event-page', label: 'Events' },
                    { to: '/case-studies', label: 'Papers' },
                    { to: '/podcast-security', label: 'Podcast' },
                    { to: '/videos-library', label: 'Videos' },
                    { to: '/resources', label: 'Press release and news' },
                  ].map((item, index) => (
                    <Link
                      key={index}
                      to={item.to}
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                      className='flex items-center gap-[14px] text-[15px] sm:text-[16px] hover:!text-[#00AEEF]'
                    >
                      <img src={smallVendor} alt='vendor' className='h-[15px]' />
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className='inline-flex sm:flex w-[50%] sm:w-full justify-start sm:-ml-0 sm:justify-start'>
              <div className='text-left'>
                <h4 className='mb-[35px] text-[19px] !text-[#00AEEF] sm:text-[18px]'>Platform</h4>
                <div className='space-y-3 text-gray-300'>
                  {[
                    { to: '/about', label: 'About Us' },
                    { to: '/become-a-partner', label: 'Become a Partner' },
                    { to: '/contact', label: 'Contact Us' },
                    { to: '/pricing-page', label: 'Pricing' },
                    { to: '/request-demo', label: 'Request a Demo' },
                  ].map((item, index) => (
                    <Link
                      key={index}
                      to={item.to}
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                      className='flex items-center gap-[14px] text-[15px] sm:text-[16px] hover:!text-[#00AEEF]'
                    >
                      <img src={smallVendor} alt='vendor' className='h-[15px]' />
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className='mt-[40px] sm:mt-0 col-span-4 sm:col-span-1 flex w-full justify-start sm:justify-start'>
              <div className='text-left'>
                <h4 className='mb-[35px] text-[19px] !text-[#00AEEF] sm:text-[18px]'>Others</h4>
                <div className='mb-6 space-y-3 text-gray-300'>
                  {[
                    { to: '/resources', label: 'FAQ' },
                    { to: '/information-security', label: 'Information Security' },
                    { to: '/privacy-policy', label: 'Privacy Policy' },
                    { to: '/term-condition', label: 'Terms and Conditions' },
                    { to: '/cookie-privacy', label: 'Cookie Policy' },
                  ].map((item, index) => (
                    <Link
                      key={index}
                      to={item.to}
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                      className='flex items-center gap-[14px] text-[15px] sm:text-[16px] hover:!text-[#00AEEF]'
                    >
                      <img src={smallVendor} alt='vendor' className='h-[15px]' />
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className=' mt-[40px] sm:mt-0 col-span-4 md:col-span-1 flex w-full justify-start lg:justify-end lg:pt-[62px]'>
              <Link className='!w-full md:w-auto' to={'contact'} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <div className='justify-end md:flex'>
                  <button
                    className='w-full h-fit rounded-[8px] px-[24px] py-[16px] text-[18px] font-medium text-white md:text-[16px] lg:text-[18px]'
                    style={{
                      background: 'linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)',
                    }}
                  >
                    CONTACT US
                  </button>
                </div>
              </Link>
            </div>
          </div>

          <img src={vendor} alt='vendor' className='h-[1px] w-full' />

          <div className='pt-6 text-center text-[16px] text-[#9C9A9B]'>
            <p>
              Copyright © 2025 All Rights Reserved - Vijilan Security, LLC - 24/7 Cybersecurity
              Threat Monitoring, SIEM, and SOC
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
