import React from 'react'
import lights from "../../Assets/lights.png"
import objects from "../../Assets/objects.png";
import dollar from "../../Assets/dollar.png"
import { Link } from "react-router-dom";


const DeepDive = () => {
  return (
        <section className=" py-[120px] relative z-[9]">
            
          <div className="container mx-auto px-[16px] md:px-6">
            <div className="text-center mb-12">
            <h2 className="text-[30px] md:text-[40px] font-bold text-white">
              <span className="" style={{ color: "#00AEEF" }}>Dive Deeper</span> Into Vijilan's
              <br />
              Cybersecurity Ecosystem
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 px-2 sm:px-4 md:px-0">
            {[
              {
                icon: <img src={lights} alt="" className="w-[164px] h-[110px]" />,
                title: "Our Solutions",
                description:
                  "Discover our full suite of managed security services, from mXDR and ThreatRemediate to specialized cloud and identity protection.",
                buttonText: "Explore All Solutions",
                url: "resources"
              },
              {
                icon: <img src={objects} alt="" className="w-[164px] h-[110px]" />,
                title: "Our Technology & Integrations",
                description:
                  "Learn how our platform, powered by CrowdStrike, AI, and extensive integrations (Fortinet, Palo Alto, Microsoft 365, etc.), delivers unparalleled visibility and control.",
                buttonText: "View Our Integrations",
                url: "resources"
              },
              {
                icon: <img src={dollar} alt="" className="w-[100px] h-[110px]" />,
                title: "Resources & Insights",
                description:
                  "Stay informed with our latest threat research, whitepapers, cybersecurity guides, and expert blog posts.",
                buttonText: "Access Security Resources",
                url: "resources",

              },
            ].map((item, index) => (
              <div key={index} className="relative bg-[#00AEEF3D] backdrop-blur-sm p-6 rounded-[24px] flex flex-col items-center justify-center">
                <div
                  className="absolute inset-0 rounded-[24px] p-[2px] z-0 h-full"
                  style={{
                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
                  linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude"
                  }}
                />
                <div className=" mb-4">{item.icon}</div>
                <h3 className="text-[24px] text-center font-medium text-white mb-3">{item.title}</h3>
                <p className="text-white text-[18px] mb-[40px] leading-relaxed text-center">{item.description}</p>
                <Link to={item.url ? item.url : ""} className="mt-auto z-10 bg-[#FFFFFF] rounded-[8px] p-[16px] text-[18px] font-medium  " style={{ color: "#082235" }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} >
                  {item.buttonText}
                </Link>
              </div>
            ))}
          </div>
          </div>
        </section>
  )
}

export default DeepDive
