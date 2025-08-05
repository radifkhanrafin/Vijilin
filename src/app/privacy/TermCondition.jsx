import React, { useEffect } from 'react';

const TermCondition = () => {
  useEffect(() => {
    document.body.classList.add('home-body');

    return () => {
      document.body.classList.remove('home-body');
    };
  }, []);

  return (
    <div className='pc-bg'>
      <section className='pt-[180px] pb-16'>
        <div className='container mx-auto px-[16px] md:px-6'>
          <h1 className='text-center text-3xl font-bold md:text-4xl lg:text-[48px]'>
            Terms and Conditions
          </h1>
          <p className='mt-10 text-center text-[18px]'>
            Legal terms governing your use of Vijilan's cybersecurity services, website, and <br />{' '}
            business relationships.
          </p>
        </div>
      </section>

      <section className='pt-16 pb-[120px]'>
        <div className='container mx-auto px-[16px] md:px-6'>
          <div
            className='h-[142px]'
            style={{
              background: 'linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)',
            }}
          >
            <h2 className='flex h-full w-full items-center justify-center px-[20px] text-[18px] uppercase'>
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
              <div className='space-y-[40px]'>
                {/* Section 1: Agreement to Terms */}
                <section className=''>
                  <div className='mx-auto max-w-5xl px-4'>
                    <h2 className='mb-4 text-[24px] font-medium'>1. Agreement to Terms</h2>
                    <p className='text-[16px]'>
                      By accessing or using Vijilan Security&apos;s website, services, or entering
                      into a business relationship with us, you agree to be bound by these Terms and
                      Conditions (&quot;Terms&quot;). If you do not agree to these Terms, please do
                      not use our services.
                    </p>
                    <p className='text-[16px]'>
                      These Terms constitute a legally binding agreement between you and Vijilan
                      Security, Inc. (&quot;Vijilan,&quot; &quot;we,&quot; &quot;our,&quot; or
                      &quot;us&quot;), a Delaware corporation with its principal place of business
                      in Florida.
                    </p>
                  </div>
                  <div className='mt-[40px] rounded-[24px] border p-2 py-[24px]'>
                    <h3 className='mb-2 text-center text-[24px] font-medium'>Important Notice</h3>
                    <p className='mx-auto max-w-5xl px-4 text-[16px]'>
                      These Terms include important limitations of liability and dispute resolution
                      provisions. Please read them carefully before using our services.
                    </p>
                  </div>
                </section>

                {/* Section 2: Definitions */}
                <section className='mx-auto max-w-5xl px-4'>
                  <h2 className='mb-4 text-[24px] font-medium' style={{ color: '#FFFFFFCC' }}>
                    2. definitions
                  </h2>
                  <p style={{ color: '#FFFFFFCC' }}>for purposes of these terms:</p>
                  <ul className='list-inside list-disc space-y-2 pl-4 text-[16px]'>
                    <li style={{ color: '#FFFFFFCC' }}>
                      <span className='font-medium' style={{ color: '#FFFFFFCC' }}>
                        &quot;services&quot;
                      </span>{' '}
                      means all cybersecurity services provided by vijilan, including but not
                      limited to threatremediate&trade;, threatrespond, managed edr, managed
                      exposure management, logingest, next-gen siem, and professional services.
                    </li>
                    <li style={{ color: '#FFFFFFCC' }}>
                      <span className='font-medium' style={{ color: '#FFFFFFCC' }}>
                        &quot;customer&quot;
                      </span>{' '}
                      means any individual or entity that has entered into a service agreement with
                      vijilan.
                    </li>
                    <li style={{ color: '#FFFFFFCC' }}>
                      <span className='font-medium' style={{ color: '#FFFFFFCC' }}>
                        &quot;partner&quot;
                      </span>{' '}
                      means vijilan&apos;s distributors and other authorized channel partners.
                    </li>
                    <li style={{ color: '#FFFFFFCC' }}>
                      <span className='font-medium' style={{ color: '#FFFFFFCC' }}>
                        &quot;user&quot;
                      </span>{' '}
                      means any individual who accesses or uses our website or services.
                    </li>
                    <li style={{ color: '#FFFFFFCC' }}>
                      <span className='font-medium' style={{ color: '#FFFFFFCC' }}>
                        &quot;confidential information&quot;
                      </span>{' '}
                      means any non-public information disclosed by either party.
                    </li>
                  </ul>
                </section>

                {/* Section 3: service descriptions and availability */}
                <section className='mx-auto max-w-5xl px-4'>
                  <h2 className='text-[16px] font-medium' style={{ color: '#FFFFFFCC' }}>
                    3. service descriptions and availability
                  </h2>
                  <h3 className='text-[16px] font-medium' style={{ color: '#FFFFFFCC' }}>
                    cybersecurity services
                  </h3>
                  <p className='text-[16px]' style={{ color: '#FFFFFFCC' }}>
                    vijilan provides managed cybersecurity services designed to detect, investigate,
                    and remediate security threats. our services include:
                  </p>
                  <ul className='list-inside list-disc space-y-2 pl-4 text-[16px]'>
                    <li style={{ color: '#FFFFFFCC' }}>
                      threatremediate&trade;: managed extended detection and response (xdr) with
                      active threat remediation
                    </li>
                    <li style={{ color: '#FFFFFFCC' }}>
                      threatrespond: managed detection and response (mdr) with expert-guided
                      response
                    </li>
                    <li style={{ color: '#FFFFFFCC' }}>
                      managed itdr: identity threat detection and response services
                    </li>
                    <li style={{ color: '#FFFFFFCC' }}>
                      managed exposure management: continuous exposure assessment and remediation
                    </li>
                    <li style={{ color: '#FFFFFFCC' }}>
                      logingest (logscale): log management and analysis services
                    </li>
                    <li style={{ color: '#FFFFFFCC' }}>
                      next-gen siem: security information and event management solutions
                    </li>
                    <li style={{ color: '#FFFFFFCC' }}>
                      professional services: implementation, optimization, and managed services for
                      third-party security tools
                    </li>
                  </ul>
                  <h3 className='text-[16px] font-medium' style={{ color: '#FFFFFFCC' }}>
                    service level commitments
                  </h3>
                  <p className='text-[16px]' style={{ color: '#FFFFFFCC' }}>
                    specific service level agreements (slas) are detailed in individual service
                    agreements. general commitments include:
                  </p>
                  <ul className='list-inside list-disc space-y-2 pl-4 text-[16px]'>
                    <li style={{ color: '#FFFFFFCC' }}>
                      24/7/365 security operations center (soc) monitoring
                    </li>
                    <li style={{ color: '#FFFFFFCC' }}>
                      response time commitments based on threat severity
                    </li>
                    <li style={{ color: '#FFFFFFCC' }}>
                      monthly reporting and quarterly business reviews
                    </li>
                    <li style={{ color: '#FFFFFFCC' }}>
                      compliance-ready documentation and audit support
                    </li>
                  </ul>
                </section>

                {/* Section 4: customer obligations and responsibilities */}
                <section className='mx-auto max-w-5xl px-4'>
                  <h2 className='text-[24px] font-medium' style={{ color: '#FFFFFFCC' }}>
                    4. customer obligations and responsibilities
                  </h2>
                  <h3 className='text-[16px] font-medium' style={{ color: '#FFFFFFCC' }}>
                    customer must:
                  </h3>
                  <ul className='list-inside list-disc space-y-2 pl-4 text-[16px]'>
                    <li style={{ color: '#FFFFFFCC' }}>
                      provide necessary access to systems and networks for service delivery
                    </li>
                    <li style={{ color: '#FFFFFFCC' }}>
                      maintain current and accurate contact information
                    </li>
                    <li style={{ color: '#FFFFFFCC' }}>
                      respond promptly to security incidents and recommendations
                    </li>
                    <li style={{ color: '#FFFFFFCC' }}>
                      implement reasonable security measures as advised by vijilan
                    </li>
                    <li style={{ color: '#FFFFFFCC' }}>
                      comply with applicable laws and regulations
                    </li>
                  </ul>
                  <h3 className='text-[16px] font-medium' style={{ color: '#FFFFFFCC' }}>
                    data and information
                  </h3>
                  <p className='text-[16px]' style={{ color: '#FFFFFFCC' }}>
                    customers are responsible for:
                  </p>
                  <ul className='list-inside list-disc space-y-2 pl-4 text-[16px]'>
                    <li style={{ color: '#FFFFFFCC' }}>
                      the accuracy and legality of data provided to vijilan
                    </li>
                    <li style={{ color: '#FFFFFFCC' }}>
                      obtaining necessary consents for data processing
                    </li>
                    <li style={{ color: '#FFFFFFCC' }}>
                      maintaining appropriate data backups and recovery procedures
                    </li>
                    <li style={{ color: '#FFFFFFCC' }}>
                      notifying vijilan of any changes that may affect service delivery
                    </li>
                  </ul>
                  <h3 className='text-[24px] font-medium' style={{ color: '#FFFFFFCC' }}>
                    5. acceptable use policy
                  </h3>
                  <p style={{ color: '#FFFFFFCC' }}>
                    you agree not to use our services or website to:
                  </p>
                  <ul className='list-inside list-disc space-y-2 pl-4 text-[16px]'>
                    <li style={{ color: '#FFFFFFCC' }}>
                      violate any applicable laws, regulations, or third-party rights
                    </li>
                    <li style={{ color: '#FFFFFFCC' }}>
                      transmit harmful, offensive, or inappropriate content
                    </li>
                    <li style={{ color: '#FFFFFFCC' }}>
                      attempt to gain unauthorized access to our systems or other users&apos; data
                    </li>
                    <li style={{ color: '#FFFFFFCC' }}>
                      interfere with or disrupt our services or infrastructure
                    </li>
                    <li style={{ color: '#FFFFFFCC' }}>
                      use our services for illegal activities or to harm others
                    </li>
                    <li style={{ color: '#FFFFFFCC' }}>
                      reverse engineer, decompile, or attempt to extract source code
                    </li>
                    <li style={{ color: '#FFFFFFCC' }}>
                      Sublicense, resell, or redistribute our services without authorization
                    </li>
                  </ul>
                </section>

                {/* Section 6: intellectual property (rights) */}
                <section className='mx-auto -mt-6 max-w-5xl px-4'>
                  <h2 className='text-[24px] font-medium' style={{ color: '#FFFFFFCC' }}>
                    6. intellectual property (rights)
                  </h2>
                  <h3 className='text-[16px] font-medium' style={{ color: '#FFFFFFCC' }}>
                    vijilan&apos;s intellectual property
                  </h3>
                  <p className='text-[16px]' style={{ color: '#FFFFFFCC' }}>
                    all content, features, and functionality of our services, including but not
                    limited to text, graphics, logos, software, and methodologies, are owned by
                    vijilan and protected by intellectual property laws. the threatremediate&trade;
                    trademark and other vijilan marks are our exclusive property.
                  </p>
                  <h3 className='text-[16px] font-medium' style={{ color: '#FFFFFFCC' }}>
                    customer data
                  </h3>
                  <p className='text-[16px]' style={{ color: '#FFFFFFCC' }}>
                    customers retain ownership of their data. by using our services, customers grant
                    vijilan a limited license to process customer data solely for the purpose of
                    providing services and improving our security capabilities.
                  </p>
                  <h3 className='text-[16px] font-medium' style={{ color: '#FFFFFFCC' }}>
                    feedback and improvements
                  </h3>
                  <p className='text-[16px]' style={{ color: '#FFFFFFCC' }}>
                    any feedback, suggestions, or improvements provided by customers may be used by
                    vijilan to enhance our services without restriction or compensation.
                  </p>
                </section>

                {/* Section 7: privacy and data protection */}
                <section>
                  <div className='mx-auto max-w-5xl px-4'>
                    <h2 className='text-[24px] font-medium' style={{ color: '#FFFFFFCC' }}>
                      7. privacy and data protection
                    </h2>
                    <p className='text-[16px]' style={{ color: '#FFFFFFCC' }}>
                      your privacy is important to us. our collection, use, and protection of
                      personal information is governed by our privacy policy, which is incorporated
                      into these terms by reference.
                    </p>
                  </div>
                  <div className='mt-[40px] rounded-[24px] border py-[24px]'>
                    <h3 className='mb-2 text-center text-[24px] font-medium'>
                      Data Security Commitment
                    </h3>
                    <p
                      className='mx-auto max-w-5xl px-4 text-[16px]'
                      style={{ color: '#FFFFFFCC' }}
                    >
                      Vijilan maintains industry-leading security standards including SOC 2 Type II,
                      ISO 27001, and compliance with HIPAA, PCI DSS, and GDPR requirements where
                      applicable.
                    </p>
                  </div>
                </section>

                {/* Section 8: Payment Terms and Billing */}
                <section className='mx-auto max-w-5xl px-4'>
                  <h2 className='mb-5 text-[24px] font-medium' style={{ color: '#FFFFFFCC' }}>
                    8. Payment Terms and Billing
                  </h2>
                  <h3 className='text-[16px] font-medium' style={{ color: '#FFFFFFCC' }}>
                    Fees and Payment
                  </h3>
                  <p className='text-[16px]' style={{ color: '#FFFFFFCC' }}>
                    Service fees are specified in individual service agreements. General payment
                    terms include:
                  </p>
                  <ul className='list-inside list-disc space-y-2 pl-4 text-[16px]'>
                    <li style={{ color: '#FFFFFFCC' }}>
                      Fees are typically billed monthly or annually in advance
                    </li>
                    <li style={{ color: '#FFFFFFCC' }}>
                      Payment is due within 30 days of invoice date unless otherwise specified
                    </li>
                    <li style={{ color: '#FFFFFFCC' }}>
                      Late payments may incur interest charges and service suspension
                    </li>
                    <li style={{ color: '#FFFFFFCC' }}>
                      All fees are non-refundable except as specifically provided in service
                      agreements
                    </li>
                  </ul>
                  <h3 className='mt-2 text-[16px] font-medium' style={{ color: '#FFFFFFCC' }}>
                    Price Changes
                  </h3>
                  <p className='text-[16px]' style={{ color: '#FFFFFFCC' }}>
                    Vijilan reserves the right to modify pricing with 60 days&apos; written notice
                    to customers. Price increases will not apply to existing contracts until
                    renewal.
                  </p>
                </section>

                {/* Section 9: Term and Termination */}
                <section className='mx-auto max-w-5xl px-4'>
                  <h2 className='mb-5 text-[24px] font-medium' style={{ color: '#FFFFFFCC' }}>
                    9. Term and Termination
                  </h2>
                  <h3 className='text-[16px] font-medium' style={{ color: '#FFFFFFCC' }}>
                    Service Term
                  </h3>
                  <p className='mb-5 text-[16px]' style={{ color: '#FFFFFFCC' }}>
                    Service terms are specified in individual agreements, typically ranging from 12
                    to 36 months with automatic renewal provisions.
                  </p>
                  <h3 className='text-[16px] font-medium' style={{ color: '#FFFFFFCC' }}>
                    Termination Rights
                  </h3>
                  <p className='text-[16px]' style={{ color: '#FFFFFFCC' }}>
                    Either party may terminate services:
                  </p>
                  <ul className='mb-5 list-inside list-disc space-y-2 pl-4 text-[16px]'>
                    <li style={{ color: '#FFFFFFCC' }}>
                      For material breach that remains uncured after 30 days' written notice
                    </li>
                    <li style={{ color: '#FFFFFFCC' }}>
                      For non-payment after 15 days' notice and opportunity to cure
                    </li>
                    <li style={{ color: '#FFFFFFCC' }}>
                      Upon insolvency, bankruptcy, or assignment for benefit of creditors
                    </li>
                    <li style={{ color: '#FFFFFFCC' }}>
                      As specified in individual service agreements
                    </li>
                  </ul>
                  <h3 className='text-[16px] font-medium' style={{ color: '#FFFFFFCC' }}>
                    Effect of Termination
                  </h3>
                  <p className='text-[16px]' style={{ color: '#FFFFFFCC' }}>
                    Upon termination:
                  </p>
                  <ul className='mb-5 list-inside list-disc space-y-2 pl-4 text-[16px]'>
                    <li style={{ color: '#FFFFFFCC' }}>
                      All access to services will be discontinued
                    </li>
                    <li style={{ color: '#FFFFFFCC' }}>
                      Customer data will be returned or securely destroyed as requested
                    </li>
                    <li style={{ color: '#FFFFFFCC' }}>
                      Outstanding fees become immediately due and payable
                    </li>
                    <li style={{ color: '#FFFFFFCC' }}>
                      Confidentiality obligations continue indefinitely
                    </li>
                  </ul>
                </section>

                {/* Section 10: Warranties and Disclaimers */}
                <section className=''>
                  <div className='mx-auto max-w-5xl px-4'>
                    <h2 className='mb-5 text-[24px] font-medium' style={{ color: '#FFFFFFCC' }}>
                      10. Warranties and Disclaimers
                    </h2>
                    <h3 className='text-[16px] font-medium' style={{ color: '#FFFFFFCC' }}>
                      Limited Warranty
                    </h3>
                    <p className='text-[16px]' style={{ color: '#FFFFFFCC' }}>
                      Vijilan warrants that our services will be performed in a professional manner
                      consistent with industry standards. We do not warrant that our services will
                      prevent all security incidents or that systems will be error-free.
                    </p>
                  </div>
                  <div className='mt-[40px] rounded-[24px] border p-2 py-[24px]'>
                    <h3 className='mb-2 text-center text-[24px] font-medium'>
                      Disclaimer of Warranties
                    </h3>
                    <p
                      className='mx-auto max-w-5xl px-4 text-[16px]'
                      style={{ color: '#FFFFFFCC' }}
                    >
                      EXCEPT AS EXPRESSLY SET FORTH HEREIN, VIJILAN PROVIDES ALL SERVICES &quot;AS
                      IS&quot; WITHOUT WARRANTY OF ANY KIND. WE DISCLAIM ALL IMPLIED WARRANTIES
                      INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
                      NON-INFRINGEMENT.
                    </p>
                  </div>
                </section>

                <section className=''>
                  <div className='mt-6 rounded-[24px] border p-2 py-[24px]'>
                    <h3 className='mb-2 text-center text-[24px] font-medium'>
                      11. Limitation of Liability
                    </h3>
                    <p
                      className='mx-auto max-w-5xl px-4 text-[16px]'
                      style={{ color: '#FFFFFFCC' }}
                    >
                      TO THE MAXIMUM EXTENT PERMITTED BY LAW, VIJILAN&apos;S TOTAL LIABILITY FOR ANY
                      CLAIMS ARISING FROM OR RELATED TO THESE TERMS OR OUR SERVICES SHALL NOT EXCEED
                      THE AMOUNT PAID BY CUSTOMER TO VIJILAN IN THE 12 MONTHS PRECEDING THE CLAIM.
                    </p>
                    <p
                      className='mx-auto max-w-5xl px-4 text-[16px]'
                      style={{ color: '#FFFFFFCC' }}
                    >
                      IN NO EVENT SHALL VIJILAN BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL,
                      CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFITS, DATA LOSS, OR
                      BUSINESS INTERRUPTION, REGARDLESS OF THE THEORY OF LIABILITY.
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermCondition;
