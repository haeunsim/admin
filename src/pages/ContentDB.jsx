import React, { useState } from "react";
import Container from "../components/common/Container";
import SearchInput from "../components/common/SearchInput";
import styled from "styled-components";
import Dropdown from "../components/common/Dropdown";
import {
  FilterArea,
  Flex,
  RadioCell,
  ButtonWrap,
  Button,
} from "../assets/styles/CommonStyles";
import { useNavigate } from "react-router-dom";

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

const QnADetailTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  border: 1px solid #dadada;
  border-radius: 20px;

  tr {
    text-align: center;

    th {
      background: #f0f0f0;
      font-size: 16px;
      color: #505050;
      font-weight: 600;
      padding: 10px;
    }

    td {
      font-size: 16px;
      padding: 10px;
      color: #292929;
      font-weight: 400;

      button {
        background: transparent;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-content: center;
        padding: 3px;
        background: #fff;

        svg {
          width: 18px;
          height: 18px;
        }

        &.edit-button {
          border: 2px solid #2e90ff;
        }

        &.delete-button {
          border: 2px solid #fe575c;
        }
      }
    }
  }
`;

const ContentDB = () => {
  const [selectedUnit, setSelectedUnit] = useState("");

  const navigate = useNavigate();

  const subject = [
    "3-1 과학",
    "3-2 과학",
    "3-1 사회",
    "3-2 사회",
    "3-1 국어",
    "3-2 국어",
  ]
  const mainUnit = [
    "1. 힘과 우리 생활",
    "2. 동물의 생활",
    "3. 식물의 생활",
    "4. 생물의 한살이",
  ];
  const subunit = [
    "1. 물체를 움직여 볼까요?",
    "2. 무게가 다른 물체를 밀고 당겨 볼까요?",
    "3. 수평을 잡아요",
  ];
  
  const headers = [
    { label: "순번", key: "", width: "5%" },
    { label: "콘텐츠 생성자", key: "생성자", width: "10%" },
    { label: "콘텐츠 고유 코드", key: "고유코드",width: "10%" },
    { label: "질문 / 대답 문항 수	", key: "문항수", width: "10%" },
    { label: "질문 / 대답 구성	", key: "구성", width: "10%" },
    { label: "콘텐츠 생성일", key: "생성일", width: "15%" },
    { label: "선택", key: "선택", width: "5%" },
  ];

  const data = [
    {
      생성자: "디엔소프트",
      고유코드: "XU2450101",
      문항수: "13",
      구성: "보기",
      생성일: "2024-02-13 10:15",
      선택: "",
    },
    {
      생성자: "교사 LMS",
      고유코드: "ZA9832011",
      문항수: "10",
      구성: "보기",
      생성일: "2024-02-13 10:15",
      선택: "",
    },
    {
      생성자: "교사 LMS",
      고유코드: "ZA9832011",
      문항수: "7",
      구성: "보기",
      생성일: "2024-02-13 10:15",
      선택: "",
    },
    {
      생성자: "디엔소프트",
      고유코드: "XU2450101",
      문항수: "8",
      구성: "보기",
      생성일: "2024-02-13 10:15",
      선택: "",
    },
    {
      생성자: "교사 LMS",
      고유코드: "ZA9832011",
      문항수: "11",
      구성: "보기",
      생성일: "2024-02-13 10:15",
      선택: "",
    },
  ]

  const handleViewClick = (item) => {

    navigate(`/content/detail`, { state: { item } });
  };

  return (
    <Container
      title="콘텐츠 통합 DB"
      subtitle="AI 튜터에서 다루는 전체 문제풀 통합 관리 페이지입니다."
    >
      <FilterArea>
        <SearchInput placeholder="콘텐츠 고유 코드 혹은 키워드 검색" />
        <Flex>
          <RadioCell>
            <p>학년</p>
            <label>
              <input type="radio" name="grade" value="3" defaultChecked /> 3학년
            </label>
            <label>
              <input type="radio" name="grade" value="4" /> 4학년
            </label>
            <label>
              <input type="radio" name="grade" value="5" /> 5학년
            </label>
            <label>
              <input type="radio" name="grade" value="6" /> 6학년
            </label>
          </RadioCell>
          <Dropdown
            label="과목"
            options={subject}
            value={selectedUnit}
            onSelect={setSelectedUnit}
          />

          <Dropdown
            label="대단원명"
            options={mainUnit}
            value={selectedUnit}
            onSelect={setSelectedUnit}
          />
          <Dropdown
            label="중단원명"
            options={subunit}
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
          {/* 데이터 상세보기 화면으로 진입 */}
          {/* 데이터 없을 때 : 콘텐츠와 연관된 교과 범위를 먼저 지정해주세요. */}
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
              <tr>
                <td>000</td>
                <td>교사계정 ID</td>
                <td>XU2450101</td>
                <td>00</td>
                <td onClick={() => handleViewClick(data[0])}
                  style={{ color: '#5a68fd', cursor: 'pointer', textDecoration: 'underline' }}  
                >상세보기</td>
                <td>2025-00-00 00:00:00</td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
              <tr>
                <td>000</td>
                <td>교사계정 ID</td>
                <td>ZA9832011</td>
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
                <td>BF0355122</td>
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
