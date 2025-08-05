// Responsive complete 

import { benefitsData, SMBCard } from '@app/Constant/Constant';
import Heading_Btn from '@components/Heading_Btn';
import React from 'react';
import DashBoardCard from '../component/DashBoardCard';
import CardContent from '@components/CardContent';
import { Link } from 'react-router-dom';

const SMB = () => {

    const checkBox = [
        " SIEM & 24/7 SOC",
        "Managed EDR",
        " E.g Office 365",
        " Vulnerability Management",
        "Threat Management",
        "Remediation",
        " Help Desk & Support",
        " Incident Response",
        "Digital Forensics",
        " Backup & Disaster Recovery",
        " Find my matching partners"
    ]
    return (
        <div className='max-w-[90%] mx-auto'>

            <div className='pt-[150px]'>
                <div className="max-w-[820px] mx-auto">
                    <Heading_Btn
                    h1="Enterprise-Grade Cybersecurity for Small & Medium Businesses"
                    desc="Connect with trusted, Vijilan-certified IT partners in your area who provide world-class cybersecurity protection tailored specifically for businesses like yours.."

                />
                </div>

<div className="container vsd mx-auto px-[16px] md:px-6">
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        SMBCard.map((card, index) =>
                            <DashBoardCard
                                head={card.title}
                                text={card.description}
                                linkUp={card.button}
                            />)
                    }
                </div>
</div>


                {/* checkbox and text area */}
                <div className="container mx-auto px-[16px] md:px-6">
                <div className='bg-gradient-to-t to-[#063853] from-[#082235] p-5 lg:p-8 rounded-3xl mt-[100px] '>
                    <Heading_Btn
                        h1="Find a Trusted IT & Security Partner"
                        desc="Tell us what you need. We'll connect you with the right experts."
                    />

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-[-60px]'>
                        <div className='col-span-1 md:col-span-2 justify-evenly px-0 md:px-8 lg:px-5'>
                            <div className='grid grid-cols-1 lg:grid-cols-2 '>
                                {
                                    checkBox.map(box => <p className='my-1'><span className='h-1 w-1 px-2 mr-2 bg-white '></span>{box}</p>)
                                }
                            </div>

                        </div>
                        <div className='mt-5'>
                            <p className='text-xl mb-[25px]'> What services are you looking for?</p>
                            <textarea rows={7} className='rounded-xl p-3 w-full  bg-[#2A4C64] border-none' id=""></textarea>
                        </div>
                    </div>

                    <Heading_Btn
                        btn4="Find my matching partners"
                    />



                </div>
                </div>



                {/*  */}
                <div className="container mx-auto px-[16px] md:px-6">
                    
                <div>
                    <Heading_Btn
                        h1=" Grow Your IT Business with the ITloop Platform"
                        desc="Join our marketplace to connect with qualified SMBs and leverage our ecosystem to enhance your service offerings. Receive Qualified Leads"
                    />

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {benefitsData.map(card => <CardContent
                            icon={card.icon}
                            head={card.title}
                            description={card.description}
                        />)}
                    </div>
                    <Link to={"/mid-market-enterprice"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                        <Heading_Btn btn4="Join or manage your market place living" />
                    </Link>


                </div>
                </div>
            </div>
        </div>
    );
};

export default SMB;