import React from 'react';

const DashboardSideCard = ({ head, text, desc }) => {
    return (
        <div className='bg-[#CDCDD466] w-3/4 md:w-2/4 mx-auto px-3 md:px-5 py-5 rounded-lg text-center font-semibold'>

            <h1 className='text-2xl md:text-3xl lg:text-[40px]' style={{color: "#00AEEF"}}>{head}</h1>
            <p className='my-4 text-[16px] font-medium'>{text}</p>
            <p className='pb-3 text-[16px] font-medium'>{desc}</p>
        </div>
    );
};

export default DashboardSideCard;