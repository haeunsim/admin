import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import FrequencySection from "../components/FrequencySection";
import CSBoardSection from "../components/CSBoardSection";
import UtilRate from "../components/UtilRate";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const LeftWrap = styled.div`
  width: 70%;
  padding: 35px 24px 35px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const RightWrap = styled.div`
  width: 30%;
`;

const Home = () => {
  const isOpen = useSelector((state) => state.sidebar.isOpen);

  return (
    <Container>
      <Flex>
        <LeftWrap $sidebarOpen={isOpen}>
          <FrequencySection />
          <CSBoardSection />
        </LeftWrap>
        <RightWrap>
          <UtilRate />
        </RightWrap>
      </Flex>
    </Container>
  );
};

export default Home;
