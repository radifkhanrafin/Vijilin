import { ClientServices, Empower, PartnershipSteps } from '@app/Constant/Constant';

import CardContent from '@components/CardContent';
import Heading_Btn from '@components/Heading_Btn';
import React, {useEffect} from 'react';
import v1 from '../../Assets/v1.png';
import v2 from '../../Assets/v2.png';
import v3 from '../../Assets/v3.png';
import v4 from '../../Assets/v4.png';
import v5 from '../../Assets/v5.png';
import v6 from '../../Assets/v6.png';
import { Link } from 'react-router-dom';
import bannerBg from '../../images/ban-bg.png';
import bannerBgTwo from '../../images/bg-grd.png';
import bannerBgThree from '../../images/cgrc.png';
import bannerBgFour from '../../images/dgrc-t.png';

const Vars_consultants_page = () => {

    useEffect(() => {
      document.body.classList.add('home-body');
  
      return () => {
        document.body.classList.remove('home-body');
      };
    }, []);

  return (
    <>
      <section className='hr-section relative z-10 w-full overflow-x-clip pt-[150px] pb-[60px] text-center md:pt-[150px]'>
        <img src={bannerBg} alt='Image' className='ban-bg-two' />
        <img src={bannerBgTwo} alt='Image' className='bg-grd-two' />
        <div className='container mx-auto px-[16px] md:px-6'>
          <Heading_Btn
            h1={'Empower Your Clients. Elevate Your\nPractice.'}
            desc={
              'Partner with Vijilan to recommend and deliver elite, fully managed cybersecurity\nsolutions. We provide the technology, expertise, and support you need to become an\nindispensable security advisor for your clients.'
            }
            btn1='Join our partner network'
            btn2='download consultant guide'
            url={'/become-a-partner'}
          />
        </div>
      </section>
      <section className='relative z-[1] overflow-x-clip'>
        <img src={bannerBgThree} alt='Image' className='cgrc' />
        <div className='container mx-auto px-[16px] md:px-6'>
          <div className=''>
            <h1 className='mb-[60px] text-center text-2xl font-bold text-white md:text-[40px]'>
              Recommend with Confidence, Deliver with Ease
            </h1>
            <div className=' '>
              <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
                <div
                  className={`bg-filt relative flex flex-col items-center justify-center rounded-[16px] bg-[#00AEEF3D] !px-[24px] py-[60px] lg:h-[389px]`}
                >
                  <div
                    className='absolute inset-0 z-0 rounded-[16px] p-[2px] text-center'
                    style={{
                      background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                      WebkitMask:
                        'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                    }}
                  />
                  <div className='my-4 flex items-center justify-center rounded-lg bg-cyan-400'>
                    <img src={v1} alt='' className='h-[72px] w-[72px]' />
                  </div>
                  <h3 className='mb-3 text-center text-[24px] font-bold text-white'>
                    Recommend the Best
                  </h3>
                  <p className='text-center text-white'>
                    Confidently recommend our solutions, built on elite technology from CrowdStrike,
                    Cribl, and Corelight, and validated by our SOC 2 Type 2 certification.
                  </p>
                </div>

                <div
                  className={`bg-filt relative flex flex-col items-center justify-center rounded-[16px] bg-[#00AEEF3D] !px-[24px] py-[60px] lg:h-[360px]`}
                >
                  <div
                    className='absolute inset-0 z-0 rounded-[16px] p-[2px] text-center'
                    style={{
                      background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                      WebkitMask:
                        'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                    }}
                  />

                  <div className='my-4 flex items-center justify-center rounded-lg bg-cyan-400'>
                    <img src={v2} alt='' className='h-[72px] w-[72px]' />
                  </div>
                  <h3 className='mb-3 text-center text-[24px] font-bold text-white'>
                    Focus on the Sale, Not the SOC
                  </h3>
                  <p className='text-center text-white'>
                    For VARs, our flagship ThreatRemediate™ service is a 'hands-off' solution. We
                    handle the 24/7 monitoring and remediation, you maintain the client
                    relationship.
                  </p>
                </div>

                <div
                  className={`bg-filt relative flex flex-col items-center justify-center rounded-[16px] bg-[#00AEEF3D] !px-[24px] py-[60px] lg:h-[434px]`}
                >
                  <div
                    className='absolute inset-0 z-0 rounded-[16px] p-[2px] text-center'
                    style={{
                      background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                      WebkitMask:
                        'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                    }}
                  />
                  <div className='my-4 flex items-center justify-center rounded-lg bg-cyan-400'>
                    <img src={v3} alt='' className='h-[72px] w-[72px]' />
                  </div>
                  <h3 className='mb-3 text-center text-[24px] font-bold text-white'>
                    Enhance Your Strategic Role
                  </h3>
                  <p className='text-center text-white'>
                    For vCISOs and Consultants, our solutions provide the strategic oversight and
                    operational excellence needed to elevate your clients' security posture and
                    simplify compliance.
                  </p>
                </div>

                <div
                  className={`bg-filt relative flex flex-col items-center justify-center rounded-[16px] bg-[#00AEEF3D] !px-[24px] py-[60px] lg:-mt-[43px] lg:h-[335px]`}
                >
                  <div
                    className='absolute inset-0 z-0 rounded-[16px] p-[2px] text-center'
                    style={{
                      background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                      WebkitMask:
                        'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                    }}
                  />
                  <div className='my-4 flex items-center justify-center rounded-lg bg-cyan-400'>
                    <img src={v4} alt='' className='h-[72px] w-[72px]' />
                  </div>
                  <h3 className='mb-3 text-center text-[24px] font-bold text-white'>
                    A Partnership That Pays
                  </h3>
                  <p className='text-center text-white'>
                    Our channel-first model is designed to be a win-win, rewarding you for bringing
                    industry-leading security and data management solutions to your clients.
                  </p>
                </div>

                <div
                  className={`bg-filt relative flex flex-col items-center justify-center rounded-[16px] bg-[#00AEEF3D] !px-[24px] py-[60px] lg:-mt-[70px] lg:h-[405px]`}
                >
                  <div
                    className='absolute inset-0 z-0 rounded-[16px] p-[2px] text-center'
                    style={{
                      background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                      WebkitMask:
                        'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                    }}
                  />
                  <div className='my-4 flex items-center justify-center rounded-lg bg-cyan-400'>
                    <img src={v5} alt='' className='h-[72px] w-[72px]' />
                  </div>
                  <h3 className='mb-3 text-center text-[24px] font-bold text-white'>
                    Stay Ahead of Threats
                  </h3>
                  <p className='text-center text-white'>
                    {' '}
                    Strengthen your advisory reputation with real-time insights and proactive threat
                    intelligence from Vijilan's dedicated research team. We empower you to stay
                    informed about emerging threats, guide your clients confidently, and proactively
                    manage their cybersecurity posture.
                  </p>
                </div>

                <div
                  className={`bg-filt relative flex flex-col items-center justify-center rounded-[16px] bg-[#00AEEF3D] !px-[24px] py-[60px] lg:h-[419px]`}
                >
                  <div
                    className='absolute inset-0 z-0 rounded-[16px] p-[2px] text-center'
                    style={{
                      background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                      WebkitMask:
                        'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                    }}
                  />
                  <div className='my-4 flex items-center justify-center rounded-lg bg-cyan-400'>
                    <img src={v6} alt='' className='h-[72px] w-[72px]' />
                  </div>
                  <h3 className='mb-3 text-center text-[24px] font-bold text-white'>
                    Confirm & Close
                  </h3>
                  <p className='text-center text-white'>
                    Vijilan handles the heavy lifting—from streamlined onboarding, automated
                    reporting, and ongoing operational support, to dedicated service delivery. With
                    our expert team managing security operations, you can effortlessly deliver
                    high-value outcomes without complexity, freeing your team to focus fully on
                    strategic advisory and client growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='relative z-[1] overflow-x-clip pt-[120px]'>
        <img src={bannerBgFour} alt='Image' className='dgrc-t' />

        <div className='container mx-auto px-[16px] md:px-6'>
          <div className='dgr'>
            <h1 className='mb-[50px] text-center text-2xl font-bold text-white md:text-[40px]'>
              A Simple Path to Partnership
            </h1>
            <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
              {PartnershipSteps.map((card, index) => (
                <CardContent
                  icon={card.icon}
                  title={card.stepTitle}
                  description={card.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="relative pt-[120px]">
        <div className="container mx-auto px-[16px] md:px-6">
                        <div className=''>
                            <h1 className='text-2xl md:text-[40px] font-bold  text-white text-center mb-[60px]'>
                                Key Offerings for Your Clientele
                            </h1>
                            <div className='grid sm:grid-cols-1 md:grid-cols-2  gap-8'>
                                {ClientServices.map(((card, index) =>
                                    <div className=' bg-[#082235] relative z-[9] px-5 md:!px-[50px] py-12 rounded-lg   '>
            
                                        <h1 className="text-[24px] font-medium " style={{
                                            backgroundImage: "linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)",
                                            WebkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent",
                                        }}>
                                            {card.title}
                                        </h1>
                                        <p className='text-[20px]  cursor-pointer my-[20px]' style={{ color: "#00AEEF" }}>{card.link}</p>
                                        <p className='text-white text-[20px]'>{card.description}</p>
            
            
                                    </div>
                                ))}
                            </div>
                        </div>
        </div>
      </section>
      <section className="relative z-[1] overflow-x-clip pt-[120px]">
        <div className="container mx-auto px-[16px] md:px-6">
                        <div className=''>
                            <h1 className='text-2xl md:text-[40px] w-full mx-auto  font-bold  text-white text-center mb-12'>
                                Ready To Empower Your Team?
                            </h1>
                            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8'>
                                {Empower.map((card, index) => (
                                    <div key={index} className="bg-[#00AEEF3D] !py-[40px] !px-[40px] rounded-2xl text-white text-center flex flex-col min-h-[320px]">
                                        <p className="text-[18px] text-white mb-4">{card.des}</p>
                                        <h2 className="text-[20px] md:text-[24px] font-medium whitespace-pre-line mb-4">
                                            {card.title}
                                        </h2>
                                        <button className="w-auto grdBtn mt-16 text-white  px-[24px] py-[16px] rounded-[8px] flex justify-center items-center mx-auto" style={{
                                            background: "linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)"
                                        }}>{card.button}</button>
                                    </div>
                                ))}
                            </div>
                        </div>
        </div>
      </section>
      <section className='pt-[120px]'>
        <div className="container mx-auto px-[16px] md:px-6">
                        <div>
                            <div className='space-y-5'>
                                <h1 className='text-[30px] md:text-[40px] font-bold text-center'>Ready to Become a Trusted Security Advisor? </h1>
                                <p className='text-[18px] text-center'>Join Vijilan's network of elite partners and start delivering superior security value to your clients.</p>
                                <div className='flex justify-center pt-5'>
                                    <Link to={"/become-a-partner"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                                        <button className=" mx-auto py-2 md:!py-[18px] uppercase p-2 md:px-[24px] mt-1 rounded-[8px] text-[18px] font-medium  text-white transition-opacity hover:opacity-90" style={{ background: " linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)" }}>
                                            apply to our partner network
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
        </div>
      </section>
    </>
  );
};

export default Vars_consultants_page;
