import GradientButton from '@components/GradientButton';
import React from 'react';
import cp1 from "../../Assets/cp1.png";
import { Check, Download } from 'lucide-react';
import CardContent from '@components/CardContent';
import CardBorder from '@components/CardBorder';
import Heading_Btn from '@components/Heading_Btn';
import { Link } from 'react-router-dom';
import fourCircle from "../../Assets/four-circle.png"
import subtract from "../../Assets/Subtract.png"



const modules = [
    {
        id: 1,
        icon: cp1,
        title: "Focus on Sales, Not Security",
        description:
            "No more time wasted on security alerts, log analysis, or compliance reports. Our 24/7 SOC handles everything, letting you concentrate on winning new clients and growing revenue.",

    },
    {
        id: 2,
        icon: cp1,
        title: "Predictable Pricing,\nBetter Margins",
        description:
            "Simple per-employee pricing means easy quotes and healthy margins. No surprise costs, no complex licensing. Price it once, profit forever.",

    },
    {
        id: 3,
        icon: cp1,
        title: "Deploy in 1 Hour",
        description:
            "From contract to protection in just 60 minutes. No infrastructure to build, no teams to hire. Just instant enterprise-grade security for all your clients.",

    },
    {
        id: 4,
        icon: cp1,
        title: "Works with Your PSA",
        description:
            "Seamless integration with ConnectWise and Autotask. Tickets flow automatically, documentation stays in sync, and billing just works.",

    },
    {
        id: 5,
        icon: cp1,
        title: "Complete Protection",
        description:
            "EDR, identity protection, vulnerability management, SIEM, and 24/7 SOC - all included. One vendor, one invoice, total coverage.",

    },
    {
        id: 6,
        icon: cp1,
        title: "White-Label Ready",
        description:
            "Deliver enterprise security under your brand. Custom reports, branded portal, your logo everywhere. Your clients, your success story.",

    },
    {
        id: 7,
        icon: cp1,
        title: "We Help You Sell",
        description:
            "Get qualified leads, sales training, and marketing support. We provide the collateral, campaigns, and even help close deals. Your growth is our success",
        middle: true,

    },
]


const services = [
    {
        title: "Endpoint Detection & Response",
        description: "CrowdStrike Falcon EDR/XDR protects every device with:",
        features: [
            "Real-time threat detection",
            "Automated containment",
            "Lightweight agent (< 1% CPU)",
            "Cloud-native architecture",
        ],
        downloadText: "Download EDR Datasheet",
    },
    {
        title: "Identity Protection (ITDR)",
        description: "Stop identity-based attacks before they spread:",
        features: [
            "Microsoft 365 & Azure AD monitoring",
            "Behavioral analytics",
            "MFA enforcement",
            "Privileged account protection",
        ],
        downloadText: "Download Identity Protection Guide",
    },
    {
        title: "Vulnerability & Exposure Management",
        description: "Find and fix vulnerabilities automatically:",
        features: [
            "Real-time asset discovery",
            "Risk-based prioritization",
            "Compliance scanning",
            "Shadow IT detection",
        ],
        downloadText: "Download Visibility Datasheet",
    },
    {
        title: "SIEM & Log Management",
        description: "Enterprise SIEM without the complexity:",
        features: ["12-month hot storage", "7-year compliance archive", "Unlimited log ingestion", "Custom dashboards"],
        downloadText: "Download SIEM Overview",
    },
    {
        title: "24/7 SOC & Incident Response",
        description: "US-based security team, always on guard:",
        features: [
            "Real-time threat monitoring",
            "15-minute response SLA",
            "Full remediation included",
            "Monthly security reviews",
        ],
        downloadText: "Download Complete Bundle Info",
    },
    {
        title: "Compliance & Reporting",
        description: "Stay compliant without the headache:",
        features: [
            "HIPAA, PCI, CMMC templates",
            "Automated evidence collection",
            "White-label reports",
            "Audit-ready documentation",
        ],
        downloadText: "Download Compliance Guide",
    },
]

const features = [
    "All security modules included",
    "24/7 US-based SOC",
    "Unlimited devices per employee",
    "PSA integration included",
    "White-label portal & reports",
    "Lead generation & sales supports",
    "Marketing materials & campaigns",
    "No setup or onboarding fees",
    "Monthly billing available",
]



