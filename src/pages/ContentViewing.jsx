import React, { useState } from "react";
import Container from "../components/common/Container";
import Dropdown from "../components/common/Dropdown";
import SearchInput from "../components/common/SearchInput";
import BasicTables from "../components/common/Table/BasicTable";
import { FilterArea, Flex, RadioCell, ButtonWrap, Button } from "../assets/styles/CommonStyles";

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
    <Container
    title="[커스텀] 열람/복제"
    subtitle="LMS에서 교사가 개별적으로 커스텀 한 채팅수업 콘텐츠를 열람하고, 그 중 일부를 선별하여 [콘텐츠 통합 DB]에 업로드 하는 페이지입니다."
  >
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
