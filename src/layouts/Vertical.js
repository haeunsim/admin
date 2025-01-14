import React, { useState } from "react";

import Sidebar from "../components/Sidebar";
import { AllRoutes } from "../routes";
import { Outlet } from "react-router-dom";

const VerticalLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar $isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div style={{ flex: 1, overflow: "auto" }}>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default VerticalLayout;
