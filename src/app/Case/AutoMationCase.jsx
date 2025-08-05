import Heading_Btn from "@components/Heading_Btn"
import enterprise from "../../Assets/enterprise.png";
import government from "../../Assets/governmet.png";
import growth from "../../Assets/growth.png";
import financial from "../../Assets/financial.png";
import technology from "../../Assets/tecnology.png";
import smb from "../../Assets/smb.png";
import menu from "../../Assets/manu.png";
import heathCare from "../../Assets/heathcare.png";
import InputSection from "@components/InputSection";
import SuccessCard from "@components/SuccessCard";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";


const categories = [
    { title: "MSP/VAR", desc: "Managed service provider seeking growth", icon: growth },
    { title: "Enterprise", desc: "Large organization needing security", icon: government },
    { title: "Manufacturing", desc: "Industrial/operational technology", icon: menu },
    { title: "Healthcare", desc: "Compliance-focused organization", icon: heathCare },
    { title: "Financial Services", desc: "Banks, credit unions, fintech", icon: financial },
    { title: "Government", desc: "Federal, state, local agencies", icon: enterprise },
    { title: "Technology", desc: "Software, SaaS, tech companies", icon: technology },
    { title: "SMB", desc: "Small to medium business", icon: smb },
];

const businessFields = [
    {
        label: "Business Type",
        placeholder: "Select Business Type",
        options: [{ value: "1", label: "Type 1" }, { value: "2", label: "Type 2" }],
    },
    {
        label: "Current Annual Revenue/MRR",
        placeholder: "Current Annual Revenue",
        options: [{ value: "1", label: "1M+" }, { value: "2", label: "500K-1M" }],
    },
    {
        label: "Number Of Clients/Endpoints",
        placeholder: "Number Of Clients",
        options: [{ value: "1", label: "1M+" }, { value: "2", label: "500K-1M" }],
    },
    {
        label: "Current Security Budget",
        placeholder: "Current Security Budget",
        options: [{ value: "1", label: "1M+" }, { value: "2", label: "500K-1M" }],
    },
];

const businessFields2 = [
    {
        label: "Primary Objective",
        placeholder: "Select Your main goal",
        options: [{ value: "1", label: "Type 1" }, { value: "2", label: "Type 2" }],
    },
    {
        label: "Target Timeframe",
        placeholder: "Select Timeframe",
        options: [{ value: "1", label: "1M+" }, { value: "2", label: "500K-1M" }],
    },
    {
        label: "Industry",
        placeholder: "Select Your Industry",
        options: [{ value: "1", label: "1M+" }, { value: "2", label: "500K-1M" }],
    },
];


