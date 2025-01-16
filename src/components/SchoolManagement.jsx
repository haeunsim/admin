import React, { useState } from "react";
import styled from "styled-components";
import BasicTable from "../components/common/Table/BasicTable";
const initialStatusList = {
  total: 150,
  estimate: 30,
  payConfirm: 20,
  payProgress: 15,
  payComplete: 25,
  needGuide: 10,
  waitInfo: 18,
  needIssue: 12,
  issueComplete: 20,
};

const searchListItems = [
  "서울대학교",
  "연세대학교",
  "고려대학교",
  "한양대학교",
  "서강대학교",
];

const TabContainer = styled.div`
  display: flex;
  align-items: center;
`;

const TabList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 40px 0 0;
  gap: 4px;
`;

const TabItem = styled.li`
  min-width: 70px;
  padding: 16px 24px;
  border-radius: 12px 12px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: 500;
  font-size: 15px;
  color: ${(props) => (props.active ? "#fff" : "#9A9A9A")};
  background: ${(props) =>
    props.active ? "#1E90FF" : "rgba(163, 181, 208, 0.50)"};
`;

const SearchContainer = styled.div`
  margin-left: 2rem;
`;

const SearchCount = styled.div`
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
`;

const SearchLabel = styled.div`
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
`;

const SearchInputWrapper = styled.div`
  width: 14rem;
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  padding-right: 2.5rem;
`;

const SearchResults = styled.div`
  position: absolute;
  margin-top: 0.25rem;
  width: 14rem;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
`;

const SearchResultItem = styled.div`
  padding: 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: #f3f4f6;
  }
`;

const ContentSection = styled.div`
  border: 1px solid #d1d5db;
  padding: 1rem;
`;

const SchoolManagement = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [tab, setTab] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [statusList] = useState(initialStatusList);

  const headers = [
    { label: "No", width: "5%" },
    { label: "교육청", width: "15%" },
    { label: "학교", width: "15%" },
    { label: "코드", width: "10%" },
    { label: "결제단계", width: "10%" },
    { label: "계정발급단계", width: "10%" },
    { label: "제휴", width: "5%" },
    { label: "계약시작일", width: "10%" },
    { label: "계약만료일", width: "10%" },
    { label: "초기비번", width: "10%" },
    { label: "계정발급안내", width: "5%" },
  ];

  const data = [
    {
      No: "1",
      교육청: "경기도교육청",
      학교: "의정부 가늠초등학교",
      코드: "af",
      결제단계: "-",
      계정발급단계: "-",
      결제방법: "-",
      제휴: "-",
      계약시작일: "2023-05-25",
      계약만료일: "2025-05-25",
      초기비번: "000000",
      계정발급안내: "icon",
    },
    {
      No: "1",
      교육청: "경기도교육청",
      학교: "위례 한빛초등학교",
      코드: "af",
      결제단계: "-",
      계정발급단계: "-",
      결제방법: "-",
      제휴: "-",
      계약시작일: "2023-05-25",
      계약만료일: "2025-05-25",
      초기비번: "000000",
      계정발급안내: "icon",
    },
    {
      No: "1",
      교육청: "경기도교육청",
      학교: "화성 이솔초등학교",
      코드: "af",
      결제단계: "-",
      계정발급단계: "-",
      결제방법: "-",
      제휴: "-",
      계약시작일: "2023-05-25",
      계약만료일: "2025-05-25",
      초기비번: "000000",
      계정발급안내: "icon",
    },
    {
      No: "1",
      교육청: "대구광역시교육청",
      학교: "대구 남도초등학교",
      코드: "af",
      결제단계: "-",
      계정발급단계: "-",
      결제방법: "-",
      제휴: "-",
      계약시작일: "2023-05-25",
      계약만료일: "2025-05-25",
      초기비번: "000000",
      계정발급안내: "icon",
    },
  ];

  const [menuItems] = useState([
    "전체",
    "전체 발급",
    "결제 확정",
    "결제 진행",
    "결제 완료",
    "안내 필요",
    "정보 대기",
    "발급 필요",
    "발급 완료",
    "검색 결과",
  ]);

  const pad = (num) => {
    return String(num).padStart(3, "0");
  };

  const handleTabClick = (tabValue) => {
    setTab(tabValue);
  };

  const filteredSearchList = searchListItems.filter((item) =>
    item.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <>
      <div className="flex flex-col">
        <TabContainer>
          <TabList>
            {menuItems.map((tab, index) => (
              <TabItem
                key={index}
                onClick={() => {
                  setActiveTab(index);
                }}
                active={activeTab === index}
              >
                {tab}
              </TabItem>
            ))}
          </TabList>
          <SearchContainer>
            <div>
              <SearchLabel>학교 / 코드 검색</SearchLabel>
              <SearchInputWrapper>
                <SearchInput
                  type="text"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  placeholder="검색"
                  spellCheck="false"
                />
                {searchText && (
                  <SearchResults>
                    {filteredSearchList.map((item, index) => (
                      <SearchResultItem
                        key={index}
                        onClick={() => setSearchText(item)}
                      >
                        {item}
                      </SearchResultItem>
                    ))}
                  </SearchResults>
                )}
              </SearchInputWrapper>
            </div>
          </SearchContainer>
        </TabContainer>

        <ContentSection>
          <BasicTable headers={headers} data={data} />
        </ContentSection>
      </div>
    </>
  );
};

export default SchoolManagement;
