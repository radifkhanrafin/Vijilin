import React from 'react';

const DashboardSideText = ({ desc, author,author2,fontSize }) => {
    return (
        <div className='py-16 md:px-16 md:py-16  mt-10' style={{
            background: "linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)"
        }}>
            <div className='w-full md:w-2/4 mx-auto px-8 md:px-0'>
                <p className={`leading-10  font-medium ${fontSize ? "text-[20px]" : "text-[24px]"}`}>{desc}</p>

                {author && <p className={` font-medium my-4 ${fontSize ? "text-[20px]" : "text-[24px]"}`} style={{ color: "#00AEEF" }}>
                    — {author}
                </p>}
                {author2 && <p className={` font-medium my-4 ${fontSize ? "text-[20px]" : "text-[24px]"}`} style={{ color: "#00EF14" }}>
                    — {author2}
                </p>}
            </div>

        </div>
    );
};

export default DashboardSideText;