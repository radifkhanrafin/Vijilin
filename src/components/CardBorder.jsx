import React from "react";

const CardBorder = ({ height = "171px", width = "166px", children, borderSize, radiusSize }) => {
  return (
    <div className="mt-12 relative">
      <div
        className={`relative bg-[#00AEEF3D] rounded-[26px] w-${width}   h-${height}  flex items-center justify-center ${borderSize ? "rounded-[16px]" : ""} ${radiusSize ? "rounded-[14px]" : ""}`}
      // style={{ height, width }}
      >
        <div
          className={`absolute inset-0 rounded-[26px] p-[2px] z-0 ${borderSize ? "rounded-[16px] p-[1px]" : ""} ${radiusSize ? "rounded-[14px]" : ""}`}
          style={{
            background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />
        {/* Dynamic content from parent */}
        <div className="z-10 text-center w-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default CardBorder;

