
import React from 'react';
import DashboardSideCard from './DashboardSideCard';

const MesurableComponentDashboard = ({ heading, array,isColor }) => {
    return (
        <div className='  py-5  mt-10' style={{
            background: "linear-gradient(0deg, #082235 53.83%, #00AEEF 328.5%)"
        }}>

            <div className='w-full md:w-3/4 mx-auto'>
                <h1 className={`${isColor ? "!text-[#CDCDD466] text-[24px] font-medium" : "text-gray-500  text-2xl md:text-3xl font-bold"} my-6 whitespace-pre-line text-center`}>{heading}</h1>
                {array && <div className='grid grid-cols-1 gap-6'>
                    {array.map(card => <DashboardSideCard head={card.metric} text={card.label} desc={card.text} />)}
                </div>}
            </div>
        </div>
    );
};

export default MesurableComponentDashboard;