import React from 'react';

const SearchBtn = ({ Input, searchItem }) => {
    return (
        <div>
            <div className=' flex items-center justify-center gap-2' >
                <input className='w-1/2 mt-2 py-3 min-w-[200px] rounded-lg' placeholder={searchItem} type="search" />

                <button
                    className=" py-3 rounded-lg mt-2 px-8 bg-[#00AEEF]  text-white transition-opacity hover:opacity-90">
                    {Input}
                </button>
            </div>
        </div>
    );
};

export default SearchBtn;