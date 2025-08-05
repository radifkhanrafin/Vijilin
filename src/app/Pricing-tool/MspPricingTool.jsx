import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import email from '../../Assets/email.png';
import location from '../../Assets/location.png';
import linkedin from '../../Assets/linkedin.png';
import call from '../../Assets/call.png';
import line from '../../Assets/line.png';
import Heading_Btn from '@components/Heading_Btn';

const MspPricingTool = () => {
  const [activeTab, setActiveTab] = useState('Sales Inquiry');
  const tabs = ['Sales Inquiry', 'Become a partner', 'Support'];
  return (
    <div>
      <section className='flex items-center justify-center pt-[180px]'>
        <div className='container mx-auto px-[16px] text-center md:px-6'>
          {/* Header */}
          <div className='mb-12 text-center'>
            <h1 className='mb-5 text-3xl font-bold md:text-4xl lg:text-5xl'>Let's Connect</h1>
            <p className='text-lg font-medium'>
              Whether you're interested in our services, want to become a partner, or need <br />
              support, our team is here to help. Reach out and let's start the conversation.
            </p>
          </div>

          {/* Cards Grid */}
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
            {/* Sales & General Inquiries Card */}
            <div className='relative rounded-2xl bg-[#00AEEF3D] p-8 backdrop-blur-sm'>
              <div
                className='absolute inset-0 z-0 rounded-[16px] p-[2px]'
                style={{
                  background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }}
              />
              <div className='mt-12'>
                <div className='mx-auto flex items-center justify-center'>
                  <span className='rounded-[15px] bg-[#F1511B] px-[8px] py-[8px] text-[10px] font-semibold text-white'>
                    ADD ICON
                  </span>
                </div>
                <div className='mt-5'>
                  <h3 className='mb-5 text-center text-2xl font-medium text-white'>
                    Sales & General Inquiries
                  </h3>
                  <p className='mb-5 text-sm leading-relaxed text-white md:text-lg'>
                    Ready to explore how Vijilan can transform your security posture? Our sales team
                    is here to help.
                  </p>
                  <div className='space-y-5 text-center'>
                    <p className='block text-[16px] underline'>+1 (555) VIJILAN</p>
                    <p
                      className='block text-[14px] font-bold underline'
                      style={{ color: '#00AEEF' }}
                    >
                      sales@vijilan.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Address Card */}
            <div className='relative rounded-2xl bg-[#00AEEF3D] p-8 backdrop-blur-sm'>
              <div
                className='absolute inset-0 z-0 rounded-[16px] p-[2px]'
                style={{
                  background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }}
              />
              <div className='mt-12'>
                <div className='mx-auto flex items-center justify-center'>
                  <span className='rounded-[15px] bg-[#F1511B] px-[8px] py-[8px] text-[10px] font-semibold text-white'>
                    ADD ICON
                  </span>
                </div>
                <div className='mt-5'>
                  <h3 className='mb-5 text-center text-2xl font-medium text-white'>Our Address</h3>
                  <p className='mb-5 text-sm leading-relaxed text-white md:text-lg'>
                    Visit us at our state-of-the-art facility in South Florida's technology
                    corridor.
                  </p>
                  <div className='space-y-1 text-center text-[16px] text-white'>
                    <p className=''>Aventura Onyx Tower</p>
                    <p>1010 S Federal Hwy</p>
                    <p>Suite 1205</p>
                    <p>Aventura, FL 33180</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Partner & Customer Support Card */}
            <div className='relative rounded-2xl bg-[#00AEEF3D] p-8 backdrop-blur-sm'>
              <div
                className='absolute inset-0 z-0 rounded-[16px] p-[2px]'
                style={{
                  background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }}
              />
              <div className='mt-12'>
                <div className='mx-auto flex items-center justify-center'>
                  <span className='rounded-[15px] bg-[#F1511B] px-[8px] py-[8px] text-[10px] font-semibold text-white'>
                    ADD ICON
                  </span>
                </div>
                <div className='mt-5'>
                  <h3 className='mb-5 text-center text-2xl font-medium text-white'>
                    Partner & Customer Support
                  </h3>
                  <p className='mb-5 text-sm leading-relaxed text-white md:text-lg'>
                    For the fastest support, please use the official Partner Portal for tracked and
                    prioritized assistance....
                  </p>
                  <div className='mb-5 space-y-4 text-center'>
                    <p className='block text-[16px] underline'>+1 (555) VIJILAN</p>
                    <p
                      className='block text-[14px] font-bold text-[#00AEEF] underline'
                      style={{ color: '#00AEEF' }}
                    >
                      sales@vijilan.com
                    </p>
                  </div>
                  <div className='mx-auto flex w-fit items-center justify-center rounded-[7px] border border-[#00AEEF]'>
                    <button className='w-fit px-[13px] py-[14px] text-center text-white'>
                      ACCESS PORTAL SUPPORT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='relative overflow-hidden pb-16 pt-[120px]'>
        <div className='container mx-auto px-[16px] md:px-6'>
          <div className='relative z-10'>
            {/* Header */}
            <div className='mb-12 text-center'>
              <h1 className='mb-4 text-3xl font-bold text-white md:text-5xl'>
                Get in Touch with the Right Team
              </h1>
              <p className='text-lg text-white'>
                Choose the option that best fits your needs and we'll connect you with the right{' '}
                <br /> specialist.
              </p>
            </div>

            {/* Main Content */}
            <div className=''>
              <div className='relative overflow-hidden rounded-3xl bg-[#00AEEF3D] backdrop-blur-sm'>
                <div
                  className='absolute inset-0 z-0 rounded-[26px] p-[2px]'
                  style={{
                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                />

                <div className='mb-5 ml-auto flex flex-col items-center justify-center sm:flex-row md:w-4/5 lg:w-3/5 sm:space-x-1 drfg bg-[#00AEEF3D] px-4 lg:!pl-[48px] py-[24px] sm:py-2'>
                  <button
                    className='w-fit flex-1 px-[12px] py-3 text-[14px] font-bold md:px-4 md:text-[16px]'
                    style={{
                      border: '1px solid #00AEEF',
                      color: '#00AEEF',
                    }}
                  >
                    Sales Inquiry
                  </button>
                  <button className='flex-1 rounded-md px-[12px] py-3 text-[14px] font-bold text-[#00AEEF] md:px-4 md:text-[16px]'>
                    Become a partner
                  </button>
                  <button className='flex-1 rounded-md px-[12px] py-3 text-[14px] font-bold text-[#00AEEF] md:px-4 md:text-[16px]'>
                    Support
                  </button>
                </div>

                <div className='relative z-10 gap-[10px] gap-y-[32px] space-y-10 pb-10 lg:flex lg:space-y-0'>
                  {/* Left Side - Contact Info */}
                  <div className='flex flex-col justify-start px-[24px] lg:pl-10 lg:w-2/5'>
                    <div>
                      <h2 className='mb-2 text-2xl font-bold text-white md:text-[32px]'>
                        Get in Touch with the <br /> Right Team
                      </h2>
                      <p className='mb-[20px] text-sm text-white md:text-lg'>
                        Choose the option that best fits your needs <br /> and we'll connect you
                        with the right <br /> specialist.
                      </p>
                    </div>

                    <div className='space-y-4'>
                      {/* Phone */}
                      <div className='flex items-center space-x-3'>
                        <div className=''>
                          <img
                            src={call}
                            alt=''
                            className='h-[30px] w-[30px] md:h-[56px] md:w-[56px]'
                          />
                        </div>
                        <span className='text-sm text-white md:text-lg'>954-334-9988</span>
                      </div>

                      {/* Email */}
                      <div className='flex items-center space-x-3'>
                        <div className=''>
                          

                          <img src={email} className='h-[30px] w-[30px] md:h-[56px] md:w-[56px]' />
                        </div>
                        <span className='text-lg text-white'>info@vijilan.com</span>
                      </div>

                      {/* LinkedIn */}
                      <div className='flex items-center space-x-3'>
                        <div className=''>
                          <img
                            src={linkedin}
                            alt=''
                            className='h-[30px] w-[30px] md:h-[56px] md:w-[56px]'
                          />
                        </div>
                        <span className='text-lg text-white'>www.linkedin.com/vijilan</span>
                      </div>

                      {/* Address */}
                      <div className='flex items-center space-x-3'>
                        <div className=''>
                          <img
                            src={location}
                            alt=''
                            className='h-[30px] w-[30px] md:h-[56px] md:w-[56px]'
                          />
                        </div>
                        <div className='flex flex-col text-lg text-white'>
                          <div>20803 Biscayne Blvd #302 -</div>
                          <div>Aventura, Florida 33180</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='hidden lg:!block'>
                    <img src={line} alt='Divider' className='' />
                  </div>
                  {/* Right Side - Form */}
                  <div className='space-y-6 pr-[24px] pl-[24px] lg:!pl-[32px] lg:w-3/5'>
                    {/* Form Fields */}
                    <div className='relative z-10 grid sm:grid-cols-2 gap-4'>
                      <input
                        type='text'
                        name='firstName'
                        placeholder='Muhammad I'
                        className='w-full rounded-[16px] border border-none bg-[#97D0FA3D] px-[16px] py-[18px] text-[16px] focus:border-1 focus:bg-[#00AEEF3D] focus:ring-1 focus:ring-[#FFFFFF80] focus:outline-none'
                      />
                      <input
                        type='text'
                        name='lastName'
                        placeholder='Last Name *'
                        className='w-full rounded-[16px] border border-none bg-[#97D0FA3D] px-[16px] py-[18px] text-[16px] focus:border-1 focus:bg-[#00AEEF3D] focus:ring-1 focus:ring-[#FFFFFF80] focus:outline-none'
                      />
                    </div>
                    <div className='relative z-10 grid sm:grid-cols-2 gap-4'>
                      <input
                        type='email'
                        name='email'
                        placeholder='Work email *'
                        className='w-full rounded-[16px] border border-none bg-[#97D0FA3D] px-[16px] py-[18px] text-[16px] focus:border-1 focus:bg-[#00AEEF3D] focus:ring-1 focus:ring-[#FFFFFF80] focus:outline-none'
                      />
                      <input
                        type='tel'
                        name='phone'
                        placeholder='Phone Number *'
                        className='w-full rounded-[16px] border border-none bg-[#97D0FA3D] px-[16px] py-[18px] text-[16px] focus:border-1 focus:bg-[#00AEEF3D] focus:ring-1 focus:ring-[#FFFFFF80] focus:outline-none'
                      />
                    </div>

                    <div className='mb-2 text-sm text-white'>I'm interested in..</div>

                    <div className='relative z-10 grid sm:grid-cols-2 gap-4'>
                      <select
                        name='solution'
                        className='rounded-[16px] border bg-[#97D0FA3D] px-4 py-3 text-white outline-none focus:border-[#FFFFFF80] focus:bg-[#00AEEF3D] focus:ring-1 focus:ring-[#FFFFFF80]'
                      >
                        <option value=''>Select a solution</option>
                        <option
                          value='cybersecurity'
                          className='text-black'
                          style={{ color: 'black' }}
                        >
                          Cybersecurity
                        </option>
                        <option
                          value='consulting'
                          className='text-black'
                          style={{ color: 'black' }}
                        >
                          Consulting
                        </option>
                        <option value='support' className='text-black' style={{ color: 'black' }}>
                          Support
                        </option>
                      </select>
                      <input
                        type='text'
                        name='company'
                        placeholder='Company'
                        className='w-full rounded-[16px] border border-none bg-[#97D0FA3D] px-[16px] py-[18px] text-[16px] focus:border-1 focus:bg-[#00AEEF3D] focus:ring-1 focus:ring-[#FFFFFF80] focus:outline-none'
                      />
                    </div>

                    <textarea
                      name='message'
                      placeholder='Enter your message...'
                      rows={4}
                      className='relative z-10 w-full rounded-[16px] border border-none min-h-[210px] bg-[#97D0FA3D] px-[16px] py-[18px] text-[16px] focus:border-1 focus:bg-[#00AEEF3D] focus:ring-1 focus:ring-[#FFFFFF80] focus:outline-none'
                    />

                    <button
                      className='w-full rounded-[16px] py-4 text-[16px] font-semibold text-white'
                      style={{ background: 'linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)' }}
                    >
                      Send message to sales
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MspPricingTool;
