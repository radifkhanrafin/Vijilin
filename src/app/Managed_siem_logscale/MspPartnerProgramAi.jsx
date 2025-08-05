import GradientButton from '@components/GradientButton';
import OutlineGradientButton from '@components/OutlineGradientButton';
import { Plus, Minus } from 'lucide-react';
import React, { useState } from 'react';
import clipboard from '../../Assets/Clipboard Approve.png';
import rocket from '../../Assets/Rocket.png';
import graph from '../../Assets/Graph Report.png';
import lock from '../../Assets/lock.png';
import task from '../../Assets/task-check.png';
import rocketIcon from '../../Assets/rocketIcon.png';
import sheildIcon from '../../Assets/sheildIcon.png';
import timeIcon from '../../Assets/timeIcon.png';
import chaiIcon from '../../Assets/chain-icons.png';
import man1 from '../../Assets/man1.png';
import man2 from '../../Assets/man2.png';
import man3 from '../../Assets/man3.png';
import backgroundPattern from '../../Assets/Background pattern.png';
import { Check } from 'lucide-react';
import Heading_Btn from '@components/Heading_Btn';
import CardContent from '@components/CardContent';

const CardContentData = ({ children, className = '', ...props }) => {
  return (
    <div className={` ${className}`} {...props}>
      {children}
    </div>
  );
};

const Card = ({ children, className = '', ...props }) => {
  return (
    <div className={` ${className}`} {...props}>
      {children}
    </div>
  );
};

const testimonials = [
  {
    quote:
      'Vijilan transformed our security posture overnight. We went from zero cybersecurity revenue to $45K MRR in just six months. Their SOC team feels like an extension of our own staff.',
    name: 'Mike Rodriguez',
    title: 'CEO, TechDefend Solutions',
    avatar: man1,
  },
  {
    quote:
      'The white-label approach is perfect. Our clients see our brand throughout the entire experience. Vijilan delivers enterprise-grade security that we could never build in-house.',
    name: 'Sarah Johnson',
    title: 'Partner, SecureIT Group',
    avatar: man2,
  },
  {
    quote:
      'No minimums, no long-term contracts, no BS. Vijilan keeps it simple while delivering incredible results. Our clients are happier and more secure than ever.',
    name: 'David Kim',
    title: 'Founder, CyberGuard Pro',
    avatar: man3,
  },
];

const features = [
  'Annual Revenue Requirement',
  'ThreatRemediate™ Access',
  'ThreatRespond™ Access',
  'White-Label Branding',
  'Partner Portal Access',
  'Sales Enablement Kit',
  'Dedicated Account Manager',
  'Custom Proposal Generator',
  'PSA Integration',
  'Marketing Development Funds',
  'Executive Business Reviews',
  'CEO Circle',
];

const tiers = {
  bronze: {
    name: 'Bronze',
    revenue: '$0 - $2M',
    features: ['$0 - $2M', true, true, true, true, true, true, true, true, false, false, false],
  },
  silver: {
    name: 'Silver',
    revenue: '$2M - $10M',
    features: ['$2M - $10M', true, true, true, true, true, true, true, true, false, false, false],
  },
  gold: {
    name: 'Gold',
    revenue: '$10M+',
    features: ['$10M+', true, true, true, true, true, true, true, true, true, true, true],
  },
};

const cardData = [
  {
    icon: lock,
    title: 'Unlock New MRR',
    description:
      'Add high-margin security services to your portfolio. Our model is built to maximize your Monthly Recurring Revenue and profitability.',
  },
  {
    icon: timeIcon,
    title: 'Your Instant 24/7 SOC',
    description:
      'Gain an immediate, SOC 2 Type 2 certified Security Operations Center without the overhead. Our experts become an extension of your team.',
  },
  {
    icon: rocketIcon,
    title: 'Go-to-Market Enablement',
    description:
      'Access our comprehensive ThreatRemediate™ Enablement Kit with co-brandable materials, sales decks, and proposal generators to win more deals.',
  },
  {
    icon: sheildIcon,
    title: 'Radical Flexibility & No Risk',
    description:
      'Benefit from our channel-first approach with no minimum commitments, full white-labeling, and a 30-day risk-free opt-out trial.',
  },
  {
    icon: task,
    title: 'Simplified Compliance',
    description:
      "Effortlessly support your clients' compliance requirements, including HIPAA, GDPR, PCI DSS, and CMMC. Vijilan provides detailed reporting, audit-ready documentation, and compliance expertise—reducing your workload and minimizing regulatory risks.",
  },
  {
    icon: chaiIcon,
    title: 'Vendor-Agnostic Integration',
    description:
      "Seamlessly integrate with your clients' existing security tools and infrastructure. Vijilan supports extensive integrations across firewalls, endpoints, cloud platforms, and identity solutions, giving you unmatched flexibility without vendor lock-in.",
  },
];

