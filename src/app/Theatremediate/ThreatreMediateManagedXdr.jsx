import React from 'react';
import GradientButton from '@components/GradientButton';
import investigate from '../../Assets/Investigate.png';
import tech from '../../Assets/tech.png';
import eyes from '../../Assets/eyes.png';
import book from '../../Assets/book.png';
import shield from '../../Assets/sheildIcon.png';
import detect from '../../Assets/detect.png';
import like from '../../Assets/like.png';
import mana from '../../Assets/mana.png';
import sett from '../../Assets/sett.png';
import incres from '../../Assets/incres.png';
import Heading_Btn from '@components/Heading_Btn';
import { Link } from 'react-router-dom';
import arrowRight from '../../Assets/arrow-right.png';

const steps = [
  {
    icon: investigate,
    title: 'Too Many Alerts',
    description: 'Overwhelming volume of\nsecurity notifications',
    iconBg: 'bg-orange-400/20',
  },
  {
    icon: investigate,
    title: 'Team Overwhelmed',
    description: 'Internal resources stretched thin',
    iconBg: 'bg-blue-400/20',
  },
  {
    icon: investigate,
    title: 'False Positives',
    description: 'Time wasted on non-threats',
    iconBg: 'bg-purple-400/20',
  },
  {
    icon: investigate,
    title: 'Real Threats Missed',
    description: 'Critical incidents slip through',
    iconBg: 'bg-red-400/20',
  },
];

const platformData = [
  {
    id: 1,
    title: 'CrowdStrike Falcon',
    icon: sett,
    description:
      'The foundation of our service, providing best-in-class EDR, Cloud Security, and Identity Protection with AI-native threat detection.',
    badge: 'K',
  },
  {
    id: 2,
    title: 'Corelight NDR',
    icon: incres,
    description:
      'We integrate deep network visibility from Corelight to see threats that others miss, providing comprehensive network analysis and threat hunting capabilities.',
    badge: 'K',
  },
  {
    id: 3,
    title: 'CriblData Engine',
    icon: mana,
    description:
      'Our unique Cribl integration allows us to connect with hundreds of your existing tools, ensuring complete visibility across your entire security stack.',
    badge: 'K',
  },
];

const features = [
  {
    id: 1,
    icon: shield,
    title: 'Prepare & Prevent',
    description:
      'We build your playbooks, train teams, and implement preventive controls to stop incidents before they start.',
    height: 'h-[390px]',
  },
  {
    id: 2,
    icon: detect,
    title: 'Detect',
    description:
      'Our platform uses AI-powered detection across all vectors—endpoints, cloud, identity, and network—to identify threats in real-time.',
    height: 'h-[300px]',
  },
  {
    id: 3,
    icon: tech,
    title: 'Investigate',
    description:
      "Our 24/7 SOC analysts instantly investigate and confirm every potential threat, eliminating false positives so your team isn't disturbed.",
    height: 'h-[434px]',
  },
  {
    id: 4,
    icon: like,
    title: 'We Take Action',
    description:
      'Our SOC takes direct, hands-on action: isolating endpoints, disabling compromised accounts, blocking malicious processes, and actively neutralizing the threat.',
    height: 'h-[335px]',
    mt: '-mt-[40px]',
  },
  {
    id: 5,
    icon: book,
    title: 'Report & Harden',
    description:
      'We provide a full incident report detailing the attack, the actions taken, and expert recommendations to harden your defenses against future attacks.',
    height: 'h-[405px]',
    mt: '-mt-[130px]',
  },
  {
    id: 6,
    icon: eyes,
    title: 'Review & Refine',
    description:
      'Post-incident, we analyze outcomes and continuously improve your detection, response, and prevention capabilities for ever-increasing resilience.',
    height: 'h-[420px]',
  },
];

