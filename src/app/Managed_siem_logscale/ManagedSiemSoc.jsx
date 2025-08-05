import CardBorder from '@components/CardBorder';
import GradientButton from '@components/GradientButton';
import OutlineGradientButton from '@components/OutlineGradientButton';
import React from 'react';
import Branding from "../../Assets/Branding.svg";
import gear from "../../Assets/gear.svg";
import electric from "../../Assets/electric.svg";
import hand from "../../Assets/hand.svg";
import TestimonialCard from '@components/TestimonialCard';
import ServiceCard from '@components/ServiceCard';
import Heading_Btn from '@components/Heading_Btn';
import { Link } from 'react-router-dom';

const cardData = [
    {
        icon: Branding,
        title: "Complex & Costly",
        desc: "Legacy SIEMs require specialized expertise, extensive customization, and ongoing maintenance. Hidden costs in professional services, training, and infrastructure add up quickly.",
    },
    {
        icon: gear,
        title: "High Data Costs",
        desc: "Per-GB pricing models make data ingestion prohibitively expensive. Organizations are forced to limit their security visibility due to cost constraints, creating blind spots.",
    },
    {
        icon: electric,
        title: "Slow & Inefficient",
        desc: "Poor query performance and limited scalability hinder threat detection and investigation. Analysts waste time waiting for searches to complete rather than hunting threats.",
    },
    {
        icon: hand,
        title: "Lacking Expert Support",
        desc: "Legacy vendors provide minimal ongoing support. Organizations struggle with tuning, optimization, and threat hunting without dedicated security expertise.",
    },
];

const services = [
    {
        title: "LogIngest",
        badge: "DATA COLLECTION",
        description:
            "We start by seamlessly ingesting data from all your sources—on-prem, cloud, and third-party tools—using our advanced collectors and Cribl data optimization.",
        features: [
            "Expert data collection & parsing",
            "Cost-effective log management",
            "Multi-source data normalization",
            "Optimized data routing with Cribl",
        ],
    },
    {
        title: "LogAlert",
        badge: "MANAGED SIEM",
        description:
            "Our SOC team implements correlation rules and custom dashboards to transform your log data into high-fidelity security alerts, turning LogScale into a purpose-built SIEM.",
        features: [
            "Real-time threat detection",
            "Pre-defined correlation rules",
            "Custom security dashboards",
            "24/7 SOC monitoring",
        ],
    },
    {
        title: "LogRespond",
        badge: "ENHANCED INVESTIGATION",
        description:
            "Building on LogAlert, our 24/7 SOC actively investigates every alert and provides your team with clear, actionable guidance for remediation.",
        features: [
            "Deeper investigation & analysis",
            "Expert threat hunting",
            "Guided response recommendations",
            "Incident documentation",
        ],
    },
    {
        title: "LogRemediate",
        badge: "FULL REMEDIATION",
        description:
            "Our most comprehensive offering. We integrate full, hands-on remediation capabilities, where our SOC takes direct action to neutralize threats on your behalf.",
        features: [
            "Active threat remediation",
            "Direct containment actions",
            "Automated response workflows",
            "Complete incident resolution",
        ],
    },
]

