import { icons } from 'lucide-react';
import React from 'react';

const DashBoardCard = ({ icon,title,bg,Number,mainTitle,subTitle, content, isSize, iconSize, heading,desc, btn,head,text,linkUp, txtIcon }) => {
    return (
        <div
            className={`relative bg-[#00AEEF3D] py-[32px] px-3  lg:px-[21px] rounded-[16px] flex flex-col justify-center items-center `}

        >
            <div
                className="absolute inset-0 rounded-[16px] p-[2px] z-0"
                style={{
                    background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8,34,53,0) 50%),
             linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8,34,53,1) 66.77%)`,
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                }}
            />
            {
                icon && <div className={` ${iconSize ? "w-[30px] h-[30px]" : "w-12 h-12 mb-4"} ${bg?"bg-cyan-400":"bg-transparent"}  rounded-lg flex items-center justify-center `}>
                    <img src={icon}   alt={title} />

                </div>
            }


            <p className='text-white text-sm'>{txtIcon}</p>
            <h3 className={` text-center text-3xl font-bold mb-3`}>{Number}</h3>
            <h3 className={` text-center ${isSize ? "text-[16px] font-medium " : "text-xl font-bold mb-3"}`} style={{color: "#00AEEF"}}>{heading}</h3>

            <h3 className={` text-center text-[16px] font-medium`} style={{color: "#00AEEF"}}>{mainTitle}</h3>

            <h3 className={` text-center text-[14px] mt-2`} >{subTitle}</h3>

             <p className='text-white text-sm text-center mt-1'>{content}</p>
            <h3 className={` text-center    mb-3 ${iconSize ? " text-[13px] font-medium" : "text-lg lg:text-xl font-bold"}`}>{head}</h3>
           {
            btn && <p className='bg-[#00AEEF] px-6 py-2 rounded-lg uppercase'>{btn}</p>
           }
            <p className='text-white text-sm'>{text}</p>
            <p className={`text-white text-center ${iconSize ? "text-[9px]" : "text-sm"}`}>{desc}</p>
            <p className='text-[#00AEEF]  mt-2 text-sm'>{linkUp}</p>
        </div>
    );
};

export default DashBoardCard;