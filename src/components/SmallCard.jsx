import React from "react";

const SmallCard = ({ percentage, label,height,width }) => {
  return (
    <div className="mt-12 relative">
      <div
        className="relative bg-[#00AEEF3D] rounded-[26px] flex items-center justify-center"
        style={{ height, width }}
      >
        <div
          className="absolute inset-0 rounded-[26px] p-[2px] z-0"
          style={{
            background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />
        <div className="text-center w-full">
          <div className="text-white text-[32px] font-bold mb-2">{percentage}</div>
          <div className="text-slate-300 text-sm font-medium">{label}</div>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