const ThreatremediateRemotePricing = () => {
    return (
        <div className='container mx-auto px-6 pt-[150px]'>
            {/*  */}
            <section className='container mx-auto px-6 py-16 '>
                <div className='mb-10'>
                    <h1 className='text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-8    leading-14 md:leading-16'>Stop Managing Security. <br /> Start Growing Your MSP.</h1>
                    <p className='text-[18px] font-medium text-center'>Complete cybersecurity for growth-focused MSPs. <br /> One price. Zero complexity. Total protection.</p>
                </div>
                <div className='flex justify-center mx-auto'>
                    <GradientButton children={"SEE HOW IT WORKS"}/>
                </div>
                
            </section>

            {/*  */}
            <section className=" relative overflow-hidden">
                <div className="relative z-10 py-12">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-3xl md:text-[40px] font-bold text-white mb-3">Built for Sales-Focused MSPs Like You</h1>
                        <p className=' text-[18px]'>You're busy closing deals and growing your business. Let us handle the complex security operations <br /> AND help you win more clients.</p>
                    </div>

                    {/* Modules Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
                        {modules.map((module) => (
                            <div
                                key={module.id}
                                className={`relative rounded-[24px] px-[15px] py-[40px] md:px-[32px] bg-[#00AEEF3D] backdrop-blur-sm ${module.middle ? "md:col-span-2 flex flex-col justify-center w-auto md:w-[534px] mx-auto" : ""}`}>
                                <div
                                    className={`absolute inset-0 rounded-[24px] p-[2px] z-0 $`}
                                    style={{
                                        background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                                        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                        WebkitMaskComposite: "xor",
                                        maskComposite: "exclude",
                                    }}
                                />
                                {/* Icon and Header */}
                                <div className="flex flex-row items-center gap-4 mb-6">
                                    <div className="">
                                        <img src={cp1} alt="" className='w-[64px] h-[64px]' />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-[24px] whitespace-pre-line font-medium text-white mb-2">{module.title}</h3>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-white text-[18px] leading-relaxed">{module.description}</p>
                            </div>
                        ))}
                    </div>
                </div>


            </section>


            {/*  */}
            <section className=" relative overflow-hidden">
                <div className="relative z-10 py-16">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-3xl md:text-[40px] text-center font-bold text-white mb-3">
                            Everything You Need in One Bundle
                        </h1>
                        <p className="text-[18px] text-center leading-relaxed">
                            No more juggling multiple vendors or complex integrations. ThreatRemediate Remote includes <br /> everything.
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className=" bg-[#00AEEF3D] backdrop-blur-sm rounded-2xl p-6 relative flex flex-col justify-between">
                                <div
                                    className={`absolute inset-0 rounded-[16px] p-[2px] z-0 $`}
                                    style={{
                                        background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                                        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                        WebkitMaskComposite: "xor",
                                        maskComposite: "exclude",
                                    }}
                                />
                                {/* ADD ICON Button */}
                                <div className="flex justify-center items-center mx-auto">
                                    <button className="bg-[#F1511B] text-white px-3 py-1.5 rounded-[15px] text-[10px] font-bold ">
                                        ADD ICON
                                    </button>
                                </div>

                                {/* Content */}
                                <div className="pt-5">
                                    <h3 className="text-[24px] text-center font-medium text-white mb-4 leading-tight">
                                        {service.title}
                                    </h3>

                                    <p className="text-white text-[16px] mb-6 leading-relaxed">
                                        {service.description}
                                    </p>

                                    <ul className="space-y-2 pl-3 mb-8">
                                        {service.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-start ">
                                                <span className=" mr-2">•</span>
                                                <span className='text-[18px]'>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Download Link */}
                                    <div className="flex items-center justify-center gap-0.5  mt-auto">
                                        <img src={fourCircle} alt="" className='w-[13px] h-[11px]' />
                                        <span className="text-[16px] " style={{color: '#00AEEF'}}>
                                            {service.downloadText}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/*  */}
            <div className=" py-16">
                <div className="">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-3xl md:text-[40px] font-bold text-white mb-3">Simple, Transparent Pricing</h1>
                        <p className=" text-lg">No hidden fees. No complex licensing. Just one price per employee.</p>
                    </div>

                    {/* Pricing Card */}
                    <div className="flex flex-col justify-center items-center mx-auto w-fit rounded-lg p-8 text-white" style={{
                        background: "linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)"
                    }}>
                        {/* Product Name */}
                        <h2 className="text-lg md:text-[20px] font-bold text-center mb-2">ThreatRemediate Remote</h2>

                        {/* Price */}
                        <div className="text-center mb-6">
                            <div className="text-[66px] font-semibold " style={{
                                background: "linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}>$12.99</div>
                            <div className="text-[14px] bold">Per employee, per Month</div>
                        </div>

                        {/* Promotional Text */}
                        <div className="mb-6">
                            <p className=" text-[14px] font-medium mb-1" style={{
                                background: "linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}>
                                June Special: Additional 15% off with annual payment
                            </p>
                            <p className=" text-[14px] font-medium mb-1" style={{
                                background: "linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}>Lock in this price through 2026!</p>
                        </div>

                        {/* Features List */}
                        <div className="space-y-3 mb-8">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div className="flex-shrink-0">
                                        <div className=" flex items-center justify-center">
                                            <img src={subtract} alt="" className='w-[20px] h-[20px]' />
                                        </div>
                                    </div>
                                    <span className="text-sm text-[#F5F5F5]">{feature}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <Link to={"/pricing-tool"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                        
                            <button className="w-full text-white font-bold py-[18px] px-[65px] rounded-[4px] text-[15px]" style={{
                                background: "linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)"
                            }}>
                                Get your custom quote
                            </button>
                        </Link>
                    </div>
                </div>
            </div>


            {/*  */}
            <section className=" py-16">

                <div className="">
                    {/* First Section */}
                    <div className="text-center mb-12">
                        <h1 className="text-3xl md:text-[40px] font-bold mb-3">Works Seamlessly with Your PSA</h1>
                        <p className=" text-lg text-center">
                            Automated ticket creation, synchronized documentation, and streamlined billing.
                        </p>
                    </div>

                    {/* Integration Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
                        <div className="relative flex items-center justify-center rounded-[16px] p-8 text-center " style={{
                            background: `linear-gradient(0deg, rgba(0, 0, 0, 0.33), rgba(0, 0, 0, 0.33)),linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2))`
                        }}>
                            <div
                                className={`absolute inset-0 rounded-[16px] p-[1px] z-0 `}
                                style={{
                                    background: "conic-gradient(from 180deg at 50% 50%, #FF98E2 0deg, #FFC876 35.77deg, #79FFF7 153.75deg, #9F53FF 258.75deg, #FF98E2 360deg)",
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude",
                                }}
                            />
                            <h3 className="text-2xl lg:text-[32px] font-medium text-white">ConnectWise</h3>
                        </div>

                        <div className="relative flex items-center justify-center rounded-[16px] p-8 text-center " style={{
                            background: `linear-gradient(0deg, rgba(0, 0, 0, 0.33), rgba(0, 0, 0, 0.33)),linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2))`
                        }}>
                            <div
                                className={`absolute inset-0 rounded-[16px] p-[1px] z-0 `}
                                style={{
                                    background: "conic-gradient(from 180deg at 50% 50%, #FF98E2 0deg, #FFC876 35.77deg, #79FFF7 153.75deg, #9F53FF 258.75deg, #FF98E2 360deg)",
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude",
                                }}
                            />
                            <h3 className="text-2xl lg:text-[32px]font-medium text-white">Autotask <br /> (Datto)</h3>
                        </div>

                        <div className="relative flex items-center justify-center rounded-[16px] p-8 text-center " style={{
                            background: `linear-gradient(0deg, rgba(0, 0, 0, 0.33), rgba(0, 0, 0, 0.33)),linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2))`
                        }}>
                            <div
                                className={`absolute inset-0 rounded-[16px] p-[1px] z-0 `}
                                style={{
                                    background: "conic-gradient(from 180deg at 50% 50%, #FF98E2 0deg, #FFC876 35.77deg, #79FFF7 153.75deg, #9F53FF 258.75deg, #FF98E2 360deg)",
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude",
                                }}
                            />
                            <h3 className="text-2xl lg:text-[32px] font-medium text-white">ServiceNow</h3>
                        </div>

                        <div className="relative flex items-center justify-center rounded-[16px] p-8 text-center " style={{
                            background: `linear-gradient(0deg, rgba(0, 0, 0, 0.33), rgba(0, 0, 0, 0.33)),linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2))`
                        }}>
                            <div
                                className={`absolute inset-0 rounded-[16px] p-[1px] z-0 `}
                                style={{
                                    background: "conic-gradient(from 180deg at 50% 50%, #FF98E2 0deg, #FFC876 35.77deg, #79FFF7 153.75deg, #9F53FF 258.75deg, #FF98E2 360deg)",
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude",
                                }}
                            />
                            <h3 className="text-2xl lg:text-[32px] font-medium text-white">Zendesk</h3>
                        </div>
                    </div>
                </div>
            </section>



            {/*  */}
            <section className='pb-16'>
                {/* Second Section */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-[40px] font-bold mb-3">Get Your Selected Resources</h2>
                    <p className=" text-lg text-center ">
                        Share your thoughts and experiences with malware-free attacks in the comments <br /> below.
                    </p>
                </div>

                {/* Resources Section */}
                <div className="max-w-2xl mx-auto">
                    <div className="bg-[#00AEEF] rounded-2xl py-[52px] px-5 md:px-7 lg:px-[67px] mb-6">
                        <h3 className="text-2xl md:text-[30px] font-bold mb-4 text-white">You've selected these resources:</h3>
                        <ul className="text-white text-lg md:text-[20px]">
                            <li className="flex items-center">
                                <span className="mr-2">•</span>
                                No resources selected yet
                            </li>
                        </ul>
                        <p className="text-white underline mt-3 inline-block ">
                            Select more resources above
                        </p>
                    </div>

                    {/* Email Input */}
                    <div className="mb-6">
                        <input
                            type="email"
                            placeholder="Enter your Email"
                            className="w-full px-4 py-[18px] rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className='w-full border text-center border-[#00AEEF] py-[12px] px-[24px] rounded-[8px]'>
                        <button className=" font-semibold text-[14px]" style={{color: "#00AEEF"}}>
                            Send me these Resources
                        </button>
                    </div>

                </div>
            </section>



            {/*  */}
            <section className=" pb-[120px] pt-[30px]">
                <div className='mb-12'>
                    <h1 className='text-3xl md:text-[40px] font-bold text-center mb-3'>Get Your Custom Proposal</h1>
                    <p className='text-[14px] text-center'>Tell us about your MSP and we'll create a customized proposal showing exactly how <br /> ThreatRemediate Remote can help you grow.</p>
                </div>
                <div className="relative bg-[#00AEEF3D] p-5 md:p-10 rounded-[24px] w-full md:max-w-lg mx-auto">
                    <div
                        className={`absolute inset-0 rounded-[24px] p-[2px] z-0`}
                        style={{
                            background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                            WebkitMaskComposite: "xor",
                            maskComposite: "exclude",
                        }}
                    />
                    <form className="space-y-5 text-white">
                        {/* Input Fields */}
                        <div className='relative z-10 '>
                            <label className='text-lg md:text-[20px] font-bold'>Your Name *</label>
                            <input type="text" className="mt-1 w-full p-[16px] rounded-[16px] text-[16px] bg-[#97D0FA3D] focus:bg-[#00AEEF3D] border border-none focus:border-1 focus:outline-none focus:ring-1 focus:ring-[#FFFFFF80]" />
                        </div>

                        <div className='relative z-10 '>
                            <label className='text-lg md:text-[20px] font-bold'>Email *</label>
                            <input type="email" className="mt-1 w-full p-[16px] rounded-[16px] text-[16px] bg-[#97D0FA3D] focus:bg-[#00AEEF3D] border border-none focus:border-1 focus:outline-none focus:ring-1 focus:ring-[#FFFFFF80]" />
                        </div>

                        <div className='relative z-10 '>
                            <label className='text-lg md:text-[20px] font-bold'>Company Name *</label>
                            <input type="text" className="mt-1 w-full p-[16px] rounded-[16px] text-[16px] bg-[#97D0FA3D] focus:bg-[#00AEEF3D] border border-none focus:border-1 focus:outline-none focus:ring-1 focus:ring-[#FFFFFF80]" />
                        </div>

                        <div className='relative z-10 '>
                            <label className='text-lg md:text-[20px] font-bold'>Phone Number</label>
                            <input type="text" className="mt-1 w-full p-[16px] rounded-[16px] text-[16px] bg-[#97D0FA3D] focus:bg-[#00AEEF3D] border border-none focus:border-1 focus:outline-none focus:ring-1 focus:ring-[#FFFFFF80]" />
                        </div>

                        <div className='relative z-10 '>
                            <label className='text-lg md:text-[20px] font-bold'>Number of Employees in Your MSP *</label>
                            <select className="mt-1 w-full p-[16px] rounded-[16px] text-[16px] bg-[#97D0FA3D] focus:bg-[#00AEEF3D] border border-none focus:border-1 focus:outline-none focus:ring-1 focus:ring-[#FFFFFF80]">
                                <option className='text-black' style={{color: "black"}}>Select</option>
                                <option className='text-black' style={{color: "black"}}>1-10</option>
                                <option className='text-black' style={{color: "black"}}>11-50</option>
                                <option className='text-black' style={{color: "black"}}>51-100</option>
                            </select>
                        </div>

                        <div className='relative z-10 '>
                            <label className='text-lg md:text-[20px] font-bold'>Average Client Size (Employees) *</label>
                            <select className="mt-1 w-full p-[16px] rounded-[16px] text-[16px] bg-[#97D0FA3D] focus:bg-[#00AEEF3D] border border-none focus:border-1 focus:outline-none focus:ring-1 focus:ring-[#FFFFFF80]">
                                <option className='text-black' style={{color: "black"}}>Select</option>
                                <option className='text-black' style={{color: "black"}}>1-20</option>
                                <option className='text-black' style={{color: "black"}}>21-100</option>
                                <option className='text-black' style={{color: "black"}}>100+</option>
                            </select>
                        </div>

                        <div className='relative z-10 '>
                            <label className='text-lg md:text-[20px] font-bold'>Number of Clients</label>
                            <input type="text" className="mt-1 w-full p-[16px] rounded-[16px] text-[16px] bg-[#97D0FA3D] focus:bg-[#00AEEF3D] border border-none focus:border-1 focus:outline-none focus:ring-1 focus:ring-[#FFFFFF80]" />
                        </div>

                        <div className='relative z-10 '>
                            <label className='text-lg md:text-[20px] font-bold'>Current PSA Platform</label>
                            <select className="mt-1 w-full p-[16px] rounded-[16px] text-[16px] bg-[#97D0FA3D] focus:bg-[#00AEEF3D] border border-none focus:border-1 focus:outline-none focus:ring-1 focus:ring-[#FFFFFF80]">
                                <option className='text-black' style={{color: "black"}}>Select</option>
                                <option className='text-black' style={{color: "black"}}>ConnectWise</option>
                                <option className='text-black' style={{color: "black"}}>Autotask</option>
                                <option className='text-black' style={{color: "black"}}>Other</option>
                            </select>
                        </div>

                        <div className='relative z-10 '>
                            <label className='text-lg md:text-[20px] font-bold !mb-[8px]'>Tell us about your security challenges</label>
                            <textarea
                                rows="4"
                                placeholder="What are your biggest pain points with cyber security today?"
                                className="!mt-[12px] w-full p-[16px] min-h-[200px] rounded-[16px] text-[16px] bg-[#97D0FA3D] focus:bg-[#00AEEF3D] border border-none focus:border-1 focus:outline-none focus:ring-1 focus:ring-[#FFFFFF80]"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-2">
                            <button
                                type="submit"
                                className="w-full py-[16px] px-[24px] rounded-[16px] text-[16px] text-white font-semibold"
                                style={{
                                    background: "linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)"
                                }}>
                                Get my Custom Proposal
                            </button>
                        </div>
                    </form>
                </div>
            </section>


        </div >
    );
};

export default ThreatremediateRemotePricing;