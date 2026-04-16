import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/Routers";
import TimeLineProvider from "./context/TimeLineContext";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TimeLineProvider>
      <RouterProvider router={router} />
    </TimeLineProvider>
  </StrictMode>
);