import c1 from "../../Assets/c1.png";
import c2 from "../../Assets/c2.png";
import c3 from "../../Assets/c3.png";
import c4 from "../../Assets/c4.png";
import c5 from "../../Assets/c5.png";
import c6 from "../../Assets/c6.png";
import a1 from "../../Assets/a1.png";
import a2 from "../../Assets/a2.png";
import a3 from "../../Assets/a3.png";
import a4 from "../../Assets/a4.png";

import r1 from "../../Assets/r1.png";
import r2 from "../../Assets/r2.png";
import r3 from "../../Assets/r3.png";
import r4 from "../../Assets/r4.png";
import r5 from "../../Assets/r5.png";
import r6 from "../../Assets/r6.png";

import v1 from "../../Assets/v1.png";
import v2 from "../../Assets/v2.png";
import v3 from "../../Assets/v3.png";
import v4 from "../../Assets/v4.png";
import v5 from "../../Assets/v5.png";
import v6 from "../../Assets/v6.png";


import p1 from "../../Assets/p1.png";
import p2 from "../../Assets/p2.png";
import p3 from "../../Assets/p3.png";


import cp1 from "../../Assets/cp1.png";
import cp2 from "../../Assets/cp2.png";
import cp3 from "../../Assets/cp3.png";
import cp4 from "../../Assets/cp4.png";


import clip from "../../Assets/Clipboard Approve.png";
import rocket from "../../Assets/Rocket.png";
import graph from "../../Assets/Graph Report.png";
import TimeIcon from "@images/timeIcon.png"
import chainIcon from "@images/chain-icons.png"
import RocketIcon from "@images/rocketIcon.png"
import sheildIcon from "../../Assets/sheildIcon.png";
import TaskCheck from "@images/task-check.png"
import flag from "../../Assets/flag.png";
import sun from "../../Assets/sun.png";
import build from "../../Assets/build.png";
import hand from "../../Assets/hand.png";
import eye from "../../Assets/eye.png";

import statistics from "../../Assets/statistics.png";
import refresh from "../../Assets/refresh.png";
import source from "../../Assets/source.png";
import pin from "../../Assets/pin.png";
import cren from "../../Assets/cren.png";
import parts from "../../Assets/parts.png";
import vol from "../../Assets/vol.png";
import signal from "../../Assets/signal.png";
import user from "../../Assets/user.png";
import users from "../../Assets/users.png";
import earth from "../../Assets/earth.png";
import threat from "../../Assets/threat.png";
import detect from "../../Assets/detect.png"
import shield from "../../Assets/sheildIcon.png";
import investigation from "../../Assets/Capa_1.svg";
import thumsup from "../../Assets/thumsup.svg";
import reportIcon from "../../Assets/report.svg";
import EyeIcon from "../../Assets/eye.svg";





export const Blog_landing_Data = [
  {
    category: "MSP GROWTH",
    banner: c1,
    title: "Discover how Vijilan’s unique Cribl partnership is helping MSPs reduce client SIEM licensing costs by up to 40% while improving threat detection capabilities.",
    author: "By Sales Team",
    date: "June 8, 2025",
    action: "Read More..."
  },
  {
    category: "THREAT INTELLIGENCE",
    banner: c2,
    title: "Our SOC analysts break down a recent ransomware incident from initial access to containment, revealing the tactics attackers use and how ThreatRemediate stopped the breach.",
    author: "By Sales Team",
    date: "June 8, 2025",
    action: "Read More..."
  },
  {
    category: "COMPLIANCE & RISK",
    banner: c3,
    title: "The Cybersecurity Maturity Model Certification (CMMC) requirements are here. Use our comprehensive checklist to assess your organization’s readiness.",
    author: "By Sales Team",
    date: "June 8, 2025",
    action: "Read More..."
  },
  {
    category: "MSP GROWTH",
    banner: c4,
    title: "Endpoint protection is just the beginning. Learn why network detection and response (NDR) capabilities are essential for comprehensive threat visibility.",
    author: "By Sales Team",
    date: "June 8, 2025",
    action: "Read More..."
  },
  {
    category: "ENTERPRISE SECURITY",
    banner: c5,
    title: "We're excited to announce our strategic partnership with Corelight, bringing best-in-class network detection and response capabilities to our managed services platform.",
    author: "By Sales Team",
    date: "June 8, 2025",
    action: "Read More..."
  },
  {
    category: "PRODUCT & PARTNER NEWS",
    banner: c6,
    title: "Master the sales conversation that differentiates active threat remediation from traditional alert-only security services. Includes real client scenarios and objection handling.",
    author: "By Sales Team",
    date: "June 8, 2025",
    action: "Read More..."
  }
];

