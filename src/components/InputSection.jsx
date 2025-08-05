import React from "react";

const InputSection = ({ title, fields }) => {
  return (
    <div className="relative rounded-[24px] space-y-3 bg-[#00AEEF3D] px-[30px] py-[20px]">

      <div
        className="absolute inset-0 rounded-[24px] p-[2px] z-0 h-full"
        style={{
          background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%), linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      <h2 className="text-[#00AEEF] text-[16px] font-bold text-left mb-2 relative z-10" style={{color: "#00AEEF"}}>{title}</h2>

      {fields.map((field, index) => (
        <div key={index} className="flex flex-col gap-1 relative z-10">
          <label className="text-white text-[14px] text-left">{field.label}</label>
          <select
            className="p-2 rounded-[12px] text-[14px] bg-[#FFFFFE] border border-[#6246EA] focus:outline-none text-[#00000080] focus:ring-0" style={{color: "black"}}
            defaultValue=""
          >
            <option value="" disabled className="text-black" style={{color: "black"}}>
              {field.placeholder}
            </option>
            {field.options.map((opt, i) => (
              <option key={i} value={opt.value} className="text-black" style={{color: "black"}}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
};

export default InputSection;
