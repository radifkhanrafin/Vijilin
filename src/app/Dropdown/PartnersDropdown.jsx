import React from 'react';
import { Link } from 'react-router-dom';

const leftColumnServices = [
    {

        title: "MSPs (Bronze, Silver, Gold Tiers)",
        description: "Tiered partnership program designed for MSPs of all sizes - from micro-MSPs (5-15 employees) to large operations (60-100+). Grow your security portfolio profitably with our turnkey platform.",
        url: "msp-partner-program-ai"
    },
    {

        title: "VARs (Value-Added Resellers)",
        description:
            "Sales-focused partners offering hands-off, fully managed cybersecurity solutions. Clear value propositions, recurring revenue, and pre-built sales enablement materials.",
        url: "vijilan-vars-consultants-page"
    },
    {

        title: "IT Consultants",
        description:
            "Recommend best-in-class cybersecurity solutions that deliver tangible value to your enterprise clients. Partner with us for mutually beneficial opportunities.",
        url: "msp-launchpad"
    },
    {

        title: "vCISOs (Virtual CISOs)",
        description:
            "Enhance your clients' security posture with turn-key solutions that deliver strategic oversight and operational excellence. Access deep technical expertise and broader managed services.",
        url: "automation-focused"
    },
    {

        title: "MSSPs (Managed Security Service Providers)",
        description:
            "Augment your existing SOC capabilities, modernize your SIEM with LogScale, or leverage co-managed services to scale your operations cost-effectively.",
        url: "threatremediate-remote-no-pricing"
    }
]

const rightColumnServices = [
    {

        title: "Technology Alliance Partners",
        description:
            "Strategic partnerships with CrowdStrike, Cribl, Corelight, Fortinet, Microsoft, Google Cloud, Palo Alto Networks, and SentinelOne for comprehensive security solutions.",
        url: "platform-technology"
    },
    {

        title: "Distribution Channel Partners",
        description:
            "Available through leading distributors including TD SYNNEX, CDW, SHI, Sherweb, Pax8, and GuidePoint for simplified procurement.",
        url: "distribution-partner"
    },
    {

        title: "Partner Locator (for SMBs)",
        description:
            "Find a trusted Vijilan partner in your region. Searchable directory of certified partners providing managed cybersecurity services for small and medium businesses.",
        url: "threatremediate-remote-pricing"
    },
    {

        title: "Become a Partner",
        url:"access-request",
    },
    {

        title: "Partner Sales & Marketing Portal",
        url: "tier-landing"
    }
]

const PartnersDropdown = () => {
    return (
        <div className="container px-6 mx-auto rounded-[24px] my-[50px]" style={{
            background: "linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)"
        }}>
            <div className="grid lg:grid-cols-2 gap-8 md:p-4">
                {/* Left Column - Managed Detection & Response */}
                <div className=" rounded-2xl p-4 md:p-6 lg:p-12 ">
                    <h2 className="font-bold text-[24px] text-white mb-8 border-b border-[#00AEEF] pb-4">
                        Partner Programs
                    </h2>
                    <div className="space-y-8">
                    {leftColumnServices.map((service, index) => (
                        <Link
                            to={`/${service.url}`}
                            key={index}
                            className="block hover:no-underline"
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        >
                            <div className="flex gap-4 transition rounded-lg p-4">
                            <div className="flex-1">
                                <h3 className="text-white font-medium text-[16px] mb-2 leading-tight">
                                {service.title}
                                </h3>
                                <p className="text-sm leading-relaxed text-white/80">
                                {service.description}
                                </p>
                            </div>
                            </div>
                        </Link>
                        ))}
                    </div>
                </div>

                {/* Right Column - SIEM & Data Management */}
                <div className=" p-4 md:p-6 lg:p-12   lg:border-l lg:border-[#CAC4D0]">
                    <h2 className="font-bold text-[24px] text-white mb-8 border-b border-[#00AEEF] pb-4">
                        Technology & Distribution
                    </h2>
                    <div className="space-y-8">
                        {rightColumnServices.map((service, index) => (
                        <div key={index} className="flex gap-4">
                            <div className="flex-1">
                                <Link to={`/${service.url}`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                                <h3 className="text-white font-medium text-[16px] mb-2 leading-tight">
                                    {service.title}
                                </h3>
                                <p className="text-sm leading-relaxed">{service.description}</p>
                                </Link>
                              
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartnersDropdown;