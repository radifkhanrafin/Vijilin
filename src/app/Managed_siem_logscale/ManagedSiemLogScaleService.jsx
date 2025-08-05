import GradientButton from '@components/GradientButton';
import OutlineGradientButton from '@components/OutlineGradientButton';
import React from 'react';
import { Monitor, BarChart3, Shield, AlertTriangle } from "lucide-react";
import log from "../../Assets/log.png";
import man from "../../Assets/man.png";
import management from "../../Assets/management.png";
import current from "../../Assets/current.png";
import cart from "../../Assets/cart.png";
import dashboard from "../../Assets/dashbaord.png";
import training from "../../Assets/training.png";
import workflow from "../../Assets/workflow.png";
import backgroundPattern from "../../Assets/Background pattern.png";
import Heading_Btn from '@components/Heading_Btn';
import { Link } from 'react-router-dom';


const pricingData = [
    {
        id: 1,
        badge: "BRONZE",
        badgeColor: "#CE8946",
        tier: "Foundation",
        pricing: "Contact for Pricing",
        scopeTitle: "Scope & Deliverables",
        features: [
            "Solution Architecture Workshop",
            "Up to 5 data sources onboarded",
            "3 custom dashboards",
            "10 correlation rules",
            "5 automated workflows",
        ],
        supportSection: {
            title: "Project Milestones",
            details:
                "Kick-off within 5 business days • Acceptance presentation with full documentation • Knowledge transfer to your team",
        },
        buttonText: "GET STARTED",

        isPopular: false,
    },
    {
        id: 2,
        badge: "SILVER",
        badgeColor: "#C4C4C4",
        tier: "Advanced",
        pricing: "Contact for Pricing",
        scopeTitle: "Scope & Deliverables",
        features: [
            "Comprehensive Architecture Workshop",
            "Up to 10 data sources onboarded",
            "6 custom dashboards",
            "20 correlation rules",
            "10 automated workflows...",
        ],
        supportSection: {
            title: "Enhanced Project Support",
            details: "Dedicated project manager • Weekly status updates • Extended 30-day post-implementation support",
        },
        buttonText: "MOST POPULAR",

        isPopular: true,
    },
    {
        id: 3,
        badge: "GOLD",
        badgeColor: "#EFBF04",
        tier: "Enterprise",
        pricing: "Contact for Pricing",
        scopeTitle: "Scope & Deliverables",
        features: [
            "Executive Architecture Workshop",
            "Unlimited data sources onboarded",
            "12 custom dashboards",
            "40 correlation rules",
            "20 automated workflows",
            "Custom integrations & APIs",
            "Executive reporting framework",
        ],
        supportSection: {
            title: "White-Glove Service",
            details:
                "Senior architect assigned • C-suite presentations • 60-day premium support • Quarterly optimization reviews",
        },
        buttonText: "ENTERPRISE GRADE",

        isPopular: false,
    },
]

const services = [
    {
        icon: cart,
        title: "CUSTOM DATA SOURCES",
        status: "AVAILABLE",
    },
    {
        icon: dashboard,
        title: "ADDITIONAL DASHBOARDS",
        status: "AVAILABLE",
    },
    {
        icon: workflow,
        title: "CUSTOM WORKFLOWS",
        status: "AVAILABLE",
    },
    {
        icon: training,
        title: "ADVANCED TRAINING",
        status: "AVAILABLE",
    },
]

