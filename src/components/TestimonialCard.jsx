import React from "react";
import { ArrowRight } from "lucide-react";
import CardBorder from "./CardBorder";

const TestimonialCard = ({
  badgeText,
  heading,
  description,
  stats = [],
  buttonText = "READ THE FULL STORY",
  onButtonClick,
}) => {
  const Badge = ({ children, className = "", ...props }) => {
    return (
      <div
        className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${className}`}
        {...props}
      >
        {children}
      </div>
    )
  }
  return (
    <div
      className="p-8 rounded-[22px] backdrop-blur-sm"
      style={{

        background: "linear-gradient(0deg, #191624 16.11%, #00AEEF 328.5%)",

      }}
    >
      <Badge className="bg-[#F36E21] text-[10px] font-semibold text-white  px-[7px] py-[8px]">
        {badgeText}
      </Badge>

      <div className="px-4">
        <h3 className="text-xl md:text-[30px] font-bold text-white mb-6 mt-4 leading-tight">
          {heading}
        </h3>

        <p className="text-white text-[15px] text-base leading-relaxed">{description}</p>

        <div className="grid grid-cols-1  md:grid-cols-1 lg:grid-cols-2 gap-5 justify-center  mb-10">
          {stats.map((stat, index) => (
            <CardBorder  key={index} height="171px" width="166px">
              <div className={`mx-auto ${stat.size && "p-4"}`}>
                <div className="text-white text-[36px] font-medium mb-2">{stat.value}</div>
                <div className="text-[#E6F7FD] text-[10px] font-medium">{stat.label}</div>
              </div>
            </CardBorder>
          ))}
        </div>
      </div>

      <div className="border border-white hover:bg-white/10 bg-transparent w-fit text-center mx-auto rounded-[6px] transition-all duration-300">
        <button
          onClick={onButtonClick}
          className=" p-[16px] text-[14px] font-medium  flex items-center gap-2 text-white"
        >
          {buttonText}
          <div className="w-3 h-3 border rounded-full flex items-center justify-center">
            <ArrowRight className="h-2 w-2 text-white" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default TestimonialCard;
