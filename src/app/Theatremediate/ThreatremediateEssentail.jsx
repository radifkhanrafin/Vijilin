import CardBorder from '@components/CardBorder';
import React from 'react';
import cp1 from '../../Assets/cp1.png';
import Heading_Btn from '@components/Heading_Btn';
import { Link } from 'react-router-dom';

const modules = [
  {
    id: 1,
    icon: cp1,
    title: 'Complex & Costly',
    price: '$5',
    unit: 'per endpoint',
    description:
      'Endpoint-based detection and response for workstations, laptops, and standard computing devices. Powered by CrowdStrike Falcon for industry-leading endpoint protection.',
  },
  {
    id: 2,
    icon: cp1,
    title: 'TRX Identity',
    price: '$3',
    unit: 'per user',
    description:
      'User-based identity threat detection and response. Monitors authentication events, privilege escalations, and identity-based attacks across your organization.',
  },
  {
    id: 3,
    icon: cp1,
    title: 'TRX Exposure (Visibility)',
    price: '$4',
    unit: 'per endpoint',
    description:
      'Includes CrowdStrike Falcon Discover & Spotlight for comprehensive asset visibility and vulnerability management. Provides complete attack surface visibility.',
  },
  {
    id: 4,
    icon: cp1,
    title: 'Critical Servers',
    price: '$30',
    unit: 'per server',
    description:
      'Enhanced monitoring for Domain Controllers and other critical infrastructure. Includes TRX Endpoint and TRX Exposure bundled at $8 per server for security event monitoring, plus advanced critical server protection.',
  },
  {
    id: 5,
    icon: cp1,
    title: 'Firewalls and Security Appliances',
    price: '$99',
    unit: 'per appliance',
    description:
      'Comprehensive monitoring for network security devices including Cisco, Fortigate, SonicWALL, Meraki, and other enterprise security appliances.',
  },
  {
    id: 6,
    icon: cp1,
    title: 'Other Cloud Sources',
    price: '$2',
    unit: 'per user',
    description:
      'Monitoring and security event collection from cloud applications including Microsoft 365, Google Workspace, AWS, Azure, and GCP environments.',
  },
];

const features = [
  {
    title: 'Powered by CrowdStrike',
    description:
      'Leverage industry-leading technology with CrowdStrike Falcon platform integration.',
  },
  {
    title: "Managed by Vijilan's SOC",
    description:
      '24/7 expert oversight and remediation from our SOC 2 Type 2 certified security operations center.',
  },
  {
    title: 'Cribl-Optimized',
    description:
      'Efficient data management and cost control through our strategic Cribl partnership.',
  },
  {
    title: 'Partner Enablement',
    description:
      'Access to comprehensive sales and marketing resources, training, and support materials.',
  },
  {
    title: 'Flexible Terms',
    description:
      'No minimums, 30-day opt-out trial, and transparent pricing that scales with your business.',
  },
  {
    title: 'Compliance Ready',
    description:
      'Built-in support for HIPAA, GDPR, PCI DSS, CMMC, and other regulatory requirements.',
  },
];

