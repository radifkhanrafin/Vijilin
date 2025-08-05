import React from "react";

const GradientButton = ({ children,icon=true }) => {
  return (
    <button
      className=" p-[18px] md:px-[24px] md:py-[18px] text-[16px] md:text-lg font-medium rounded-[8px] text-white flex justify-center items-center space-x-3"
      style={{
        background: "linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)",
      }}
    >
      <span className="font-semibold px-1 md:px-5 ">{children}</span>
      {icon && (
        <div className="w-6 h-6 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 16 16 12 12 8"></polyline>
            <line x1="8" y1="12" x2="16" y2="12"></line>
          </svg>
        </div>
      )}
    </button>
  );
};

export default GradientButton;
