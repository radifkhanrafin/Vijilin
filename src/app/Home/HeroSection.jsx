import React from 'react';
import { Link } from 'react-router-dom';
import bannerBg from '../../images/ban-bg.png';
import bannerBgTwo from '../../images/bg-grd.png';

const HeroSection = () => {
  return (
    <section className="pt-[320px] sm:pt-[290px] pb-[120px] text-center relative px-4 md:px-0 overflow-x-clip hr-section" >
      <img src={bannerBg} alt="Image" className='ban-bg' />
      <img src={bannerBgTwo} alt="Image" className='bg-grd' />
      <h1 className="text-2xl md:text-5xl  font-bold text-white mb-[48px] leading-tight">
        Vijilan: Intelligent, Resilient<br />
        Cybersecurity. Empowering MSP Growth.<br />
        Securing the Enterprise.
      </h1>
      <p className="text-[16px] sm:text-[18px] text-[#FFFFFF] mb-[48px] leading-relaxed">
        Expert-Led Threat Detection, Response & Active Remediation from our SOC 2 Type 2 <br /> Certified, US-based Security Operations Center. Delivering turnkey cybersecurity <br /> solutions for MSPs and comprehensive protection for enterprises through AI-driven, <br /> fully managed security services.
      </p>
      <Link to={"contact"}>
      
        <button className=" text-white rounded-[8px] p-[16px] md:p-[19px] font-medium text-[16px] md:text-[18px] flex items-center justify-center gap-2 mx-auto" style={{
          background: " linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)",
        }}>
          SCHEDULE A FREE SECURITY CONSULTATION
          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
            <path d="M8.66 8.8L7.94 9.52C7.79333 9.66666 7.72 9.85333 7.72 10.08C7.72 10.3067 7.79333 10.4933 7.94 10.64C8.08666 10.7867 8.27333 10.86 8.5 10.86C8.72666 10.86 8.91333 10.7867 9.05999 10.64L11.14 8.56C11.3 8.4 11.38 8.21333 11.38 8C11.38 7.78666 11.3 7.6 11.14 7.44L9.05999 5.36C8.91333 5.21333 8.72666 5.14 8.5 5.14C8.27333 5.14 8.08666 5.21333 7.94 5.36C7.79333 5.50666 7.72 5.69333 7.72 5.92C7.72 6.14666 7.79333 6.33333 7.94 6.48L8.66 7.2H6.1C5.87333 7.2 5.68346 7.2768 5.5304 7.4304C5.37733 7.584 5.30053 7.77386 5.3 8C5.29946 8.22613 5.37626 8.41626 5.5304 8.5704C5.68453 8.72453 5.8744 8.80106 6.1 8.8H8.66ZM8.5 16C7.39333 16 6.35333 15.7899 5.38 15.3696C4.40667 14.9493 3.56 14.3795 2.84 13.66C2.12 12.9405 1.55013 12.0939 1.1304 11.12C0.710668 10.1461 0.500534 9.10613 0.500001 8C0.499468 6.89386 0.709601 5.85387 1.1304 4.88C1.5512 3.90613 2.12107 3.05947 2.84 2.34C3.55893 1.62053 4.4056 1.05067 5.38 0.6304C6.3544 0.210133 7.3944 0 8.5 0C9.60559 0 10.6456 0.210133 11.62 0.6304C12.5944 1.05067 13.4411 1.62053 14.16 2.34C14.8789 3.05947 15.4491 3.90613 15.8704 4.88C16.2917 5.85387 16.5016 6.89386 16.5 8C16.4984 9.10613 16.2883 10.1461 15.8696 11.12C15.4509 12.0939 14.8811 12.9405 14.16 13.66C13.4389 14.3795 12.5923 14.9496 11.62 15.3704C10.6477 15.7912 9.60773 16.0011 8.5 16ZM8.5 14.4C10.2867 14.4 11.8 13.78 13.04 12.54C14.28 11.3 14.9 9.78666 14.9 8C14.9 6.21333 14.28 4.7 13.04 3.46C11.8 2.22 10.2867 1.6 8.5 1.6C6.71333 1.6 5.2 2.22 3.96 3.46C2.72 4.7 2.1 6.21333 2.1 8C2.1 9.78666 2.72 11.3 3.96 12.54C5.2 13.78 6.71333 14.4 8.5 14.4Z" fill="currentColor" />
          </svg>
        </button>
      </Link>
    </section>
  );
};

export default HeroSection;