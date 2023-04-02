import React from "react";
import { createBrowserRouter } from "react-router-dom";

import HomePage from "./App/pages/homePage/home";
import DetailsScreen from "./App/pages/details/Details";
import ContactUs from "./App/pages/contactUs";
import Analysis from "./App/pages/analysis";
import Team from "./App/pages/team";
const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  { path: "details", element: <DetailsScreen /> },
  { path: "contactUs", element: <ContactUs /> },
  { path: "analysis", element: <Analysis /> },
  { path: "team", element: <Team /> },
];
const router = createBrowserRouter(routes);

export default router;
