import React from 'react';
import styled from 'styled-components';

const RadioListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const RadioCell = styled.div`
  border: 1px solid #d8d8d8;
  border-radius: 8px;
  width: 100%;
  padding: 8px 20px;
  display: flex;
  gap: 20px;
  font-size: 18px;

  p {
    text-align: center;
    width: 50px;
  }

  & input[type="radio"] {
    appearance: none;
    width: 18px;
    height: 18px;
    border: 1px solid #d8d8d8;
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
      width: 10px;
      height: 10px;
      background: #2e90ff;
      border-radius: 50%;
    }
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & label {
    width: 80px;
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: 8px;
    font-size: 15px;
    color: #525252;
    font-weight: 500;
  }
`;

const RadioOption = ({ name, value, label, onChange, defaultChecked }) => (
  <label>
    <input 
      type="radio" 
      name={name} 
      value={value} 
      onChange={onChange}
      defaultChecked={defaultChecked}
    /> {label}
  </label>
);

const SearchFilter = ({ onInputChange }) => {
  const options = [
    {
      title: '출판사',
      name: 'publisher',
      options: [
        { value: '천재', label: '천재' },
        { value: '비상', label: '비상' },
        { value: '미래엔', label: '미래엔' }
      ]
    },
    {
      title: '학년',
      name: 'grade',
      options: [
        { value: '3', label: '3학년' },
        { value: '4', label: '4학년' }
      ]
    },
    {
      title: '학기',
      name: 'semester',
      options: [
        { value: '1', label: '1학기' },
        { value: '2', label: '2학기' }
      ]
    },
    {
      title: '과목',
      name: 'subject',
      options: [
        { value: '국어', label: '국어' },
        { value: '사회', label: '사회' },
        { value: '과학', label: '과학' }
      ]
    }
  ];

  return (
    <RadioListContainer>
      {options.map((group) => (
        <RadioCell key={group.name}>
          <p>{group.title}</p>
          <Flex>
            {group.options.map((option, index) => (
              <RadioOption
                key={option.value}
                name={group.name}
                value={option.value}
                label={option.label}
                onChange={onInputChange}
                defaultChecked={index === 0}
              />
            ))}
          </Flex>
        </RadioCell>
      ))}
    </RadioListContainer>
  );
};

export default SearchFilter;