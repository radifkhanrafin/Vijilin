import { Play } from 'lucide-react';
import detect from '../../Assets/detect.png';
import arrow from '../../Assets/arrow.png';
import right from '../../Assets/right.png';
import head from '../../Assets/head.png';
import wa from '../../Assets/wa.png';
import note from '../../Assets/note.png';
import Heading_Btn from '@components/Heading_Btn';
import { Link } from 'react-router-dom';
import bannerBg from '../../images/ban-bg.png';
import bannerBgTwo from '../../images/bg-grd.png';
import contentTwo from '../../images/cc-bg.png';
import contentThree from '../../images/cc-bg-three.png';
import contentFour from '../../images/bg-grd-f.png';
import contentFive from '../../images/ert-bg.png';
import contentSix from '../../images/r-bg.png';
import { useEffect } from 'react';

const cardData = [
  {
    icon: detect,
    title: 'Detect',
    description: `Add high-margin security services to <br /> your portfolio. Our model is built to <br /> maximize your Monthly Recurring <br /> Revenue and profitability`,
    height: '390px',
  },
  {
    icon: arrow,
    title: 'Investigate & Validate',
    description: `Gain an immediate, SOC 2 Type 2 <br /> certified Security Operations Center <br /> without the overhead. Our experts <br /> become an extension of your team`,
    height: '300px',
  },
  {
    icon: wa,
    title: 'Fully Managed Cloud SIEM',
    description: `Access our comprehensive <br /> ThreatRemediate™ Enablement Kit <br /> with co-brandable materials, sales <br /> decks, and proposal generators to win <br /> more deals.`,
    height: '434px',
  },
  {
    icon: head,
    title: 'Always-On SOC Support',
    description: `Benefit from our channel-first <br /> approach with no minimum <br />commitments, full white-labeling, and a <br /> 30-day risk-free opt-out trial.`,
    height: '335px',
    marginTop: '40px',
  },
  {
    icon: note,
    title: 'Deliver Actionable Guidance',
    description: `Effortlessly support your clients' <br /> compliance requirements, including <br /> HIPAA, GDPR, PCI DSS, and CMMC. <br /> Vijilan provides detailed reporting, <br /> audit-ready documentation, and <br /> compliance expertise—reducing your <br /> workload and minimizing regulatory <br /> risks.`,
    height: '405px',
    marginTop: '130px',
  },
  {
    icon: right,
    title: 'Confirm & Close',
    description: `We work with your team via the portal <br /> or ticketing system to confirm the <br /> threat has been successfully resolved.`,
    height: '420px',
  },
];

