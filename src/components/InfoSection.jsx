import { Link } from "react-router-dom";
import NavyBlueBackground from "./NavyBlueBackground";

const InfoSection = ({ position = "right", width, height, design1, design2, heading, subtitle, desc, btnText, modify, url }) => {
    const content = (
        <>
            {design1 && (
                <div className="max-w-2xl mx-auto">
                    <h1 className=" mt-3 text-xl md:text-3xl  font-bold mb-6">From Ingestion to Action</h1>

                    <p className={` ${modify ? "text-[18px] mb-3" : "text-sm font-bold mb-8 "}`}>
                        Every piece of security data follows a carefully orchestrated journey through our integrated platform, ensuring maximum value and minimum noise.
                    </p>

                    <ul className={` list-disc ${modify ? "text-[18px] space-y-3 " : "font-bold text-sm md:text-lg space-y-4"} pl-5 `}>
                        <li>Data is ingested from a client's firewall/endpoint</li>
                        <li>It's routed through Cribl for optimization and enrichment</li>
                        <li>It's analyzed in CrowdStrike LogScale</li>
                        <li>An actionable alert is generated in the ViSH Portal</li>
                        <li>A remediation action is taken by the SOC</li>
                    </ul>
                </div>
            )}

            {
                design2 && (
                    <div className="max-w-2xl bg-transparent text-white">
                        <h1 className="text-2xl md:text-4xl lg:text-5xl !text-[#00AEEF] font-bold mb-2 leading-tight">{heading}</h1>

                        <p className="text-lg mb-8 mt-4 font-semibold">
                            {subtitle}
                        </p>

                        <p className="mb-8 font-bold text-xl">
                            {desc}
                        </p>

                        <Link to={url ? url : ""} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="inline-block cursor-pointer font-medium p-[18px] md:px-[24px] md:py-[16px] rounded-[8px] text-[16px] md:text-[18px] border-1 border-solid !border-[#00AEEF] text-[#00AEEF] bg-transparent transition-all duration-200 hover:bg-[#00AEEF]/10 hover:border-[#00AEEF]/90 text-center select-none uppercase">
                            {btnText}
                        </Link>
                    </div>
                )
            }
        </>
    );

    const image = (
        <div>
            <NavyBlueBackground h={height} w={width} />
        </div>
    );

    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 lg:!gap-[70px] items-center ${design1 ? "max-w-6xl" : "max-w-7xl"} mx-auto`}>
            {position === "left" ? (
                <>
                    {image}
                    {content}
                </>
            ) : (
                <>
                    {content}
                    {image}
                </>
            )}
        </div>
    );
};

export default InfoSection;
