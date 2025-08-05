import React from 'react';

const Blog_Subscribe = () => {
    return (
        <div className="w-full my-8 py-8 bg-linear-to-t from-[#082235]  to-[#00445d] rounded-xl  
            ">
            <div className='w-3/4 mx-auto py-6 '>
                <h1 className='font-semibold text-center my-4 text-4xl'></h1>
                <p className='font-thin text-center my-3'></p>

                <div className='relative'>
                    <input className='w-full mt-2 py-5 rounded-lg' placeholder='Enter Your Email ' type="search" />

                    <button
                        className="absolute right-3 top-4 w-56 py-2 mt-1 px-5   bg-radial from-[#FF0F7B]  to-[#F89B29] rounded-md font-bold text-white transition-opacity hover:opacity-90"

                    >
                        Subscribe
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Blog_Subscribe;

