import React from "react";
import BlockCalendar from "../components/BlockCalendar";
import ClassCalendar from "../components/ClassCalendar";
import LineGraph from "../components/LineGraph";
import styled from "styled-components";

const LessonManage = () => {
  let value = 48;

  return (
    <>
      <FlexContainer>
        <FlexItem>
          <Title>실시현황</Title>
          <BlockCalendar />
        </FlexItem>
        <FlexItem>
          <Title>수업 캘린더</Title>
          <ClassCalendar />
        </FlexItem>
        <FlexItem>
          <Title>수업 분석</Title>
          <LineGraph />
        </FlexItem>
        <FlexItem>
          <Title>학생 체감 난이도</Title>
          <Card>
            <div style={{ position: "relative", width: "100%" }}>
              <ProgressText>{value}/100</ProgressText>
              <ProgressBar>
              <ProgressBarContainer>
                <Mark position={0} />
                <Mark position={25} />
                <Mark position={75} />
                <Slider position={(value / 100) * 100} />
                <Emoji position={0}>😊</Emoji>
                <Emoji position={50}>😐</Emoji>
                <Emoji position={100}>😟</Emoji>
              </ProgressBarContainer>
              </ProgressBar>
              <DifficultyText position={12.5}>쉬움 (0~25)</DifficultyText>
              <DifficultyText position={50}>적당함 (26~75)</DifficultyText>
              <DifficultyText position={87.5}>어려움 (76~100)</DifficultyText>
            </div>
          </Card>

          <Title>난이도 - 정답률</Title>
          <Card>
            <BarItem>
              <BarLabel>쉬움</BarLabel>
              <Bar width="85%" color="#2EC4B6" />
              <span>85%</span>
            </BarItem>
            <BarItem>
              <BarLabel>적당함</BarLabel>
              <Bar width="75%" color="#3B82F6" />
              <span>75%</span>
            </BarItem>
            <BarItem>
              <BarLabel>어려움</BarLabel>
              <Bar width="40%" color="#FF9F1C" />
              <span>40%</span>
            </BarItem>
          </Card>
        </FlexItem>
      </FlexContainer>
    </>
  );
};

const Title = styled.h4`
  font-size: 24px;
  color: #525252;
  font-weight: 500;
  text-align: center;
  padding-bottom: 20px;
`

const FlexContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  width: 100%;
  height: 100%;

  @media (max-width: 1200px) {
    grid-template-columns: 100%;
  }
`;

const FlexItem = styled.div`
  border-bottom: 2px dashed #bababa;
  padding: 20px;

  &:nth-child(even) {
    border-left: 2px dashed #bababa;
  }

  &:nth-child(3),
  &:nth-child(4) {
    border-bottom: none;
  }

  @media (max-width: 1200px) {
    border-left: none !important;
    border-bottom: 2px dashed #bababa;
    
    &:last-child {
      border-bottom: none;
    }
  }
  
  h2 {
    text-align: center;
    color: #525252;
    font-size: 30px;
    padding-bottom: 14px;
    font-weight: 500;
  }
`;

const Card = styled.div`
  background: #f1f8ff;
  padding: 16px;
  border-radius: 20px;
`;

const ProgressBar = styled.div`
  background: #fff;
  padding: 30px 15px;
  border-radius: 10px;
`

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 30px;
  position: relative;
  background: linear-gradient(to right, #00e676, #64b5f6, #ba68c8, #ff8a65);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Mark = styled.div`
  position: absolute;
  width: 2px;
  height: 30px;
  background-color: ${({ active }) => (active ? "#ff5722" : "#fff")};
  left: ${({ position }) => position}%;
  bottom: 10px;
`;

const Slider = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  background: #1e88e5;
  border-radius: 50%;
  left: ${({ position }) => position}%;
  bottom: 5px;
  transform: translateX(-50%);
`;

const Label = styled.div`
  font-size: 12px;
  text-align: center;
  color: ${({ active }) => (active ? "#ff5722" : "#000")};
  margin-top: 10px;
`;

const Emoji = styled.div`
  position: absolute;
  bottom: -20px;
  font-size: 18px;
  left: ${({ position }) => position}%;
  transform: translateX(-50%);
`;

const ProgressText = styled.div`
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 18px;
  color: #666;
`;

const DifficultyText = styled.div`
  position: absolute;
  font-size: 12px;
  color: #9A9A9A;
  top: 5px;
  left: ${({ position }) => position}%;
  transform: translateX(-50%);
`;

const BarItem = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  gap: 10px;
`;

const BarLabel = styled.span`
  width: 60px;
  font-size: 14px;
`;

const Bar = styled.div`
  position: relative;
  width: 100%;
  height: 20px;
  background-color: #fff;
  border-radius: 4px;
  flex-grow: 1;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: ${(props) => props.width};
    height: 100%;
    background-color: ${(props) => props.color};
    border-radius: 4px;
  }
`;

export default LessonManage;
