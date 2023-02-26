import React from "react";
import { createBrowserRouter } from "react-router-dom";

import HomePage from "./App/pages/homePage/home";
import DetailsScreen from "./App/pages/details/Details";
const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  { path: "details", element: <DetailsScreen /> },
];
const router = createBrowserRouter(routes);

export default router;
