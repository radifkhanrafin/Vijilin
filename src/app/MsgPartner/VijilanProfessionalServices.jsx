import React, {useEffect} from 'react';
import { Settings, TrendingUp, Shield, ExternalLink } from 'lucide-react';
import Heading_Btn from '@components/Heading_Btn';
import { Link } from 'react-router-dom';
import bannerBg from '../../images/ban-bg.png';
import bannerBgTwo from '../../images/bg-grd.png';
import bannerBgThree from '../../images/cr-bg.png';
import contentThree from '../../images/cc-bg-three.png';
import contentFour from '../../images/bg-grd-f.png';
import contentFive from '../../images/globe.png';

const ButtonWithGeradiant = ({ btn }) => {
  return (
    <button
      className='inline-flex items-center space-x-3 rounded-lg bg-transparent p-[18px] text-lg font-medium text-white'
      style={{
        border: '1px solid',
        borderImageSource: 'linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)',
        borderImageSlice: 1,
        borderRadius: '8px',
      }}
    >
      <span className='uppercase'>{btn}</span>
      <div className='ml-[6px] flex h-6 w-6 items-center justify-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <circle cx='12' cy='12' r='10'></circle>
          <polyline points='12 16 16 12 12 8'></polyline>
          <line x1='8' y1='12' x2='16' y2='12'></line>
        </svg>
      </div>
    </button>
  );
};
// Custom Button Component
function Button({ className = '', variant = 'default', size = 'default', children, ...props }) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';

  const sizeStyles = {
    default: 'h-10 px-4 py-2 text-sm',
    sm: 'h-9 px-3 text-sm',
    lg: 'h-11 px-8 text-base',
  };

  const variantStyles = {
    default: 'bg-orange-500 text-white hover:bg-orange-600 focus-visible:ring-orange-500',
    outline:
      'border border-teal-400 bg-transparent !text-blue-400 hover:bg-teal-400 hover:text-white focus-visible:ring-teal-400',
  };

  const combinedClassName =
    `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`.trim();

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}

// Custom Card Components
function Card({ className = '', children, ...props }) {
  const cardClassName =
    `rounded-lg border border-[#133A55]  bg-[#133A55]  backdrop-blur-sm shadow-lg ${className}`.trim();

  return (
    <div className={cardClassName} {...props}>
      {children}
    </div>
  );
}

function CardContent({ className = '', children, ...props }) {
  const contentClassName = `p-6 ${className}`.trim();

  return (
    <div className={contentClassName} {...props}>
      {children}
    </div>
  );
}

