import { Monitor, Shield } from 'lucide-react';
import React from 'react';
import pc from "../../Assets/pc.png";
import Heading_Btn from '@components/Heading_Btn';
import { Link } from 'react-router-dom';

const FixedVijilanPortal = () => {
    return (
        <div className='max-w-[90%] mx-auto  '>
            <div className=" pt-[150px]">
                {/* Header */}


                <Heading_Btn
                    h1="Build Your Security Quote"
                    desc=" Configure your ideal security solution and choose your onboarding path in just 3 simple steps."
                />

                {/* Progress Steps */}
                <div className="relative flex flex-col md:flex-row items-center justify-between mb-16 w-full max-w-4xl mx-auto px-4">
                    {/* <!-- Line behind steps --> */}
                    <div className="absolute top-1/2 left-4 right-4 transform -translate-y-1/2 h-[2px] bg-[#F5F5F5]"></div>

                    {/* <!-- Step 1 --> */}
                    <div className="relative z-10 flex   items-center justify-center gap-2 rounded-3xl border-2 bg-[#121212] pr-2">
                        <div className="w-8 h-8 bg-[#00AEEF] rounded-full flex items-center justify-center text-sm font-medium text-white">
                            1
                        </div>
                        <span className=" text-sm text-[#757575] whitespace-nowrap">Service Level</span>
                    </div>

                    {/* <!-- Step 2 --> */}
                    <div className="relative z-10 flex  items-center justify-center gap-2 rounded-3xl border-2 bg-[#121212] pr-2">
                        <div className="w-8 h-8 bg-[#EBEDEF] rounded-full flex items-center justify-center text-sm font-medium !text-[#40464F]">
                            2
                        </div>
                        <span className=" text-sm text-[#757575] whitespace-nowrap">Build Quote</span>
                    </div>

                    {/* <!-- Step 3 --> */}
                    <div className="relative z-10 flex  items-center justify-center gap-2 rounded-3xl border-2 bg-[#121212] pr-2">
                        <div className="w-8 h-8 bg-[#EBEDEF] rounded-full flex items-center justify-center text-sm font-medium !text-[#40464F]">
                            3
                        </div>
                        <span className=" text-sm text-[#757575] whitespace-nowrap">Choose Path</span>
                    </div>
                </div>



                {/* Service Cards */}
                <div className="container mx-auto px-[16px] md:px-6 !max-w-[820px]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8   mx-auto mb-12">
                    {/* ThreatRespond Card */}
                    <div className="bg-[#00AEEF3D] rounded-2xl py-[60px] px-[20px] lg:py-[60px] lg:px-[40px] backdrop-blur-sm">
                        <div
                            className={`absolute inset-0 rounded-[16px] p-[2px] z-0 `}
                            style={{
                                background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                WebkitMaskComposite: "xor",
                                maskComposite: "exclude",
                            }}
                        />
                        <div className="text-center mb-4">
                            <div className="relative inline-block">
                                <img src={pc} alt="" className='w-[100px] h-[100px]' />
                            </div>
                        </div>

                        <h2 className="text-xl md:text-2xl font-medium text-center mb-4">ThreatRespond</h2>

                        <p className=" text-center mb-6  text-sm md:text-[18px] leading-relaxed">
                            I have an IT team to perform remediation and need expert 24/7 detection and guided response.
                        </p>

                        <ul className="space-y-3">
                            <li className="flex items-center ">
                                <div className="w-1 h-1 bg-white rounded-full  mr-3 flex-shrink-0"></div>
                                <span className="text-sm md:text-[18px]">24/7 threat monitoring</span>
                            </li>
                            <li className="flex items-center">
                                <div className="w-1 h-1 bg-white rounded-full mr-3 flex-shrink-0"></div>
                                <span className="text-sm md:text-[18px]">Expert threat detection</span>
                            </li>
                            <li className="flex items-center">
                                <div className="w-1 h-1 bg-white rounded-full  mr-3 flex-shrink-0"></div>
                                <span className="text-sm md:text-[18px]">Guided response playbooks</span>
                            </li>
                            <li className="flex items-center">
                                <div className="w-1 h-1 bg-white rounded-full  mr-3 flex-shrink-0"></div>
                                <span className="text-sm md:text-[18px]">Your team handles remediation</span>
                            </li>
                            <li className="flex items-center">
                                <div className="w-1 h-1 bg-white rounded-full  mr-3 flex-shrink-0"></div>
                                <span className="text-sm md:text-[18px]">Lower cost for self-service</span>
                            </li>
                        </ul>
                    </div>

                    {/* ThreatRemediate Card */}
                    <div className="bg-[#00AEEF3D] rounded-2xl  p-3 md:p-8 backdrop-blur-sm">
                        <div
                            className={`absolute inset-0 rounded-[16px] p-[2px] z-0 `}
                            style={{
                                background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                WebkitMaskComposite: "xor",
                                maskComposite: "exclude",
                            }}
                        />
                        <div className="text-center mb-4">
                            <div className="relative inline-block">
                                <div className="relative inline-block">
                                    <img src={pc} alt="" className='w-[100px] h-[100px]' />
                                </div>
                            </div>
                        </div>

                        <h2 className="text-xl md:text-2xl font-medium text-center mb-4">ThreatRemediate</h2>

                        <p className="text-center mb-6 text-sm md:text-[18px] leading-relaxed">
                            I need a {"hands-off"} solution where Vijilan{"s"} SOC actively contains and remediates threats for me.
                        </p>

                        <ul className="space-y-3">
                            <li className="flex items-center">
                                <div className="w-1 h-1 bg-white rounded-full  mr-3 flex-shrink-0"></div>
                                <span className="text-sm md:text-[18px]">24/7 threat monitoring</span>
                            </li>
                            <li className="flex items-center">
                                <div className="w-1 h-1 bg-white rounded-full  mr-3 flex-shrink-0"></div>
                                <span className="text-sm md:text-[18px]">Expert threat detection</span>
                            </li>
                            <li className="flex items-center">
                                <div className="w-1 h-1 bg-white rounded-full  mr-3 flex-shrink-0"></div>
                                <span className="text-sm md:text-[18px]">Active threat containment</span>
                            </li>
                            <li className="flex items-center">
                                <div className="w-1 h-1 bg-white rounded-full  mr-3 flex-shrink-0"></div>
                                <span className="text-sm md:text-[18px]">Full hands-on remediation</span>
                            </li>
                            <li className="flex items-center">
                                <div className="w-1 h-1 bg-white rounded-full  mr-3 flex-shrink-0"></div>
                                <span className="text-sm md:text-[18px]">Complete peace of mind</span>
                            </li>
                        </ul>
                    </div>
                </div>
                </div>

                <hr className='bg-[#CAC4D0] mb-10' />
                {/* Continue Button */}
                <Link to={"/pricing-tool"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex justify-end max-w-6xl mx-auto">
                    <button className="bg-[#00AEEF] text-white text-[16px] font-bold py-[12px] px-[24px] rounded-lg ">
                        CONTINUE TO QUOTE BUILDER
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default FixedVijilanPortal;