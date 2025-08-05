import React, { useState, useEffect } from 'react';
import pc from '../../Assets/pc.png';
import investi from '../../Assets/Investigate.png';
import manCall from '../../Assets/callMane.png';
import writing from '../../Assets/writing.png';
import { Plus, Minus } from 'lucide-react';

const pricingPlans = [
  {
    title: 'ThreatRespond',
    description: 'Managed Detection & Response with expert-guided incident handling',
    price: '$12',
    billingUnit: 'per asset/month',
    features: [
      '24/7 SOC monitoring and detection',
      'Expert-guided incident response',
      'Threat hunting and analysis',
      'Basic remediation guidance',
      'Monthly security reporting',
      'Email and phone support',
      'Basic compliance documentation',
    ],
    buttonText: 'START FREE TRIAL',
  },
  {
    title: 'ThreatRemediate™',
    description: 'Full Managed XDR with automated threat remediation',
    price: '$18',
    billingUnit: 'per asset/month',
    features: [
      'Everything in ThreatRespond',
      'Automated threat remediation',
      'Advanced threat intelligence',
      'Identity threat detection (ITDR)',
      'Cloud security monitoring',
      'White-label portal options',
      'Comprehensive compliance reporting',
    ],
    buttonText: 'START FREE TRIAL',
  },
  {
    title: 'Professional Services',
    description: 'Expert implementation and management of third-party security tools',
    price: '$8',
    billingUnit: 'per asset/month',
    features: [
      'CrowdStrike Falcon management',
      'Corelight network detection',
      'Cribl data optimization',
      'LogScale SIEM management',
      'Custom integration support',
      'Performance optimization',
      'Dedicated technical account manager',
    ],
    buttonText: 'LEARN MORE',
  },
];

const Card = ({ children, className = '', ...props }) => {
  return (
    <div className={` ${className}`} {...props}>
      {children}
    </div>
  );
};

const pricingData = [
  {
    service: 'managed itdr',
    monthly: '$5/ASSET',
    annual: '$4.25/ASSET',
    description: `identity threat\ndetection and\nresponse`,
  },
  {
    service: `managed exposure\nmanagement`,
    monthly: '$6/ASSET',
    annual: '$5.10/ASSET',
    description: `continuous exposure\nassessment and\nremediation`,
  },
  {
    service: `managed exposure\nmanagement`,
    monthly: '$6/ASSET',
    annual: '$2.55/GB',
    description: `high-speed log ingestion\nand management`,
  },
  {
    service: 'additional users',
    monthly: '$25/USER',
    annual: '$21.25/USER',
    description: `extra portal access\nbeyond included users`,
  },
];

