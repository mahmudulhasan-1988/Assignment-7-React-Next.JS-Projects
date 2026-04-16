import React from 'react';

const FriendCount = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10 text-center mb-10 mx-auto max-w-7xl'>
            <div className='bg-[#FFFFFF] shadow-2xl rounded-2xl px-20 py-10'>
                <h1 className='text-5xl font-bold text-[#244D3F] mb-3'>12</h1>
                <p className='text-[#64748B] font-semibold'>Total Friends</p>
            </div>
            <div className='bg-[#FFFFFF] shadow-2xl rounded-2xl px-20 py-10'>
                <h1 className='text-5xl font-bold text-[#244D3F] mb-3'>4</h1>
                <p className='text-[#64748B] font-semibold'>On Track</p>
            </div>
            <div className='bg-[#FFFFFF] shadow-2xl rounded-2xl px-20 py-10'>
                <h1 className='text-5xl font-bold text-[#244D3F] mb-3'>6</h1>
                <p className='text-[#64748B] font-semibold'>Need Attention</p>
            </div>
            <div className='bg-[#FFFFFF] shadow-2xl rounded-2xl px-20 py-10'>
                <h1 className='text-5xl font-bold text-[#244D3F] mb-3'>12</h1>
                <p className='text-[#64748B] font-semibold'>Interactions This Month</p>
            </div>
        </div>
    );
};

export default FriendCount;