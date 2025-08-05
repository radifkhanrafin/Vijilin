import React from 'react';

const NumberShow = ({ number, link }) => {
    return (
        <div className='flex flex-col items-center justify-center  '>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-2'>{number}</h2>
            <p className='  cursor-pointer text-[16px] font-medium' style={{color: "#00AEEF"}}>{link}</p>
        </div>
    );
};

export default NumberShow;