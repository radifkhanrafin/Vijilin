import SimpleCard from '@components/SimpleCard';
import React from 'react';
import synnex from '../../Assets/td-synx.svg';
import cdw from '../../Assets/cdw.svg';
import shi from '../../Assets/shi.svg';
import sherweb from '../../Assets/sherweb.svg';
import pax8 from '../../Assets/pax8.svg';
import gud from '../../Assets/gud.svg';
import Branding from '../../Assets/Branding.svg';
import gear from '../../Assets/gear.svg';
import electric from '../../Assets/electric.svg';
import hand from '../../Assets/hand.svg';
import CardBorder from '@components/CardBorder';
import NavyBlueBackground from '@components/NavyBlueBackground';
import Heading_Btn from '@components/Heading_Btn';
import GradientButton from '@components/GradientButton';
import { Link } from 'react-router-dom';

const DestribuationPartner = ({}) => {
  const distributors = [synnex, cdw, shi, sherweb, pax8, gud];
  const titles = ['TD SYNNEX', 'CDW', 'SHI', 'Sherweb', 'Pax8', 'GuidePoint'];
  const cardData = [
    {
      icon: Branding,
      title: 'Simplified Quoting & Ordering',
      desc: "Leverage your existing relationships and procurement processes with our distribution partners to easily quote and order Vijilan's full suite of services.",
    },
    {
      icon: gear,
      title: 'Consolidated Billing',
      desc: 'Integrate your Vijilan services into your existing billing structure with your preferred distributor, simplifying invoicing and financial management.',
    },
    {
      icon: electric,
      title: 'Trusted Supply Chain',
      desc: 'Procure with confidence through a secure and established supply chain, ensuring authenticity and seamless license provisioning for your clients.',
    },
    {
      icon: hand,
      title: 'Access to Broader Solutions',
      desc: "Combine Vijilan's expert security services with other hardware and software from our distributors' extensive catalogs to build comprehensive client solutions.",
    },
  ];

  return (
    <>
      <div className='mx-auto max-w-[90%] px-6 py-16'>
        <section className='container mx-auto bg-transparent pt-[150px] pb-16 md:px-6'>
          <div className='mb-12 text-center font-bold text-white'>
            <h1 className='mb-4 text-3xl font-bold md:text-[40px]'>
              Procure Vijilan Through Your Preferred <br /> Distributor
            </h1>
            <p className='text-lg text-white md:text-[18px]'>
              We partner with the industry's leading technology distributors to make quoting,
              purchasing, <br /> and deploying our managed security solutions seamless and efficient
              for our enterprise clients <br /> and channel partners.
            </p>
          </div>
          <div className='grid grid-cols-1 justify-items-center gap-x-10 lg:grid-cols-2 xl:grid-cols-3'>
            {distributors.map((icon, index) => (
              <div
                key={index}
                className='my-5 h-[150px] w-full rounded-lg bg-gradient-to-l from-[#B563F8] to-[#A5EDCD]'
              >
                <div className='m-[2px] h-[calc(100%-4px)] rounded-lg bg-[#413F46] p-[10px] text-left'>
                  <div className='flex h-full w-full items-center justify-center'>
                    <img src={icon} alt='icon' className='max-h-full w-auto object-contain' />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className='container mx-auto bg-transparent py-16 md:px-6'>
          <h1 className='mb-4 text-center text-3xl font-bold text-white md:text-[40px]'>
            Streamlined Procurement, Simplified Billing
          </h1>
          <div className='grid grid-cols-1 justify-items-center gap-x-14 sm:grid-cols-1 lg:grid-cols-2'>
            {cardData.map((card, index) => (
              <CardBorder key={index} height='290px' width='564px'>
                <div className='flex flex-col items-start gap-4 px-[32px] py-[40px] text-left text-white'>
                  <div className='flex h-[64px] w-[64px] items-center justify-center rounded-[8px] bg-[#00AEEF]'>
                    <img src={card.icon} alt='icon' className='h-[40px] w-[40px]' />
                  </div>
                  <div>
                    <h2 className='mb-1 text-[24px] font-medium'>{card.title}</h2>
                    <p className='text-[18px] leading-snug text-white'>{card.desc}</p>
                  </div>
                </div>
              </CardBorder>
            ))}
          </div>
        </section>

        <section className='container mx-auto bg-transparent py-16 md:px-6'>
          <div className='mb-12 text-center font-bold text-white'>
            <h1 className='mb-4 text-3xl md:text-[40px]'>Our Esteemed Distribution Partners</h1>
          </div>
          <div className='grid grid-cols-1 justify-items-center gap-x-10 lg:grid-cols-2 xl:grid-cols-3'>
            {titles.map((title, index) => (
              <div
                key={index}
                className='my-5 h-[150px] w-full rounded-lg bg-gradient-to-l from-[#B563F8] to-[#A5EDCD]'
              >
                <div className='m-[2px] h-[calc(100%-4px)] rounded-lg bg-[#413F46] p-[10px] text-left'>
                  <div className='flex h-full w-full items-center justify-center'>
                    <h1 className='text-[37px] font-bold text-white'>{title}</h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className='container mx-auto bg-transparent py-16 md:px-6'>
          <div className='mb-6 text-center font-bold text-white'>
            <h1 className='text-3xl md:text-[40px]'>Getting Started is Easy</h1>
          </div>
          <div className='grid grid-cols-1 justify-items-center gap-10 sm:grid-cols-2 lg:grid-cols-2'>
            <CardBorder width='567px' height='279px'>
              <div className='px-[10px] py-[50px] text-white md:px-[30px]'>
                <h1 className='mb-4 text-[24px] font-medium'>Contact Your Distributor</h1>
                <p className='text-left text-[18px]'>
                  Reach out to your account manager at any of our listed <br /> distribution
                  partners and ask for Vijilan's managed security <br /> services and solutions.
                </p>
              </div>
            </CardBorder>
            <CardBorder width='567px' height='279px'>
              <div className='px-[10px] py-[50px] text-white md:px-[30px]'>
                <h1 className='mb-4 text-[24px] font-medium'>Connect with Us</h1>
                <p className='text-left text-[18px]'>
                  Your distributor's representative will work directly with our <br /> channel team
                  to scope your specific needs and generate a <br /> quote through their system.
                </p>
              </div>
            </CardBorder>
          </div>
        </section>

        <section className='container mx-auto bg-transparent md:px-6'>
          <NavyBlueBackground borderCancel={true} smallPadding={true}>
            <div className='md:p-10'>
              <div className='grid grid-cols-1 gap-10 md:grid-cols-2'>
                <div className='flex flex-col items-center justify-center rounded-2xl border-[1px] border-[#00AEEF3D] px-2 py-8 md:px-5'>
                  <div
                    className='mx-auto mb-2 flex h-[45px] w-[45px] items-center justify-center rounded-full md:h-[61px] md:w-[61px]'
                    style={{
                      background: `linear-gradient(0deg, rgba(196, 196, 196, 0.5), rgba(196, 196, 196, 0.5)),linear-gradient(180deg, #F89B29 0%, #00AEEF 100%)`,
                      backgroundBlendMode: 'overlay',
                    }}
                  >
                    <h3 className='text-[20px] font-bold text-white'>JN</h3>
                  </div>
                  <h3 className='mb-6 text-[20px] font-bold text-white'>JEN AI</h3>

                  <p className='mb-12 text-center text-[16px] text-white'>
                    "Have a question about a specific distributor or <br /> how to add Vijilan to
                    your next order? I can help <br /> guide you."
                  </p>

                  <div className='rounded-[6px] border border-[#00AEEF]'>
                    <button className='rounded-[6px] border border-[#00AEEF] p-[16px] text-[13px] font-medium text-white'>
                      ASK JEN AI
                    </button>
                  </div>
                </div>
                <div className='w-full rounded-lg p-3 md:p-8'>
                  <h1 className='mb-5 text-2xl font-bold text-white md:text-[36px]'>
                    Don't See Your Distributor?
                  </h1>
                  <p className='mb-6 text-center text-[18px] leading-relaxed text-white'>
                    We're always expanding our distribution network. <br />
                    Contact our channel team to discuss adding your <br /> preferred distributor or
                    to learn more about our <br /> procurement options.
                  </p>
                  <Link
                    to={'/contact'}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    <GradientButton children={'Schedule a compliance strategy call'} />
                  </Link>
                </div>
              </div>
            </div>
          </NavyBlueBackground>
        </section>
      </div>
    </>
  );
};

export default DestribuationPartner;
