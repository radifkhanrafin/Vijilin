import React, {useEffect} from 'react';

const PrivacyPolicy = () => {

      useEffect(() => {
        document.body.classList.add('home-body');
    
        return () => {
          document.body.classList.remove('home-body');
        };
      }, []);

  return (
    <div className='pc-bg'>
      <section className='pt-[180px]'>
        <div className='container mx-auto px-[16px] md:px-6'>
          <h1 className='text-center text-3xl font-bold md:text-4xl lg:text-[48px]'>
            Privacy Policy
          </h1>
          <p className='mt-10 text-center text-[18px]'>
            Your privacy is important to us. This policy explains how Vijilan Security collects,
            uses, <br /> and protects your personal information in accordance with applicable
            privacy laws <br /> and regulations.
          </p>
        </div>
      </section>

      <section className='py-[120px]'>
        <div className='container mx-auto px-[16px] md:px-6'>
          <div
            className='h-[142px] px-[16px]'
            style={{
              background: 'linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)',
            }}
          >
            <h2 className='flex h-full w-full items-center justify-center text-[18px] uppercase'>
              Last Updated: January 15, 2025
            </h2>
          </div>
          <div className='mt-10'>
            <div
              className='py-20'
              style={{
                background: 'linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)',
              }}
            >
              <div className='space-y-10'>
                <section className='mx-auto max-w-5xl px-4'>
                  <h2 className='mb-4 text-[24px] font-medium'>1. Introduction</h2>
                  <p className='text-[16px]'>
                    Vijilan Security (&quot;Vijilan&quot;, &quot;we&quot;, &quot;our&quot;, or
                    &quot;us&quot;) is committed to protecting your privacy and ensuring the
                    security of your personal information. This Privacy Policy describes how we
                    collect, use, disclose, and safeguard your information when you visit our
                    website, use our services, or interact with us in other ways.
                  </p>
                  <p className='text-[16px]'>
                    This policy applies to all users of our website, customers of our cybersecurity
                    services, and anyone who interacts with Vijilan in a business context.
                  </p>

                  <h2 className='mt-6 mb-4 text-[24px] font-medium' style={{ color: '#FFFFFFCC' }}>
                    2. Information we collect
                  </h2>
                  <div className=''>
                    <h3 className='text-[16px] font-medium' style={{ color: '#FFFFFFCC' }}>
                      personal information
                    </h3>
                    <p style={{ color: '#FFFFFFCC' }}>
                      We may collect the following types of personal information:
                    </p>
                    <ul className='mt-3 list-inside list-disc space-y-2 pl-4 text-[16px]'>
                      <li style={{ color: '#FFFFFFCC' }}>
                        contact information: name, email address, phone number, job title, company
                        name, and mailing address
                      </li>
                      <li style={{ color: '#FFFFFFCC' }}>
                        account information: usernames, passwords, and security credentials for our
                        services
                      </li>
                      <li style={{ color: '#FFFFFFCC' }}>
                        professional information: company size, industry, security challenges, and
                        technology environment
                      </li>
                      <li style={{ color: '#FFFFFFCC' }}>
                        communication data: records of your communications with us, including
                        support requests and sales inquiries
                      </li>
                      <li style={{ color: '#FFFFFFCC' }}>
                        payment information: billing details, though payment processing is handled
                        by secure third-party processors
                      </li>
                    </ul>

                    <h3 className='mt-[40px] text-[16px] font-medium' style={{ color: '#FFFFFFCC' }}>
                      technical information
                    </h3>
                    <p style={{ color: '#FFFFFFCC' }}>
                      We automatically collect certain technical information when you use our
                      website or services:
                    </p>
                    <ul className='mt-3 list-inside list-disc space-y-2 pl-4 text-[16px]'>
                      <li style={{ color: '#FFFFFFCC' }}>
                        device information: IP address, browser type, operating system, and device
                        identifiers
                      </li>
                      <li style={{ color: '#FFFFFFCC' }}>
                        usage data: pages visited, time spent on pages, click-through rates, and
                        navigation patterns
                      </li>
                      <li style={{ color: '#FFFFFFCC' }}>
                        performance data: system logs, error reports, and service performance
                        metrics
                      </li>
                      <li style={{ color: '#FFFFFFCC' }}>
                        security data: login attempts, access logs, and security event information
                      </li>
                    </ul>

                    <h3 className='mt-[40px] text-[16px] font-medium' style={{ color: '#FFFFFFCC' }}>
                      cookies and tracking technologies
                    </h3>
                    <p className='text-[16px]' style={{ color: '#FFFFFFCC' }}>
                      We use cookies, web beacons, and similar technologies to enhance your
                      experience and collect usage information. For detailed information about our
                      cookie practices, please see our{' '}
                      <a
                        href='#'
                        className=''
                        style={{ textDecoration: 'underline', color: '#FFFFFFCC' }}
                      >
                        cookie policy
                      </a>
                      .
                    </p>
                  </div>

                  <h2 className='mt-6 text-[24px] font-medium' style={{ color: '#FFFFFFCC' }}>
                    3. how we use your information
                  </h2>
                  <div className='mt-4'>
                    <p className='text-[16px]' style={{ color: '#FFFFFFCC' }}>
                      We use your information for the following purposes:
                    </p>
                    <h3 className='text-[16px] font-medium' style={{ color: '#FFFFFFCC' }}>
                      service delivery
                    </h3>
                    <ul className='list-inside list-disc space-y-2 pl-4 text-[16px]'>
                      <li style={{ color: '#FFFFFFCC' }}>
                        providing cybersecurity services and technical support
                      </li>
                      <li style={{ color: '#FFFFFFCC' }}>
                        managing your account and subscription to services
                      </li>
                      <li style={{ color: '#FFFFFFCC' }}>
                        monitoring and improving service performance
                      </li>
                      <li style={{ color: '#FFFFFFCC' }}>
                        ensuring service security and preventing unauthorized access
                      </li>
                    </ul>

                    <h3 className='text-[16px] font-medium' style={{ color: '#FFFFFFCC' }}>
                      business operations
                    </h3>
                    <ul className='list-inside list-disc space-y-2 pl-4 text-[16px]'>
                      <li style={{ color: '#FFFFFFCC' }}>
                        responding to inquiries and providing customer support
                      </li>
                      <li style={{ color: '#FFFFFFCC' }}>
                        processing demo requests and sales communications
                      </li>
                      <li style={{ color: '#FFFFFFCC' }}>
                        managing partner relationships and programs
                      </li>
                      <li style={{ color: '#FFFFFFCC' }}>
                        conducting business analytics and market research
                      </li>
                    </ul>

                    <h3 className='text-[16px] font-medium' style={{ color: '#FFFFFFCC' }}>
                      legal and compliance
                    </h3>
                    <ul className='list-inside list-disc space-y-2 pl-4 text-[16px]'>
                      <li style={{ color: '#FFFFFFCC' }}>
                        complying with legal obligations and regulatory requirements
                      </li>
                      <li style={{ color: '#FFFFFFCC' }}>
                        protecting our rights and preventing fraud
                      </li>
                      <li style={{ color: '#FFFFFFCC' }}>
                        responding to law enforcement requests when legally required
                      </li>
                      <li style={{ color: '#FFFFFFCC' }}>
                        maintaining audit trails for security and compliance purposes
                      </li>
                    </ul>
                  </div>

                  <h2 className='mt-6 mb-4 text-[24px] font-medium' style={{ color: '#FFFFFFCC' }}>
                    4. information sharing and disclosure
                  </h2>
                  <div className=''>
                    <p className='text-[16px]' style={{ color: '#FFFFFFCC' }}>
                      We do not sell, trade, or rent your personal information to third parties. We
                      may share your information in the following limited circumstances:
                    </p>

                    <h3 className='text-[16px] font-medium' style={{ color: '#FFFFFFCC' }}>
                      service providers
                    </h3>
                    <p className='text-[16px]' style={{ color: '#FFFFFFCC' }}>
                      We may share information with trusted third-party service providers who assist
                      us in delivering our services, including:
                    </p>
                    <ul className='list-inside list-disc space-y-2 pl-4 text-[16px]'>
                      <li style={{ color: '#FFFFFFCC' }}>
                        cloud infrastructure providers (aws, microsoft azure)
                      </li>
                      <li style={{ color: '#FFFFFFCC' }}>
                        payment processors and billing services
                      </li>
                      <li style={{ color: '#FFFFFFCC' }}>customer support and crm platforms</li>
                      <li style={{ color: '#FFFFFFCC' }}>
                        security monitoring and threat intelligence providers
                      </li>
                    </ul>

                    <h3 className='text-[16px] font-medium' style={{ color: '#FFFFFFCC' }}>
                      business partners
                    </h3>
                    <p className='text-[16px]' style={{ color: '#FFFFFFCC' }}>
                      With your consent, we may share relevant information with our channel
                      partners, including msps, vars, and technology integrators, to facilitate
                      service delivery and support.
                    </p>

                    <h3 className='text-[16px] font-medium' style={{ color: '#FFFFFFCC' }}>
                      legal requirements
                    </h3>
                    <p className='text-[16px]' style={{ color: '#FFFFFFCC' }}>
                      We may disclose your information when required by law, court order, or
                      regulatory authority, or when necessary to protect our rights, property, or
                      safety, or that of our users or others.
                    </p>
                  </div>
                </section>

                {/* Section 5-7 */}
                <section className=''>
                  <div className='mx-auto max-w-5xl px-4'>
                    <h2 className='mt-6 text-[24px] font-medium' style={{ color: '#FFFFFFCC' }}>
                      5. data security
                    </h2>
                    <p className='text-[16px]' style={{ color: '#FFFFFFCC' }}>
                      We implement comprehensive security measures to protect your information:
                    </p>
                  </div>
                  <div className=''>
                    <div className='my-6 rounded-[24px] border py-4'>
                      <h3 className='mx-auto max-w-5xl px-4 text-[16px] font-medium'>
                        Security Certifications & Standards
                      </h3>
                      <ul className='mx-auto max-w-5xl list-inside list-disc space-y-2 px-4 pl-4 text-[16px]'>
                        <li>SOC 2 Type 2 certified security controls</li>
                        <li>ISO 27001 information security management</li>
                        <li>HIPAA compliance for healthcare data</li>
                        <li>PCI DSS standards for payment data</li>
                      </ul>
                    </div>

                    <h3 className='mx-auto mt-3 max-w-5xl px-4 text-[24px] font-medium'>
                      Technical Safeguards
                    </h3>
                    <ul className='mx-auto max-w-5xl list-inside list-disc space-y-2 px-4 pl-4 text-[16px]'>
                      <li>End-to-end encryption for data in transit and at rest</li>
                      <li>Multi-factor authentication and access controls</li>
                      <li>Regular security assessments and penetration testing</li>
                      <li>Incident response and breach notification procedures</li>
                    </ul>

                    <h3 className='mx-auto mt-3 max-w-5xl px-4 text-[24px] font-medium'>
                      Organizational Safeguards
                    </h3>
                    <ul className='mx-auto max-w-5xl list-inside list-disc space-y-2 px-4 pl-4 text-[16px]'>
                      <li>Employee background checks and security training</li>
                      <li>Principle of least privilege access controls</li>
                      <li>Regular security awareness and compliance training</li>
                      <li>Vendor risk management and due diligence</li>
                    </ul>
                  </div>

                  <div className='my-[40px] overflow-x-auto px-[20px]'>
                    <table className='w-full border-collapse text-left'>
                      <thead>
                        <tr
                          className=''
                          style={{
                            background: ' linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)',
                          }}
                        >
                          <th className='p-3 text-[15px] font-medium tracking-wider uppercase'>
                            DATA TYPE
                          </th>
                          <th className='p-3 text-[15px] font-medium tracking-wider uppercase'>
                            RETENTION PERIOD
                          </th>
                          <th className='p-3 text-[15px] font-medium tracking-wider uppercase'>
                            PURPOSE
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          className=''
                          style={{
                            background: 'linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)',
                          }}
                        >
                          <td className='border p-3'>customer account data</td>
                          <td className='border p-3'>duration of relationship + 7 years</td>
                          <td className='border p-3'>SERVICE DELIVERY, COMPLIANCE</td>
                        </tr>
                        <tr
                          className=''
                          style={{
                            background: 'linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)',
                          }}
                        >
                          <td className='border p-3'>security logs</td>
                          <td className='border p-3'>90 days to 2 years</td>
                          <td className='border p-3'>SECURITY MONITORING, FORENSICS</td>
                        </tr>
                        <tr
                          className=''
                          style={{
                            background: 'linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)',
                          }}
                        >
                          <td className='border p-3'>marketing communications</td>
                          <td className='border p-3'>until opt-out + 30 days</td>
                          <td className='border p-3'>CAMPAIGN MANAGEMENT</td>
                        </tr>
                        <tr
                          className=''
                          style={{
                            background: 'linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)',
                          }}
                        >
                          <td className='border p-3'>support records</td>
                          <td className='border p-3'>3 years after resolution</td>
                          <td className='border p-3'>SERVICE IMPROVEMENT, TRAINING</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h2
                    className='mx-auto mt-6 max-w-5xl px-4 text-[24px] font-medium'
                    style={{ color: '#FFFFFFCC' }}
                  >
                    7. Your Rights and Choices
                  </h2>
                  <p className='mx-auto max-w-5xl px-4 text-[16px]' style={{ color: '#FFFFFFCC' }}>
                    Depending on your location and applicable privacy laws, you may have the
                    following rights:
                  </p>
                  <div className='mx-auto max-w-5xl px-4'>
                    <h3 className='text-[16px] font-medium' style={{ color: '#FFFFFFCC' }}>
                      Access and Portability
                    </h3>
                    <ul className='list-inside list-disc space-y-2 pl-4 text-[16px]'>
                      <li style={{ color: '#FFFFFFCC' }}>
                        Request a copy of the personal information we hold about you
                      </li>
                      <li style={{ color: '#FFFFFFCC' }}>
                        Receive your data in a portable, machine-readable format
                      </li>
                      <li style={{ color: '#FFFFFFCC' }}>
                        Verify the accuracy and source of your information
                      </li>
                    </ul>

                    <h3 className='text-[16px] font-medium' style={{ color: '#FFFFFFCC' }}>
                      Correction and Deletion
                    </h3>
                    <ul className='list-inside list-disc space-y-2 pl-4 text-[16px]'>
                      <li style={{ color: '#FFFFFFCC' }}>
                        Correct inaccurate or outdated personal information
                      </li>
                      <li style={{ color: '#FFFFFFCC' }}>
                        Request deletion of your personal information
                      </li>
                      <li style={{ color: '#FFFFFFCC' }}>
                        Restrict or object to certain processing activities
                      </li>
                    </ul>

                    <h3 className='text-[16px] font-medium' style={{ color: '#FFFFFFCC' }}>
                      Communication Preferences
                    </h3>
                    <ul className='list-inside list-disc space-y-2 pl-4 text-[16px]'>
                      <li style={{ color: '#FFFFFFCC' }}>
                        Opt out of marketing communications at any time
                      </li>
                      <li style={{ color: '#FFFFFFCC' }}>Update your communication preferences</li>
                      <li style={{ color: '#FFFFFFCC' }}>
                        Choose which types of information you receive
                      </li>
                    </ul>
                  </div>

                  <div className='my-8 rounded-[24px] border py-4'>
                    <div className='flex justify-center'>
                      <h2 className='text-center text-[24px] font-medium mb-[12px]'>Exercise Your Rights</h2>
                    </div>
                    <p
                      className='mx-auto mt-2 max-w-5xl px-4 text-[16px]'
                      style={{ color: '#FFFFFFCC' }}
                    >
                      To exercise any of these rights, please contact us using the information
                      provided in the &quot;Contact Us&quot; section below. We will respond to your
                      request within 30 days.
                    </p>
                  </div>
                </section>

                {/* Section 8-11 */}
                <section className='mx-auto max-w-5xl px-4'>
                  <h2 className='text-[24px] font-medium' style={{ color: '#FFFFFFCC' }}>
                    8. International Data Transfers
                  </h2>
                  <p className='text-[24px]' style={{ color: '#FFFFFFCC' }}>
                    Vijilan is based in the United States, and your information may be transferred
                    to, stored, and processed in the United States and other countries where we or
                    our service providers operate. We ensure appropriate safeguards are in place for
                    international transfers, including:
                  </p>
                  <ul className='list-inside list-disc space-y-2 pl-4 text-[24px]'>
                    <li style={{ color: '#FFFFFFCC' }}>
                      Standard Contractual Clauses (SCCs) for EU data transfers
                    </li>
                    <li style={{ color: '#FFFFFFCC' }}>Adequacy decisions where applicable</li>
                    <li style={{ color: '#FFFFFFCC' }}>
                      Additional technical and organizational safeguards
                    </li>
                    <li style={{ color: '#FFFFFFCC' }}>
                      Regular assessments of transfer mechanisms
                    </li>
                  </ul>

                  <h2 className='text-[24px] font-medium' style={{ color: '#FFFFFFCC' }}>
                    9. Children&apos;s Privacy
                  </h2>
                  <p className='text-[24px]' style={{ color: '#FFFFFFCC' }}>
                    Our services are designed for businesses and are not intended for individuals
                    under 18 years of age. We do not knowingly collect personal information from
                    children under 18. If we become aware that we have collected such information,
                    we will take steps to delete it promptly.
                  </p>

                  <h2 className='text-[24px] font-medium' style={{ color: '#FFFFFFCC' }}>
                    10. Changes To This Policy
                  </h2>
                  <p className='text-[24px]' style={{ color: '#FFFFFFCC' }}>
                    We may update this Privacy Policy from time to time to reflect changes in our
                    practices, services, or legal requirements. We will notify you of material
                    changes by:
                  </p>
                  <ul className='list-inside list-disc space-y-2 pl-4 text-[24px]'>
                    <li style={{ color: '#FFFFFFCC' }}>
                      Posting the updated policy on our website
                    </li>
                    <li style={{ color: '#FFFFFFCC' }}>
                      Sending email notifications to registered users
                    </li>
                    <li style={{ color: '#FFFFFFCC' }}>
                      Providing notice through our services or other appropriate channels
                    </li>
                  </ul>
                  <p className='text-[24px]' style={{ color: '#FFFFFFCC' }}>
                    Your continued use of our services after the effective date of changes
                    constitutes acceptance of the updated policy.
                  </p>

                  <h2 className='mt-6 mb-4 text-[24px] font-medium' style={{ color: '#FFFFFFCC' }}>
                    11. Contact Us
                  </h2>
                  <div className='border-l-4 border-[#00AEEF] pl-3'>
                    <h3 className='text-[20px] font-medium'>Privacy Questions and Requests</h3>
                    <p className='text-[20px]'>
                      If you have questions about this Privacy Policy or wish to exercise your
                      privacy rights, please contact <br />
                      us:
                    </p>
                    <p className='text-[20px]'>
                      Email:
                      <a
                        href='mailto:privacy@vijilan.com'
                        className=''
                        style={{ textDecoration: 'underline' }}
                      >
                        privacy@vijilan.com
                      </a>
                    </p>
                    <p className='text-[20px]'>Mail:</p>
                    <p className='text-[20px]'>
                      Vijilan Security - Privacy Office
                      <br />
                      Aventura Onyx Tower
                      <br />
                      1010 S Federal Hwy Suite 1205
                      <br />
                      Aventura, FL 33180
                    </p>
                    <p className='text-[20px]'>Phone: 1-800-VIJILAN (845-4526)</p>
                    <p className='text-[20px]'>
                      For urgent security or privacy issues, please use the emergency contact line.
                    </p>
                  </div>
                </section>
                <div className='mt-6 rounded-[24px] border border-[#00AEEF] py-4'>
                  <h2 className='text-center text-[24px] font-medium mb-[12px]'>Data Protection Officer</h2>
                  <p className='mx-auto max-w-5xl px-4 text-[16px]' style={{ color: '#FFFFFFCC' }}>
                    If you are located in the European Union or other regions with data protection
                    regulations, you may contact our Data Protection Officer at dpo@vijilan.com for
                    assistance with privacy matters.
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

export default PrivacyPolicy;
