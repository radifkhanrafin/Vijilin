// Responsive Complete

import Heading_Btn from '@components/Heading_Btn';
import { ChevronRight } from 'lucide-react';
import React from 'react';
import NumberShow from '../component/NumberShow';
import ProfileHRCard from '../component/ProfileHRCard';
import ListComponent from '../component/ListComponent';
import DashboardSideText from '../component/DashboardSideText';
import CommonTextCard from '../component/CommonTextCard';
import {
  coreTechnology,
  DeploymentTimeline,
  ThreatRemediate_Ultimate,
} from '@app/Constant/Constant';
import { Link } from 'react-router-dom';

const MSP_growth_case = () => {
  const numberArray = [
    {
      label: '30%',
      text: 'MRR Growth',
    },
    {
      label: '3x',
      text: 'Alert Reduction',
    },
    {
      label: '95%',
      text: 'Client Retention',
    },
    {
      label: '4',
      text: 'Weeks to Deploy',
    },
  ];

  const synergyBenefits = [
    {
      label: 'Technology Synergy',
      text: 'The integration of CrowdStrike, Corelight, and Cribl provided streamlined operations, cost-effective security, and rapid threat detection and remediation capabilities that would have been impossible to achieve with individual point solutions.',
    },
    {
      label: 'Managed Remediation Model',
      text: "Unlike detection-only solutions that simply generate more alerts, Vijilan's SOC provided end-to-end containment and remediation, removing the operational burden from the MSP's internal team while ensuring threats were actually stopped.",
    },
    {
      label: 'Partner-First Approach',
      text: 'The white-labeled, partner-centric model allowed the MSP to deliver advanced security solutions under their own brand, reinforcing their market position and building stronger client trust without revealing the underlying technology partnerships.',
    },
    {
      label: 'Scalable Framework',
      text: "The solution scaled seamlessly with the MSP's growth, accommodating new clients without proportional increases in operational overhead, licensing complexity, or technical resource requirements.",
    },
  ];

  const solutionComponents = [
    'ThreatRemediate Ultimate',
    'CrowdStrike Falcon XDR',
    'Corelight Network Detection',
    'Cribl Data Optimization',
    'Managed ITDR',
    'Exposure Management',
    '24/7 SOC Services',
  ];

  const list = [
    '     Scalability Crisis: Difficulty scaling security services profitably across their diverse client base',
    'Alert Fatigue: Technical team overwhelmed by excessive security notifications, impacting morale and efficiency',
    'High Operational Overhead: Complex management of multiple security tools creating operational burden',
    'Competitive Pressure: Struggled to differentiate their managed security offerings from competitors',
    'Compliance Requirements: Needed robust security for regulated clients (HIPAA, GLBA, SEC)',
    'Resource Limitations: Limited internal resources to scale security operations effectively',
    'Growing Threat Landscape: Increasing cybersecurity risks to their client base',
  ];

  const list1 = [
    'Premium pricing for enterprise-grade security services',
    'Higher client retention rates due to improved service quality',
    'Ability to win larger, more complex deals',
    'Cross-selling opportunities with existing clients',
  ];

  const list2 = [
    'Technical team could focus on strategic initiatives rather than alert triage',
    'Improved employee satisfaction and reduced turnover',
    'Enhanced response times for non-security IT issues',
    'More time for client relationship building and business development',
  ];

  const list3 = [
    'Clients felt more secure and protected from cyber threats',
    'Proactive threat hunting identified and stopped threats before impact',
    'Compliance requirements met more easily and comprehensively',
    "Enhanced trust in the MSP's technical capabilities",
  ];

  const MSP_Outcomes = [
    {
      metric: '30%',
      mainTitle: 'Revenue Growth',
      subTitle: 'Increased monthly recurring revenue through premium security services',
    },
    {
      metric: '50%',
      mainTitle: 'Alert Reduction',
      subTitle: 'Dramatically reduced technical team burnout and improved efficiency',
    },
    {
      metric: '95%',
      mainTitle: 'Client Retention',
      subTitle: 'Enhanced client satisfaction with proactive security services',
    },
    {
      metric: '100%',
      mainTitle: 'Implementation',
      subTitle: 'Rapid deployment without disrupting existing operations',
    },
  ];

  return (
    <div>
      <div>
        {/* top part */}
        <div className='mb-8 pt-[150px]'>
          <div className='container mx-auto px-[16px] md:px-6'>
            <nav className='flex flex-wrap items-center text-[12px]'>
              <div className='flex items-center'>
                <Link to='/' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                  <span className='cursor-pointer text-white hover:text-blue-600'>Home</span>
                </Link>

                <ChevronRight className='mx-2 h-4 w-4' style={{ color: '#7E7E7E' }} />
                <Link
                  to='/resources'
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  <span className='cursor-pointer' style={{ color: '#7E7E7E' }}>
                    Resources
                  </span>
                </Link>

                <ChevronRight className='mx-2 h-4 w-4' style={{ color: '#7E7E7E' }} />
                <Link
                  to='/case-studies'
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  <span className='cursor-pointer' style={{ color: '#7E7E7E' }}>
                    Case Studies
                  </span>
                </Link>

                <ChevronRight className='mx-2 h-4 w-4' style={{ color: '#7E7E7E' }} />
                <span className='text-[13px] font-medium' style={{ color: '#00AEEF' }}>
                  MSP 30% MRR Growth
                </span>
              </div>
            </nav>
          </div>
        </div>

        {/* button */}
        <section className='flex justify-center'>
          <div className='container mx-auto px-[16px] md:px-6'>
            <div className='flex justify-center'>
              <button
                className='inline-flex items-center space-x-3 rounded-[40px] p-[25px] py-[15px] text-[14px] font-bold text-white md:px-[40px]'
                style={{
                  background: 'linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)',
                }}
              >
                MSP Partner Success
              </button>
            </div>
          </div>
          {/* heading button */}
        </section>

        <div className='container mx-auto px-[16px] md:px-6'>
          <div className='mt-4 mb-16'>
            <h1 className='mb-8 text-center text-3xl leading-14 font-bold md:text-4xl lg:text-5xl'>
              How a Gold Tier MSP Achieved 30% <br /> MRR Growth with ThreatRemediate <br />{' '}
              Ultimate
            </h1>
            <p className='text-center text-[18px]'>
              Discover how our flagship managed XDR solution transformed an established MSP's <br />{' '}
              security practice, driving significant revenue growth while reducing operational{' '}
              <br /> overhead.
            </p>
          </div>

          <div className='mx-auto grid w-full max-w-4xl grid-cols-2 gap-5 md:grid-cols-4'>
            {numberArray.map((card) => (
              <NumberShow link={card.text} number={card.label} />
            ))}
          </div>
        </div>
      </div>

      <div className='container mx-auto px-[16px] pb-[120px] md:px-6'>
        <div className='mt-12 grid grid-cols-1 items-start justify-between gap-8 md:grid-cols-2'>
          <div className='grid-cols-1'>
            <div className='mt-5'>
              <CommonTextCard
                heading1='🏥 Executive Summary'
                p1=" A Gold Tier MSP with over 100 clients faced mounting challenges in scaling their security services profitably. Alert fatigue, operational complexity, and competitive pressure threatened their growth. By implementing Vijilan's ThreatRemediate Ultimate, they achieved remarkable results within six months:"
                heading2='Key Achievement'
                card={MSP_Outcomes}
                SizeControl={true}
              />
            </div>

            <ListComponent
              heading='🚨 The Challenge'
              p1='As a successful Gold Tier MSP managing over 100 clients across various industries, the company faced several critical obstacles that threatened their continued growth and profitability:'
              array={list}
              p2="The MSP's CEO explained:  We were at a crossroads. Our clients needed more sophisticated security, but we couldn't scale our current approach without dramatically increasing costs and complexity. We needed a solution that would let us grow our security practice without overwhelming our team."
              headingSize={true}
            />

            <div
              className='mt-10 px-[30px] py-5'
              style={{
                background: 'linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)',
              }}
            >
              {/* <h1 className='text-center mt-8 font-semibold'>{heading}</h1> */}
              <h1 className='mt-8 mb-4 text-left text-[24px] font-medium'>
                💡 The Solution: ThreatRemediate Ultimate
              </h1>
              <p className='my-3'>
                Vijilan deployed ThreatRemediate Ultimate, our flagship fully managed Extended
                Detection and Response (XDR) solution. This comprehensive platform integrated
                seamlessly with the MSP's existing infrastructure while providing enterprise-grade
                security capabilities.
              </p>

              <div className='grid gap-5 sm:grid-cols-1 md:grid-cols-2'>
                {ThreatRemediate_Ultimate.map((card, index) => (
                  <div key={index} className='flex items-center justify-center'>
                    <div className='flex flex-col items-center justify-center gap-5 rounded-lg bg-[#576675] px-4 py-8 text-center'>
                      <img src={card.icon} alt='' />
                      <h4 className='text-[16px] font-bold'>{card.label}</h4>
                      <p className='text-[16px]'>{card.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div></div>
            </div>

            <div className='mt-10'>
              <CommonTextCard
                array={DeploymentTimeline}
                heading=' ⏱️ Implementation Timeline'
                p2='The implementation was designed for minimal disruption while maximizing speed to value:'
                li={true}
              />
            </div>
            <div className='mt-10'>
              <ListComponent
                heading='📈 Results & Business Impact'
                p11='Revenue Growth (30% MRR Increase)'
                p22='Operational Efficiency (50% Alert Reduction)'
                p3='Client Satisfaction (95% Retention Rate)'
                p30="The MSP's security MRR grew by 30% within six months, driven by their ability to offer differentiated, comprehensive cybersecurity services. This growth came from:"
                p31='The dramatic reduction in alert fatigue freed up internal technical resources:'
                p32='The comprehensive security coverage and proactive threat response significantly improved client relationships:'
                array={list1}
                array2={list2}
                array3={list3}
                p4='The transformation was both immediate and sustained, with measurable improvements across all key business metrics:'
              />
            </div>
          </div>

          <div className='grid-cols-1'>
            <div className='mt-5'>
              <ProfileHRCard
                h1='Company Profile'
                l1l='Company Type'
                l1r='MSP (Gold Tier)'
                l2l='Client Count'
                l2r='100+ Clients'
                l3l='Industry Focus'
                l3r='General IT Services'
                l4l='Geographic Region'
                l4r='North America'
                l5l='Team Size'
                l5r='25-50 Employees'
                l6l='Partnership Level'
                l6r='Vijilan Gold Partner'
                SizeModify={true}
              />
            </div>

            <ListComponent
              heading='Solution Components'
              array={solutionComponents}
              isColor={true}
            />

            <div className='mt-10'>
              <DashboardSideText
                desc="Integrating Vijilan's ThreatRemediate Ultimate transformed our managed security practice. We grew revenue quickly, cut alert noise dramatically, and improved our team's efficiency and morale. Vijilan is now a cornerstone of our growth strategy."
                author='CEO, Gold Tier MSP Partner'
              />
            </div>

            <div className='mt-10'>
              <CommonTextCard array={synergyBenefits} heading='🎯 Why This Partnership Succeeded' />
            </div>

            <div className='mt-10'>
              <Heading_Btn
                bg='#615F6A'
                h1='Download Resources '
                desc={
                  'Get the complete case study with\ndetailed metrics and implementation\nguides.'
                }
                btn1=' download case study'
                btn='schedule  consultation'
                isSmallHeading={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MSP_growth_case;
