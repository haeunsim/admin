import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  padding: 35px 47px 35px 12px;
`;
const TitleWrap = styled.div`
  margin-bottom: 40px;
`;
const Title = styled.h2`
  margin-bottom: 8px;
`;
const SubTitle = styled.span`
  color: #999999;
`;

const Container = ({ children, title, subtitle }) => {
  return (
    <StyledContainer>
      <TitleWrap>
        {title && <Title>{title}</Title>}
        {subtitle && <SubTitle>{subtitle}</SubTitle>}
      </TitleWrap>
      {children}
    </StyledContainer>
  );
};

export default Container;
