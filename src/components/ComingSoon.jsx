import React from "react";
import styled from "styled-components";
import catImg from "../assets/images/cat2.png";

const Center = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  width: 100%;
  height: 100vh;
  justify-content: center;
`;

const Title = styled.h1`
  color: #2e90ff;
  text-align: center;
  font-size: 48px;
  font-weight: 600;
  margin: 0;
`;

const Text = styled.div`
  text-align: center;
  font-weight: 600;
  line-height: 1.6;
  h6 {
    font-size: 22px;
    color: #2e90ff;
    margin-bottom: 10px;
  }
  p {
    color: #292929;
    font-size: 20px;
  }
  span {
    color: #15cbf3;
    font-size: 20px;
  }
`;

const ComingSoon = () => {
  return (
    <section>
      <Center>
        <Title>서비스 대기중입니다.</Title>
        <div>
          <img src={catImg} alt="고양이 일러스트" />
        </div>
        <Text>
          <h6>[업데이트 될 서비스]</h6>
          <p>
            <span>마우스 하나</span>로 완성하는 채팅 수업 생성 툴!
          </p>
        </Text>
      </Center>
    </section>
  );
};

export default ComingSoon;
