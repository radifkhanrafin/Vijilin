import React from 'react';
import smallSheild from "../../Assets/smallSheild.png";
import logAlert from "../../Assets/logAlert.png";
import logScale from "../../Assets/logScale.png";
import check from "../../Assets/check.png";
import robot from "../../Assets/robot.png";
import security from "../../Assets/security.png";
import crib from "../../Assets/crib.png";
import identity from "../../Assets/identity.png";
import error from "../../Assets/error.png";
import response from "../../Assets/response.png";
import { Link } from 'react-router-dom';

const leftColumnServices = [
    {
        icon: smallSheild,
        title: "ThreatRespond (Detection + Guided Response)",
        description: "Professional service descriptions and value propositions for your website",
        url: "threat-respond-service"
    },
    {
        icon: response,
        title: "ThreatRemediate (Fully managed XDR with active Remediation)",
        description: "Our flagship hands-off solution: 24/7 monitoring, detection, threat hunting, AND direct containment and remediation by Vijilan's expert SOC team. Powered by CrowdStrike Falcon.",
        url: "threat-respond-service-2"
    },
    {
        icon: identity,
        title: "Managed Identity Threat Detection & Response (Managed ITDR)",
        description:
            "Combat the #1 attack vector with 24/7 monitoring, detection, and real-time response to identity-based threats using CrowdStrike Falcon Identity Protection.",
        url: "managed-automation"
    },
    {
        icon: error,
        title: "Managed Exposure Management",
        description:
            "Proactively identify and reduce your attack surface with CrowdStrike Falcon Exposure Management, prioritizing vulnerabilities and mitigating risks.",
        url: "tier3-partner-portal"
    },
]

const rightColumnServices = [
    {
        icon: logScale,
        title: "LogIngest (CrowdStrike LogScale)",
        description:
            "Expert data collection, onboarding, parsing, and normalization from any source into LogScale for cost-effective log management.",
        url: "managed-siem-logscale-service"
        },
    {
        icon: logAlert,
        title: "LogAlert (Managed SIEM)",
        description:
            "Real-time threat detection and alerts within LogScale using pre-defined correlation rules and dashboards, managed by our SOC team.",
        url: "managed-siem-soc"
    },
    {
        icon: check,
        title: "LogRespond (Enhanced Investigation)",
        description:
            "Deeper investigation and analysis by our SOC team with guided response recommendations for your internal team.",
        url:"threatremediate-essentail"
      },
    {
        icon: security,
        title: "LogRemediate (Full Managed Security)",
        description:
            "Complete managed security service integrating SIEM, SOC, and full remediation capabilities directly by Vijilan's expert team.",
        url: "threatremediate-managed-xdr"
       },
    {
        icon: robot,
        title: "Managed Next-Gen SIEM (CrowdStrike Falcon)",
        description:
            "Expert deployment and management of CrowdStrike Falcon Next-Gen SIEM for AI-native security operations and seamless Falcon Complete readiness.",
        url: "enterprise-landing"
    },
    {
        icon: crib,
        title: "Professional Services (Cribl, Corelight, CrowdStrike)",
        description:
            "Expert implementation, optimization, and ongoing management of leading cybersecurity technologies including Cribl data optimization and Corelight NDR.",
        url: "visilan-professional-service"
        },
]

const SolutionDropdown = () => {
    return (
        <div className="container px-6 mx-auto rounded-[24px]" style={{
            background: "linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)"
        }}>
            <div className="grid lg:grid-cols-2 gap-8 md:p-4">
                {/* Left Column - Managed Detection & Response */}
                <div className=" rounded-2xl p-4 md:p-6 lg:p-12 ">
                    <h2 className="font-bold text-[24px] text-white mb-8 border-b border-[#00AEEF] pb-4">
                        Managed Detection & Response
                    </h2>
                    <div className="space-y-8">
                    {leftColumnServices.map((service, index) => {
                        const content = (
                            <div key={index} className="flex gap-4">
                                <div className="flex items-center">
                                    <img src={service.icon} alt="" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-white font-medium text-[16px] mb-2 leading-tight">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed">{service.description}</p>
                                </div>
                            </div>
                        );

                        return service.url ? (
                            <Link to={`/${service.url}`} key={index} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                            className="block">
                                {content}
                            </Link>
                        ) : (
                            <div key={index} className="block cursor-default">
                                {content}
                            </div>
                        );
                    })}

                    </div>
                </div>

                {/* Right Column - SIEM & Data Management */}
                <div className=" p-4 md:p-6 lg:p-12   lg:border-l lg:border-[#CAC4D0]">
                    <h2 className="font-bold text-[24px] text-white mb-8 border-b border-[#00AEEF] pb-4">
                        SIEM & Data Management
                    </h2>
                    <div className="space-y-8">
                    {rightColumnServices.map((service, index) => (
                        <Link to={`/${service.url || ''}`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} key={index} className="block">
                            <div className="flex gap-4 mb-4 p-3 rounded-lg transition">
                                <div className="flex items-center">
                                    <img src={service.icon} alt="" className="w-[22px] h-[27px]" />
                                </div>
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
            </div>
        </div>
    );
};

export default SolutionDropdown;