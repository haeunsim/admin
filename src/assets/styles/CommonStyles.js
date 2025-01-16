import styled from "styled-components";

export const FilterArea = styled.div`
  margin-top: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 20px;
  border-bottom: 2px dashed #ddd;

  > div {
    max-width: 100% !important;
  }
`;

export const Flex = styled.div`
  display: flex;
  gap: 20px;
  height: 40px;
`;

export const RadioCell = styled.div`
  border: 1px solid #dadada;
  border-radius: 8px;
  width: 100%;
  padding: 8px 32px;
  display: flex;
  align-items: center;
  gap: 24px;
  font-size: 16px;

  & input[type="radio"] {
    appearance: none;
    width: 16px;
    height: 16px;
    border: 2px solid #dadada;
    border-radius: 50%;
    margin: 0;
    cursor: pointer;
  }

  & input[type="radio"]:checked {
    border: 2px solid #2e90ff;
    background: white;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
      content: "";
      position: absolute;
      width: 8px;
      height: 8px;
      background: #2e90ff;
      border-radius: 50%;
    }
  }

  p,
  & label {
    white-space: nowrap;
  }

  & label {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
  }
`;

export const ButtonWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 10px;
  
  span {
    color: #2E90FF;
  }
`;

export const Button = styled.button`
  width: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 0;
  border-radius: 8px;
  margin: 20px 0;
  font-size: 16px;
  font-weight: 500;
  color: #292929;
`;

export const StyledForm = styled.div`
  /* padding: 24px; */
  /* background: #fff; */
  /* border-radius: 8px; */
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */

  h5 {
    color: #2E90FF;
    margin-bottom: 16px;
    font-size: 16px;
    
    span {
      color: #ff6b6b;
      font-size: 14px;
    }
  }
`;

export const InputGroup = styled.div`
  margin-bottom: 20px;

  > label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    color: #979797;
    font-size: 15px;
  }
`;

export const StyledButton = styled.button`
  background-color: #2E90FF;
  color: white;
  padding: 8px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  height: 40px;
  margin-left: 12px;
  white-space: nowrap;
  
  &:hover {
    background-color: #1E80FF;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  margin-bottom: 24px;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  
  &:focus {
    outline: none;
    border-color: #2E90FF;
  }
`;

export const SearchInput = styled(StyledInput)`
  min-width: 250px;
`;

export const FileInput = styled(StyledInput)`
  &::file-selector-button {
    background-color: #f8f9fa;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 6px 12px;
    cursor: pointer;
    margin-right: 12px;
    
    &:hover {
      background-color: #e9ecef;
    }
  }
`;