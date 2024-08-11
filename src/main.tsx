import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.scss";
import Root from "./routes/root";
import Hub from "./routes/hub/Hub";
import News from "./routes/news/News";
import Timetable from "./routes/timetable/Timetable";
import Contact from "./routes/contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Hub />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/timetable",
        element: <Timetable />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