export const weServe = [
  {
    audience: "MSPs, VARs, & MSSPs",
    icon: a1,
    description:
      "Expand your security portfolio, drive new revenue, and protect your clients with Vijilan's robust, managed cybersecurity services, designed for seamless integration and profitability.",
    action: "Explore Partner Tiers & Programs",
    className: "card-msp lg:!py-[60px]"
  },
  {
    audience: "Mid-Market Enterprises",
    icon: a2,
    description:
      "Transform your security operations, gain complete control over your data, and stop breaches faster with Vijilan's AI-driven, cybersecurity services.",
    action: "View Enterprise Solutions",
    className: "card-msp-2"
  },
  {
    audience: "IT Consultants & vCISOs",
    icon: a3,
    description:
      "Recommend best-in-class cybersecurity solutions that empower your clients. Partner with Vijilan to deliver tangible value, strategic oversight, and technical expertise.",
    action: "Join Our Consultant Network",
    className: "card-msp-3 lg:!py-[60px]"
  },
  {
    audience: "Small & Medium Businesses (SMBs)",
    icon: a4,
    description:
      "Robust cybersecurity tailored for your business. We provide industry-leading protection and expert management through our network of trusted and certified Vijilan partners.",
    action: "Find a Vijilan Partner",
    className: "card-msp-4 lg:!mt-[-88px]",
  },

];
export const CardContentData1 = [
  {
    head: "Unlock New MRR",
    sub: "Add high-margin security services to your portfolio. Our model is built to maximize your Monthly Recurring Revenue and profitability.",
    iconed: TimeIcon,
  },
  {
    head: "Your Instant 24/7 SOC",
    sub: "Gain an immediate SOC 2 Type 2 certified Security Operations Center without the overhead. Our experts become an extension of your team.",
    iconed: TimeIcon,
  },
  {
    head: "Go-to-Market Enablement",
    sub: "Access our comprehensive \"ThreatRemediator™\" Enablement Kit with co-brandable materials, sales decks, and proposal generators to win more deals.",
    iconed: RocketIcon,
  },
  {
    head: "Radical Flexibility & No Risk",
    sub: "Benefit from our channel-first approach with no minimum commitments. Full white-labeling, and a 30-day risk-free opt-out trial.",
    iconed: sheildIcon,
  },
  {
    head: "Simplified Compliance",
    sub: "Effortlessly support your clients' compliance requirements, including HIPAA, GDPR, PCI DSS, and CMMC. Vijilan provides detailed reporting, audit-ready documentation, and compliance expertise—reducing your workload and minimizing regulatory risks.",
    iconed: TaskCheck,
  },
  {
    head: "Vendor-Agnostic Integration",
    sub: "Seamlessly integrate with your clients' existing security tools and infrastructure. Vijilan supports extensive integrations across firewalls, endpoints, cloud platforms, and identity solutions, giving you unmatched flexibility without vendor lock-in.",
    iconed: chainIcon,
  },
];

