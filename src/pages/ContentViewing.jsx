import React, { useState } from "react";
import Container from "../components/common/Container";
import Dropdown from "../components/common/Dropdown";
import styled from "styled-components";
import SearchInput from "../components/common/SearchInput";
import BasicTables from "../components/common/Table/BasicTable";

const FilterArea = styled.div`
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

const Flex = styled.div`
  display: flex;
  gap: 20px;
  height: 40px;
`;
const RadioCell = styled.div`
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

const ButtonWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 10px;
  
  span {
    color: #2E90FF;
  }
`;

const Button = styled.button`
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

const ContentViewing = () => {
  const [selectedUnit, setSelectedUnit] = useState("");

  const options = [
    "1. 힘과 우리 생활",
    "2. 동물의 생활",
    "3. 식물의 생활",
    "4. 생물의 한살이",
  ];

  const headers = [
    { label: "순번", width: "10%" },
    { label: "콘텐츠작성자", width: "10%" },
    { label: "콘텐츠고유코드", width: "10%" },
    { label: "콘텐츠생성일", width: "25%" },
    { label: "사전테스트", width: "35%" },
    { label: "선택", width: "10%" },
  ];
  
  const data = [
    {
      순번: "0",
      콘텐츠작성자: "교사계정 ID",
      콘텐츠고유코드: "XU2450101",
      콘텐츠생성일: "2025-00-00 00:00:00",
      사전테스트: "실행하기",
      선택: "체크",
    },
    {
      순번: "0",
      콘텐츠작성자: "교사계정 ID",
      콘텐츠고유코드: "XU2450101",
      콘텐츠생성일: "2025-00-00 00:00:00",
      사전테스트: "실행하기",
      선택: "체크",
    },
    {
      순번: "0",
      콘텐츠작성자: "교사계정 ID",
      콘텐츠고유코드: "XU2450101",
      콘텐츠생성일: "2025-00-00 00:00:00",
      사전테스트: "실행하기",
      선택: "체크",
    },
    {
      순번: "0",
      콘텐츠작성자: "교사계정 ID",
      콘텐츠고유코드: "XU2450101",
      콘텐츠생성일: "2025-00-00 00:00:00",
      사전테스트: "실행하기",
      선택: "체크",
    },
    {
      순번: "0",
      콘텐츠작성자: "교사계정 ID",
      콘텐츠고유코드: "XU2450101",
      콘텐츠생성일: "2025-00-00 00:00:00",
      사전테스트: "실행하기",
      선택: "체크",
    },

  ];

  return (
    <Container>
      <h2>
        [커스텀] 열람/복제
        <span style={{ color: "#999999" }}>
          * LMS에서 교사가 개별적으로 커스텀 한 채팅수업 콘텐츠를 열람하고, 그
          중 일부를 선별하여 [콘텐츠 통합 DB]에 업로드 하는 페이지입니다.
        </span>
      </h2>

      <section>
        <FilterArea>
          <SearchInput placeholder="키워드 검색" />
          <Flex>
            <RadioCell>
              <p>학년</p>
              <label>
                <input type="radio" name="grade" value="3" defaultChecked /> 3
              </label>
              <label>
                <input type="radio" name="grade" value="4" /> 4
              </label>
              <label>
                <input type="radio" name="grade" value="5" /> 5
              </label>
              <label>
                <input type="radio" name="grade" value="6" /> 6
              </label>
            </RadioCell>
            <Dropdown
              label="과목"
              options={options}
              value={selectedUnit}
              onSelect={setSelectedUnit}
            />
          </Flex>
          <Flex>
            <Dropdown
              label="대단원명"
              options={options}
              value={selectedUnit}
              onSelect={setSelectedUnit}
            />
            <Dropdown
              label="중단원명"
              options={options}
              value={selectedUnit}
              onSelect={setSelectedUnit}
            />
          </Flex>
        </FilterArea>

        <div>
          <ButtonWrap>
            <span>선택한 콘텐츠의 복사본을 '콘텐츠 통합 DB' 메뉴에 저장합니다.</span>
            <Button>콘텐츠 복제</Button>
          </ButtonWrap>
          <BasicTables headers={headers} data={data} />
        </div>
      </section>
    </Container>
  );
};

export default ContentViewing;
