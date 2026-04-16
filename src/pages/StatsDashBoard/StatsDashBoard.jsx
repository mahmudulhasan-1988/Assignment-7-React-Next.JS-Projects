import {
  PieChart,
  Pie,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
import { TimeLineContext } from "../../context/TimeLineContext";
import { useContext } from "react";

const StatsDashBoard = () => {
  const { timeLineData } = useContext(TimeLineContext);

  //Count logic
  const callCount = timeLineData.filter(item => item.action === "Call").length;
  const textCount = timeLineData.filter(item => item.action === "Text").length;
  const videoCount = timeLineData.filter(item => item.action === "Video").length;

  const total = callCount + textCount + videoCount;

  //Dynamic Data
  const data =
    total === 0
      ? [
          {
            name: "No Data Available",
            value: 1,
            fill: "#FF0000", 
          },
        ]
      : [
          { name: "Call", value: callCount, fill: "#00C49F" },
          { name: "Text", value: textCount, fill: "#FFBB28" },
          { name: "Video", value: videoCount, fill: "#FF8042" },
        ];

  return (
    <div>
      <h2 className="container mx-auto max-w-4xl text-5xl font-bold mt-8 mb-10 text-[#244D3F]">
        Friendship Analytics
      </h2>

      <div className="shadow-2xl mx-auto h-125 mb-15 rounded-2xl border border-slate-300 max-w-4xl">

        <h2 className="text-2xl font-semibold text-[#244D3F] px-10 py-5">
          By Interaction Type
        </h2>

        <ResponsiveContainer width="100%" height="80%">

          <PieChart>

            <Pie
              data={data}
              innerRadius="70%"
              outerRadius="100%"
              cornerRadius={10}
              paddingAngle={5}
              dataKey="value"
            />

            <Legend />
            <Tooltip />

          </PieChart>

        </ResponsiveContainer>

      </div>
    </div>
  );
};

export default StatsDashBoard;
