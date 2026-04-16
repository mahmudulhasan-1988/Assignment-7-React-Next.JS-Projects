import React, { useEffect, useState } from 'react';
import { HashLoader } from 'react-spinners';
import { Link } from 'react-router-dom';

const AllFriends = () => {

    //  Status Color Function
    const getStatusColor = (status) => {
        if (status === "OVERDUE") return "bg-[#EF4444] text-white";
        if (status === "ALMOST DUE") return "bg-[#EFAD44] text-white";
        return "bg-[#244D3F] text-white";
    };

    const [friendData, setFriendData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/data.json');
            const data = await response.json();
            setFriendData(data);
            setLoading(false);
        };
        fetchData();
    }, []);

    return (
        <div className='mb-8 mx-auto max-w-7xl px-4'>
            <h2 className='text-3xl font-bold'>Your Friends</h2>
            
            {/* Loading */}
            {loading ? (
                <div className='flex justify-center items-center mt-10'>
                    <HashLoader color="#244D3F" />
                </div>
            ) : (
                <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-4'>
                    
                    {friendData.map(friend => (

                        
                        <Link
                            key={friend.id}
                            to={`/FriendDetails/${friend.id}`}
                            className="block"
                        >
                            <div className='shadow-md p-8 rounded text-center hover:shadow-xl transition cursor-pointer'>

                                {/* Image */}
                                <div className='w-24 h-24 mx-auto mb-4'>
                                    <img
                                        className='w-20 h-20 rounded-full mx-auto object-cover'
                                        src={friend.picture}
                                        alt={friend.name}
                                    />
                                </div>

                                {/* Name */}
                                <h3 className='text-2xl font-bold'>{friend.name}</h3>

                                {/* Days */}
                                <p className='text-zinc-500 text-lg'>
                                    {friend.days_since_contact}d ago
                                </p>

                                {/* Tags */}
                                <div className='text-sm font-medium bg-[#f9facb] p-2 rounded-full my-2 mx-auto w-max'>
                                    {friend.tags.map(tag => (
                                        <span key={tag} className="mr-1">{tag}</span>
                                    ))}
                                </div>

                                {/* Status */}
                                <div
                                    className={`px-3 py-1 rounded-full text-sm font-semibold w-max mx-auto ${getStatusColor(friend.status)}`}
                                >
                                    {friend.status}
                                </div>

                            </div>
                        </Link>

                    ))}

                </div>
            )}
        </div>
    );
};

export default AllFriends;

