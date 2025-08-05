import React from 'react';
import { Link } from 'react-router-dom';

const SuccessCard = ({
    bgColor = '#00AEEF3D',
    showIcon = false,
    iconText = '',
    heading,
    subheading,
    description,
    buttonText,
    buttonGradient = 'linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)',
    outlineButtonText = '',
    isOutlineButton = false,
    centerContent = true,
    url
}) => {
    return (
        <div className={`relative backdrop-blur-sm rounded-[24px] p-2 md:p-8 ${centerContent ? 'text-center' : ''}`} style={{ backgroundColor: bgColor }}>
            {/* Gradient Border Layer */}
            <div
                className="absolute inset-0 rounded-[26px] p-[1px] z-0"
                style={{
                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                }}
            />

            {/* Optional Icon */}
            {showIcon && (
                <div
                    className=" w-[45px] h-[45px] md:w-[61px] md:h-[61px] rounded-full flex items-center justify-center mx-auto mb-2"
                    style={{
                        background: `linear-gradient(0deg, rgba(196, 196, 196, 0.5), rgba(196, 196, 196, 0.5)),linear-gradient(180deg, #F89B29 0%, #00AEEF 100%)`,
                        backgroundBlendMode: "overlay"
                    }}
                >
                    <h3 className="text-[20px] font-bold text-white">{iconText}</h3>
                </div>
            )}

            {/* Headings and Description */}
            {subheading && <h3 className="text-[20px] font-bold text-white mb-2">{subheading}</h3>}
            {heading && <h3 className="text-[24px] font-bold text-white mb-4">{heading}</h3>}
            <p className="text-white text-[16px] mb-8 whitespace-pre-line">
                {description}
            </p>

            {/* Main Gradient Button */}
            {buttonText && (
                <Link to={url ? url : ""}>
                <button
                    className="p-[18px] text-lg relative z-10 font-medium rounded-[8px] text-white inline-flex items-center space-x-3"
                    style={{
                        background: buttonGradient
                    }}
                >
                    <span className="uppercase">{buttonText}</span>
                    <div className="w-6 h-6 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 16 16 12 12 8"></polyline>
                            <line x1="8" y1="12" x2="16" y2="12"></line>
                        </svg>
                    </div>
                </button>
                </Link>
            )}

            {/* Outline Button */}
            {isOutlineButton && outlineButtonText && (
                    <button
      className="relative mt-[25px] p-[18px]  md:p-[18px] text-lg font-medium rounded-[8px] text-white inline-flex items-center bg-transparent w-fit"
      
    >
      <div
        className={`absolute inset-0 rounded-[8px] p-[1px] z-0`}
        style={{
          background: "linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
      <span className="uppercase text-sm md:text-lg">{outlineButtonText}</span>

    </button>
            )}
        </div>
    );
};

export default SuccessCard;
