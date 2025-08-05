import AboutBanner from '@components/about/AboutBanner';
import React, {useEffect} from 'react';
import JourneySection from '@components/JourneySection';
import tealBg from '../../images/t-bg.png';
import networkBg from '../../images/image.png';
import Mission from '@components/about/Mission';
import imageTwo from '../../images/ad-bg.png';
import LeaderCard from '@components/LeaderCard';
import Journey from '@components/about/Journey';
import leaderImage from '../../images/man.png';
import JoinMission from '@components/about/JoinMission';

const teamData = [
  {
    name: 'Kevin Nejad',
    title: 'Founder & CEO',
    description:
      '"With over 20 years of experience in cybersecurity and data management, Kevin founded Vijilan to address the growing gap between complex threats and the resources available to combat them. He leads the company with a passion for innovation and a channel-first philosophy."',
    image: leaderImage,
  },
  {
    name: 'Luciana Furtado',
    title: 'Chief Technology Officer',
    description:
      '"Leading our technical vision and platform development, our CTO brings deep expertise in AI-driven security technologies and scalable cloud architectures to deliver cutting-edge solutions for our clients."',
    image: leaderImage,
  },
  {
    name: 'Head of Channel Sales',
    title: 'VP of Channel Sales',
    description:
      '"Driving our channel-first strategy, our Head of Channel Sales is dedicated to empowering MSP partners with the tools, training, and support needed to succeed in the competitive cybersecurity market."',
    image: leaderImage,
  },
];

const About = () => {

    useEffect(() => {
      document.body.classList.add('home-body');
  
      return () => {
        document.body.classList.remove('home-body');
      };
    }, []);

  return (
    <>
      <AboutBanner />
      <JourneySection
        tealBg={tealBg}
        networkBg={networkBg}
        heading={'From Log Analysis to Market Leader'}
        description={`Founded in 2014 with a mission to bring clarity to complex security data, Vijilan has evolved from
                    a specialized log analysis firm into a leading managed cybersecurity provider. Our journey has
                    been driven by a relentless focus on innovation, a deep commitment to our partners, and the core
                    belief that every business deserves enterprise-grade security.`}
      />
      <Mission />
      <section className='relative z-[9] pb-[120px]'>
        <img src={imageTwo} alt='Image' className='ad-bg' />
        <div className='container mx-auto px-[16px] md:px-6'>
          <h2 className='mb-12 text-center text-[30px] font-bold text-white lg:text-[40px]'>
            Meet Our Leadership
          </h2>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
            {teamData.map((leader, index) => (
              <LeaderCard
                key={index}
                name={leader.name}
                title={leader.title}
                description={leader.description}
                image={leader.image}
              />
            ))}
          </div>
        </div>
      </section>
      <Journey
        tealBg={tealBg}
        networkBg={networkBg}
        headingWithDesign={true}
        smHeading={`Our SOC's Tier 2 certified Security Operations Center is the operational center for your defense. Staffed around the clock by our expert security analysts and powered by advanced AI for incident response, our team leverages our advanced platform to protect your business with unparalleled vigilance.`}
        videoPart={true}
      />
      <JoinMission
        title='Join Our'
        highlightedText='Mission'
        subtitle="We're always looking for passionate, talented individuals to join our team. If you're driven to solve complex challenges and want to make a real impact in the cybersecurity industry, we want to hear from you"
        buttonText='View open positions'
        url={'/contact'}
      />
    </>
  );
};

export default About;
