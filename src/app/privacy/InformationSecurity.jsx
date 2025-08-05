import React, {useEffect} from 'react';
import lock from '../../Assets/lock.png';
import rocket from '../../Assets/rocketIcon.png';
import sheild from '../../Assets/sheildIcon.png';
import task from '../../Assets/task-check.png';
import target from '../../Assets/timeIcon.png';
import chain from '../../Assets/chain-icons.png';

const InformationSecurity = () => {

      useEffect(() => {
        document.body.classList.add('home-body');
    
        return () => {
          document.body.classList.remove('home-body');
        };
      }, []);

  return (
    <div className='pc-bg'>
      {/* hero section */}
      <section className='pt-[180px]'>
        <div className='container mx-auto px-[16px] md:px-6'>
          <h1 className='text-center text-3xl font-bold md:text-4xl lg:text-[48px]'>
            Information Security at Vijilan
          </h1>
          <p className='mt-10 text-center text-[18px]'>
            Our comprehensive security framework is built on the foundation of trust, <br />{' '}
            transparency, and unwavering commitment to protecting our customers' most critical{' '}
            <br /> assets.
          </p>
        </div>
      </section>

      {/*  */}
      <section className='mt-[60px] pb-[120px]'>
        <div className='container mx-auto px-[16px] md:px-6'>
          <div
            className='py-5'
            style={{
              background: 'linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)',
            }}
          >
            <div className="p-[40px]">
                <div>
              <h1 className='text-[24px] font-medium'>Core Security Principles</h1>
              <p className='text-[16px]- mt-5'>
                Vijilan's information security program is built upon the fundamental principles of
                the CIA triad, ensuring comprehensive protection of all <br /> information assets
                and customer data.
              </p>
            </div>
            <div className='mt-12 grid max-w-6xl gap-6 md:grid-cols-2'>
              {/* Confidentiality Card */}
              <div className='relative rounded-[22px] bg-[#00AEEF3D] p-6'>
                <div
                  className={`absolute inset-0 z-0 rounded-[22px] p-[2px]`}
                  style={{
                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                />
                <h3 className='text-[22px] font-medium text-white'>🔒 Confidentiality</h3>
                <p className='mt-4 text-[16px]'>
                  Information is accessible only to authorized personnel who have a legitimate
                  business need. We implement strict access controls, encryption, and data
                  classification to ensure sensitive information remains protected.
                </p>
              </div>

              {/* Integrity Card */}
              <div className='relative rounded-[22px] bg-[#00AEEF3D] p-6'>
                <div
                  className={`absolute inset-0 z-0 rounded-[22px] p-[2px]`}
                  style={{
                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                />
                <h3 className='text-[22px] font-medium text-white'>🛡️ Integrity</h3>
                <p className='mt-4 text-[16px]'>
                  Information can only be modified by authorized personnel through approved
                  processes. We maintain data accuracy and completeness through comprehensive change
                  management and audit controls.
                </p>
              </div>

              {/* Availability Card */}
              <div className='relative rounded-[22px] bg-[#00AEEF3D] p-6 md:col-span-2'>
                <div
                  className={`absolute inset-0 z-0 rounded-[22px] p-[2px]`}
                  style={{
                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                />
                <h3 className='text-[22px] font-medium text-white'>⚡ Availability</h3>
                <p className='mt-4 text-[16px]'>
                  Information and systems are available to personnel who require access when needed.
                  We ensure business continuity through redundancy, disaster recovery, and robust
                  infrastructure design.
                </p>
              </div>
            </div>
            </div>
            

            {/* 6 card */}
            <div className='py-16'>
              {/* title */}
              <div className='mb-12 px-[20px]'>
                <h1 className='text-center text-[30px] font-bold md:text-[40px]'>
                  Compliance and Certifications
                </h1>
                <p className='mt-3 text-[16px]'>
                  Vijilan maintains compliance with industry-leading security standards and
                  regulations, providing our customers with confidence in our security posture and
                  operational excellence.
                </p>
              </div>

              {/* card */}

              <div className='grid gap-[20px] md:grid-cols-2 lg:grid-cols-3'>
                {/* 1st */}
                <div className='relative flex flex-col items-center justify-center rounded-[16px] bg-[#00AEEF3D] px-[21px] py-[32px] lg:h-[390px]'>
                  <div
                    className='absolute inset-0 z-0 rounded-[16px] p-[2px]'
                    style={{
                      background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
                                               linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                      WebkitMask:
                        'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                    }}
                  />
                  <div className='mb-4 flex h-[110px] w-[110px] items-center justify-center rounded-lg'>
                    <img src={lock} alt='' />
                  </div>
                  <h3 className='mb-3 text-[24px] font-medium text-white'>SOC 2 Type II</h3>
                  <p className='text-center text-[18px] text-white'>
                    Independently audited security <br /> controls covering security, availability,{' '}
                    <br /> processing integrity, confidentiality, <br /> and privacy.
                  </p>
                </div>

                <div className='relative flex flex-col items-center justify-center rounded-[16px] bg-[#00AEEF3D] px-[21px] py-[32px] lg:h-[300px]'>
                  <div
                    className='absolute inset-0 z-0 rounded-[16px] p-[2px]'
                    style={{
                      background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
                                               linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                      WebkitMask:
                        'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                    }}
                  />
                  <div className='mb-4 flex h-[110px] w-[90px] items-center justify-center rounded-lg'>
                    <img src={target} alt='' />
                  </div>
                  <h3 className='mb-3 text-[24px] font-bold text-white'>ISO 27001</h3>
                  <p className='text-center text-[18px] text-white'>
                    International standard for information <br /> security management systems (ISMS){' '}
                    <br /> demonstrating systematic approach to <br /> security.
                  </p>
                </div>

                <div className='relative flex flex-col items-center justify-center rounded-[16px] bg-[#00AEEF3D] px-[21px] py-[32px] lg:h-[434px]'>
                  <div
                    className='absolute inset-0 z-0 rounded-[16px] p-[2px]'
                    style={{
                      background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
                                               linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                      WebkitMask:
                        'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                    }}
                  />
                  <div className='mb-4 flex h-[110px] w-[130px] items-center justify-center rounded-lg'>
                    <img src={rocket} alt='' />
                  </div>
                  <h3 className='mb-3 text-center text-[23px] font-bold text-white'>HIPAA Ready</h3>
                  <p className='text-center text-[18px] text-white'>
                    Comprehensive controls and <br /> procedures to support healthcare <br />
                    organizations' HIPAA compliance <br /> requirements.
                  </p>
                </div>

                <div className='relative flex flex-col items-center justify-center rounded-[16px] bg-[#00AEEF3D] px-[21px] py-[32px] lg:-mt-[40px] lg:h-[335px]'>
                  <div
                    className='absolute inset-0 z-0 rounded-[16px] p-[2px]'
                    style={{
                      background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
                                               linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                      WebkitMask:
                        'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                    }}
                  />
                  <div className='mb-4 flex h-[110px] w-[156px] items-center justify-center rounded-lg'>
                    <img src={sheild} alt='' />
                  </div>
                  <h3 className='mb-3 text-[24px] font-bold text-white'>PCI DSS</h3>
                  <p className='text-center text-[18px] text-white'>
                    Payment Card Industry Data Security <br /> Standard compliance for handling{' '}
                    <br /> cardholder data securely.
                  </p>
                </div>
                {/* 5th */}
                <div className='relative flex flex-col items-center justify-center rounded-[16px] bg-[#00AEEF3D] px-[21px] py-[32px] lg:-mt-[130px] lg:h-[270px]'>
                  <div
                    className='absolute inset-0 z-0 rounded-[16px] p-[2px]'
                    style={{
                      background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
                                               linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                      WebkitMask:
                        'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                    }}
                  />
                  <div className='mb-4 flex h-[110px] w-[110px] items-center justify-center rounded-lg'>
                    <img src={task} alt='' />
                  </div>
                  <h3 className='mb-3 text-[24px] font-bold text-white'>GDPR Compliant</h3>
                  <p className='text-center text-[18px] text-white'>
                    Full compliance with European General <br /> Data Protection Regulation for{' '}
                    <br /> customer data privacy and protection.
                  </p>
                </div>

                <div className='relative flex flex-col items-center justify-center rounded-[16px] bg-[#00AEEF3D] px-[21px] py-[32px] lg:h-[312px]'>
                  <div
                    className='absolute inset-0 z-0 rounded-[16px] p-[2px]'
                    style={{
                      background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
                                               linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                      WebkitMask:
                        'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                    }}
                  />
                  <div className='mb-4 flex h-[110px] w-[197px] items-center justify-center rounded-lg'>
                    <img src={chain} alt='' />
                  </div>
                  <h3 className='mb-3 text-[24px] font-bold text-white'>CMMC Ready</h3>
                  <p className='text-center text-[14px] text-white'>
                    Cybersecurity Maturity Model <br /> Certification readiness for supporting{' '}
                    <br /> Department of Defense contractors.
                  </p>
                </div>
              </div>
            </div>

            {/* security all content */}
            <div className=' '>
              {/* Information Security Program Scope */}
              <section className='mx-auto max-w-5xl px-4'>
                <h1 className='text-[24px] font-medium' style={{ color: '#FFFFFFCC' }}>
                  information security program scope
                </h1>
                <p className='text-[15px]' style={{ color: '#FFFFFFCC' }}>
                  our comprehensive information security program applies to all aspects of our
                  operations and extends to our entire ecosystem:
                </p>

                <h2 className='text-[15px] font-medium' style={{ color: '#FFFFFFCC' }}>
                  organizational scope
                </h2>
                <ul className='list-inside list-disc space-y-2 pl-4 text-[15px]'>
                  <li style={{ color: '#FFFFFFCC' }}>
                    all vijilan employees: every team member is responsible for protecting company
                    and customer information assets
                  </li>
                  <li style={{ color: '#FFFFFFCC' }}>
                    third-party vendors: contractors and service providers must meet our security
                    standards and undergo security assessments
                  </li>
                  <li style={{ color: '#FFFFFFCC' }}>
                    customer environments: security controls extend to all customer data and systems
                    under our management
                  </li>
                  <li style={{ color: '#FFFFFFCC' }}>
                    business partners: channel partners and technology integrators participate in
                    our security ecosystem
                  </li>
                </ul>

                <h2 className='text-[15px] font-medium' style={{ color: '#FFFFFFCC' }}>
                  technical scope
                </h2>
                <ul className='list-inside list-disc space-y-2 pl-4 text-[15px]'>
                  <li style={{ color: '#FFFFFFCC' }}>
                    information systems: all systems operated by vijilan or contracted with third
                    parties
                  </li>
                  <li style={{ color: '#FFFFFFCC' }}>
                    cloud infrastructure: aws-hosted environments with comprehensive security
                    controls
                  </li>
                  <li style={{ color: '#FFFFFFCC' }}>
                    customer data: all information provided by or collected from customers
                  </li>
                  <li style={{ color: '#FFFFFFCC' }}>
                    network infrastructure: complete network security including perimeter and
                    internal controls
                  </li>
                </ul>

                <h2 className='text-[15px] font-medium' style={{ color: '#FFFFFFCC' }}>
                  risk-based security approach
                </h2>
                <p className='text-[15px]' style={{ color: '#FFFFFFCC' }}>
                  vijilan employs a systematic, risk-based approach to information security that
                  enables us to prioritize resources and focus on the most critical threats to our
                  operations and customer data.
                </p>

                <h2 className='text-[15px] font-medium' style={{ color: '#FFFFFFCC' }}>
                  risk assessment process
                </h2>
                <ul className='list-inside list-disc space-y-2 pl-4 text-[15px]'>
                  <li style={{ color: '#FFFFFFCC' }}>
                    asset identification: comprehensive inventory of all information assets and
                    their business value
                  </li>
                  <li style={{ color: '#FFFFFFCC' }}>
                    threat analysis: regular assessment of current and emerging threats to our
                    environment
                  </li>
                  <li style={{ color: '#FFFFFFCC' }}>
                    vulnerability assessment: systematic identification of potential security
                    weaknesses
                  </li>
                  <li style={{ color: '#FFFFFFCC' }}>
                    impact analysis: evaluation of potential business impact from security incidents
                  </li>
                  <li style={{ color: '#FFFFFFCC' }}>
                    risk treatment: implementation of appropriate controls based on risk levels
                  </li>
                </ul>
              </section>

              {/* Continuous Risk Monitoring Callout */}
              <div className='my-6 rounded-[24px] border py-4' style={{ color: '#FFFFFFCC' }}>
                <h2 className='mb-3 text-center text-[24px] font-medium'>
                  Continuous Risk Monitoring
                </h2>
                <p className='mx-auto max-w-5xl px-4 text-[15px]' style={{ color: '#FFFFFFCC' }}>
                  Our security team continuously monitors the threat landscape and adjusts our
                  security posture accordingly. We conduct quarterly risk assessments and annual
                  comprehensive security reviews to ensure our controls remain effective against
                  evolving threats.
                </p>
              </div>

              {/* Security Awareness and Training */}
              <section className='mx-auto max-w-5xl px-4'>
                <h1 className='text-[24px] font-medium mb-[10px]' style={{ color: '#FFFFFFCC' }}>
                  Security Awareness and Training
                </h1>
                <p className='mb-2 text-[16px]' style={{ color: '#FFFFFFCC' }}>
                  Human factors are often the weakest link in cybersecurity. Vijilan maintains a
                  comprehensive security awareness program to ensure all personnel understand their
                  role in protecting information assets.
                </p>

                <h2 className='text-[24px] font-medium' style={{ color: '#FFFFFFCC' }}>
                  Training Program Components
                </h2>
                <ul className='mb-2 list-inside list-disc space-y-2 pl-4 text-[16px]'>
                  <li style={{ color: '#FFFFFFCC' }}>
                    Annual Security Training: Mandatory online security awareness training for all
                    employees
                  </li>
                  <li style={{ color: '#FFFFFFCC' }}>
                    New Employee Onboarding: Security awareness sessions during employee induction
                    process
                  </li>
                  <li style={{ color: '#FFFFFFCC' }}>
                    Role-Specific Training: Specialized training for employees with access to
                    sensitive systems
                  </li>
                  <li style={{ color: '#FFFFFFCC' }}>
                    Phishing Simulation: Regular simulated phishing exercises to test and improve
                    awareness
                  </li>
                  <li style={{ color: '#FFFFFFCC' }}>
                    Incident Response Training: Specialized training for security team members
                  </li>
                </ul>
              </section>

              {/* Continuous Improvement */}
              <section className='mx-auto max-w-5xl px-4'>
                <h1 className='text-[24px] font-medium mb-[10px]' style={{ color: '#FFFFFFCC' }}>
                  Continuous Improvement
                </h1>
                <p className='text-[16px]' style={{ color: '#FFFFFFCC' }}>
                  Security is not a destination but a journey. Vijilan is committed to continuously
                  enhancing our security posture through systematic improvement processes.
                </p>

                <h2 className='text-[16px] font-medium' style={{ color: '#FFFFFFCC' }}>
                  Improvement Initiatives
                </h2>
                <ul className='mb-2 list-inside list-disc space-y-2 pl-4 text-[16px]'>
                  <li style={{ color: '#FFFFFFCC' }}>
                    Policy Enhancement: Regular review and update of security policies and
                    procedures
                  </li>
                  <li style={{ color: '#FFFFFFCC' }}>
                    Best Practice Alignment: Ongoing alignment with ISO/IEC 27001 and other industry
                    standards
                  </li>
                  <li style={{ color: '#FFFFFFCC' }}>
                    Proactive Security: Shift from reactive to proactive security measures
                  </li>
                  <li style={{ color: '#FFFFFFCC' }}>
                    Measurable Security: Implementation of security metrics and KPIs for data-driven
                    decisions
                  </li>
                  <li style={{ color: '#FFFFFFCC' }}>
                    Technology Innovation: Adoption of emerging security technologies and
                    methodologies
                  </li>
                </ul>
              </section>

              {/* Legal and Contractual Compliance */}
              <section className='mx-auto max-w-5xl px-4'>
                <h1 className='text-[24px] font-medium mb-[10px]' style={{ color: '#FFFFFFCC' }}>
                  Legal and Contractual Compliance
                </h1>
                <p className='text-[16px]' style={{ color: '#FFFFFFCC' }}>
                  Vijilan is committed to protecting sensitive information from unauthorized
                  disclosure and ensuring compliance with all applicable legal and contractual
                  requirements.
                </p>

                <h2 className='text-[16px] font-medium' style={{ color: '#FFFFFFCC' }}>
                  Regulatory Compliance
                </h2>
                <ul className='list-inside list-disc space-y-2 pl-4 text-[16px]'>
                  <li style={{ color: '#FFFFFFCC' }}>
                    International Standards: Compliance with current international information
                    security standards
                  </li>
                  <li style={{ color: '#FFFFFFCC' }}>
                    Regional Regulations: Adherence to data protection laws in all jurisdictions
                    where we operate
                  </li>
                  <li style={{ color: '#FFFFFFCC' }}>
                    Industry Requirements: Compliance with sector-specific security requirements
                    (healthcare, financial services, etc.)
                  </li>
                  <li style={{ color: '#FFFFFFCC' }}>
                    Customer Contracts: Meeting all security obligations specified in customer
                    agreements
                  </li>
                </ul>
              </section>

              {/* Regulatory Change Management Callout */}
              <div className='my-6 rounded-[24px] border py-4'>
                <h2 className='mb-3 text-center text-[24px] font-medium'>
                  Regulatory Change Management
                </h2>
                <p className='mx-auto max-w-5xl px-4 text-[16px]' style={{ color: '#FFFFFFCC' }}>
                  We actively monitor changes in regulations and international standards,
                  incorporating new requirements into our processes to ensure continuous compliance.
                  Our legal and compliance team conducts quarterly reviews of regulatory changes
                  affecting our operations.
                </p>
              </div>

              {/* Incident Response and Business Continuity */}
              <section className='mx-auto max-w-5xl px-4'>
                <h1 className='text-[24px] font-medium mb-[10px]' style={{ color: '#FFFFFFCC' }}>
                  Incident Response and Business Continuity
                </h1>
                <p className='mb-2 text-[16px]' style={{ color: '#FFFFFFCC' }}>
                  Vijilan maintains comprehensive incident response and business continuity
                  capabilities to ensure minimal impact from security events and operational
                  disruptions.
                </p>

                <h2 className='text-[24px] font-medium' style={{ color: '#FFFFFFCC' }}>
                  Incident Response Capabilities
                </h2>
                <ul className='mb-2 list-inside list-disc space-y-2 pl-4 text-[16px]'>
                  <li style={{ color: '#FFFFFFCC' }}>
                    24x7 SOC: Round-the-clock security operations center with expert analysts
                  </li>
                  <li style={{ color: '#FFFFFFCC' }}>
                    Automated Response: Advanced automation for rapid threat containment and
                    remediation
                  </li>
                  <li style={{ color: '#FFFFFFCC' }}>
                    Forensic Analysis: Digital forensics capabilities for incident investigation
                  </li>
                  <li style={{ color: '#FFFFFFCC' }}>
                    Communication Plans: Structured communication procedures for stakeholder
                    notification
                  </li>
                  <li style={{ color: '#FFFFFFCC' }}>
                    Recovery Procedures: Comprehensive procedures for system and data recovery
                  </li>
                </ul>
              </section>

              {/* Vendor Risk Management */}
              <section className='mx-auto max-w-5xl px-4'>
                <h1 className='text-[24px] font-medium mb-[10px]' style={{ color: '#FFFFFFCC' }}>
                  Vendor Risk Management
                </h1>
                <p className='mb-2 text-[16px]' style={{ color: '#FFFFFFCC' }}>
                  Our supply chain security program ensures that third-party vendors meet our
                  security standards and do not introduce additional risk to our operations or
                  customer data.
                </p>

                <h2 className='text-[24px] font-medium mb-[10px]' style={{ color: '#FFFFFFCC' }}>
                  Vendor Security Requirements
                </h2>
                <ul className='mb-2 list-inside list-disc space-y-2 pl-4 text-[16px]'>
                  <li style={{ color: '#FFFFFFCC' }}>
                    Security Assessments: Comprehensive security evaluations for all critical
                    vendors
                  </li>
                  <li style={{ color: '#FFFFFFCC' }}>
                    Contractual Obligations: Security requirements included in all vendor agreements
                  </li>
                  <li style={{ color: '#FFFFFFCC' }}>
                    Ongoing Monitoring: Regular reassessment of vendor security posture
                  </li>
                  <li style={{ color: '#FFFFFFCC' }}>
                    Incident Coordination: Procedures for managing security incidents involving
                    vendors
                  </li>
                </ul>
              </section>

              {/* Data Protection and Privacy */}
              <section className='mx-auto max-w-5xl px-4'>
                <h1 className='text-[24px] font-medium mb-[10px]' style={{ color: '#FFFFFFCC' }}>
                  Data Protection and Privacy
                </h1>
                <p className='mb-2 text-[16px]' style={{ color: '#FFFFFFCC' }}>
                  Customer data protection is at the core of our security program. We implement
                  comprehensive controls to ensure customer information remains secure and private.
                </p>

                <h2 className='text-[24px] font-medium mb-[10px]' style={{ color: '#FFFFFFCC' }}>
                  Data Protection Measures
                </h2>
                <ul className='mb-2 list-inside list-disc space-y-2 pl-4 text-[16px]'>
                  <li style={{ color: '#FFFFFFCC' }}>
                    Encryption: End-to-end encryption for data in transit and at rest
                  </li>
                  <li style={{ color: '#FFFFFFCC' }}>
                    Access Controls: Strict role-based access controls with principle of least
                    privilege
                  </li>
                  <li style={{ color: '#FFFFFFCC' }}>
                    Data Classification: Systematic classification and handling of sensitive
                    information
                  </li>
                  <li style={{ color: '#FFFFFFCC' }}>
                    Retention Policies: Clear data retention and disposal procedures
                  </li>
                  <li style={{ color: '#FFFFFFCC' }}>
                    Privacy by Design: Privacy considerations integrated into all system designs
                  </li>
                </ul>
              </section>

              {/* Security Enforcement */}
              <section className='mx-auto max-w-5xl px-4'>
                <h1 className='text-[24px] font-medium mb-[10px]' style={{ color: '#FFFFFFCC' }}>
                  Security Enforcement
                </h1>
                <p className='mb-2 text-[16px]' style={{ color: '#FFFFFFCC' }}>
                  Vijilan maintains clear enforcement mechanisms to ensure compliance with security
                  policies and procedures across the organization.
                </p>

                <h2 className='text-[24px] font-medium mb-[10px]' style={{ color: '#FFFFFFCC' }}>
                  Enforcement Mechanisms
                </h2>
                <ul className='mb-2 list-inside list-disc space-y-2 pl-4 text-[16px]'>
                  <li style={{ color: '#FFFFFFCC' }}>
                    Policy Violations: Disciplinary action for employees who violate security
                    policies
                  </li>
                  <li style={{ color: '#FFFFFFCC' }}>
                    Access Reviews: Regular review of user access rights and privileges
                  </li>
                  <li style={{ color: '#FFFFFFCC' }}>
                    Security Audits: Internal and external audits to verify compliance
                  </li>
                  <li style={{ color: '#FFFFFFCC' }}>
                    Performance Metrics: Security performance indicators tied to employee
                    evaluations
                  </li>
                </ul>
              </section>

              {/* Security Questions and Concerns */}
              <section className='mx-auto max-w-5xl px-4'>
                <h1 className='mt-6 mb-3 text-[24px] font-medium' style={{ color: '#FFFFFFCC' }}>
                  Security Questions and Concerns
                </h1>

                <div className='space-y-2 border-l-4 border-[#00AEEF] pl-4'>
                  <p className='mb-6 text-[20px]'>
                    If you have questions about our information security program or need to report a
                    security concern, please contact our security team:
                  </p>
                  <p className='text-[20px]'>
                    Security Team:{' '}
                    <a href='mailto:security@vijilan.com' className='text-blue-400 hover:underline'>
                      security@vijilan.com
                    </a>
                  </p>
                  <p className='text-[20px]'>
                    Security Incidents:{' '}
                    <a href='mailto:incident@vijilan.com' className='text-blue-400 hover:underline'>
                      incident@vijilan.com
                    </a>
                  </p>
                  <p className='text-[20px]'>
                    Compliance Questions:{' '}
                    <a
                      href='mailto:compliance@vijilan.com'
                      className='text-blue-400 hover:underline'
                    >
                      compliance@vijilan.com
                    </a>
                  </p>
                  <p className='mt-4 text-[20px] font-medium'>Mailing Address:</p>
                  <p className='text-[20px]'>Vijilan Security - Information Security Office</p>
                  <p className='text-[20px]'>Aventura Onyx Tower</p>
                  <p className='text-[20px]'>1010 S Federal Hwy Suite 1205</p>
                  <p className='text-[20px]'>Aventura, FL 33180</p>
                  <p className='mb-6 pt-6 text-[20px]'>Phone: 1-800-VIJILAN (1-800-845-4526)</p>
                  <p className='text-[20px]'>
                    For urgent security matters, please include "URGENT - Security Issue" in your
                    subject line and call our 24x7 SOC at the number above.
                  </p>
                </div>
              </section>

              <div className='px-10'>
                <div className='my-10 rounded-[24px] border border-[#00AEEF] py-4'>
                  <h2 className='mb-3 text-center text-[24px] font-medium'>
                    Security Documentation Request
                  </h2>
                  <p className='mx-auto max-w-5xl px-4 text-[20px]'>
                    Customers and prospective customers can request copies of our security
                    certifications, audit reports, and compliance documentation by contacting our
                    compliance team. All requests are processed within 5 business days subject to
                    appropriate confidentiality agreements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InformationSecurity;
