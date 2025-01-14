import React, { useState } from "react";
import BasicTables from "./common/Table/BasicTable";
import Navigator from "./common/Navigator";
import IconBtn from "./Icon/IconBtn";
import { useDispatch } from 'react-redux';
import { setSelectedTest } from "../redux/reducers/testSlice";

const data = [
  {
    순번: "999",
    과목: "과학",
    학년: "3-1",
    대단원: "힘과 우리 생활",
    중단원: "수평을 잡아요",
    테스트: true,
    음소거: true,
    링크: true,
  },
  {
    순번: "999",
    과목: "과학",
    학년: "3-1",
    대단원: "생물의 한살이",
    중단원: "여러 식물의 한살이를 알아볼까요?",
    테스트: true,
    음소거: true,
    링크: true,
  },
  {
    순번: "999",
    과목: "과학",
    학년: "3-1",
    대단원: "동물의 생활",
    중단원: "(DB) 주변의 동물을 찾아요.",
    테스트: true,
    음소거: true,
    링크: true,
  },
  {
    순번: "999",
    과목: "사회",
    학년: "3-1",
    대단원: "우리가 사는 곳",
    중단원: "우리 주변 여러 장소에 대한 생각과 느낌을 나눠볼까요?",
    테스트: true,
    음소거: true,
    링크: true,
  },
  {
    순번: "999",
    과목: "국어",
    학년: "3-1",
    대단원: "대화와 공감",
    중단원: "상대가 잘한 일이나 상대의 장점을 찾아 칭찬하기",
    테스트: true,
    음소거: true,
    링크: true,
  },
  {
    순번: "999",
    과목: "과학",
    학년: "3-1",
    대단원: "힘과 우리 생활",
    중단원: "수평을 잡아요",
    테스트: true,
    음소거: true,
    링크: true,
  },
  {
    순번: "999",
    과목: "과학",
    학년: "3-1",
    대단원: "식물의 생활",
    중단원: "주변에 어떤 식물이 있나요?",
    테스트: true,
    음소거: true,
    링크: true,
  },
  {
    순번: "999",
    과목: "과학",
    학년: "3-1",
    대단원: "힘과 우리 생활",
    중단원: "(DB) 힘을 줄여주는 도구를 조사해요",
    테스트: true,
    음소거: true,
    링크: true,
  },
  {
    순번: "999",
    과목: "사회",
    학년: "3-1",
    대단원: "우리가 사는 곳",
    중단원: "우리 주변 여러 장소에 대한 생각과 느낌을 나눠볼까요?",
    테스트: true,
    음소거: true,
    링크: true,
  },
  {
    순번: "999",
    과목: "국어",
    학년: "3-1",
    대단원: "대화와 공감",
    중단원: "상대가 잘한 일이나 상대의 장점을 찾아 칭찬하기",
    테스트: true,
    음소거: true,
    링크: true,
  },
];

const WorkListSection = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handleTestClick = (rowData) => {
    console.log('테스트 데이터:', rowData);
    dispatch(setSelectedTest({
      대단원: rowData.대단원,
      중단원: rowData.중단원
    }));
  };

  const headers = [
    { label: "순번", width: "7%" },
    { label: "과목", width: "7%" },
    { label: "학년", width: "7%" },
    { label: "대단원", width: "16%" },
    { label: "중단원", width: "42%" },
    {
      label: "테스트",
      width: "7%",
      cell: (rowData) => (
        <div style={{ display: "flex", justifyContent: "center" }} onClick={() => handleTestClick(rowData)}>
          <IconBtn 
            name="chat" 
            color="#2E90FF" 
          />
        </div>
      ),
    },
    {
      label: "음소거",
      width: "7%",
      cell: () => (
        <div  style={{ display: "flex", justifyContent: "center" }}>
          <IconBtn 
            name="check"
            color="#c0c0c0" // 선택 시 #2E90FF
          />
        </div>
      ),
    },
    {
      label: "링크",
      width: "7%",
      cell: () => (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <IconBtn name="send" color="#2E90FF" />
        </div>
      ),
    },
  ];

  return (
    <section style={{ minHeight: "360px" }}>
      <h2>작업물 열람</h2>
      <BasicTables headers={headers} data={currentItems} />
      <Navigator
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalItems={data.length}
        itemsPerPage={itemsPerPage}
      />
    </section>
  );
};

export default WorkListSection;
