import React from "react";
import styled from "styled-components";
import { csTableData } from "../data/chartData";

const CSTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th {
    border-top: 1px solid #dadada;
    border-bottom: 1px solid #dadada;
    padding: 10px;
    font-size: 16px;
    color: #525252;
    background: #f5f5f5;
    font-weight: 600;
  }
  td {
    border-bottom: 1px solid #dadada;
    padding: 10px;
    text-align: center;
    font-size: 16px;
    color: #525252;
  }
`;

const CSBoardSection = () => {
  return (
    <section>
      <h2>CS 게시판</h2>
      <CSTable>
        <thead>
          <tr>
            <th>번호</th>
            <th>분류</th>
            <th>작성자</th>
            <th>제목</th>
            <th>상태</th>
            <th>등록일</th>
          </tr>
        </thead>
        {csTableData.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.category}</td>
            <td>{item.author}</td>
            <td>{item.title}</td>
            <td>{item.status}</td>
            <td>{item.date}</td>
          </tr>
        ))}
      </CSTable>
    </section>
  );
};

export default CSBoardSection;
