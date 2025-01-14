import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 100%;
  padding: 35px 47px;
`;

const Container = ({ children }) => {
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  );
};

export default Container;