const VijilanProfessionalServices = () => {

    useEffect(() => {
      document.body.classList.add('home-body');
  
      return () => {
        document.body.classList.remove('home-body');
      };
    }, []);

  return (
    <>
      <section className='hr-section relative z-10 w-full overflow-x-clip pt-[130px] pb-[50px] text-center md:pt-[150px]'>
        <img src={bannerBg} alt='Image' className='ban-bg-two' />
        <img src={bannerBgTwo} alt='Image' className='bg-grd-two' />
        <div className='container mx-auto px-[16px] md:px-6'>
          <Heading_Btn
            h1='Expert Implementation & Management for Your Security Stack'
            desc='Maximize your technology investment. Our certified experts deliver seamless implementation, optimization, and
          ongoing management for CrowdStrike, CriblI, and CoreLight platforms, turning powerful tools into strategic management for CrowdStrike, CriblI, and CoreLight.'
            btn1='WATCH THE SERVICE OVERVIEW'
            url={'/videos-library'}
          />
        </div>
      </section>
      <section className=''>
        <div className='container mx-auto px-[16px] md:px-6'>
          <h2 className='mb-12 text-center text-2xl font-bold text-white md:text-[40px]'>
            End-to-End Expert Services
          </h2>
          <div className='mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3'>
            <Card>
              <CardContent className='!py-[60px] text-center'>
                <Settings className='mx-auto mb-4 h-[60px] w-[60px] !text-blue-400' />
                <h3 className='mb-[16px] text-xl font-bold text-white'>
                  Implementation & Installation
                </h3>
                <p className='text-[16px] text-white lg:mx-auto lg:max-w-[230px]'>
                  Expert deployment, configuration, and integration of solutions to get you up and
                  running quickly and correctly
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className='!py-[60px] text-center'>
                <TrendingUp className='mx-auto mb-4 h-[60px] w-[60px] !text-blue-400' />
                <h3 className='mb-[16px] text-xl font-bold text-white'>
                  Optimization & Health Checks
                </h3>
                <p className='text-[16px] text-white lg:mx-auto lg:max-w-[230px]'>
                  Ensuring your security technologies perform optimally, are tuned to your
                  environment, and are aligned with your business goals.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className='!py-[60px] text-center'>
                <Shield className='mx-auto mb-4 h-[60px] w-[60px] !text-blue-400' />
                <h3 className='mb-[16px] text-xl font-bold text-white'>Ongoing Management</h3>
                <p className='text-[16px] text-white lg:mx-auto lg:max-w-[230px]'>
                  Day-to-day operations, proactive updates, and expert maintenance to ensure your
                  security stack remains effective and resilient.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className='relative z-[1] overflow-x-clip pt-[120px]'>
        <img src={bannerBgThree} alt='Image' className='cr-bg' />
        <img src={contentThree} alt='Image' className='cc-bg-three-t' />
        <div className='container mx-auto px-[16px] md:px-6'>
          <h2 className='mb-12 text-center text-2xl font-bold text-white md:text-4xl'>
            Deep Expertise in Leading Technologies
          </h2>

          <div className='mx-auto grid max-w-6xl items-start gap-8 md:grid-cols-2'>
            {/* CriblI Professional Services */}
            <Card className='!border-0 bg-[#082235] px-[16px] py-[16px]'>
              <CardContent>
                <h3 className='mb-4 text-xl font-bold !text-blue-400'>
                  • CriblI Professional Services
                </h3>
                <p className='mb-[20px] font-semibold !text-blue-400'>
                  Unlock the Full Power of Your CriblI and CriblI
                </p>
                <p className='mb-[40px] text-[16px] text-white md:text-[20px]'>
                  We implement, manage, and optimize CriblI Stream, Edge, Lake, and Search to
                  streamline your data flows, reduce costs, and enhance observability.
                </p>
                <ul className='mb-[40px] space-y-3 text-[16px] text-gray-300 md:text-[20px]'>
                  <li>• SIEM Migration Services</li>
                  <li>• Storage Cost Reduction</li>
                  <li>• Agent Aggregation with CriblI Edge</li>
                  <li>• Kubernetes Instrumentation</li>
                  <li>• Kubernetes Instrumentation</li>
                </ul>
                <Link
                  to={'/contact'}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  <ButtonWithGeradiant btn='REQUEST A CRIBL CONSULTATION' />
                </Link>
              </CardContent>
            </Card>

            {/* CrowdStrike Falcon Professional Services */}
            <Card className='!border-0 bg-[#082235] px-[16px] py-[16px]'>
              <CardContent>
                <h3 className='mb-4 text-xl font-bold !text-blue-400'>
                  • CrowdStrike Falcon Professional Services
                </h3>
                <p className='mb-[20px] font-semibold !text-blue-400'>
                  Maximize Your CrowdStrike Falcon Investment
                </p>
                <p className='mb-[40px] text-[16px] text-white md:text-[20px]'>
                  Vijilan provides expert implementation and ongoing management for CrowdStrike
                  Falcon modules, from Next-Gen AV to Identity Protection and Data Security.
                </p>
                <ul className='mb-[40px] space-y-3 text-[16px] text-gray-300 md:text-[20px]'>
                  <li>• Falcon Endpoint Protection Implementation</li>
                  <li>• Falcon Identity Protection Implementation</li>
                  <li>• Falcon Cloud Security Deployment</li>
                  <li>• Falcon LogScale Implementation & Management</li>
                  <li>• Platform Health Checks & Optimization</li>
                </ul>
                <Link
                  to={'/contact'}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  <ButtonWithGeradiant btn='OPTIMIZE YOUR CROWDSTRIKE DEPLOYMENT' />
                </Link>
              </CardContent>
            </Card>

            {/* CriblI Professional Services (Second) */}
            <Card className='!border-0 bg-[#082235] px-[16px] py-[16px]'>
              <CardContent>
                <h3 className='mb-4 text-xl font-bold !text-blue-400'>
                  • CriblI Professional Services
                </h3>
                <p className='mb-[20px] font-semibold !text-blue-400'>
                  Unlock the Full Power of Your CriblI and CriblI
                </p>
                <p className='mb-[40px] text-[16px] text-white md:text-[20px]'>
                  We implement, manage, and optimize CriblI Stream, Edge, Lake, and Search to
                  streamline your data flows, reduce costs, and enhance observability.
                </p>
                <ul className='mb-[40px] space-y-3 text-[16px] text-gray-300 md:text-[20px]'>
                  <li>• NDR Sensor Deployment</li>
                  <li>• Network Traffic Analysis</li>
                  <li>• Threat Hunting Workshops</li>
                </ul>
                <Link
                  to={'/contact'}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  <ButtonWithGeradiant btn='DISCUSS YOUR NDR PROJECT' />
                </Link>
              </CardContent>
            </Card>

            {/* CoreLight Professional Services */}
            <Card className='!border-0 bg-[#082235] px-[16px] py-[16px]'>
              <CardContent>
                <h3 className='mb-4 text-xl font-bold !text-blue-400'>
                  • CoreLight Professional Services
                </h3>
                <p className='mb-[20px] font-semibold !text-blue-400'>
                  Gain Unparalleled Visibility into Your Network Traffic
                </p>
                <p className='mb-[40px] text-[16px] text-white md:text-[20px]'>
                  Our certified experts implement, manage, and optimize CoreLight's industry-leading
                  Network Detection and Response (NDR) platform. We transform raw network traffic
                  into comprehensive evidence and actionable insights to stop advanced threats that
                  are invisible to endpoint-only solutions.
                </p>
                <ul className='mb-[40px] space-y-3 text-[16px] text-gray-300 md:text-[20px]'>
                  <li>• NDR Sensor Deployment & Configuration</li>
                  <li>• Encrypted Traffic Analysis</li>
                  <li>• Network-based Threat Hunting</li>
                  <li>• Incident Response with Network Forensics</li>
                  <li>• Integration with SIEM & XDR Platforms</li>
                </ul>
                <Link
                  to={'/contact'}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  <ButtonWithGeradiant btn='REQUEST A CORELIGHT CONSULTATION' />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className='relative z-[1] overflow-x-clip pt-[120px]'>
        <img src={contentFour} alt='Image' className='cc-bg-four' />

        <div className='container mx-auto px-[16px] md:px-6'>
          <div
            className='rounded-[24px] px-[12px] py-[40px] lg:px-[80px]'
            style={{
              background: `linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)`,
            }}
          >
            <Card className='relative !rounded-[26px]'>
              <div
                className='absolute inset-0 z-0 rounded-[26px] p-[1px]'
                style={{
                  background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
                 linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }}
              />
              <CardContent className='!p-[40px] text-center'>
                <h2 className='mb-8 text-center text-2xl font-bold text-white'>
                  Proven Results in Complex Environments
                </h2>

                <div className='mb-[50px]'>
                  <h3 className='mb-4 text-xl font-bold !text-white'>
                    Success Story: How a Major Retailer Reduced SIEM Costs by 40%
                  </h3>
                  <p className='mb-6 text-[18px] text-white'>
                    Using Vijilan's CriblI Implementation Service, a Fortune 500 retailer was able
                    to intelligently route and filter their security data before ingestion. This not
                    only cut their Splunk licensing costs by 40% but also improved their threat
                    detection capabilities by reducing data noise.
                  </p>
                </div>

                <div className='mb-[60px] flex flex-wrap justify-center gap-8'>
                  <div className='text-center'>
                    <div className='text-4xl font-bold text-white'>
                      40%
                      <p className='mt-[4px] text-[12px] !text-[rgba(255,255,255,0.54)]'>
                        Cost Reduction
                      </p>
                    </div>
                  </div>
                  <div className='text-center'>
                    <div className='mb-2 text-4xl font-bold text-white'>
                      60%{' '}
                      <p className='mt-[4px] text-[12px] !text-[rgba(255,255,255,0.54)]'>
                        Faster Threat Detection
                      </p>
                    </div>
                  </div>
                  <div className='text-center'>
                    <div className='mb-2 text-4xl font-bold text-white'>
                      90%{' '}
                      <p className='mt-[4px] text-[12px] !text-[rgba(255,255,255,0.54)]'>
                        Noise Reduction
                      </p>
                    </div>
                  </div>
                </div>

                <div className='text-center'>
                  <Link
                    to={'/case-studies'}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    <ButtonWithGeradiant btn='READ THE FULL CASE STUDY' />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className='relative z-[1] overflow-x-clip pt-[60px] mb-[-60px]'>
        <img src={contentFive} alt='Image' className='globs' />
        
        <div className='container mx-auto px-[16px] md:px-6 '>
          <Heading_Btn
            h1="Let's Build a More Powerful & Efficient Security Architecture."
            desc=" Whether you're migrating your SIEM, deploying new sensors, or looking to optimize your data strategy, our
          experts are here to help. Schedule a free, no-obligation architectural review today."
            btn1='SCHEDULE ARCHITECTURE REVIEW'
            url={'/contact'}
          />
        </div>
      </section>
    </>
  );
};

export default VijilanProfessionalServices;