const MspPartnerProgramAi = () => {
  const [openIndex, setOpenIndex] = useState(null);

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
    <div>
      {/* Hero Section */}
      <section className='relative z-10 pt-[150px] text-center'>
        <div className='container mx-auto px-[16px] md:px-6'>
          <Heading_Btn
            h1={' Transform Your MSP with Elite\nCybersecurity'}
            desc='No minimums, no complexity, no high startup costs.'
            rating='★★★★★ | Trusted by over 500 MSPs worldwide'
            btn1='APPLY TO BECOME A PARTNER'
            btn2='DOWNLOAD PARTNER KIT'
            url={'/become-a-partner'}
          />
        </div>
      </section>

      {/* Go-to-Market Section */}
      <section className='relative z-10 py-16'>
        <div className='container mx-auto px-[16px] md:px-6'>
          <h2 className='mb-10 text-center text-2xl font-bold text-white md:text-[40px]'>
            Go-to-Market in Days not Months
          </h2>
          <div className='grid gap-8 md:grid-cols-3'>
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
                  <img src={clipboard} alt='' className='h-[50px] w-[40px]' />
                  <span className='text-[18px] text-[#00AEEF]'>1. Apply Online</span>
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

                  <span className='text-[18px] text-[#00AEEF]'>2. Fast Onboarding</span>
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
                  <img src={graph} alt='' className='h-[50px] w-[36px]' />

                  <span className='text-[18px] text-[#00AEEF]'>3. Start Selling</span>
                </div>
                <p className='text-[16px] text-[#FFFFFF]'>
                  Use our comprehensive sales enablement kit to close your first deal this week.
                </p>
              </CardContentData>
            </Card>
          </div>
        </div>
      </section>

      {/* Vijilan Advantage Section */}
      <section className='py-16'>
        <div className='container mx-auto px-[16px] md:px-6'>
          <div className='mb-12 text-center'>
            <h2 className='mb-4 text-2xl font-bold text-white md:text-[40px]'>
              Why MSPs Choose Vijilan
            </h2>
          </div>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
            <div
              className={`relative flex flex-col items-center justify-center rounded-[16px] bg-[#00AEEF3D] px-[24px] py-[32px] lg:h-[389px]`}
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
                <img src={lock} alt='' className='' />
              </div>
              <h3 className='mb-3 text-center text-[24px] font-bold text-white'>Unlock New MRR</h3>
              <p className='text-center text-white'>
                Add high-margin security services to your portfolio. Our model is built to maximize
                your Monthly Recurring Revenue and profitability.
              </p>
            </div>

            <div
              className={`relative flex flex-col items-center justify-center rounded-[16px] bg-[#00AEEF3D] px-[24px] py-[32px] lg:h-[320px]`}
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
                <img src={timeIcon} alt='' className='' />
              </div>
              <h3 className='mb-3 text-center text-[24px] font-bold text-white'>
                Your Instant 24/7 SOC
              </h3>
              <p className='text-center text-white'>
                Gain an immediate, SOC 2 Type 2 certified Security Operations Center without the
                overhead. Our experts become an extension of your team.
              </p>
            </div>

            <div
              className={`relative flex flex-col items-center justify-center rounded-[16px] bg-[#00AEEF3D] px-[24px] py-[32px] lg:h-[434px]`}
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
                <img src={rocketIcon} alt='' className='' />
              </div>
              <h3 className='mb-3 text-center text-[24px] font-bold text-white'>
                Go-to-Market Enablement
              </h3>
              <p className='text-center text-white'>
                Access our comprehensive ThreatRemediate™ Enablement Kit with co-brandable
                materials, sales decks, and proposal generators to win more deals.
              </p>
            </div>

            <div
              className={`relative flex flex-col items-center justify-center rounded-[16px] bg-[#00AEEF3D] px-[24px] py-[32px] lg:-mt-[43px] lg:h-[335px]`}
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
                <img src={sheildIcon} alt='' className='' />
              </div>
              <h3 className='mb-3 text-center text-[24px] font-bold text-white'>
                Radical Flexibility & No Risk
              </h3>
              <p className='text-center text-white'>
                Benefit from our channel-first approach with no minimum commitments, full
                white-labeling, and a 30-day risk-free opt-out trial.
              </p>
            </div>

            <div
              className={`relative flex flex-col items-center justify-center rounded-[16px] bg-[#00AEEF3D] px-[24px] py-[32px] lg:-mt-[115px] lg:h-[405px]`}
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
                <img src={task} alt='' className='' />
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
              className={`relative flex flex-col items-center justify-center rounded-[16px] bg-[#00AEEF3D] px-[24px] py-[32px] lg:h-[419px]`}
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
                <img src={chaiIcon} alt='' className='' />
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

      <div className='relative overflow-hidden'>
        <div className='container mx-auto px-[16px] py-16 md:px-6'>
          {/* Header */}
          <div className='mb-12 text-center'>
            <h1 className='mb-3 text-2xl leading-tight font-bold text-white md:text-4xl lg:text-[40px]'>
              A Partnership Tier for Every Stage of
              <br />
              Your Growth
            </h1>
            <p className='text-[20px] text-white'>
              Our program is designed to meet you where you are and help you scale your security
              offerings <br /> profitably.
            </p>
          </div>
          <div className='flex flex-col gap-12 lg:flex-row'>
            {/* Main Content */}
            <div className='flex-1'>
              {/* Comparison Table */}
              <div className='overflow-hidden'>
                {/* Table Header */}
                <div className='grid grid-cols-4 border-b border-[#F5F5F5]'>
                  <div className='py-2 text-[13px] font-medium text-white'>Features & Benefits</div>
                  <div className='py-2 text-center text-[13px] font-medium text-white'>
                    <div className='mb-1 font-semibold text-white'>Bronze</div>
                    {/* <div className="text-gray-300 text-sm">$0 - $2M</div> */}
                  </div>
                  <div className='py-2 text-center text-[13px] font-medium text-white'>
                    <div className='mb-1 font-semibold text-white'>Silver</div>
                    {/* <div className="text-gray-300 text-sm">$2M - $10M</div> */}
                  </div>
                  <div className='py-2 text-center text-[13px] font-medium text-white'>
                    <div className='mb-1 font-semibold text-white'>Gold</div>
                    {/* <div className="text-gray-300 text-sm">$10M+</div> */}
                  </div>
                </div>

                {/* Table Body */}
                <div className='divide-y divide-[#F5F5F5]'>
                  {features.map((feature, index) => (
                    <div key={feature} className='grid grid-cols-4'>
                      <div className='py-3 text-[9px] text-[#F5F5F5]'>{feature}</div>
                      {/* Bronze */}
                      <div className='flex items-center justify-center py-3 text-[10px] text-white'>
                        {typeof tiers.bronze.features[index] === 'string'
                          ? tiers.bronze.features[index]
                          : tiers.bronze.features[index] && (
                              <div className='flex h-3 w-3 items-center justify-center rounded-full bg-cyan-500'>
                                <Check className='h-3 w-3 text-white' />
                              </div>
                            )}
                      </div>

                      {/* Silver */}
                      <div className='flex items-center justify-center py-3 text-[10px] text-white'>
                        {typeof tiers.silver.features[index] === 'string'
                          ? tiers.silver.features[index]
                          : tiers.silver.features[index] && (
                              <div className='flex h-3 w-3 items-center justify-center rounded-full bg-cyan-500'>
                                <Check className='h-3 w-3 text-white' />
                              </div>
                            )}
                      </div>

                      {/* Gold */}
                      <div className='flex items-center justify-center py-3 text-[10px] text-white'>
                        {typeof tiers.gold.features[index] === 'string'
                          ? tiers.gold.features[index]
                          : tiers.gold.features[index] && (
                              <div className='flex h-3 w-3 items-center justify-center rounded-full bg-cyan-500'>
                                <Check className='h-3 w-3 text-white' />
                              </div>
                            )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Chat Widget */}
            <div className='lg:w-96'>
              <div className='relative rounded-[24px] p-6 lg:!px-[50px] lg:py-[24px]'>
                <div
                  className='absolute inset-0 z-0 rounded-[24px] p-[1px]'
                  style={{
                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                />
                {/* Online Status */}
                <div className='mb-6 flex items-center justify-center'>
                  <div className='flex items-center gap-2 rounded-full bg-[#6BC06329] px-3 py-1 text-[11px] font-semibold text-[#567C53]'>
                    <div className='h-2 w-2 rounded-full bg-[#6BC06329] text-[#567C53]'></div>
                    Online Now
                  </div>
                </div>

                {/* Avatar */}
                <div className='mb-2 flex justify-center'>
                  <div
                    className='flex h-[62px] w-[62px] items-center justify-center rounded-full text-xl font-bold text-white'
                    style={{
                      background: `linear-gradient(0deg, rgba(196,196,196,0.3), rgba(196,196,196,0.3)), linear-gradient(180deg, #F89B29 0%, #00AEEF 100%)`,
                    }}
                  >
                    JN
                  </div>
                </div>

                {/* Title */}
                <h3 className='mb-4 text-center text-[20px] font-bold text-white'>
                  Ask Your AI Partner Guide
                </h3>

                {/* Description */}
                <p className='mb-6 text-center text-[16px] leading-relaxed text-white'>
                  Hi, I'm Jen AI! Choosing the right partner tier is an important step. I can walk
                  you through the benefits of Bronze, Silver, and Gold to help you find the perfect
                  fit for your MSP's growth stage.
                </p>

                {/* CTA Button */}
                <button
                  className='w-full rounded-[8px] px-[24px] py-[16px] text-[18px] font-medium text-white'
                  style={{ background: 'linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)' }}
                >
                  START A CHAT
                </button>

                {/* Footer Text */}
                <p className='mt-4 text-center text-[16px]'>Available 24/7 • Instant responses</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className='py-16'>
        <div className='container mx-auto px-[16px] md:px-6'>
          <h2 className='mb-12 text-center text-3xl font-bold text-white md:text-[40px]'>
            What Our Partners Say
          </h2>

          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
            {testimonials.map((testimonial, index) => (
              <div key={index} className='relative rounded-[24px] bg-[#00AEEF3D] p-8'>
                <div
                  className='absolute inset-0 z-0 rounded-[24px] p-[2px]'
                  style={{
                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                />
                <blockquote className='mb-8 text-[20px] leading-relaxed font-medium text-white'>
                  "{testimonial.quote}"
                </blockquote>

                <div className='flex items-center gap-4'>
                  <div className='relative'>
                    <img
                      src={testimonial.avatar || '/placeholder.svg'}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className='rounded-full border-2 border-white/20'
                    />
                  </div>
                  <div>
                    <div className='text-[20px] font-bold text-white'>{testimonial.name}</div>
                    <div className='text-[13px] font-bold text-[#00AEEF]'>{testimonial.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='relative z-[1] py-16'>
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
                      className='flex w-full items-center justify-between px-[24px] py-[24px] text-left text-white'
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

      {/* end */}
      <section
        className='pb-16'
        style={{
          backgroundImage: `url(${backgroundPattern})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right center',
        }}
      >
        <div className='container mx-auto px-[16px] md:px-6'>
          <Heading_Btn
            h1='Ready to Transform Your MSP?'
            desc={
              "Join over 500 MSPs who've already discovered the Vijilan advantage. Apply now and\nstart growing your security practice today."
            }
            btn1='APPLY TO BECOME A PARTNER'
            btn2='DOWNLOAD PARTNER KIT'
            isSmallHeading={true}
            url={'/become-a-partner'}
          />
        </div>
      </section>
    </div>
  );
};

export default MspPartnerProgramAi;
