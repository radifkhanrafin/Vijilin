import React from 'react';
import content from '../../images/background.png';

export default function Quotes() {
    return (
        <div className="container mx-auto h-[223px] py-12 text-white flex justify-center items-center relative overflow-hidden rounded-[24px]"
            style={{
                background: "linear-gradient(90deg, #082135 0%, #082135 40%, #1a3a4f 60%, #1a3a4f 100%)",
            }}
        >
            {/* Left side solid background */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(90deg, #082135 0%, #082135 50%, rgba(23, 51, 71, 0.8) 70%, rgba(23, 51, 71, 0.4) 100%)",
                }}
            />

            {/* Right side pattern with smooth blend */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `url(${content})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    opacity: 0.8,
                    maskImage:
                        "linear-gradient(90deg, transparent 0%, transparent 30%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,1) 100%)",
                    WebkitMaskImage:
                        "linear-gradient(90deg, transparent 0%, transparent 30%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,1) 100%)",
                }}
            />

            {/* Overlay for color consistency */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(90deg, rgba(23, 51, 71, 0.9) 0%, rgba(23, 51, 71, 0.7) 40%, rgba(26, 58, 79, 0.5) 60%, rgba(26, 58, 79, 0.3) 100%)",
                }}
            />

            {/* Content */}
            <div className="container mx-auto p-3 sm:p-0 font-normal text-center relative z-10">
                <p className="italic text-[16px] leading-relaxed">
                    The sign-up process was incredibly simple. We had access to the portal and were <br />
                    building quotes for our clients the same day. It's the easiest and most transparent<br />
                    partner program we've ever joined.
                </p>
                <p className="mt-3 text-[#00AEEF] font-medium text-sm md:text-base">
                    — Mark T., New Bronze Tier MSP Partner
                </p>
            </div>
        </div>
    );
}
