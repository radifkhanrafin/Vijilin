import React from 'react';
import check from "../../images/check.svg";
import line from "../../images/line.svg";
import Heading_Btn from '@components/Heading_Btn';

export default function Partnership() {
    return (
        <div className='container mx-auto px-2 md:px-6 py-16'>

            <Heading_Btn

                h1=" You're One Step Away from a More  Profitable Partnership."
                desc="Complete the form below to join the Vijilan Partner Network. Our team will review 
                    your application and grant you access to our Partner Portal, sales enablement kit,  
                    and pricing simulator within the hour."

            />

            <div className="relative bg-[#00AEEF3D] rounded-[24px] p-5 sm:p-8 md:p-14 text-white w-full flex flex-col md:flex-row gap-12 items-center" style={{
                border: '1px solid transparent',
                backgroundClip: 'padding-box',
                position: 'relative',
                overflow: 'hidden'
            }}>

                {/* Border Gradients */}
                <div className="absolute inset-0 rounded-[24px] p-[1px] pointer-events-none"
                    style={{
                        background: 'linear-gradient(135deg, rgba(0,174,239,0.8) 0%, rgba(0,174,239,0.2) 50%, rgba(0,174,239,0) 100%)',
                        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'xor',
                        maskComposite: 'exclude',
                        zIndex: 0
                    }}
                />


                {/* Left: Form */}
                <div className="w-full">
                    <h2 className="text-2xl md:text-[32px] text-[#FFFFFF] font-bold mb-6">Partner Application</h2>
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <input type="text" placeholder="First Name" className="p-3 rounded-[16px] text-sm md:text-[16px] bg-[#97D0FA3D] focus:bg-[#00AEEF3D] border border-none focus:border-1 focus:outline-none focus:ring-1 focus:ring-[#FFFFFF80]" />
                        <input type="text" placeholder="Last Name" className="p-3 rounded-[16px] text-sm md:text-[16px] bg-[#97D0FA3D] focus:bg-[#00AEEF3D] border border-none focus:border-1 focus:outline-none focus:ring-1 focus:ring-[#FFFFFF80]" />
                        <input type="text" placeholder="Company Name" className="p-3 rounded-[16px] text-sm md:text-[16px] bg-[#97D0FA3D] focus:bg-[#00AEEF3D] border border-none focus:border-1 focus:outline-none focus:ring-1 focus:ring-[#FFFFFF80]" />
                        <input type="email" placeholder="Work Email" className="p-3 rounded-[16px] text-sm md:text-[16px] bg-[#97D0FA3D] focus:bg-[#00AEEF3D] border border-none focus:border-1 focus:outline-none focus:ring-1 focus:ring-[#FFFFFF80]" />
                        <input type="text" placeholder="Phone Number" className="p-3 rounded-[16px] text-sm md:text-[16px] bg-[#97D0FA3D] focus:bg-[#00AEEF3D] border border-none focus:border-1 focus:outline-none focus:ring-1 focus:ring-[#FFFFFF80]" />
                        <input type="text" placeholder="Company Website" className="p-3 rounded-[16px] text-sm md:text-[16px] bg-[#97D0FA3D] focus:bg-[#00AEEF3D] border border-none focus:border-1 focus:outline-none focus:ring-1 focus:ring-[#FFFFFF80]" />
                        <select className="appearance-none focus:bg-opacity-25 p-3 rounded-[16px] text-sm md:text-[16px] bg-[#97D0FA3D] focus:bg-[#00AEEF3D]  border border-none focus:border-1 focus:outline-none focus:ring-1 focus:ring-[#FFFFFF80]">
                            <option className='text-black'>Partner Type</option>
                            <option className='text-black'>MSP</option>
                            <option className='text-black'>MSSP</option>
                            <option className='text-black'>Reseller</option>
                        </select>
                        <select
                            className="p-3 rounded-[16px] text-[16px] bg-[#97D0FA3D] focus:bg-[#00AEEF3D] border border-none focus:border-1 focus:outline-none focus:ring-1 focus:ring-[#FFFFFF80]"
                            defaultValue="">
                            <option value="" disabled className='text-black'>
                                No. of Endpoints You Manage
                            </option>
                            <option value="1" className='text-black'>1</option>
                            <option value="2" className='text-black'>2</option>
                            <option value="3" className='text-black'>3</option>
                        </select>
                        <div className="col-span-1 md:col-span-2">
                            <button
                                type="submit"
                                className="w-full p-3 rounded-[16px] text-white font-semibold hover:opacity-90 transition duration-300"
                                style={{
                                    backgroundImage: "linear-gradient(to right, #F89B29, #FF0F7B)",
                                }}
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>

                {/* Divider Image */}
                <div className="hidden md:flex justify-center items-center  h-full">
                    <img
                        src={line}
                        alt="Divider"
                        className=""
                    />
                </div>

                {/* Right: Info Box */}
                <div className="w-full space-y-6">
                    <h2 className="text-2xl md:text-[32px] text-[#FFFFFF] font-bold mb-6">What Happens Next?</h2>
                    <ul className="text-[14px] space-y-2 text-gray-200">
                        <li>
                            <span className="font-bold text-sm md:text-[20px]">1- Instant Confirmation</span><br />
                            You’ll receive an email confirming we’ve received your <br /> application
                        </li>
                        <li>
                            <span className="font-bold text-sm md:text-[20px]">2-  Team Review</span><br />
                            You’ll receive an email confirming we’ve received your <br /> application
                        </li>
                        <li>
                            <span className="font-bold text-sm md:text-[20px]">3- Portal Access</span><br />
                            Upon approval, you’ll receive your login credentials for the <br /> Partner Portal.
                        </li>
                        <li>
                            <span className="font-bold text-sm md:text-[20px]">4- Welcome & Onboarding</span><br />
                            Your dedicated Partner Manager will reach out to schedule <br /> a brief welcome call.
                        </li>
                    </ul>
                </div>
            </div>

            <div className='flex justify-end mt-5 md:-mt-[20px] lg:-mt-[50px] sm:mr-[50px]'>
                <div className="w-fit bg-[#80808080] p-4 rounded-[16px] text-white relative">
                    {/* Background element for the content */}
                    <div className="relative z-10">
                        <h4 className="text-md font-semibold text-[#00AEEF] mb-2">Your Portal Access Unlocks</h4>
                        <div className="space-y-2">
                            <div className='flex gap-1 items-center'>
                                <img src={check} className='w-[17px] h-[17px]' alt="Checkmark" />
                                <span className='text-[16px]'>Interactive Pricing Simulator & Quoting Tool</span>
                            </div>
                            <div className='flex gap-1 items-center'>
                                <img src={check} className='w-[17px] h-[17px]' alt="Checkmark" />
                                <span className='text-[16px]'>The Full Sales & Marketing Enablement Kit</span>
                            </div>
                            <div className='flex gap-1 items-center'>
                                <img src={check} className='w-[17px] h-[17px]' alt="Checkmark" />
                                <span className='text-[16px]'>Not-For-Resale (NFR) Licenses for Internal Use</span>
                            </div>
                            <div className='flex gap-1 items-center'>
                                <img src={check} className='w-[17px] h-[17px]' alt="Checkmark" />
                                <span className='text-[16px]'>Dedicated Partner Manager Support</span>
                            </div>
                        </div>
                    </div>

                    {/* Gradient border using pseudo-elements */}
                    <div
                        className="absolute inset-0 rounded-[16px] p-[1px]"
                        style={{
                            background: "conic-gradient(from 180deg at 50% 50%, #FF98E2 0deg, #FFC876 35.77deg, #79FFF7 153.75deg, #9F53FF 258.75deg, #FF98E2 360deg)",
                            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                            WebkitMaskComposite: "xor",
                            maskComposite: "exclude",
                            zIndex: 0
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

