import React, { useState, useEffect } from 'react';
import { Plus, Minus } from 'lucide-react';
import Clipboard from '@images/Clipboard Approve.png';
import GraphReport from '@images/Graph Report.png';
import CardContent from '@components/CardContent';

import chainIcon from '@images/chain-icons.png';
import rocket from '../../Assets/Rocket.png';
import sheildIcon from '../../Assets/sheildIcon.png';
import TaskCheck from '@images/task-check.png';
import TimeIcon from '@images/timeIcon.png';
import Heading_Btn from '@components/Heading_Btn';
import { CardContentData1 } from '@app/Constant/Constant';
import RocketIcon from '@images/rocketIcon.png';
import lockIcon from '../../Assets/lock.png';
import bannerBg from '../../images/ban-bg.png';
import bannerBgTwo from '../../images/bg-grd.png';
import contentTwo from '../../images/cc-bg.png';
import contentThree from '../../images/z-bg.png';
import serveBgFour from '../../images/serve-bc.png';

// Custom Card Component
const Card = ({ children, className = '', ...props }) => {
  return (
    <div className={` ${className}`} {...props}>
      {children}
    </div>
  );
};

const CardContentData = ({ children, className = '', ...props }) => {
  return (
    <div className={` ${className}`} {...props}>
      {children}
    </div>
  );
};