const threatRespondService = () => {
    useEffect(() => {
      document.body.classList.add('home-body');
  
      return () => {
        document.body.classList.remove('home-body');
      };
    }, []);
  return (
    <>
      <section className='hr-section relative z-10 w-full overflow-x-clip pt-[130px] pb-[50px] text-center md:pt-[150px]'>
        <img src={bannerBg} alt='Image' className='ban-bg-two' />
        <img src={bannerBgTwo} alt='Image' className='bg-grd-two' />
        <div className='container mx-auto px-[16px] md:px-6'>
          <Heading_Btn
            h1=' Expert Detection. Actionable Guidance.'
            desc={
              'Vijilan ThreatRespond™ service provides 24/7 monitoring and threat detection from\nour expert SOC, delivering clear, step-by-step instructions for your internal team to\nremediate threats quickly and effectively.'
            }
            btn1='Watch the service overview'
            btn2='get an instant quote'
            url={'/videos-library'}
            url2={'/contact'}
          />
        </div>
      </section>
      <section>
        <div className='container mx-auto px-[16px] md:px-6'>
          <div className='text-center'>
            <h2 className='text-3xl font-bold text-white sm:text-4xl md:text-[40px]'>
              Understand ThreatRespond in 90 Seconds
            </h2>
            <p className='mt-2 text-[18px] text-[#FFFFFF]'>
              See how our expert guidance empowers your internal team to handle threats efficiently.
            </p>
            <div className='relative mt-12'>
              <div className='relative mx-auto flex aspect-video h-auto w-auto items-center justify-center rounded-[26px] bg-[#00AEEF3D] md:h-[500px] md:w-[621px]'>
                <div
                  className='absolute inset-0 z-0 rounded-[26px] p-[2px]'
                  style={{
                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
                 linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                />
                <button className='flex h-20 w-20 items-center justify-center rounded-full bg-cyan-400 transition-colors hover:bg-cyan-300'>
                  <Play className='ml-1 h-8 w-8 text-white' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='relative z-[1] overflow-x-clip pt-[120px]'>
        <img src={contentTwo} alt='Image' className='cc-bg-two' />
        <img src={contentThree} alt='Image' className='cc-bg-three' />
        <div className='container mx-auto px-[16px] md:px-6'>
          <div className='relative z-10'>
            <div className='mb-[100px] text-center'>
              <h2 className='mb-4 text-2xl font-bold tracking-tight text-white md:text-[40px]'>
                The Right Service for Your In-House Team
              </h2>
              <p className='text-[18px] text-[#FFFFFF]'>
                Choose the solution that matches your organization's capabilities and needs
              </p>
            </div>

            <div className='grid gap-8 lg:grid-cols-2'>
              {/* Left Card */}
              <div className='h-fit rounded-[10px] bg-[#082235] p-5 backdrop-blur-sm md:p-10'>
                <h3 className='mb-8 text-xl font-medium text-white md:text-[24px]'>
                  ThreatRespond is a perfect fit if you...
                </h3>
                <ul className='space-y-6 text-[20px]'>
                  <li className='flex items-start gap-4'>
                    <div className='mt-3 h-1 w-1 flex-shrink-0 rounded-full bg-white'></div>
                    <span className='text-lg leading-relaxed text-white'>
                      ...have an internal IT team capable of performing remediation.
                    </span>
                  </li>
                  <li className='flex items-start gap-4'>
                    <div className='mt-3 h-1 w-1 flex-shrink-0 rounded-full bg-white'></div>
                    <span className='text-lg leading-relaxed text-white'>
                      ...want to offload the burden of 24/7 alert monitoring.
                    </span>
                  </li>
                  <li className='flex items-start gap-4'>
                    <div className='mt-3 h-1 w-1 flex-shrink-0 rounded-full bg-white'></div>
                    <span className='text-lg leading-relaxed text-white'>
                      ...need expert investigation to eliminate false positives.
                    </span>
                  </li>
                  <li className='flex items-start gap-4'>
                    <div className='mt-3 h-1 w-1 flex-shrink-0 rounded-full bg-white'></div>
                    <span className='text-lg leading-relaxed text-white'>
                      ...want clear, step-by-step guidance to resolve incidents.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Right Card */}
              <div className='rounded-2xl bg-[#082235] p-8 !pb-[100px] backdrop-blur-sm'>
                <h3 className='mb-6 text-xl font-bold text-white md:text-[24px]'>
                  Looking for hands-on, active remediation?
                </h3>
                <p className='mb-8 text-sm leading-relaxed font-medium text-white md:text-[20px]'>
                  If you need a fully managed service where our SOC takes direct action to contain
                  and remediate threats, explore our flagship ThreatRemediate™ service.
                </p>
                <p
                  className='mb-6 text-sm leading-relaxed md:text-[18px]'
                  style={{ color: '#00AEEF' }}
                >
                  ThreatRemediate goes beyond guidance—our SOC actively isolates endpoints, disables
                  compromised accounts, and neutralizes threats in real-time while you sleep.
                </p>
                <Link
                  to={'/threat-respond-service-2'}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  <button
                    className='inline-flex items-center space-x-3 rounded-[8px] p-2 text-lg font-medium text-white md:p-[20px]'
                    style={{
                      background: 'linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)',
                    }}
                  >
                    <span className='text-sm uppercase md:text-[18px]'>
                      learn about threat remediate
                    </span>
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
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='relative z-[1] overflow-x-clip pt-[120px]'>
        <img src={contentFour} alt='Image' className='cc-bg-four' />
        <div className='container mx-auto px-[16px] md:px-6'>
          <div>
            <div className='mb-12 text-center'>
              <h2 className='text-2xl font-bold tracking-tight text-white md:text-5xl'>
                From Detection to Guided Resolution
              </h2>
              <p className='mt-4 text-[18px] text-white'>
                Our comprehensive security process helps keep your organization secure from end to
                end.
              </p>
            </div>

            <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
              <div
                className={`relative flex flex-col items-center justify-center rounded-[16px] bg-[#00AEEF3D] !px-[24px] py-[32px] lg:h-[389px]`}
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
                  <img src={detect} alt='' className='h-[72px] w-[72px]' />
                </div>
                <h3 className='mb-3 text-center text-[24px] font-bold text-white'>Detect</h3>
                <p className='text-center text-white'>
                  Add high-margin security services to your portfolio. Our model is built to
                  maximize your Monthly Recurring Revenue and profitability
                </p>
              </div>

              <div
                className={`relative flex flex-col items-center justify-center rounded-[16px] bg-[#00AEEF3D] !px-[24px] py-[32px] lg:h-[297px]`}
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
                  <img src={arrow} alt='' className='h-[72px] w-[72px]' />
                </div>
                <h3 className='mb-3 text-center text-[24px] font-bold text-white'>
                  Investigate & Validate
                </h3>
                <p className='text-center text-white'>
                  Add high-margin security services to your portfolio. Our model is built to
                  maximize your Monthly Recurring Revenue and profitability
                </p>
              </div>

              <div
                className={`relative flex flex-col items-center justify-center rounded-[16px] bg-[#00AEEF3D] !px-[24px] py-[32px] lg:h-[434px]`}
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
                  <img src={wa} alt='' className='h-[72px] w-[72px]' />
                </div>
                <h3 className='mb-3 text-center text-[24px] font-bold text-white'>
                  Fully Managed Cloud SIEM
                </h3>
                <p className='text-center text-white'>
                  Access our comprehensive ThreatRemediate™ Enablement Kit with co-brandable
                  materials, sales decks, and proposal generators to win more deals.
                </p>
              </div>

              <div
                className={`relative flex flex-col items-center justify-center rounded-[16px] bg-[#00AEEF3D] !px-[24px] py-[32px] lg:-mt-[43px] lg:h-[335px]`}
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
                  <img src={head} alt='' className='h-[72px] w-[72px]' />
                </div>
                <h3 className='mb-3 text-center text-[24px] font-bold text-white'>
                  Always-On SOC Support
                </h3>
                <p className='text-center text-white'>
                  Benefit from our channel-first approach with no minimum commitments, full
                  white-labeling, and a 30-day risk-free opt-out trial.
                </p>
              </div>

              <div
                className={`relative flex flex-col items-center justify-center rounded-[16px] bg-[#00AEEF3D] !px-[24px] py-[32px] lg:-mt-[135px] lg:h-[405px]`}
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
                  <img src={note} alt='' className='h-[72px] w-[72px]' />
                </div>
                <h3 className='mb-3 text-center text-[24px] font-bold text-white'>
                  Deliver Actionable Guidance
                </h3>
                <p className='text-center text-white'>
                  Effortlessly support your clients' compliance requirements, including HIPAA, GDPR,
                  PCI DSS, and CMMC. Vijilan provides detailed reporting, audit-ready documentation,
                  and compliance expertise—reducing your workload and minimizing regulatory risks.
                </p>
              </div>

              <div
                className={`relative flex flex-col items-center justify-center rounded-[16px] bg-[#00AEEF3D] !px-[24px] py-[32px] lg:h-[419px]`}
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
                  <img src={right} alt='' className='h-[72px] w-[72px]' />
                </div>
                <h3 className='mb-3 text-center text-[24px] font-bold text-white'>
                  Confirm & Close
                </h3>
                <p className='text-center text-white'>
                  We work with your team via the portal or ticketing system to confirm the threat
                  has been successfully resolved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='relative z-[1] overflow-x-clip pt-[120px]'>
        <img src={contentFive} alt='Image' className='cc-bg-five' />
        <div className='container mx-auto px-[16px] md:px-6'>
          <div className='mb-16 text-center'>
            <h2 className='mb-3 text-2xl font-bold tracking-tight text-white md:text-[40px]'>
              Questions About Guided Response?
            </h2>
            <p className='text-[20px] text-white'>
              Ask Jen AI, our 24/7 AI-powered Cyber Security Sales Agent.
            </p>
          </div>

          <div
            className='rounded-3xl px-[12px] py-[80px] lg:!px-[80px]'
            style={{ background: 'linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)' }}
          >
            <div className='grid items-center gap-12 lg:grid-cols-2'>
              {/* Left Side - Chat Interface */}
              <div className='space-y-6'>
                <div className='relative rounded-[24px] bg-[#00AEEF3D] px-[20px] py-[60px]'>
                  <div
                    className='absolute inset-0 z-0 rounded-[24px] p-[1px]'
                    style={{
                      background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
                 linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                      WebkitMask:
                        'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                    }}
                  />
                  <div className='mb-3 flex items-center gap-3'>
                    <div
                      className='flex h-[45px] w-[45px] items-center justify-center rounded-full md:h-[60px] md:w-[60px]'
                      style={{
                        background: `linear-gradient(0deg, rgba(196,196,196,0.3), rgba(196,196,196,0.3)),
                                                    linear-gradient(180deg, #F89B29 0%, #00AEEF 100%)`,
                      }}
                    >
                      <span className='text-sm font-bold text-white'>JN</span>
                    </div>
                    <div>
                      <h3 className='text-sm font-bold text-white md:text-[20px]'>JEN AI</h3>
                      <p className='text-xs font-medium !text-[#00AEEF] md:text-[13px]'>
                        Cyber security Sales Agent
                      </p>
                    </div>
                  </div>
                  <div className='bg-filt relative mx-auto flex w-fit items-center justify-center rounded-[16px] bg-[#00AEEF4D] px-[12px] !py-[80px] md:px-[40px]'>
                    <div
                      className='absolute inset-0 z-0 rounded-[16px] p-[1px]'
                      style={{
                        background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
                 linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                        WebkitMask:
                          'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'xor',
                        maskComposite: 'exclude',
                      }}
                    />
                    <p className='text-center text-[13px] leading-relaxed text-white'>
                      Jen AI chatbot interface would be
                      <br />
                      embedded here
                      <br />
                      Interactive AI agent for real-time
                      <br />
                      Q&A
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side - Suggested Questions */}
              <div className='space-y-5'>
                <h3 className='text-2xl font-bold text-white md:text-[40px]'>Try asking Jen AI:</h3>
                <div className='space-y-4'>
                  {[1, 2, 3, 4, 5].map((index) => (
                    <div
                      key={index}
                      className='relative p-2'
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
                      <p className='text-[13px] text-white'>
                        "What kind of guidance do you provide?"
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='relative z-[1] overflow-x-clip pt-[120px] lg:pb-[120px]'>
        <img src={contentSix} alt='Image' className='r-bg' />

        <div className='container mx-auto px-[16px] md:px-6'>
          <div className='mb-10 text-center'>
            <h2 className='text-2xl font-bold tracking-tight text-white md:text-[40px]'>
              Ready to Empower Your Team?
            </h2>
          </div>

          <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
            <div className='relative flex flex-col overflow-hidden rounded-[24px] bg-[#00AEEF3D] p-[40px] text-center md:px-[20px] md:py-[40px]'>
              <div
                className='absolute inset-0 z-0 rounded-[24px] p-[1px]'
                style={{
                  background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
                 linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }}
              />
              <div className='py-8'>
                <h3 className='mb-4 text-[24px] font-medium text-white'>Become a Partner</h3>
                <p className='mb-6 text-[18px] text-white'>
                  Start the application <br /> process now. Get <br /> access to our portal <br />{' '}
                  and resources in <br /> minutes
                </p>
              </div>
              <Link
                to={'/become-a-partner'}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <button
                  className='relative z-10 mt-auto inline-block rounded-md px-[26px] py-[16px] text-[16px] font-medium text-white sm:text-[18px]'
                  style={{
                    background: 'linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)',
                  }}
                >
                  SIGN UP NOW
                </button>
              </Link>
            </div>

            <div className='relative flex flex-col overflow-hidden rounded-[24px] bg-[#00AEEF3D] p-[40px] text-center md:px-[20px] md:py-[40px]'>
              <div
                className='absolute inset-0 z-0 rounded-[24px] p-[1px]'
                style={{
                  background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
                 linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }}
              />
              <div className='py-8'>
                <h3 className='mb-4 text-[24px] font-medium text-white'>
                  Get a ThreatRespond Quote
                </h3>
                <p className='mb-6 text-[18px] text-white'>
                  Already a partner? Log <br /> in to our portal to build <br /> custom quotes and{' '}
                  <br /> explore pricing <br /> scenarios.
                </p>
              </div>
              <Link
                to={'/pricing-tool'}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <button className='relative z-10 mt-auto inline-block rounded-[8px] px-[26px] py-[16px] text-[16px] font-medium text-white sm:text-[18px]'>
                  <div
                    className={`absolute inset-0 z-0 rounded-[8px] p-[1px]`}
                    style={{
                      background: 'linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)',
                      WebkitMask:
                        'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                    }}
                  />
                  ACCESS PRICING SIMULATOR
                </button>
              </Link>
            </div>

            <div className='relative flex flex-col overflow-hidden rounded-[24px] bg-[#00AEEF3D] p-[40px] text-center md:px-[20px] md:py-[40px]'>
              <div
                className='absolute inset-0 z-0 rounded-[24px] p-[1px]'
                style={{
                  background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
                 linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }}
              />
              <div className='py-8'>
                <h3 className='mb-4 text-[24px] font-medium text-white'>Call Our AI Agent</h3>
                <p className='mb-6 text-[18px] text-white'>
                  For instant voice <br /> assistance, call Jen AI <br /> to get your questions{' '}
                  <br /> answered now.
                </p>
                <p className='text-[18px] text-[#00AEEF]'>1 (954) 440-7608</p>
              </div>
              <Link to={'/contact'} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <button className='relative z-10 mt-auto inline-block rounded-[8px] px-[26px] py-[16px] text-[16px] font-medium text-white sm:text-[18px]'>
                  <div
                    className={`absolute inset-0 z-0 rounded-[8px] p-[1px]`}
                    style={{
                      background: 'linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)',
                      WebkitMask:
                        'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                    }}
                  />
                  CALL NOW
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default threatRespondService;