const TestimonialCard = ({
    badgeText,
    heading,
    description,
    stats = [],
    buttonText = "READ THE FULL STORY",
    onButtonClick,
    badgeBg,
    url,
}) => {
    const Badge = ({ children, className = "", ...props }) => {
        return (
            <div
                className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${className}`}
                {...props}
            >
                {children}
            </div>
        )
    }
    return (
        <div
            className="p-8 rounded-[22px] backdrop-blur-sm"
            style={{

                background: "linear-gradient(0deg, #191624 16.11%, #00AEEF 328.5%)",

            }}
        >
            <Badge className={`text-[10px] font-semibold text-white  px-[7px] py-[8px]`}   style={{ backgroundColor: badgeBg }}
            >
                {badgeText}
            </Badge>

            <div className="px-4">
                <h3 className="text-xl md:text-[30px] font-bold text-white mb-6 mt-4 leading-tight">
                    {heading}
                </h3>

                <p className="text-white text-[15px] text-base leading-relaxed">{description}</p>

                <div className="grid grid-cols-1  md:grid-cols-1 lg:grid-cols-2 gap-5 justify-center  mb-10">
                    {stats.map((stat, index) => (
                        <CardBorder key={index} height="130px" width="100%">
                            <div className="text-center mx-auto">
                                <div className="text-white text-[36px] font-medium mb-2">{stat.value}</div>
                                <div className="text-[#E6F7FD] text-[10px] font-medium">{stat.label}</div>
                            </div>
                        </CardBorder>
                    ))}
                </div>
            </div>
            <Link to={url} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <div className="border border-white hover:bg-white/10 bg-transparent w-fit text-center mx-auto rounded-[6px] transition-all duration-300">
                <button
                    onClick={onButtonClick}
                    className=" p-[16px] text-[14px] font-medium  flex items-center gap-2 text-white"
                >
                    {buttonText}
                    <div className="w-3 h-3 border rounded-full flex items-center justify-center">
                        <ArrowRight className="h-2 w-2 text-white" />
                    </div>
                </button>
            </div>
            </Link>
        </div>
    );
};



const CardBorder = ({
    height = "171px",
    width = "166px",
    children,
    borderSize,
    radiusSize,
    topBottomBorderOnly = false  // New prop to enable top/bottom-only borders
}) => {
    return (
        <div className={`mt-12 relative ${topBottomBorderOnly ? 'w-full' : ''}`}>
            {/* Main container - background remains #00AEEF3D */}
            <div
                className={`relative bg-[#00AEEF3D] ${topBottomBorderOnly ? 'rounded-none' : 'rounded-[26px]'} w-full flex items-center justify-center ${borderSize ? "rounded-[16px]" : ""} ${radiusSize ? "rounded-[14px]" : ""}`}
                style={{
                    height,
                    maxWidth: width,
                    position: 'relative',
                    overflow: 'hidden' // Ensures pseudo-elements are contained
                }}
            >
                {/* Top border gradient (matches original color) */}
                {topBottomBorderOnly && (
                    <div
                        className="absolute top-0 left-0 right-0 h-[2px]"
                        style={{
                            background: 'linear-gradient(90deg, rgba(0,174,239,0) 0%, #00AEEF 50%, rgba(0,174,239,0) 100%)'
                        }}
                    />
                )}

                {/* Bottom border gradient (matches original color) */}
                {topBottomBorderOnly && (
                    <div
                        className="absolute bottom-0 left-0 right-0 h-[2px]"
                        style={{
                            background: 'linear-gradient(90deg, rgba(0,174,239,0) 0%, #00AEEF 50%, rgba(0,174,239,0) 100%)'
                        }}
                    />
                )}

                {/* Original full border (for non-special cases) */}
                {!topBottomBorderOnly && (
                    <div
                        className={`absolute inset-0 rounded-[26px] p-[2px] z-0 ${borderSize ? "rounded-[16px] p-[1px]" : ""} ${radiusSize ? "rounded-[14px]" : ""}`}
                        style={{
                            background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                            WebkitMaskComposite: "xor",
                            maskComposite: "exclude",
                        }}
                    />
                )}

                {/* Content container */}
                <div className="z-10 w-full px-4">
                    {children}
                </div>
            </div>
        </div>
    );
};


const testimonialData = [
    {
        badgeText: "MS PARTNER SUCCESS",
        badgeBg:"#BCBEC0",
        heading: "VAR Achieves 2x Attach Rate & 40% Margin Growth",
        description: "See how this partner leveraged our flagship XDR service to build a profitable security practice and deliver hands-off cybersecurity to their clients while reducing operational overhead.",
        stats: [
            { value: "30%", label: "MRR Growth" },
            { value: "50%", label: "Alert Reduction" },
        ],
        url: "/var-success-case-study"
    },
    {
        badgeText: "MS PARTNER SUCCESS",
        badgeBg:"#F4CE41",
        heading: "Manufacturing Firm Secures OT Assets and Ensures 99.9%",
        description: "See how this partner leveraged our flagship XDR service to build a profitable security practice and deliver hands-off cybersecurity to their clients while reducing operational overhead.",
        stats: [
            { value: "30%", label: "MRR Growth" },
            { value: "50%", label: "Alert Reduction" },
        ],
        url: "/resilience-case"
    },
    {
        badgeText: "MS PARTNER SUCCESS",
        badgeBg:"#F36E21",
        heading: "Federal Contractor Achieves CMMC 2.0 Readiness in 6 Weeks",
        description: "See how this partner leveraged our flagship XDR service to build a profitable security practice and deliver hands-off cybersecurity to their clients while reducing operational overhead.",
        stats: [
            { value: "30%", label: "MRR Growth" },
            { value: "50%", label: "Alert Reduction" },
        ],
        url: "/federal-cmmc-case"
    },
    {
        badgeText: "MS PARTNER SUCCESS",
        badgeBg:"#F4CE41",  
        heading: "Regional Bank Achieves Zero Audit Findings",
        description: "See how this partner leveraged our flagship XDR service to build a profitable security practice and deliver hands-off cybersecurity to their clients while reducing operational overhead.",
        stats: [
            { value: "30%", label: "MRR Growth" },
            { value: "50%", label: "Alert Reduction" },
        ],
        url: "/financial-complianc-case"
    },
    {
        badgeText: "MS PARTNER SUCCESS",
        badgeBg:"#F36E21",
        heading: "MSSP Achieves 40% SIEM Cost Reduction and 3x Faster",
        description: "See how this partner leveraged our flagship XDR service to build a profitable security practice and deliver hands-off cybersecurity to their clients while reducing operational overhead.",
        stats: [
            { value: "30%", label: "MRR Growth" },
            { value: "50%", label: "Alert Reduction" },
        ],
        url: "/msp-ogscale-case-study"
    },
    {
        badgeText: "MS PARTNER SUCCESS",
        badgeBg:"#F36E21",
        heading: "MSP Achieves 30% MRR Growth with ThreatRemediate",
        description: "See how this partner leveraged our flagship XDR service to build a profitable security practice and deliver hands-off cybersecurity to their clients while reducing operational overhead.",
        stats: [
            { value: "30%", label: "MRR Growth" },
            { value: "50%", label: "Alert Reduction" },
        ],
        url: "/msp-growth-case"
    },
    {
        badgeText: "MS PARTNER SUCCESS",
        badgeBg:"#F36E21",
        heading: "SMB Ransomware Recovery: From Active Attack",
        description: "See how this partner leveraged our flagship XDR service to build a profitable security practice and deliver hands-off cybersecurity to their clients while reducing operational overhead.",
        stats: [
            { value: "30%", label: "MRR Growth" },
            { value: "50%", label: "Alert Reduction" },
        ],
        url: "/smb-runsomware-case-study"
    },
    {
        badgeText: "MS PARTNER SUCCESS",
        badgeBg:"#00EF14",
        heading: "Healthcare System Achieves HIPAA Success and 3x Faster",
        description: "See how this partner leveraged our flagship XDR service to build a profitable security practice and deliver hands-off cybersecurity to their clients while reducing operational overhead.",
        stats: [
            { value: "30%", label: "MRR Growth" },
            { value: "50%", label: "Alert Reduction" },
        ],
        url: "/health-compliance"
    },
];

export default function Component() {
    return (
        <div className="bg-transparent max-w-[90%] mx-auto">

            {/* Hero Section */}
            <section className="container md:px-6 pb-16 text-white !pt-[220px]">
                <div className="">
                    <div className="grid lg:grid-cols-2 h-full">

                        <div className="flex flex-col justify-end self-end h-full">
                            <Heading_Btn
                                h1="Real-World Results
                                Proven Success"
                                desc={`Discover how MSPs grow their business and enterprises\nachieve resilient security posture. Calculate your\npotential success with our interactive tools.`}
                                btn1={"CALCULATE YOUR SUCCESS"}
                                btn2={"BROWS SUCCESS STORIES"}
                                size={true}
                            />
                        </div>

                        <div className="">
                            <TestimonialCard
                                badgeText={"MS PARTNER SUCCESS"}
                                heading={"MSP Achieves 30% MRR Growth with ThreatRemediate"}
                                description={`See how this partner leveraged our flagship XDR service to build a profitable security practice and
                                    deliver hands-off cybersecurity to their clients while reducing operational overhead.`}
                                stats={[
                                    { value: "30%", label: "MRR Growth", size: true },
                                    { value: "50%", label: "Alert Reduction", size: true },
                                ]}

                            >
                            </TestimonialCard>
                        </div>
                    </div>
                </div>
            </section>

            {/* Calculator Section */}
            <section className="container md:px-6 py-16">
                <div className=" text-center text-white">
                    <h2 className="text-3xl md:text-[40px] font-bold mb-3">Calculate Your Potential Success</h2>
                    <p className="text-white text-center text-[18px] mb-12">
                        Use our interactive calculator to estimate your potential results based on companies similar to <br /> yours.
                    </p>
                    <div className=" backdrop-blur-sm rounded-[24px] p-8" style={{ background: "linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)" }}>
                        <h3 className="text-3xl md:text-[40px]  font-bold text-center">Business Success Calculator</h3>
                        <p className="text-white text-center text-[18px] mb-10">Enter your details to see potential results based on similar client outcomes</p>

                        <div className="grid md:grid-cols-2 gap-8">
                            <InputSection title="Your Business Profile" fields={businessFields} />
                            <InputSection title="Your Goals" fields={businessFields2} />
                        </div>
                    </div>
                </div>
            </section>
            {/* Organization Type Section */}
            <section className="md:px-6 py-16">
                <div className="max-w-6xl mx-auto text-center text-white">
                    <h2 className="text-3xl md:text-[40px]  font-bold mb-3">Find Success Stories Like Yours</h2>
                    <p className="text-[18px] mb-12">
                        Discover how organizations similar to yours have achieved remarkable results
                    </p>

                    <div className="flex items-center justify-center" >
                        <div className="max-w-6xl w-full rounded-2xl p-10 text-white" style={{ background: "linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)" }}>
                            {/* Title */}
                            <div className="text-center mb-12">
                                <h2 className="text-lg md:text-3xl md:text-[40px] font-bold mb-3">What Best Describes Your Organization?</h2>
                                <p className="text-[18px]">
                                    Select your industry to see relevant success stories and outcomes
                                </p>
                            </div>

                            {/* Categories */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-14">
                                {categories.map((item, index) => (
                                    <div
                                        key={index}
                                        className="relative bg-[#00AEEF3D] rounded-[10px] px-4 py-6 flex flex-col justify-center items-center space-y-1">
                                        <div
                                            className="absolute inset-0 rounded-[10px] p-[1px] z-0 h-full"
                                            style={{
                                                background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                                                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                                WebkitMaskComposite: "xor",
                                                maskComposite: "exclude",
                                            }}
                                        />
                                        <img src={item.icon} alt="" className="w-[40px] h-[40px]" />
                                        <h3 className="font-medium text-[15px]">{item.title}</h3>
                                        <p className="text-[11px]">{item.desc}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Highlight box */}
                            <div className="text-left mb-10">
                                <button className="bg-[#F36E21] text-white text-[10px] font-semibold px-[10px] py-[8px] rounded-[15px] mb-6">
                                    SMB SUCCESS
                                </button>
                                <h3 className="text-xl md:text-[30px] font-bold">Small Business Survives Ransomware Attack</h3>
                                <p className="text-[16px] mt-1">Quick response prevents data loss and downtime</p>
                            </div>

                            {/* Stats */}
                            <div className="w-full max-w-2xl mx-auto flex flex-col sm:flex-row px-12 gap-10 mb-12">
                                <div>
                                    <h2 className="text-[37px] font-bold">0%</h2>
                                    <p className="text-[12px] text-white/70">DATA LOSS</p>
                                </div>
                                <div>
                                    <h2 className="text-[37px] font-bold">4 Hrs</h2>
                                    <p className="text-[12px] text-white/70">RECOVERY TIME</p>
                                </div>
                            </div>

                            {/* Button */}
                            <div className="w-full max-w-2xl mx-auto border border-[#FFFFFF] text-center rounded-xl">
                                <button className=" text-white p-[16px] rounded-[6px] ">
                                    READ THE FULL STORY
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Success Stories Grid */}
            <section className="md:px-6 py-16">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-[40px] font-bold text-center text-white mb-3">All Success Stories</h2>
                    <p className="text-[18px] text-center text-white mb-12">Browse our complete collection of client success stories and measurable business results.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
                        {testimonialData.map((item, index) => (
                                <TestimonialCard
                                    key={index}
                                    badgeText={item.badgeText}
                                    heading={item.heading}
                                    description={item.description}
                                    stats={item.stats}
                                    url={item.url}
                                    badgeBg={item.badgeBg}
                                />
                            ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="container mx-auto md:px-6 py-16">
                <div className="">
                    <div
                        className="backdrop-blur-sm px-6 md:px-16 py-16"
                        style={{
                            borderRadius: '22.184px',
                            background: 'linear-gradient(0deg, #191624 16.11%, #F89B29 328.5%)',
                        }}>
                        <blockquote className="text-white text-center text-[20px] leading-relaxed mb-6">
                            "Vijilan's team functions as a seamless extension of our own. Their ability to manage our data with <br /> Cribl and provide active remediation has freed up my internal resources to focus on bigger picture <br /> risks. It's a true force multiplier."
                        </blockquote>
                        <div className="text-center text-[20px] bg-clip-text text-transparent"
                            style={{

                                background: "linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent"
                            }}>
                            — CISO, Manufacturing Firm
                        </div>
                    </div>
                </div>
            </section>

            {/* Ready to Scale Section */}
            <section className="max-w-6xl mx-auto md:px-6 py-16">
                <div className="grid md:grid-cols-2 gap-12 items-center">


                    <SuccessCard
                        showIcon
                        iconText="JN"
                        subheading="JEN AI"
                        description={`"I can help you find case studies similar to your \nbusiness, calculate potential ROI, and connect \nyou with relevant success stories. What would \nyou like to explore?"`}
                        buttonText="Find my success story"
                        bgColor="#00AEEF3D"
                    />
                    <SuccessCard
                        heading={`Ready to Write Your Own \nSuccess Story?`}
                        description={`Let's discuss how Vijilan's services can help you \nachieve the security outcomes and business \ngrowth you're looking for.`}
                        buttonText="Schedule a consultation"
                        isOutlineButton
                        outlineButtonText="Download success kit"
                        bgColor="transparent"
                    />
                </div>
            </section>
        </div >
    )
}
