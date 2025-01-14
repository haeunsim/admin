import React, { useState } from "react";
import Container from "../components/common/Container";
import SearchInput from "../components/common/SearchInput";
import styled from "styled-components";
import Dropdown from "../components/common/Dropdown";

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

const ContentDBTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  tr {
    text-align: center;

    th {
      background: #c4e0ff;
      font-size: 16px;
      color: #505050;
      font-weight: 600;
      padding: 10px;
    }

    td {
      font-size: 16px;
      padding: 8px;
      color: #292929;
      font-weight: 400;
      border-bottom: 1px solid #dadada;
      border-right: 1px solid #dadada;

      &:last-child {
        border-right: none;
      }
    }
  }
`;

const ButtonWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
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

const ContentDB = () => {
  const [selectedUnit, setSelectedUnit] = useState("");

  const options = [
    "1. 힘과 우리 생활",
    "2. 동물의 생활",
    "3. 식물의 생활",
    "4. 생물의 한살이",
  ];

  return (
    <Container>
      <section>
        <h2>
          콘텐츠 통합 DB
          <span style={{ color: "#999999" }}>
            * AI 튜터에서 다루는 전체 문제풀 통합 관리 페이지입니다.
          </span>
        </h2>
      </section>

      <FilterArea>
        <SearchInput placeholder="콘텐츠 고유 코드 혹은 키워드 검색" />
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
          <Button>콘텐츠 삭제</Button>
        </ButtonWrap>
        <div>
          <ContentDBTable>
            <thead>
              <tr>
                <th>순번</th>
                <th>콘텐츠 작성자</th>
                <th>콘텐츠 고유 코드</th>
                <th>질문 / 대답 문항 수</th>
                <th>질문 / 대답 구성</th>
                <th>콘텐츠 생성일</th>
                <th>선택</th>
              </tr>
            </thead>
            <tbody>
              {/* 데이터 없을 때 */}
              {/* 콘텐츠와 연관된 교과 범위를 먼저 지정해주세요. */}
              <tr>
                <td>000</td>
                <td>교사계정 ID</td>
                <td>콘텐츠 고유 코드</td>
                <td>00</td>
                <td>보기</td>
                <td>2025-00-00 00:00:00</td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
              <tr>
                <td>000</td>
                <td>교사계정 ID</td>
                <td>콘텐츠 고유 코드</td>
                <td>00</td>
                <td>보기</td>
                <td>2025-00-00 00:00:00</td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
              <tr>
                <td>000</td>
                <td>교사계정 ID</td>
                <td>콘텐츠 고유 코드</td>
                <td>00</td>
                <td>보기</td>
                <td>2025-00-00 00:00:00</td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
            </tbody>
          </ContentDBTable>
        </div>
      </div>
    </Container>
  );
};

export default ContentDB;
