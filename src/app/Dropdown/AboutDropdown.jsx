import React from 'react';
import { Link } from 'react-router-dom';

const Data = [
    {
        title: "About us",
        url: "about"
    },
    {
        title: "Who we serve",
         url: "serve"
    },
    {
        title: "Why Vijilan?",
        url: "why-vijilan-page"
    },
    {
        title: "Become a Partner",
        url: "become-a-partner"
    },
]

const AboutDropdown = () => {
    return (
           <div className="container px-6 mx-auto rounded-[24px]" style={{
                    background: "linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)"
                }}>
                    <div className="grid lg:grid-cols-1 gap-8 md:p-4">
                        {/* Left Column - Managed Detection & Response */}
                        <div className=" rounded-2xl p-4 md:p-6 lg:p-12 ">
        
                            <div className="space-y-8">
                            {Data.map((service, index) => {
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

export default AboutDropdown;