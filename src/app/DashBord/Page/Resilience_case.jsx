// Responsive complete

import Heading_Btn from '@components/Heading_Btn';
import React from 'react';
import NumberShow from '../component/NumberShow';
import ProfileHRCard from '../component/ProfileHRCard';
import CommonTextCard from '../component/CommonTextCard';
import DashBoardCard from '../component/DashBoardCard';
import DashboardSideText from '../component/DashboardSideText';
import ListComponent from '../component/ListComponent';
import { SecurityCardData } from '@app/Constant/Constant';
import MesurableComponentDashboard from '../component/MesurableComponentDashboard';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Resilience_case = () => {

    const numberArray = [
        {
            "label": "Production Uptime",
            "metric": "99.9%"
        },
        {
            "label": "Faster Containment",
            "metric": "80%"
        },
        {
            "label": "IT/OT Visibility",
            "metric": "100%"
        },
        {
            "label": "Production Incidents",
            "metric": "0"
        }
    ]

    const productionArray = [
        {
            "label": "Uptime Maintained",
            "metric": "99.9%",
            "text": "Zero security-related production disruptions"
        },
        {
            "label": "Faster Response",
            "metric": "80%",
            "text": "Rapid threat containment in OT networks"
        },
        {
            "label": "Monitoring",
            "metric": "24/7",
            "text": "Continuous protection across all facilities"
        },
        {
            "label": "Visibility",
            "metric": "100%",
            "text": "Complete IT/OT network transparency"
        }
    ]

    const list1 = [
        "Any security incident could halt production lines, leading to significant revenue loss and supply chain disruption"
        ,
        "Lacked visibility into legacy OT networks, making it difficult to detect malicious activity or vulnerabilities in industrial ontrol systems"
        ,
        "Increasing connectivity between IT and OT systems created new, unmonitored pathways for potential attacks"
        ,
        "Managing and correlating security data from both IT and OT environments was overwhelming for the internal team"
        ,

        "Aging OT infrastructure with limited security capabilities and inability to install traditional security agents"
        ,
        "Internal security team was stretched thin and needed a partner to act as a force multiplier"
        ,
        "Security solutions needed to monitor without impacting real-time industrial processes"

    ]


    const securityArray = [
        {
            "label": "ThreatRemediate Complete for IT Infrastructure",
            "text": "Comprehensive endpoint protection across corporate IT environment with active remediation capabilities. This solution secured all traditional IT assets including workstations, servers, and business applications while providing 24/7 monitoring and response."
        },
        {
            "label": "Corelight NDR for OT Network Security",
            "text": "Advanced Network Detection and Response specifically designed for industrial environments. Corelight provided deep network visibility and analytics, allowing for comprehensive threat hunting within sensitive OT networks without requiring agent installation on critical industrial systems."
        },
        {
            "label": "Cribl Data Management",
            "text": "Intelligent data processing eliminated \"data chaos\" by managing vast amounts of telemetry from both IT and OT sources. Cribl reduced noise while ensuring high-fidelity data was analyzed for threats, providing the unified visibility needed for effective security operations."
        },
        {
            "label": "Force Multiplier Effect",
            "text": "The integrated solution provided the client's internal team with unified visibility while freeing them to focus on broader security risks and strategic initiatives rather than day-to-day threat hunting and incident response."
        }
    ]

    const MeasurabeCard = [
        {
            "label": "Uptime Maintained",
            "metric": "99.9%",
            "text": "Zero security-related production disruptions across all facilities"
        },
        {
            "label": "Faster Containment",
            "metric": "80%",
            "text": "Rapid threat response in OT networks without production impact"
        },
        {
            "label": "IT/OT Visibility",
            "metric": "100%",
            "text": "Complete transparency across converged industrial networks"
        },
        {
            "label": "Production Incidents",
            "metric": "0",
            "text": "Proactive threat detection prevented all production disruptions"
        },
        {
            "label": "Data Noise Reduction",
            "metric": "90%",
            "text": "Cribl optimization eliminated security alert fatigue"
        },
        {
            "label": "Force Multiplier",
            "metric": "24/7",
            "text": "Vijilan SOC acting as seamless extension of internal team"
        }
    ]

    const excelList = [
        {
            "label": "Expertise in Converged Environments",
            "text": "Vijilan specializes in securing complex IT/OT environments, understanding the unique challenges of industrial networks where traditional cybersecurity approaches can be inadequate or even dangerous to production operations."
        },
        {
            "label": "Advanced NDR Capabilities",
            "text": "The partnership with Corelight provides unparalleled network visibility for deep threat hunting and incident response, which is critical for OT security where endpoint agents cannot be deployed on industrial control systems."
        },
        {
            "label": "Intelligent Data Management",
            "text": "Vijilan's mastery of Cribl transforms \"data chaos\" from disparate IT and OT systems into actionable intelligence, enabling more effective and cost-efficient security operations across complex manufacturing environments."
        },
        {
            "label": "Active Remediation",
            "text": "Unlike \"detection-only\" services, Vijilan's SOC takes direct action to contain and remediate threats—a critical capability in manufacturing where every second of downtime directly impacts revenue and production targets."
        }
    ]

    return (
        <div>

            {/* top part */}
            <section className="pt-[150px]">
                <div className="container mx-auto px-[16px] md:px-6">
                <div className="mb-8">
                    <nav className="flex flex-wrap items-center text-[12px]">
                        <Link to={"/"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                            <span className=" cursor-pointer" style={{color: "#7E7E7E"}}>Home</span>
                        </Link>
                        <ChevronRight className="w-4 h-4 mx-2"style={{color: "#7E7E7E"}} />
                        <Link to={"/resources"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                            <span className=" cursor-pointer" style={{color: "#7E7E7E"}}>Resources</span>
                        </Link>
                        <ChevronRight className="w-4 h-4 mx-2"style={{color: "#7E7E7E"}} />
                        <Link to={"/case-studies"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                            <span className=" cursor-pointer" style={{color: "#7E7E7E"}}>Case Studies</span>
                        </Link>
                        <ChevronRight className="w-4 h-4 mx-2"style={{color: "#7E7E7E"}} />
                        <span className=" text-[13px] font-medium" style={{ color: "#00AEEF" }}>Manufacturing Resilience</span>
                    </nav>
                </div>
                </div>

            </section>

            <section>

                <div className="container mx-auto px-[16px] md:px-6">
                    <div className='flex items-center justify-center mx-auto mb-6'>
                    <button className='text-[14px] font-bold px-[25px] md:px-[40px] py-[15px] rounded-[40px]' style={{
                        background: "linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)"
                    }}>Manufacturing Security Success</button>
                </div>

                <div className='mb-16'>
                    <h1 className='text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-14'>Manufacturing Firm Secures OT Assets <br /> and Ensures 99.9% Uptime</h1>
                    <p className='text-[18px] text-center'>Discover how a global manufacturing company achieved comprehensive IT/OT <br /> security with 99.9% production uptime and 80% faster threat containment through Vijilan's unified security platform.</p>
                </div>


                <div className='w-full max-w-[800px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-5'>
                    {
                        numberArray.map(card => <NumberShow link={card.label} number={card.metric} />)
                    }
                </div>
                </div>
            </section>

            {/* Summary */}

<div className="container mx-auto px-[16px] md:px-6">
    
            <div className=' grid grid-cols-1 md:grid-cols-2 gap-8 mt-12'>

                <div className='grid-cols-1'>

                    <div className='mt-5 py-5 px-[30px]' style={{
                        background: "linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)"
                    }}>

                        <div className='text-left'>
                            {/* <img src='../../../Assets/trade.png' alt="trade" /> */}
                            <h1 className='font-medium text-[24px] my-5'>📈 Executive Summary</h1>
                            <p className='my-5 text-[16px]'>     A large global manufacturing firm with multiple production facilities faced the critical challenge of securing their complex, converged IT and Operational Technology (OT) environment. With production uptime directly tied to revenue, any security incident that could halt production lines represented not just a cybersecurity risk, but a potential financial catastrophe.
                                The manufacturer needed a comprehensive security solution that could provide unified visibility across both corporate IT systems and sensitive production OT networks, while ensuring that security measures would never interfere with critical manufacturing operations.</p>
                        </div>

                        <div className='mb-8'>

                            <h2 className='text-[20px] font-medium text-center my-8'>Production Continuity Achievement</h2>

                            <div className='grid grid-cols-1 md:grid-cols-2  gap-5'>
                                {productionArray.map(card => <DashBoardCard
                                    heading={card.label}
                                    Number={card.metric}
                                    desc={card.text}
                                    isSize={true}
                                />)}
                            </div>
                        </div>


                    </div>
                    {/* ⚠️ Industrial Security Challenges */}
                    <div>
                        <ListComponent
                            heading="⚠️ Industrial Security Challenges"
                            p1="Manufacturing environments present unique cybersecurity challenges where traditional IT security approaches can be inadequate or even dangerous to production operations:"
                            array={list1}
                            headingSize={true}
                        />
                    </div>

                    <div className=' py-5 px-[30px] my-12' style={{
                        background: "linear-gradient(0deg, #191624 16.11%, #F89B29 328.5%)"
                    }}>

                        <h1 className='text-[24px] font-medium my-5  text-center '> Converged IT/OT Network Environment</h1>

                        <div className='flex flex-col lg:flex-row gap-5'>
                            <div className='w-full lg:w-1/2 bg-[#CDCDD466] py-5 px-8 rounded-lg'>
                                <h1 className='text-xl font-medium mb-2'>Corporate IT Network</h1>


                                <ul>
                                    <li className='list-disc border-b pb-1 border-[#FFFFFF42]'>
                                        Enterprise Application
                                    </li>
                                    <li className='list-disc border-b pb-1 border-[#FFFFFF42]'>
                                        Office Workstations
                                    </li>
                                    <li className='list-disc border-b pb-1 border-[#FFFFFF42]'>
                                        Enterprise Application
                                    </li>
                                    <li className='list-disc border-b pb-1 border-[#FFFFFF42]'>
                                        Business Systems
                                    </li>
                                    <li className='list-disc border-b pb-1 border-[#FFFFFF42]'>
                                        Cloud Connections
                                    </li>
                                </ul>
                            </div>
                            <div className='w-full lg:w-1/2 bg-[#CDCDD466] py-5 px-8 rounded-lg'>
                                <h1 className='text-xl font-medium mb-2'>Operational Technology (OT)</h1>


                                <ul>
                                    <li className='list-disc border-b pb-1 border-[#FFFFFF42]'>
                                        Enterprise Application
                                    </li>
                                    <li className='list-disc border-b pb-1 border-[#FFFFFF42]'>
                                        Office Workstations
                                    </li>
                                    <li className='list-disc border-b pb-1 border-[#FFFFFF42]'>
                                        Enterprise Application
                                    </li>
                                    <li className='list-disc border-b pb-1 border-[#FFFFFF42]'>
                                        Business Systems
                                    </li>
                                    <li className='list-disc border-b pb-1 border-[#FFFFFF42]'>
                                        Cloud Connections
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    <div >
                        <CommonTextCard
                            array={securityArray}
                            card={SecurityCardData}
                            heading="🛡️ Comprehensive IT/OT Security Solution"
                            p1="Vijilan deployed an integrated security platform specifically designed for complex manufacturing environments, providing unified protection across both IT and OT networks:"
                            
                        />
                    </div>

                    <DashboardSideText
                        desc="Vijilan's ThreatRemediate Complete is the perfect solution for a sales-focused VAR. It's easy to sell, requires zero post-sale management from our team, and our margins have never been better. The partner enablement toolkit had our team closing deals in the first week. It's a true 'sell it and forget it' model with recurring revenue."
                        author="Director of Sales, VAR Partner"
                    />

                </div>

                <div className='grid-cols-1'>


                    <div className='mt-5'>
                        <ProfileHRCard
                        h1="VAR Profile"
                        l1l="Business type"
                        l1r="Value Added Reseller"
                        l2l="Partnership Level"
                        l2r="Silver Tier"
                        l3l="Business Focus"
                        l3r="Sales-Driven"
                        l4l="Primary Services"
                        l4r="Technology Solutions"
                        l5l="Target Market"
                        l5r="SMB & Mid-Market"
                        l6l="Geographic Region"
                        l6r="Regional"
                        SizeModify={true}
                    />
                    </div>

                    <div className='mt-10'>
                        <MesurableComponentDashboard
                            heading="Manufacturing Security & Operational Results"
                            array={MeasurabeCard}
                            isColor={true}
                        />
                    </div>

                    <div className='mt-10'>
                        <DashboardSideText
                            desc="Vijilan's team functions as a seamless extension of our own. Their ability to manage our data with Cribl and provide active remediation has freed up my internal resources to focus on bigger picture risks. It's a true force multiplier"
                            author="CISO, Manufacturing Firm"
                        />
                    </div>


                    <div className='mt-10'>
                        <CommonTextCard
                            array={excelList}
                            heading={"🏭 Why Vijilan Excels in\nManufacturing Security"}
                            SizeControl={true}
                        />
                    </div>
                </div>
            </div>

            {/* last component  */}




           <div className='py-16'>
             <Heading_Btn
                h1={"Secure Your Manufacturing\nOperations"}
                desc={"Discover how Vijilan's specialized IT/OT security solutions can protect your\nproduction environment while ensuring 99.9% uptime and operational continuity."}
                btn1="explore manufacturing solutions"
                btn9="schedule  ot security assessment"
            />
           </div>
</div>
        </div>
    );
};

export default Resilience_case;