const ManagedSiemSoc = () => {
    return (
        <div className='container mx-auto px-6 '>
            {/* Hero Section */}
            <section className="pb-16 pt-[150px]">
                <div className=" text-center">

                    <Heading_Btn
                        h1={`Modernize Your Security Operations with\na Managed Next-Gen SIEM`}
                        desc={` Skip the static brochures. Use our interactive calculators, quote builders, and\nautomated sales tools to close deals faster and grow your MRR.`}
                        btn1="EXPLORE SUCCESS STORIES"
                        btn2="CALCULATE YOUR ROI"
                        url={"/become-a-partner"}
                    />

                    {/* Stats - Improved Grid */}
                    <div className="-mt-[50px] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-center gap-4 max-w-4xl mx-auto">

                        <CardBorder height="171px" width="166px">
                            <div className='py-5'>
                                <div className="text-white text-[32px] font-bold mb-2">40%</div>
                                <div className="text-slate-300 text-sm font-medium"> Average MRR Growth</div>
                            </div>
                        </CardBorder>
                        <CardBorder height="171px" width="166px">
                            <div className='py-5'>
                                <div className="text-white text-[32px] font-bold mb-2">60%</div>
                                <div className="text-slate-300 text-sm font-medium">
                                    Time to First Sale
                                </div>
                            </div>
                        </CardBorder>
                        <CardBorder height="171px" width="166px">
                            <div className='py-5'>
                                <div className="text-white text-[32px] font-bold mb-2">90%</div>
                                <div className="text-slate-300 text-sm font-medium">
                                    Active MSP Partners
                                </div>
                            </div>
                        </CardBorder>
                        <CardBorder height="171px" width="166px">
                            <div className='py-5'>
                                <div className="text-white text-[32px] font-bold mb-2">24/7</div>
                                <div className="text-slate-300 text-sm font-medium">Active MSP Partners</div>
                            </div>
                        </CardBorder>
                        <CardBorder height="171px" width="166px">
                            <div className='py-5'>
                                <div className="text-white text-[32px] font-bold mb-2">{`<5min`}</div>
                                <div className="text-slate-300 text-sm font-medium">Active MSP Partners</div>
                            </div>
                        </CardBorder>
                    </div>

                </div>
            </section>

            {/*  */}
            <section className="bg-transparent max-w-7xl mx-auto py-16">
                <h1 className="text-3xl md:text-[40px] font-bold text-white text-center mb-4">
                    Is Your Current SIEM Holding You Back?
                </h1>
                <p className='text-sm md:text-[18px] text-white text-center'>Legacy SIEM platforms create more problems than they solve. High costs, slow performance, and <br /> complex management drain resources without delivering the security outcomes you need.</p>
                <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-x-14">
                    {cardData.map((card, index) => (
                        <CardBorder key={index} height="290px" width="564px">
                            <div className="flex flex-col items-start gap-4 text-left text-white px-[32px] py-[40px]">
                                <div className="bg-[#00AEEF] rounded-[8px] w-[64px] h-[64px] flex  items-center justify-center">
                                    <img src={card.icon} alt="icon" className="w-[40px] h-[40px]" />
                                </div>
                                <div>
                                    <h2 className="text-[24px] font-medium mb-1">{card.title}</h2>
                                    <p className="text-[18px] text-white leading-snug">{card.desc}</p>
                                </div>
                            </div>
                        </CardBorder>
                    ))}
                </div>
            </section>

            {/* the logscale journey */}

            <div className="max-w-7xl mx-auto py-16">
                <h1 className="text-3xl md:text-[40px] font-bold text-white text-center mb-3">Is Your Current SIEM Holding You Back?</h1>
                <p className='text-[18px] text-white text-center mb-12'>Legacy SIEM platforms create more problems than they solve. High costs, slow performance, and <br /> complex management drain resources without delivering the security outcomes you need.</p>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            index={index}
                            service={service}
                            onAddIcon={() => alert(`Add icon clicked for ${service.title}`)}
                        />
                    ))}
                </div>
            </div>


            <section className=" py-16">
                <div className="max-w-6xl mx-auto text-center">
                    {/* Main Heading */}
                    <h2 className="text-2xl md:text-[40px] font-bold text-white mb-3">Expert, Project-Based Onboarding</h2>

                    {/* Description */}
                    <p className="text-white text-sm md:text-[18px] leading-relaxed mb-10">
                        We offer structured onboarding packages (Bronze, Silver, Gold) to ensure a successful deployment. <br /> From the
                        initial Solution Architecture Workshop to data source onboarding and custom content <br /> creation (dashboards,
                        parsers, and correlation rules), our team manages the entire project to meet <br /> your specific use cases.
                    </p>

                    {/* Package Cards */}
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        {/* Bronze Package */}
                        <div className="relative bg-[#00AEEF3D]  rounded-[16px] p-8" >
                            <div
                                className="absolute inset-0 rounded-[16px] p-[2px] z-0"
                                style={{
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude",
                                }}
                            />
                            <h3 className="text-[24px] font-medium text-white mb-4">Bronze Package</h3>
                            <p className="text-white text-[16px] leading-relaxed">
                                Essential onboarding with basic data source configuration and standard dashboards
                            </p>
                        </div>

                        {/* Silver Package */}
                        <div className="relative bg-[#00AEEF3D]  rounded-[16px] p-8" >
                            <div
                                className="absolute inset-0 rounded-[16px] p-[2px] z-0"
                                style={{
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude",
                                }}
                            />
                            <h3 className="text-[24px] font-medium text-white mb-4">Silver Package</h3>
                            <p className="text-white text-base leading-relaxed">
                                Comprehensive setup with custom correlation rules and advanced integrations
                            </p>
                        </div>

                        {/* Gold Package */}
                        <div className="relative bg-[#00AEEF3D]  rounded-[16px] p-8">
                            <div
                                className="absolute inset-0 rounded-[16px] p-[2px] z-0"
                                style={{
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude",
                                }}
                            />
                            <h3 className="text-[24px] font-medium text-white mb-4">Gold Package</h3>
                            <p className="text-white text-base leading-relaxed">
                                Complete deployment with custom content, training, and optimization workshops
                            </p>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className='flex items-center justify-center'>
                        <GradientButton children={"VIEW ONBOARDING PROJECTS"} />
                    </div>
                </div>
            </section>


            <section className="px-6 py-16 text-white">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-3xl md:text-[40px] font-bold text-white text-center mb-10">Proven Results in Complex Environments</h1>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="text-left h-full flex flex-col justify-end">
                            <h1 className="  text-2xl md:text-4xl lg:text-5xl font-semibold md:font-bold mb-6">
                                Success Story: How an MSSP Reduced SIEM Costs by 40%
                            </h1>
                            <p className="text-lg md:text-[20px] mb-8 font-thin md:font-semibold   ">
                                Using Vijilan's LogScale Management Services, an established MSSP was able to modernize their SIEM infrastructure, achieving significant cost savings and improved performance while scaling their client base. Our expert data optimization and intelligent routing transformed their security operations.
                            </p>
                            <Link to={"/case-studies"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex space-x-4">
                                <button
                                    className="p-[16px] text-[11px] font-medium rounded-[8px] text-white inline-flex items-center space-x-3"
                                    style={{
                                        background: "linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)",

                                    }}>

                                    <span className='uppercase'>read the full case study</span>
                                    <div className="w-6 h-6  flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <polyline points="12 16 16 12 12 8"></polyline>
                                            <line x1="8" y1="12" x2="16" y2="12"></line>
                                        </svg>
                                    </div>
                                </button>

                            </Link>
                        </div>

                        <div className='flex flex-col lg:flex-row justify-between  gap-3'>
                            <CardBorder height="171px" width="166px">
                                <div className='p-8'>
                                    <div className="text-white text-[32px] font-bold mb-2">40%</div>
                                    <div className="text-slate-300 text-sm font-medium">Cost Reduction</div>
                                </div>
                            </CardBorder>
                            <CardBorder height="171px" width="166px">
                                <div className='p-8'>
                                    <div className="text-white text-[32px] font-bold mb-2">60%</div>
                                    <div className="text-slate-300 text-sm font-medium">Faster Detection</div>
                                </div>
                            </CardBorder>
                            <CardBorder height="171px" width="166px">
                                <div className='p-8'>
                                    <div className="text-white text-[32px] font-bold mb-2">3x</div>
                                    <div className="text-slate-300 text-sm font-medium">Query Performance</div>
                                </div>
                            </CardBorder>
                        </div>
                    </div>
                </div>
            </section>


            {/* Ready to Scale Section */}
            <section className="max-w-6xl mx-auto px-1 md:px-6 py-16">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Side */}
                    <div className="relative bg-[#00AEEF3D] backdrop-blur-sm rounded-[24px] p-12 text-center">
                        <div
                            className="absolute inset-0 rounded-[26px] p-[1px] z-0"
                            style={{
                                background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                WebkitMaskComposite: "xor",
                                maskComposite: "exclude",
                            }}
                        />
                        <div className=" w-[45px] h-[45px] md:w-[61px] md:h-[61px] rounded-full flex items-center justify-center mx-auto mb-2"
                            style={{
                                background: `linear-gradient(0deg, rgba(196, 196, 196, 0.5), rgba(196, 196, 196, 0.5)),linear-gradient(180deg, #F89B29 0%, #00AEEF 100%)`,
                                backgroundBlendMode: "overlay"
                            }}>

                            <h3 className="text-[20px] font-bold text-white ">JN</h3>
                        </div>
                        <h3 className="text-[20px] font-bold text-white mb-6">JEN AI</h3>
                        <p className="text-white text-[16px] mb-12">
                            "Have questions about migrating from Splunk or QRadar? I can provide an overview of the process and benefits, including cost comparisons and migration timelines."
                        </p>
                        <button
                            className="p-[16px] text-lg font-medium rounded-[8px] text-white inline-flex items-center space-x-3"
                            style={{
                                background: "linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)",

                            }}>

                            <span className='uppercase'>ask jen ai</span>
                            <div className="w-6 h-6  flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polyline points="12 16 16 12 12 8"></polyline>
                                    <line x1="8" y1="12" x2="16" y2="12"></line>
                                </svg>
                            </div>
                        </button>
                    </div>

                    {/* Right Side */}
                    <div className="relative backdrop-blur-sm rounded-[24px] p-8 text-center">
                        <div
                            className="absolute inset-0 rounded-[24px] p-[1px] z-0"
                            style={{
                                background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                WebkitMaskComposite: "xor",
                                maskComposite: "exclude",
                            }}
                        />
                        <h3 className="text-[24px] font-bold text-white mb-4">
                            Ready to See the Future of <br /> SIEM?
                        </h3>
                        <p className="text-[16px] text-center text-white mb-6">
                            Experience the power of CrowdStrike LogScale <br /> with Vijilan's expert management. Let's discuss <br /> how our next-generation SIEM can transform <br />your security operations while reducing costs.
                        </p>
                        <Link to={"/contact"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                        
                        <button
                            className="p-[16px] relative z-10 text-[13px] font-medium rounded-[8px] text-white inline-flex items-center space-x-3"
                            style={{
                                background: "linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)",

                            }}>

                            <span className='uppercase'>schedule a technical scoping call</span>
                            <div className="w-6 h-6  flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polyline points="12 16 16 12 12 8"></polyline>
                                    <line x1="8" y1="12" x2="16" y2="12"></line>
                                </svg>
                            </div>
                        </button>
                        </Link>
                        <button
                            className="mt-[16px] p-[16px] text-[13px] font-medium rounded-[8px] text-white inline-flex items-center space-x-3 bg-transparent w-fit"
                            style={{
                                border: '1px solid',
                                borderImageSource: 'linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)',
                                borderImageSlice: 1,
                                borderRadius: '8px',
                            }}>
                            <span className="uppercase">watch platform demo</span>

                        </button>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default ManagedSiemSoc;