const ManagedSiemLogScaleService = () => {
    return (
        <div className='container mx-auto px-6 pb-16'>
            {/* Hero Section */}
            <section className="pt-[150px]">

                <Heading_Btn
                    h1={`Modernize Your SOC with CrowdStrike\nLogScale & Next-Gen SIEM`}
                    desc={`Leverage Vijilan's expert-led services to deploy, manage, and optimize the world's\nmost advanced, AI-native SIEM. Transform your data chaos into strategic clarity and\nstop threats faster.`}
                    btn1="REQUEST A SCOPING CALL"
                    btn2="LEARN ABOUT LOGINGEST"
                    url={"/contact"}
                />


            </section>

            <section className="py-16">
                <div className="max-w-6xl w-full rounded-[24px] px-[30px] py-[40px]" style={{ background: "linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)" }}>
                    <div className="text-center mb-12">
                        <h1 className="text-2xl md:text-[40px] font-bold text-white mb-3">Are You Facing These SIEM Challenges?</h1>
                        <p className="text-sm text-[18px] text-center text-white">
                            Modern enterprises struggle with legacy SIEM limitations. Vijilan's LogScale expertise solves <br /> these critical
                            pain points.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Card 1 */}
                        <div className="relative bg-[#00AEEF3D] rounded-[14px] p-3  md:p-6 text-center">
                            <div
                                className="absolute inset-0 rounded-[14px] p-[2px] z-0"
                                style={{
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude",
                                }}
                            />
                            <div className=" w-12 h-12 flex items-center justify-center mx-auto mb-4">
                                <img src={log} alt="" />
                            </div>
                            <h3 className="text-[21px] font-medium text-white mb-4">Set up a Log Management</h3>
                            <p className="text-white text-[14px] leading-relaxed">
                                Need to implement comprehensive log collection and management from scratch with modern, scalable
                                architecture.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="relative bg-[#00AEEF3D] rounded-[14px]  p-3 md:p-6 text-center">
                            <div
                                className="absolute inset-0 rounded-[14px] p-[2px] z-0"
                                style={{
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude",
                                }}
                            />
                            <div className=" w-12 h-12 flex items-center justify-center mx-auto mb-4">
                                <img src={management} alt="" />
                            </div>
                            <h3 className="text-[21px] font-medium text-white mb-4">Log Management & SIEM Consolidation</h3>
                            <p className="text-white text-[14px]  leading-relaxed">
                                Multiple disparate systems creating data silos, high costs, and operational complexity across your
                                security stack.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="relative bg-[#00AEEF3D] rounded-[14px]  p-3 md:p-6 text-center">
                            <div
                                className="absolute inset-0 rounded-[14px] p-[2px] z-0"
                                style={{
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude",
                                }}
                            />
                            <div className=" w-12 h-12 flex items-center justify-center mx-auto mb-4">
                                <img src={man} alt="" />
                            </div>
                            <h3 className="text-[21px] font-medium text-white mb-4">Replace SIEM</h3>
                            <p className="text-white text-[14px]  leading-relaxed">
                                Legacy SIEM can't scale, lacks AI capabilities, and fails to provide the speed and insights your SOC
                                needs.
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className="relative bg-[#00AEEF3D] rounded-[14px] p-6 text-center">
                            <div
                                className="absolute inset-0 rounded-[14px] p-[2px] z-0"
                                style={{
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude",
                                }}
                            />
                            <div className=" w-12 h-12 flex items-center justify-center mx-auto mb-4">
                                <img src={current} alt="" />
                            </div>
                            <h3 className="text-[21px] font-medium text-white mb-4">Unhappy with current SIEM/SOC Vendor</h3>
                            <p className="text-white text-[14px] leading-relaxed">
                                Poor performance, limited support, escalating costs, and lack of innovation are hindering your security
                                operations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            <section className="py-16">
                <h1 className='  text-2xl md:text-[40px]  font-bold text-center mb-3'>Next-Gen SIEM Onboarding Packages</h1>
                <p className='text-[18px] text-center mb-12'>Project-based implementation services to get your LogScale SIEM operational quickly and <br /> effectively</p>
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {pricingData.map((plan) => (
                            <div
                                key={plan.id}
                                className="relative bg-[#00AEEF3D] rounded-[16px] p-8"
                                style={{
                                    boxShadow: "0 0 20px rgba(34, 211, 238, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                                }}>
                                <div
                                    className="absolute inset-0 rounded-[16px] p-[2px] z-0"
                                    style={{
                                        background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                                        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                        WebkitMaskComposite: "xor",
                                        maskComposite: "exclude",
                                    }}
                                />
                                {/* Badge */}
                                <div className="flex justify-center mb-6">
                                    <span className={` text-white text-[10px] font-bold px-4 py-2 rounded-[15px]`} style={{ backgroundColor: plan.badgeColor }}>
                                        {plan.badge}
                                    </span>
                                </div>

                                {/* Tier Name */}
                                <h2 className="text-white text-2xl font-medium text-center mb-4">{plan.tier}</h2>

                                {/* Pricing */}
                                <div className="text-center mb-8">
                                    <h3 className="text-[#00AEEF]   text-2xl md:text-4xl  font-bold leading-tight" style={{ color: "#00AEEF" }}>
                                        Contact for
                                        <br />
                                        Pricing
                                    </h3>
                                </div>

                                {/* Scope & Deliverables */}
                                <div className="mb-8">
                                    <h4 className="text-white text-2xl font-medium mb-4">{plan.scopeTitle}</h4>
                                    <ul className="space-y-3">
                                        {plan.features.map((feature, index) => (
                                            <li key={index} className="text-white text-[18px] flex items-start">
                                                <span className="text-white mr-3 ">•</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Support Section */}
                                <div className="relative bg-[#00AEEF4D] rounded-[13px] p-6 mb-8 ">
                                    <div
                                        className="absolute inset-0 rounded-[13px] p-[1px] z-0"
                                        style={{
                                            background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                                            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                            WebkitMaskComposite: "xor",
                                            maskComposite: "exclude",
                                        }}
                                    />
                                    <h5 className="text-white text-[15px] font-medium text-center mb-3">{plan.supportSection.title}</h5>
                                    <p className="text-white text-[12px] leading-relaxed">{plan.supportSection.details}</p>
                                </div>

                                {/* CTA Button */}
                                <Link to={"/contact"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex justify-center">
                                    {plan.isPopular && <button className={` px-8 py-3 font-semibold text-sm rounded-lg transition-all duration-300 `} style={{
                                        background: "linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)"
                                    }}
                                    >
                                        {plan.buttonText}
                                    </button>}

                                    {!plan.isPopular && <button className={`relative px-8 py-3 font-semibold text-sm rounded-lg transition-all duration-300 `}
                                    >
                                        <div
                                            className={`absolute inset-0 rounded-[8px] p-[1px] z-0`}
                                            style={{
                                                background: "linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)",
                                                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                                WebkitMaskComposite: "xor",
                                                maskComposite: "exclude",
                                            }}
                                        />
                                        {plan.buttonText}
                                    </button>}

                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 ">
                <div className="max-w-7xl mx-auto text-center">
                    {/* Header */}
                    <div className="mb-12">
                        <h1 className="text-3xl md:text-[40px] font-bold text-white mb-3">Services Add-ons</h1>
                        <p className="text-[18px] text-white max-w-2xl mx-auto">
                            Enhance any package with additional specialized services
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {services.map((service, index) => {

                            return (
                                <div
                                    key={index}
                                    className=" backdrop-blur-sm rounded-lg px-3 py-5 text-center border border-[#E6F7FD]"
                                >
                                    {/* Icon */}
                                    <div className="mb-6 flex items-center justify-center">
                                        <img src={service.icon} alt="" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-white font-bold text-[18px] mb-4 leading-tight">{service.title}</h3>

                                    {/* Status */}
                                    <div className="text-[#F1511B] font-bold text-[18px] tracking-wider" style={{ color: "#F1511B" }}>{service.status}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>


            <section className="py-16">
                <h1 className='text-2xl md:text-[40px] font-bold text-center mb-3'>Next-Gen SIEM Onboarding Packages</h1>
                <p className='text-[18px] text-center mb-12'>Project-based implementation services to get your LogScale SIEM operational quickly and <br /> effectively</p>
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {pricingData.map((plan) => (
                            <div
                                key={plan.id}
                                className="relative bg-[#00AEEF3D] rounded-[16px]  p-4 md:p-6"
                                style={{
                                    boxShadow: "0 0 20px rgba(34, 211, 238, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                                }}>
                                <div
                                    className="absolute inset-0 rounded-[16px] p-[2px] z-0"
                                    style={{
                                        background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                                        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                        WebkitMaskComposite: "xor",
                                        maskComposite: "exclude",
                                    }}
                                />
                                {/* Badge */}
                                <div className="flex justify-center mb-6">
                                    <span className={` text-white text-[10px] font-bold px-4 py-2 rounded-[15px]`} style={{ backgroundColor: plan.badgeColor }}>
                                        {plan.badge}
                                    </span>
                                </div>

                                {/* Tier Name */}
                                <h2 className="text-white text-2xl font-medium text-center mb-4">{plan.tier}</h2>

                                {/* Pricing */}
                                <div className="text-center mb-8">
                                    <h3 className="text-[#00AEEF] text-2xl md:text-[40px] font-bold leading-tight">
                                        Contact for
                                        <br />
                                        Pricing
                                    </h3>
                                </div>

                                {/* Scope & Deliverables */}
                                <div className="mb-8">
                                    <h4 className="text-white text-2xl font-medium mb-4">{plan.scopeTitle}</h4>
                                    <ul className="space-y-3">
                                        {plan.features.map((feature, index) => (
                                            <li key={index} className="text-white text-[18px] flex items-start">
                                                <span className="text-white mr-3 ">•</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Support Section */}
                                <div className="relative bg-[#00AEEF4D] rounded-[13px]  p-3 md:p-6 mb-8 ">
                                    <div
                                        className="absolute inset-0 rounded-[13px] p-[1px] z-0"
                                        style={{
                                            background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                                            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                            WebkitMaskComposite: "xor",
                                            maskComposite: "exclude",
                                        }}
                                    />
                                    <h5 className="text-white text-[15px] font-medium text-center mb-3">{plan.supportSection.title}</h5>
                                    <p className="text-white text-[12px] leading-relaxed">{plan.supportSection.details}</p>
                                </div>

                                {/* CTA Button */}
                                <div className="flex justify-center">
                                    {plan.isPopular && <button className={` px-8 py-3 font-semibold text-sm rounded-lg transition-all duration-300 `} style={{
                                        background: "linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)"
                                    }}
                                    >
                                        {plan.buttonText}
                                    </button>}

                                    {!plan.isPopular && <button className={`relative px-8 py-3 font-semibold text-sm rounded-lg transition-all duration-300 `}
                                    >
                                        <div
                                            className={`absolute inset-0 rounded-[8px] p-[1px] z-0`}
                                            style={{
                                                background: "linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)",
                                                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                                WebkitMaskComposite: "xor",
                                                maskComposite: "exclude",
                                            }}
                                        />
                                        {plan.buttonText}
                                    </button>}
                               
                            </div>
                            </div>
                        ))}
                </div>
        </div>
            </section >


            <Heading_Btn
                btn1="SCHEDULE A SCOPING CALL"
                btn2="LEAN ABOUT LOGSCALE"
                h1="Ready to Build a Future-Proof SOC?"
                desc="Every environment is unique. Contact our LogScale experts for a detailed scoping call  to determine the perfect package for your organization's needs."
                url={"/contact"}
           />


            <section className="relative z-10 py-16">
                <div className="container mx-auto ">
                    <div
                        className="h-[304px] rounded-[24px] flex justify-center items-center relative overflow-hidden"
                        style={{
                            background: "linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)",
                        }}
                    >

                        {/* Left side solid background */}
                        <div
                            className="absolute inset-0"
                            style={{
                                background:
                                    "linear-gradient(90deg, #082135 0%, #082135 50%, rgba(23, 51, 71, 0.8) 70%, rgba(23, 51, 71, 0.4) 100%)",
                            }}
                        />

                        {/* Right side pattern with smooth blend */}
                        <div
                            className="absolute inset-0"
                            style={{
                                backgroundImage: `url(${backgroundPattern})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                opacity: 0.8,
                                maskImage:
                                    "linear-gradient(90deg, transparent 0%, transparent 30%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,1) 100%)",
                                WebkitMaskImage:
                                    "linear-gradient(90deg, transparent 0%, transparent 30%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,1) 100%)",
                            }}
                        />

                        {/* Overlay for color consistency */}
                        <div
                            className="absolute inset-0"
                            style={{
                                background:
                                    "linear-gradient(90deg, rgba(23, 51, 71, 0.9) 0%, rgba(23, 51, 71, 0.7) 40%, rgba(26, 58, 79, 0.5) 60%, rgba(26, 58, 79, 0.3) 100%)",
                            }}
                        />

                        <div className="relative z-10 text-center space-y-5 px-5">
                            <h2 className="text-[24px] font-medium text-[#00AEEF] ">
                                Or Talk to Our AI Sales Agent
                            </h2>
                            <p className="text-[24px] font-medium text-white  leading-relaxed max-w-2xl mx-auto">
                                1 (954) 440-7608
                            </p>
                            <p className='text-[18px]'>Available 24/7 for instant answers about SIEM modernization</p>
                        </div>
                    </div>
                </div>
            </section>

        </div >
    );
};

export default ManagedSiemLogScaleService;