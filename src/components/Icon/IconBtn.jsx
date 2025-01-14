import React from 'react';
import Icon from './Icon';
import styled from 'styled-components';

const IconWrap = styled.button`
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 1px solid #c0c0c0;
  background: #fff;

  > svg {
    display: flex;
  justify-content: center;
  align-items: center;
    width: 23px;
    height: 23px;
  }
`;

const IconBtn = ({ name, color = "#2E90FF" }) => {
  return (
    <IconWrap>
      <Icon name={name} color={color} />
    </IconWrap>
  );
};

export default IconBtn;