const ThreatremediateEssentail = () => {
  return (
    <div className='pt-[150px]'>
      <section className='container mx-auto px-6 py-16'>
        <div>
          <h1 className='mb-5 text-center text-3xl leading-14 font-bold md:text-4xl lg:text-5xl'>
            ThreatRemediate Essentials: Flexible, Modular <br /> Security for Your Clients
          </h1>
          <p className='text-center text-[18px] font-medium'>
            Build the perfect cybersecurity solution by selecting the exact modules your clients{' '}
            <br /> need, backed by Vijilan's expert SOC
          </p>
        </div>

        <div className='flex flex-wrap items-center justify-center gap-5'>
          <CardBorder height='122px' width='106px' borderSize={true}>
            <div className='flex min-h-24 min-w-24 items-center justify-center'>
              <div className='mb-2 text-[16px] font-medium text-white'>Add icon</div>
            </div>
          </CardBorder>
          <CardBorder height='122px' width='106px' borderSize={true}>
            <div className='flex min-h-24 min-w-24 items-center justify-center'>
              <div className='mb-2 text-[16px] font-medium text-white'>Add icon</div>
            </div>
          </CardBorder>
          <CardBorder height='122px' width='106px' borderSize={true}>
            <div className='flex min-h-24 min-w-24 items-center justify-center'>
              <div className='mb-2 text-[16px] font-medium text-white'>Add icon</div>
            </div>
          </CardBorder>
          <CardBorder height='122px' width='106px' borderSize={true}>
            <div className='flex min-h-24 min-w-24 items-center justify-center'>
              <div className='mb-2 text-[16px] font-medium text-white'>Add icon</div>
            </div>
          </CardBorder>
          <CardBorder height='122px' width='106px' borderSize={true}>
            <div className='flex min-h-24 min-w-24 items-center justify-center'>
              <div className='mb-2 text-[16px] font-medium text-white'>Add icon</div>
            </div>
          </CardBorder>
          <CardBorder height='122px' width='106px' borderSize={true}>
            <div className='flex min-h-24 min-w-24 items-center justify-center'>
              <div className='mb-2 text-[16px] font-medium text-white'>Add icon</div>
            </div>
          </CardBorder>
        </div>
        <Link to={'/pricing-tool'} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className='mt-[60px] flex items-center justify-center'>
            <button
              className='rounded-[8px] p-[18px] text-[18px] font-medium uppercase md:p-[24px]'
              style={{
                background: 'linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)',
              }}
            >
              access partner portal for pricing and custom builder
            </button>
          </div>
        </Link>
      </section>

      <section className='pb-16'>
        <div className='container mx-auto px-[16px] md:px-6'>
          <div
            className='lx:px-[78px] rounded-[24px] px-5 py-[75px] lg:px-[80px]'
            style={{
              background: 'linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)',
            }}
          >
            {/* Main Container */}
            <div className='relative rounded-[24px] bg-[#00AEEF3D] px-[15px] py-[50px] backdrop-blur-sm md:px-[38px] md:py-[78px]'>
              <div
                className={`absolute inset-0 z-0 rounded-[24px] p-[2px]`}
                style={{
                  background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }}
              />
              {/* Header Section */}
              <div className=''>
                <h2 className='mb-4 text-[22px] font-bold text-white'>
                  Why Choose a Modular Approach?
                </h2>
                <p className='text-lg leading-relaxed text-white'>
                  Not all clients need the same level of security, and a modular approach allows
                  partners to tailor solutions, optimize <br /> costs, and meet specific client
                  requirements. Emphasize flexibility and scalability.
                </p>
              </div>

              <div className='mx-auto max-w-[728px]'>
                <div className='m-2 grid grid-cols-1 gap-3 md:grid-cols-2 lg:ml-8 lg:grid-cols-4'>
                  <CardBorder className='p-2' radiusSize={true}>
                    <div className='h-[125px] px-[8px] py-5'>
                      <div className='mb-2 text-[14px] font-medium text-white'>Add icon</div>
                      <div className='mb-2 text-[14px] font-medium text-white'>
                        Tailored protection
                      </div>
                      <div className='text-[11px] font-medium text-white'>
                        Deliver precise security for unique client needs
                      </div>
                    </div>
                  </CardBorder>
                  <CardBorder className='p-2' radiusSize={true}>
                    <div className='h-[125px] px-[8px] py-5'>
                      <div className='mb-2 text-[13px] font-medium text-white'>Add icon</div>
                      <div className='mb-2 text-[13px] font-medium text-white'>
                        Cost Optimization
                      </div>
                      <div className='text-[10px] font-medium text-white'>
                        Clients only pay for the protection they require
                      </div>
                    </div>
                  </CardBorder>
                  <CardBorder className='p-2' radiusSize={true}>
                    <div className='h-[125px] px-[8px] py-5'>
                      <div className='mb-2 text-[13px] font-medium text-white'>Add icon</div>
                      <div className='mb-2 text-[13px] font-medium text-white'>Scalable Growth</div>
                      <div className='text-[10px] font-medium text-white'>
                        Easily add modules as client needs evolve
                      </div>
                    </div>
                  </CardBorder>
                  <CardBorder className='p-2' radiusSize={true}>
                    <div className='h-[125px] px-[8px] py-5'>
                      <div className='mb-2 text-[13px] font-medium text-white'>Add icon</div>
                      <div className='mb-2 text-[13px] font-medium text-white'>
                        Simplified Management
                      </div>
                      <div className='text-[10px] font-medium text-white'>
                        Streamlined delivery by Vijilan's experts
                      </div>
                    </div>
                  </CardBorder>
                </div>
              </div>
              {/* Feature Cards Grid */}
            </div>
          </div>
        </div>
      </section>

      <section className='relative overflow-hidden pb-16'>
        <div className='container mx-auto px-[16px] md:px-6'>
          <div className='relative z-10 py-12'>
            {/* Header */}
            <div className='mb-12 text-center'>
              <h1 className='mb-4 text-2xl font-bold text-white md:text-[40px]'>
                ThreatRemediate Essentials: Core Modules
              </h1>
            </div>

            {/* Modules Grid */}
            <div className='mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2'>
              {modules.map((module) => (
                <div
                  key={module.id}
                  className={`relative rounded-[24px] border bg-[#00AEEF3D] p-5 backdrop-blur-sm md:p-8`}
                >
                  <div
                    className={`$ absolute inset-0 z-0 rounded-[24px] p-[1px]`}
                    style={{
                      background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                      WebkitMask:
                        'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                    }}
                  />
                  {/* Icon and Header */}
                  <div className='mb-6 flex items-start gap-4'>
                    <div className=''>
                      <img src={cp1} alt='' className='h-[64px] w-[64px]' />
                    </div>
                    <div className='flex-1'>
                      <h3 className='text-[24px] font-medium text-white'>{module.title}</h3>
                      <div className='flex items-baseline gap-1'>
                        <span
                          className='text-[24px] font-medium text-[#00AEEF]'
                          style={{ color: '#00AEEF' }}
                        >
                          {module.price}
                        </span>
                        <span className='text-sm'>{module.unit}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className='text-[18px] leading-relaxed text-white'>{module.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className='pb-16'>
        <div className='container mx-auto px-[16px] md:px-6'>
          <div
            className='px10 rounded-[24px] py-[60px] md:px-[87px]'
            style={{
              background: 'linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)',
            }}
          >
            {/* Header */}
            <div className='mb-12 text-center'>
              <h1 className='mb-3 text-2xl font-bold text-white md:text-[40px]'>
                Build Your Custom Solution
              </h1>
              <p className='px-2 text-lg'>
                Select modules and quantities to see real-time pricing with automatic discounts
              </p>
            </div>

            {/* Module Selection Grid */}
            <div className='mb-8 grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3'>
              {/* TRX Identity - Endpoint */}
              <div className='p-3'>
                <div className='mb-2 flex items-center justify-between'>
                  <span className='text-[13px] text-white'>TRX Identity</span>
                  <span className='text-[13px]' style={{ color: '#00AEEF' }}>
                    $5/endpoint
                  </span>
                </div>
                <select className='w-full appearance-none rounded-[16px] border border-none bg-[#97D0FA3D] p-3 text-[16px] focus:border-1 focus:bg-[#00AEEF3D] focus:ring-1 focus:ring-[#FFFFFF80] focus:outline-none'>
                  <option value='0' className='text-black' style={{ color: 'black' }}>
                    0
                  </option>
                  <option value='1' className='text-black' style={{ color: 'black' }}>
                    1
                  </option>
                  <option value='5' className='text-black' style={{ color: 'black' }}>
                    5
                  </option>
                  <option value='10' className='text-black' style={{ color: 'black' }}>
                    10
                  </option>
                  <option value='25' className='text-black' style={{ color: 'black' }}>
                    25
                  </option>
                  <option value='50' className='text-black' style={{ color: 'black' }}>
                    50
                  </option>
                </select>
              </div>

              {/* TRX Identity - User */}
              <div className='p-3'>
                <div className='mb-2 flex items-center justify-between'>
                  <span className='text-[13px] text-white'>TRX Identity</span>
                  <span className='text-[13px] text-[#00AEEF]' style={{ color: '#00AEEF' }}>
                    $3/user
                  </span>
                </div>
                <select className='w-full appearance-none rounded-[16px] border border-none bg-[#97D0FA3D] p-3 text-[16px] focus:border-1 focus:bg-[#00AEEF3D] focus:ring-1 focus:ring-[#FFFFFF80] focus:outline-none'>
                  <option value='0' className='text-black' style={{ color: 'black' }}>
                    0
                  </option>
                  <option value='1' className='text-black' style={{ color: 'black' }}>
                    1
                  </option>
                  <option value='5' className='text-black' style={{ color: 'black' }}>
                    5
                  </option>
                  <option value='10' className='text-black' style={{ color: 'black' }}>
                    10
                  </option>
                  <option value='25' className='text-black' style={{ color: 'black' }}>
                    25
                  </option>
                  <option value='50' className='text-black' style={{ color: 'black' }}>
                    50
                  </option>
                </select>
              </div>

              {/* TRX Exposure */}
              <div className='p-3'>
                <div className='mb-2 flex items-center justify-between'>
                  <span className='text-[13px] text-white'>TRX Exposure</span>
                  <span className='text-[13px] text-[#00AEEF]' style={{ color: '#00AEEF' }}>
                    $4/endpoint
                  </span>
                </div>
                <select className='w-full appearance-none rounded-[16px] border border-none bg-[#97D0FA3D] p-3 text-[16px] focus:border-1 focus:bg-[#00AEEF3D] focus:ring-1 focus:ring-[#FFFFFF80] focus:outline-none'>
                  <option value='0' className='text-black' style={{ color: 'black' }}>
                    0
                  </option>
                  <option value='1' className='text-black' style={{ color: 'black' }}>
                    1
                  </option>
                  <option value='5' className='text-black' style={{ color: 'black' }}>
                    5
                  </option>
                  <option value='10' className='text-black' style={{ color: 'black' }}>
                    10
                  </option>
                  <option value='25' className='text-black' style={{ color: 'black' }}>
                    25
                  </option>
                  <option value='50' className='text-black' style={{ color: 'black' }}>
                    50
                  </option>
                </select>
              </div>

              {/* Critical Servers */}
              <div className='p-3'>
                <div className='mb-2 flex items-center justify-between'>
                  <span className='text-[13px] text-white'>Critical Servers</span>
                  <span className='text-[13px] text-[#00AEEF]' style={{ color: '#00AEEF' }}>
                    $30/server
                  </span>
                </div>
                <select className='w-full appearance-none rounded-[16px] border border-none bg-[#97D0FA3D] p-3 text-[16px] focus:border-1 focus:bg-[#00AEEF3D] focus:ring-1 focus:ring-[#FFFFFF80] focus:outline-none'>
                  <option value='0' className='text-black' style={{ color: 'black' }}>
                    0
                  </option>
                  <option value='1' className='text-black' style={{ color: 'black' }}>
                    1
                  </option>
                  <option value='5' className='text-black' style={{ color: 'black' }}>
                    5
                  </option>
                  <option value='10' className='text-black' style={{ color: 'black' }}>
                    10
                  </option>
                  <option value='25' className='text-black' style={{ color: 'black' }}>
                    25
                  </option>
                  <option value='50' className='text-black' style={{ color: 'black' }}>
                    50
                  </option>
                </select>
              </div>

              {/* Firewalls & Appliances */}
              <div className='p-3'>
                <div className='mb-2 flex items-center justify-between'>
                  <span className='text-[13px] text-white'>Firewalls & Appliances</span>
                  <span className='text-[13px] text-[#00AEEF]' style={{ color: '#00AEEF' }}>
                    $99/appliance
                  </span>
                </div>
                <select className='w-full appearance-none rounded-[16px] border border-none bg-[#97D0FA3D] p-3 text-[16px] focus:border-1 focus:bg-[#00AEEF3D] focus:ring-1 focus:ring-[#FFFFFF80] focus:outline-none'>
                  <option value='0' className='text-black' style={{ color: 'black' }}>
                    0
                  </option>
                  <option value='1' className='text-black' style={{ color: 'black' }}>
                    1
                  </option>
                  <option value='5' className='text-black' style={{ color: 'black' }}>
                    5
                  </option>
                  <option value='10' className='text-black' style={{ color: 'black' }}>
                    10
                  </option>
                  <option value='25' className='text-black' style={{ color: 'black' }}>
                    25
                  </option>
                  <option value='50' className='text-black' style={{ color: 'black' }}>
                    50
                  </option>
                </select>
              </div>

              {/* Cloud Sources */}
              <div className='p-3'>
                <div className='mb-2 flex items-center justify-between'>
                  <span className='font-[13px] text-white'>Cloud Sources</span>
                  <span className='text-[13px] text-[#00AEEF]' style={{ color: '#00AEEF' }}>
                    $2/user
                  </span>
                </div>
                <select className='w-full appearance-none rounded-[16px] border border-none bg-[#97D0FA3D] p-3 text-[16px] focus:border-1 focus:bg-[#00AEEF3D] focus:ring-1 focus:ring-[#FFFFFF80] focus:outline-none'>
                  <option value='0' className='text-black' style={{ color: 'black' }}>
                    0
                  </option>
                  <option value='1' className='text-black' style={{ color: 'black' }}>
                    1
                  </option>
                  <option value='5' className='text-black' style={{ color: 'black' }}>
                    5
                  </option>
                  <option value='10' className='text-black' style={{ color: 'black' }}>
                    10
                  </option>
                  <option value='25' className='text-black' style={{ color: 'black' }}>
                    25
                  </option>
                  <option value='50' className='text-black' style={{ color: 'black' }}>
                    50
                  </option>
                </select>
              </div>
            </div>

            {/* Pricing Summary */}
            <div className='p-5'>
              <div className='rounded-[13px] bg-[#97D0FA3D] p-8 text-center backdrop-blur-sm'>
                <h2 className='mb-4 text-lg font-bold text-white'>Monthly Total</h2>
                <div
                  className='mb-6 text-[40px] font-bold text-[#00AEEF]'
                  style={{ color: '#00AEEF' }}
                >
                  0$
                </div>

                <div className='mb-2 text-[18px] text-gray-300'>
                  Select 3 or more modules for 15% discount
                </div>
                <div className='mb-6 text-[18px] text-gray-300'>
                  Choose annual payment for additional 15% discount
                </div>

                <div className='mb-8 text-[18px] text-white'>
                  Annual Payment (Additional 15% Discount)
                </div>
                <Link
                  to={'/pricing-tool'}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  <button
                    className='rounded-lg p-[18px] text-[16px] font-medium text-white md:p-[24px] md:text-[18px]'
                    style={{
                      background: 'linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)',
                    }}
                  >
                    GET OFFICIAL PRICING AND START TRIAL
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-16'>
        <div className='container mx-auto px-[16px] md:px-6'>
          <div className='mb-12'>
            <h1 className='mb-5 text-center text-2xl font-bold md:text-[40px]'>
              Unlock Additional Savings
            </h1>
            <p className='text-center text-[18px]'>
              Maximize your value with our transparent discount structure
            </p>
          </div>

          <div className='flex flex-col gap-12 md:flex-row'>
            <div className='relative rounded-[24px] bg-[#00AEEF3D] px-[51px] py-[45px]'>
              <div
                className={`absolute inset-0 z-0 rounded-[24px] p-[2px]`}
                style={{
                  background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }}
              />
              <div className='text-center'>
                <div
                  className='mb-1 text-[24px] font-medium text-[#00AEEF] uppercase'
                  style={{ color: '#00AEEF' }}
                >
                  Add icon
                </div>
                <p
                  className='mb-1 text-[24px] font-medium text-[#00A991]'
                  style={{ color: '#00A991' }}
                >
                  15%
                </p>
                <div className='mb-4 text-[24px] font-medium'>Bundle Discount</div>
                <p className='text-[18px]'>
                  Receive a 15% discount when you choose three or more <br /> modules for your
                  client's security solution..
                </p>
              </div>
            </div>

            <div className='relative rounded-[24px] bg-[#00AEEF3D] px-2 py-[45px] md:px-[51px]'>
              <div
                className={`absolute inset-0 z-0 rounded-[24px] p-[2px]`}
                style={{
                  background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }}
              />
              <div className='text-center'>
                <div className='mb-1 text-[24px] font-medium text-[#00AEEF] uppercase'>
                  Add icon
                </div>
                <p className='mb-1 text-[24px] font-medium text-[#00A991]'>15%</p>
                <div className='mb-4 text-[24px] font-medium'>Annual Payment Discount</div>
                <p className='text-[18px]'>
                  Get an additional 15% discount when you opt for annual <br /> upfront payment.
                  Combines with bundle discount for <br /> maximum savings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-16'>
        <div className='container mx-auto px-[16px] md:px-6'>
          <div
            className='rounded-3xl px-3 py-[50px] md:px-12 lg:px-[113px]'
            style={{
              background: 'linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)',
            }}
          >
            <h1 className='mb-18 text-center text-[27px] font-bold text-white'>
              The Vijilan Advantage: Expert-Backed, Partner-Focused
            </h1>

            <div className='grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3'>
              {features.map((feature, index) => (
                <div key={index} className='px-5 text-center text-white md:px-0'>
                  <p className='mb-2 text-[20px] font-medium'>Add Icon</p>
                  <h3 className='mb-2 text-[20px] font-medium'>{feature.title}</h3>

                  <p className='text-center text-[16px] leading-relaxed'>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className='container mx-auto pb-16 sm:px-4 md:px-6 lg:px-8 xl:px-6'>
        <div className='container mx-auto px-[16px] md:px-6'>
          <div className='relative z-10 py-16 text-center sm:py-32'>
            <h1 className='text-4xl md:text-5xl font-bold'>Build Your Custom Solution & Get Pricing</h1>
            <p className='mx-auto mt-[25px] max-w-[820px] md:text-[18px]'>
              Ready to deliver enterprise-grade security with modular flexibility? Connect with our
              partner team to access official pricing, start your 30-day trial, and begin growing
              your security practice.
            </p>
            <div className='mt-[40px] flex flex-wrap gap-[20px] items-center justify-center'>
              <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <button
                  className='p-5 md:!px-[20px] md:!py-[18px] text-sm md:text-lg font-medium rounded-[8px] text-white inline-flex items-center space-x-3'
                  style={{
                    background: 'linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)',
                  }}
                >
                  <span className='text-[16px] font-medium !uppercase md:text-[18px]'>
                    build your custom solution and get pricing
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
              <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <div className='rounded-lg'>
                  <button
                  className="relative p-[18px] text-white md:!px-[20px] md:!py-[18px] inline-flex items-center rounded-lg bg-transparent text-[16px] font-medium md:text-lg"
                  >
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
                    <span className='text-[16px] font-medium !uppercase md:text-[18px]'>download threatremediate essentials solution brief</span>
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThreatremediateEssentail;
