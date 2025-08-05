// responsive complete

import Heading_Btn from '@components/Heading_Btn';
import { ChevronRight, Section } from 'lucide-react';
import React from 'react';
import NumberShow from '../component/NumberShow';
import DashBoardCard from '../component/DashBoardCard';
import { benefitsData, ExucativeSummary, SalesProcess, SMBCard } from '@app/Constant/Constant';
import CardContent from '@components/CardContent';
import ProfileHRCard from '../component/ProfileHRCard';
import DashboardSideCard from '../component/DashboardSideCard';
import DashboardSideText from '../component/DashboardSideText';
import CommonTextCard from '../component/CommonTextCard';
import ListComponent from '../component/ListComponent';
import MesurableComponentDashboard from '../component/MesurableComponentDashboard';
import { Link } from 'react-router-dom';

const Success_study_case = () => {
  const NumberArray = [
    {
      label: '2x',
      text: 'Attach Rate Increase',
    },
    {
      label: '40%',
      text: 'Margin Growth',
    },
    {
      label: '100%',
      text: 'Hands-Off',
    },
    {
      label: '1 wk',
      text: 'Time to First Sale',
    },
  ];

  const list1 = [
    'Sales Complexity: Existing security products required deep technical expertise to sell, creating barriers for the sales team',
    'Operational Overhead: Lacked internal SOC or technical staff to manage complex security services post-sale',
    'Profit Margins: Needed a solution with strong, predictable margins that contributed to recurring revenue',
    'Client Value Proposition: Required a solution with clear, easy-to-understand benefits that clients could quickly approve',
    'Competitive Positioning: Needed credible security offering to compete with established security-focused competitors',
    'Resource Allocation: Post-sale management of other security solutions drained resources from core sales activities',
    'Sales Enablement: Lacked the materials and expertise to effectively position and sell security services',
  ];

  const list2 = [
    'CrowdStrike-Powered XDR: Market-leading endpoint detection and response with brand recognition',
    'Automated Containment: Immediate threat isolation without manual intervention',
    "Full Remediation: Complete threat removal performed by Vijilan's expert SOC team",
    '24/7 Monitoring: Round-the-clock security operations center coverage',
    'Incident Response: Professional incident management and communication',
    'Compliance Reporting: Automated reports for regulatory requirements',
  ];

  const list3 = [
    'ThreatRemediate Enablement Kit: Complete sales and marketing toolkit',
    'Quick Sell Guide: Simplified sales process documentation',
    'Co-Brandable Materials: Customizable presentations, datasheets, and proposals',
    'Proposal Generation Tool: Automated proposal creation for faster response times',
    'Competitive Battle Cards: Positioning against Arctic Wolf and other competitors',
    'ROI Calculators: Tools to demonstrate clear client value',
  ];

  const fitForSales = [
    {
      label: 'Hands-Off Management',
      text: "Vijilan's fully managed service means the VAR doesn't need to build or maintain a SOC, handle incident response, or manage complex security tools. This aligns perfectly with a sales-focused business model, allowing the team to concentrate on what they do best: selling.",
    },
    {
      label: 'Easy to Sell & Profitable',
      text: 'The service provides a comprehensive, simplified security solution with a recurring revenue model. Pre-built sales and marketing materials make it easy for VARs to position, sell, and profit from the offering without requiring deep security expertise.',
    },
    {
      label: 'Clear Client Value',
      text: 'ThreatRemediate Complete provides SMBs with enterprise-grade XDR protection, reducing their operational burden and ensuring rapid threat containment and remediation. The value proposition is clear and easy for clients to understand and approve.',
    },
    {
      label: 'CrowdStrike Credibility',
      text: 'Leveraging the power and brand recognition of CrowdStrike adds significant market appeal and credibility to the offering, making it easier to compete against established security providers and justify premium pricing.',
    },
  ];

  const MeasurabeCard = [
    {
      label: 'Attach Rate',
      metric: '2x',
      text: 'Doubled security service attachment to existing deals',
    },
    {
      label: 'Attach Rate',
      metric: '40%',
      text: 'Doubled security service attachment to existing deals',
    },
    {
      label: 'Hands-Off',
      metric: '100%',
      text: 'Zero post-sale management required from VAR team',
    },
    {
      label: 'First Sale',
      metric: '1 wk',
      text: 'Time from enablement to first successful deal',
    },
    {
      label: 'Close Rate',
      metric: '85%',
      text: 'Higher close rate on security opportunities',
    },
    {
      label: 'Deal Size Growth',
      metric: '30%',
      text: 'Average contract value increase with security add-on',
    },
  ];

  const businessModel = [
    {
      label: 'Revenue Stream Diversification',
      text: "The addition of ThreatRemediate Complete created a high-margin recurring revenue stream that complemented the VAR's traditional hardware and software sales. This recurring component provided predictable income and improved overall business stability.",
    },
    {
      label: 'Sales Team Efficiency',
      text: 'The comprehensive sales enablement materials and simplified value proposition allowed the existing sales team to effectively sell security services without additional training or security expertise. This efficiency translated directly into improved sales performance.',
    },
    {
      label: 'Competitive Differentiation',
      text: "Offering enterprise-grade security powered by CrowdStrike provided significant competitive differentiation, allowing the VAR to win deals against competitors who couldn't match the security offering or were limited to basic antivirus solutions.",
    },
    {
      label: 'Client Relationship Enhancement',
      text: 'The security service transformed client relationships from transactional hardware/software purchases to ongoing strategic partnerships, resulting in higher client lifetime value and increased referral opportunities.',
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
              <span className='text-[13px] font-medium !text-blue-400'>Var Growth Success</span>
            </nav>
          </div>
        </div>
      </section>

      {/* hero section */}
      <section>
        <div className='container mx-auto px-[16px] md:px-6'>
          <div className='flex justify-center'>
            <h6 className='rounded-[40px] bg-[#BCBEC0] px-[20px] py-[15px] text-[14px] font-bold md:px-[40px]'>
              VAR Growth Outcomes
            </h6>
          </div>

          <Heading_Btn
            h1={'VAR Achieves 2x Attach Rate & 40% Margin\nGrowth with ThreatRemediate\nComplete'}
            desc={
              "Discover how a sales-focused Value-Added Reseller transformed their business with\nthe perfect 'hands-off' cybersecurity solution that's easy to sell and highly\nprofitable."
            }
            isLeading={true}
          />
          <div className='mx-auto -mt-10 grid w-full max-w-4xl grid-cols-2 gap-5 md:grid-cols-4'>
            {NumberArray.map((card) => (
              <NumberShow number={card.label} link={card.text} />
            ))}
          </div>
        </div>
      </section>

      <div className='container mx-auto px-[16px] md:px-6'>
        <div className='mt-12 grid grid-cols-1 gap-8 md:grid-cols-2'>
          {/* left col */}
          <div className='grid-cols-1'>
            <div
              className='mt-5 px-12 py-5'
              style={{
                background: 'linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)',
              }}
            >
              <div className='text-left'>
                <h1 className='my-5 text-[24px] font-medium'>📈 Executive Summary</h1>
                <p className='my-5 text-[16px]'>
                  {' '}
                  A mid-sized Value-Added Reseller with a strong sales focus needed a cybersecurity
                  solution that would complement their technology solutions and hardware sales
                  without adding operational complexity. They required a "hands-off" security
                  offering that was easy to sell, provided clear client value, and opened new
                  recurring revenue streams. Traditional security offerings were too complex to
                  package and sell effectively, often slowing down sales cycles and creating
                  post-sale management burdens that drained resources from core sales activities.
                  The VAR needed a credible, market-leading solution to compete effectively with
                  established players like Arctic Wolf.
                </p>
              </div>

              <div className='my-8'>
                <h1 className='mt-3 mb-12 text-center text-[20px] font-medium'>
                  ThreatRemotediate Complete / Silver Tier Results
                </h1>
                <div className='grid grid-cols-1 gap-5 lg:grid-cols-2'>
                  {ExucativeSummary.map((card) => (
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

            <ListComponent
              heading='🎯Sales & Operational Challenges'
              p1='As a sales-focused VAR, the company faced unique challenges in adding cybersecurity to their portfolio'
              array={list1}
              p2={`The Director of Sales emphasized: "We're great at selling technology solutions, but security was always a challenge. The products were too complex, the margins weren't predictable, and we didn't have the expertise to manage them post-sale. We needed something that played to our strengths as a sales organization."`}
              spaceHandling={true}
            />

            <div
              className='mt-10 px-10 py-8'
              style={{
                background: 'linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)',
              }}
            >
              <h1 className='mt-8 text-center text-[24px] font-medium'>
                🛡️ ThreatRemediate Complete: The Perfect <br /> VAR Solution
              </h1>

              <p className='text-[16px my-8 text-left'>
                Vijilan deployed ThreatRemediate Complete with Silver Tier partnership benefits,
                specifically designed for sales-focused VARs needing a comprehensive yet simple
                security offering:
              </p>
              <p className='mt-2 text-[16px] font-bold'>Core Service Components</p>
              <ul className='list-item'>
                {list2.map((li) => (
                  <li className='mt-3 ml-5 list-disc md:ml-10'>{li}</li>
                ))}
              </ul>

              <p className='mt-6 text-[16px] font-bold'>Silver Tier Sales Enablement</p>
              <ul className='list-item'>
                {list3.map((li) => (
                  <li className='mt-3 ml-5 list-disc md:ml-10'>{li}</li>
                ))}
              </ul>
            </div>

            {/* card */}

            <div className=''>
              <h1 className='my-8 text-center text-[20px] font-medium'>
                Accelerated Sales Process
              </h1>
              <div className='mx-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:mx-16'>
                {SalesProcess.map((card) => (
                  <DashBoardCard
                    icon={card.icon}
                    head={card.label}
                    desc={card.text}
                    iconSize={true}
                  />
                ))}
              </div>
            </div>

            {/* last card */}

            <div className='mt-10'>
              <CommonTextCard
                array={fitForSales}
                heading='🎯  Perfect Fit for Sales-Focused VARs'
                SizeControl={true}
              />
            </div>
          </div>

          {/* right col */}

          <div className='grid-cols-1'>
            <div className='mt-5'>
              <ProfileHRCard
                h1='VAR Profile'
                l1l='Business type'
                l1r='Value Added Reseller'
                l2l='Partnership Level'
                l2r='Silver Tier'
                l3l='Business Focus'
                l3r='Sales-Driven'
                l4l='Primary Services'
                l4r='Technology Solutions'
                l5l='Target Market'
                l5r='SMB & Mid-Market'
                l6l='Geographic Region'
                l6r='Regional'
                SizeModify={true}
              />
            </div>

            <div className='mt-10'>
              <MesurableComponentDashboard
                heading={'Measurable Sales &\nBusiness Impact'}
                array={MeasurabeCard}
                isColor={true}
              />
            </div>

            <div className='mt-10'>
              <DashboardSideText
                desc="Vijilan's ThreatRemediate Complete is the perfect solution for a sales-focused VAR. It's easy to sell, requires zero post-sale management from our team, and our margins have never been better. The partner enablement toolkit had our team closing deals in the first week. It's a true 'sell it and forget it' model with recurring revenue."
                author='Director of Sales, VAR Partner'
              />
            </div>

            <div className='mt-10'>
              <CommonTextCard array={businessModel} heading='📊 Business Model Transformation' />
            </div>
          </div>
        </div>

        <div className='py-16'>
          <Heading_Btn
            h1={'Ready to Transform Your VAR\nBusiness?'}
            desc={
              'Discover how ThreatRemediate Complete and our Silver Tier VAR program can drive\nsimilar growth and profitability for your technology reseller business.Explore var  partner ship'
            }
            btn1='Explore var partnership'
            btn2='schedule sale  consultation'
            url={'/visilan-msg-partner'}
          />
        </div>
      </div>
    </div>
  );
};

export default Success_study_case;
