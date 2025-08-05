import React from "react";
import OutlineGradientButton from "./OutlineGradientButton";


const ServiceCard = ({ service, index, onAddIcon,marginSmall,textStart }) => {
    return (
        <div
            key={index}
            className={`relative bg-[#00AEEF3D] backdrop-blur-sm rounded-[16px] p-2 md:p-8 ${marginSmall ? "p-5 md:p-8" : "p-2 md:p-8"}`}>
            {/* Gradient Border */}
            <div
                className="absolute inset-0 rounded-[16px] p-[2px] z-0"
                style={{
                    background:
                        "linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)",
                    WebkitMask:
                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                }}
            />

            {/* Add Icon Button */}
            <div className={`flex justify-center ${marginSmall ? "mb-4" : "mb-6"} z-10 relative`}>
                <button
                    className="bg-[#F1511B] text-white text-[10px] font-thin md:font-semibold px-4 py-2 rounded-[15px]"
                    onClick={onAddIcon}
                >
                    ADD ICON
                </button>
            </div>

            {/* Title */}
            {
                service?.title && (
                    <h2 className="text-white whitespace-pre-line text-[24px] font-medium text-center mb-4 z-10 relative">
                        {service.title}
                    </h2>
                )
            }

            {/* Badge */}
            {
                service?.badge && (

                    <div className="flex justify-center mb-6 z-10 relative">
                        <span className="bg-[#F1511B] text-white text-[10px] font-semibold px-4 py-2 rounded-[15px]">
                            {service.badge}
                        </span>
                    </div>
                )
            }

            {/* Description */}
            {
                service?.description && (
                    <p className={`text-white  whitespace-pre-line text-[16px] mb-8 leading-relaxed z-10 relative ${textStart ? "text-start" : "text-center"}`}>
                        {service.description}
                    </p>
                )
            }

            {service?.designedDesc && (

                <div className={`max-w-md ${marginSmall ? "p-0" : "p-5"} mb-4`}>
                    <h2 className="text-lg text-white mb-1">
                        {service.designedDesc}
                    </h2>

                    <ul className="space-y-1">
                        {service.designFeature.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-white text-[18px]">
                                <span className="">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Feature List */}
            {
                service?.features && (
                    <ul className="space-y-3 mb-8 z-10 relative">
                        {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-white text-[18px]">
                                <span className="text-white mr-3">•</span>
                                <span className="text-sm">{feature}</span>
                            </li>
                        ))}
                    </ul>
                )
            }

            {/* Learn More Button */}
            {service?.designBtn ? (
                <div className="flex justify-center items-center rounded-lg">
                    <OutlineGradientButton icon={service?.btnIcon}>
                        {service.designBtn}
                    </OutlineGradientButton>
                </div>
            ) : (
                <div
                    className="flex justify-center items-center mx-auto w-fit z-10 relative">
                    <div
                        className={`absolute inset-0 rounded-[8px] p-[1px] z-0`}
                        style={{
                            background: "linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)",
                            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                            WebkitMaskComposite: "xor",
                            maskComposite: "exclude",
                        }}
                    />
                    <button className="font-medium text-[16px] text-white px-8 py-3 rounded-[7px]">
                        LEARN MORE
                    </button>
                </div>
            )}
        </div>
    );
};

export default ServiceCard;
