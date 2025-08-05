import React from 'react';
import CardContentData from '@components/CardContent';
import missionIcon from '../../images/about_01.png';
import valuesIcon from '../../images/about_02.png';
import visionIcon from '../../images/about_03.png';
import imageTwo from '../../images/thr-bg-t.png';

const Mission = () => {
  return (
    <section className='relative z-[9] overflow-x-clip py-[120px]'>
        <img src={imageTwo} alt="Image" className='trd-bg-two' />
      <div className='container mx-auto px-[16px] md:px-6'>
        <h2 className='mb-[40px] text-center text-[30px] font-bold text-white lg:text-[40px]'>
          <span className='!text-[#00AEEF]'>Our Mission</span>, Vision, and Values
        </h2>
        <div className='grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          <CardContentData
            icon={missionIcon}
            title='Our Mission'
            description='To empower organizations with unparalleled control and clarity over their security data, delivering
                                advanced, AI-driven managed detection, response, and remediation services that proactively combat cyber
                                threats and simplify compliance.'
          />

          <CardContentData
            icon={valuesIcon}
            title='Our Vision'
            description='To be the trusted, go-to partner for businesses seeking to modernize their SOC operations, optimize data
                                management, and achieve a robust cybersecurity posture through flexible, scalable, and expert-led
                                solutions'
          />

          <CardContentData icon={visionIcon} title='Our Core Values' designDescription={true} />
        </div>
      </div>
    </section>
  );
};

export default Mission;
