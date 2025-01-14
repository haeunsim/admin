import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import RightSidebar from "../components/RightSidebar";
import FrequencySection from "../components/FrequencySection";
import CSBoardSection from "../components/CSBoardSection";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

const LeftWrap = styled.div`
  flex: 0 0 75%;
  padding: 35px 24px 35px ${(props) => (props.$sidebarOpen ? "24px" : "60px")};
  transition: padding 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

const Home = () => {
  const isOpen = useSelector((state) => state.sidebar.isOpen);

  return (
    <Container>
      <Flex>
        <LeftWrap $sidebarOpen={isOpen}>
          <FrequencySection />
          <CSBoardSection/>
        </LeftWrap>
        <RightSidebar />
      </Flex>
    </Container>
  );
};

export default Home;
