import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Homepage from "../pages/homepages/Homepage";
import AllFriends from "../pages/AllFriendsList/AllFriends";
import FriendsDetails from "../pages/FriendDetails/FriendsDetails";
import TimeLine from "../components/TimeLine/TimeLine";
import StatsDashBoard from "../pages/StatsDashBoard/StatsDashBoard";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/", 
        element: <Homepage />,
        loader: () => fetch('/data.json')
      },
      { path: "/AllFriendsList", 
        element: <AllFriends /> 
      },
      {
        path: "/FriendDetails/:id",
        element: <FriendsDetails />
      },
      { path: "/TimeLine", 
        element: <TimeLine /> 
      },
      
      { path: "/stats", 
        element: <StatsDashBoard /> 
      },
    ],
    errorElement: <NotFoundPage />,
  },
]);