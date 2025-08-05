import React from 'react';

const Blog_Subscribe_Component_Btn = ({ H1, background, Desc, Input, Btn, descSize }) => {
    return (
        <div className={`relative w-full my-8 py-8 text-white ${background ? "bg-[#00AEEF3D]" : "bg-transparent"}  rounded-[24px]  `}>
            <div
                className="absolute inset-0 rounded-[24px] p-[2px] z-0"
                style={
                    background
                        ? {
                            background: `linear-gradient(146.58deg, #00AEEF 0.86%, rgba(8, 34, 53, 0) 50%),
            linear-gradient(326.95deg, #00AEEF 0.69%, rgba(8, 34, 53, 0) 66.77%)`,
                            WebkitMask:
                                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                            WebkitMaskComposite: "xor",
                            maskComposite: "exclude"
                        }
                        : undefined
                }
            />
            <div className='w-full md:w-3/4 mx-auto space-y-5'>
                {H1 && <h1 className='font-bold text-center whitespace-pre-line  text-lg md:text-[30px]'>{H1}</h1>}
                <p className={` ${descSize ? " text-[16px] md:text-[18px]" : "text-lg md:text-[20px]"} text-center whitespace-pre-line`}>{Desc}</p>

                {Input && <div className='relative'>
                    <input className='w-full mt-2 py-5 rounded-lg' placeholder='Enter Your Email ' type="search" />

                    {/* <button
                        className="absolute right-3 top-4 w-auto md:w-56 py-2 mt-1 px-5   bg-radial from-[#FF0F7B]  to-[#F89B29] rounded-md font-bold text-white transition-opacity hover:opacity-90">
                        {Input}
                    </button> */}
                </div>}

                {
                    Btn && <div className='flex justify-center'>
                        <button className=" mx-auto p-[18px] md:p-[24px] mt-1 rounded-[8px] text-[16px] md:text-[18px] font-medium  text-white transition-opacity hover:opacity-90" style={{ background: " linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)" }}>
                            {Btn}
                        </button>
                    </div>
                }

            </div>
        </div>
    );
};

export default Blog_Subscribe_Component_Btn;

