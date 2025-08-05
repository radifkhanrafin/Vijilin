import React from 'react';
import { Link } from 'react-router-dom';

const AccessRequest = () => {
    return (
        <div className='container mx-auto px-6'>
            {/*  */}
            <section className="pt-[180px]">
                <div className='mb-12'>
                    <h1 className='text-2xl md:text-[48px] font-bold text-center mb-3'>Unlock the Vijilan Partner Prospect Portal</h1>
                    <p className='text-center text-[18px]'>Gain instant, exclusive access to our interactive pricing simulator, sales & marketing <br /> kits, and insider news.</p>
                </div>
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Left Section */}
                        <div className="relative bg-[#00AEEF3D] rounded-[24px] py-[40px] px-[32px] backdrop-blur-sm">
                            <div
                                className={`absolute inset-0 rounded-[24px] p-[2px] z-0 `}
                                style={{
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude",
                                }}
                            />
                            <p className="text-white text-lg leading-relaxed mb-8">
                                See exactly how a partnership with Vijilan can drive profitable growth for your business. Our Prospect
                                Portal gives you the tools and information you need to start building and selling enterprise-grade
                                security solutions today.
                            </p>

                            <div className="border border-[#37D962D6] rounded-lg p-6 text-lg font-medium ">
                                <p className="text-white text-center text-sm">
                                    your information is secure and will only be used to provide access to partner resources.
                                </p>
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className="relative bg-[#00AEEF3D] rounded-[24px] py-[40px] px-[32px] backdrop-blur-sm">
                            <div
                                className={`absolute inset-0 rounded-[24px] p-[2px] z-0 `}
                                style={{
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude",
                                }}
                            />
                            <h2 className="text-white text-2xl font-medium mb-8">What's Inside the Portal:</h2>

                            <ul className="space-y-4">
                                <li className="flex items-start text-white">
                                    <span className=" mr-3 text-[18px]">•</span>
                                    <span className="text-lg">Interactive Pricing & Quoting Simulator</span>
                                </li>

                                <li className="flex items-start text-white">
                                    <span className="text-teal-400 mr-3 mt-1">•</span>
                                    <span className="text-lg">Full Sales & Marketing Enablement Kit</span>
                                </li>

                                <li className="flex items-start text-white">
                                    <span className="text-teal-400 mr-3 mt-1">•</span>
                                    <span className="text-lg">Co-Brandable Datasheets & One-Pagers</span>
                                </li>

                                <li className="flex items-start text-white">
                                    <span className="text-teal-400 mr-3 mt-1">•</span>
                                    <span className="text-lg">Exclusive "Insider" Product News & Updates</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>


            {/*  */}
            <div className=" py-16" >
                <div className="w-full max-w-2xl rounded-[24px] p-[38px] mx-auto" style={{
                    background: "linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)"
                }}>
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-2xl md:text-[40px] font-bold text-white mb-3">Request Your Instant Access</h1>
                        <p className=" text-[18px]">Complete the form below to unlock your exclusive partner resources</p>
                    </div>

                    {/* Form Container */}
                    <div className="relative mx-w-md mx-auto bg-[#00AEEF3D] rounded-[24px] p-[40px]">
                        <div
                            className={`absolute inset-0 rounded-[24px] p-[2px] z-0 `}
                            style={{
                                background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                WebkitMaskComposite: "xor",
                                maskComposite: "exclude",
                            }}
                        />
                        <form className="space-y-6">
                            {/* Full Name */}
                            <div className='relative z-10'>
                                <label className="block text-white text-sm mb-2">
                                    Full name*
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your Full name"
                                    className="w-full px-4 py-3 rounded-xl bg-white border-0 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-300 placeholder:text-[14px]"
                                    required
                                />
                            </div>

                            {/* Company Name */}
                            <div className='relative z-10'>
                                <label className="block text-white text-sm font-medium mb-2">
                                    Company Name*
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your company name"
                                    className="w-full px-4 py-3 rounded-xl bg-white border-0 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-300 placeholder:text-[14px]"
                                    required
                                />
                            </div>

                            {/* Work Email */}
                            <div className='relative z-10'>
                                <label className="block text-white text-sm font-medium mb-2">
                                    Work Email*
                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter your work email"
                                    className="w-full px-4 py-3 rounded-xl bg-white border-0 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-300 placeholder:text-[14px]"
                                    required
                                />
                            </div>

                            {/* Partner Type */}
                            <div className='relative z-10'>
                                <label className="block text-white text-sm font-medium mb-2">
                                    Partner Type*
                                </label>
                                <select
                                    className="w-full px-4 py-3 rounded-xl bg-white border-0 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-300 placeholder:text-[14px]"
                                    defaultValue="">
                                    <option value="" disabled className="text-black">
                                        Select your Partner Type
                                    </option>
                                    <option value="technology" className="text-black">Technology Partner</option>
                                    <option value="channel" className="text-black">Channel Partner</option>

                                </select>
                            </div>

                        </form>

                    </div>

                    <Link to={"/dashbord"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className='flex items-center justify-center mx-auto mt-5'>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-fit rounded-[8px] text-[16px] font-bold py-[12px] px-[24px]" style={{
                                background: "linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)"
                            }}>
                            GET INSTANT ACCESS
                        </button>
                    </Link>


                    {/* Footer Text */}
                    <p className="text-center text-[18px] mt-5">
                        Access is typically granted within minutes. Check your email for portal <br /> login details.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AccessRequest;