import { useContext, useState } from "react";
import { TimeLineContext } from "../../context/TimeLineContext";
import { RiDeleteBinLine } from "react-icons/ri";
import { toast } from "react-toastify";


const TimeLine = () => {
  const { timeLineData, setTimelineData } = useContext(TimeLineContext);

  // Dropdown Filter State
  const [filter, setFilter] = useState("All");

  // Delete Function
  const handleDelete = (id) => {
    const updated = timeLineData.filter(item => item.id !== id);
    setTimelineData(updated);
    toast.warning(`Timeline Data is Delete!`);
  };

  // Filter Logic
  const filteredData =
    filter === "All"
      ? timeLineData
      : timeLineData.filter(item => item.action === filter);

  return (
    <div className="max-w-5xl mx-auto mt-10 px-4">

      <h2 className="text-4xl font-bold mb-6">
        Timeline
      </h2>

      {/* DROPDOWN FILTER  */}
      <div className="flex mb-6">

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="select select-bordered w-48"
        >
          <option value="All" className="font-semibold">All Filter</option>
          <option value="Call">Call</option>
          <option value="Text">Text</option>
          <option value="Video">Video</option>
        </select>

      </div>

      {/* Empty State */}
      {filteredData.length === 0 ? (
        <div className="shadow-2xl p-6 rounded-xl text-center flex flex-col items-center mb-10">
          <p className=" text-center text-gray-500 text-3xl py-10">
            <span className="font-bold">No Timeline Data Yet</span> <br />Please Select Data
          </p>

        </div>
      ) : (

        <div className="space-y-4">

          {filteredData.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 shadow-md p-4 rounded-xl hover:shadow-lg transition mb-10"
            >

              {/* Image */}
              <img
                src={item.picture}
                alt={item.name}
                className="w-16 h-16 rounded-full object-cover"
              />

              {/* Info */}
              <div className="flex-1">

                <h3 className="text-xl font-bold">
                  {item.name}
                </h3>

                <p className="text-gray-500">
                  {item.days_since_contact} days ago
                </p>

                <p className="text-sm font-semibold text-blue-600">
                  Action: {item.action}
                </p>

                <p className="text-xs text-gray-400">
                  {item.time}
                </p>

              </div>

              {/* Delete Button */}
              <button
                onClick={() => handleDelete(item.id)}
                className="btn btn-error text-white"
              >
                <RiDeleteBinLine size={18} />
              </button>

            </div>
          ))}

        </div>
      )}
    </div>
  );
};

export default TimeLine;