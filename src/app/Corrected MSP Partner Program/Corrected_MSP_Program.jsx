import { partnerFeedback, partnerShip, partnerShipDesign, PartnershipSteps } from '@app/Constant/Constant';
import CardContent from '@components/CardContent';
import Heading_Btn from '@components/Heading_Btn';
import SimpleCard from '@components/SimpleCard';
import React from 'react';
import {
    Car,
    Plus,

} from "lucide-react"

// Custom Card Component
const Card = ({ children, className = "", ...props }) => {
    return (
        <div className={` ${className}`} {...props}>
            {children}
        </div>
    );
};
const Corrected_MSP_Program = () => {
    const CardContentData = ({ children, className = "", ...props }) => {
        return (
            <div className={` ${className}`} {...props}>
                {children}
            </div>
        );
    };

    return (
        <div className='max-w-[90%] mx-auto '>
            {/* Corrected MSP Partner Program */}

            {/* hero section */}

            <div className='pt-[150px]'>
                <Heading_Btn
                    h1={`Build Your Profitable Security Practice on\nOur Platform`}
                    desc={`Leverage our 24/7 US-Based SOC, AI-driven technology, and channel-first model to\ndeliver enterprise-grade cybersecurity. No minimums, no complexity, no high startup\ncosts.`}
                    rating="★★★★★ | Trusted by over 500 MSPs worldwide"
                    btn1="Apply to become a partner"
                    btn2="download partner kit"
                    url={"/become-a-partner"}
                />
            </div>

            <div className='container mx-auto md:px-6 pb-16'>
                <Heading_Btn
                    h1="Your Path to Market Leadership"
                    desc={`Our proven go-to-market strategy helps partners achieve sustained growth and market\ndifferentiation.`}
                    isSmallHeading={true}
                />
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 rounded-lg -mt-[60px]'>
                    {partnerShip.map((card, index) =>
                                <div key={index}
            className="bg-gradient-to-l to-[#A5EDCD] from-[#B563F8] my-5 rounded-lg"
            
        >
            <div
                className="bg-[#413F46] p-8 h-[calc(100%-4px)] text-left rounded-lg m-[2px]"
                >
                <div className="flex items-center gap-3 my-2">
                <img
                        src={card.icon}
                        alt="icon"
                        className="max-h-full w-auto md:w-auto  object-contain"
                    />
                    <p className='text-blue-500' style={{color: "#00AEEF"}}>{card.title}</p>
                </div>
                <p className='text-white'>{card.description}</p>
            </div>
        </div>
                    )}
                </div>
            </div>

            {/* Partner Ship design */}

            <div className='container mx-auto md:px-6'>
                <Heading_Btn
                    h1="A partnerShip designed for your growth"
                    desc="everything you need to build,scale and differentiate your practice"
                    isSmallHeading={true}
                />

                <div className='grid grid-cols-1 md:grid-cols-3 gap-10 -mt-[20px]'>
                    {
                        partnerShipDesign.map((card, index) =>


                            <div className='text-white text-center my-2 p-5'>
                                {/* <img src={card.icon} alt="" /> */}
                                <h3 className='text-2xl font-semibold my-2'>{card.title}</h3>
                                <p>{card.description}</p>
                            </div>
                        )
                    }
                </div>




            </div>

            {/* A Partnership Tier for Every Stage of Your Growth */}
            <div className='container mx-auto md:px-6 py-16'>
                <Heading_Btn
                    h1={`A Partnership Tier for Every Stage of\nYour Growth`}
                    desc={`Our program is designed to meet you where you are and help you scale your security offerings\nprofitably.`}
                    isSmallHeading={true}
                />

                <div className='grid grid-cols-1 md:grid-cols-2  gap-5 -mt-[20px]'>
                    <div className='relative bg-[#00AEEF3D] rounded-[8px] h-fit py-16 px-3 md:px-10'>
                        <div
                            className="absolute  inset-0 rounded-[8px] p-[2px] z-0"
                            style={
                                {
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8, 34, 53, 0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8, 34, 53, 0) 66.77%)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude"
                                }
                            }

                        />

                        <h1 className='text-[24px] font-bold text-center mb-3'>Partner Tier Comparison</h1>
                        <p className='text-[18px] text-center'>A detailed comparison table of Bronze, Silver, and Gold Tiers would be presented here, outlining services, support, and benefits for each level as defined in the development plan.</p>
                    </div>

                    <div className=' p-5 flex flex-col items-center justify-center border-[3px] rounded-2xl border-[#035882]'>
                        <div className='-mb-10 flex flex-col items-center justify-center  gap-3'>
                            <div className='bg-gradient-to-t h-[45px] w-[45px] md:h-24 md:w-24  rounded-full flex justify-center items-center text-white text-lg font-bold from-[#07ADE9] to-[#EB9C33]'>
                                JN </div>
                            <h3 className='font-bold text-xl text-white'>JEN AI</h3>
                        </div>

                        <Heading_Btn
                            desc='"Ask me which Vijilan services are best suited for meeting HIPAA compliance requirements, or how we can help you achieve CMMC Level 2 certification."'
                            btn1="start a chat"
                            url={"/contact"}
                        />
                    </div>

                </div>
            </div>

            {/* feedback */}

            <div className='container mx-auto md:px-6 py-16'>
                <div className='grid grid-cols-1 md:grid-cols-2  gap-5 justify-between'>
                    <div className='bg-[#082235] rounded-[10px] py-10'>
                        <h1 className='text-[24px] font-medium text-center mb-3'>What Our Partners say</h1>
                        <p className='text-[20px] mb-3 border-l-4 border-[#00AEEF] text-center'>"Our security MRR increased by 30% within 6 months of partnering with Vijilan. Their SOC is world-class, and the active remediation in ThreatRemediate is a game-changer for our clients."</p>
                        <h4 className='text-[14px] font-medium text-center ' style={{ color: "#00AEEF" }}>Alex Johnson, CEO of a Silver Tier MSP Partner</h4>
                    </div>
                    <div className='bg-[#082235] rounded-[10px] p-10'>
                        <h1 className='text-[24px] font-medium text-center mb-3'>A Message to Our Future Partners</h1>
                        <p className='text-[20px] text-center mb-3'>"We built our partner program on a foundation of trust and mutual success. We succeed when you succeed. That's why we provide the best technology, an expert SOC, and the GTM support you need to win."</p>

                    </div>
                </div>
            </div>

            {/* Question and answer */}


            <div className='container mx-auto  '>
                
                {/* FAQ Section */}
                < section className="relative z-10 px-6 py-16" >
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl md:text-[40px] font-bold text-center mb-12 text-white">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            {[
                                "What does Vijilan do for MSPs?",
                                "What does Vijilan do for MSPs?",
                                "What does Vijilan do for MSPs?",
                                "What does Vijilan do for MSPs?",
                                "What does Vijilan do for MSPs?",
                            ].map((question, index) => (
                                <Card key={index} className="relative rounded-[8px]" style={{ background: `linear-gradient(0deg, rgba(0, 0, 0, 0.33), rgba(0, 0, 0, 0.33)), linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2))` }}>
                                    <div
                                        className="absolute inset-0 rounded-[8px] p-[1px] z-0"
                                        style={{
                                            background: `conic-gradient(from 180deg at 50% 50%, #FF98E2 0deg, #FFC876 35.77deg, #79FFF7 153.75deg, #9F53FF 258.75deg, #FF98E2 360deg)`,
                                            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                            WebkitMaskComposite: "xor",
                                            maskComposite: "exclude",

                                        }}
                                    />
                                    <CardContentData className="p-4">
                                        <div className="flex items-center justify-between">
                                            <span className="text-white text-[16px]">{question}</span>
                                            <Plus className="w-5 h-5 text-gray-400" />
                                        </div>
                                    </CardContentData>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section >
            </div>



        </div>
    );
};

export default Corrected_MSP_Program;