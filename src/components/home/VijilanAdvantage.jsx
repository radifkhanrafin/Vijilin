import React from 'react';
import setting from '../../Assets/setting.png';
import target from '../../Assets/target.png';
import light from '../../Assets/light.png';
import object from '../../Assets/object.png';
import question from '../../Assets/question.png';
import imageTwo from '../../images/ad-bg.png';

const VijilanAdvantage = () => {
  return (
    <section className='py-[120px] relative z-[9]'>
        <img src={imageTwo} alt="Image" className='ad-bg' />
      <div className='container relative z-[1] mx-auto px-[16px] md:px-6'>
        <div className='mb-12 text-center'>
          <h2 className='mb-4 text-[30px] lg:text-[40px] font-bold text-white'>
            <span className='!text-[#00AEEF]'> The Vijilan Advantage :</span><br />
            Secure. Compliant. Partner-Focused.
          </h2>
        </div>
        <div className='grid gap-8 md:grid-cols-2 xl:grid-cols-3'>
          {/* 1st */}
          <div className='relative flex flex-col items-center justify-center rounded-[16px] bg-[#00AEEF3D] px-[21px] py-[32px] xl:h-[390px]'>
            <div
              className='absolute inset-0 z-0 rounded-[16px] p-[2px]'
              style={{
                background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
                           linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
              }}
            />
            <div className='mb-4 flex h-[102px] w-[110px] items-center justify-center rounded-lg'>
              <img src={target} alt='' />
            </div>
            <h3 className='mb-3 text-[24px] font-medium text-white'>24/7 US-Based SOC</h3>
            <p className='text-center text-[18px] text-white'>
              Expert eyes on your security, around <br /> the clock. Our certified analysts <br />{' '}
              provide continuous monitoring and <br /> rapid incident response from our SOC 2 <br />{' '}
              Type 2 certified Security Operations <br /> Center.
            </p>
          </div>

          <div className='relative flex flex-col items-center justify-center rounded-[16px] bg-[#00AEEF3D] px-[21px] py-[32px] xl:h-[335px]'>
            <div
              className='absolute inset-0 z-0 rounded-[16px] p-[2px]'
              style={{
                background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
                           linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
              }}
            />
            <div className='mb-4 flex h-[110px] w-[90px] items-center justify-center rounded-lg'>
              <img src={light} alt='' />
            </div>
            <h3 className='mb-3 text-[24px] font-bold text-white'>AI-Powered Intelligence</h3>
            <p className='text-center text-[18px] text-white'>
              Advanced analytics and AI to detect <br /> known and unknown threats faster, <br />{' '}
              reducing false positives and enabling <br /> proactive defense.
            </p>
          </div>

          <div className='relative flex flex-col items-center justify-center rounded-[16px] bg-[#00AEEF3D] px-[21px] py-[32px] xl:h-[454px]'>
            <div
              className='absolute inset-0 z-0 rounded-[16px] p-[2px]'
              style={{
                background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
                           linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
              }}
            />
            <div className='mb-4 flex h-[110px] w-[130px] items-center justify-center rounded-lg'>
              <img src={setting} alt='' />
            </div>
            <h3 className='mb-3 text-center text-[23px] font-bold text-white'>
              Powered by Industry Leaders <br /> & Broad Integrations
            </h3>
            <p className='text-center text-[18px] text-white'>
              Leveraging best-in-class technology <br /> from CrowdStrike, Fortinet, Corelight,{' '}
              <br /> and Cribl, and seamlessly integrating <br /> with your existing ecosystem
              including <br /> Palo Alto, Cisco, Microsoft 365, AWS, <br />
              Azure, SentinelOne, Okta, and many <br /> more.
            </p>
          </div>

          <div className='relative flex flex-col items-center justify-center rounded-[16px] bg-[#00AEEF3D] px-[21px] py-[32px] xl:-mt-[63px] xl:h-[335px]'>
            <div
              className='absolute inset-0 z-0 rounded-[16px] p-[2px]'
              style={{
                background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
                           linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
              }}
            />
            <div className='mb-4 flex h-[110px] w-[156px] items-center justify-center rounded-lg'>
              <img src={question} alt='' />
            </div>
            <h3 className='mb-3 text-[24px] font-bold text-white'>Proactive Remediation</h3>
            <p className='text-center text-[18px] text-white'>
              We don't just alert; our experts act to <br /> contain and neutralize threats, <br />{' '}
              minimizing impact and ensuring <br /> business continuity.
            </p>
          </div>
          {/* 5th */}
          <div className='relative flex flex-col items-center justify-center rounded-[16px] bg-[#00AEEF3D] px-[21px] py-[32px] xl:-mt-[118px] xl:h-[390px]'>
            <div
              className='absolute inset-0 z-0 rounded-[16px] p-[2px]'
              style={{
                background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
                           linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
              }}
            />
            <div className='mb-4 flex h-[110px] w-[110px] items-center justify-center rounded-lg'>
              <img src={target} alt='' />
            </div>
            <h3 className='mb-3 text-[24px] font-bold text-white'>Partner-Centric Model</h3>
            <p className='text-center text-[18px] text-white'>
              Dedicated to empowering MSP, VAR, <br /> and MSSP success with comprehensive <br />{' '}
              enablement (including our unique <br /> Partner Sales & Marketing Portal), <br />{' '}
              flexible programs, and a focus on your <br /> growth.
            </p>
          </div>

          <div className='relative flex flex-col items-center justify-center rounded-[16px] bg-[#00AEEF3D] px-[21px] py-[32px] xl:h-[344px]'>
            <div
              className='absolute inset-0 z-0 rounded-[16px] p-[2px]'
              style={{
                background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
                           linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
              }}
            />
            <div className='mb-4 flex h-[110px] w-[197px] items-center justify-center rounded-lg'>
              <img src={object} alt='' />
            </div>
            <h3 className='mb-3 text-[24px] font-bold text-white'>SOC 2 Type 2 Certified</h3>
            <p className='text-center text-[14px] text-white'>
              Our commitment to the highest <br /> security and operational standards is <br />{' '}
              validated by our SOC 2 Type 2 <br /> certification by A-LIGN, giving you <br />{' '}
              independently verified trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VijilanAdvantage;
