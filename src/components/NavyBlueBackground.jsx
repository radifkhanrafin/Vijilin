
const NavyBlueBackground = ({ children, borderCancel,h,w, smallPadding }) => {
    return <>

        <section className={`py-20 ${smallPadding ? " " : " "}`}>
            <div className={`container mx-auto ${w ? `w-[${w}]` : ""}`}>
                <div
                    className={`backdrop-blur-md rounded-3xl p-3 md:p-12 mx-auto}  ${borderCancel ? "" : "shadow-2xl border border-[#00AEEF]/40"} `}
                    style={{
                        background: "linear-gradient(0deg, #082235 54%, #00AEEF 328%)",
                        ...(h ? { minHeight: h } : {}),
                    }}
                >
                    {children}
                </div>
            </div>
        </section>
    </>
}

export default NavyBlueBackground;

