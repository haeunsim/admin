import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

import styled from "styled-components";
import { useSelector } from "react-redux";

const Layout = styled.div`
  display: flex;
  height: 100vh;
`;

const Main = styled.main`
  flex: 1;
  overflow: auto;
  padding-left: ${props => props.$isOpen ? "35px" : "60px"};
  transition: padding-left 0.3s ease-in-out;
`;

const VerticalLayout = () => {
  const isSidebarOpen = useSelector((state) => state.sidebar.isOpen);

  return (
    <Layout>
      <Sidebar $isOpen={isSidebarOpen} />
      <Main $isOpen={isSidebarOpen}>
        <Outlet />
      </Main>
    </Layout>
  );
};

export default VerticalLayout;
