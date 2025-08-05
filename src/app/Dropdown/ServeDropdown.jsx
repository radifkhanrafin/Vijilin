import React from 'react';
import { Link } from 'react-router-dom';

const serveData = [
    {
        title: "MSPs, VARs & MSPs",
        url: "visilan-msg-partner"
    },
    {
        title: "Small & Medium Businesses (SMBs)",
        url: "smb"
    },
    {
        title: "Mid-Market Exterprises",
        url: "mid-market-enterprice"
    },
]
const ServeDropdown = () => {
    return (
        <div className="inline-block w-fit max-w-screen-md mx-auto rounded-[24px] p-4" style={{
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

export default ServeDropdown;