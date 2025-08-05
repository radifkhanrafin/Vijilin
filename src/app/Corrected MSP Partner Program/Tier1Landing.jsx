import Heading_Btn from '@components/Heading_Btn';
import NavyBlueBackground from '@components/NavyBlueBackground';
import ServiceCard from '@components/ServiceCard';
import desktop from '../../Assets/desktop.svg';
import industry from '../../Assets/indtrustry.svg';
import meg from '../../Assets/meg.svg';
import avatar from '../../Assets/avatarCall.svg';
import note from '../../Assets/note.svg';
import boxTick from '../../Assets/Tick Box.svg';
import React from 'react';
import SecurityCard from '@components/SecurityCard';

const Tier1Landing = () => {
  const services = [
    {
      title: `Sample Identity\nProtection Email`,
      description: `Ready-to-send email campaign to\nintroduce identity protection services\nto your clients`,
      designBtn: 'download email template',
      btnIcon: false,
    },
    {
      title: 'Sample Landing Page Copy',
      description: `Copy-and-paste website content to promote identity protection services`,
      designBtn: 'download page copy',
      btnIcon: false,
    },
    {
      title: `"Guarding the Vault"\nGuide`,
      description: `Client-facing lead magnet specifically\ndesigned for financial services`,
      designBtn: 'download pdf guide',
      btnIcon: false,
    },
    {
      title: 'Website Copy Snippets',
      description: `Professional service descriptions and\nvalue propositions for your website`,
      designBtn: 'download copy kit',
      btnIcon: false,
    },
    {
      title: 'Sample Landing Page Copy',
      description: `Copy-and-paste website content to\npromote identity protection services`,
      designBtn: 'download page copy',
      btnIcon: false,
    },
    {
      title: `"Guarding the Vault"\nGuide`,
      description: `Client-facing lead magnet specifically\ndesigned for financial services`,
      designBtn: 'download pdf guide',
      btnIcon: false,
    },
  ];

  const strategicCardData = [
    {
      icon: desktop,
      title: 'Ready to Use',
      description: `No need to create content from scratch. Our materials are designed by marketing experts and tested with real MSPs.`,
      height: '390px',
    },
    {
      icon: industry,
      title: 'Industry-Specific',
      description: `Tailored messaging for different verticals ensures your outreach resonates with each target market.`,
      height: '300px',
    },
    {
      icon: meg,
      title: 'Proven Results',
      description: `These materials have helped MSPs close deals faster and increase their cybersecurity revenue.`,
      height: '434px',
    },
    {
      icon: avatar,
      title: 'Always Updated',
      description: `Content is regularly refreshed to reflect the latest threats, compliance requirements, and market trends.`,
      height: '335px',
      marginTop: '-45px',
    },
    {
      icon: note,
      title: 'Scalable for Every MSP',
      description: `From solo operators to large-scale service providers, our kits flex to fit your growth strategy.`,
      height: '405px',
      marginTop: '-120px',
    },
    {
      icon: boxTick,
      title: 'White-Labeled & Customizable',
      description: `Easily rebrand all content with your logo, colors, and contact info—ready to share with clients.`,
      height: '420px',
    },
  ];
  return (
    <>
      <div>
        <section className='pt-[150px]'>
          <div className='container mx-auto px-[16px] md:px-6'>
            <div className='mb-[70px] text-center'>
              <h1 className='mb-5 text-3xl leading-tight font-bold text-white md:text-[40px] lg:text-5xl'>
                Sales & Marketing Enablement for MSPs
              </h1>
              <p className='text-16px leading-relaxed text-white'>
                Help your clients. Grow your business. Access ready-to-use cybersecurity marketing{' '}
                <br /> kits.
              </p>
            </div>
            <div className='mb-12 text-center'>
              <h1 className='mb-5 text-3xl leading-tight font-bold text-white md:text-[40px] lg:text-5xl'>
                🚀 Start Using These Resources Right Now
              </h1>
              <p className='text-16px leading-relaxed text-white'>
                No email required. Download and start growing your business today.
              </p>
            </div>
          </div>
        </section>

        <section className='pb-16'>
          <div className='container mx-auto px-[16px] md:px-6'>
            <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  index={index}
                  service={service}
                  onAddIcon={() => alert(`Add icon clicked for ${service.title}`)}
                  textStart={true}
                />
              ))}
            </div>
          </div>
        </section>

        <section className='py-16'>
          <div className='container mx-auto px-[16px] md:px-6'>
            <div
              className='rounded-[24px]'
              style={{ background: 'linear-gradient(0deg, #082235 54%, #00AEEF 328%)' }}
            >
              <div className='px-0 pt-10 pb-20 md:px-12 lg:px-30'>
                <h1 className='mb-8 text-center text-xl font-semibold md:text-4xl lg:font-bold'>
                  📧 Email Template Preview
                </h1>

                <div>
                  <div className='relative rounded-2xl border border-[#00AEEF] bg-transparent p-5'>
                    <div className='absolute top-[5%] left-0 h-[90%] w-1 bg-[#30A1F6]'></div>

                    <h2 className='mb-2 text-lg font-thin text-white md:font-semibold lg:font-bold'>
                      {' '}
                      Subject: Is Your Business Protected from Identity Theft?
                    </h2>
                    <p className='mb-1 text-white'>
                      <span className='mb-2 text-xl font-bold'>Hi [Client Name],</span>
                    </p>
                    <p className='text-white-400 mb-2 text-[16px] font-medium'>
                      Identity-based attacks have increased 87% this year, with cybercriminals{' '}
                      <br /> specifically targeting businesses like yours. Many of our clients were{' '}
                      <br /> shocked to learn how vulnerable their employees' credentials actually{' '}
                      <br /> were...
                    </p>
                    <p className='text-xl font-bold'>
                      📥 Download the complete email template above
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='py-16'>
          <div className='container mx-auto px-[16px] md:px-6'>
            <div
              className='rounded-[24px]'
              style={{
                background: 'linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)',
              }}
            >
              <div className='mx-auto rounded-lg bg-transparent p-10 font-sans text-white'>
                <h1 className='mt-5 mb-10 text-center text-2xl font-bold md:text-5xl'>
                  Targeting Other Industries?
                </h1>
                <h2 className='mb-6 text-center text-xl font-thin opacity-90 md:font-semibold lg:font-bold'>
                  Manufacturing • Legal • Education • Government • Healthcare
                </h2>

                <p className='mx-auto mb-8 text-center text-xl font-thin opacity-80 md:font-semibold lg:font-bold'>
                  Access even more ready-to-use sales kits by entering your work email below. Get
                  the complete MSP toolkit <br /> with industry-specific content.
                </p>

                <div className='mb-8 flex flex-col justify-center gap-3 overflow-x-auto py-2 md:flex-row'>
                  <div
                    className='flex-shrink-0 cursor-pointer rounded-[65px] border border-[#F5F5F5] px-[20px] py-[15px] text-[18px] font-bold'
                    style={{
                      background: 'linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)',
                    }}
                  >
                    Healthcare compliance kit
                  </div>
                  <div
                    className='flex-shrink-0 cursor-pointer rounded-[65px] border border-[#F5F5F5] px-[20px] py-[15px] text-[18px] font-bold'
                    style={{
                      background: 'linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)',
                    }}
                  >
                    Legal sector Templates
                  </div>
                  <div
                    className='flex-shrink-0 cursor-pointer rounded-[65px] border border-[#F5F5F5] px-[20px] py-[15px] text-[18px] font-bold'
                    style={{
                      background: 'linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)',
                    }}
                  >
                    Manufacturing Security
                  </div>
                  <div
                    className='flex-shrink-0 cursor-pointer rounded-[65px] border border-[#F5F5F5] px-[20px] py-[15px] text-[18px] font-bold'
                    style={{
                      background: 'linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)',
                    }}
                  >
                    Education Safety Materials
                  </div>
                </div>

                <div className='mx-auto mb-10 max-w-sm'>
                  <input
                    type='email'
                    placeholder='Enter your email'
                    className='w-full rounded-md px-6 py-4 text-gray-800'
                  />
                </div>

                <div className='mb-10 text-center'>
                  <div
                    className='inline-block cursor-pointer rounded-md border-2 border-solid border-[#00AEEF] bg-transparent px-0 py-3 text-center font-semibold uppercase transition-all duration-200 select-none hover:border-[#00AEEF]/90 hover:bg-[#00AEEF]/10 md:px-6'
                    style={{ color: '#00AEEF' }}
                  >
                    unlock Msp Launch pad
                  </div>
                </div>

                <p className='mt-4 text-center text-sm opacity-70'>
                  Instant access to expanded sales kits • No spam, ever.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className='py-16'>
          <div className='container mx-auto px-[16px] md:px-6'>
            <div className='mx-auto max-w-6xl'>
              <div className='mb-12 text-center'>
                <h2 className='text-2xl font-bold tracking-tight text-white md:text-4xl lg:text-[40px]'>
                  Why MSPs Choose Vijilan's Enablement <br /> Resources
                </h2>
              </div>

              <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
                <div
                  className={`relative flex flex-col items-center justify-center rounded-[16px] bg-[#00AEEF3D] px-[21px] py-[32px] lg:h-[389px]`}
                >
                  <div
                    className='absolute inset-0 z-0 rounded-[16px] p-[2px] text-center'
                    style={{
                      background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                      WebkitMask:
                        'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                    }}
                  />
                  <div className='my-4 flex h-[100px] w-[100px] items-center justify-center'>
                    <img src={desktop} alt='' className='' />
                  </div>
                  <h3 className='mb-3 text-center text-[24px] font-bold text-white'>
                    Ready to Use
                  </h3>
                  <p className='text-center text-white'>
                    No need to create content from scratch. Our materials are designed by marketing
                    experts and tested with real MSPs.
                  </p>
                </div>

                <div
                  className={`relative flex flex-col items-center justify-center rounded-[16px] bg-[#00AEEF3D] px-[21px] py-[32px] lg:h-[297px]`}
                >
                  <div
                    className='absolute inset-0 z-0 rounded-[16px] p-[2px] text-center'
                    style={{
                      background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                      WebkitMask:
                        'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                    }}
                  />

                  <div className='my-4 flex h-[100px] w-[100px] items-center justify-center'>
                    <img src={industry} alt='' className='' />
                  </div>
                  <h3 className='mb-3 text-center text-[24px] font-bold text-white'>
                    Industry-Specific
                  </h3>
                  <p className='text-center text-white'>
                    Tailored messaging for different verticals ensures your outreach resonates with
                    each target market.
                  </p>
                </div>

                <div
                  className={`relative flex flex-col items-center justify-center rounded-[16px] bg-[#00AEEF3D] px-[21px] py-[32px] lg:h-[434px]`}
                >
                  <div
                    className='absolute inset-0 z-0 rounded-[16px] p-[2px] text-center'
                    style={{
                      background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                      WebkitMask:
                        'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                    }}
                  />
                  <div className='my-4 flex h-[100px] w-[100px] items-center justify-center'>
                    <img src={meg} alt='' className='' />
                  </div>
                  <h3 className='mb-3 text-center text-[24px] font-bold text-white'>
                    Proven Results
                  </h3>
                  <p className='text-center text-white'>
                    These materials have helped MSPs close deals faster and increase their
                    cybersecurity revenue.
                  </p>
                </div>

                <div
                  className={`relative flex flex-col items-center justify-center rounded-[16px] bg-[#00AEEF3D] px-[21px] py-[32px] lg:-mt-[43px] lg:h-[335px]`}
                >
                  <div
                    className='absolute inset-0 z-0 rounded-[16px] p-[2px] text-center'
                    style={{
                      background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                      WebkitMask:
                        'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                    }}
                  />
                  <div className='my-4 flex h-[100px] w-[100px] items-center justify-center'>
                    <img src={avatar} alt='' className='' />
                  </div>
                  <h3 className='mb-3 text-center text-[24px] font-bold text-white'>
                    Always Updated
                  </h3>
                  <p className='text-center text-white'>
                    Content is regularly refreshed to reflect the latest threats, compliance
                    requirements, and market trends.
                  </p>
                </div>

                <div
                  className={`relative flex flex-col items-center justify-center rounded-[16px] bg-[#00AEEF3D] px-[21px] py-[32px] lg:-mt-[135px] lg:h-[405px]`}
                >
                  <div
                    className='absolute inset-0 z-0 rounded-[16px] p-[2px] text-center'
                    style={{
                      background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                      WebkitMask:
                        'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                    }}
                  />
                  <div className='my-4 flex h-[100px] w-[100px] items-center justify-center rounded-lg'>
                    <img src={note} alt='' className='' />
                  </div>
                  <h3 className='mb-3 text-center text-[24px] font-bold text-white'>
                    Scalable for Every MSP
                  </h3>
                  <p className='text-center text-white'>
                    From solo operators to large-scale service providers, our kits flex to fit your
                    growth strategy.
                  </p>
                </div>

                <div
                  className={`relative flex flex-col items-center justify-center rounded-[16px] bg-[#00AEEF3D] px-[21px] py-[32px] lg:h-[419px]`}
                >
                  <div
                    className='absolute inset-0 z-0 rounded-[16px] p-[2px] text-center'
                    style={{
                      background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                      WebkitMask:
                        'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                    }}
                  />
                  <div className='my-4 flex h-[100px] w-[100px] items-center justify-center rounded-lg'>
                    <img src={boxTick} alt='' className='' />
                  </div>
                  <h3 className='mb-3 text-center text-[24px] font-bold text-white'>
                    White-Labeled & Customizable
                  </h3>
                  <p className='text-center text-white'>
                    Easily rebrand all content with your logo, colors, and contact info—ready to
                    share with clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Tier1Landing;
