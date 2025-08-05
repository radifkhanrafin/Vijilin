// Responsive 

import { dashbordTabs } from '@app/Constant/Constant';
import CardContent from '@components/CardContent';
import Heading_Btn from '@components/Heading_Btn';
import React from 'react';
import DashBoardCard from '../component/DashBoardCard';

export const InputField = ({ heading, desc, Input, number }) => {
    return (
        <div className='mt-5'>
            <h1 className='text-left sm:text-sm md:text-xl font-semibold'>{heading}</h1>
            <div className='flex justify-between mt-2 mb-4 '>
                <p className='text-left font-thin text-[16px]'>{desc}</p>
                <p className='text-[16px]' style={{ color: "#00AEEF" }}>${number}</p>
            </div>

            <div className="mb-4 flex gap-5 items-center   justify-between">
                <label className="  text-white   font-semibold  " htmlFor="Input">
                    {Input}
                </label>
                <input
                    className="w-full rounded-xl px-5 bg-[#2A516C]"
                    id="input"
                    type="number"
                    placeholder="0"
                />
            </div>
        </div>
    );
};


const Dashbord = () => {

    const tabs = [
        "All",
        "Tools",
        "Sales",
        "Technical",
        "Legal"
    ]
    return (

        <div className='pt-[150px]'>

            <div className='pb-16'>
                <Heading_Btn
                    h1={<>Partner Dashboard</>}
                    desc="Your central hub for sales, metrics, and support."
                    spacing={true}

                />

                <div className="container !max-w-[1250px] mx-auto px-[16px] md:px-6">
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 justify-between -mt-[20px]'>
                    <div className='relative bg-[#00AEEF3D] rounded-[24px] px-[30px] py-[31px] space-y-5'>
                        <div
                            className="absolute  inset-0 rounded-[24px] p-[2px] z-0 h-full"
                            style={
                                {
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8, 34, 53, 0) 50%),
                                        linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8, 34, 53, 0) 66.77%)`,
                                    WebkitMask:
                                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude"
                                }

                            }

                        />
                        <h1 className="text-[24px] font-medium" style={{ color: "#00aeef" }}>Build a Quote </h1>
                        <p className="text-[18px]" >Use our advanced simulator to create custom quotes and start a POC.launch quote builder</p>
                        <button className='py-[11px] px-[15px] md:px-[29px] text-[15px] font-bold rounded-[7px] ' style={{
                            background: "linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)"
                        }}>Lounch quote builder</button>
                    </div>

                    <div className='relative bg-[#00AEEF3D] rounded-[24px] px-[30px] py-[31px] '>
                        <div
                            className="absolute  inset-0 rounded-[24px] p-[2px] z-0 h-full"
                            style={
                                {
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8, 34, 53, 0) 50%),
                                        linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8, 34, 53, 0) 66.77%)`,
                                    WebkitMask:
                                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude"
                                }

                            }

                        />
                        <h1 className="text-[24px] font-medium" style={{ color: "#00aeef" }}>Active Client</h1>
                        <h3 className="text-left text-3xl md:text-4xl lg:text-5xl font-bold mb-8 mt-1">12</h3>
                        <p className="text-left" style={{ color: "#37D962D6" }}>+2 this month</p>
                    </div>
                    <div className='relative bg-[#00AEEF3D] rounded-[24px] px-[30px] py-[31px] '>
                        <div
                            className="absolute  inset-0 rounded-[24px] p-[2px] z-0 h-full"
                            style={
                                {
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8, 34, 53, 0) 50%),
                                        linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8, 34, 53, 0) 66.77%)`,
                                    WebkitMask:
                                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude"
                                }

                            }

                        />
                        <h1 className="text-[24px] font-medium" style={{ color: "#00aeef" }}>Endpoints Protected</h1>
                        <h3 className="text-left text-3xl md:text-4xl lg:text-5xl font-bold mb-8 mt-1">347</h3>
                        <p className="text-left" style={{ color: "#37D962D6" }}>+Across all clients</p>
                    </div>

                    <div className='relative bg-[#00AEEF3D] rounded-[24px] px-[30px] py-[31px] '>
                        <div
                            className="absolute  inset-0 rounded-[24px] p-[2px] z-0 h-full"
                            style={
                                {
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8, 34, 53, 0) 50%),
                                        linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8, 34, 53, 0) 66.77%)`,
                                    WebkitMask:
                                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude"
                                }

                            }

                        />
                        <h1 className="text-[24px] font-medium" style={{ color: "#00aeef" }}>Monthly Recurring</h1>
                        <h3 className="text-left text-3xl md:text-4xl lg:text-5xl font-bold mb-8 mt-1">$4,280</h3>
                        <p className="text-left" style={{ color: "#37D962D6" }}>Projected revenue</p>
                    </div>

                </div>
                </div>

            </div>


            <section className='py-16'>
                <div className="container !max-w-[1250px] mx-auto px-[16px] md:px-6">
                    <div className=' p-5 md:p-10 rounded-[24px]  ' style={{
                    background: "linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)"
                }}>

                    <h1 className='text-2xl md:text-4xl lg:text-[40px] font-bold text-center'>Quote Builder & POC Launcher
                    </h1>
                    <p className='text-center text-[18px] mt-3'>Build a custom quote, then launch a risk-free Proof of Concept for your client.</p>


                    <div className='grid grid-cols-1 lg:grid-cols-2 items-start justify-between gap-10'>

                        <div className='col-span-1  '>
                            <div className='mt-8 flex flex-col md:flex-row  gap-5'>
                                <button className='text-white bg-[#00AEEF] px-14 py-[24px] rounded-xl z-10  '>Modular Essentials</button>
                                <button className='text-gray-400 bg-white px-14 py-[24px] rounded-xl ml-0 md:-ml-8  '>User Based (Remote)</button>
                            </div>


                            <div className='mt-10'>
                                <InputField
                                    heading="TRX Endpoint (EDR/XDR)"
                                    desc="CrowdStrike Falcon with containment & network isolation"
                                    Input="Quantity"
                                    number="5"
                                />
                                <InputField
                                    heading=" TRX Identity (ITDR)"
                                    desc="Conditional access, bi-directional Entra ID integration"
                                    Input="Quantity"
                                    number="3"
                                />
                                <InputField
                                    heading="TRX Visibility (Exposure)"
                                    desc="Falcon Discover + Spotlight for asset & hygiene visibility"
                                    Input="Quantity"
                                    number="3"
                                />
                                <InputField
                                    heading="TRX Visibility (Exposure)"
                                    desc="Falcon Discover + Spotlight for asset & hygiene visibility"
                                    Input="Quantity"
                                    number="3"
                                />

                                <InputField
                                    heading=" Critical Servers"
                                    desc="Monitored through Falcon EDR/XDR for general purpose servers"
                                    Input="Quantity"
                                    number="30"
                                />

                                <InputField
                                    heading="Member Servers"
                                    desc="Advanced security event monitoring for Domain Controllers"
                                    Input="Quantity"
                                    number="30"
                                />

                                <InputField
                                    heading="Member Servers"
                                    desc="Advanced security event monitoring for Domain Controllers"
                                    Input="Quantity"
                                    number="30" />



                            </div>

                        </div>

                        <div className='col-span-1 min-h-80 border-2 border-[#064462] p-4 rounded-3xl  sm:mt-2 md:mt-16 flex lg:mt-24 flex-col justify-between'>
                            <p className='font-bold text-[20px] text-left mt-3'>Quote Summary</p>

                            <div className='mb-6'>
                                <p className='text-center text-[16px] font-thin mb-2' style={{ color: "#FFFFFF" }}>Select Services to Build your quote </p>
                                <hr className='text-[#CAC4D0]' style={{ color: "#CAC4D0" }} />
                                <div className='flex text-sm  items-center justify-between my-2'>
                                    <p className='uppercase  text-[13px] font-medium'>total Monthly cost:</p>
                                    <p className=' text-[13px] font-medium' style={{ color: "#00AEEF" }}>$0.00</p>
                                </div>
                                <div className='uppercase w-1/2 mx-auto p-[17px] border rounded-md border-[#064462] mt-6 justify-center text-center '>Start risk free poc</div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>



            {/* Resource Library */}

            <div>
                <div className="container mx-auto px-[16px] md:px-6">
                    <div className='mb-12'>
                    <h1 className='text-2xl md:text-4xl lg:text-[40px] font-bold text-center'>Resource Library
                    </h1>
                    <p className='text-center text-[18px] mt-3'>Your one-stop shop for all sales, marketing, technical, and legal collateral.</p>

                </div>

                <div className=" w-full max-w-[650px] mx-auto flex flex-wrap justify-between gap-3 md:gap-5">
                    {tabs.map((tab, index) => (
                        <p
                            key={index}
                            className={`inline px-8 py-3 cursor-pointer font-bold text-[14px] rounded-4xl border border-[#00AEEF] ${index === 0 ? 'bg-[#00AEEF] text-white' : ''
                                }`}
                        >
                            {tab}
                        </p>
                    ))}
                </div>

                <div className='grid grid-cols-1  md:grid-cols-3 gap-4 w-full max-w-4xl mx-auto mt-12'>
                    <div className='relative bg-[#00AEEF3D] py-[32px] px-3  lg:px-[21px] rounded-[16px] flex flex-col justify-center items-center'>
                        <div
                            className="absolute inset-0 rounded-[16px] p-[2px] z-0"
                            style={{
                                background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
             linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                WebkitMaskComposite: "xor",
                                maskComposite: "exclude",
                            }}
                        />
                        <p className='text-white text-sm mb-2'>Add Icon</p>
                        <h3 className="text-xl text-center font-bold text-[#00AEEF] mb-3 " style={{ color: "#00AEEF" }}>Upsell Playbook</h3>
                        <p className='bg-[#00AEEF] px-6 py-2 rounded-lg uppercase'>Access</p>
                    </div>

                    <div className='relative bg-[#00AEEF3D] py-[32px] px-3  lg:px-[21px] rounded-[16px] flex flex-col justify-center items-center'>
                        <div
                            className="absolute inset-0 rounded-[16px] p-[2px] z-0"
                            style={{
                                background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
             linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                WebkitMaskComposite: "xor",
                                maskComposite: "exclude",
                            }}
                        />
                        <p className='text-white text-sm mb-2'>Add Icon</p>
                        <h3 className="text-xl text-center font-bold text-[#00AEEF] mb-3 " style={{ color: "#00AEEF" }}>Competitive <br /> Battlecards</h3>
                        <p className='bg-[#00AEEF] px-6 py-2 rounded-lg uppercase'>Access</p>
                    </div>

                    <div className='relative bg-[#00AEEF3D] py-[32px] px-3  lg:px-[21px] rounded-[16px] flex flex-col justify-center items-center'>
                        <div
                            className="absolute inset-0 rounded-[16px] p-[2px] z-0"
                            style={{
                                background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
             linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                WebkitMaskComposite: "xor",
                                maskComposite: "exclude",
                            }}
                        />
                        <p className='text-white text-sm mb-2'>Add Icon</p>
                        <h3 className="text-xl text-center font-bold text-[#00AEEF] mb-3 " style={{ color: "#00AEEF" }}>Technical Guides</h3>
                        <p className='bg-[#00AEEF] px-6 py-2 rounded-lg uppercase'>Access</p>
                    </div>

                    <div className=' md:col-span-3 md:flex md:justify-center md:gap-4 '>

                        <div className='w-full md:max-w-[288px] relative bg-[#00AEEF3D] py-[32px] px-3  lg:px-[21px] rounded-[16px] flex flex-col justify-center items-center'>
                            <div
                                className="absolute inset-0 rounded-[16px] p-[2px] z-0"
                                style={{
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
             linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude",
                                }}
                            />
                            <p className='text-white text-sm mb-2'>Add Icon</p>
                            <h3 className="text-xl text-center font-bold text-[#00AEEF] mb-3 " style={{ color: "#00AEEF" }}>Master Services <br /> Agreement</h3>
                            <p className='bg-[#00AEEF] px-6 py-2 rounded-lg uppercase'>Access</p>
                        </div>

                        <div className='w-full md:max-w-[288px] mt-4 md:mt-0  relative bg-[#00AEEF3D] py-[32px] px-3  lg:px-[21px] rounded-[16px] flex flex-col justify-center items-center'>
                            <div
                                className="absolute inset-0 rounded-[16px] p-[2px] z-0"
                                style={{
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
             linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,0) 66.77%)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude",
                                }}
                            />
                            <p className='text-white text-sm mb-2'>Add Icon</p>
                            <h3 className="text-xl text-center font-bold text-[#00AEEF] mb-3 " style={{ color: "#00AEEF" }}>Statement of Work <br /> (SOW)</h3>
                            <p className='bg-[#00AEEF] px-6 py-2 rounded-lg uppercase'>Access</p>
                        </div>
                    </div>

                </div>
                </div>
            </div>

            {/* Dedicated Partner Support */}





            <div className='mt-12'>
                <Heading_Btn
                    h1="Dedicated Partner Support"
                    desc="Questions? Need help with a co-pitch? We're here for you."
                    btn4="contact your partner success manager"
                />
            </div>

        </div>


    );
};

export default Dashbord;