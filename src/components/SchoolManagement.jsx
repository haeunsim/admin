import React, { useState } from "react";
import styled from "styled-components";
import BasicTable from "../components/common/Table/BasicTable";

const TabContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
`;

const TabList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  gap: 5px;
`;

const TabItem = styled.li`
  min-width: 70px;
  padding: 16px 20px;
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
  height: 40px;
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

const ContentSection = styled.div`
  border: 1px solid #e5e7eb;
  padding: 1rem;
`;

const SchoolManagement = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [searchText, setSearchText] = useState("");

  const headers = [
    // { label: "No", width: "5%" },
    { label: "교육청", key: "office", width: "15%" },
    { label: "학교", key: "schoolName", width: "15%" },
    { label: "코드", key: "schoolCode",width: "10%" },
    { label: "결제단계", key: "payStatus", width: "10%" },
    { label: "계정발급단계", key: "accountStatus", width: "10%" },
    { label: "제휴", key: "affiliate", width: "5%" },
    { label: "계약시작일", key: "startDate", width: "10%" },
    { label: "계약만료일", key: "endDate", width: "10%" },
    { label: "초기비번", key: "settingPw", width: "10%" },
    { label: "계정발급안내", key: "message", width: "5%" },
  ];

  const schoollist = [
    {
      office: "대구광역시교육청",
      schoolName: "대구 남도초등학교", // schoolName 클릭하면 해당 데이터 수정화면 이동
      schoolCode: "af",
      payStatus: "-", 
      accountStatus: "-", 
      payType: "-",
      affiliate: "-",
      // contractYear에서 계산
      startDate: "2023-05-25", // getcontractstartday(j.contractYear)
      endDate: "2025-05-25",  // getcontractendday(j.contractYear)
      settingPw: "000000", // getsettingpw(j.contractYear)
      message: "icon", // contacton(j.schoolCode, i) (메시지 전송 기능)
    },
    {
      office: "경기도교육청",
      schoolName: "의정부 가늠초등학교",
      schoolCode: "af",
      payStatus: "estimat",
      accountStatus: "needGuide",
      payType: "-",
      affiliate: "-",
      startDate: "2023-05-25",
      endDate: "2025-05-25",
      settingPw: "000000",
      계정발급안내: "icon",
    },
    {
      office: "강원도교육청",
      schoolName: "원주 흥업초등학교",
      schoolCode: "fw",
      payStatus: "estimat",
      accountStatus: "issueComplete",
      payType: "-",
      affiliate: "-",
      startDate: "2023-05-25",
      endDate: "2025-05-25",
      settingPw: "000000",
      계정발급안내: "icon",
    },
    {
      office: "충청북도교육청",
      schoolName: "청주 솔밭초등학교",
      schoolCode: "er",
      payStatus: "payConfirme",
      accountStatus: "issueComplete",
      payType: "-",
      affiliate: "-",
      startDate: "2023-05-25",
      endDate: "2025-05-25",
      settingPw: "000000",
      계정발급안내: "icon",
    },
    {
      office: "경상북도교육청",
      schoolName: "상주 화북초등학교",
      schoolCode: "gu",
      payStatus: "payProgress",
      accountStatus: "issueComplete",
      payType: "-",
      affiliate: "-",
      startDate: "2023-05-25",
      endDate: "2025-05-25",
      settingPw: "000000",
      계정발급안내: "icon",
    },
    {
      office: "서울특별시교육청",
      schoolName: "서울 명신초등학교",
      schoolCode: "ea",
      payStatus: "payComplete",
      accountStatus: "issueComplete",
      payType: "-",
      affiliate: "-",
      startDate: "2023-05-25",
      endDate: "2025-05-25",
      settingPw: "000000",
      계정발급안내: "icon",
    },
    {
      office: "대구광역시교육청",
      schoolName: "대구 남도초등학교",
      schoolCode: "lg",
      payStatus: "estimat",
      accountStatus: "needGuide",
      payType: "-",
      affiliate: "-",
      startDate: "2023-05-25",
      endDate: "2025-05-25",
      settingPw: "000000",
      계정발급안내: "icon",
    },
    {
      office: "충청남도교육청",
      schoolName: "홍성 홍남초등학교",
      schoolCode: "gs",
      payStatus: "estimat",
      accountStatus: "waitInfo",
      payType: "-",
      affiliate: "-",
      startDate: "2023-05-25",
      endDate: "2025-05-25",
      settingPw: "000000",
      계정발급안내: "icon",
    },
    {
      office: "경기도교육청",
      schoolName: "남양주 샛별초등학교",
      schoolCode: "gq",
      payStatus: "payConfirme",
      accountStatus: "needIssue",
      payType: "-",
      affiliate: "-",
      startDate: "2023-05-25",
      endDate: "2025-05-25",
      settingPw: "000000",
      계정발급안내: "icon",
    },
    {
      office: "경기도교육청",
      schoolName: "위례 한빛초등학교",
      schoolCode: "af",
      payStatus: "-",
      accountStatus: "-",
      payType: "-",
      affiliate: "-",
      startDate: "2023-05-25",
      endDate: "2025-05-25",
      settingPw: "000000",
      계정발급안내: "icon",
    },
    {
      office: "경기도교육청",
      schoolName: "화성 이솔초등학교",
      schoolCode: "af",
      payStatus: "-",
      accountStatus: "-",
      payType: "-",
      affiliate: "-",
      startDate: "2023-05-25",
      endDate: "2025-05-25",
      settingPw: "000000",
      계정발급안내: "icon",
    },
  ];

  const [menuItems] = useState([
    "전체", // total
    "견적 발급", // estimat
    "결제 확정", // payConfirme
    "결제 진행", // payProgress
    "결제 완료", // payComplete
    "안내 필요", // needGuide
    "정보 대기", // waitInfo
    "발급 필요", // needIssue 
    "발급 완료", // issueComplete
    "검색 결과",
  ]);

  const filterSchoolList = (tab) => {
    return schoollist.filter(school => {
      if (tab === "전체") return true;
      if (tab === "견적 발급") return school.payStatus === "estimat";
      if (tab === "결제 확정") return school.payStatus === "payConfirme";
      if (tab === "결제 진행") return school.payStatus === "payProgress";
      if (tab === "결제 완료") return school.payStatus === "payComplete";
      if (tab === "안내 필요") return school.accountStatus === "needGuide";
      if (tab === "정보 대기") return school.accountStatus === "waitInfo";
      if (tab === "발급 필요") return school.accountStatus === "needIssue";
      if (tab === "발급 완료") return school.accountStatus === "issueComplete";
      return false;
    });
  };

  return (
    <>
      <div className="flex flex-col">
        <TabContainer>
          <TabList>
            {menuItems.map((tab, index) => (
              <TabItem
                key={index}
                onClick={() => { setActiveTab(index); }}
                active={activeTab === index}
              >
                {tab}
              </TabItem>
            ))}
          </TabList>
          <SearchContainer>
            <div>
              <SearchInputWrapper>
                {/* 검색 기능 추가 */}
                <SearchInput
                  type="text"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  placeholder="학교 / 코드 검색"
                  spellCheck="false"
                />
              </SearchInputWrapper>
            </div>
          </SearchContainer>
        </TabContainer>

        <ContentSection>
          {/* 페이지네이션 추가 */}
          <BasicTable headers={headers} data={filterSchoolList(menuItems[activeTab])} />
          {/* 해당 데이터 수정화면으로 넘어가는 기능 */}
          {/* 메세지 전송 기능 */}
        </ContentSection>
      </div>
    </>
  );
};

export default SchoolManagement;
