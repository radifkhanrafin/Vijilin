import { Play, Search, Users, MessageSquare, CheckCircle, ArrowRight, Menu } from "lucide-react"
import detect from "../../Assets/detect.png"
import shield from "../../Assets/sheildIcon.png";
import investigation from "../../Assets/Capa_1.svg";
import thumsup from "../../Assets/thumsup.svg";
import reportIcon from "../../Assets/report.svg";
import EyeIcon from "../../Assets/eye.svg";
import Heading_Btn from "@components/Heading_Btn";
import CardContent from "@components/CardContent";
import GradientButton from "@components/GradientButton";
import { processSteps } from "@app/Constant/Constant";
import { Link } from "react-router-dom";


export default function Component() {

    return (
        <div className="min-h-screen">

            {/* Hero Section */}
           <div className="pt-[150px]">
             <Heading_Btn
                h1="Beyond Detection: We Stop Breaches with ThreatRemediate™"
                desc={"Our flagship fully managed XDR service. We don't just send alerts—our 24/7 expert\nSOC actively contains and remediates threats across your entire digital ecosystem,\npowered by CrowdStrike."}
                btn1="watch a 2-minute  overview"
                btn2="get an instant quote"
                url={"/videos-library"}
                url2={"/contact"}
            />
           </div>


            {/* Video Section */}
            <section className="container py-16 !pt-[0px] md:px-8">
                <div className=" text-center">
                    <h2 className="text-2xl md:text-[40px] font-bold tracking-tight text-white sm:text-4xl">
                        See ThreatRemediate in Action
                    </h2>
                    <p className="mt-2 text-sm md:text-[18px] text-[#FFFFFF]">
                        Watch how our expert SOC transforms threat detection into active remediation
                    </p>
                    <div className="mt-12 relative">
                        <div className="relative aspect-video w-auto md:w-[621px] mx-auto h-auto md:h-[500px] bg-[#00AEEF3D] rounded-[26px] flex items-center justify-center" >
                            <div
                                className="absolute inset-0 rounded-[26px] p-[2px] z-0"
                                style={{
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
                 linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude"
                                }}
                            />
                            <button className="w-20 h-20 bg-cyan-400 rounded-full flex items-center justify-center hover:bg-cyan-300 transition-colors">
                                <Play className="w-8 h-8 text-white ml-1" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Flow */}
            <section className=" container md:px-6 py-16">
                <div className="mx-auto max-w-7xl">
                    <div className="text-center mb-[60px]">
                        <h2 className="text-2xl md:text-[40px] font-bold tracking-tight text-white">
                            How We Deliver Complete Protection
                        </h2>
                        <p className="mt-4 text-sm md:text-[18px] text-white">
                            The comprehensive 6-step security lifecycle that sets ThreatRemediate apart
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className={`bg-filt relative bg-[#00AEEF3D] lg:h-[389px] py-[50px] !px-[24px] rounded-[16px] flex flex-col justify-center items-center`}>
                            <div
                                className="absolute inset-0 rounded-[16px] p-[2px] z-0 text-center"
                                style={{
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude",
                                }} />
                            <div className=" bg-cyan-400 rounded-lg flex items-center justify-center my-4">
                                <img src={shield} alt="" className=" w-[72px] h-[72px]" />
                            </div>
                            <h3 className="text-[24px] font-bold text-white mb-3 text-center">Prepare & Prevent</h3>
                            <p className="text-white text-center">We build your playbooks, train teams, and implement preventive controls to stop incidents before they start</p>
                        </div>

                        <div className={`bg-filt relative bg-[#00AEEF3D] lg:h-[297px] py-[50px] !px-[24px] rounded-[16px] flex flex-col justify-center items-center`}>
                            <div
                                className="absolute inset-0 rounded-[16px] p-[2px] z-0 text-center"
                                style={{
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude",
                                }} />
                            <div className=" bg-cyan-400 rounded-lg flex items-center justify-center my-4">
                                <img src={detect} alt="" className=" w-[72px] h-[72px]" />
                            </div>
                            <h3 className="text-[24px] font-bold text-white mb-3 text-center">Detect</h3>
                            <p className="text-white text-center">Our platform uses AI-powered detection across all vectors—endpoints, cloud, identity, and network—to identify threats in real-time.</p>
                        </div>

                        <div className={`bg-filt relative bg-[#00AEEF3D] lg:h-[434px] py-[50px] !px-[24px] rounded-[16px] flex flex-col justify-center items-center`}>
                            <div
                                className="absolute inset-0 rounded-[16px] p-[2px] z-0 text-center"
                                style={{
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude",
                                }} />
                            <div className=" bg-cyan-400 rounded-lg flex items-center justify-center my-4">
                                <img src={investigation} alt="" className=" w-[72px] h-[72px]" />
                            </div>
                            <h3 className="text-[24px] font-bold text-white mb-3 text-center">Investigate</h3>
                            <p className="text-white text-center">Our 24/7 SOC analysts instantly investigate and confirm every potential threat, eliminating false positives so your team isn't disturbed.</p>
                        </div>

                        <div className={`bg-filt relative bg-[#00AEEF3D] lg:h-[334px] lg:-mt-[43px] py-[50px] !px-[24px] rounded-[16px] flex flex-col justify-center items-center`}>
                            <div
                                className="absolute inset-0 rounded-[16px] p-[2px] z-0 text-center"
                                style={{
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude",
                                }} />
                            <div className=" bg-cyan-400 rounded-lg flex items-center justify-center my-4">
                                <img src={thumsup} alt="" className=" w-[72px] h-[72px]" />
                            </div>
                            <h3 className="text-[24px] font-bold text-white mb-3 text-center">We Take Action</h3>
                            <p className="text-white text-center">Our SOC takes direct, hands-on action: isolating endpoints, disabling compromised accounts, blocking malicious processes, and actively neutralizing the threat.</p>
                        </div>

                        <div className={`bg-filt relative bg-[#00AEEF3D] lg:h-[324px] lg:-mt-[135px] py-[50px] !px-[24px] rounded-[16px] flex flex-col justify-center items-center`}>
                            <div
                                className="absolute inset-0 rounded-[16px] p-[2px] z-0 text-center"
                                style={{
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude",
                                }} />
                            <div className=" bg-cyan-400 rounded-lg flex items-center justify-center my-4">
                                <img src={reportIcon} alt="" className=" w-[72px] h-[72px]" />
                            </div>
                            <h3 className="text-[24px] font-bold text-white mb-3 text-center">Report & Harden</h3>
                            <p className="text-white text-center">We provide a full incident report detailing the attack, the actions taken, and expert recommendations to harden your defenses against future attacks.</p>
                        </div>

                        <div className={`bg-filt relative bg-[#00AEEF3D] lg:h-[419px] py-[50px] !px-[24px] rounded-[16px] flex flex-col justify-center items-center`}>
                            <div
                                className="absolute inset-0 rounded-[16px] p-[2px] z-0 text-center"
                                style={{
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude",
                                }} />
                            <div className=" bg-cyan-400 rounded-lg flex items-center justify-center my-4">
                                <img src={EyeIcon} alt="" className=" w-[72px] h-[72px]" />
                            </div>
                            <h3 className="text-[24px] font-bold text-white mb-3 text-center">Review & Refine</h3>
                            <p className="text-white text-center">Post-incident, we analyze outcomes and continuously improve your detection, response, and prevention capabilities for ever-increasing resilience.</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="container mx-auto px-6 py-20 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="text-center mb-12">
                        <h2 className=" text-xl md:text-[40px] font-bold tracking-tight text-white mb-3">
                            Questions About Guided Response?
                        </h2>
                        <p className=" text-sm md:text-[20px] text-white">Ask Jen AI, our 24/7 AI-powered Cyber Security Sales Agent.</p>
                    </div>

                    <div className="rounded-3xl px-8 py-14 " style={{ background: "linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)" }}>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Left Side - Chat Interface */}
                            <div className="space-y-6 ">
                                <div className="relative bg-[#00AEEF3D] rounded-[24px] px-[15px] md:px-[20px] py-[60px]">
                                    <div
                                        className="absolute inset-0 rounded-[24px] p-[1px] z-0"
                                        style={{
                                            background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
                 linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                                            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                            WebkitMaskComposite: "xor",
                                            maskComposite: "exclude"
                                        }}
                                    />
                                    <div className="flex items-center gap-3 mb-3 ">
                                        <div className="w-[45px] md:w-[60px] h-[45px] md:h-[60px] rounded-full flex flex-col md:flex-row items-center justify-center"
                                            style={{
                                                background: `linear-gradient(0deg, rgba(196,196,196,0.3), rgba(196,196,196,0.3)),
                 linear-gradient(180deg, #F89B29 0%, #00AEEF 100%)`
                                            }}>
                                            <span className="text-white font-bold text-sm">JN</span>
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold  text-sm md:text-[20px]">JEN AI</h3>
                                            <p className="text-[#00AEEF]  text-sm md:text-[20px] font-medium">Cyber security Sales Agent</p>
                                        </div>
                                    </div>
                                    <div className="relative bg-[#00AEEF4D] p-[20px] md:p-[40px] rounded-[16px] w-fit flex justify-center items-center mx-auto">
                                        <div
                                            className="absolute inset-0 rounded-[16px] p-[1px] z-0"
                                            style={{
                                                background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
                 linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                                                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                                WebkitMaskComposite: "xor",
                                                maskComposite: "exclude"
                                            }}
                                        />
                                        <p className="text-white text-[13px] text-center leading-relaxed">
                                            Jen AI chatbot interface would be
                                            <br />
                                            embedded here
                                            <br />
                                            Interactive AI agent for real-time
                                            <br />
                                            Q&A
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side - Suggested Questions */}
                            <div className=" space-y-5">
                                <h3 className=" text-xl md:text-[40px] font-bold text-white">Try asking Jen AI:</h3>
                                <div className="space-y-4">
                                    {[1, 2, 3, 4, 5].map((index) => (
                                        <div
                                            key={index}
                                            className="relative p-2" style={{ background: `linear-gradient(0deg, rgba(0, 0, 0, 0.33), rgba(0, 0, 0, 0.33)), linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2))` }}
                                        >
                                            <div
                                                className="absolute inset-0 rounded-[8px] p-[1px] z-0"
                                                style={{
                                                    background: `conic-gradient(from 180deg at 50% 50%, #FF98E2 0deg, #FFC876 35.77deg, #79FFF7 153.75deg, #9F53FF 258.75deg, #FF98E2 360deg)`,
                                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                                    WebkitMaskComposite: "xor",
                                                    maskComposite: "exclude",

                                                }}
                                            />
                                            <p className=" text-[13px] text-white">"What kind of guidance do you provide?"</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="container mx-auto px-6 py-20 lg:px-8 text-center">
                <div className="mx-auto max-w-7xl">
                    <div className="text-center mb-[60px]">
                        <h2 className=" text-2xl md:text-[40px] font-bold tracking-tight text-white mb-3">
                            A Package for Every Need
                        </h2>
                        <p className=" text-sm md:text-[20px] text-white">Choose the ThreatRemediate tier that matches your security requirements</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-[60px]">
                        <CardContent
                            title={"Core"}
                            description={"Essential EDR/XDR for comprehensive endpoint protection with 24/7 monitoring and active remediation."}
                        />
                        <CardContent
                            title={"Complete"}
                            description={"Expands Core to include cloud workload security and foundational identity threat detection for hybrid environments."}
                        />
                        <CardContent
                            title={"Complete"}
                            description={"Expands Core to include cloud workload security and foundational identity threat detection for hybrid environments."}
                        />

                    </div>

                    <Link to={"/pricing-page"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="dfgd flex items-center justify-center">
                        <GradientButton children={"compare Tiers and run pricing scenerios"} />
                    </Link>

                </div>
            </section>


            {/* Final CTA */}
            <section className="px-6 pt-16 pb-[120px] lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="text-center mb-12">
                        <h2 className=" text-2xl md:text-[40px] font-bold tracking-tight text-white">Ready to Get Started?</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="relative bg-[#00AEEF3D] p-8 bg-filt !py-[50px] rounded-[24px] text-center">
                            <div
                                className="absolute inset-0 rounded-[24px] p-[1px] z-0"
                                style={{
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
                 linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude"
                                }}
                            />
                            <div className="py-8">
                                <h3 className="text-[24px] font-medium text-white mb-4">Become a Partner</h3>
                                <p className="text-white text-[18px] mb-6">
                                    Start the application <br /> process now. Get <br /> access to our portal <br /> and resources in <br /> minutes
                                </p>
                            </div>
                            <Link to={"/become-a-partner"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                            <button

                                className="inline-block rounded-md relative z-10 px-[26px] py-[16px] text-[18px] font-medium text-white" style={{
                                    background: "linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)",

                                }}
                            >
                                SIGN UP NOW
                            </button>
                            </Link>
                        </div>

                        <div className="relative bg-[#00AEEF3D] p-8 bg-filt rounded-[24px] text-center" >
                            <div
                                className="absolute inset-0 rounded-[24px] p-[1px] z-0"
                                style={{
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
                 linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude"
                                }}
                            />
                            <div className="py-8">
                                <h3 className="text-[24px] font-medium text-white mb-4">Access Pricing Simulator</h3>
                                <p className="text-white text-[18px] mb-6">
                                    Already a partner? Log <br /> in to our portal to build <br /> custom quotes and <br /> explore pricing <br /> scenarios.
                                </p>
                            </div>
                            <Link to={"/become-a-partner"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>

                                <button

                                    className="relative inline-block rounded-[8px]  px-[26px] py-[16px] text-[18px] font-medium text-white" >
                                    <div
                                        className={`absolute inset-0 rounded-[8px] p-[1px] z-0`}
                                        style={{
                                            background: "linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)",
                                            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                            WebkitMaskComposite: "xor",
                                            maskComposite: "exclude",
                                        }}
                                    />
                                    LOG IN TO PORTAL
                                </button>
                            </Link>
                        </div>

                        <div className=" relative bg-[#00AEEF3D] p-8 bg-filt rounded-[24px] text-center">
                            <div
                                className="absolute inset-0 rounded-[24px] p-[1px] z-0"
                                style={{
                                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
                 linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude"
                                }}
                            />
                            <div className="py-8">
                                <h3 className="text-[24px] font-medium text-white mb-4">Call Our AI Agent</h3>
                                <p className="text-white text-[18px] mb-6">
                                    For instant voice <br /> assistance, call Jen AI <br /> to get your questions <br /> answered now.

                                </p>
                                <p className="!text-[#00AEEF] text-[18px] ">1 (954) 440-7608</p>
                            </div>
                            <Link to={"/contact"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>

                            <button
                                className="relative inline-block rounded-[8px]  px-[26px] py-[16px] text-[18px] font-medium text-white" >
                                <div
                                    className={`absolute inset-0 rounded-[8px] p-[1px] z-0`}
                                    style={{
                                        background: "linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)",
                                        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                        WebkitMaskComposite: "xor",
                                        maskComposite: "exclude",
                                    }}
                                />
                                CALL NOW
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>

    )
}
