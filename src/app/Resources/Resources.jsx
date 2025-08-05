import { resourceData } from '@app/Constant/Constant';
import Blog_Subscribe_Component_Btn from '@components/Blog_Subscribe_Component_Btn';
import CardContent from '@components/CardContent';
import CardContentCustom from '@components/pages/CardContentCustom';
import SearchBtn from '@components/SearchBtn';
import React, {useEffect} from 'react';
import vector from '../../Assets/Vector.png';
import { Link } from 'react-router-dom';
import bannerBg from '../../images/crd-t.png';
import bannerBgThree from '../../images/cr-bg.png';

const tabs = ['All', 'Webinars', 'Case Studies', 'Whitepaper', 'Blog'];
const pages = ['1', '2', '3', '...', '8', '9'];

const Resources = () => {
  useEffect(() => {
    document.body.classList.add('home-body');

    return () => {
      document.body.classList.remove('home-body');
    };
  }, []);

  return (
    <>
      <section className='pt-[280px] pb-[80px] md:pt-[240px]'>
        <div className='container mx-auto px-[16px] md:px-6'>
          <div className='flex flex-col items-center justify-between gap-5 md:flex-row'>
            <div className='w-full md:w-1/2'>
              <h1 className='text-2xl font-bold md:text-[48px]'>
                Your Cybersecurity Knowledge Center
              </h1>
              <p className='mt-[20px] text-[22px] font-bold'>
                Explore our library of expert insights, strategic guides, and real-world case
                studies to navigate the evolving threat landscape and grow your security practice.
              </p>
            </div>
            <div className='mg:w-1/2 w-full'>
              <CardContent
                title='The SMB & Mid-Market Cybersecurity Survival Guide'
                description='Essential strategies for building resilient security programs that scale with your business growth.'
                grdBtn='Download The Guide Now'
                Cardsticket='SMB & Mid-Market Cybersecurity Survival Guide'
              />
            </div>
          </div>
        </div>
      </section>

      <section className='relative z-[1]'>
        <div className='container mx-auto px-[16px] md:px-6'>
          <div>
            <div className='mt-10 flex flex-col items-center justify-between md:flex-row'>
              <div className='flex w-full flex-wrap gap-3 md:w-3/5 md:gap-3'>
                {tabs.map((tab, index) => (
                  <p
                    key={index}
                    className={`inline cursor-pointer rounded-[40px] border border-[#00AEEF] px-[40px] py-[15px] text-[14px] font-bold ${
                      index === 0 ? 'bg-[#00AEEF] text-white' : ''
                    }`}
                  >
                    {tab}
                  </p>
                ))}
              </div>

              <div className='bst ml-4 w-full md:w-1/5'>
                <SearchBtn Input='Search' searchItem='Search Resource' />
              </div>
            </div>

            <div className='mt-10 grid grid-cols-1 gap-3 md:grid-cols-3'>
              {resourceData.map((card) => (
                <CardContentCustom
                  banner={card.banner}
                  badge={card.tab}
                  head={card.title}
                  description={card.description}
                  buttonText={card.cta}
                />
              ))}
            </div>
            <div className='mt-[60px] flex flex-col items-center justify-between gap-[16px] md:flex-row'>
              <div className='rounded bg-blue-500 p-2 !opacity-50 md:block'>
                <img src={vector} alt='' className='mx-auto h-[22px] w-[22px]' />
              </div>

              <div className='flex flex-wrap gap-3 md:gap-[16px]'>
                {pages.map((n, index) => (
                  <p
                    key={index}
                    className='inline-flex h-[52px] w-[52px] cursor-pointer items-center justify-center rounded-[14px] border border-[#CDCDD466] px-2 py-1 text-sm font-medium !text-[rgba(205,205,212,0.40)] transition-all duration-700 ease-in-out hover:border-[#ffffff] hover:!text-white md:px-[21px] md:py-[8px] md:!text-[20px]'
                  >
                    {n}
                  </p>
                ))}
              </div>

              <div className='rounded-[6px] bg-[#00AEEF] p-2 md:flex'>
                <img
                  src={vector}
                  alt=''
                  className='flex h-auto items-center justify-center md:block md:h-[22px] md:w-[22px]'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-[60px] relative z-[1] overflow-x-clip'>
              <img src={bannerBg} alt='Image' className='crd-t' />
        <img src={bannerBgThree} alt='Image' className='cr-bg-tr' />
        <div className='container mx-auto px-[16px] md:px-6 '>
          <div className="max-w-[800px] mx-auto">
            <Link to={'/contact'} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Blog_Subscribe_Component_Btn
              H1='Ready to Apply These Insights?'
              Desc="Knowledge is power, but action is key. Let's discuss how Vijilan's services can turn these strategies into a reality for your organization or your clients."
              Btn='schedule a Strategic consultation'
            />
          </Link>
          </div>
        </div>
      </section>
    </>

  );
};

export default Resources;
