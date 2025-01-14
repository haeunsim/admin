import React, { useRef } from "react";
import styled from "styled-components";
import { lowFreqData, highFreqData } from "../data/chartData";
import FrequencyChart from "./FrequencyChart";

const FrequencySection = () => {
  const chartRef = useRef(null);
  const chartRef2 = useRef(null);

  return (
    <section>
      <h2>AI 튜터 월간 사용 빈도</h2>
      <Flex style={{ gap: "20px" }}>
        <Item>
          <h4>
            사용 빈도{" "}
            <span
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "#FE575C",
              }}
            >
              낮은
            </span>{" "}
            학교
          </h4>
          <TableWrapper>
            <Table>
              <thead>
                <tr>
                  <th rowSpan="2">순위</th>
                  <th rowSpan="2">학교명</th>
                  <th colSpan="2" style={{ borderRight: "none" }}>
                    실행 횟수
                  </th>
                </tr>
                <tr>
                  <th>학교 평균</th>
                  <th style={{ borderRight: "none" }}>
                    교사 1인당
                    <br />
                    평균
                  </th>
                </tr>
              </thead>
              <tbody>
                {lowFreqData.labels.map((school, index) => (
                  <tr key={index}>
                    <td>0{index + 1}</td>
                    <td>{school}</td>
                    <td>{lowFreqData.schoolAvg[index]}</td>
                    <td>{lowFreqData.teacherAvg[index]}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </TableWrapper>
          <FrequencyChart data={lowFreqData} />
        </Item>
        <Item>
          <h4>
            사용 빈도{" "}
            <span
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "#2E90FF",
              }}
            >
              높은
            </span>{" "}
            학교
          </h4>
          <TableWrapper>
            <Table>
              <thead>
                <tr>
                  <th rowSpan="2">순위</th>
                  <th rowSpan="2">학교명</th>
                  <th colSpan="2" style={{ borderRight: "none" }}>
                    실행 횟수
                  </th>
                </tr>
                <tr>
                  <th>학교 평균</th>
                  <th style={{ borderRight: "none" }}>
                    교사 1인당
                    <br />
                    평균
                  </th>
                </tr>
              </thead>
              <tbody>
                {highFreqData.labels.map((school, index) => (
                  <tr key={index}>
                    <td>0{index + 1}</td>
                    <td>{school}</td>
                    <td>{highFreqData.schoolAvg[index]}</td>
                    <td>{highFreqData.teacherAvg[index]}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </TableWrapper>
          {/* <div style={{ height: "300px", position: "relative" }}>
            <canvas ref={chartRef2}></canvas>
          </div> */}
          <FrequencyChart data={highFreqData} />
        </Item>
      </Flex>
    </section>
  );
};

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

const Item = styled.div`
  width: 50%;
`;
const TableWrapper = styled.div`
  margin-top: 20px;
  overflow-x: auto;
  border: 1px solid #dadada;
  border-radius: 18px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  tr {
    th,
    td {
      padding: 8px;
      text-align: center;
      font-size: 16px;
      color: #292929;
    }

    th {
      border-right: 1px solid #dadada;
      border-bottom: 1px solid #dadada;
    }

    td {
      border-bottom: 1px solid #dadada;
    }

    &:last-child td {
      border-bottom: none;
    }
  }
`;

export default FrequencySection;