export const processSteps = [
  {
    icon: shield,
    head: "Prepare & Prevent",
    text: "We build your playbooks, train teams, and implement preventive controls to stop incidents before they start",
  },
  {
    icon: detect,
    head: "Detect",
    text: "Our platform uses AI-powered detection across all vectors—endpoints, cloud, identity, and network—to identify threats in real-time.",
  },
  {
    icon: investigation,
    head: "Investigate",
    text: "Our 24/7 SOC analysts instantly investigate and confirm every potential threat, eliminating false positives so your team isn't disturbed.",
  },
  {
    icon: thumsup,
    head: "We Take Action",
    text: "Our SOC takes direct, hands-on action: isolating endpoints, disabling compromised accounts, blocking malicious processes, and actively neutralizing the threat.",
  },
  {
    icon: reportIcon,
    head: "Report & Harden",
    text: "We provide a full incident report detailing the attack, the actions taken, and expert recommendations to harden your defenses against future attacks.",
  },
  {
    icon: EyeIcon,
    head: "Review & Refine",
    text: "Post-incident, we analyze outcomes and continuously improve your detection, response, and prevention capabilities for ever-increasing resilience.",
  },
];


export const StrategicData = [
  {
    title: "The MSP's Playbook for Profitable Security Services",
    description:
      "A comprehensive guide for MSPs on how to package, price, and sell managed security services \neffectively.",
    action: "Download now"
  },
  {
    title: "The CISO's Handbook to Combating AI-Driven Attacks",
    description:
      "An essential resource for enterprise security leaders on understanding and defending against the next generation of automated threats.",
    action: "Download now"
  },
  {
    title: "The Consultant's Guide to Modernizing Cybersecurity",
    description:
      "Actionable insights for IT Consultants and vCISOs on recommending and implementing modern SOC solutions and data strategies for clients.",
    action: "Download now"
  }
];

export const resourceData = [
  {
    banner: r1,
    tab: "Whitepaper",
    title: "Mastering Cross-Domain Defense: A Strategic Guide for MSPs",
    description:
      "Comprehensive strategies for implementing unified security across endpoints, cloud, and network environments to maximize protection while minimizing complexity.",
    cta: "Download Pdf"
  },
  {
    banner: r2,
    tab: "CaseStudy",
    title: "How a Gold Tier MSP Increased MRR by 30% with ThreatRemediate",
    description:
      "Real-world results from a 150-employee MSP that transformed their security practice, reduced operational overhead, and significantly boosted recurring revenue.",
    cta: "Read More..."
  },
  {
    banner: r3,
    tab: "Webinars",
    title: "On-Demand Webinar: Deconstructing a Real-World Ransomware Attack",
    description:
      "Step-by-step analysis of an actual ransomware incident, from initial compromise to containment, with expert commentary from our SOC team.",
    cta: "Read More..."
  },
  {
    banner: r4,
    tab: "Blog Article",
    title: "5 Ways Our Cribl Integration Slashes SIEM Costs",
    description:
      "Endpoint protection is just the beginning. Learn why network detection and response (NDR) capabilities are essential for comprehensive threat visibility.",
    cta: "Read More..."
  },
  {
    banner: r5,
    tab: "Case Study",
    title: "The CISO's Handbook to Combating AI-Driven Attacks",
    description:
      "Advanced defensive strategies for protecting against sophisticated AI-powered threats, including detection techniques and response frameworks for modern enterprise environments.",
    cta: "Read More..."
  },
  {
    banner: r6,
    tab: "Webinars",
    title: "How a Mid-Market Enterprise Reduced Alert Fatigue by 99%",
    description:
      "Learn how a 500-employee company eliminated false positives and transformed their security operations with intelligent alert correlation and automated response.",
    cta: "Read More..."
  }
];

export const Recommend = [
  {
    title: "Recommend the Best",
    description: "Confidently recommend our solutions, built on elite technology from CrowdStrike, Cribl, and Corelight, and validated by our SOC 2 Type 2 certification.",
    icon: v1
  },
  {
    title: "Focus on the Sale, Not the SOC",
    description: "For VARs, our flagship ThreatRemediate™ service is a 'hands-off' solution. We handle the 24/7 monitoring and remediation, you maintain the client relationship.",
    icon: v2
  },
  {
    title: "Enhance Your Strategic Role",
    description: "For vCISOs and Consultants, our solutions provide the strategic oversight and operational excellence needed to elevate your clients' security posture and simplify compliance.",
    icon: v3
  },
  {
    title: "Stay Ahead of Threats",
    description: "Strengthen your advisory reputation with real-time insights and proactive threat intelligence from Vijilan's dedicated research team. We empower you to stay informed about emerging threats, guide your clients confidently, and proactively manage their cybersecurity posture.",
    icon: v4
  },
  {
    title: "A Partnership That Pays",
    description: "Our channel-first model is designed to be a win-win, rewarding you for bringing industry-leading security and data management solutions to your clients.",
    icon: v5
  },
  {
    title: "Confirm & Close",
    description: "Vijilan handles the heavy lifting—from streamlined onboarding, automated reporting, and ongoing operational support, to dedicated service delivery. With our expert team managing security operations, you can effortlessly deliver high-value outcomes without complexity, freeing your team to focus fully on strategic advisory and client growth.",
    icon: v6
  }
]


