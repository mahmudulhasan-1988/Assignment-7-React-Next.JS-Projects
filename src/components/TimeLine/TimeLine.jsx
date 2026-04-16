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
















// import { useContext } from "react";
// import { TimeLineContext } from "../../context/TimeLineContext";
// import { RiDeleteBinLine } from "react-icons/ri";

// const TimeLine = () => {
//   const { timeLineData, setTimelineData } = useContext(TimeLineContext);

//   // 🔥 Delete Function
//   const handleDelete = (id) => {
//     const updated = timeLineData.filter(item => item.id !== id);
//     setTimelineData(updated);
//   };

//   return (
//     <div className="max-w-5xl mx-auto mt-10 px-4">

//       <h2 className="text-3xl font-bold mb-6 text-center">
//         📅 Timeline
//       </h2>

//       {/* Empty State */}
//       {timeLineData.length === 0 ? (
//         <p className="text-center text-gray-500 text-lg">
//           No timeline data yet 😢
//         </p>
//       ) : (

//         <div className="space-y-4">

//           {timeLineData.map((item) => (
//             <div
//               key={item.id}
//               className="flex items-center gap-4 shadow-md p-4 rounded-xl hover:shadow-lg transition"
//             >

//               {/* Image */}
//               <img
//                 src={item.picture}
//                 alt={item.name}
//                 className="w-16 h-16 rounded-full object-cover"
//               />

//               {/* Info */}
//               <div className="flex-1">

//                 <h3 className="text-xl font-bold">
//                   {item.name}
//                 </h3>

//                 <p className="text-gray-500">
//                   {item.days_since_contact} days ago
//                 </p>

//                 {/* 🔥 NEW: ACTION */}
//                 <p className="text-sm font-semibold text-blue-600">
//                   Action: {item.action}
//                 </p>

//                 {/* 🔥 NEW: TIME */}
//                 <p className="text-xs text-gray-400">
//                   {item.time}
//                 </p>

//               </div>

//               {/* Delete Button */}
//               <button
//                 onClick={() => handleDelete(item.id)}
//                 className="btn btn-error text-white"
//               >
//                 <RiDeleteBinLine size={18} />
//               </button>

//             </div>
//           ))}

//         </div>
//       )}
//     </div>
//   );
// };

// export default TimeLine;




















// import { useContext } from "react";
// import { TimeLineContext } from "../../context/TimeLineContext";
// import { RiDeleteBinLine } from "react-icons/ri";

// const TimeLine = () => {
//   const { timeLineData, setTimelineData } = useContext(TimeLineContext);

//   // 🔥 Delete Function
//   const handleDelete = (id) => {
//     const updated = timeLineData.filter(item => item.id !== id);
//     setTimelineData(updated);
//   };

//   return (
//     <div className="max-w-5xl mx-auto mt-10 px-4">

//       <h2 className="text-3xl font-bold mb-6 text-center">
//         📅 Timeline
//       </h2>

//       {/* ❌ Empty State */}
//       {timeLineData.length === 0 ? (
//         <p className="text-center text-gray-500 text-lg">
//           No timeline data yet 😢
//         </p>
//       ) : (

//         <div className="space-y-4">

//           {timeLineData.map((item) => (
//             <div
//               key={item.id}
//               className="flex items-center gap-4 shadow-md p-4 rounded-xl hover:shadow-lg transition"
//             >

//               {/* Image */}
//               <img
//                 src={item.picture}
//                 alt={item.name}
//                 className="w-16 h-16 rounded-full object-cover"
//               />

//               {/* Info */}
//               <div className="flex-1">
//                 <h3 className="text-xl font-bold">{item.name}</h3>
//                 <p className="text-gray-500">
//                   {item.days_since_contact} days ago
//                 </p>
//                 <p className="text-sm">{item.status}</p>
//               </div>

//               {/* Delete Button */}
//               <button
//                 onClick={() => handleDelete(item.id)}
//                 className="btn btn-error text-white"
//               >
//                 <RiDeleteBinLine size={18} />
//               </button>

//             </div>
//           ))}

//         </div>
//       )}
//     </div>
//   );
// };

// export default TimeLine;







// // import { toast } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";

// const TimeLine = ({ carts, setCarts }) => {

//   // Total price calculate
//   const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

//   // Payment handler
//   const handlePayment = () => {
//     setCarts([]);

//     toast.success(`Payment successful! Total: $${totalPrice}`, {
//       position: "top-right",
//       autoClose: 3000,
//     });
//   };

//   // Remove item handler
//   const handleRemove = (index) => {
//     const removedItem = carts[index]; // আগে store করো

//     const newCarts = [...carts];
//     newCarts.splice(index, 1);
//     setCarts(newCarts);

//     toast.error(`${removedItem.name} removed from cart!`, {
//       position: "top-right",
//       autoClose: 3000,
//     });
//   };

//   return (
//     <div>
//       <h2 className="text-3xl font-bold mx-auto max-w-7xl">
//         Your Cart
//       </h2>

//       {carts.length === 0 ? (
//         <p className="text-gray-400 text-center font-bold mt-4">
//           Your cart is empty. Please add some products.
//         </p>
//       ) : (
//         <>
//           {/* Cart Items */}
//           <div>
//             {carts.map((cart, index) => (
//               <div
//                 key={index}
//                 className="flex items-center gap-8 border p-4 rounded-lg mt-4 shadow-lg border-gray-200 mx-auto max-w-7xl"
//               >
//                 {/* Image */}
//                 <div className="w-20 h-20 flex items-center justify-center rounded-full bg-base-200 overflow-hidden">
//                   <img
//                     src={cart.icon}
//                     alt={cart.name}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 {/* Info */}
//                 <div>
//                   <h3 className="text-2xl font-bold">{cart.name}</h3>
//                   <p className="text-lg text-gray-400 mt-2">
//                     {cart.description}
//                   </p>
//                   <p className="text-2xl font-bold mt-2">
//                     ${cart.price}
//                   </p>
//                 </div>

//                 {/* Remove Button */}
//                 <div className="ml-auto">
//                   <button
//                     onClick={() => handleRemove(index)}
//                     className="btn btn-error text-white"
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Total Section */}
//           <div className="flex items-center justify-between gap-8 border p-8 rounded-lg mt-4 shadow-lg border-gray-200 mx-auto max-w-7xl bg-amber-50">
//             <div className="text-3xl font-bold">
//               <h2>Total :</h2>
//             </div>
//             <div>
//               <h2 className="text-4xl font-bold">
//                 ${totalPrice}
//               </h2>
//             </div>
//           </div>

//           {/* Checkout Button */}
//           <div className="mx-auto max-w-7xl mt-10">
//             <button
//               onClick={handlePayment}
//               disabled={carts.length === 0}
//               className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-lg w-full"
//             >
//               Proceed To Checkout
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default TimeLine;