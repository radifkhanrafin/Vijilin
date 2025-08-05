import React, { useState, useEffect } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import investigate from '../../Assets/Investigate.png';
import { Link } from 'react-router-dom';

const PricingTool = () => {

      useEffect(() => {
        document.body.classList.add('home-body');
    
        return () => {
          document.body.classList.remove('home-body');
        };
      }, []);

  const tools = [
    {
      icon: investigate,
      title: 'ThreatRemediate™ Sales Deck',
      description: 'Complete presentation with sales value props and ROI calculations',
    },
    {
      icon: investigate,
      title: 'Co-Brandable One-Pager',
      description: 'Customizable single-page overview for quick client presentations',
    },
    {
      icon: investigate,
      title: 'Proposal Template',
      description: 'Professional proposal template with your branding',
    },
    {
      icon: investigate,
      title: 'Competitive Battlecards',
      description: 'Talking points and objection handling vs competitors',
    },
    {
      icon: investigate,
      title: 'Buyer Persona Guides',
      description: 'Detailed profiles with pain points and buying triggers',
    },
    {
      icon: investigate,
      title: 'Email & Call Templates Kit',
      description: 'Ready-to-use outreach templates for every buying stage',
    },
  ];

  const [totals, setTotals] = useState({
    subtotal: 0,
    totalMonthlyCost: 0,
  });
  return (
    <div className='overflow-x-clip pt-[150px] acdc-bg'>
      <section className='-mx-4 overflow-x-clip pt-10 pb-16'>
        <div
          className='flex items-center justify-center !px-[16px] py-5 md:h-[227px] md:!px-6'
          style={{
            background: 'linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)',
          }}
        >
          <div className='container mx-auto flex flex-col items-start justify-between gap-8 !px-[16px] md:flex-row md:items-center md:!px-6'>
            <div className='max-w-2xl flex-1'>
              <h1 className='mb-6 text-4xl leading-tight font-bold text-white md:text-[40px]'>
                Welcome to the Partner Portal!
              </h1>
              <p className='text-16px leading-relaxed text-white'>
                Build custom quotes, explore pricing scenarios, and access exclusive partner <br />
                <br /> resources.
              </p>
            </div>
            <div className='rounded-[8px] border border-[#00AEEF] lg:mr-[110px]'>
              <button className='p-[18px] text-[16px] font-medium md:px-[24px] md:py-[17px] md:text-[18px]'>
                NEW QUOTE
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className='py-16'>
        <div className='container mx-auto px-[16px] md:px-6'>
          <div
            className='h-auto w-full rounded-3xl px-5 py-[40px] text-center md:h-[304px] md:p-12'
            style={{
              background: 'linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)',
            }}
          >
            <h2 className='mb-6 text-4xl font-bold text-white md:text-[40px]'>
              Ready to Make It Official?
            </h2>

            <p className='mb-8 text-[12px] leading-relaxed font-medium text-white md:text-[16px]'>
              You've seen the pricing and the resources. The next step is to join our network of{' '}
              <br /> successful partners.
            </p>
            <Link
              to={'/become-a-partner'}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <button className='rounded-[8px] bg-white px-4 py-4 text-[16px] font-bold !text-[#F1511B] md:w-[589px]'>
                Become an Official Partner Now
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* form section */}
      <div className='py-20'>
        <div className='container mx-auto px-[16px] md:px-6'>
          <div className='grid grid-cols-1 items-start gap-8 lg:grid-cols-5'>
            {/* Left Column - Calculator Form */}
            <div className='relative col-span-5 rounded-[24px] bg-[#00AEEF3D] p-8 backdrop-blur-sm lg:col-span-3'>
              <div
                className='absolute inset-0 z-0 rounded-[26px] p-[2px]'
                style={{
                  background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }}
              />
              <div className='mb-8'>
                <h1 className='relative z-10 mb-4 text-[24px] font-medium text-white'>
                  Vijilan Pricing Calculator
                </h1>
                <p className='text-[12px] text-white md:text-[16px]'>
                  Enter the number of assets for your client to generate an <br /> estimated monthly
                  cost.
                </p>
              </div>

              {/* ThreatRemediate Modules */}
              <div className='mb-8'>
                <h2 className='mb-6 text-[16px] font-bold !text-[#00AEEF]'>
                  ThreatRemediate™ (TRX) Modules...
                </h2>

                {/* TRX Endpoint */}
                <div className='mb-6'>
                  <div className='mb-3 flex items-center justify-between'>
                    <span className='text-[12px] text-white md:text-[16px]'>
                      TRX Endpoint (EDR/XDR)
                    </span>
                    <span className='text-[11px] !text-[#00AEEF]'>$5/endpoint</span>
                  </div>
                  <div className='relative w-full'>
                    <select
                      className='w-full rounded-[16px] border border-none bg-[#97D0FA3D] px-[16px] py-[18px] text-[12px] focus:border-1 focus:bg-[#00AEEF3D] focus:ring-1 focus:ring-[#FFFFFF80] focus:outline-none md:text-[16px]'
                      defaultValue=''
                    >
                      <option value='' disabled className='!text-black'>
                        Number of Endpoints
                      </option>
                      <option value='1' className='!text-black'>
                        1
                      </option>
                      <option value='2' className='!text-black'>
                        2
                      </option>
                      <option value='3' className='!text-black'>
                        3
                      </option>
                    </select>
                  </div>
                </div>

                {/* TRX Identity */}
                <div className='mb-6'>
                  <div className='mb-3 flex items-center justify-between'>
                    <span className='text-[12px] text-white md:text-[16px]'>TRX Identity</span>
                    <span className='text-[11px] !text-[#00AEEF]'>$3/user</span>
                  </div>
                  <div className='relative'>
                    <select
                      className='w-full rounded-[16px] border border-none bg-[#97D0FA3D] px-[16px] py-[18px] text-[12px] focus:border-1 focus:bg-[#00AEEF3D] focus:ring-1 focus:ring-[#FFFFFF80] focus:outline-none md:text-[16px]'
                      defaultValue=''
                    >
                      <option value='' disabled className='!text-black'>
                        Number of users
                      </option>
                      <option value='1' className='!text-black'>
                        1
                      </option>
                      <option value='2' className='!text-black'>
                        2
                      </option>
                      <option value='3' className='!text-black'>
                        3
                      </option>
                    </select>
                  </div>
                </div>

                {/* TRX Visibility */}
                <div className='mb-6'>
                  <div className='mb-3 flex items-center justify-between'>
                    <span className='text-[12px] text-white md:text-[16px]'>
                      TRX Visibility (Exposure)
                    </span>
                    <span className='text-[11px] !text-[#00AEEF]'>$3/endpoint</span>
                  </div>
                  <div className='relative'>
                    <select
                      className='w-full rounded-[16px] border border-none bg-[#97D0FA3D] px-[16px] py-[18px] text-[12px] focus:border-1 focus:bg-[#00AEEF3D] focus:ring-1 focus:ring-[#FFFFFF80] focus:outline-none md:text-[16px]'
                      defaultValue=''
                    >
                      <option value='' disabled className='!text-black'>
                        Number of Endpoints
                      </option>
                      <option value='1' className='!text-black'>
                        1
                      </option>
                      <option value='2' className='!text-black'>
                        2
                      </option>
                      <option value='3' className='!text-black'>
                        3
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Additional Services */}
              <div className='mb-8'>
                <h2 className='mb-6 text-[16px] font-bold !text-[#00AEEF]'>Additional Services</h2>

                {/* Critical Servers */}
                <div className='mb-6'>
                  <div className='mb-3 flex items-center justify-between'>
                    <span className='text-[12px] text-white md:text-[16px]'>Critical Servers</span>
                    <span className='text-[11px] !text-[#00AEEF]'>$30/server</span>
                  </div>
                  <div className='relative'>
                    <select
                      className='w-full rounded-[16px] border border-none bg-[#97D0FA3D] px-[16px] py-[18px] text-[12px] focus:border-1 focus:bg-[#00AEEF3D] focus:ring-1 focus:ring-[#FFFFFF80] focus:outline-none md:text-[16px]'
                      defaultValue=''
                    >
                      <option value='' disabled className='!text-black'>
                        Number of servers
                      </option>
                      <option value='1' className='!text-black'>
                        1
                      </option>
                      <option value='2' className='!text-black'>
                        2
                      </option>
                      <option value='3' className='!text-black'>
                        3
                      </option>
                    </select>
                  </div>
                </div>

                {/* Firewalls & Security Appliances */}
                <div className='mb-6'>
                  <div className='mb-3 flex items-center justify-between'>
                    <span className='text-[12px] text-white md:text-[16px]'>
                      Firewalls & Security Appliances
                    </span>
                    <span className='text-[11px] !text-[#00AEEF]'>$99/appliance</span>
                  </div>
                  <div className='relative'>
                    <select
                      className='w-full rounded-[16px] border border-none bg-[#97D0FA3D] px-[16px] py-[18px] text-[12px] focus:border-1 focus:bg-[#00AEEF3D] focus:ring-1 focus:ring-[#FFFFFF80] focus:outline-none md:text-[16px]'
                      defaultValue=''
                    >
                      <option value='' disabled className='!text-black'>
                        Number of Application
                      </option>
                      <option value='1' className='!text-black'>
                        1
                      </option>
                      <option value='2' className='!text-black'>
                        2
                      </option>
                      <option value='3' className='!text-black'>
                        3
                      </option>
                    </select>
                  </div>
                </div>

                {/* Cloud Sources */}
                <div className='mb-6'>
                  <div className='mb-3 flex items-center justify-between'>
                    <span className='text-[12px] text-white md:text-[16px]'>
                      Cloud Sources and Cloud Applications
                    </span>
                    <span className='text-[11px] !text-[#00AEEF]'>$99/appliance</span>
                  </div>
                  <div className='relative'>
                    <select
                      className='w-full rounded-[16px] border border-none bg-[#97D0FA3D] px-[16px] py-[18px] text-[12px] focus:border-1 focus:bg-[#00AEEF3D] focus:ring-1 focus:ring-[#FFFFFF80] focus:outline-none md:text-[16px]'
                      defaultValue=''
                    >
                      <option value='' disabled className='!text-black'>
                        Number of Cloud Sources and Cloud Applications
                      </option>
                      <option value='1' className='!text-black'>
                        1
                      </option>
                      <option value='2' className='!text-black'>
                        2
                      </option>
                      <option value='3' className='!text-black'>
                        3
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Discount Button */}
              <div className='mx-auto flex w-fit items-center rounded-[8px] border border-[#00AEEF]'>
                <button className='p-[18px] text-[16px] font-medium text-white transition-colors md:px-[24px] md:py-[16px] md:text-[18px]'>
                  APPLY 15% DISCOUNT FOR UPFRONT ANNUAL PAYMENT
                </button>
              </div>
            </div>

            {/* Right Column - Quote Summary */}
            <div className='col-span-5 gap-5 space-y-6 md:flex lg:col-span-2 lg:flex-col'>
              {/* Your Estimated Quote */}
              <div className='relative rounded-[24px] bg-[#00AEEF3D] px-8 py-[48px] backdrop-blur-sm'>
                <div
                  className='absolute inset-0 z-0 rounded-[26px] p-[2px]'
                  style={{
                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                />
                <h2 className='mb-6 text-center text-[28px] font-bold'>Your Estimated Quote</h2>

                <div className='mb-2'>
                  <div className='mb-4 flex items-center justify-between'>
                    <span
                      className='text-[21px] font-bold text-white'
                      style={{ color: '#FFFFFF80' }}
                    >
                      SubTotal Monthly:
                    </span>
                    <span className='mr-3 text-[21px] !text-[#00AEEF]'>{totals.subtotal}</span>
                  </div>

                  <div className='rounded-[11px] border border-[#00AEEF] bg-[#567286] px-6 py-3'>
                    <div className='flex items-center justify-between'>
                      <span className='text-[21px] font-bold !text-[#00AEEF]'>
                        Total Monthly Cost:
                      </span>
                      <span className='text-[21px] font-bold !text-[#00AEEF]'>
                        {totals.totalMonthlyCost}
                      </span>
                    </div>
                  </div>
                </div>

                <div className='space-y-2'>
                  <h3 className='text-[21px] font-bold text-[#F5F5F5]'>Quote Actions</h3>

                  <button className='w-full rounded-[11px] border border-[#00AEEF] bg-[#567286] px-7 py-3 text-start text-[21px] font-bold !text-[#00AEEF] transition-colors'>
                    Save Quote as a PDF
                  </button>

                  <button className='w-full rounded-[11px] border border-[#00AEEF] bg-[#567286] px-7 py-3 text-start text-[21px] font-bold text-white'>
                    Start a New Quote
                  </button>
                </div>
              </div>

              {/* Related Articles */}
              <div className='relative rounded-[24px] border border-[#FFFFFF20] bg-[#00AEEF3D] px-8 py-[60px] backdrop-blur-sm lg:ml-10'>
                <div
                  className='absolute inset-0 z-0 rounded-[26px] p-[2px]'
                  style={{
                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                />
                <h2 className='mb-6 text-center text-[27px] font-bold text-white'>
                  Related Articles
                </h2>

                <div className='space-y-8'>
                  {[1, 2, 3].map((item) => (
                    <div
                      key={item}
                      className='border-b border-[#FFFFFF42] px-6 pb-4 last:border-b-0'
                    >
                      <h3 className='mb-2 text-[18px] font-medium text-white'>
                        Our New Integration with <br /> CrowdStrike Falcon Cloud <br /> Security
                      </h3>
                      <p className='text-[16px] font-light text-[#F1EAFA]'>June 13, 2025</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <section className='py-16'>
        <div className='container mx-auto px-[16px] md:px-6'>
          <div
            className='rounded-[24px]'
            style={{
              background: 'linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)',
            }}
          >
            <div className='w-full'>
              {/* Main container with dotted border */}
              <div className='rounded-lg px-5 py-[83px] md:px-[100px] lg:px-[140px]'>
                {/* Header */}
                <div className='mb-12 text-center'>
                  <h1 className='mb-2 text-4xl font-bold text-white'>
                    <span className='text-2xl font-bold md:text-[40px]'>
                      Your Go-to-Market Toolkit
                    </span>
                  </h1>
                </div>

                {/* Tools Grid */}
                <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                  {tools.map((tool, index) => (
                    <div
                      key={index}
                      className='relative cursor-pointer rounded-[10px] bg-[#00AEEF3D] p-6 backdrop-blur-sm'
                    >
                      <div
                        className='absolute inset-0 z-0 rounded-[10px] p-[1px]'
                        style={{
                          background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                          WebkitMask:
                            'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                          WebkitMaskComposite: 'xor',
                          maskComposite: 'exclude',
                        }}
                      />
                      {/* Icon */}
                      <div className='mb-4 flex justify-center'>
                        <div className='relative'>
                          <img src={tool.icon} alt='' className='h-[64px] w-[64px]' />
                        </div>
                      </div>

                      {/* Content */}
                      <div className='text-center'>
                        <h3 className='font-mediium mb-3 text-[16px] text-white'>{tool.title}</h3>
                        <p className='text-[12px] leading-relaxed text-white'>{tool.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingTool;
