// Responsive complete

import Heading_Btn from '@components/Heading_Btn';
import React from 'react';
import security from '../../Assets/security.svg';
import soc from '../../Assets/soc.svg';
import actionable from '../../Assets/actionable.svg';
import data from '../../Assets/data.svg';
import fullstack from '../../Assets/full-stack.svg';
import riskRed from '../../Assets/risk-reduation.svg';
import SecurityCard from '@components/SecurityCard';
import InfoSection from '@components/InfoSection';
import NavyBlueBackground from '@components/NavyBlueBackground';
import { Link } from 'react-router-dom';

const EnterpriseLanding = ({}) => {
  const strategicCardData = [
    {
      icon: security,
      title: 'Unify Your Security Stack',
      description: `We ingest and correlate data from your disparate tools, eliminating blind spots and providing true cross-domain visibility without costly rip-and-replace projects.`,
      height: '390px',
    },
    {
      icon: soc,
      title: "Extend Your SOC's Reach",
      description: `Our 24/7 US-Based SOC acts as a direct extension of your team, handling the noise of alert triage so your experts can focus on strategic initiatives.`,
      height: '300px',
    },
    {
      icon: actionable,
      title: 'Receive Actionable Incidents',
      description: `Leveraging AI and expert analysis, we deliver only high-fidelity, actionable incidents that require your attention, freeing your team from the noise of false positives.`,
      height: '434px',
    },
    {
      icon: data,
      title: 'Optimize Your Data Costs',
      description: `Demonstrate clear ROI with our data optimization services powered by Cribl. We can significantly reduce your SIEM and data storage costs while enriching your security data.`,
      height: '335px',
      marginTop: '40px',
    },
    {
      icon: fullstack,
      title: 'Achieve Full-Stack Visibility & Unified Defense',
      description: `CISOs want one pane of glass—not 17 dashboards. We consolidate telemetry and apply advanced correlation across endpoints, network, cloud, identity, and SaaS environments, enabling your team to see real threats—not isolated alerts—for better, faster decision-making.`,
      height: '405px',
      marginTop: '130px',
    },
    {
      icon: riskRed,
      title: 'Proactive Risk Reduction & Strategic Enablement',
      description: `CISOs expect MDR to go beyond monitoring. Our SOC doesn't just monitor—we treat alerts as opportunities for improvement, develop playbooks, optimize SLAs, and build cost-effective frameworks that evolve with your risk posture. That's strategic partnership.`,
      height: '420px',
    },
  ];
  return (
    <>
      <section className='pt-[150px] md:px-6'>
        <div className='container mx-auto px-[16px] md:px-6'>
          <div className='text-center'>
            <Heading_Btn
              h1={`Stop Chasing Alerts. Start Neutralizing\nThreats.`}
              desc={`Vijilan's managed XDR and SIEM services augment your security team, unifying\nvisibility across your complex environment and delivering expert-led, active\nremediation 24/7.`}
              btn1={'request a custom demo'}
              btn2={'download the ciso handbook'}
              url={'/contact'}
            />
          </div>
        </div>
      </section>

      <section className='pt-[50px] pb-[50px]'>
        <div className='container mx-auto px-[16px] md:px-6'>
          <div className='mb-12 text-center'>
            <h2 className='text-3xl font-bold tracking-tight text-white md:text-[40px]'>
              From Data Chaos to Strategic Clarity
            </h2>
          </div>

          <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            <div
              className={`relative bg-filt flex flex-col items-center justify-center rounded-[16px] bg-[#00AEEF3D] px-[21px] py-[32px]`}
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
              <div className='my-4 flex  items-center justify-center rounded-lg bg-cyan-400'>
                <img src={security} alt='' className='' />
              </div>
              <h3 className='mb-3 text-center text-[24px] font-medium text-white'>
                Unify Your Security Stack
              </h3>
              <p className='text-center text-white text-[18px]'>
                {' '}
                We ingest and correlate data from your disparate tools, eliminating blind spots and
                providing true cross-domain visibility without costly rip-and-replace projects.
              </p>
            </div>
            <div
              className={`relative flex flex-col bg-filt items-center justify-center rounded-[16px] bg-[#00AEEF3D] px-[21px] py-[32px] lg:h-[297px]`}
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
              <div className='my-4 flex  items-center justify-center rounded-lg bg-cyan-400'>
                <img src={soc} alt='' />
              </div>
              <h3 className='mb-3 text-center text-[24px] font-medium text-white'>
                Extend Your SOC's Reach
              </h3>
              <p className='text-center text-white text-[18px]'>
                {' '}
                Our 24/7 US-Based SOC acts as a direct extension of your team, handling the noise of
                alert triage so your experts can focus on strategic initiatives.
              </p>
            </div>
            <div
              className={`relative flex flex-col bg-filt items-center justify-center rounded-[16px] bg-[#00AEEF3D] px-[21px] py-[32px] lg:h-[434px]`}
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
              <div className='my-4 flex  items-center justify-center rounded-lg bg-cyan-400'>
                <img src={actionable} alt='' />
              </div>
              <h3 className='mb-3 text-center text-[24px] font-medium text-white'>
                Receive Actionable Incidents
              </h3>
              <p className='text-center text-white text-[18px]'>
                {' '}
                Leveraging AI and expert analysis, we deliver only high-fidelity, actionable
                incidents that require your attention, freeing your team from the noise of false
                positives.
              </p>
            </div>
            <div
              className={`relative flex flex-col bg-filt items-center justify-center rounded-[16px] bg-[#00AEEF3D] px-[21px] py-[32px] lg:h-[393px]`}
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
              <div className='my-4 flex  items-center justify-center rounded-lg bg-cyan-400'>
                <img src={data} alt='' />
              </div>
              <h3 className='mb-3 text-center text-[24px] font-medium text-white'>
                Optimize Your Data Costs
              </h3>
              <p className='text-center text-white text-[18px]'>
                {' '}
                Demonstrate clear ROI with our data optimization services powered by Cribl. We can
                significantly reduce your SIEM and data storage costs while enriching your security
                data.
              </p>
            </div>
            <div
              className={`relative flex flex-col bg-filt items-center justify-center rounded-[16px] bg-[#00AEEF3D] px-[21px] py-[32px] lg:-mt-[135px] lg:h-[441px]`}
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
              <div className='my-4 flex  items-center justify-center rounded-lg bg-cyan-400'>
                <img src={fullstack} alt='' />
              </div>
              <h3 className='mb-3 text-center text-[24px] font-medium text-white'>
                Achieve Full-Stack Visibility & Unified Defense
              </h3>
              <p className='text-center text-white text-[18px]'>
                {' '}
                CISOs want one pane of glass—not 17 dashboards. We consolidate telemetry and apply
                advanced correlation across endpoints, network, cloud, identity, and SaaS
                environments, enabling your team to see real threats—not isolated alerts—for better,
                faster decision-making.
              </p>
            </div>
            <div
              className={`relative flex flex-col bg-filt items-center justify-center rounded-[16px] bg-[#00AEEF3D] px-[21px] py-[32px] lg:h-[486px]`}
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
              <div className='my-4 flex  items-center justify-center rounded-lg bg-cyan-400'>
                <img src={riskRed} alt='' />
              </div>
              <h3 className='mb-3 text-center text-[24px] font-medium text-white'>
                Proactive Risk Reduction & Strategic Enablement
              </h3>
              <p className='text-center text-white text-[18px]'>
                {' '}
                CISOs expect MDR to go beyond monitoring. Our SOC doesn't just monitor—we treat
                alerts as opportunities for improvement, develop playbooks, optimize SLAs, and build
                cost-effective frameworks that evolve with your risk posture. That's strategic
                partnership.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='pt-16'>
        <div className='container mx-auto px-[16px] md:px-6'>
          <div className='text-center'>
            <h2 className='text-2xl font-bold tracking-tight text-white md:text-[40px]'>
              Comprehensive Solutions for Your Entire Attack Surface
            </h2>
          </div>
          <InfoSection
            design2={true}
            width={'511px'}
            height={'511px'}
            heading={'ThreatRemediate™ Ultimate'}
            desc={
              "Our flagship managed XDR service provides full-lifecycle, hands-on remediation. We don't just alert—we contain and neutralize threats across your endpoints, cloud, identity, and network."
            }
            subtitle={'Fully Managed Detection, Response & Remediation'}
            btnText={'view threatremediate details'}
            position='left'
            url={'/threat-respond-service-2'}
          />
        </div>
      </section>

      <section className='pt-16 md:pt-0'>
        <div className='container mx-auto px-[16px] md:px-6'>
          <InfoSection
            design2={true}
            width={'511px'}
            height={'511px'}
            heading={'Managed SIEM & Data Optimization'}
            desc={
              'Let our experts deploy, manage, and optimize CrowdStrike LogScale, powered by our unique Cribl integration. Gain unparalleled visibility and control over your data while reducing costs.'
            }
            subtitle={'Modernize Your SOC with LogScale & Cribl'}
            btnText={'explore siem services'}
            url={'/managed-siem-soc'}
          />
        </div>
      </section>

      <section className='pb-16'>
        <div className='container mx-auto px-[16px] md:px-6'>
          <InfoSection
            design2={true}
            width={'511px'}
            height={'511px'}
            heading={'Professional Services'}
            desc={
              'Augment your team with our certified experts for seamless implementation and ongoing management of leading technologies, including Cribl, Corelight, and the full CrowdStrike Falcon platform.'
            }
            subtitle={'Expert Implementation & Management'}
            btnText={'view professional services'}
            position='left'
            url={'/visilan-professional-service'}
          />
        </div>
      </section>

      <section className='py-16'>
        <div className='container mx-auto px-[16px] md:px-6'>
          <div
            className='w-full rounded-[24px]'
            style={{
              background: 'linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)',
            }}
          >
            <div className='flex flex-col items-center justify-center gap-8 py-12 text-center'>
              <div className='flex items-center justify-center rounded-[29px] border-2 border-[#00AEEF] bg-transparent px-[16px] py-[14px] font-sans transition-colors duration-200 hover:bg-[#00AEEF]/10'>
                <span className='text-xl font-semibold tracking-wide text-white'>
                  SOC 2 Type II Certified
                </span>
              </div>

              <div className='max-w-4xl space-y-8'>
                <h1 className='text-xl font-bold text-white md:text-3xl lg:text-5xl'>
                  Achieve and Maintain Compliance with Confidence
                </h1>
                <p className='text-sm leading-relaxed text-[#FFFFFF] md:text-lg'>
                  Our services are designed to help you meet rigorous regulatory standards. We{' '}
                  <br /> provide detailed, audit-ready reporting and long-term log retention to
                  support your <br />
                  compliance needs for HIPAA, GDPR, PCI DSS, CMMC, and more.
                </p>
              </div>

              <div className='mt-8 flex max-w-4xl flex-wrap items-center justify-center gap-3'>
                <div
                  className='flex h-[40px] items-center justify-center rounded-[65px] border border-[#F5F5F5] px-[24px] text-[#FFFFFFCC]'
                  style={{
                    background: 'linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)',
                  }}
                >
                  <span className='text-[18px] font-bold tracking-wide text-white'>HIPAA</span>
                </div>
                <div
                  className='flex h-[40px] items-center justify-center rounded-[65px] border border-[#F5F5F5] px-[24px] text-[#FFFFFFCC]'
                  style={{
                    background: 'linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)',
                  }}
                >
                  <span className='text-[18px] font-bold tracking-wide text-white'>GDPR</span>
                </div>
                <div
                  className='flex h-[40px] items-center justify-center rounded-[65px] border border-[#F5F5F5] px-[24px] text-[#FFFFFFCC]'
                  style={{
                    background: 'linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)',
                  }}
                >
                  <span className='text-[18px] font-bold tracking-wide text-white'>PCI DSS</span>
                </div>
                <div
                  className='flex h-[40px] items-center justify-center rounded-[65px] border border-[#F5F5F5] px-[24px] text-[#FFFFFFCC]'
                  style={{
                    background: 'linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)',
                  }}
                >
                  <span className='text-[18px] font-bold tracking-wide text-white'>CMMC</span>
                </div>
                <div
                  className='flex h-[40px] items-center justify-center rounded-[65px] border border-[#F5F5F5] px-[24px] text-[#FFFFFFCC]'
                  style={{
                    background: 'linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)',
                  }}
                >
                  <span className='text-[18px] font-bold tracking-wide text-white'>SOX</span>
                </div>
                <div
                  className='flex h-[40px] items-center justify-center rounded-[65px] border border-[#F5F5F5] px-[24px] text-[#FFFFFFCC]'
                  style={{
                    background: 'linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)',
                  }}
                >
                  <span className='text-[18px] font-bold tracking-wide text-white'>NIST</span>
                </div>
                <div
                  className='flex h-[40px] items-center justify-center rounded-[65px] border border-[#F5F5F5] px-[24px] text-[#FFFFFFCC]'
                  style={{
                    background: 'linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)',
                  }}
                >
                  <span className='text-[18px] font-bold tracking-wide text-white'>ISO 27001</span>
                </div>
              </div>

              <Link
                to={'/contact'}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className='mt-8'
              >
                <div
                  className='inline-block cursor-pointer rounded-[8px] border-2 border-solid border-[#00AEEF] p-[18px] text-center font-semibold text-[#00AEEF] uppercase select-none md:p-[24px]'
                  style={{ color: '#00AEEF' }}
                >
                  request a compliance consultation
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className='pb-16'>
        <div className='container mx-auto px-[16px] md:px-6'>
          <Heading_Btn
            h1={'Ready to Build a More Resilient Security\nPosture?'}
            desc={
              'See exactly how Vijilan can integrate with your environment and augment your team.\nSchedule a technical, no-obligation demo with one of our security architects.'
            }
            btn5={'schedule a security architect demo'}
          />
        </div>
      </section>
    </>
  );
};

export default EnterpriseLanding;
