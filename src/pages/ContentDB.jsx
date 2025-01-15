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
      /* border-bottom: 1px solid #dadada;
      border-right: 1px solid #dadada;

      &:last-child {
        border-right: none;
      } */
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
          border: 2px solid #2E90FF;
        }
        &.delete-button {
          border: 2px solid #FE575C;
        }
      }
    }
  }
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

        <div>
          <QnADetailTable>
            <thead>
              <tr>
                <th>순번</th>
                <th>질문</th>
                <th>대답</th>
                <th>수정</th>
                <th>삭제</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>물체를 밀면 물체가 멀어진다 (O, X)</td>
                <td>O</td>
                <td>
                  <button className="edit-button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                    >
                      <path
                        d="M24.7434 3.2565C23.9379 2.45193 22.8459 2 21.7073 2C20.5688 2 19.4768 2.45193 18.6713 3.2565L4.32849 17.5996C3.84072 18.0869 3.49796 18.7001 3.33846 19.3708L2.02443 24.8918C1.98885 25.0414 1.99218 25.1976 2.03412 25.3455C2.07605 25.4934 2.15518 25.6281 2.26396 25.7368C2.37275 25.8454 2.50755 25.9244 2.65553 25.9662C2.8035 26.0079 2.95971 26.0111 3.10926 25.9753L8.6306 24.6602C9.30178 24.5009 9.91545 24.1582 10.403 23.6702L22.401 11.6718C22.7921 12.0663 23.0109 12.5998 23.0095 13.1553C23.0082 13.7108 22.7868 14.2431 22.3938 14.6357L20.2541 16.7765C20.1657 16.8588 20.0948 16.9582 20.0456 17.0686C19.9964 17.179 19.9699 17.2982 19.9678 17.419C19.9657 17.5398 19.9879 17.6599 20.0332 17.7719C20.0784 17.884 20.1458 17.9858 20.2313 18.0713C20.3167 18.1567 20.4185 18.2241 20.5306 18.2693C20.6427 18.3146 20.7627 18.3368 20.8836 18.3347C21.0044 18.3326 21.1236 18.3061 21.234 18.2569C21.3444 18.2077 21.4437 18.1368 21.5261 18.0484L23.667 15.9089C24.3973 15.1786 24.8081 14.1884 24.8092 13.1556C24.8103 12.1228 24.4017 11.1318 23.673 10.3999L24.7434 9.3295C25.548 8.52401 26 7.43208 26 6.2936C26 5.15511 25.548 4.06319 24.7434 3.2577M19.9433 4.52966C20.175 4.29801 20.45 4.11426 20.7527 3.9889C21.0553 3.86353 21.3797 3.79901 21.7073 3.79901C22.035 3.79901 22.3594 3.86353 22.662 3.9889C22.9647 4.11426 23.2397 4.29801 23.4714 4.52966C23.7031 4.7613 23.8868 5.0363 24.0122 5.33896C24.1376 5.64162 24.2021 5.966 24.2021 6.2936C24.2021 6.62119 24.1376 6.94558 24.0122 7.24824C23.8868 7.55089 23.7031 7.82589 23.4714 8.05754L9.12982 22.3983C8.87661 22.6503 8.5598 22.8266 8.21299 22.9094L4.11368 23.885L5.08931 19.7871C5.17211 19.4392 5.34972 19.1224 5.60172 18.8704L19.9433 4.52966Z"
                        fill="#2E90FF"
                      />
                    </svg>
                  </button>
                </td>
                <td>
                  <button className="delete-button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                    >
                      <path
                        d="M23.3333 5.83325C23.6428 5.83325 23.9395 5.95617 24.1583 6.17496C24.3771 6.39375 24.5 6.6905 24.5 6.99992C24.5 7.30934 24.3771 7.60608 24.1583 7.82488C23.9395 8.04367 23.6428 8.16659 23.3333 8.16659H22.1667L22.1632 8.24942L21.0747 23.4989C21.0328 24.0876 20.7693 24.6385 20.3375 25.0408C19.9056 25.443 19.3373 25.6666 18.7472 25.6666H9.25167C8.6615 25.6666 8.09324 25.443 7.66137 25.0408C7.22949 24.6385 6.96607 24.0876 6.92417 23.4989L5.83567 8.25059L5.83333 8.16659H4.66667C4.35725 8.16659 4.0605 8.04367 3.84171 7.82488C3.62292 7.60608 3.5 7.30934 3.5 6.99992C3.5 6.6905 3.62292 6.39375 3.84171 6.17496C4.0605 5.95617 4.35725 5.83325 4.66667 5.83325H23.3333ZM19.8298 8.16659H8.17017L9.25283 23.3333H18.7472L19.8298 8.16659ZM16.3333 2.33325C16.6428 2.33325 16.9395 2.45617 17.1583 2.67496C17.3771 2.89375 17.5 3.1905 17.5 3.49992C17.5 3.80934 17.3771 4.10608 17.1583 4.32488C16.9395 4.54367 16.6428 4.66659 16.3333 4.66659H11.6667C11.3572 4.66659 11.0605 4.54367 10.8417 4.32488C10.6229 4.10608 10.5 3.80934 10.5 3.49992C10.5 3.1905 10.6229 2.89375 10.8417 2.67496C11.0605 2.45617 11.3572 2.33325 11.6667 2.33325H16.3333Z"
                        fill="#FE575C"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </QnADetailTable>
        </div>
      </div>
    </Container>
  );
};

export default ContentDB;
