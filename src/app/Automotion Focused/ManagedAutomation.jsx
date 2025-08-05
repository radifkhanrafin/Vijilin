import React, { act } from 'react';
import Heading_Btn from '@components/Heading_Btn';
import InputSection from '@components/InputSection';
import phishing from '../../Assets/phising.svg';
import mfa from '../../Assets/mfa.svg';
import movement from '../../Assets/movement.svg';
import privilenge from '../../Assets/privilenge.svg';
import takeover from '../../Assets/takeover.svg';
import insiderThreat from '../../Assets/insiderThreat.svg';
import azure from '../../Assets/azure.png';
import okta from '../../Assets/okta.png';
import ping from '../../Assets/ping.png';
import active from '../../Assets/active.png';
import key from '../../Assets/key.png';
import google from '../../Assets/google.png';
import GradientButton from '@components/GradientButton';
import OutlineGradientButton from '@components/OutlineGradientButton';
import SuccessCard from '@components/SuccessCard';
import CardBorder from '@components/CardBorder';
import { Link } from 'react-router-dom';

const ManagedAutomation = ({}) => {
  const businessFields = [
    {
      label: 'Primary Identity Provider',
      placeholder: 'Select Your provider',
      options: [
        { value: '1', label: 'Type 1' },
        { value: '2', label: 'Type 2' },
      ],
    },
    {
      label: 'Total User Count',
      placeholder: '500',
      options: [
        { value: '1', label: '1M+' },
        { value: '2', label: '500K-1M' },
      ],
    },
    {
      label: 'MFA Implementation',
      placeholder: 'Select status',
      options: [
        { value: '1', label: '1M+' },
        { value: '2', label: '500K-1M' },
      ],
    },
  ];

  const businessFields2 = [
    {
      label: 'Privileged Accounts',
      placeholder: 'Select Your provider',
      options: [
        { value: '1', label: 'Type 1' },
        { value: '2', label: 'Type 2' },
      ],
    },
    {
      label: 'Connected Cloud Apps',
      placeholder: 'Select Range',
      options: [
        { value: '1', label: '1M+' },
        { value: '2', label: '500K-1M' },
      ],
    },
    {
      label: 'Previous Identity Incidents',
      placeholder: 'Select status',
      options: [
        { value: '1', label: '1M+' },
        { value: '2', label: '500K-1M' },
      ],
    },
  ];
  const categories = [
    { title: 'Credential Phishing', desc: 'Attacker steals credentials through sophisticated phishing campaign', icon: phishing },
    { title: 'Lateral Movement', desc: 'Compromised account used to escalate privileges and move laterally', icon: movement },
    { title: 'Insider Threat', desc: 'Malicious insider abuses legitimate access to sensitive data', icon: insiderThreat },
    { title: 'External Account Takeover', desc: 'Stolen credentials from external breach used to access your systems', icon: takeover },
    { title: 'MFA Fatigue Attack', desc: 'Attacker bombards a user with repeated MFA prompts, hoping they approve out of frustration or habit', icon: mfa },
    { title: 'Privilege Creep Exploitation', desc: 'Dormant or excessive user privileges are exploited to gain access to high-value assets unnoticed', icon: privilenge },
  ];

  const integrations = [
    {
      icon: azure,
      title: 'AZURE AD / ENTRA ID',
      description: 'FULL API INTEGRATION',
    },
    {
      icon: okta,
      title: 'Okta',
      description: 'Native connector available',
    },
    {
      icon: ping,
      title: 'PingIdentity',
      description: 'SAML/OIDC integration',
    },
    {
      icon: active,
      title: 'Active Directory',
      description: 'On-premise integration',
    },
    {
      icon: key,
      title: 'AWS IAM',
      description: 'Cloud identity monitoring',
      uppercase: true,
    },
    {
      icon: google,
      title: 'Google Workspace',
      description: 'API-based monitoring',
      uppercase: true,
    },
  ];

  return (
    <>
      <div className='mx-auto max-w-[90%]'>
        <div className='pt-[150px] pb-16'>
          <Heading_Btn
            h1='Combat the #1 Attack Vector: Identity Threats'
            desc={`Attackers don't break in—they log in. Our Managed ITDR service, powered by\ncrowdStrike Falcon Identity Protection, provides 24/7 monitoring and real-time\nresponse to stop breaches that start with compromised credentials.`}
          />
          <div className='grid-cols1 mx-auto -mt-[70px] grid max-w-[550px] gap-5 md:grid-cols-2 lg:grid-cols-3'>
            <CardBorder>
              <div className='px-6 py-10'>
                <div className='mb-2 text-[32px] font-bold text-white'>80%</div>
                <div className='text-[14px] font-medium'>of breaches involve identity</div>
              </div>
            </CardBorder>
            <CardBorder>
              <div className='px-6 py-10'>
                <div className='mb-2 text-[32px] font-bold text-white'>5mins</div>
                <div className='text-[14px] font-medium'>average containment time</div>
              </div>
            </CardBorder>
            <CardBorder>
              <div className='px-6 py-10'>
                <div className='mb-2 text-[32px] font-bold text-white'>24/7</div>
                <div className='text-[14px] font-medium'>
                  expert <br /> monitoring
                </div>
              </div>
            </CardBorder>
          </div>
          <div className='mx-auto mt-14 flex flex-wrap items-center justify-center gap-10'>
            <Link to={'/contact'} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <button
                className='flex items-center justify-center space-x-3 rounded-[8px] p-[18px] text-[16px] font-medium text-white md:px-[24px] md:py-[18px] md:text-lg'
                style={{
                  background: 'linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)',
                }}
              >
                <span className='font-semibold'>START RISK ASSESSMENT</span>
                <div className='flex h-6 w-6 items-center justify-center'>
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
            </Link>
            <Link
              to={'/threat-respond-service'}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <button className='relative inline-flex w-fit items-center rounded-[8px] bg-transparent p-[20px] text-lg font-medium text-white md:px-[18px] md:!py-[18px] lg:min-w-[292px]'>
                <div
                  className={`absolute inset-0 z-0 rounded-[8px] p-[1px]`}
                  style={{
                    background: 'linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                />
                <span className='text-sm uppercase md:text-lg'>SEE THREAT SIMULATION</span>
              </button>
            </Link>
          </div>
        </div>

        <section className='container mx-auto py-16 md:px-6'>
          <div className='mx-auto text-center text-white'>
            <h2 className='mb-3 text-2xl font-bold md:text-[40px]'>
              Interactive Identity Risk Assessment
            </h2>
            <p className='mb-12 text-center text-[18px] text-white'>
              Get an instant risk score and personalized recommendations for your identity
              infrastructure.
            </p>
            <div
              className='rounded-[24px] px-[20px] pt-[40px] pb-[80px] md:px-[32px] backdrop-blur-sm'
              style={{ background: 'linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)' }}
            >
              <h3 className='text-center text-3xl font-bold md:text-[40px]'>
                Identity Security Health Check
              </h3>
              <p className='mb-10 text-center text-[18px] text-white'>
                Answer a few questions to assess your current identity threat exposure
              </p>

              <div className='mx-auto grid max-w-5xl gap-8 lg:grid-cols-2'>
                <div className='relative space-y-3 rounded-[24px] bg-[#00AEEF3D] px-[20px] lg:px-[50px] py-[60px]'>
                  <div
                    className='absolute inset-0 z-0 h-full rounded-[24px] p-[2px]'
                    style={{
                      background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                      WebkitMask:
                        'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                    }}
                  />

                  <h2
                    className='relative z-10 mb-[25px] text-left text-[16px] font-bold text-[#00AEEF]'
                    style={{ color: '#00AEEF' }}
                  >
                    Identity Infrastructure
                  </h2>

                  {businessFields.map((field, index) => (
                    <div key={index} className='relative z-10 flex flex-col gap-1'>
                      <label className='text-left text-[14px] text-white'>{field.label}</label>
                      <select
                        className='rounded-[12px] border border-[#6246EA] bg-[#FFFFFE] p-2 text-[14px] text-[#00000080] focus:ring-0 focus:outline-none'
                        style={{ color: 'black' }}
                        defaultValue=''
                      >
                        <option value='' disabled className='text-black' style={{ color: 'black' }}>
                          {field.placeholder}
                        </option>
                        {field.options.map((opt, i) => (
                          <option
                            key={i}
                            value={opt.value}
                            className='text-black'
                            style={{ color: 'black' }}
                          >
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  ))}
                </div>
                <div className='relative space-y-3 rounded-[24px] bg-[#00AEEF3D] px-[20px] lg:px-[50px] py-[60px]'>
                  <div
                    className='absolute inset-0 z-0 h-full rounded-[24px] p-[2px]'
                    style={{
                      background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                      WebkitMask:
                        'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                    }}
                  />

                  <h2
                    className='relative z-10 mb-[25px] text-left text-[16px] font-bold text-[#00AEEF]'
                    style={{ color: '#00AEEF' }}
                  >
                    Threat Exposure
                  </h2>

                  {businessFields2.map((field, index) => (
                    <div key={index} className='relative z-10 flex flex-col gap-1'>
                      <label className='text-left text-[14px] text-white'>{field.label}</label>
                      <select
                        className='rounded-[12px] border border-[#6246EA] bg-[#FFFFFE] p-2 text-[14px] text-[#00000080] focus:ring-0 focus:outline-none'
                        style={{ color: 'black' }}
                        defaultValue=''
                      >
                        <option value='' disabled className='text-black' style={{ color: 'black' }}>
                          {field.placeholder}
                        </option>
                        {field.options.map((opt, i) => (
                          <option
                            key={i}
                            value={opt.value}
                            className='text-black'
                            style={{ color: 'black' }}
                          >
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='container mx-auto py-16 md:px-6'>
          <div className='mx-auto max-w-6xl text-center text-white'>
            <h2 className='mb-3 text-3xl font-bold md:text-[40px]'>
              See How Identity Attacks Unfold
            </h2>
            <p className='mb-12 text-[18px]'>
              Interactive simulations show how attackers exploit identity vulnerabilities in
              real-time.
            </p>

            <div className='flex max-w-7xl items-center justify-center'>
              <div
                className='w-full max-w-6xl rounded-2xl pt-[40px] pb-[80px] px-[20px] md:px-10 text-white'
                style={{ background: 'linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)' }}
              >
                {/* Title */}
                <div className='mb-12 text-center'>
                  <h2 className='mb-3 text-2xl font-bold md:text-[40px]'>
                    Identity Attack Scenarios
                  </h2>
                  <p className='text-[18px]'>Select a scenario to see how we detect and respond</p>
                </div>

                {/* Categories */}
                <div className='mb-14 grid grid-cols-1 place-items-center gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-[760px] mx-auto'>
                  {categories.map((item, index) => (
                    <div
                      key={index}
                      className='relative flex flex-col items-center justify-center space-y-1 rounded-[10px] bg-[#00AEEF3D] px-4 py-6 w-full'
                    >
                      <div
                        className='absolute inset-0 z-0 h-full rounded-[10px] p-[1px]'
                        style={{
                          background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                          WebkitMask:
                            'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                          WebkitMaskComposite: 'xor',
                          maskComposite: 'exclude',
                        }}
                      />
                      <img src={item.icon} alt='' className='h-[40px] w-[40px]' />
                      <h3 className='text-[15px] font-medium mt-[10px]'>{item.title}</h3>
                      <p className='text-[12px] mt-[6px]'>{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className='flex flex-wrap justify-center gap-5'>
                  <Link
                    to={'/request-demo'}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    <GradientButton children={'REQUEST LIVE DEMO'} icon={false} />
                  </Link>
                  <OutlineGradientButton icon={false} children={'view technology stack'} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='mx-auto max-w-7xl px-6 py-16'>
          <div className='mb-14 text-center text-white'>
            <h1 className='mb-4 text-3xl font-bold md:text-[40px]'>
              Seamless Integration with Your Stack
            </h1>
            <p className='mb-6 text-[18px]'>
              CrowdStrike Falcon Identity Protection integrates with your existing identity
              infrastructure.
            </p>
            <h3 className='text-[19px] font-bold'>Check Your Integration Compatibility</h3>
          </div>
          <div className='mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
            {integrations.map((item, index) => (
              <div
                key={index}
                className='bg-white-900 border-white-700 flex w-full max-w-sm items-center gap-4 rounded-xl border p-6 shadow-lg'
              >
                <div className='flex-shrink-0'>
                  <div className='flex h-[65px] w-[64px] items-center justify-center rounded-lg'>
                    <img
                      src={item.icon}
                      alt=''
                      className='h-full w-full rounded-full object-cover'
                    />
                  </div>
                </div>
                <div className='flex-1'>
                  <h3
                    className={`text-[16px] leading-tight font-bold text-white ${
                      item.uppercase ? 'uppercase' : ''
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`mt-1 text-[15px] font-light !text-[#BCBEC0] ${
                      item.uppercase ? 'uppercase' : ''
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <Link
            to={'/contact'}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className='mt-14 flex justify-center'
          >
            <GradientButton children={'GET CUSTOM INTEGRATION QUOTE'} icon={false} />
          </Link>
        </section>
        <section className='container mx-auto py-16 md:px-6'>
          <div className='grid grid-cols-1 gap-14 lg:grid-cols-2'>
            <SuccessCard
              showIcon
              iconText='JN'
              subheading='JEN AI'
              description={`"Ask me how Managed ITDR integrates with \n your Okta or Azure AD environment. I can \n provide technical specifications and pricing in\n real-time."`}
              buttonText='Find my success story'
              bgColor='transparent'
              url={'/case-studies'}
            />
            <SuccessCard
              heading={`Ready to Secure Your Identities?`}
              description={`Stop identity-based attacks before they \n become breaches. Our experts will design a \n custom ITDR solution for your environment.`}
              buttonText='schedule a expert consultation'
              isOutlineButton
              outlineButtonText='explore full xdr platform'
              bgColor='transparent'
              url={'/contact'}
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default ManagedAutomation;
