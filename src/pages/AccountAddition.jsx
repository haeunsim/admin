import React from "react";
import Container from "../components/common/Container";
import BasicTables from "../components/common/Table/BasicTable";
import { InputGroup } from "../assets/styles/CommonStyles";
import SearchInput from "../components/common/SearchInput";

const AccountAddition = () => {
  const headers = [
    { label: "No", width: "5%" },
    { label: "신청일시", width: "15%" },
    { label: "학교", width: "15%" },
    { label: "교사이름", width: "10%" },
    { label: "연락처", width: "15%" },
    { label: "신청사유", width: "10%" },
    { label: "신청상세", width: "5%" },
    { label: "기존처리계정수", width: "10%" },
  ];

  const data = [
    {
      No: "1",
      신청일시: "2024-12-10",
      학교: "의정부 가늠초등학교",
      교사이름: "백다현",
      연락처: "010-0000-0000",
      신청사유: "전학생 신청",
      신청상세: "1건",
      기존처리계정수: "16건",
    },
  ];

  return (
    <Container
      title="User 계정관리 > 전학생 추가 발급"
      subtitle="전학생 추가 발급 신청 내용을 확인하고, 계정을 발급합니다."
    >
      <h5>전학생 추가 발급 신청 처리</h5>
      <BasicTables headers={headers} data={data} />

      <h5>전학생 처리 기록 검색</h5>
      <InputGroup>
        <label>학교 선택 (USER)</label>
        <SearchInput placeholder="학교를 검색해주세요." />
      </InputGroup>
    </Container>
  );
};

export default AccountAddition;
