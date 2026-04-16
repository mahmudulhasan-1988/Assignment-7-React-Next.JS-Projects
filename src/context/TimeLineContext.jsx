import { createContext, useState } from 'react';

export const TimeLineContext = createContext();

const TimeLineProvider = ({ children }) => {
  const [timeLineData, setTimelineData] = useState([]);

  const data = {
    timeLineData,
    setTimelineData,
  };

  return (
    <TimeLineContext.Provider value={data}>
      {children}
    </TimeLineContext.Provider>
  );
};

export default TimeLineProvider; 




// import React, { createContext, useState } from 'react';

// const TimeLineContext = createContext();
//   const[timeLineData, setTimelineData] = useState([]);

// export const TimeLineProvider = ({ children }) => {
//     const data = {
//         timeLineData,
//         setTimelineData,
//     }
//     return <TimeLineContext.Provider value={data}>{children}</TimeLineContext.Provider>
// };

// export default TimeLineProvider;