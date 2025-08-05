import GradientButton from '@components/GradientButton';
import React from 'react';
import flag from '../../Assets/flag.png';
import sun from '../../Assets/sun.png';
import build from '../../Assets/build.png';
import hand from '../../Assets/hand.png';
import eye from '../../Assets/eye.png';
import circle from '../../Assets/circle.png';
import Heading_Btn from '@components/Heading_Btn';
import { Link } from 'react-router-dom';

const MidMarketEnterPrice = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className='pt-[150px]'>
        <Heading_Btn
          h1={'From Data Chaos to Strategic Clarity:\nSecure Your Enterprise.'}
          desc={
            'Vijilan provides comprehensive, 24/7 managed detection, response, and\nremediation,  designed to augment your security team, unify your disparate tools, and\ndemonstrably reduce risk across your entire attack surface.'
          }
          btn1='REQUEST A CUSTOM DEMO'
          btn2='DOWNLOAD THE CISO HANDBOOK'
          url={'/contact'}
        />
      </section>

      <section className='py-16'>
        <div className='container mx-auto px-[16px] md:px-6'>
          <div className='mb-12 text-center'>
            <h2 className='text-2xl font-bold text-white md:text-[40px]'>
              Solving the Modern CISO's Dilemma
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
                <img src={circle} alt='' className='' />
              </div>
              <h3 className='mb-3 text-center text-[24px] font-bold text-white'>
                Unify Your Security Stack
              </h3>
              <p className='text-center text-white'>
                We ingest and correlate data from your disparate tools, eliminating blind spots and
                providing true cross-domain visibility without costly rip-and-replace projects.
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
                <img src={sun} alt='' className='' />
              </div>
              <h3 className='mb-3 text-center text-[24px] font-bold text-white'>
                Extend Your SOC's Reach
              </h3>
              <p className='text-center text-white'>
                Our 24/7 US-Based SOC acts as a direct extension of your team, handling the noise of
                alert triage so your experts can focus on strategic initiatives.
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
                <img src={flag} alt='' className='' />
              </div>
              <h3 className='mb-3 text-center text-[24px] font-bold text-white'>
                Receive Actionable Incidents
              </h3>
              <p className='text-center text-white'>
                Leveraging AI and expert analysis, we deliver only high-fidelity, actionable
                incidents that require your attention, freeing your team from the noise of false
                positives.
              </p>
            </div>

            <div
              className={`relative flex flex-col items-center justify-center rounded-[16px] bg-[#00AEEF3D] px-[24px] py-[32px] lg:-mt-[43px] lg:h-[392px]`}
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
                <img src={hand} alt='' className='' />
              </div>
              <h3 className='mb-3 text-center text-[24px] font-bold text-white'>
                Optimize Your Data Costs
              </h3>
              <p className='text-center text-white'>
                Demonstrate clear ROI with our data optimization services powered by Cribl. We can
                significantly reduce your SIEM and data storage costs while enriching your security
                data.
              </p>
            </div>

            <div
              className={`relative flex flex-col items-center justify-center rounded-[16px] bg-[#00AEEF3D] px-[24px] py-[32px] lg:-mt-[115px] lg:h-[441px]`}
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
                <img src={eye} alt='' className='' />
              </div>
              <h3 className='mb-3 text-center text-[24px] font-bold text-white'>
                Achieve Full-Stack Visibility & Unified Defense
              </h3>
              <p className='text-center text-white'>
                CISOs want one pane of glass—not 17 dashboards. We consolidate telemetry and apply
                advanced correlation across endpoints, network, cloud, identity, and SaaS
                environments, enabling your team to see real threats—not isolated alerts—for better,
                faster decision-making.
              </p>
            </div>

            <div
              className={`relative flex flex-col items-center justify-center rounded-[16px] bg-[#00AEEF3D] px-[24px] py-[32px] lg:h-[486px]`}
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
                <img src={build} alt='' className='' />
              </div>
              <h3 className='mb-3 text-center text-[24px] font-bold text-white'>
                Proactive Risk Reduction & Strategic Enablement
              </h3>
              <p className='text-center text-white'>
                CISOs expect MDR to go beyond monitoring. Our SOC doesn't just monitor—we treat
                alerts as opportunities for improvement, develop playbooks, optimize SLAs, and build
                cost-effective frameworks that evolve with your risk posture. That's strategic
                partnership.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='py-16'>
        <div className='container mx-auto px-[16px] md:px-6'>
          {/* Main container with border */}
          <div className=''>
            {/* Header */}
            <h1 className='mb-12 text-center text-2xl font-bold text-white md:text-[40px]'>
              A Security Partnership, Not Just a Product
            </h1>

            {/* Main content grid */}
            <div className='grid items-center !gap-x-[60px] gap-y-[40px] lg:grid-cols-2'>
              {/* Left side - Placeholder content area */}
              <div className='relative h-[495px] rounded-[24px] bg-[#00AEEF3D]'>
                <div
                  className='absolute inset-0 z-0 rounded-[24px] p-[2px]'
                  style={{
                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                />
                {/* This would contain your actual content/image */}
              </div>

              {/* Right side - Product information */}
              <div className='space-y-6'>
                <h2 className='text-3xl font-bold !text-[#00AEEF] md:text-5xl'>
                  ThreatRemediate™ Ultimate
                </h2>

                <h3 className='text-xl font-medium text-white md:text-2xl'>
                  Fully Managed Detection, Response & Remediation
                </h3>

                <p className='text-xl leading-relaxed font-thin text-white md:text-[22px] md:font-semibold'>
                  Our flagship managed XDR service provides full-lifecycle, hands-on remediation. We
                  don't just alert—we contain and neutralize threats across your endpoints, cloud,
                  identity, and network.
                </p>

                <div className='w-fit rounded-[8px] border-2 border-[#00AEEF] p-[16px]'>
                  <Link
                    to={'/threat-respond-service-2'}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    <button className='w-fit text-[18px] font-medium !text-[#00AEEF]'>
                      VIEW THREATREMEDIATE DETAILS
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className='mt-[60px] grid items-center !gap-x-[60px] gap-y-[40px] lg:grid-cols-2'>
              {/* Left side - Placeholder content area */}
              <div className='space-y-6'>
                <h2 className='text-3xl font-bold !text-[#00AEEF] md:text-5xl'>
                  Managed SIEM & Data Optimization
                </h2>

                <h3 className='text-xl font-medium text-white md:text-2xl'>
                  Modernize Your SOC with LogScale & Cribl
                </h3>

                <p className='text-xl leading-relaxed font-thin text-white md:text-[22px] md:font-semibold'>
                  Let our experts deploy, manage, and optimize CrowdStrike LogScale, powered by our
                  unique Cribl integration. Gain unparalleled visibility and control over your data
                  while reducing costs.
                </p>

                <div className='w-fit rounded-[8px] border-2 border-[#00AEEF] p-[16px]'>
                  <Link
                    to={'/managed-siem-logscale-service'}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    <button className='w-fit text-[18px] font-medium !text-[#00AEEF] uppercase'>
                      explore siem services
                    </button>
                  </Link>
                </div>
              </div>

              {/* Right side - Product information */}

              <div className='relative h-[495px] rounded-[24px] bg-[#00AEEF3D]'>
                <div
                  className='absolute inset-0 z-0 rounded-[24px] p-[2px]'
                  style={{
                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                />
                {/* This would contain your actual content/image */}
              </div>
            </div>
            <div className='mt-[60px] grid items-center !gap-x-[60px] gap-y-[40px] lg:grid-cols-2'>
              {/* Left side - Placeholder content area */}
              <div className='relative h-[495px] rounded-[24px] bg-[#00AEEF3D]'>
                <div
                  className='absolute inset-0 z-0 rounded-[24px] p-[2px]'
                  style={{
                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                />
                {/* This would contain your actual content/image */}
              </div>

              {/* Right side - Product information */}
              <div className='space-y-6'>
                <h2 className='text-3xl font-bold !text-[#00AEEF] md:text-5xl'>
                  Professional Services
                </h2>

                <h3 className='text-xl font-medium text-white md:text-2xl'>
                  Expert Implementation & Management
                </h3>

                <p className='text-xl leading-relaxed font-thin text-white md:text-[22px] md:font-semibold'>
                  Augment your team with our certified experts for seamless implementation and
                  ongoing management of leading technologies, including Cribl, Corelight, and the
                  full CrowdStrike Falcon platform.
                </p>

                <div className='w-fit rounded-[8px] border-2 border-[#00AEEF] p-[16px]'>
                  <Link
                    to={'/visilan-professional-service'}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    <button className='w-fit text-[18px] font-medium !text-[#00AEEF] uppercase'>
                      view professional services
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='pt-[60px]'>
        <div className='container mx-auto px-[16px] text-center md:px-6'>
          <div
            className='flex flex-col items-center justify-center rounded-[24px] py-16'
            style={{ background: 'linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)' }}
          >
            <h1 className='mb-12 text-center text-xl leading-tight font-bold text-white md:text-5xl'>
              Achieve and Maintain Compliance with <br /> Confidence
            </h1>

            {/* Compliance Badges */}
            <div className='mb-12 flex flex-wrap justify-center gap-6 p-2'>
              <div className='flex h-[120px] w-[120px] flex-col items-center justify-center rounded-full bg-[#298524D1] text-white'>
                <div className='text-[15px] font-bold md:text-[18px]'>SOC 2</div>
                <div className='text-[15px] font-bold md:text-[18px]'>Type 2</div>
                <div className='text-[15px] font-bold md:text-[18px]'>Certified</div>
              </div>

              <div className='flex h-[130px] w-[130px] flex-col items-center justify-center rounded-full bg-[#298524D1] text-white'>
                <div className='text-[15px] font-bold md:text-[18px]'>HIPAA</div>
                <div className='text-[15px] font-bold md:text-[18px]'>Ready</div>
              </div>

              <div className='flex h-[130px] w-[130px] flex-col items-center justify-center rounded-full bg-[#298524D1] text-white'>
                <div className='text-[15px] font-bold md:text-[18px]'>PCI DSS</div>
                <div className='text-[15px] font-bold md:text-[18px]'>Support</div>
              </div>

              <div className='flex h-[130px] w-[130px] flex-col items-center justify-center rounded-full bg-[#298524D1] text-white'>
                <div className='text-[15px] font-bold md:text-[18px]'>GDPR</div>
                <div className='text-[15px] font-bold md:text-[18px]'>Compliant</div>
              </div>

              <div className='flex h-[130px] w-[130px] flex-col items-center justify-center rounded-full bg-[#298524D1] text-white'>
                <div className='text-[15px] font-bold md:text-[18px]'>CMMC</div>
                <div className='text-[15px] font-bold md:text-[18px]'>Ready</div>
              </div>
            </div>

            {/* Description Text */}
            <p className='mx-auto mb-12 p-2 text-center text-lg leading-relaxed text-white'>
              Our services are designed to help you meet rigorous regulatory standards. We <br />{' '}
              provide detailed, audit-ready reporting and long-term log retention to support your{' '}
              <br /> compliance needs for HIPAA, GDPR, PCI DSS, CMMC, and more.
            </p>

            {/* CTA Button */}
            <div className='mx-auto flex w-fit items-center justify-center rounded-[8px] border border-[#00AEEF]'>
              <Link to={'/contact'} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <button className='px-8 py-4 text-lg font-medium text-[#00AEEF] uppercase'>
                  Request a Compliance Consultation
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className='py-[120px]'>
        <div className='container mx-auto px-[16px] md:px-6'>
          <div className='flex flex-col items-center justify-center space-y-[40px]'>
            <h1 className='text-center text-3xl font-bold md:text-[48px]'>
              Ready to Build a More Resilient Security <br /> Posture?
            </h1>
            <p className='text-[18px]'>
              {' '}
              See exactly how Vijilan can integrate with your environment and augment your team.{' '}
              <br /> Schedule a technical, no-obligation demo with one of our security architects.
            </p>
            <Link to={'/contact'} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <GradientButton children={'SCHEDULE A SECURITY ARCHITECT DEMO'} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MidMarketEnterPrice;
