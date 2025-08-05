import React from 'react';

const ProfileHRCard = ({SizeModify, h1, l1l, l1r, l2l, l2r, l3l, l3r, l4l, l4r, l5l, l5r, l6l, l6r, l7l, l7r }) => {
    return (
        <div className=' py-5 px-12' style={{
            background: "linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)"
        }}>
            <h1 className={` my-8 ${SizeModify ? "text-[24px] font-medium" : "font-bold"}`}>
                {h1}
            </h1>

            {l1l && <div className='pl-4'>
                <p className='flex justify-between mb-4  border-b-2 pb-1 border-gray-500'>
                    <span className={` ${SizeModify ? "text-[16px] font-light" : "text-gray-400"}`} >{l1l} </span>
                    <span className={`${SizeModify ? "text-[16px] font-medium ": "font-bold text-sm md:text-lg"}`}> {l1r}</span>
                </p>
            </div>}
            {l2l && <div className='pl-4'>
                <p className='flex justify-between mb-4  border-b-2 pb-1 border-gray-500'>
                    <span className={` ${SizeModify ? "text-[16px] font-light" : "text-gray-400"}`} >{l2l}</span>
                    <span className={`${SizeModify ? "text-[16px] font-medium ": "font-bold text-sm md:text-lg"}`}> {l2r}</span>
                </p>
            </div>}
            {l3l && <div className='pl-4'>
                <p className='flex justify-between mb-4  border-b-2 pb-1 border-gray-500'>
                    <span className={` ${SizeModify ? "text-[16px] font-light" : "text-gray-400"}`} >{l3l}</span>
                    <span className={`${SizeModify ? "text-[16px] font-medium ": "font-bold text-sm md:text-lg"}`}> {l3r}</span>
                </p>
            </div>}
            {l4l && <div className='pl-4'>
                <p className='flex justify-between mb-4  border-b-2 pb-1 border-gray-500'>
                    <span className={` ${SizeModify ? "text-[16px] font-light" : "text-gray-400"}`} >{l4l}</span>
                    <span className={`${SizeModify ? "text-[16px] font-medium ": "font-bold text-sm md:text-lg"}`}> {l4r}</span>
                </p>
            </div>}
            {
                l5l && <div className='pl-4'>
                    <p className='flex justify-between mb-4  border-b-2 pb-1 border-gray-500'>
                        <span className={` ${SizeModify ? "text-[16px] font-light" : "text-gray-400"}`} >{l5l}</span>
                        <span className={`${SizeModify ? "text-[16px] font-medium ": "font-bold text-sm md:text-lg"}`}> {l5r}</span>
                    </p>
                </div>
            }
            {l6l && <div className='pl-4'>
                <p className='flex justify-between mb-4  border-b-2 pb-1 border-gray-500'>
                    <span className={` ${SizeModify ? "text-[16px] font-light" : "text-gray-400"}`} >{l6l}</span>
                    <span className={`${SizeModify ? "text-[16px] font-medium ": "font-bold text-sm md:text-lg"}`}> {l6r}</span>
                </p>
            </div>}
            {
                l7l && <div className='pl-4'>
                    <p className='flex justify-between mb-4  border-b-2 pb-1 border-gray-500'>
                        <span className={` ${SizeModify ? "text-[16px] font-light" : "text-gray-400"}`} >{l7l}</span>
                        <span className={`${SizeModify ? "text-[16px] font-medium ": "font-bold text-sm md:text-lg"}`}> {l7r}</span>
                    </p>
                </div>
            }

        </div>
    );
};

export default ProfileHRCard;