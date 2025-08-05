import React from 'react';
import CardBorder from './CardBorder';
import { Link } from 'react-router-dom';

const Heading_Btn = ({ isCenter,btn9, pd,h4, size, h1, h3, bg, isLeading, desc, btn, btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, isSmallHeading, rating, state, btn2Icon = true, url,url2, spacing }) => {
    const colCount = Math.min(state?.length || 1, 6);
    const gridColsClass = `grid-cols-${colCount}`;

    return (
        <div>
            <section className="px-6 py-16 relative z-10 sm:py-32 lg:px-8"
                style={{ backgroundColor: bg }}
            >
                <div className={`mx-auto max-w-7xl  ${spacing ? "space-y-4" : "space-y-8"} ${isCenter ? "text-start" : "text-center"}  `}>
                    {h1 &&
                        <h1 className={`${isSmallHeading ? "sm:text-4xl md:text-[40px]" : "text-4xl md:text-5xl"} ${isLeading && "leading-14"} font-bold tracking-tight text-white whitespace-pre-line`}>
                            {h1}
                        </h1>

                    }
                    {h3 &&
                        <h3 className="text-3xl  tracking-tight text-white">
                            {h3}
                        </h3>}
                    {h4 &&
                        <h4 className="text-[18px] font-medium  tracking-tight text-white">
                            {h4}
                        </h4>}
                    {
                        desc && <p className="whitespace-pre-line text-[18px] leading-8 max-w-5xl text-[#FFFFFF] mx-auto"> {desc} </p>
                    }
                    {rating &&
                        <p className='text-yellow-400 capitalize'> {rating}
                        </p>}

                    {state && state.length > 0 && (
                        <div className={`grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-xl mx-auto gap-4`}>
                            {state.map((item, index) => (
                                <CardBorder key={index} width="166px" height="171px">
                                    <div>
                                        <div className="text-white text-[32px] font-bold mb-2">{item.percentage}</div>
                                        <div className="text-slate-300 text-sm font-medium whitespace-pre-line">
                                            {item.description}
                                        </div>
                                    </div>
                                </CardBorder>
                            ))}
                        </div>
                    )}

                    <div className={`flex flex-col sm:flex-row gap-10 items-center ${isCenter ? "" : "justify-center"}`}>
                        {
                            btn1 && (
                                <Link to={url ? url : ""} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>

                                    <button
                                        className={`p-5 md:!p-[20px] ${size ? "text-[11px] font-bold lg:mt-10" : "text-sm md:text-lg font-medium"} ${pd && "!p-[20px]"}   rounded-[8px] text-white inline-flex items-center space-x-3`}
                                        style={{ 
                                            background: "linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)",

                                        }}>

                                        <span className='uppercase text-[16px] md:text-[18px] font-medium'>{btn1}</span>
                                        <div className="w-6 h-6  flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <polyline points="12 16 16 12 12 8"></polyline>
                                                <line x1="8" y1="12" x2="16" y2="12"></line>
                                            </svg>
                                        </div>
                                    </button>
                                </Link>

                            )
                        }
                        

                        {btn2 && (
                            <Link to={url2 ? url2: ""} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                                <div className="rounded-lg ml-2 md:ml-0">
                                    <button
                                        className={`relative p-5 md:!p-[20px] text-white ${size ? "text-[11px] font-bold lg:mt-10" : "text-sm md:text-lg  font-medium"} inline-flex items-center bg-transparent rounded-lg`}>
                                        <div
                                            className={`absolute inset-0 rounded-[8px] p-[1px] z-0`}
                                            style={{
                                                background: "linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)",
                                                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                                WebkitMaskComposite: "xor",
                                                maskComposite: "exclude",
                                            }}
                                        />
                                        <span className="uppercase text-[16px] md:text-[18px] font-medium">{btn2}</span>
                                        {btn2Icon && (
                                            <div className="w-6 h-6 ml-[10px] flex items-center justify-center">
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
                                </div>
                            </Link>
                        )
                        }

                        {btn8 && (
                            <Link to={url2 ? url2: ""} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                                <div className="rounded-lg ">
                                    <button
                                        className={`relative p-[18px] md:p-[20px] text-white ${size ? "text-[11px] font-bold lg:mt-10" : "text-[16px] md:text-lg  font-medium"} inline-flex items-center bg-transparent rounded-lg`}>
                                        <div
                                            className={`absolute inset-0 rounded-[8px] p-[1px] z-0`}
                                            style={{
                                                background: "linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)",
                                                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                                WebkitMaskComposite: "xor",
                                                maskComposite: "exclude",
                                            }}
                                        />
                                        <span className="uppercase text-[16px] md:text-[18px] font-medium">{btn8}</span>
                                    </button>
                                </div>
                            </Link>
                        )
                        }


                        {btn3 && <div className="bg-[#0784c3]  rounded-lg  ">
                            <button className="p-[18px] capitalize bg-[#064462] m-[2px] text-lg rounded-[8px] text-white border-2 border-white  ">
                                {btn3}
                            </button>
                        </div>}
                        {btn4 && <div className="bg-[#0784c3]  rounded-lg  ">
                            <button className="p-[18px] uppercase   m-[2px] text-lg rounded-[8px] text-white border-2 border-white  ">
                                {btn4}
                            </button>
                        </div>}


                        {btn5 && <div className="  rounded-lg  ">
                            <button className="p-[18px] md:p-[24px] uppercase font-medium text-[16px] md:text-lg rounded-[8px] text-white border-2 border-white  " style={{
                                background: "linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)"
                            }}>
                                {btn5}
                            </button>
                        </div>}


                        {btn9 && (
                        <div className="p-[18px] capitalize rounded-lg text-white border-1 border-[#00AEEF] inline-flex items-center space-x-3">
                          <span className='uppercase text-[18px] font-medium'>{btn9}</span>

                            <div className="w-6 h-6  flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polyline points="12 16 16 12 12 8"></polyline>
                                    <line x1="8" y1="12" x2="16" y2="12"></line>
                                </svg>
                            </div>
                        </div>
                    )}




                    </div>

                    {btn && (
                        <div className="p-[18px] capitalize m-[2px] text-xl rounded-lg text-white border-2 border-blue-500 inline-flex">
                            {btn}
                        </div>
                    )}

                    {btn6 && (
                        <div className="p-[18px] capitalize rounded-lg text-white border-1 border-[#00AEEF] inline-flex items-center space-x-3">
                          <span className='uppercase text-[18px] font-medium'>{btn6}</span>

                            <div className="w-6 h-6  flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polyline points="12 16 16 12 12 8"></polyline>
                                    <line x1="8" y1="12" x2="16" y2="12"></line>
                                </svg>
                            </div>
                        </div>
                    )}

                    {btn7 && (
                        <div className="p-[18px] capitalize rounded-lg text-white border-1 border-[#00AEEF] inline-flex items-center space-x-3">
                          <span className='uppercase text-[18px] font-medium'>{btn7}</span>

                            <div className="w-6 h-6  flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polyline points="12 16 16 12 12 8"></polyline>
                                    <line x1="8" y1="12" x2="16" y2="12"></line>
                                </svg>
                            </div>
                        </div>
                    )}

                </div>
            </section>
        </div>
    );
};

export default Heading_Btn;