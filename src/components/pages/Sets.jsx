import React from 'react';
import cp1 from '../../Assets/cp1.png';
import cp2 from '../../Assets/cp2.png';
import cp3 from '../../Assets/cp3.png';
import cp4 from '../../Assets/cp4.png';

const modules = [
  {
    id: 1,
    icon: cp1,
    title: 'Unmatched Expertise & Enduring Trust',
    description:
      "Our US-Based, SOC 2 Type 2 certified Security Operations Center is the heart of our service. It's staffed 24/7 by a team of elite threat hunters and remediation specialists who act as a direct extension of your team.",
  },
  {
    id: 2,
    icon: cp2,
    title: 'Powered by the Cribl Data Engine',
    description:
      "Our deep alliance with Cribl allows us to solve 'data chaos.' We optimize your data flows, reduce SIEM costs, and enrich raw data into actionable intelligence *before* it enters your security stack.",
  },
  {
    id: 3,
    icon: cp3,
    title: 'A Proactive, Remediation-First Approach',
    description:
      'Unlike services that just send alerts, our ThreatRemediate™ service includes active, hands-on remediation. Our SOC contains and neutralizes threats directly, reducing the burden on your team and stopping breaches faster.',
  },
  {
    id: 4,
    icon: cp4,
    title: 'Committed to Partner Success',
    description:
      'We are a channel-first company. We empower our MSP partners with a turnkey platform, no minimums, a 30-day opt-out trial, full white-labeling options, and a comprehensive sales enablement kit to ensure your success.',
  },
];

const Sets = () => {
  return (
    <section className='relative overflow-hidden'>
      <div className='relative z-10 container mx-auto px-[16px] md:px-6'>
        {/* Header */}
        <div className='mb-12 text-center'>
          <h1 className='text-3xl font-bold text-white lg:text-[40px]'>What Truly Sets Us Apart</h1>
        </div>

        {/* Modules Grid */}
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
          {modules.map((module) => (
            <div
              key={module.id}
            //   className={`relative rounded-[24px] border bg-[#00AEEF3D] p-4 backdrop-blur-sm md:p-8 ${module.middle ? 'mx-auto flex w-[534px] flex-col justify-center md:col-span-2' : ''}`}
            className='relative rounded-[24px] p-[1px] bg-[#00AEEF3D] py-[40px] px-[30px]'
            >
              <div
                className={`$ absolute inset-0 z-0 rounded-[24px] p-[1px]`}
                style={{
                  background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }}
              />
              {/* Icon and Header */}
              <div className=''>
                <img src={cp1} alt='' className='h-[64px] w-[64px]' />
              </div>
              <div className='mt-4 mb-4'>
                <h3 className='mb-2 text-[24px] font-medium whitespace-pre-line text-white'>
                  {module.title}
                </h3>
              </div>
              {/* Description */}
              <p className='text-[18px] leading-relaxed text-white'>{module.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sets;