const ThreatreMediateManagedXdr = () => {
  return (
    <div>
      {/*  */}
      <section className='pt-[150px]'>
        <div className='container mx-auto px-[16px] md:px-6'>
          <Heading_Btn
            h1='Beyond Detection: We Stop Breaches'
            desc={
              "Vijilan's ThreatRemediate™ is a fully managed XDR service that doesn't just send\nalerts—our 24/7 expert SOC actively contains and remediates threats across your\nendpoints, cloud, and identity, powered by CrowdStrike."
            }
            btn1='SEE THREATREMEDIATE IN ACTION (REQUEST DEMO)'
            btn2='DOWNLOAD THE THREATREMEDIATE DATESHEET'
            url={'/threat-respond-service-2'}
          />
        </div>
      </section>

      {/*  */}
      <div className='py-16'>
        <div className='container mx-auto px-[16px] md:px-6'>
          <div
            className='rounded-[24px] px-8 py-[95px] md:px-[65px]'
            style={{
              background: 'linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)',
            }}
          >
            {/* Header Section */}
            <div className='mb-12 text-center'>
              <h1 className='mb-3 text-3xl leading-tight font-bold text-white md:text-[40px]'>
                Stop Drowning in Alerts. Start Seeing <br /> Results.
              </h1>
              <p className='text-center text-lg leading-relaxed'>
                Traditional security services place the burden of remediation on your already
                strained internal <br /> IT team, leading to slower responses and increased risk.
              </p>
            </div>

            {/* Flow Diagram */}
            <div className='flex flex-col items-center justify-center gap-4 lg:flex-row'>
              {steps.map((step, index) => (
                <React.Fragment key={index}>
                  {/* Card */}
                  <div className='relative flex h-[150px] w-[180px] flex-col items-center justify-center rounded-lg px-[10px] py-[16px] text-center backdrop-blur-sm'>
                    <div
                      className='absolute inset-0 z-0 rounded-[8px] p-[1px]'
                      style={{
                        background: `linear-gradient(0deg, #8C0909, #8C0909), linear-gradient(0deg, #ED1C24, #ED1C24)`,
                        WebkitMask:
                          'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'xor',
                        maskComposite: 'exclude',
                      }}
                    />
                    <img src={step.icon} alt='' className='mb-2 h-[50px] w-[50px]' />
                    <h3 className='mb-2 text-[12px] font-medium text-white'>{step.title}</h3>
                    <p className='text-[12px] leading-relaxed whitespace-pre-line'>
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow - show only between cards */}
                  {index < steps.length - 1 && (
                    <div className='flex items-center justify-center'>
                      {/* Vertical for mobile, horizontal for lg */}
                      <div
                        className='flex items-center justify-center'
                        style={{ color: '#ED1C24' }}
                      >
                        <img
                          src={arrowRight}
                          alt=''
                          className='h-[18px] w-[23px] rotate-90 transform lg:rotate-0'
                        />
                      </div>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Vijilan Advantage Section */}
      <section className='py-16'>
        <div className='container mx-auto px-[16px] md:px-6'>
          <div className='mb-12 text-center'>
            <h2 className='text-3xl font-bold text-white md:text-[40px]'>
              Our Solution: The Full Security Lifecycle
            </h2>
          </div>
          <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
            <div className='relative flex flex-col items-center justify-center rounded-[16px] bg-[#00AEEF3D] px-[21px] py-[32px] lg:h-[390px]'>
              <div
                className='absolute inset-0 z-0 rounded-[16px] p-[2px]'
                style={{
                  background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
                                       linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }}
              />
              <div className='mb-4 flex h-[110px] w-[110px] items-center justify-center rounded-lg'>
                <img src={shield} alt='' />
              </div>
              <h3 className='mb-3 text-[24px] font-medium text-white'>Prepare & Prevent</h3>
              <p className='text-center text-[18px] text-white'>
                We build your playbooks, train teams, <br /> and implement preventive controls to{' '}
                <br /> stop incidents before they start
              </p>
            </div>

            <div className='relative flex flex-col items-center justify-center rounded-[16px] bg-[#00AEEF3D] px-[21px] py-[32px] lg:h-[300px]'>
              <div
                className='absolute inset-0 z-0 rounded-[16px] p-[2px]'
                style={{
                  background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
                                       linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }}
              />
              <div className='mb-4 flex h-[110px] w-[90px] items-center justify-center rounded-lg'>
                <img src={detect} alt='' />
              </div>
              <h3 className='mb-3 text-[24px] font-bold text-white'>Detect</h3>
              <p className='text-center text-[18px] text-white'>
                Our platform uses AI-powered <br /> detection across all vectors— <br /> endpoints,
                cloud, identity, and network <br />
                —to identify threats in real-time.
              </p>
            </div>

            <div className='relative flex flex-col items-center justify-center rounded-[16px] bg-[#00AEEF3D] px-[21px] py-[32px] lg:h-[434px]'>
              <div
                className='absolute inset-0 z-0 rounded-[16px] p-[2px]'
                style={{
                  background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
                                       linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }}
              />
              <div className='mb-4 flex h-[110px] w-[130px] items-center justify-center rounded-lg'>
                <img src={tech} alt='' />
              </div>
              <h3 className='mb-3 text-center text-[23px] font-bold text-white'>Investigate</h3>
              <p className='text-center text-[18px] text-white'>
                Our 24/7 SOC analysts instantly <br /> investigate and confirm every potential{' '}
                <br /> threat, eliminating false positives so <br /> your team isn't disturbed.
              </p>
            </div>

            <div className='relative flex flex-col items-center justify-center rounded-[16px] bg-[#00AEEF3D] px-[21px] py-[32px] lg:-mt-[40px] lg:h-[335px]'>
              <div
                className='absolute inset-0 z-0 rounded-[16px] p-[2px]'
                style={{
                  background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
                                       linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }}
              />
              <div className='mb-4 flex h-[110px] w-[156px] items-center justify-center rounded-lg'>
                <img src={like} alt='' />
              </div>
              <h3 className='mb-3 text-[24px] font-bold text-white'>We Take Action</h3>
              <p className='text-center text-[18px] text-white'>
                Our SOC takes direct, hands-on action: <br /> isolating endpoints, disabling <br />
                compromised accounts, blocking <br /> malicious processes, and actively <br />{' '}
                neutralizing the threat.
              </p>
            </div>

            <div className='relative flex flex-col items-center justify-center rounded-[16px] bg-[#00AEEF3D] px-[21px] py-[32px] lg:-mt-[130px] lg:h-[405px]'>
              <div
                className='absolute inset-0 z-0 rounded-[16px] p-[2px]'
                style={{
                  background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
                                       linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }}
              />
              <div className='mb-4 flex h-[110px] w-[110px] items-center justify-center rounded-lg'>
                <img src={book} alt='' />
              </div>
              <h3 className='mb-3 text-[24px] font-bold text-white'>Report & Harden</h3>
              <p className='text-center text-[18px] text-white'>
                We provide a full incident report <br /> detailing the attack, the actions taken,{' '}
                <br /> and expert recommendations to <br /> harden your defenses against future{' '}
                <br /> attacks.
              </p>
            </div>

            <div className='relative flex flex-col items-center justify-center rounded-[16px] bg-[#00AEEF3D] px-[21px] py-[32px] lg:h-[420px]'>
              <div
                className='absolute inset-0 z-0 rounded-[16px] p-[2px]'
                style={{
                  background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
                                       linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }}
              />
              <div className='mb-4 flex h-[110px] w-[197px] items-center justify-center rounded-lg'>
                <img src={eyes} alt='' />
              </div>
              <h3 className='mb-3 text-[24px] font-bold text-white'>Review & Refine</h3>
              <p className='text-center text-[14px] text-white'>
                Post-incident, we analyze outcomes <br /> and continuously improve your <br />
                detection, response, and prevention <br /> capabilities for ever-increasing <br />{' '}
                resilience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='py-16'>
        <div className='container mx-auto px-[16px] md:px-6'>
          <div className='mx-auto max-w-4xl'>
            {/* Header */}
            <div className='mb-12 text-center'>
              <h1 className='mb-4 text-3xl font-bold text-white md:text-[40px]'>
                Powered by an Elite, Integrated Platform
              </h1>
            </div>

            {/* Cards Grid */}
            <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
              {platformData.map((item) => {
                return (
                  <div key={item.id} className='relative rounded-2xl bg-[#00AEEF3D] p-8'>
                    <div
                      className={`$ absolute inset-0 z-0 rounded-[16px] p-[2px]`}
                      style={{
                        background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                        WebkitMask:
                          'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'xor',
                        maskComposite: 'exclude',
                      }}
                    />
                    {/* Icon and Badge */}
                    <div className='relative mb-6 flex items-center justify-center'>
                      <img src={item.icon} alt='' className='h-[57px] w-[57px]' />
                    </div>

                    {/* Title */}
                    <h3 className='mb-6 text-center text-2xl font-medium text-white'>
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className='text-center text-[16px] leading-relaxed'>{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/*  */}
      <section className='py-16'>
        <div className='container mx-auto px-[16px] md:px-6'>
          <div className='mx-auto max-w-4xl'>
            <div className='mb-12'>
              <h1 className='mb-5 text-center text-3xl font-bold lg:text-[40px]'>
                A Package for Every Need
              </h1>
              <p className='text-center text-[18px]'>
                Choose the ThreatRemediate tier that matches your security requirements
              </p>
            </div>

            {/* card */}
            <div className='mx-auto grid grid-cols-1 items-center justify-center gap-10 sm:grid-cols-2 lg:grid-cols-3'>
              <div className='relative rounded-[16px] bg-[#00AEEF3D] p-10'>
                <div
                  className={`absolute inset-0 z-0 rounded-[16px] p-[2px]`}
                  style={{
                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                />
                <h1 className='text-center text-[24px] font-medium'>Core</h1>
                <p className='text-center text-[16px]'>
                  Essential EDR/XDR for comprehensive endpoint protection with 24/7 monitoring and
                  active remediation.
                </p>
              </div>
              <div className='relative rounded-[16px] bg-[#00AEEF3D] p-10'>
                <div
                  className={`absolute inset-0 z-0 rounded-[16px] p-[2px]`}
                  style={{
                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                />
                <h1 className='text-center text-[24px] font-medium'>Complete</h1>
                <p className='text-center text-[16px]'>
                  Expands Core to include cloud workload security and foundational identity threat
                  detection for hybrid <br /> environments.
                </p>
              </div>
              <div className='relative rounded-[16px] bg-[#00AEEF3D] p-10'>
                <div
                  className={`absolute inset-0 z-0 rounded-[16px] p-[2px]`}
                  style={{
                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                />
                <h1 className='text-center text-[24px] font-medium'>Unlimited</h1>
                <p className='text-center text-[16px]'>
                  Our most comprehensive offering, adding advanced Identity Protection and Managed
                  Exposure Management.
                </p>
              </div>
            </div>
            <div className='mt-[50px] flex items-center justify-center'>
              <Link
                to={'/request-demo'}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <GradientButton children={'COMPARE TIERS AND RUN PRICING SCENARIOS'} icon={false} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/*  */}
      <div className='py-16'>
        <div className='container mx-auto px-[16px] md:px-6'>
          <div
            className='rounded-[16px] px-5 py-16 md:px-10'
            style={{
              background: 'linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)',
            }}
          >
            <h1 className='mb-5 text-center text-3xl font-bold text-white md:text-[40px]'>
              Real-World Remediation in Action
            </h1>
            <div className='mx-auto w-full max-w-4xl'>
              {/* Card */}
              <div className='rounded-[10px] border-t border-r border-b border-l-0 border-solid border-[#6BC063] bg-[#082235] py-[26px] backdrop-blur-sm'>
                {/* Success story header with icon */}
                <div className='mb-6 text-center'>
                  <h2 className='text-bold text-[20px]' style={{ color: '#6BC063' }}>
                    Success Story: Ransomware Attack Stopped in Minutes
                  </h2>
                </div>
                {/* Quote content */}
                <div className=''>
                  <blockquote className='mb-4 border-l-4 border-[#6BC063] px-2 text-[20px] leading-relaxed text-white md:px-10'>
                    "The most dangerous attacks today don't look like attacks at all. <br /> They
                    blend seamlessly into normal business operations, which is <br /> exactly what
                    makes them so effective—and so challenging to <br /> defend against."
                  </blockquote>

                  {/* Attribution */}
                  <cite className='px-2 text-[16px] md:px-10' style={{ color: '#00AEEF' }}>
                    — CTO, Mid-Market Logistics Company
                  </cite>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <section>
        <div className='container mx-auto px-[16px] md:px-6'>
          <Heading_Btn
            h1='Stop Reacting. Start Remediating.'
            desc={
              'See how our expert SOC team can become your hands-on defense against cyber\nthreats. Schedule a live, personalized demo of ThreatRemediate today.'
            }
            btn5='request a live  demo'
            url={'/contact'}
          />
        </div>
      </section>
    </div>
  );
};

export default ThreatreMediateManagedXdr;
