import React from "react";
import Container from "../components/common/Container";
import styled from "styled-components";
import SchoolManagement from "../components/SchoolManagement";

const Flex = styled.div`
  width: 100%;
  display: flex;
`;
const FlexItem = styled.div`
  width: 50%;
`;
const StepsContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
  width: 100%;
`;

const Step = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    right: 0;
    top: 14px;
    width: calc(100% - 40px);
    height: 2px;
    background: #e0e0e0;
    margin-left: 40px;
  }

  &:last-child:after {
    display: none;
  }
`;
const StepItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 8px;
`;
const StepIcon = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: ${(props) => (props.active ? "#4A90E2" : "#E0E0E0")};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  z-index: 1;

  svg {
    width: 16px;
    height: 16px;
    color: ${(props) => (props.active ? "#FFFFFF" : "#666666")};
  }
`;

const StepText = styled.span`
  color: ${(props) => (props.active ? "#4A90E2" : "#666666")};
  font-size: 14px;
`;

const SchoolRegistration = () => {
  return (
    <Container
      title="User 계정관리 > 학교등록/수정"
      subtitle="견적 발급 또는 결제가 확정된 학교의 정보를 등록/수정합니다."
    >
      <Flex>
        <FlexItem>
          <h5>[결제단계]</h5>
          <StepsContainer>
            <Step>
              <StepItem>
                <StepIcon active>{/* <svg>...</svg> 로그인 아이콘 */}</StepIcon>
                <StepText active>견적 발급</StepText>
              </StepItem>
            </Step>
            <Step>
              <StepItem>
                <StepIcon>{/* <svg>...</svg> 인증 아이콘 */}</StepIcon>
                <StepText>결제 확정</StepText>
              </StepItem>
            </Step>
            <Step>
              <StepItem>
                <StepIcon>{/* <svg>...</svg> 결제 아이콘 */}</StepIcon>
                <StepText>결제 진행</StepText>
              </StepItem>
            </Step>
            <Step>
              <StepItem>
                <StepIcon>{/* <svg>...</svg> 완료 아이콘 */}</StepIcon>
                <StepText>결제 완료</StepText>
              </StepItem>
            </Step>
          </StepsContainer>
        </FlexItem>
        <FlexItem>
          <h5>[계정발급 단계]</h5>
          <StepsContainer>
            <Step>
              <StepItem>
                <StepIcon active>{/* svg */}</StepIcon>
                <StepText active>안내 필요</StepText>
              </StepItem>
            </Step>
            <Step>
              <StepItem>
                <StepIcon>{/* svg */}</StepIcon>
                <StepText>정보 대기</StepText>
              </StepItem>
            </Step>
            <Step>
              <StepItem>
                <StepIcon>{/* svg */}</StepIcon>
                <StepText>발급 필요</StepText>
              </StepItem>
            </Step>
            <Step>
              <StepItem>
                <StepIcon>{/* svg */}</StepIcon>
                <StepText>발급 완료</StepText>
              </StepItem>
            </Step>
          </StepsContainer>
        </FlexItem>
      </Flex>

      <SchoolManagement />
    </Container>
  );
};

export default SchoolRegistration;