const VijilanMspPartner = () => {
  const [openIndex, setOpenIndex] = useState(null);

    useEffect(() => {
      document.body.classList.add('home-body');
  
      return () => {
        document.body.classList.remove('home-body');
      };
    }, []);

  const faqData = [
    'What does Vijilan do for MSPs?',
    'How does Vijilan help with compliance?',
    'Can Vijilan integrate with my current tools?',
    'Is 24/7 monitoring available?',
    'How is Vijilan different from a traditional SOC?',
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section className='relative z-[1] overflow-x-clip px-6 pt-[130px] pb-[50px] text-center sm:pt-[150px]'>
        <img src={bannerBg} alt='Image' className='ban-bg-two' />
        <img src={bannerBgTwo} alt='Image' className='bg-grd-two' />
        <Heading_Btn
          h1={'Build Your Profitable Security Practice on\nOur Platform'}
          desc={
            'Leverage our 24/7 US-Based SOC, AI-driven technology, and channel-first model to\ndeliver enterprise-grade  cyber security. No minimums, no complexity, no high startup\ncosts.'
          }
          rating='★★★★★  |  Trusted by over 200 MSPs worldwide '
          btn1='Apply to Become a partner'
          btn2='DOWNLOAD PARTNER KIT'
          url={'/become-a-partner'}
        />
      </section>
      <section className='relative z-10 pb-[120px]'>
        <div className='container mx-auto px-[16px] md:px-6'>
          <h2 className='mb-12 text-center text-2xl font-bold text-white md:text-[40px]'>
            Go-to-Market in Days not Months
          </h2>
          <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
            <Card
              className='relative overflow-hidden rounded-[24px] p-6'
              style={{
                background: `linear-gradient(0deg, rgba(0, 0, 0, 0.33), rgba(0, 0, 0, 0.33)),
                       linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2))`,
                backgroundClip: 'padding-box',
              }}
            >
              <div
                className='absolute inset-0 z-0 rounded-[24px] p-[1px]'
                style={{
                  background: `conic-gradient(from 180deg at 50% 50%, #FF98E2 0deg, #FFC876 35.77deg, #79FFF7 153.75deg, #9F53FF 258.75deg, #FF98E2 360deg)`,
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                  borderRadius: '24px',
                }}
              />
              <CardContentData className='relative z-10 p-0'>
                <div className='mb-4 flex items-center gap-5'>
                  <img src={Clipboard} alt='' className='h-[50px] w-[40px]' />
                  <span className='text-[18px]' style={{ color: '#00AEEF' }}>
                    1. Apply Online
                  </span>
                </div>
                <p className='text-[16px] text-[#FFFFFF]'>
                  Our simple, no-obligation application takes less than 5 minutes to complete.
                </p>
              </CardContentData>
            </Card>

            <Card
              className='relative overflow-hidden rounded-[24px] p-6'
              style={{
                background: `linear-gradient(0deg, rgba(0, 0, 0, 0.33), rgba(0, 0, 0, 0.33)), linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2))`,
                backgroundClip: 'padding-box',
              }}
            >
              <div
                className='absolute inset-0 z-0 rounded-[24px] p-[1px]'
                style={{
                  background: `conic-gradient(from 180deg at 50% 50%, #FF98E2 0deg, #FFC876 35.77deg, #79FFF7 153.75deg, #9F53FF 258.75deg, #FF98E2 360deg)`,
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                  borderRadius: '24px',
                }}
              />
              <CardContentData className='p-0'>
                <div className='mb-4 flex items-center gap-5'>
                  <img src={rocket} alt='' className='h-[40px] w-[34px]' />

                  <span className='text-[18px]' style={{ color: '#00AEEF' }}>
                    2. Fast Onboarding
                  </span>
                </div>
                <p className='text-[16px] text-[#FFFFFF]'>
                  Get access to our partner portal, training, and sales materials within 24 hours.
                </p>
              </CardContentData>
            </Card>
            <Card
              className='relative overflow-hidden rounded-[24px] p-6'
              style={{
                background: `linear-gradient(0deg, rgba(0, 0, 0, 0.33), rgba(0, 0, 0, 0.33)), linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2))`,
                backgroundClip: 'padding-box',
              }}
            >
              <div
                className='absolute inset-0 z-0 rounded-[24px] p-[1px]'
                style={{
                  background: `conic-gradient(from 180deg at 50% 50%, #FF98E2 0deg, #FFC876 35.77deg, #79FFF7 153.75deg, #9F53FF 258.75deg, #FF98E2 360deg)`,
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                  borderRadius: '24px',
                }}
              />
              <CardContentData className='p-0'>
                <div className='mb-4 flex items-center gap-5'>
                  <img src={GraphReport} alt='' className='h-[50px] w-[36px]' />

                  <span className='text-[18px]' style={{ color: '#00AEEF' }}>
                    3. Start Selling
                  </span>
                </div>
                <p className='text-[16px] text-[#FFFFFF]'>
                  Use our comprehensive sales enablement kit to close your first deal this week.
                </p>
              </CardContentData>
            </Card>
          </div>
        </div>
      </section>
      <section className='relative z-[1] overflow-x-clip'>
        <img src={contentTwo} alt='Image' className='cc-bg' />
        <div className='container mx-auto px-[16px] md:px-6'>
          <h2 className='mb-12 text-center text-2xl font-bold text-white md:text-[40px]'>
            A Partnership Designed for Your Growth
          </h2>
          <div className='grid grid-cols-1 gap-x-6 gap-y-[24px] md:grid-cols-2 lg:grid-cols-3'>
            <div
              className={`bg-filt relative flex flex-col items-center justify-center rounded-[16px] bg-[#00AEEF3D] !px-[24px] py-[32px] lg:h-[389px]`}
            >
              <div
                className='absolute inset-0 z-0 rounded-[16px] p-[2px] text-center'
                style={{
                  background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }}
              />
              <div className='my-4 flex items-center justify-center rounded-lg bg-cyan-400'>
                <img src={lockIcon} alt='' className='h-[72px] !w-[72px]' />
              </div>
              <h3 className='mb-3 text-center text-[24px] font-bold text-white'>Unlock New MRR</h3>
              <p className='text-center text-white'>
                Add high-margin security services to your portfolio. Our model is built to maximize
                your Monthly Recurring Revenue and profitability.
              </p>
            </div>

            <div
              className={`bg-filt relative flex flex-col items-center justify-center rounded-[16px] bg-[#00AEEF3D] !px-[24px] py-[32px] lg:h-[297px]`}
            >
              <div
                className='absolute inset-0 z-0 rounded-[16px] p-[2px] text-center'
                style={{
                  background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }}
              />
              <div className='my-4 flex items-center justify-center rounded-lg bg-cyan-400'>
                <img src={TimeIcon} alt='' className='h-[72px] !w-[72px]' />
              </div>
              <h3 className='mb-3 text-center text-[24px] font-bold text-white'>
                Your Instant 24/7 SOC
              </h3>
              <p className='text-center text-white'>
                Gain an immediate SOC 2 Type 2 certified Security Operations Center without the
                overhead. Our experts become an extension of your team.
              </p>
            </div>

            <div
              className={`bg-filt relative flex flex-col items-center justify-center rounded-[16px] bg-[#00AEEF3D] !px-[24px] py-[32px] lg:h-[434px]`}
            >
              <div
                className='absolute inset-0 z-0 rounded-[16px] p-[2px] text-center'
                style={{
                  background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }}
              />
              <div className='my-4 flex items-center justify-center rounded-lg bg-cyan-400'>
                <img src={RocketIcon} alt='' className='h-[72px] !w-[72px]' />
              </div>
              <h3 className='mb-3 text-center text-[24px] font-bold text-white'>
                Go-to-Market Enablement
              </h3>
              <p className='text-center text-white'>
                Access our comprehensive \"ThreatRemediator™\" Enablement Kit with co-brandable
                materials, sales decks, and proposal generators to win more deals.
              </p>
            </div>

            <div
              className={`bg-filt relative flex flex-col items-center justify-center rounded-[16px] bg-[#00AEEF3D] !px-[24px] py-[32px] lg:-mt-[43px] lg:h-[345px]`}
            >
              <div
                className='absolute inset-0 z-0 rounded-[16px] p-[2px] text-center'
                style={{
                  background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }}
              />
              <div className='my-4 flex items-center justify-center rounded-lg bg-cyan-400'>
                <img src={sheildIcon} alt='' className='h-[72px] !w-[72px]' />
              </div>
              <h3 className='mb-3 text-center text-[24px] font-bold text-white'>
                Radical Flexibility & No Risk
              </h3>
              <p className='text-center text-white'>
                Benefit from our channel-first approach with no minimum commitments. Full
                white-labeling, and a 30-day risk-free opt-out trial.
              </p>
            </div>

            <div
              className={`bg-filt relative flex flex-col items-center justify-center rounded-[16px] bg-[#00AEEF3D] !px-[24px] py-[32px] lg:-mt-[140px] lg:h-[405px]`}
            >
              <div
                className='absolute inset-0 z-0 rounded-[16px] p-[2px] text-center'
                style={{
                  background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }}
              />
              <div className='my-4 flex items-center justify-center rounded-lg bg-cyan-400'>
                <img src={TaskCheck} alt='' className='h-[72px] !w-[72px]' />
              </div>
              <h3 className='mb-3 text-center text-[24px] font-bold text-white'>
                Simplified Compliance
              </h3>
              <p className='text-center text-white'>
                Effortlessly support your clients' compliance requirements, including HIPAA, GDPR,
                PCI DSS, and CMMC. Vijilan provides detailed reporting, audit-ready documentation,
                and compliance expertise—reducing your workload and minimizing regulatory risks.
              </p>
            </div>

            <div
              className={`bg-filt relative flex flex-col items-center justify-center rounded-[16px] bg-[#00AEEF3D] !px-[24px] py-[32px] lg:h-[419px]`}
            >
              <div
                className='absolute inset-0 z-0 rounded-[16px] p-[2px] text-center'
                style={{
                  background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }}
              />
              <div className='my-4 flex items-center justify-center rounded-lg bg-cyan-400'>
                <img src={chainIcon} alt='' className='h-[72px] !w-[72px]' />
              </div>
              <h3 className='mb-3 text-center text-[24px] font-bold text-white'>
                Vendor-Agnostic Integration
              </h3>
              <p className='text-center text-white'>
                Seamlessly integrate with your clients' existing security tools and infrastructure.
                Vijilan supports extensive integrations across firewalls, endpoints, cloud
                platforms, and identity solutions, giving you unmatched flexibility without vendor
                lock-in.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='relative z-10 pt-[120px]'>
        <div className='container mx-auto px-[16px] text-center md:px-6'>
          <h2 className='mb-2 text-2xl font-bold text-white md:text-[40px]'>
            A Partnership Tier for Every Stage of
            <br />
            Your Growth
          </h2>
          <p className='mb-12 text-[18px] text-[#FFFFFF]'>
            Our program is designed to meet you where you are and help you scale your security
            offerings <br /> profitably.
          </p>
          <Card className='relative rounded-[8px] bg-[#00AEEF3D] px-[30px] py-[30px]'>
            <div
              className='absolute inset-0 z-0 rounded-[8px] p-[1px]'
              style={{
                background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
                 linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
              }}
            />
            <CardContentData className='p-0'>
              <p className='text-left text-[18px] text-white'>
                A detailed comparison table of Bronze, Silver, and Gold Tiers would be presented
                here, outlining services, support, and benefits for each level as defined in the
                development plan.
              </p>
            </CardContentData>
          </Card>
        </div>
      </section>
      <section className='relative z-[1] pt-[60px]'>
        <img src={contentThree} alt='Image' className='z-bg' />
        <div className='container mx-auto px-[16px] md:px-6'>
          <div className='grid gap-8 md:grid-cols-2'>
            <Card className='rounded-[10px] border-l-2 border-[#00AEEF] bg-[#082235] p-8'>
              <CardContentData className='p-0 text-center'>
                <h3 className='mb-6 text-[24px] font-medium text-white'>What Our Partners say</h3>
                <blockquote className='mb-6 text-[20px] leading-relaxed text-white'>
                  "Our security MRR increased by 30% within 6 months of partnering with Vijilan.
                  Their SOC is world-class, and the active remediation in ThreatRemediate is a game-
                  changer for our clients."
                </blockquote>
                <p className='text-[14px] font-medium' style={{ color: '#00AEEF' }}>
                  — Alex Johnson, CEO of a Silver Tier MSP Partner
                </p>
              </CardContentData>
            </Card>

            <Card className='rounded-[10px] bg-[#082235] p-8'>
              <CardContentData className='p-0 text-center'>
                <h3 className='mb-6 text-[24px] font-medium text-white'>
                  A Message to Our Future Partners
                </h3>
                <blockquote className='mb-6 text-[20px] leading-relaxed text-white'>
                  "We built our partner program on a foundation of trust and mutual success. We
                  succeed when you succeed. That's why we provide the best technology, an expert
                  SOC, and the GTM support you need to win."
                </blockquote>
              </CardContentData>
            </Card>
          </div>
        </div>
      </section>

      <section className='relative z-[1] pt-[120px]'>
        <img src={serveBgFour} alt='Image' className='serve-bc-two' />
        <div className='container mx-auto px-[16px] md:px-6'>
          <h2 className='mb-12 text-center text-2xl font-bold text-white md:text-[40px]'>
            Frequently Asked Questions
          </h2>

          <div className='space-y-4'>
            {faqData.map((question, index) => {
              const isOpen = openIndex === index;

              return (
                <Card
                  key={index}
                  className='relative rounded-[8px] transition-all duration-300'
                  style={{
                    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.33), rgba(0, 0, 0, 0.33)), linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2))`,
                  }}
                >
                  <div
                    className='absolute inset-0 z-0 rounded-[8px] p-[1px]'
                    style={{
                      background: `conic-gradient(from 180deg at 50% 50%, #FF98E2 0deg, #FFC876 35.77deg, #79FFF7 153.75deg, #9F53FF 258.75deg, #FF98E2 360deg)`,
                      WebkitMask:
                        'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                    }}
                  />

                  <CardContentData className='relative z-10'>
                    <button
                      className='flex w-full items-center justify-between text-left text-white py-[24px] px-[24px]'
                      onClick={() => toggleAccordion(index)}
                    >
                      <span className='text-[16px]'>{question}</span>
                      {isOpen ? (
                        <Minus className='h-5 w-5 text-gray-400' />
                      ) : (
                        <Plus className='h-5 w-5 text-gray-400' />
                      )}
                    </button>

                    {isOpen && (
                      <div className='pb-[24px] pl-[24px] text-sm text-gray-300'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.
                      </div>
                    )}
                  </CardContentData>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default VijilanMspPartner;