const PricingPage = () => {
  const CardContentData = ({ children, className = '', ...props }) => {
    return (
      <div className={` ${className}`} {...props}>
        {children}
      </div>
    );
  };

  const [isAnnually, setIsAnnually] = useState(false);

  const pricingPlans = [
    {
      title: 'ThreatRespond',
      description: 'Managed Detection & Response with expert-guided incident handling',
      price: isAnnually ? '$10' : '$12', // Example: adjust price for annual
      billing: 'Billed monthly',
      features: [
        '24/7 SOC monitoring and detection',
        'Expert-guided incident response',
        'Threat hunting and analysis',
        'Basic remediation guidance',
        'Monthly security reporting',
        'Email and phone support',
        'Basic compliance documentation',
      ],
      buttonText: 'START FREE TRIAL',
    },
    {
      title: 'ThreatRemediate™',
      description: 'Full Managed XDR with automated threat remediation',
      price: isAnnually ? '$15' : '$18', // Example: adjust price for annual
      billing: 'Billed monthly',
      features: [
        'Everything in ThreatRespond',
        'Automated threat remediation',
        'Advanced threat intelligence',
        'Identity threat detection (ITDR)',
        'Cloud security monitoring',
        'White-label portal options',
        'Comprehensive compliance reporting',
      ],
      buttonText: 'START FREE TRIAL',
    },
    {
      title: 'Professional Services',
      description: 'Expert implementation and management of third-party security tools',
      price: isAnnually ? '$7' : '$8', // Example: adjust price for annual
      billing: 'Add-on service, billed monthly',
      features: [
        'CrowdStrike Falcon management',
        'Corelight network detection',
        'Cribl data optimization',
        'LogScale SIEM management',
        'Custom integration support',
        'Performance optimization',
        'Dedicated technical account manager',
      ],
      buttonText: 'LEARN MORE',
    },
  ];

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
    <div className='pri-bg'>
      {/* hero section */}
      <section className='pt-[180px] pb-16'>
        <div className='container mx-auto px-[16px] md:px-6'>
          {/* content */}
          <div className='mb-10'>
            <h1 className='text-center text-3xl font-bold md:text-4xl lg:text-[48px]'>
              Transparent, Predictable Pricing
            </h1>
            <p className='mt-10 text-center text-[18px]'>
              No hidden fees, no surprise charges. Simple pay-per-asset pricing that scales with{' '}
              <br /> your business. Get enterprise-grade cybersecurity without the enterprise
              complexity.
            </p>
          </div>
          {/* card */}
          <div className='flex flex-wrap justify-center gap-10'>
            <p className='text-[18px] font-medium' style={{ color: '#37D962B2' }}>
              ✓30-Day Risk-Free Trial
            </p>
            <p className='text-[18px] font-medium' style={{ color: '#37D962B2' }}>
              ✓No Setup Fees
            </p>
            <p className='text-[18px] font-medium' style={{ color: '#37D962B2' }}>
              ✓ CANCEL ANYIME
            </p>
            <p className='text-[18px] font-medium' style={{ color: '#37D962B2' }}>
              ✓24/7 US-Based SOC
            </p>
          </div>
        </div>
      </section>

      {/*  */}
      <section className='pb-16'>
        <div className='container mx-auto px-[16px] md:px-6'>
          <div className='mb-12 flex items-center justify-center space-x-3'>
            <label htmlFor='billing-toggle' className='text-[16px] text-white'>
              Monthly
            </label>

            <label className='relative inline-flex cursor-pointer items-center'>
              <input
                type='checkbox'
                id='billing-toggle'
                className='peer sr-only'
                checked={isAnnually}
                onChange={() => setIsAnnually(!isAnnually)}
              />
              <div className='peer relative h-6 w-11 rounded-full bg-gray-700 peer-checked:bg-white peer-focus:ring-2 peer-focus:ring-blue-300 peer-focus:outline-none'>
                <div className='absolute top-1 left-1 h-4 w-4 rounded-full bg-gray-400 transition-all peer-checked:translate-x-5'></div>
              </div>
            </label>

            <label htmlFor='billing-toggle' className='text-[16px] text-white'>
              Annually
            </label>

            <span
              className='inline-flex items-center rounded-[10px] bg-[#32A24C1A] px-[8px] text-[16px]'
              style={{ color: '#34A853' }}
            >
              save 15%
            </span>
          </div>

          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className='relative flex flex-col rounded-[16px] bg-[#00AEEF3D] py-8'
              >
                <div
                  className={`absolute inset-0 z-0 rounded-[16px] p-[2px]`}
                  style={{
                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                />
                <div className='p-4'>
                  <h1 className='mb-2 text-center text-2xl font-medium text-white'>{plan.title}</h1>
                  <p className='mb-4 text-center text-[16px]'>{plan.description}</p>
                  <div className='mb-4 text-center'>
                    <span
                      className='text-[30px] font-bold md:text-[40px]'
                      style={{ color: '#00AEEF' }}
                    >
                      {plan.price}
                    </span>
                    <span className='ml-2 text-[16px]' style={{ color: '#00AEEF' }}>
                      per asset/month
                    </span>
                  </div>
                  <p className='text-center text-[24px] font-medium text-white'>{plan.billing}</p>
                </div>
                <div className='flex-grow p-6 pt-0'>
                  <ul className='list-inside list-disc space-y-2'>
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className='text-[18px]'>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='mx-auto flex items-center justify-center rounded-[8px] border border-[#00AEEF] px-[18px] py-[15px]'>
                  <button className='w-fit text-center text-[17px] font-medium uppercase'>
                    {plan.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*  */}
      <section className='py-16'>
        <div className='container mx-auto px-[16px] md:px-6'>
          <div className='overflow-x-auto'>
            <table
              className='w-full'
              style={{
                background: 'linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)',
              }}
            >
              <thead className=''>
                <tr className='text-left'>
                  <th
                    scope='col'
                    className='px-[30px] py-[24px] text-[17px] font-medium text-white uppercase'
                  >
                    Add On Services
                  </th>
                  <th
                    scope='col'
                    className='px-[30px] py-[24px] text-[17px] font-medium text-white uppercase'
                  >
                    Monthly Prices
                  </th>
                  <th
                    scope='col'
                    className='px-[30px] py-[24px] text-[17px] font-medium text-white uppercase'
                  >
                    Annual Prices
                  </th>
                  <th
                    scope='col'
                    className='px-[30px] py-[24px] text-[17px] font-medium text-white uppercase'
                  >
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                {pricingData.map((row, index) => (
                  <tr key={index} className='border text-white'>
                    <td className='px-4 py-4 text-[17px] font-medium whitespace-pre-line'>
                      {row.service}
                    </td>
                    <td className='px-4 py-4 text-[17px] font-medium'>{row.monthly}</td>
                    <td className='px-4 py-4 text-[17px] font-medium'>{row.annual}</td>
                    <td className='px-4 py-4 text-[17px] font-medium whitespace-pre-line'>
                      {row.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4 card */}
      <section className='py-16'>
        <div className='container mx-auto px-[16px] md:px-6'>
          <div
            className='flex flex-col items-center justify-center px-4 py-16 text-white sm:px-6 lg:px-8'
            style={{
              background: 'linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)',
            }}
          >
            <div className='mb-12 max-w-4xl text-center'>
              <h1 className='mb-4 text-[30px] font-bold md:text-4xl lg:text-5xl'>
                Enterprise & Custom Solutions
              </h1>
              <p className='text-[18px]'>
                For organizations with 1,000+ assets or unique requirements, we offer customized{' '}
                <br /> enterprise packages with dedicated resources and tailored pricing.
              </p>
            </div>

            <div className='grid w-full max-w-2xl grid-cols-1 gap-6 md:grid-cols-2'>
              {/* Card 1: Threat Landscape Overview */}
              <div className='relative flex flex-col items-center rounded-[12px] bg-[#00AEEF3D] p-6 text-center text-white lg:h-[280px]'>
                <div
                  className={`absolute inset-0 z-0 rounded-[12px] p-[2px]`}
                  style={{
                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                />
                <div className='mb-4'>
                  <img src={pc} alt='' className='h-[70px] w-[70px]' />
                </div>
                <div className='mb-2 p-0'>
                  <h2 className='text-[17px] font-medium'>Dedicated SOC Team</h2>
                </div>
                <h1 className='p-0 text-[13px]'>
                  Your own team of security analysts <br /> exclusively focused on your <br />{' '}
                  environment
                </h1>
              </div>

              {/* Card 2: Security Framework Selection */}
              <div className='relative flex flex-col items-center rounded-[12px] bg-[#00AEEF3D] p-6 text-center text-white lg:h-[220px]'>
                <div
                  className={`absolute inset-0 z-0 rounded-[12px] p-[2px]`}
                  style={{
                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                />
                <div className='mb-4'>
                  <img src={investi} alt='' className='h-[70px] w-[70px]' />
                </div>
                <div className='mb-2 p-0'>
                  <h2 className='text-[17px] font-medium'>Custom Integrations</h2>
                </div>
                <h1 className='p-0 text-[13px]'>
                  Bespoke integrations with your <br /> existing security stack and business <br />{' '}
                  tools
                </h1>
              </div>

              {/* Card 4: Detection and Monitoring */}
              <div className='relative flex flex-col items-center rounded-[12px] bg-[#00AEEF3D] p-6 text-center text-white lg:h-[241px]'>
                <div
                  className={`absolute inset-0 z-0 rounded-[12px] p-[2px]`}
                  style={{
                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                />
                <div className='mb-4'>
                  <img src={manCall} alt='' className='h-[70px] w-[70px]' />
                </div>
                <div className='mb-2 p-0'>
                  <h2 className='text-[17px] font-medium'>Executive Reporting </h2>
                </div>
                <h1 className='p-0 text-[13px]'>
                  Custom dashboards and reports <br /> tailored to your business objectives
                </h1>
              </div>

              {/* Card 4: Incident Response Planning */}
              <div className='relative flex flex-col items-center rounded-[12px] bg-[#00AEEF3D] p-6 text-center text-white lg:-mt-[60px] lg:h-[233px]'>
                <div
                  className={`absolute inset-0 z-0 rounded-[12px] p-[2px]`}
                  style={{
                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                />
                <div className='mb-4'>
                  <img src={writing} alt='' className='h-[70px] w-[70px]' />
                </div>
                <div className='mb-2 p-0'>
                  <h2 className='text-[17px] font-medium'>SLA Guarantees</h2>
                </div>
                <h1 className='p-0 text-[13px]'>
                  Custom SLAs with financial penalties <br /> for missed response times
                </h1>
              </div>
            </div>

            <div className='mx-auto mt-10 flex items-center justify-center rounded-[8px] border border-[#00AEEF] px-[18px] py-[14px]'>
              <button className='text-[16px] font-medium'>CONTACT SALES</button>
            </div>
          </div>
        </div>
      </section>

      {/* 4 card */}
      <section className='py-16'>
        <div className='container mx-auto px-[16px] md:px-6'>
          <div
            className='flex flex-col items-center justify-center px-4 py-16 text-white sm:px-6 lg:px-8'
            style={{
              background: 'linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)',
            }}
          >
            <div className='mb-12 max-w-4xl text-center'>
              <h1 className='mb-4 text-[30px] font-bold md:text-4xl lg:text-5xl'>
                Channel Partner Program
              </h1>
              <p className='text-[18px]'>
                Special pricing and program benefits for MSPs, MSSPs, VARs, and technology <br />{' '}
                partners.
              </p>
            </div>

            <div className='grid w-full max-w-2xl grid-cols-1 gap-6 md:grid-cols-2'>
              {/* Card 1: Threat Landscape Overview */}
              <div className='relative flex flex-col items-center rounded-[12px] bg-[#00AEEF3D] p-6 text-center text-white lg:h-[280px]'>
                <div
                  className={`absolute inset-0 z-0 rounded-[12px] p-[2px]`}
                  style={{
                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                />
                <div className='mb-4'>
                  <img src={pc} alt='' className='h-[70px] w-[70px]' />
                </div>
                <div className='mb-2 p-0'>
                  <h2 className='text-[17px] font-medium'>Volume Discounts</h2>
                </div>
                <h1 className='p-0 text-[13px]'>
                  Up to 40% off standard pricing based <br /> on commitment levels
                </h1>
              </div>

              {/* Card 2: Security Framework Selection */}
              <div className='relative flex flex-col items-center rounded-[12px] bg-[#00AEEF3D] p-6 text-center text-white lg:h-[220px]'>
                <div
                  className={`absolute inset-0 z-0 rounded-[12px] p-[2px]`}
                  style={{
                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                />
                <div className='mb-4'>
                  <img src={investi} alt='' className='h-[70px] w-[70px]' />
                </div>
                <div className='mb-2 p-0'>
                  <h2 className='text-[17px] font-medium'>White-Label Options</h2>
                </div>
                <h1 className='p-0 text-[13px]'>
                  Complete co-branding of portals, <br /> reports, and communications
                </h1>
              </div>

              {/* Card 4: Detection and Monitoring */}
              <div className='relative flex flex-col items-center rounded-[12px] bg-[#00AEEF3D] p-6 text-center text-white lg:h-[241px]'>
                <div
                  className={`absolute inset-0 z-0 rounded-[12px] p-[2px]`}
                  style={{
                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                />
                <div className='mb-4'>
                  <img src={manCall} alt='' className='h-[70px] w-[70px]' />
                </div>
                <div className='mb-2 p-0'>
                  <h2 className='text-[17px] font-medium'>PSA Integration </h2>
                </div>
                <h1 className='p-0 text-[13px]'>
                  Seamless integration with <br /> ConnectWise, Autotask, and other PSA <br /> tools
                </h1>
              </div>

              {/* Card 4: Incident Response Planning */}
              <div className='relative flex flex-col items-center rounded-[12px] bg-[#00AEEF3D] p-6 text-center text-white lg:-mt-[60px] lg:h-[233px]'>
                <div
                  className={`absolute inset-0 z-0 rounded-[12px] p-[2px]`}
                  style={{
                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                />
                <div className='mb-4'>
                  <img src={writing} alt='' className='h-[70px] w-[70px]' />
                </div>
                <div className='mb-2 p-0'>
                  <h2 className='text-[17px] font-medium'>Sales Enablement</h2>
                </div>
                <h1 className='p-0 text-[13px]'>
                  Marketing materials, training, and <br /> dedicated partner support
                </h1>
              </div>
            </div>

            <div className='mx-auto mt-10 flex items-center justify-center rounded-[8px] border border-[#00AEEF] px-[18px] py-[14px]'>
              <button className='text-[16px] font-medium'>PARTNER PROGRAM DETAILS</button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='relative z-[1] pt-[120px]'>
        <div className='container mx-auto !max-w-[800px] px-[16px] md:px-6'>
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
      {/*  */}
      <section className='py-16'>
        <div className='container mx-auto px-[16px] md:px-6'>
          <div
            className='space-y-8 rounded-[24px] py-12 px-[20px]'
            style={{
              background: 'linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)',
            }}
          >
            <h1 className='text-center text-[24px] font-medium' style={{ color: '#00AEEF' }}>
              Ready to Get Started?
            </h1>
            <p className='text-center text-[24px] font-medium'>
              Join over 5,000 organizations that trust Vijilan to protect their digital assets.
              Start your 30-day <br /> risk-free trial today.
            </p>

            <div className='mx-auto flex flex-col items-center justify-center gap-10 md:flex-row'>
              <button
                className={`inline-flex items-center space-x-4 rounded-[8px] p-[18px] text-white`}
                style={{
                  background: 'linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)',
                }}
              >
                <span className='text-[18px] font-medium uppercase'>start free trial</span>
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

              <div className='inline-flex items-center space-x-4 rounded-lg border-1 border-[#00AEEF] p-[18px] text-white capitalize'>
                <span className='text-[18px] font-medium uppercase'>TALK TO SALES</span>

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
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