export const PartnershipSteps = [
  {
    stepTitle: "Register & Align",
    description: "Join our network to get access to exclusive resources and training.",
    icon: p1
  },
  {
    stepTitle: "Recommend & Propose",
    description: "Use our enablement materials to present best-in-class solutions to your clients.",
    icon: p2
  },
  {
    stepTitle: "Deliver Value & Earn",
    description: "We handle the service delivery while you strengthen your client relationship and benefit from our partnership.",
    icon: p3
  }
]
export const ClientServices = [
  {
    title: "ThreatRemediate (Fully Managed XDR)",
    description: "Our flagship ThreatRemediate service is perfect for VARs to sell and for Consultants to recommend. It provides comprehensive, active remediation without requiring any operational overhead from you or your client's IT team.",
    link: "The Ideal Hands-Off Solution"
  },
  {
    title: "Professional Services (Cribl & Corelight)",
    description: "For enterprise clients with complex data challenges, you can confidently recommend our Professional Services for expert implementation and management of Cribl and Corelight, solving major data optimization and network visibility problems.",
    link: "Expert Implementation Services"
  }
]


export const Empower = [
  {
    title: "The Consultant's Guide to Modernizing Cybersecurity",
    button: "DOWNLOAD GUIDE",
    des: "Add Icon"
  },
  {
    title:`The vCISO's Blueprint for a Future-Proof SOC`,
    button: "DOWNLOAD BLUEPRINT",
    des: "Add Icon"
  },
  {
    title: "Quick Sell Guide: ThreatRemediate for VARs",
    button: "DOWNLOAD GUIDE",
    des: "Add Icon"
  }
]


export const Automation = [
  {
    icon: a1,
    title: "Live Pricing Calculator",
    description: "Generate accurate quotes instantly. Input client assets and get real-time pricing with margin calculations.",
    "buttonText": "Launch calculator"
  },
  {
    icon: a2,
    title: "Quote Builder & Proposal Generator",
    description: "Build professional proposals in minutes. Automated formatting, co-branding, and instant PDF generation.",
    "buttonText": "Build quote"
  },

  {
    icon: a3,
    title: "Partner ROI Calculator",
    description: "Show prospects their security ROI and payback period. Interactive financial modeling built-in.",
    "buttonText": "Calculate ROI"
  },
  {
    icon: a2,
    title: "Jen AI Sales Assistant",
    description: "Get instant answers about pricing, technical specs, and competitive positioning. Available 24/7.",
    "buttonText": "Start chat"
  }
]


export const ComplainSays = [

  {
    title: "For Your Business",
    description: "Meet your direct and often complex compliance obligations with our audit-ready reporting and long-term data retention, mapped to frameworks like NIST and ISO 27001. Reduce compliance workload while maintaining the highest security standards."
  },
  {
    title: "For Your Clients",
    description: "Empower your MSP to serve clients in regulated industries like healthcare and finance. Offer compliance-ready security services that open up new, profitable markets while providing the expertise your clients trust."
  },
]

