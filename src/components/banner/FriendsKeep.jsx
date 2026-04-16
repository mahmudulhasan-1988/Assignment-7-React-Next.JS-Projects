import React from 'react';

const FriendsKeep = () => {
    return (
        <div className='text-center space-y-5 mt-10'>
            <h1 className=' text-4xl font-bold'>Friends to keep close in your life</h1>
            <p className='text-zinc-400'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
            relationships that matter most.</p>
            <button className='bg-[#244D3F] hover:bg-green-600 text-white font-bold py-2 px-4 rounded'>
                + Add a Friend
            </button>
        </div>

    );
};

export default FriendsKeep;