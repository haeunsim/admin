import React from "react";
import AppMenu from "../layouts/Menu";
import { getMenuItems } from "../helpers/menu";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      <AppMenu menuItems={getMenuItems()} $isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </>
  );
};

export default Sidebar;
