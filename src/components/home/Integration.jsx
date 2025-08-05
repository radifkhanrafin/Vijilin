import React from 'react'
import { Link } from 'react-router-dom';
import imageTwo from '../../images/earth-bg.png';

const data = [
  {
    category: "Security Infrastructure & Network Security",
    items: ["Fortinet", "Palo Alto", "Cisco", "Juniper", "Check Point"],
  },
  {
    category: "Cloud Security & SaaS Platforms",
    items: ["SonicWall", "WatchGuard", "Sophos", "UniFi (Ubiquiti)"],
  },
  {
    category: "Endpoint Detection & Response (EDR)",
    items: ["pfSense", "Windows (WEF)", "Windows (Syslog)", "Microsoft IIS"],
  },
  {
    category: "ITSM & Ticketing System Integration",
    items: [
      "MS Exchange",
      "Netskope (syslog)",
      "Ordr (syslog)",
      "RSA (syslog)",
      "Linux (Syslog)",
      "SonicWall"
    ],
  },
];


const Integration = () => {
  return (
        <section className=" pt-[120px] pb-[120px] relative z-[9]">
            <img src={imageTwo} alt="Image" className='earth-bg' />
          <div className="container mx-auto px-[16px] md:px-6">
            <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-[40px] font-bold text-white mb-4">
              <span className="text-[#00AEEF]" style={{ color: "#00AEEF" }}>Comprehensive Security</span>
              <br />
              Ecosystem Integrations
            </h2>
            <p className="text-[18px] text-white">Vijilan seamlessly integrates with your existing security infrastructure, providing <br /> unified visibility and management across all your security tools and platforms.</p>
          </div>
          <div className="px-2 sm:px-4 md:px-0">
            <div className="grid md:grid-cols-5 gap-10">
              {/* Left Side - Categories */}
              <div className="col-span-5 md:col-span-2 flex flex-col gap-2">
                {data.map((section, index) => (
                  <div
                    key={index}
                    className={`group relative rounded-md py-[12px] px-[18px] text-white text-[18px] 
                       bg-[#2D2D2D] 
                      `} style={{ background: `linear-gradient(0deg, rgba(0, 0, 0, 0.33), rgba(0, 0, 0, 0.33)), linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2))` }}>
                    <div
                      className="absolute inset-0 rounded-[8px] p-[1px] z-0"
                      style={{
                        background: `conic-gradient(from 180deg at 50% 50%, #FF98E2 0deg, #FFC876 35.77deg, #79FFF7 153.75deg, #9F53FF 258.75deg, #FF98E2 360deg)`,
                        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                        WebkitMaskComposite: "xor",
                        maskComposite: "exclude",

                      }} />

                    {/* Border Overlay for hover */}
                    <div
                      className="pointer-events-none absolute inset-0 rounded-[8px] p-[1px] z-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
                      style={{
                        background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8, 34, 53, 0) 50%),
                       linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8, 34, 53, 0) 66.77%)`,
                        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                        WebkitMaskComposite: "xor",
                        maskComposite: "exclude",
                      }}
                    />

                    {/* Hover background overlay */}
                    <div
                      className="absolute inset-0 z-0 rounded-[8px] opacity-0 group-hover:opacity-100 transition-all duration-300"
                      style={{
                        backgroundColor: "#00AEEF3D",
                      }}
                    />

                    <div className="relative z-10">
                      {section.category}
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Side - Tags */}
              <div className="col-span-5 md:col-span-3 flex flex-wrap gap-[16px] items-start">
                {data.map((section) =>
                  section.items.map((item, i) => (
                    <div
                      key={item + i}
                      className="bg-[#00AEEF] text-white text-[16px] px-[24px] py-[10px] rounded-[8px]"
                    >
                      {item}
                    </div>
                  ))
                )}
              </div>
            </div>


          </div>

          <div className="text-center mt-10">
            <p className="text-gray-300 mb-5">
              Don't see your security tool listed? Our platform supports hundreds of integrations <br /> through APIs, syslog, and custom connectors.
            </p>
            <Link to={"/case-studies"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <button
                className=" p-[18px] md:py-[18px] md:px-[24px] text-[16px] md:text-lg mt-[12px] font-medium rounded-[8px] text-white inline-flex items-center space-x-3"
                style={{
                  background: "linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)",
                }}>

                <span className="uppercase">Request Integration Consultation</span>
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
          </div>
        </section>
  )
}

export default Integration