export const complianceFeatures = [

  {
    icon: cp1,
    title: "7-Year Raw Log Retention",
    description: "Meet long-term data retention requirements for forensics and audits with our secure, cost-effective raw log storage that exceeds industry standards."
  },
  {
    icon: cp2,
    title: "Audit-Ready Reporting",
    description: "Generate comprehensive, on-demand reports mapped to specific compliance controls, simplifying your audit process and demonstrating due diligence."
  },
  {
    icon: cp3,
    title: "24/7 Continuous Monitoring",
    description: "Our SOC provides continuous monitoring of your environment to detect and respond to potential compliance violations or security incidents in real time."
  },
  {
    icon: cp4,
    title: "SOC 2 Type 2 Certified",
    description: "Our own operations are independently audited and SOC 2 Type 2 certified, giving you confidence in our security, processes, and integrity."
  }
]


export const partnerShip = [

  {
    title: "Market Positioning",
    description: "Position yourself as the premium cybersecurity provider with enterprise-grade solutions and 24/7 SOC capabilities.",
    icon: clip
  },
  {
    title: "Sales Enablement",
    description: "Leverage our comprehensive sales toolkit, including co-brandable materials, pricing simulators, and proposal generators.",
    icon: rocket
  },
  {
    title: "Technical Training",
    description: " Get your team certified on our platform with hands-on training from our technical success managers.",
    icon: graph
  }
]


export const partnerShipDesign = [
  {
    title: "Unlock New MRR",
    description: "Add high-margin security services to your portfolio. Our model is built to maximize your Monthly Recurring Revenue and profitability",
    icon: "TiLockOpenOutline"
  },
  {
    title: "Your Instant 24/7 SOC",
    description: "Gain an immediate, SOC 2 Type 2 certified Security Operations Center without the overhead. Our experts become an extension of your team",
    icon: "iconSOC"
  },
  {
    title: "Go-to-Market Enablement",
    description: "Access our comprehensive ThreatRemediate Enablement Kit with co-brandable materials, sales decks, and proposal generators to win more deals.",
    icon: 'x'
  },
  {
    title: "Radical Flexibility & No Risk",
    description: "Benefit from our channel-first approach with no minimum commitments, full white-labeling, and a 30-day risk-free opt-out trial.",
    icon: "iconFlexibility"
  },
  {
    title: "Simplified Compliance",
    description: "Effortlessly support your clients’ compliance requirements, including HIPAA, GDPR, PCI DSS, and CMMC. Vijilan provides detailed reporting, audit-ready documentation, and compliance expertise—reducing your workload and minimizing regulatory risks.",
    icon: "iconCompliance"
  },
  {
    title: "Vendor-Agnostic Integration",
    description: "Seamlessly integrate with your clients’ existing security tools and infrastructure. Vijilan supports extensive integrations across firewalls, endpoints, cloud platforms, and identity solutions, giving you unmatched flexibility without vendor lock-in.",
    icon: "iconIntegration"
  }
]

export const partnerFeedback = [
  {
    sectionTitle: "What Our Partners say",
    testimonial: "Our security MRR increased by 30% within 6 months of partnering with Vijilan. Their SOC is world-class, and the active remediation in ThreatRemediate is a game-changer for our clients.",
    author: "Alex Johnson, CEO of a Silver Tier MSP Partner"
  },
  {
    sectionTitle: "A Message to Our Future Partners",
    testimonial: "We built our partner program on a foundation of trust and mutual success. We succeed when you succeed. That's why we provide the best technology, an expert SOC, and the GTM support you need to win.",
    author: "Alex Johnson, CEO of a Silver Tier MSP Partner",
    show: true
  }
]

export const dashbordTabs = [

  {
    type: "add icon",
    title: "Upsell Playbook",
    action: "access"
  },
  
  {
    type: "add icon",
    title: "Competitive of Battlecards",
    action: "access"
  },

  {
    type: "add icon",
    title: "Technical Guides",
    action: "access"
  },
  ,
  ,
  {
    type: "add icon",
    title: "Master Services Agreement",
    action: "access"
  },
  {
    type: "add icon",
    title: "Statement of Work (SOW)",
    action: "access"
  },


]


export const SMBCard = [
  {
    title: "I Need IT Services",
    description: "Find a trusted, local provider for cybersecurity, managed IT, cloud solutions, and more.",
    button: "Find a Partner →"
  },
  {
    title: "I Provide IT Services",
    description: "Join our marketplace to connect with qualified SMBs and grow your MSP business.",
    button: "Join the Marketplace →"
  },
  {
    title: "I Build IT Technology",
    description: "Integrate your solution and reach thousands of MSPs and SMBs through our partner ecosystem.",
    button: "Become a Vendor →"
  }
]

