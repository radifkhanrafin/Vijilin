import React from 'react';

const SimpleCard = ({ icon, title, desc, h, w,designedTitle, center }) => {
    return (
        <div
            className="bg-gradient-to-l to-[#A5EDCD] from-[#B563F8] my-5 rounded-lg"
            style={{ minWidth: w }}
        >
            <div
                className={`bg-[#413F46] p-8 max-w-${w} text-left rounded-lg m-[2px] ${h ? `` : 'min-h-52'}`}
                style={{ height: h}}>
                <div className={`flex items-center gap-3 my-2 ${center ? "justify-center items-center w-full h-full" : ""} ${designedTitle ? `flex items-center justify-center h-full w-full` :`justify-start`}`}>
                {icon && (
                    <img
                        src={icon}
                        alt="icon"
                        className="max-h-full w-60 md:w-auto  object-contain"
                    />
                )}
                    {title && <p className='text-blue-500' style={{color: "#00AEEF"}}>{title}</p>}
                    {designedTitle && <h1 className='text-white  font-bold text-[37px]'>{designedTitle}</h1>}
                </div>
                {desc && <p className='text-white'>{desc}</p>}
            </div>
        </div>
    );
};

export default SimpleCard;
