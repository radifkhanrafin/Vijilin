//  Responsive complete

import Heading_Btn from '@components/Heading_Btn';
import { ChevronRight } from 'lucide-react';
import React from 'react';
import NumberShow from '../component/NumberShow';
import MesurableComponentDashboard from '../component/MesurableComponentDashboard';
import CommonTextCard from '../component/CommonTextCard';
import { awsCard, controllArray, IT_IO } from '@app/Constant/Constant';
import ListComponent from '../component/ListComponent';
import DashBoardCard from '../component/DashBoardCard';
import ProfileHRCard from '../component/ProfileHRCard';
import DashboardSideText from '../component/DashboardSideText';
import { Link } from 'react-router-dom';

const Federal_cmmc_case = () => {
  const numberArray = [
    {
      label: 'Weeks to Compliance',
      text: '6',
    },
    {
      label: 'Audit Success',
      text: '100%',
    },
    {
      label: 'CMMC Controls',
      text: '110',
    },
    {
      label: 'CUI Protection',
      text: '24/7',
    },
  ];

  const list1 = [
    'Complex Compliance Framework: The 110 controls required for CMMC 2.0 Level 2 were complex and overwhelming to implement and document independently',
    'Tight Deadline: Faced a looming deadline to achieve compliance or risk losing eligibility for critical federal contracts',
    'Protecting CUI: Mandate to protect Controlled Unclassified Information (CUI) but lacked advanced 24/7 monitoring and response capabilities',
    'Lack of In-House Expertise: Internal IT team did not have specialized cybersecurity expertise required to build and manage CMMC-compliant security program',
    'Resource Limitations: Lacked budget and personnel to build in-house 24/7 Security Operations Center (SOC)',
    'Contract Eligibility: Failure to achieve CMMC compliance would result in loss of major revenue streams from federal contracts',
    'Audit Documentation: Required detailed documentation and reporting to pass rigorous CMMC assessment',
  ];

  const list2 = [
    '24/7 Monitoring & Active Remediation: Continuous threat detection and response meeting CMMC incident response requirements',
    'Managed Endpoint Detection & Response (EDR): Advanced protection for systems handling CUI and sensitive government data',
    'Comprehensive Log Management: Detailed logging and reporting capabilities required for CMMC audit purposes',
    'Audit-Ready Documentation: Automated generation of compliance reports and evidence collection',
    'Expert Security Management: Professional SOC services eliminating need for internal cybersecurity hiring',
  ];

  const federalCard = [
    {
      metric: '6',
      label: 'Weeks to Compliance',
      text: 'Record-time CMMC 2.0 Level 2 achievement through streamlined deployment',
    },
    {
      metric: '100%',
      label: 'Audit Success',
      text: 'Perfect score on CMMC Level 2 assessment with zero findings',
    },
    {
      metric: '110',
      label: 'Controls Implemented',
      text: 'Complete coverage of all CMMC 2.0 Level 2 security requirements',
    },
    {
      metric: '$0',
      label: 'Contract Revenue Lost',
      text: 'Maintained eligibility for all DoD contracts and secured new ones',
    },
    {
      metric: '24/7',
      label: 'CUI Protection',
      text: 'Continuous monitoring and protection of sensitive government data',
    },
    {
      metric: '100%',
      label: 'Operational Burden Reduction',
      text: 'Turnkey solution eliminating need for additional cybersecurity staff',
    },
  ];

  const excelList = [
    {
      label: 'Compliance-as-a-Service',
      text: 'Vijilan provides a comprehensive solution that maps directly to complex compliance frameworks like CMMC, removing the guesswork for federal contractors. Our pre-built compliance mappings accelerate implementation and ensure complete coverage.',
    },
    {
      label: 'Streamlined AWS Marketplace Procurement',
      text: 'Offering solutions through the AWS Marketplace simplifies the buying process for government contractors and enables rapid deployment. This eliminates lengthy procurement cycles and enables immediate compliance progress.',
    },
    {
      label: 'Rapid Time-to-Value',
      text: "Vijilan's efficient onboarding and expert management allow federal contractors to achieve their security and compliance goals in weeks, not months. Our proven methodology ensures successful compliance outcomes under tight deadlines.",
    },
    {
      label: 'All-in-One Solution',
      text: 'Vijilan delivers the complete combination of technology (EDR, SIEM), process (24/7 monitoring), and people (expert SOC analysts) required to satisfy stringent government security mandates like CMMC 2.0.',
    },
  ];

  return (
    <div className=''>
      {/* top part */}
      <section className='pt-[150px]'>
        <div className='container mx-auto px-[16px] md:px-6'>
          <div className='mb-8'>
            <nav className='flex flex-wrap items-center text-[12px]'>
              <Link to={'/'} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <span className='cursor-pointer' style={{ color: '#7E7E7E' }}>
                  Home
                </span>
              </Link>
              <ChevronRight className='mx-2 h-4 w-4' style={{ color: '#7E7E7E' }} />
              <Link
                to={'/resources'}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <span className='cursor-pointer' style={{ color: '#7E7E7E' }}>
                  Resources
                </span>
              </Link>
              <ChevronRight className='mx-2 h-4 w-4' style={{ color: '#7E7E7E' }} />
              <Link
                to={'/case-studies'}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <span className='cursor-pointer' style={{ color: '#7E7E7E' }}>
                  Case Studies
                </span>
              </Link>
              <ChevronRight className='mx-2 h-4 w-4' style={{ color: '#7E7E7E' }} />
              <span className='text-[13px]' style={{ color: '#00AEEF' }}>
                Federal CMMC Success
              </span>
            </nav>
          </div>
        </div>
      </section>

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
              Federal Success
            </button>
          </div>
        </div>
      </section>

      {/* heading button */}
      <div className='container mx-auto px-[16px] md:px-6'>
        <div className='mb-16'>
          <h1 className='mb-8 text-center text-3xl leading-14 font-bold md:text-4xl lg:text-5xl'>
            Federal Contractor Achieves CMMC <br /> 2.0 Readiness in 6 Weeks
          </h1>
          <p className='text-center text-[18px]'>
            Discover how a defense contractor achieved CMMC 2.0 Level 2 compliance in record <br />{' '}
            time through Vijilan's AWS Marketplace solution, securing critical DoD contracts with{' '}
            <br /> 100% audit success.
          </p>
        </div>

        <div className='mx-auto grid w-full max-w-[800px] grid-cols-2 gap-5 md:grid-cols-4'>
          {numberArray.map((card) => (
            <NumberShow link={card.label} number={card.text} />
          ))}
        </div>
      </div>

      {/* divided 2 cols */}

      <div className='container mx-auto px-[16px] md:px-6'>
        <div className='mt-12 grid grid-cols-1 gap-8 md:grid-cols-2'>
          <div className='grid-cols-1'>
            <div
              className='mt-5'
              style={{
                background: 'linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)',
              }}
            >
              <CommonTextCard
                heading1='Us Executive Summary'
                p1='A mid-sized federal government contractor specializing in Department of Defense (DoD) contracts faced an urgent business-critical challenge: achieving Cybersecurity Maturity Model Certification (CMMC) 2.0 Level 2 compliance to remain eligible for lucrative government contracts. With a tight deadline and complex compliance requirements involving 110 security controls, the contractor needed a rapid, comprehensive solution that would provide not only the necessary security capabilities but also the detailed documentation and audit readiness required for CMMC certification.'
                heading2='Production Continuity Achievement'
                card={controllArray}
              />
            </div>
            {/* ⚠️ Government Compliance Challenges */}
            <div className='mt-10'>
              <ListComponent
                heading='⚠️ Government Compliance Challenges '
                p1='Federal contractors face unique cybersecurity challenges that combine complex regulatory requirements with the need to protect sensitive government information'
                array={list1}
                headingSize={true}
              />
            </div>

            <div className='mt-10'>
              <CommonTextCard
                // array={securityArray}
                card={awsCard}
                heading1='☁️ AWS Marketplace Deployment Advantage'
                p1="The contractor procured Vijilan's ThreatRemediate service directly through the AWS Marketplace, which significantly streamlined and accelerated both the procurement and deployment process:"
                listHead='Comprehensive CMMC-Mapped Security Program'
                list_p='The solution provided a complete security program that mapped directly to CMMC 2.0 controls, eliminating guesswork and ensuring comprehensive coverage of all 110 required security controls.'
                list={list2}
                list_key='Key Solution Components:'
                SizeControl={true}
                listSize={true}
              />
            </div>
            <div className='mt-10'>
              <Heading_Btn
                h3='⏱️ 6-Week Compliance Timeline'
                desc={
                  "Vijilan's streamlined deployment process enabled the contractor to achieve full CMMC 2.0 Level 2 compliance in just 6 weeks:"
                }
              />

              <div className='-mt-[70px]'>
                <h1 className='mb-8 text-center font-semibold'>
                  {' '}
                  🛡️ Comprehensive IT/OT Security Solution
                </h1>
                <div className='mx-6 grid grid-cols-1 gap-5 md:mx-16 lg:grid-cols-2'>
                  {IT_IO.map((card) => (
                    <DashBoardCard
                      icon={card.icon}
                      head={card.label}
                      desc={card.text}
                      iconSize={true}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className='grid-cols-1'>
            <div className='mt-5'>
              <ProfileHRCard
                h1='Federal Contractor Profile'
                l1l='Contractor Type'
                l1r='Defense Contractor'
                l2l='Size'
                l2r='Mid-Sized'
                l3l='Primary Customer'
                l3r='Department of Defense'
                l4l='Compliance Requirement'
                l4r='CMMC 2.0 Level 2'
                l5l='Data Classification'
                l5r='CUI Protection'
                l6l='Deployment'
                l6r='AWS Marketplace'
                SizeModify={true}
              />
            </div>

            <div className='mt-10'>
              <MesurableComponentDashboard
                heading='Manufacturing Security & Operational Results'
                array={federalCard}
                isColor={true}
              />
            </div>

            <div className='mt-10'>
              <DashboardSideText
                desc="The CMMC deadline was a make-or-break moment for our business. We didn't have the time or expertise to build a compliant program from scratch. Finding Vijilan on the AWS Marketplace was a lifesaver. Their team got us deployed and audit-ready in just six weeks, and we passed our assessment without a single issue. We couldn't have done it without them."
                author='CEO, Defense Contractor'
              />
            </div>

            <div className='mt-10'>
              <CommonTextCard
                array={excelList}
                heading='Why Vijilan Excels in Government  Compliance'
              />
            </div>
          </div>
        </div>

        {/* last section  */}

        <div className='py-16'>
          <Heading_Btn
            h1={'Achieve CMMC Compliance\nFast'}
            desc={
              " Discover how Vijilan's AWS Marketplace solution can help your federal contracting\nbusiness achieve CMMC 2.0 compliance in record time while securing critical\ngovernment contracts."
            }
            btn1='Get started on aws market place'
            btn9=' schedule  cmmc consultation'
            url={'/mid-market-enterprice'}
          />
        </div>
      </div>
    </div>
  );
};

export default Federal_cmmc_case;
