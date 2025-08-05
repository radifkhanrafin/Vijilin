

import { Automation } from '@app/Constant/Constant';
import CardBorder from '@components/CardBorder';
import CardContent from '@components/CardContent';
import Heading_Btn from '@components/Heading_Btn';
import React, {useEffect} from 'react';
import a1 from "../../Assets/a1.png";
import a2 from "../../Assets/a2.png";
import a3 from "../../Assets/a3.png";
import a4 from "../../Assets/a4.png";
import { Link } from 'react-router-dom';

const cardData = [
    {
        title: "30%",
        desc: " Average MRR Growth"

    },
    {
        title: "3 days",
        desc: " Time to First Sale"
    },
    {
        title: "500+",
        desc: " Active MSP Partners"
    },
]
const Automation_Focused = () => {

          useEffect(() => {
            document.body.classList.add('home-body');
        
            return () => {
              document.body.classList.remove('home-body');
            };
          }, []);

    return (
        <div className='drf-bg'>

           <div className="pt-[150px] container mx-auto px-[16px] md:px-6">
             <div className='text-center'>
                <Heading_Btn h1="Build Your Security Practice with Automated Tools"
                    desc={`Skip the static brochures. Use our interactive calculators, quote builders, and\nautomated sales tools to close deals faster and grow your MRR.`}
                />

                {/* Stats - Improved Grid */}
                <div className='-mt-[90px]'>
                    <div className="flex flex-wrap justify-center gap-4 mb-4 max-w-4xl mx-auto">

                        {
                            cardData.map(card => <CardBorder height="171px" width="166px">
                                <div className='px-6 py-10'>
                                    <div className="text-white text-[32px] font-bold mb-2">{card.title}</div>
                                    <div className="text-slate-300 text-sm font-medium px-10">
                                        {card.desc}
                                    </div>
                                </div>
                            </CardBorder>
                            )
                        }

                    </div>

                    <div className='-mt-[10px]'>
                        <Heading_Btn
                        btn1="Explore Success Stories"
                        btn8="Calculate Your Roi"
                        url={"/complain-solution"}
                    />
                    </div>

                </div>
            </div>
           </div>

            {/* Business Automation */}

            <div className="container mx-auto px-[16px] md:px-6">
                <div className=' pb-[120px]'>

                <Heading_Btn
                    h1="Business Automation Tools That Drive Results"
                    desc={`Stop wasting time on manual processes. These interactive tools help you quote faster, sell smarter,\nand grow profitably.`}
                    isSmallHeading={true}
                />

                <div className='  -mt-[25px]'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5  '>
                        <div className={`relative bg-filt bg-[#00AEEF3D] lg:h-[603px]  py-[32px] px-[21px] rounded-[16px] flex flex-col justify-center items-center`}>
                            <div
                                className="absolute inset-0 rounded-[16px] p-[2px] z-0 text-center"
                                style={{
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude",
                                }} />
                            <div className="w-[100px] h-[100px] flex items-center justify-center my-4">
                                <img src={a1} alt="" className="" />
                            </div>
                            <h3 className="text-[24px] font-bold text-white mb-3 text-center">Live Pricing Calculator</h3>
                            <p className="text-white text-center">Generate accurate quotes instantly.<br />  Input client assets and get real-time <br /> pricing with margin calculations.</p>
                            <div className="mt-10  rounded-lg  ">
                                <Link to={"/pricing-tool"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>

                                    <button className="p-[18px] relative z-10 uppercase font-medium text-lg rounded-[8px] text-white border-2 border-white  " style={{
                                        background: "linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)"
                                    }}>
                                        LAUNCH CALCULATOR
                                    </button>
                                </Link>
                            </div>
                        </div>

                        <div className={`relative bg-filt bg-[#00AEEF3D] lg:h-[503px]  py-[32px] px-[21px] rounded-[16px] flex flex-col justify-center items-center`}>
                            <div
                                className="absolute inset-0 rounded-[16px] p-[2px] z-0 text-center"
                                style={{
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude",
                                }} />
                            <div className="w-[100px] h-[100px] flex items-center justify-center my-4">
                                <img src={a2} alt="" className="" />
                            </div>
                            <h3 className="text-[24px] font-bold text-white mb-3 text-center">Quote Builder & Proposal Generator</h3>
                            <p className="text-white text-center">Build professional proposals in <br /> minutes. Automated formatting, co- <br />branding, and instant PDF generation.</p>
                            <div className="mt-10  rounded-lg  ">
                                <button className="p-[18px] uppercase font-medium text-lg rounded-[8px] text-white border-2 border-white  " style={{
                                    background: "linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)"
                                }}>
                                    BUILD QUOTE
                                </button>
                            </div>
                        </div>

                        <div className={`relative bg-filt bg-[#00AEEF3D] lg:h-[592px]  py-[32px] px-[21px] rounded-[16px] flex flex-col justify-center items-center`}>
                            <div
                                className="absolute inset-0 rounded-[16px] p-[2px] z-0 text-center"
                                style={{
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude",
                                }} />
                            <div className="w-[100px] h-[100px] flex items-center justify-center my-4">
                                <img src={a3} alt="" className="" />
                            </div>
                            <h3 className="text-[24px] font-bold text-white mb-3 text-center">Partner ROI Calculator</h3>
                            <p className="text-white text-center">Show prospects their security ROI and<br /> payback period. Interactive financial<br /> modeling built-in.</p>
                            <div className="mt-10  rounded-lg  ">
                                <button className="p-[18px] uppercase font-medium text-lg rounded-[8px] text-white border-2 border-white  " style={{
                                    background: "linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)"
                                }}>
                                    CALCULATE ROI
                                </button>
                            </div>
                        </div>

                        <div className={`relative bg-filt bg-[#00AEEF3D] lg:h-[495px] lg:-mt-[98px]  py-[32px] px-[21px] rounded-[16px] flex flex-col justify-center items-center`}>
                            <div
                                className="absolute inset-0 rounded-[16px] p-[2px] z-0 text-center"
                                style={{
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude",
                                }} />
                            <div className="w-[100px] h-[100px] flex items-center justify-center my-4">
                                <img src={a4} alt="" className="" />
                            </div>
                            <h3 className="text-[24px] font-bold text-white mb-3 text-center">Jen AI Sales Assistant</h3>
                            <p className="text-white text-center">Get instant answers about pricing,<br /> technical specs, and competitive <br /> positioning. Available 24/7.</p>
                            <div className="mt-10  rounded-lg  ">
                                <button className="p-[18px] uppercase font-medium text-lg rounded-[8px] text-white border-2 border-white  " style={{
                                    background: "linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)"
                                }}>
                                    START CHAT
                                </button>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
            </div>

        </div>
    );
};

export default Automation_Focused;