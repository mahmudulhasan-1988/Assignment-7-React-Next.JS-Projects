import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { HiOutlineBellSnooze } from "react-icons/hi2";
import { BsArchive } from "react-icons/bs";
import { RiDeleteBinLine } from "react-icons/ri";
import { HashLoader } from "react-spinners";
import { TimeLineContext } from "../../context/TimeLineContext";
import { toast } from "react-toastify";

const FriendsDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const { timeLineData, setTimelineData } = useContext(TimeLineContext);

    const [friend, setFriend] = useState(null);

    const getStatusColor = (status) => {
        if (status === "OVERDUE") return "bg-[#EF4444] text-white";
        if (status === "ALMOST DUE") return "bg-[#EFAD44] text-white";
        return "bg-[#244D3F] text-white";
    };

    useEffect(() => {
        fetch("/data.json")
            .then(res => res.json())
            .then(data => {
                const singleFriend = data.find(f => f.id === Number(id));
                setFriend(singleFriend);
            });
    }, [id]);

    // ADD TO TIMELINE FUNCTION
    const handleTimeLine = (type) => {
        const newData = {
            ...friend,
            action: type,
            time: new Date().toLocaleString(),
            
        };

        setTimelineData([...timeLineData, newData]);
        toast.success(`${friend.name} has been added to the Timeline.`);

        navigate("/TimeLine");
    };

    if (!friend) {
        return (
            <div className="text-center mt-10 flex justify-center items-center">
                <HashLoader color="#244D3F" />
            </div>
        );
    }

    return (
        <div className="grid lg:grid-cols-2 md:grid-cols-1 mx-auto mt-10 mb-10">

            {/* LEFT SIDE */}
            <div className="text-center mx-auto w-2xl mb-5">

                <div className="shadow-lg p-6 rounded-2xl">

                    <img
                        src={friend.picture}
                        alt={friend.name}
                        className="w-24 h-24 rounded-full mx-auto"
                    />

                    <h1 className="text-2xl font-bold">{friend.name}</h1>

                    <div className={`px-3 py-1 rounded-full text-sm w-max mx-auto ${getStatusColor(friend.status)}`}>
                        {friend.status}
                    </div>

                    <div className="text-sm bg-[#a8f1b8] p-2 rounded-full my-2 mx-auto w-max">
                        {friend.tags.map(tag => (
                            <span key={tag} className="mr-1">{tag}</span>
                        ))}
                    </div>

                    <p className="text-lg text-zinc-500 font-semibold">
                        "{friend.bio}"
                    </p>

                    <p className="text-zinc-500 font-semibold">
                        Personal: {friend.email}
                    </p>

                </div>

                {/* STATIC BUTTONS */}
                <div className="space-y-4 mt-8">

                    <button className="btn w-full py-7">
                        <HiOutlineBellSnooze /> Snooze 2 weeks
                    </button>

                    <button className="btn w-full py-7">
                        <BsArchive /> Archive
                    </button>

                    <button className="btn w-full py-7 text-red-500">
                        <RiDeleteBinLine /> Delete
                    </button>

                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="mr-15 ">

                <div className="grid grid-cols-3 gap-6">

                    <div className="text-center shadow-xl p-5 rounded-2xl">
                        <p className="text-4xl font-bold text-[#244D3F]">
                            {friend.days_since_contact}
                        </p>
                        <p className="text-zinc-500 text-lg">Days Since Contact</p>
                    </div>

                    <div className="text-center shadow-xl p-5 rounded-2xl">
                        <p className="text-4xl font-bold text-[#244D3F]">
                            {friend.goal}
                        </p>
                        <p className="text-zinc-500 text-lg">Goal</p>
                    </div>

                    <div className="text-center shadow-xl p-5 rounded-2xl">
                        <p className="text-2xl font-bold text-[#244D3F]">
                            {friend.next_due_date}
                        </p>
                        <p className="text-zinc-500 text-lg">Next Due</p>
                    </div>

                </div>

                {/* RELATIONSHIP GOAL */}
                <div className="shadow-2xl p-6 rounded-2xl mt-5 justify-center items-center">
                    <div className="flex justify-between items-center  text-2xl text-[#244D3F] font-bold my-5">
                        Relationship Goal
                        <button className="btn text-xl">Edit</button>
                    </div>
                    <div className="text-lg">
                        Connect every <span className="font-bold">{friend.goal} Days</span>
                    </div>
                </div>


                {/* QUICK CHECK-IN */}
                <div className="shadow-2xl p-6 rounded-2xl mt-5">

                    <h2 className="text-2xl font-semibold text-[#244D3F]">
                        Quick Check-In
                    </h2>

                    <div className="grid grid-cols-3 gap-4 py-10">

                        <button
                            onClick={() => handleTimeLine("Call")}
                            className="btn py-10 flex flex-col items-center"
                        >
                            <img src="/src/assets/Images/call.png" alt="" />
                            Call
                        </button>

                        <button
                            onClick={() => handleTimeLine("Text")}
                            className="btn py-10 flex flex-col items-center"
                        >
                            <img src="/src/assets/Images/text.png" alt="" />
                            Text
                        </button>

                        <button
                            onClick={() => handleTimeLine("Video")}
                            className="btn py-10 flex flex-col items-center"
                        >
                            <img src="/src/assets/Images/video.png" alt="" />
                            Video
                        </button>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default FriendsDetails;




















// import { useParams, useNavigate } from "react-router-dom";
// import { useEffect, useState, useContext } from "react";
// import { HashLoader } from "react-spinners";
// import { TimeLineContext } from "../../context/TimeLineContext";

// const FriendsDetails = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { timeLineData, setTimelineData } = useContext(TimeLineContext);

//   const [friend, setFriend] = useState(null);

//   // 🔥 Status Color
//   const getStatusColor = (status) => {
//     if (status === "OVERDUE") return "bg-[#EF4444] text-white";
//     if (status === "ALMOST DUE") return "bg-[#EFAD44] text-white";
//     return "bg-[#244D3F] text-white";
//   };

//   // 🔥 Fetch Data
//   useEffect(() => {
//     fetch("/data.json")
//       .then(res => res.json())
//       .then(data => {
//         const singleFriend = data.find(f => f.id === Number(id));
//         setFriend(singleFriend);
//       });
//   }, [id]);

//   // 🔥 Timeline Add Function (with action)
//   const handleTimeLine = (actionType) => {
//     const newItem = {
//       ...friend,
//       action: actionType,
//       time: new Date().toLocaleString(),
//     };

//     setTimelineData(prev => [...prev, newItem]);

//     // 👉 redirect to timeline
//     navigate("/TimeLine");
//   };

//   if (!friend) {
//     return (
//       <div className="flex justify-center mt-20">
//         <HashLoader color="#244D3F" />
//       </div>
//     );
//   }

//   return (
//     <div className="grid lg:grid-cols-2 max-w-7xl mx-auto mt-10 gap-6">

//       {/* LEFT */}
//       <div className="text-center shadow-lg p-6 rounded-2xl">
//         <img
//           src={friend.picture}
//           alt={friend.name}
//           className="w-24 h-24 rounded-full mx-auto"
//         />

//         <h1 className="text-2xl font-bold mt-2">{friend.name}</h1>

//         <div className={`px-3 py-1 rounded-full w-max mx-auto mt-2 ${getStatusColor(friend.status)}`}>
//           {friend.status}
//         </div>

//         <p className="mt-2 text-gray-500">
//           {friend.days_since_contact} days ago
//         </p>

//         <p className="mt-2">"{friend.bio}"</p>
//       </div>

//       {/* RIGHT */}
//       <div className="space-y-6">

//         {/* Quick Check-In */}
//         <div className="shadow-2xl p-6 rounded-2xl">
//           <h2 className="text-2xl text-[#244D3F] font-semibold">
//             Quick Check-In
//           </h2>

//           <div className="grid grid-cols-3 gap-4 py-10">

//             {/* 🔥 CALL */}
//             <button
//               onClick={() => handleTimeLine("Call")}
//               className="btn py-10 shadow-2xl flex flex-col items-center rounded-2xl"
//             >
//               <img src="/src/assets/Images/call.png" alt="" />
//               Call
//             </button>

//             {/* 🔥 TEXT */}
//             <button
//               onClick={() => handleTimeLine("Text")}
//               className="btn py-10 shadow-2xl flex flex-col items-center rounded-2xl"
//             >
//               <img src="/src/assets/Images/text.png" alt="" />
//               Text
//             </button>

//             {/* 🔥 VIDEO */}
//             <button
//               onClick={() => handleTimeLine("Video")}
//               className="btn py-10 shadow-2xl flex flex-col items-center rounded-2xl"
//             >
//               <img src="/src/assets/Images/video.png" alt="" />
//               Video
//             </button>

//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default FriendsDetails;
















// import { useParams, useNavigate } from "react-router-dom";
// import { useEffect, useState, useContext } from "react";
// import { HiOutlineBellSnooze } from "react-icons/hi2";
// import { BsArchive } from "react-icons/bs";
// import { RiDeleteBinLine } from "react-icons/ri";
// import { HashLoader } from "react-spinners";
// import { TimeLineContext } from "../../context/TimeLineContext";

// const FriendsDetails = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const { timeLineData, setTimelineData } = useContext(TimeLineContext);

//   const [friend, setFriend] = useState(null);

//   // 🔥 Status Color
//   const getStatusColor = (status) => {
//     if (status === "OVERDUE") return "bg-[#EF4444] text-white";
//     if (status === "ALMOST DUE") return "bg-[#EFAD44] text-white";
//     return "bg-[#244D3F] text-white";
//   };

//   // 🔥 Fetch Friend
//   useEffect(() => {
//     fetch("/data.json")
//       .then(res => res.json())
//       .then(data => {
//         const singleFriend = data.find(f => f.id === Number(id));
//         setFriend(singleFriend);
//       });
//   }, [id]);

//   // 🔥 Add to Timeline + Navigate
//   const handleTimeLine = () => {
//     setTimelineData(prev =>
//       prev.find(item => item.id === friend.id)
//         ? prev
//         : [...prev, friend]
//     );

//     navigate("/TimeLine");
//   };

//   // 🔄 Loading
//   if (!friend) {
//     return (
//       <div className="flex justify-center items-center mt-20">
//         <HashLoader color="#244D3F" />
//       </div>
//     );
//   }

//   return (
//     <div className="grid lg:grid-cols-2 md:grid-cols-1 max-w-7xl mx-auto mt-10 gap-6">

//       {/* LEFT SIDE */}
//       <div className="text-center shadow-lg p-6 rounded-2xl">

//         <img
//           src={friend.picture}
//           alt={friend.name}
//           className="w-24 h-24 rounded-full mx-auto"
//         />

//         <h1 className="text-2xl font-bold mt-2">{friend.name}</h1>

//         <div className={`px-3 py-1 rounded-full text-sm font-semibold w-max mx-auto mt-2 ${getStatusColor(friend.status)}`}>
//           {friend.status}
//         </div>

//         <div className='text-sm font-medium bg-[#a8f1b8] p-2 rounded-full my-2 mx-auto w-max'>
//           {friend.tags.map(tag => (
//             <span key={tag} className="mr-1">#{tag}</span>
//           ))}
//         </div>

//         <p className="text-lg text-zinc-500 font-semibold">
//           "{friend.bio}"
//         </p>

//         <p className="text-zinc-500 font-semibold mt-2">
//           Personal: {friend.email}
//         </p>

//         {/* BUTTONS */}
//         <div className="space-y-4 mt-6">

//           <button onClick={handleTimeLine} className="btn w-full rounded-lg py-6">
//             <HiOutlineBellSnooze /> Snooze 2 weeks
//           </button>

//           <button onClick={handleTimeLine} className="btn w-full rounded-lg py-6">
//             <BsArchive /> Archive
//           </button>

//           <button onClick={handleTimeLine} className="btn w-full rounded-lg py-6 text-red-500">
//             <RiDeleteBinLine /> Delete
//           </button>

//         </div>
//       </div>

//       {/* RIGHT SIDE */}
//       <div className="space-y-6">

//         {/* Stats */}
//         <div className="grid grid-cols-3 gap-4">
//           <div className="text-center shadow-lg p-4 rounded-2xl">
//             <p className="text-3xl font-bold text-[#244D3F]">
//               {friend.days_since_contact}
//             </p>
//             <p className="text-sm">Days</p>
//           </div>

//           <div className="text-center shadow-lg p-4 rounded-2xl">
//             <p className="text-3xl font-bold text-[#244D3F]">
//               {friend.goal}
//             </p>
//             <p className="text-sm">Goal</p>
//           </div>

//           <div className="text-center shadow-lg p-4 rounded-2xl">
//             <p className="text-lg font-bold text-[#244D3F]">
//               {friend.next_due_date}
//             </p>
//             <p className="text-sm">Next Due</p>
//           </div>
//         </div>

//         {/* Relationship Goal */}
//         <div className="shadow-lg p-6 rounded-2xl">
//           <h2 className="text-xl font-bold mb-2">Relationship Goal</h2>
//           <p>
//             Connect every <span className="font-bold">{friend.goal} days</span>
//           </p>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default FriendsDetails;

















// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { HiOutlineBellSnooze } from "react-icons/hi2";
// import { BsArchive } from "react-icons/bs";
// import { RiDeleteBinLine } from "react-icons/ri";
// import { HashLoader } from "react-spinners";

// const FriendsDetails = () => {
//     const { id } = useParams();
//     const [friend, setFriend] = useState(null);

//     const getStatusColor = (status) => {
//         if (status === "OVERDUE") return "bg-[#EF4444] text-white";
//         if (status === "ALMOST DUE") return "bg-[#EFAD44] text-white";
//         return "bg-[#244D3F] text-white";
//     };

//     useEffect(() => {
//         fetch("/data.json")
//             .then(res => res.json())
//             .then(data => {
//                 const singleFriend = data.find(f => f.id === Number(id));
//                 setFriend(singleFriend);
//             });
//     }, [id]);

//     const[timeLineData, setTimelineData] = useState([]);

//     if (!friend) {
//         return (
//             <div className="text-center mt-10 items-center justify-center flex-1"><HashLoader color="#244D3F" />
//             </div>);
//             };

//     const handleTimeLine = () => {
//         setTimelineData([...timeLineData, friend]);
//     };
//     console.log(timeLineData);

//     return (
        
//         <div className="grid lg:grid-cols-2 md:grid-cols-1 mx-auto mt-10">
//             <div className="LeftDiv text-center mx-auto w-2xl mb-5">
//                 <div className="text-center shadow-lg p-6 rounded-2xl">

//                     {/* Image */}
//                     <img
//                         src={friend.picture}
//                         alt={friend.name}
//                         className="w-24 h-24 rounded-full mx-auto"
//                     />

//                     {/* Name */}
//                     <h1 className="text-2xl font-bold">{friend.name}</h1>

//                     {/* Status Badge */}
//                     <div
//                         className={`px-3 py-1 rounded-full text-sm font-semibold w-max mx-auto ${getStatusColor(friend.status)}`}
//                     >
//                         {friend.status}
//                     </div>

//                     {/* Days */}
//                     <div className='text-sm font-medium bg-[#a8f1b8] p-2 rounded-full my-2 mx-auto w-max'>
//                         {friend.tags.map(tag => (
//                             <span key={tag} className="mr-1">{tag}</span>
//                         ))}
//                     </div>
//                     <p className="text-lg text-zinc-500 font-semibold">"{friend.bio}"</p>
//                     <p className="text-zinc-500 font-semibold">Personal: {friend.email}</p>

//                 </div>
//                 {/* buttons */}
//                 <div className="max-w-full mx-auto space-y-4 mt-8">

//                     <button className="btn w-full rounded-lg py-7">
//                         <h2 className="flex items-center justify-center gap-2 text-lg font-semibold">
//                             <HiOutlineBellSnooze /> Snooze 2 weeks
//                         </h2>
//                     </button>

//                     <button className="btn w-full rounded-lg py-7">
//                         <h2 className="flex items-center justify-center gap-2 text-lg font-semibold">
//                             <BsArchive /> Archive
//                         </h2>
//                     </button>

//                     <button className="btn w-full rounded-lg py-7">
//                         <h2 className="flex items-center justify-center gap-2 text-lg font-semibold text-red-500">
//                             <RiDeleteBinLine /> Delete
//                         </h2>
//                     </button>

//                 </div>
//             </div>

//             <div className="RightDiv mr-15 ml-10 mb-10 ">
//                 {/* Stats */}
//                 <div className="grid grid-cols-3 gap-6">
//                     <div className="text-center shadow-lg py-6 px-6 rounded-2xl">
//                         <p className="text-4xl font-bold text-[#244D3F]">{friend.days_since_contact}</p>
//                         <p className="text-lg text-zinc-500 font-semibold">Days Since Contact</p>
//                     </div>
//                     <div className="text-center shadow-lg py-6 px-6 rounded-2xl">
//                         <p className="text-4xl font-bold text-[#244D3F]">{friend.goal}</p>
//                         <p className="text-lg text-zinc-500 font-semibold">Goal (Days)</p>
//                     </div>
//                     <div className="text-center shadow-lg py-6 px-6 rounded-2xl">
//                         <p className="text-3xl font-bold text-[#244D3F]">{friend.next_due_date}</p>
//                         <p className="text-lg text-zinc-500 font-semibold">Next Due</p>
//                     </div>
//                 </div>

//                 {/* Relationship Goal */}
//                 <div className=" shadow-2xl p-6 rounded-2xl mt-5 justify-center items-center">
//                     <div className="flex justify-between items-center  text-2xl text-[#244D3F] font-bold my-5">
//                         <h2>Relationship Goal</h2>
//                         <button className="btn text-xl">Edit</button>
//                     </div>
//                     <div>
//                         <h2><span className="text-zinc-500 text-xl">Connect every</span> <span className="text-xl font-bold">{friend.goal} Days</span></h2>
//                     </div>
//                 </div>
//                 {/* Quick Check-In */}
//                 <div className=" shadow-2xl p-6 rounded-2xl mt-5 ">
//                     <h2 className="text-2xl text-[#244D3F] font-semibold">Quick Check-In</h2>
//                     <div className="flex justify-around items-center mt-4  ">
//                         <div className="grid grid-cols-3 gap-4 py-10">
//                             <button className="btn py-10 px-15 shadow-2xl flex flex-col justify-center items-center rounded-2xl" onClick={handleTimeLine}>
//                                 <img src="/src/assets/Images/call.png" alt="" />
//                                 Call
//                             </button>
//                             <button className="btn py-10 px-15 shadow-2xl flex flex-col justify-center items-center rounded-2xl" onClick={handleTimeLine}>
//                                 <img src="/src/assets/Images/text.png" alt="" />
//                                 Text
//                             </button>
//                             <button className="btn py-10 px-15 shadow-2xl flex flex-col justify-center items-center rounded-2xl" onClick={handleTimeLine}>
//                                 <img src="/src/assets/Images/video.png" alt="" />
//                                 Video
//                             </button>
//                         </div>


//                     </div>
//                 </div>

//             </div>
//         </div>
//     );
// };

// export default FriendsDetails;