export const benefitsData = [
  {
    icon: p1,
    title: "Receive Qualified Leads",
    description: "Get inbound requests from local businesses who have already specified their needs."
  },
  {
    icon: p2,
    title: "Showcase Your Expertise",
    description: "Build a detailed profile highlighting your services, tech stack, and certifications to attract the right clients."
  },
  {
    icon: p3,
    title: "Leverage a Powerful Ecosystem",
    description: "Utilize our integrated solutions and technology alliances to deliver superior service and build client trust."
  }
];

export const ExucativeSummary = [
  {
    icon: p1,
    label: "Sales Performance",
    text: "2x increase in security service attach rate across all deals"
  },
  {
    icon: p2,
    label: "Profit Margins",
    text: "40% increase in recurring service margins"
  },
  {
    icon: p1,
    label: "Sales Cycle",
    text: "Reduced time-to-close with pre-built materials"
  },
  {
    icon: p2,
    label: "Client Retention",
    text: "Enhanced loyalty through market-leading security"
  }

]

export const SalesProcess = [
  {
    label: "Discovery",
    text: "Use provided qualification questions to identify security needs",
    icon: p1
  },
  {
    label: "Discovery",
    text: "Use provided qualification questions to identify security needs",
    icon: p1
  },
  {
    label: "Proposal",
    text: "Generate professional proposal using automated tools",
    icon: p1
  },
  {
    label: "Implementation",
    text: "Vijilan handles complete deployment and ongoing management",
    icon: p1
  },

]

export const SecurityCardData = [
  {
    icon: p1,
    "label": "ThreatRemediate Complete",
    "text": "Fully managed XDR providing robust endpoint protection and active remediation across IT environment"
  },
  {
    icon: p1,
    "label": "Managed Corelight Services",
    "text": "Deep network visibility and analytics through Network Detection and Response (NDR) for OT networks"
  },
  {
    icon: p1,
    "label": "Managed Cribl Services",
    "text": "Intelligent data ingestion, routing, and management from both IT and OT sources"
  },
  {
    icon: p1,
    "label": "Unified Visibility",
    "text": "Single pane of glass for threat detection across converged IT/OT environment"
  }
]

export const controllArray = [
  {
    icon: p1,
    "label": "Access Control",
    text: "22 Controls"
  },
  {
    icon: p1,
    "label": "Audit & Accountability",
    text: "13 Controls"
  },
  {
    icon: p1,
    "label": "System Security",
    text: "23 Controls"
  },
  {
    icon: p1,
    "label": "Media Protection",
    text: "9 Controls"
  },
  {
    icon: p1,
    "label": "Incident Response",
    text: "16 Controls"
  },
  {
    icon: p1,
    "label": "Additional Domains",
    text: "27 Controls"
  }
]

export const awsCard = [
  {
    icon: p1,
    "label": "Rapid Procurement",
    "text": "Streamlined government buying process"
  },
  {
    icon: p1,
    "label": "Simplified Billing",
    "text": "Unified AWS billing and payment"
  },
  {
    icon: p1,
    "label": "Pre-Approved Solutions",
    "text": "AWS-vetted security services"
  },
  {
    icon: p1,
    "label": "Instant Deployment",
    "text": "Cloud-native rapid activation"
  }
]


export const IT_IO = [
  {
    icon: p1,
    "label": "Assessment & Planning",
    "text": "CMMC gap analysis and implementation roadmap development"
  },
  {
    icon: p1,
    "label": "AWS Marketplace Deployment",
    "text": "Rapid procurement and initial security platform activation"
  },
  {
    icon: p1,
    "label": "Security Controls Implementation",
    "text": "EDR deployment and 24/7 monitoring establishment"
  },
  {
    icon: p1,
    "label": "CUI Protection Activation",
    "text": "Specialized controls for Controlled Unclassified Information"
  },
  {
    icon: p1,
    "label": "Documentation & Reporting",
    "text": "Audit-ready compliance documentation generation"
  },
  {
    icon: p1,
    "label": "CMMC Audit Readiness",
    "text": "Final validation and certification preparation"
  }
]


