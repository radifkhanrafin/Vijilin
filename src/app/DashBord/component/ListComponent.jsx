import React from 'react';

const ListComponent = ({headingSize, heading,spaceHandling, LeftHeading, p30, p31,p32,  p1, p11, p3, p4, p22, p2, array, array2, array3, bg = true }) => {
    return (
        <div className={`${bg ? "  py-5 px-3  md:px-8 lg:px-[30px]" : "bg-transparent  py-5 px-6"} mt-12`} style={{
            background: "linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)"
        }}>
            
            <h1 className={`text-center mt-8  ${headingSize ? "text-[24px] font-medium" : "font-semibold"} `}> {heading}</h1>
            <h1 className={`text-left mt-8 ${headingSize ? "text-[24px] font-medium" : "font-semibold"} `}> {LeftHeading}</h1>
            <p className={`text-left px-5 ${headingSize ? "text-[16px] font-medium" : "my-8"}`}>
                {p1}
            </p>
            <p className={`text-left text-[16px] `}>
                {p4}
            </p>

            {
                array && <div>
                    <p className='font-semibold mt-5'>{p11}</p>
                    <p className='font-medium text-[16px] mt-5'>{p30}</p>
                    <ul className='mt-4 px-0 lg:px-5 list-item'>
                        {array.map((li, index) => (
                            <li key={index} className='list-disc mt-3 ml-[12px]'>
                                {li}
                            </li>
                        ))}
                    </ul>
                </div>
            }
            {
                array2 &&

                <div>
                    <p className='font-semibold mt-5'>{p22}</p>
                    <p className='font-medium text-[18px] mt-5'>{p31}</p>
                    <ul className='mt-4 list-item'>
                        {array2.map((li, index) => (
                            <li key={index} className='list-disc mt-3 ml-[12px]'>
                                {li}
                            </li>
                        ))}
                    </ul>
                </div>
            }
            {
                array3 && <div>
                    <p className='font-semibold mt-5'>{p3}</p>
                    <p className='font-medium text-[18px] mt-5'>{p32}</p>
                    <ul className='mt-4 list-item'>
                        {array3.map((li, index) => (
                            <li key={index} className='list-disc mt-3 ml-[12px]'>
                                {li}
                            </li>
                        ))}
                    </ul>
                </div>
            }

            <p className={` text-left ${spaceHandling ? "mt-8 " : "mt-2"}`}>{p2}</p>
        </div>
    );
};

export default ListComponent;