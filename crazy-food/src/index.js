import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppLayout from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./component/About";
import Error from "./component/Error";
import RestaurantMenu from "./component/RestaurantMenu";
import Body from "./component/Body";
import { Provider } from "react-redux";
import store from "./utiles/store";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            // element: <Profile />,
          },
        ],
      },
      {
        path: "/",
        element: <Body />,
      },
   
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
     
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <RouterProvider router={appRouter}>
  <Provider store={store}>
  <AppLayout />
  </Provider>
  </RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
