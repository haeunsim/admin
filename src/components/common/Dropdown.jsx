import React, { useState } from "react";
import styled from "styled-components";
import Icon from "../Icon/Icon";

const DropdownContainer = styled.div`
  position: relative;
  width: 100%;
  border: 1px solid #dadada;
  border-radius: 8px;
  font-size: 20px;
`;

const DropdownHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  height: 100%;
  padding: 0 20px;

  span {
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    > svg {
      width: 100%;
      height: 100%;
    }
  }
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: #fff;
  border: 1px solid #dadada;
  border-radius: 0 0 8px 8px;
  list-style: none;
  display: ${(props) => (props.isOpen ? "block" : "none")};
  z-index: 1;
  box-sizing: border-box;
`;

const DropdownItem = styled.li`
  padding: 10px 16px;
  cursor: pointer;
  text-align: center;
  border-bottom: 1px solid #dadada;
  font-size: 15px;
  color: #525252;

  &:hover {
    background: rgba(196, 224, 255, 0.25);
  }
  &:last-child {
    border-bottom: none;
  }
`;

const Dropdown = ({ label, options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  console.log(selected)
  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
    setSelected(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <DropdownContainer>
      <DropdownHeader onClick={toggleDropdown}>
        <span></span>
        {selected ? (
          <>{selected ? <p>{selected}</p> : ""}</>
        ) : (
          <>{label ? <p>{label}</p> : ""}</>
        )}
        <span>
          <Icon name="chevron-right" color="#cecece" />
        </span>
      </DropdownHeader>

      <DropdownList isOpen={isOpen}>
        {options?.map((option, index) => (
          <DropdownItem key={index} onClick={() => handleSelect(option)}>
            {option}
          </DropdownItem>
        ))}
      </DropdownList>
    </DropdownContainer>
  );
};

export default Dropdown;