export const usExucativeSummary = [
  {
    icon: p1,
    "label": "SEC Cybersecurity",
    text: "Zero Findings"
  },
  {
    icon: p1,
    "label": "GLBA Safeguards",
    text: "Fully Compliant"
  },
  {
    icon: p1,
    "label": "FFIEC Guidelines",
    text: "Exceeds Standards"
  },
  {
    icon: p1,
    "label": "Audit Documentation",
    text: "Audit-Ready"
  }
]


export const financialService = [
  {
    icon: p1,
    "text": "Financial Fraud",
    "metric": "Prevented"
  },
  {
    icon: p1,
    "text": "APT Groups",
    "metric": "Detected"
  },
  {
    icon: p1,
    "text": "Credential Theft",
    "metric": "Monitored"
  },
  {
    icon: p1,
    "label": "Data Exfiltration",
    "metric": "Blocked"
  }
]


export const Datapipeline = [
  {
    "icon": source,
    "label": "Data Sources",
    "text": "Multi-client log collection"
  },
  {
    "icon": refresh,
    "label": "Cribl Stream",
    "text": "Route, filter & enrich"
  },
  {
    "icon": statistics,
    "label": "LogScale",
    "text": "Real-time analysis"
  },
  {
    "icon": pin,
    "label": "SOC Operations",
    "text": "Enhanced investigations"
  }
]

export const coreTechnology = [
  {
    "icon": cren,
    "label": "CrowdStrike LogScale",
    "text": "Index-free architecture enabling real-time search and massive scalability"
  },
  {
    "icon": parts,
    "label": "Cribl Stream",
    "text": "Intelligent data processing reducing volume by 50% while enhancing quality"
  },
  {
    "icon": vol,
    "label": "LogIngest",
    "text": "Unified log collection and normalization across all client environments"
  },
  {
    "icon": signal,
    "label": "LogAlert",
    "text": "Real-time detection rules and automated alerting for SOC operations"
  }
]


export const detectionArray = [
  {
    "time": "2:17 AM",
    "label": "Ransomware Begins Encryption",
    "text": "Sophisticated ransomware variant bypasses traditional antivirus and begins encrypting files on endpoint"
  },
  {
    "time": "2:17 AM",
    "label": "Vijilan SOC Detects Anomaly",
    "text": "Behavioral analysis identifies suspicious encryption patterns and triggers immediate alert"
  },
  {
    "time": "2:17 AM",
    "label": "Active Containment Initiated",
    "text": "SOC analyst isolates infected endpoint from network, preventing lateral spread"
  },
  {
    "time": "2:17 AM",
    "label": "Threat Fully Remediated",
    "text": "Malware removed, attack vector identified, and security posture hardened"
  },
  {
    "time": "2:17 AM",
    "label": "MSP Notified with Full Report",
    "text": "Comprehensive incident report delivered to MSP with recovery recommendations"
  },
  {
    "time": "2:17 AM",
    "label": "Full Recovery Complete",
    "text": "Affected files restored from backup, systems verified clean, business ready to open"
  }
]

export const complianceArray = [
  { icon: p1, label: "Administrative Safeguards", text: "Fully Compliant" },
  { icon: p1, label: "Technical Safeguards", text: "Fully Compliant" },
  { icon: p1, label: "Physical Safeguards", text: "Fully Compliant" },
  { icon: p1, label: "Audit Documentation", text: "Audit-Ready" }
];


export const healthcareArray = [
  { icon: p1, label: "Ransomware", text: "Protected" },
  { icon: p1, label: "Credential Theft", text: "Monitored" },
  { icon: p1, label: "Data Exfiltration", text: "Prevented" },
  { icon: p1, label: "Medical Device Attacks", text: "Secured" }
];


