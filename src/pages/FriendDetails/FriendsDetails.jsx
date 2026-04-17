import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { HiOutlineBellSnooze } from "react-icons/hi2";
import { BsArchive } from "react-icons/bs";
import { RiDeleteBinLine } from "react-icons/ri";
import { HashLoader } from "react-spinners";
import { TimeLineContext } from "../../context/TimeLineContext";
import { toast } from "react-toastify";
import logoCall from '../../assets/Images/call.png'
import logoText from '../../assets/Images/text.png'
import logoVideo from '../../assets/Images/video.png'

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
        toast.success(`${type} with ${friend.name} added to Timeline`);

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

            {/* LEFT SIDE Div */}
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

            {/* RIGHT SIDE Div */}
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
                            <img src={logoCall} alt="" />
                            Call
                        </button>

                        <button
                            onClick={() => handleTimeLine("Text")}
                            className="btn py-10 flex flex-col items-center"
                        >
                            <img src={logoText} alt="" />
                            Text
                        </button>

                        <button
                            onClick={() => handleTimeLine("Video")}
                            className="btn py-10 flex flex-col items-center"
                        >
                            <img src={logoVideo} alt="" />
                            Video
                        </button>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default FriendsDetails;