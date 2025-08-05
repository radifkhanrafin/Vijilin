import React, { useEffect } from 'react';
import banner from '../../Assets/Blog-banner.png';
import linkdin from '../../Assets/linkdin.png';
import mail from '../../Assets/mail.png';
import x from '../../Assets/x.png';
import { ChevronRight } from 'lucide-react';
import mask from '../../Assets/mask.png';
import { Link } from 'react-router-dom';

const Blog = () => {
  useEffect(() => {
    document.body.classList.add('home-body');

    return () => {
      document.body.classList.remove('home-body');
    };
  }, []);

  return (
    <>
      <section className='pt-[130px]'>
        <div className='container mx-auto px-[16px] md:px-6'>
          <div>
            <div className='mb-8'>
              <nav className='flex flex-wrap items-center text-[12px]'>
                <Link to={'/'} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                  <span className='cursor-pointer hover:text-white'>Home</span>
                </Link>
                <ChevronRight className='mx-2 h-4 w-4' />
                <Link to={'/blog'} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                  <span className='cursor-pointer hover:text-white'>blog</span>
                </Link>
                <ChevronRight className='mx-2 h-4 w-4' />
                <span className='cursor-pointer hover:text-white'>Threat Intelligence</span>
                <ChevronRight className='mx-2 h-4 w-4' />
                <span className='!text-[13px] font-medium'>The Rise of Malware-Free Attacks</span>
              </nav>
            </div>

            {/* Main Content */}
            <div className='space-y-8'>
              {/* Category Badge */}
              <div className=''>
                <span className='inline-block rounded-[10px] bg-[#00AEEF] px-[24px] py-[16px] text-[16px] font-medium tracking-wide text-white uppercase'>
                  THREAT INTELLIGENCE
                </span>
              </div>

              {/* Main Heading */}
              <h1 className='text-2xl leading-tight font-bold lg:text-5xl'>
                The Rise of Malware-Free Attacks: How to <br /> Defend Your Organization
              </h1>

              {/* Author Information */}
              <div className='flex items-center gap-3'>
                <div
                  className='flex h-[30px] w-[30px] items-center justify-center rounded-full text-[10px] font-bold text-white'
                  style={{
                    background: `linear-gradient(0deg, rgba(196,196,196,0.3), rgba(196,196,196,0.3)),
                 linear-gradient(180deg, #F89B29 0%, #00AEEF 100%)`,
                  }}
                >
                  KN
                </div>

                <div className='flex items-center gap-4'>
                  <span className='text-[13px] font-medium text-white'>Kevin Nejad</span>
                  <span className='text-[13px] font-light text-[#F1EAFA]'>June 13, 2025</span>
                  <span className='text-[13px] font-light text-[#F1EAFA]'>7 min read</span>
                </div>
              </div>

              <div className='relative mb-8 overflow-hidden rounded-[22px]'>
                <img
                  src={banner}
                  alt='Cybersecurity threat landscape'
                  className='h-[400px] w-full object-cover'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='mt-[50px]'>
        <div className='container mx-auto grid grid-cols-1 gap-10 px-2 sm:px-4 md:px-6 lg:grid-cols-5 lg:px-8 xl:px-6'>
          {/* Main content */}
          <div className='col-span-full lg:col-span-3'>
            <p className='mb-6 text-[18px]'>
              Modern cyber attackers are evolving rapidly, and one of the trends we're seeing at
              Vijilan is the dramatic rise in malware-free attacks. These sophisticated threats
              leverage legitimate tools and processes already present in your environment, making
              them incredibly difficult to detect using traditional security approaches. Unlike
              conventional malware-based attacks that deploy malicious files to your systems,
              malware-free attacks—also known as “living off the land” attacks—use trusted programs
              and system utilities to carry out their objectives. This makes them nearly invisible
              to signature-based detection systems and presents a significant challenge for security
              teams worldwide.
            </p>

            <h2 className='mb-4 text-lg font-bold md:text-[32px]'>
              Understanding the Malware-Free Attack <br /> Landscape
            </h2>

            <p className='mb-4 text-[18px]'>
              In our analysis of over 10,000 security incidents in the past year, Vijilan's SOC team
              has observed a 300% increase in malware-free attack attempts. These attacks typically
              follow a predictable pattern:
            </p>

            <ul className='mb-6 list-disc pl-8 text-[18px]'>
              <li>
                Initial Access: Attackers gain entry through compromised credentials, phishing, or
                exploiting unpatched vulnerabilities.
              </li>
              <li>
                Privilege Escalation: Using legitimate Windows tools like PowerShell, WMI, or
                scheduled tasks to gain higher-level access.
              </li>
              <li>
                Lateral Movement: Leveraging built-in networking tools and protocols to move through
                your environment.
              </li>
              <li>
                Data Exfiltration: Using legitimate file transfer utilities or cloud services to
                steal sensitive information.
              </li>
            </ul>

            <blockquote className='mb-6 flex min-h-[263px] items-center rounded-[10px] border-l-4 border-[#00AEEF] bg-[#082235] px-[30px] py-[50px] md:!p-[80px]'>
              <p className='flex h-full w-full items-center justify-center text-[20px] italic'>
                “The most dangerous attacks today don't look like attacks at all. They blend
                seamlessly into normal business operations, which is exactly what makes them so
                effective — and so challenging to defend against.”
              </p>
            </blockquote>

            <h2 className='mb-4 text-lg font-bold md:text-[32px] max-w-[660px]'>
              Why Traditional Security Fails Against These Threats
            </h2>

            <p className='text-[18px]'>
              Traditional antivirus and endpoint protection solutions rely heavily on
              signature-based detections — looking for known malicious files and patterns. But when
              attackers use legitimate tools like PowerShell, Windows Management Instrumentation
              (WMI), or even trusted applications like browsers and productivity software, these
              signature-based approaches become largely ineffective.
            </p>
          </div>

          {/* Sidebar */}
          <aside className='col-span-full space-y-8 lg:col-span-2'>
            {/* social media share */}
            <div className='relative rounded-[16px] bg-[#00AEEF3D] p-2 md:p-6'>
              <div
                className='absolute inset-0 z-0 rounded-[16px] p-[1px]'
                style={{
                  background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
                       linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }}
              />
              <h3 className='mb-4 text-center text-lg font-bold md:text-[24px]'>
                Share this Article
              </h3>

              <div className='space-y-3'>
                <button className='flex w-full items-center justify-center gap-2 rounded-[10px] bg-[#FFFFFF47] px-[30px] py-[14px]'>
                  <img src={linkdin} className='h-[32px] w-[32px] rounded-[5px]' alt='' />{' '}
                  <span className='text-[18px]'>Share on LinkedIn</span>
                </button>
                <button className='flex w-full items-center justify-center gap-2 rounded-[10px] bg-[#FFFFFF47] px-[30px] py-[14px]'>
                  <img src={x} className='h-[32px] w-[32px] rounded-[5px]' alt='' />{' '}
                  <span className='text-[18px]'>Share on Twitter</span>
                </button>
                <button className='flex w-full items-center justify-center gap-2 rounded-[10px] bg-[#FFFFFF47] px-[30px] py-[14px]'>
                  <img src={mail} className='h-[32px] w-[32px] rounded-[5px]' alt='' />{' '}
                  <span className='text-[18px]'>Share on Email</span>
                </button>
              </div>
            </div>

            {/* free resource */}
            <div className='relative rounded-[16px] bg-[#00AEEF3D]'>
              <div
                className='absolute inset-0 z-0 rounded-[16px] p-[1px]'
                style={{
                  background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
                       linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }}
              />

              <div className='mx-1 rounded-[16px] px-[24px] py-[20px] text-center'>
                <h3 className='mb-4 text-center text-lg font-bold md:text-[24px]'>
                  Free Resources
                </h3>
                <div
                  className='w-full rounded-[8px] p-2 !py-[40px] text-lg font-bold md:p-[24px] md:!text-[24px]'
                  style={{
                    background: 'linear-gradient(to right, #F89B29, #FF0F7B)',
                  }}
                >
                  <h5 className='!text-[18px] font-bold'>
                    The CISO's Handbook to Combating AI-Driven Attacks
                  </h5>
                </div>
                <p className='my-2 text-[14px] font-bold'>CISO's Handbook Cover</p>
                <p className='mt-10 mb-4 text-sm font-medium'>
                  Get expert strategies for defending against the latest AI-powered threats
                  targeting your organization.
                </p>

                <button
                  className='cursor-pointer rounded-[8px] px-[20px] py-[16px] text-[16px] font-medium text-white transition-opacity hover:opacity-90 md:px-[24px] md:text-lg'
                  style={{
                    background: 'linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)',
                  }}
                >
                  DOWNLOAD NOW
                </button>
              </div>
            </div>

            {/* Related Articles */}
            <div className='relative rounded-[16px] bg-[#00AEEF3D] px-[24px] py-[32px]'>
              <div
                className='absolute inset-0 z-0 rounded-[16px] p-[1px]'
                style={{
                  background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
                       linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }}
              />
              <h3 className='mb-4 text-center text-[24px] font-bold'>Related Articles</h3>
              <ul className='space-y-2'>
                <li className='border-b border-[#FFFFFF42] pb-3 text-[16px] font-medium lg:px-[30px]'>
                  <p className='max-w-[240px]'>Deconstructing a Real World Ransom Attack</p>
                  <span className='text-sm font-light text-[#F1EAFA]'>June 15, 2025</span>
                </li>
                <li className='border-b border-[#FFFFFF42] pb-3 text-[16px] font-medium lg:px-[30px]'>
                  <p className='max-w-[240px]'>Deconstructing a Real World Ransom Attack</p>
                  <span className='text-sm font-light text-[#F1EAFA]'>June 15, 2025</span>
                </li>
                <li className='border-b border-[#FFFFFF42] pb-3 text-[16px] font-medium lg:px-[30px]'>
                  <p className='max-w-[240px]'>Deconstructing a Real World Ransom Attack</p>
                  <span className='text-sm font-light text-[#F1EAFA]'>June 15, 2025</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
      <section>
        <div>
          <style>
            {`
                            .custom-mask-image {
                                display: none;
                        }
        
                        @media (min-width: 1024px) {
                            .custom-mask-image {
                            display: flex;
                            grid-column: span 1 / span 1;
                        }
                    }
                `}
          </style>

<div className='container mx-auto !mb-[40px] px-2 sm:px-4 md:px-6 lg:px-8 xl:px-6 !mt-[45px]'>

  <div className="lg:max-w-[700px]">
            <div className='relative rounded-[16px] bg-[#00AEEF3D] px-[24px] lg:px-[45px] py-[60px]'>
              <div
                className='absolute inset-0 z-0 rounded-[16px] p-[1px]'
                style={{
                  background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
                       linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }}
              />
              <div className="text-center">
                <h1 className='text-lg font-bold md:text-[32px] text-center max-w-[500px] mx-auto'>
                Is your organization vulnerable to malware-free attacks?
              </h1>
              <p className='py-[25px] text-[16px] lg:text-[20px]'>Vijilan's ThreatRemediate™ service provides behavioral-based detection and active containment capabilities specifically designed to identify and stop these sophisticated threats. Our expert SOC doesn't just alert you—we take direct action to neutralize the threat.</p>
              <button
                  className='cursor-pointer rounded-[8px] px-[20px] py-[16px] text-[16px] font-medium text-white transition-opacity hover:opacity-90 md:px-[24px] md:text-lg'
                  style={{
                    background: 'linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)',
                  }}
                >
                  LEARN ABOUT THREATREMEDIATE
                </button>
              </div>

            </div>
  </div>
</div>



          <div className='container mx-auto !mb-[40px] px-2 sm:px-4 md:px-6 lg:px-8 xl:px-6'>
            <div className='lg:max-w-[800px]'>
              <h1 className='text-lg font-bold md:text-[32px]'>
                Advanced Detection Strategies That Actually Work
              </h1>
              <p className='mt-[25px] mb-[20px] max-w-[680px] text-[18px]'>
                Defending against malware-free attacks requires a fundamental shift in approach.
                Here are the key strategies that have proven effective in our client environments:
              </p>
            </div>
          </div>

          <div className='container mx-auto !mb-[40px] px-2 sm:px-4 md:px-6 lg:px-8 xl:px-6'>
            <div className='lg:max-w-[800px]'>
              <h1 className='text-lg font-bold md:text-[32px]'>
                1. Advanced Detection Strategies That Actually Work
              </h1>
              <p className='mt-[25px] mb-[20px] max-w-[680px] text-[18px]'>
                Instead of looking for malicious files, focus on detecting malicious behavior. This
                includes monitoring for unusual process execution patterns, abnormal network
                connections, and suspicious privilege escalation attempts. Machine learning
                algorithms can establish baselines of normal behavior and flag deviations that may
                indicate an attack in progress.
              </p>
            </div>
          </div>

          <div className='container mx-auto !mb-[40px] px-2 sm:px-4 md:px-6 lg:px-8 xl:px-6'>
            <div className='lg:max-w-[800px]'>
              <h1 className='text-lg font-bold md:text-[32px]'>
                2. Advanced Detection Strategies That Actually Work
              </h1>
              <p className='mt-[25px] mb-[20px] max-w-[680px] text-[18px]'>
                Instead of looking for malicious files, focus on detecting malicious behavior. This
                includes monitoring for unusual process execution patterns, abnormal network
                connections, and suspicious privilege escalation attempts. Machine learning
                algorithms can establish baselines of normal behavior and flag deviations that may
                indicate an attack in progress.
              </p>
              <ul className='list-inside list-disc space-y-[5px] lg:ml-[50px]'>
                <li className='text-[18px]'>
                  Script block logging to capture all PowerShell commands
                </li>
                <li className='text-[18px]'>Module logging to track loaded PowerShell modules</li>
                <li className='text-[18px]'>Transcription logging for complete session records</li>
                <li className='text-[18px]'>Real-time analysis of PowerShell execution patterns</li>
              </ul>
            </div>
          </div>

          <div className='container mx-auto !mb-[40px] px-2 sm:px-4 md:px-6 lg:px-8 xl:px-6'>
            <div className='lg:max-w-[768px]'>
              <h1 className='text-lg font-bold md:text-[32px]'>3. Network Traffic Analysis</h1>
              <p className='mt-[25px] mb-[20px] max-w-[680px] text-[18px]'>
                Even malware-free attacks generate network traffic that can be analyzed for
                suspicious patterns. Implement network detection and response (NDR) capabilities
                that can identify:
              </p>
              <ul className='list-inside list-disc space-y-[5px] lg:ml-[50px]'>
                <li className='text-[18px]'>
                  Unusual DNS queries or domain generation algorithms (DGA)
                </li>
                <li className='text-[18px]'>Abnormal data transfer volumes or destinations</li>
                <li className='text-[18px]'>Command and control communication patterns</li>
                <li className='text-[18px]'>Lateral movement attempts across network segments</li>
              </ul>
            </div>
          </div>

          <div className='container mx-auto !mb-[40px] px-2 sm:px-4 md:px-6 lg:px-8 xl:px-6'>
            <div className='lg:max-w-[768px]'>
              <h1 className='text-lg font-bold md:text-[32px]'>
                The Vijilan Approach: Active Remediation
              </h1>
              <p className='mt-[25px] mb-[20px] max-w-[680px] text-[18px]'>
                At Vijilan, we've developed a comprehensive approach to defending against
                malware-free attacks that goes far beyond traditional detection and alerting. Our
                ThreatRemediate service combines advanced behavioral analysis with active
                remediation capabilities, allowing our SOC team to not just identify these threats,
                but to immediately contain and neutralize them.
              </p>
              <p className='mb-[40px] max-w-[680px] text-[18px]'>Here's how we're different:</p>
              <ul className='list-inside list-disc space-y-[5px] lg:ml-[50px]'>
                <li className='text-[18px]'>
                  <strong>Real-time Behavioral Analysis:</strong> Our AI-driven platform
                  continuously monitors for suspicious behavior patterns across endpoints, networks,
                  and cloud environments
                </li>
                <li className='text-[18px]'>
                  <strong>Expert Human Analysis:</strong> Our certified SOC analysts provide the
                  context and expertise that automated systems alone cannot deliver
                </li>
                <li className='text-[18px]'>
                  <strong>Immediate Active Response:</strong> When a threat is confirmed, we don't
                  just send an alert we take direct action to isolate affected systems, disable
                  compromised accounts, and block malicious processes
                </li>
                <li className='text-[18px]'>
                  <strong>Comprehensive Investigation:</strong> Our team conducts thorough forensic
                  analysis to understand the full scope of the attack and prevent similar future
                  incidents
                </li>
              </ul>
            </div>
          </div>

          <div className='container mx-auto !mb-[40px] px-2 sm:px-4 md:px-6 lg:px-8 xl:px-6'>
            <div className='lg:max-w-[768px]'>
              <h1 className='text-lg font-bold md:text-[32px]'>
                Implementing Your Defense Strategy
              </h1>
              <p className='mt-[25px] mb-[40px] max-w-[680px] text-[18px]'>
                Building effective defenses against malware-free attacks requires a multi-layered
                approach. Start with these essential steps:
              </p>
              <ul className='list-inside list-decimal space-y-[5px] lg:ml-[50px]'>
                <li className='text-[18px]'>
                  <strong>Audit Your Current Capabilities:</strong> Assess whether your existing
                  security tools can detect behavioral anomalies and suspicious use of legitimate
                  tools
                </li>
                <li className='text-[18px]'>
                  <strong>Implement Advanced Logging:</strong> Ensure comprehensive logging is
                  enabled for PowerShell, WMI, and other high-risk utilities
                </li>
                <li className='text-[18px]'>
                  <strong>Deploy Behavioral Analytics:</strong> Invest in solutions that can
                  establish behavioral baselines and detect deviations
                </li>
                <li className='text-[18px]'>
                  <strong>Train Your Team:</strong> Ensure your security team understands the
                  tactics, techniques, and procedures (TTPs) used in malware-free attacks
                </li>
                <li className='text-[18px]'>
                  <strong>Test Your Defenses:</strong> Regularly conduct red team exercises that
                  simulate malware-free attack scenarios
                </li>
              </ul>
            </div>
          </div>

          <div className='container mx-auto grid grid-cols-1 px-2 sm:px-4 md:px-6 lg:grid-cols-3 lg:px-8 xl:px-6'>
            <div className='space-y-6 sm:col-span-3 md:col-span-2'>
              <h1 className='text-lg font-bold md:text-[32px]'>
                Looking Forward: The Future of Threat Detection
              </h1>

              <p className='mx-auto my-4 text-[18px]'>
                <span>
                  {' '}
                  As attackers continue to evolve their techniques, organizations must stay ahead of
                  the curve. The future of cybersecurity lies in intelligent, behavior-based
                  detection combined with rapid, automated response capabilities. At Vijilan, we're
                  constantly innovating our detection algorithms and response procedures to stay
                  ahead of emerging threats.
                </span>
                <span className='my-3 block'>
                  {' '}
                  The rise of malware-free attacks represents a fundamental shift in the threat
                  landscape, but with the right approach and tools, organizations can successfully
                  defend against these sophisticated threats. The key is moving beyond traditional
                  signature-based detection to embrace behavioral analysis, expert human oversight,
                  and active remediation capabilities.
                </span>
                <span>
                  Don't wait until your organization becomes the next victim. Take action now to
                  strengthen your defenses against the threats of tomorrow.{' '}
                </span>
              </p>
            </div>

            <div className='custom-mask-image sm:col-span-3 md:col-span-1'>
              <img src={mask} alt='' className='h-full w-full' />
            </div>
          </div>
        </div>

        {/* end part */}
        <div className='container mx-auto px-2 sm:px-4 md:px-6 lg:px-8 xl:px-6'>
          {/* subscribe  */}
          <div
            className='my-8 flex w-full items-center justify-center rounded-[24px] lg:min-h-[304px]'
            style={{ background: 'linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)' }}
          >
            <div className='mx-auto w-full space-y-6 px-2 py-10 md:w-3/4 md:px-6'>
              <h1 className='my-2 text-center text-lg font-bold md:text-[40px]'>
                Get Security Insights Delivered to Your Inbox.
              </h1>
              <p className='text-center text-sm font-medium md:text-[16px]'>
                Subscribe to our newsletter for the latest threat analysis, partner strategies, and{' '}
                <br /> product updates from the experts at Vijilan.
              </p>

              <div className='relative mx-auto w-full max-w-2xl'>
                <input
                  className='w-full rounded-[10px] py-[24px] pr-[130px] pl-[14px] text-[#0000007A]'
                  placeholder='Enter Your Email'
                  type='search'
                />

                <button
                  className='absolute top-1/2 right-3 -translate-y-1/2 rounded-[10px] px-[20px] py-[12px] text-[16px] font-bold whitespace-nowrap text-white transition-opacity hover:opacity-90'
                  style={{
                    background: 'linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)',
                  }}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* users post */}

          <div
            className='mt-10 flex w-full items-center justify-center rounded-[24px] lg:min-h-[304px]'
            style={{ background: 'linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)' }}
          >
            <div className='flex flex-col gap-4 px-6 py-10 md:flex-row md:px-10 lg:px-0'>
              {/* Avatar */}
              <div
                className='flex h-[60px] w-[60px] items-center justify-center rounded-full'
                style={{
                  background: `linear-gradient(0deg, rgba(196,196,196,0.3), rgba(196,196,196,0.3)),
                           linear-gradient(180deg, #F89B29 0%, #00AEEF 100%)`,
                }}
              >
                KN
              </div>

              {/* Text Content */}
              <div className='flex-1 space-y-1'>
                <h1 className='text-[13px] font-medium text-[#F1EAFA]'>Kevin Nejad</h1>
                <p className='text-[13px] font-medium' style={{ color: '#00AEEF' }}>
                  Founder & CEO, Vijilan
                </p>
                <p className='text-[16px] font-medium text-white'>
                  With over 20 years of experience in cybersecurity and data management, Kevin
                  founded Vijilan to address the <br /> growing gap between complex threats and the
                  resources available to combat them. He leads the company with a <br /> passion for
                  innovation and a channel-first philosophy, regularly sharing insights on emerging
                  threats and defense <br /> strategies.
                </p>
              </div>
            </div>
          </div>

          {/* Join Discussion  */}
          <div
            className='my-8 mt-10 flex w-full items-center justify-center rounded-[24px] py-3 lg:min-h-[304px]'
            style={{ background: 'linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)' }}
          >
            <div className='mx-auto w-3/4 space-y-5 py-10 text-center'>
              <h1 className='text-2xl font-bold md:text-[40px]'>Join the Discussion</h1>
              <p className='text-center text-[16px] font-medium'>
                Share your thoughts and experiences with malware-free attacks in the comments
                <br /> below.
              </p>
              <Link to={'/contact'} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <p className='mx-auto w-fit rounded-[8px] border border-[#00AEEF] px-[24px] py-[12px] text-[#00AEEF]'>
                  Load Comments (Disqus Integration)
                </p>
              </Link>
            </div>
          </div>

          <div />
        </div>
      </section>
    </>
  );
};

export default Blog;