export const threatProtectionArray = [
  { icon: p1, label: "Financial Fraud", text: "Prevented" },
  { icon: p1, label: "APT Groups", text: "Detected" },
  { icon: p1, label: "Credential Theft", text: "Monitored" },
  { icon: p1, label: "Data Exfiltration", text: "Blocked" }
];
export const healthcareSecurity = [
  {
    icon: threat,
    label: "Managed ITDR",
    text: "Real-time identity threat detection and response protecting patient records from unauthorized access"
  },
  {
    icon: threat,
    label: "Exposure Management",
    text: "Continuous asset discovery and AI-powered risk prioritization across healthcare infrastructure"
  },
  {
    icon: threat,
    label: "Compliance Reporting",
    text: "Comprehensive audit-ready documentation supporting HIPAA regulatory adherence"
  }
];

export const ThreatRemediate_Ultimate = [

  {
    icon: threat,
    label: "CrowdStrike Falcon XDR",
    text: "Advanced endpoint detection and response with AI-powered threat hunting"
  },
  {
    icon: earth,
    label: "Corelight Network Detection",
    text: "Comprehensive network visibility and threat detection capabilities"
  },
  {
    icon: parts,
    label: "Cribl Data Optimization",
    text: "Efficient log management and cost optimization for data ingestion"
  },
  {
    icon: user,
    label: "Identity Protection (ITDR)",
    text: "Managed Identity Threat Detection and Response capabilities"
  },
  {
    icon: pin,
    label: "Exposure Management",
    text: "Proactive vulnerability and exposure assessment and management"
  },
  {
    icon: users,
    label: "24/7 Expert SOC",
    text: "US-based Security Operations Center with active remediation"
  }
];

export const DeploymentTimeline = [
  {
    label: "Week 1: Discovery & Planning",
    text: "Comprehensive assessment of existing infrastructure, client environments, and security requirements. Development of implementation roadmap and client communication strategy."
  },
  {
    label: "Week 2: Platform Deployment",
    text: "Installation and configuration of CrowdStrike Falcon agents, Corelight sensors, and Cribl data pipelines across client environments. Initial SOC integration and monitoring setup."
  },
  {
    label: "Week 3: Testing & Optimization",
    text: "Comprehensive testing of all security components, alert tuning, and optimization of data flows. Training for MSP technical team on new processes and escalation procedures."
  },
  {
    label: "Week 4: Full Production",
    text: "Complete transition to full production monitoring with Vijilan's SOC providing 24/7 threat detection, investigation, and active remediation services."
  }
];

export const CISOCard=[
  {
    "icon": eye,
    "title": "Unify Your Security Stack",
    "description": "We ingest and correlate data from your disparate tools, eliminating blind spots and providing true cross-domain visibility without costly rip-and-replace projects."
  },
  {
    "icon": sun,
    "title": "Extend Your SOC's Reach",
    "description": "Our 24/7 US-Based SOC acts as a direct extension of your team, handling the noise of alert triage so your experts can focus on strategic initiatives."
  },
  {
    "icon": flag,
    "title": "Receive Actionable Incidents",
    "description": "Leveraging AI and expert analysis, we deliver only high-fidelity, actionable incidents that require your attention, freeing your team from the noise of false positives."
  },
  {
    "icon": hand,
    "title": "Optimize Your Data Costs",
    "description": "Demonstrate clear ROI with our data optimization services powered by Cribl. We can significantly reduce your SIEM and data storage costs while enriching your security data."
  },
  {
    "icon": eye,
    "title": "Achieve Full-Stack Visibility & Unified Defense",
    "description": "CISOs want one pane of glass—not 17 dashboards. We consolidate telemetry and apply advanced correlation across endpoints, network, cloud, identity, and SaaS environments, enabling your team to see real threats—not isolated alerts—for better, faster decision-making."
  },
  {
    "icon": build,
    "title": "Proactive Risk Reduction & Strategic Enablement",
    "description": "CISOs expect MDR to go beyond monitoring. Our SOC doesn't just monitor—we treat alerts as opportunities for improvement, develop playbooks, optimize SLAs, and build cost-effective frameworks that evolve with your risk posture. That's strategic partnership."
  }
]
