import React from 'react';
import { Link } from 'react-router-dom';

const serveData = [
    {
        title: "Our Technology & Platform",
        url: "visilan-msg-partner"
    },
    {
        title: "Our Expertise (SOC & Team) ",
         url: "managed-siem-soc"
    },
    {
        title: "Trust & Compliance (SOC 2)",
        url: "complain-solution"
    },
    {
        title: "Supported Integrations",
        url: "contact"
    },
    {
        title: "Customer Success Stories",
        url: "case-studies"
    },
]

const VijilanDropdown = () => {
    return (
           <div className="inline-block w-auto max-w-screen-md mx-auto rounded-[24px] p-4" style={{
                    background: "linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)"
                }}>
                    <div className="grid lg:grid-cols-1 gap-8 md:p-4">
                        {/* Left Column - Managed Detection & Response */}
                        <div className=" rounded-2xl p-4 md:p-6 lg:p-12 ">
        
                            <div className="space-y-8">
                            {serveData.map((service, index) => {
                                const content = (
                                    <div key={index} className="flex gap-4">
                                        
                                        <div className="flex-1">
                                            <h3 className="text-white font-medium text-[16px] mb-2 leading-tight">
                                                {service.title}
                                            </h3>
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
                    </div>
                </div>
    );
};

export default VijilanDropdown;