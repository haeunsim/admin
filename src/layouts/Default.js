import React from "react";
import { AllRoutes } from "../routes";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <main>
      <Outlet />
    </main>
  );
};

export default DefaultLayout;
