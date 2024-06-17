import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import AppLayout from "./components/AppLayout";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
const Start = () => {
  return (
    <div>
      <h1>welcome from reactjs</h1>
      <AppLayout />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={appRouter}>
    <Start />
  </RouterProvider>
);
