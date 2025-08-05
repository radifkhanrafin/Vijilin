import { ComplainSays, complianceFeatures } from '@app/Constant/Constant';
import CardContent from '@components/CardContent';
import Heading_Btn from '@components/Heading_Btn';
import React from 'react';

const Complain_Solution = () => {
    return (
        <div className='max-w-[90%] mx-auto'>
            {/* Hero section  */}
            <div className="pt-[220px]">
                <div>
                <Heading_Btn
                    h1={`Achieve and Maintain\nCompliance with Confidence`}
                    desc={`Navigate complex regulatory landscapes with ease. Vijilan's managed security\nand compliance solutions provide the technology, expertise, and audit-ready\ndocumentation you need to meet your obligations and protect sensitive data.\nrequest a compliance Consultation`}
                    btn1="Request A complaince Consultation"
                    pd={true}
                    url={"/contact"}
                />


            </div>
            </div>

            {/* Simplifying your Compliance journey */}
            <div className='container mx-auto'>
                <Heading_Btn
                    h1="Simplifying your Compliance journey"
                    desc={`Whether you need to meet your own compliance obligations or provide compliance-ready services\nto your clients, Vijilan has a solution tailored to your needs.`}
                    isSmallHeading={true}
                />


                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 -mt-[70px]'>
                    {ComplainSays?.map((card, index) =>
                        <CardContent
                            title={card.title}
                            description={card.description}
                        />)}
                </div>
            </div>


            {/* The Foundational Features That Enable Compliance */}

            <div className='container mx-auto py-16'>
                <Heading_Btn
                    h1="The Foundational Features That Enable Compliance"
                    desc={`Built-in capabilities that address the most critical compliance requirements across all major\nframeworks.`}
                    isSmallHeading={true}
                />

                <div className='grid grid-cols-1 gap-[32px] md:grid-cols-2 -mt-[50px]'>
                    {
                        complianceFeatures.map((card, index) =>
                            <CardContent
                                side_text={true}
                                iconed={card.icon}
                                head={card.title}
                                description={card.description}
                            />
                        )
                    }
                </div>
            </div>


            <div className='container mx-auto pt-[60px]'>
                <div className=" flex flex-col lg:flex-row gap-5 lg:!p-[80px] text-white  rounded-lg  p-3" style={{
                    background: "linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)"
                }}>

                    <div className='p-2 md:p-5 flex flex-col items-center justify-center border-[3px] rounded-2xl border-[#035882]'>
                        <div className='-mb-10 flex flex-col items-center justify-center  gap-3'>
                            <div className='bg-gradient-to-t w-[45px] h-[45px] md:h-24 md:w-24   rounded-full flex justify-center items-center text-white text-lg font-bold from-[#07ADE9] to-[#EB9C33]'>
                                JN </div>
                            <h3 className='font-bold text-xl'>JEN AI</h3>
                        </div>

                        <Heading_Btn
                            desc='"Ask me which Vijilan services are best suited for meeting HIPAA compliance requirements, or how we can help you achieve CMMC Level 2 certification."'
                            btn="ASK JEN AI"

                        />
                    </div>
                    <div>
                        <Heading_Btn
                            h1="Ready to Simplify Your Compliance?"
                            desc="Schedule a personalized consultation with our compliance experts to understand how Vijilan can streamline your compliance journey while strengthening your security posture. schedule a compliance strategy call"
                            btn1="schedule a compliance strategy call"
                            isSmallHeading={true}
                            isCenter={true}
                            url={"/contact"}
                        />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Complain_Solution;