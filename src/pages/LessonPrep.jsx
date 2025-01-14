import React from "react";
import styled from "styled-components";
import RightSidebar from "../components/RightSidebar";
import WorkListSection from "../components/WorkListSection";
import ChatTest from "../components/ChatTest";
import { useSelector } from "react-redux";

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

const LeftWrap = styled.div`
  flex: 0 0 70%;
  padding: 35px 24px 35px ${(props) => (props.$sidebarOpen ? "24px" : "60px")};
  transition: padding 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

const LessonPrep = () => {
  const isOpen = useSelector((state) => state.sidebar.isOpen);

  return (
    <Flex>
      <LeftWrap $sidebarOpen={isOpen}>
        <WorkListSection />
        <ChatTest />
      </LeftWrap>
      <RightSidebar />
    </Flex>
  );
};

export default LessonPrep;
