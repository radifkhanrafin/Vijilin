import React from "react";
import { Link } from "react-router-dom";

const CardContent = ({ isMiddle,icon, banner, className = '', Cardsticket,iconColor, linkBtn, Number, ColorHeading, side_text, Index, badge, title, description, buttonText, designDescription, cardFooter, head, sub, grdBtn, iconed, isButton,  hFit,titleSize,subTitle,url="#",  }) => {

  return (
    <div className="relative bg-filt  rounded-[24px] w-full p-[1px]" >

      <div
        className="absolute  inset-0 rounded-[24px] p-[2px] z-0"
        style={
          !banner
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


      <div className={`relative bor2 rounded-[24px] ${className} ${banner ? "bg-transparent" : "card-content text-center p-6"}`} >

        {icon && <div className="icon-container flex justify-center mb-4">
          <img src={icon} alt="Cybersecurity Illustration" className="icon w-[100px] h-[100px]" />
        </div>}
        {iconColor && <div className="icon-container flex justify-center mb-4">
          <img src={iconColor} alt="Cybersecurity Illustration" className="icon bg-cyan-400 rounded-xl p-2 w-[100px] h-[100px]" />
        </div>}


        {banner && (
          <div className="relative flex justify-center mb-4">
            <img src={banner} alt="banner" className="w-full rounded-[16px]" />
            {badge && (
              <span className="absolute top-2 left-2 bg-cyan-500 text-white text-xs px-3 py-1 rounded-full">
                {badge}
              </span>
            )}
          </div>
        )}


        {subTitle && <p className="text-[16px] md:text-[18px] text-white mb-4 " style={{ whiteSpace: 'pre-line' }}>{subTitle}</p>}

        {iconed && <div className={`iconed flex ${side_text ? "justify-start" : "justify-center"}  mb-4`}>
          <img src={iconed} alt="Icon" className="iconed w-[77px] text-white h-[77px]" />
        </div>}
        {
          Cardsticket && <div className='bg-[#D9D9D9] w-auto md:w-[250px] p-6 h-auto md:h-[190px] mx-auto rounded-2xl my-5 flex justify-center items-center'>
            <h4 className='text-center !text-black  text-2xl'>{Cardsticket}</h4>
          </div>
        }

        {head && <h3 className={`head text-[25px] text-white font-medium mb-2 ${side_text ? "text-left" : "text-center"} `}>{head}</h3>}
        {
          side_text && <>
            <h1 className="text-left" style={{color: "#00aeef"}}>{ColorHeading} </h1>
            <h3 className="text-left text-3xl md:text-4xl lg:text-5xl font-bold mb-8 mt-1">{Number}</h3>
            <p className="text-left" style={{color: "#37D962D6"}}>{linkBtn}</p>
          </>

        }

        <h3 className={`title  font-medium mb-2 ${titleSize ? "text-[20px] md:text-[24px] " : "text-3xl md:text-4xl"}`}>{title}</h3>


        {
          description && (
            <p
              className={`mb-4 ${banner ? "text-sm" : "description"} ${side_text ? "text-left" : "text-center"}`}
            >
              {description}
            </p>
          )
        }

        {
          sub && (
            <p className="text-sm md:text-[18px] text-white mb-4" style={{ whiteSpace: 'pre-line' }}>{sub}</p>
          )
        }
        {
          cardFooter && (
            <p className="cardFooter text-[18px] !text-[#00AEEF]">{cardFooter}</p>
          )
        }
        {
          grdBtn && <button className={`w-auto grdBtn ${isButton ? "mt-0": "mt-16"} uppercase text-white  px-[24px] py-[16px] rounded-[8px] flex justify-center items-center mx-auto`} style={{
            background: "linear-gradient(90deg, #F89B29 0%, #FF0F7B 186.51%)"
          }}>{grdBtn}</button>
        }
        {
          designDescription && (
            <div className="text-gray-200 !text-center space-y-3">
              <div className="flex items-center justify-center space-x-3">
                <svg className="w-5 h-5 text-cyan-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Client-Centric Mission</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <svg className="w-5 h-5 text-cyan-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Enduring Trust</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <svg className="w-5 h-5 text-cyan-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Channel-First Partnership</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <svg className="w-5 h-5 text-cyan-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Relentless Innovation</span>
              </div>
            </div>
          )
        }
        <Link to={url} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        {buttonText && (
          <button className={`${banner ? "text-blue-600" : "cta-button px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition"}`}>
            {buttonText}
          </button>
        )}
        </Link>
      </div>
    </div >
  );
};

export default CardContent;