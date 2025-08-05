// responsive complete

import React from 'react';
import NumberShow from '../component/NumberShow';
import { ChevronRight } from 'lucide-react';
import Heading_Btn from '@components/Heading_Btn';
import {
  complianceArray,
  healthcareArray,
  healthcareSecurity,
  threatProtectionArray,
} from '@app/Constant/Constant';
import CommonTextCard from '../component/CommonTextCard';
import ListComponent from '../component/ListComponent';
import ProfileHRCard from '../component/ProfileHRCard';
import DashboardSideText from '../component/DashboardSideText';
import MesurableComponentDashboard from '../component/MesurableComponentDashboard';
import { Link } from 'react-router-dom';

const HealthCare_Complain_case = () => {
  const numberArray = [
    {
      label: '100%',
      text: 'HIPAA Audit Success',
    },
    {
      label: '3x',
      text: 'Faster Audits',
    },
    {
      label: '0',
      text: 'Security Findings',
    },
    {
      label: '24/7',
      text: 'PHI Protection',
    },
  ];

  const challengesList = [
    'Intense Regulatory Pressure: Significant burden in meeting and documenting compliance for GLBA and SEC cybersecurity requirements',
    'Sophisticated Threat Actors: Primary target for advanced cyberattacks aimed at financial theft and customer data exfiltration',
    'Slow Incident Response: Previous security solutions and internal processes were too slow to effectively respond to threats',
    'Audit Preparation Strain: Manual, time-consuming audit preparation process that drained significant internal resources',
    'Identity-Based Attacks: High risk of compromised credentials being used for fraudulent transactions',
    'Non-Public Information (NPI) Protection: Need to safeguard sensitive customer financial and personal data',
    'Real-Time Fraud Prevention: Requirement to detect and stop fraudulent activities before financial losses occur',
  ];
  const list = [
    ' High Risk of Data Breach: Healthcare organizations are prime targets for attacks aimed at stealing valuable patient data and PHI',
    'Complex Compliance Burden: Preparing for and undergoing HIPAA audits was time-consuming and resource-intensive, diverting focus from patient care',
    ' Vulnerability Management: Lacked visibility and resources to proactively identify and prioritize system vulnerabilities across sprawling network of medical devices, endpoints, and cloud applications',
    ' Identity-Based Threats: Significant risk from compromised credentials being used to gain unauthorized access to electronic health records (EHR)',
    ' Ransomware Threat: High risk of ransomware attacks that could encrypt critical systems and severely impact hospital operations',
    'Attack Surface Visibility: Lacked unified view of cyber risks and exploitable exposures across complex healthcare IT environment',
    "   Legacy Medical Devices: Aging medical equipment with known vulnerabilities that couldn't be easily patched or replaced",
  ];

  const healthcareValue = [
    {
      label: 'Proactive Defense Strategy',
      text: "Vijilan shifted the healthcare system's focus from merely reacting to incidents to proactively preventing breaches by identifying and mitigating exploitable risks first. This approach is critical in healthcare where patient safety depends on system availability.",
    },
    {
      label: 'Identity-First Security',
      text: 'Vijilan directly addressed the #1 attack vector in healthcare by deploying specialized Managed ITDR services to protect against credential-based attacks that are common in healthcare breaches. This focus on identity protection is essential given the high value of healthcare credentials.',
    },
    {
      label: 'Compliance Expertise',
      text: 'Vijilan provides not just security technology, but also the extensive documentation and audit support required to navigate complex regulatory landscapes like HIPAA. This comprehensive approach reduces compliance burden while ensuring regulatory adherence.',
    },
    {
      label: 'Operational Efficiency',
      text: "By managing critical security functions, Vijilan reduced the operational burden on the healthcare system's internal IT team, allowing them to focus on core healthcare technology initiatives that directly support patient care rather than security infrastructure management.",
    },
  ];

  const HIPAA_results = [
    {
      metric: '100%',
      label: 'HIPAA Audit Success',
      text: 'Passed comprehensive audit with zero findings across all safeguards',
    },
    {
      metric: '3x',
      label: 'Faster Audits',
      text: 'Reduced audit preparation time through automated compliance reporting',
    },
    {
      metric: '100%',
      label: 'PHI Protection',
      text: 'Comprehensive protection of all patient health information',
    },
    {
      metric: '0',
      label: 'Security Incidents',
      text: 'Zero successful breaches or data exfiltration attempts',
    },
    {
      metric: '95%',
      label: 'Vulnerability Reduction',
      text: 'Proactive identification and remediation of security exposures',
    },
    {
      metric: '24/7',
      label: 'Identity Monitoring',
      text: 'Continuous protection against credential-based attacks',
    },
  ];
  const healthcareServices = [
    {
      label: 'Managed Identity Threat Detection and Response (ITDR)',
      text: 'Powered by CrowdStrike Falcon Identity Protection, this service provided real-time detection and prevention of identity-based attacks. The solution protected patient records from unauthorized access and prevented lateral movement through the healthcare network, addressing the #1 attack vector in healthcare breaches.',
    },
    {
      label: 'Managed Exposure Management',
      text: "Using CrowdStrike Falcon Exposure Management, Vijilan's team provided continuous asset discovery, risk assessment, and AI-powered prioritization. This enabled the healthcare system to proactively identify and remediate vulnerabilities before they could be exploited, shifting from reactive to proactive security posture.",
    },
    {
      label: 'Comprehensive Compliance Reporting',
      text: 'Vijilan provided extensive, audit-ready documentation and reporting as a core feature of its higher-tier services. This dramatically simplified regulatory adherence and reduced the burden on internal IT staff during audit preparations.',
    },
  ];

  const healthcareContinuity = [
    {
      label: 'Patient Care Continuity',
      text: 'All security implementations were scheduled during maintenance windows to ensure zero disruption to patient care operations. Critical medical systems remained fully operational throughout the deployment process.',
    },
    {
      label: 'Medical Device Integration',
      text: 'Special attention was given to securing and monitoring medical devices, many of which have unique networking requirements and cannot be easily updated. Exposure Management provided continuous visibility into device vulnerabilities.',
    },
    {
      label: 'EHR Protection Focus',
      text: 'Identity protection was specifically configured to monitor access to Electronic Health Record systems, providing real-time alerts for any suspicious access patterns or potential data exfiltration attempts.',
    },
    {
      label: 'Staff Training & Adoption',
      text: "Healthcare IT staff received specialized training on the new security capabilities, with particular focus on incident response procedures that wouldn't interfere with emergency patient care operations.",
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
              <span className='text-[13px] font-medium' style={{ color: '#00AEEF' }}>
                Health Compliance Success
              </span>
            </nav>
          </div>
        </div>
      </section>

      {/* button */}
      <section className='flex justify-center'>
        <div className='container mx-auto px-[16px] md:px-6'>
          <div className='text-center'>
            <button className='inline-flex items-center space-x-3 rounded-[40px] bg-[#00EF14] p-[25px] py-[15px] text-[14px] font-bold text-white md:px-[40px]'>
              Compliance Success
            </button>
          </div>

          <div className='mt-4 mb-16'>
            <h1 className='mb-8 text-center text-3xl leading-14 font-bold md:text-4xl lg:text-5xl'>
              Healthcare System Achieves HIPAA <br /> Success and 3x Faster Audits with <br />{' '}
              Managed ITDR & Exposure <br /> Management
            </h1>
            <p className='text-center text-[18px]'>
              Discover how a regional healthcare system achieved 100% HIPAA audit success while{' '}
              <br /> dramatically reducing audit preparation time through proactive identity
              protection <br /> and exposure management.
            </p>
          </div>

          <div className='mx-auto grid w-full max-w-[700px] grid-cols-2 gap-5 md:grid-cols-4'>
            {numberArray.map((card, index) => (
              <NumberShow key={card.text} link={card.text} number={card.label} />
            ))}
          </div>
        </div>
      </section>

      <div className='mt-12'>
        <div className='container mx-auto px-[16px] md:px-6'>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className='grid-cols-1'>
            <div className='mt-5'>
              <CommonTextCard
                heading1='🏥 Executive Summary'
                p2=' A regional bank with multiple branches faced intense regulatory pressure and sophisticated cyber threats targeting financial institutions. Subject to stringent oversight from the SEC and GLBA regulations, they needed to elevate their security posture to protect sensitive customer financial data, prevent fraud, and demonstrate compliance to auditors.The bank required a solution that would not only defend against advanced persistent threats and financial fraud attempts, but also streamline their audit preparation process and provide the comprehensive documentation required by financial regulators.'
                heading2='HIPAA Compliance Achievement'
                card={complianceArray}
                border={true}
                borderColor='#00EF14'
              />
            </div>

            <div className='mt-10'>
              <CommonTextCard
                heading=' ⚕️ Healthcare Security Challenges'
                p2='Healthcare organizations face unique cybersecurity challenges that combine patient safety concerns with strict regulatory requirements:'
                listTop={list}
                heading2='Healthcare Threat Protection Matrix'
                card={healthcareArray}
                border={true}
                borderColor='#00EF14'
                SizeControl={true}
              />
            </div>

            <div
              className='mt-10 px-8 py-5 lg:px-12'
              style={{
                background: 'linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)',
              }}
            >
              <h1 className='mt-8 mb-4 text-center text-[24px] font-medium'>
                🛡️ Comprehensive Healthcare Security Solution
              </h1>
              <p className='my-3 text-left text-[16px]'>
                Vijilan deployed a multi-layered security solution specifically tailored for the
                healthcare environment, centered on proactive defense and identity protection:
              </p>

              <h4 className='mb-5 text-center text-[24px] font-medium'>
                Healthcare Security Architecture
              </h4>

              <div className='grid gap-5 sm:grid-cols-1 lg:grid-cols-2'>
                {healthcareSecurity.map((card, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-center ${
                      index === 2 ? 'mx-auto lg:col-span-2 lg:max-w-[238px]' : ''
                    }`}
                  >
                    <div className='flex flex-col items-center justify-center gap-5 rounded-lg bg-[#CDCDD466] px-4 py-8 text-center'>
                      <img src={card.icon} alt='' />
                      <h4 className='text-[16px] font-bold'>{card.label}</h4>
                      <p className='text-[16px]'>{card.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className='-mt-6'>
                <CommonTextCard bg={false} array={healthcareServices} />
              </div>
            </div>

            <div className='mt-10'>
              <CommonTextCard
                array={healthcareContinuity}
                heading1='⚙️ Healthcare-Focused Implementation'
                SizeControl={true}
              />
            </div>
          </div>
          <div className='grid-cols-1'>
            <div className='mt-5'>
              <ProfileHRCard
                h1='Healthcare System Profile'
                l1l='Organization Type'
                l1r='Regional Healthcare'
                l2l='Facilities'
                l2r='Multi-Location Network'
                l3l='Services'
                l3r='Hospitals & Clinics'
                l4l='Compliance Focus'
                l4r='HIPAA'
                l5l='Primary Concern'
                l5r='PHI Protection'
                l6l='Risk Level'
                l6r='High-Target Industry'
                SizeModify={true}
              />
            </div>

            <div className='mt-10'>
              <MesurableComponentDashboard
                heading={'Healthcare Security &\nCompliance Results'}
                array={HIPAA_results}
                isColor={true}
              />
            </div>

            <div className='mt-10'>
              <DashboardSideText
                desc="In healthcare, a data breach isn't just a financial event—it's a fundamental violation of patient trust. Vijilan's focus on identity protection and proactive exposure management gave us the confidence that we were securing our patient data at the highest level. Their compliance reporting made our HIPAA audits smoother and faster than we ever thought possible."
                author2='CISO, Regional Healthcare System'
              />
            </div>

            <div className='mt-10'>
              <CommonTextCard
                array={healthcareValue}
                heading={' 🏥 Why Vijilan Excels in Healthcare\nSecurity'}
              />
            </div>
          </div>
          </div>
        </div>
      </div>

      <div className='py-16'>
        <div className='container mx-auto px-[16px] md:px-6'>
          <Heading_Btn
            h1={'Protect Your Patients and\nAchieve HIPAA Compliance'}
            desc={
              "Discover how Vijilan's healthcare-specialized security solutions can protect your\npatient data while streamlining compliance and reducing operational burden."
            }
            btn1='explore healthcare solutions'
            btn9='schedule hippa assessment'
          />
        </div>
      </div>
    </div>
  );
};

export default HealthCare_Complain_case;
