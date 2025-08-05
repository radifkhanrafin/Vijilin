import React from "react";
import { Link } from "react-router-dom";


const JoinMission = ({ title, highlightedText, subtitle, buttonText,url }) => {
  return (
    <section className="!relative z-10 py-15 !pb-0 overflow-x-clip" >

      <div className="container mx-auto px-[16px] md:px-6">
        <div
          className="h-auto flex flex-col items-center justify-center rounded-[24px] px-[16px] py-[60px] relative overflow-hidden"
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
            className="absolute inset-0 join-mission-body"
          />

          {/* Overlay for color consistency */}
          <div
            className="absolute inset-0"
          />

          <div className="relative z-10 text-center ">
            <h2 className="text-lg md:text-[35px] font-bold text-white mb-4">
              {title} <span className="!text-[#00AEEF]">{highlightedText}</span>
            </h2>
            <p className="text-[16px] font-medium text-white mb-8 leading-relaxed max-w-2xl mx-auto">
              {subtitle}
            </p>
            <Link to={url? url : ""}>
              <button
                className="p-[16px] md:py-[18px] md:px-[24px] text-[16px] md:text-lg font-medium rounded-[8px] text-white inline-flex items-center space-x-3 transition hover:scale-105"
                style={{
                  background: "linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)",
                  boxShadow: "0 8px 32px rgba(255, 107, 53, 0.3)",
                }}
              >

                <span className="text-sm md:text-lg">{buttonText}</span>
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinMission;
