import React from "react";
import styled from "styled-components";
import SearchInput from "./common/SearchInput";

const SidebarContainer = styled.div`
  width: 100%;
  background: rgba(196, 224, 255, 0.25);
  padding: 40px 24px;
  text-align: center;
  box-sizing: border-box;
  overflow: hidden;
`;
const SubjectList = styled.div`
  border: 1px solid #BABABA;
  border-radius: 18px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th {
    padding: 10px;
    border-bottom: 1px solid #BABABA;
    border-right: 1px solid #BABABA;
    font-size: 16px;
    color: #525252;
  }

  tr {
    td {
      padding: 12px 6px;
      text-align: center;
      border-bottom: 1px solid #BABABA;
      color: #292929;
      font-size: 15px;

      &:nth-child(1) {
        color: #525252;
        padding-left: 18px;
        border-right: 1px solid #BABABA;
      }
    }

    &:last-child td {
      border-bottom: none;
    }
  }
`;

const UtilRate = () => {

  return (
    <SidebarContainer>
      <section>
        <h2>실사용률 (%)</h2>
        <SearchInput placeholder="학교명"/>
          <SubjectList>
            <Table>
              <thead>
                <tr>
                  <th style={{ width: "50%" }}>학급</th>
                  <th style={{ width: "50%", borderRight: "none" }}>실사용률</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ color: "#10D298" }}>3-1</td>
                  <td style={{ color: "#10D298" }}>0%</td>
                </tr>
                <tr>
                  <td>3-2</td>
                  <td>0%</td>
                </tr>
                <tr>
                  <td>3-3</td>
                  <td>0%</td>
                </tr>
                <tr>
                  <td style={{ color: "#2E90FF" }}>3-1</td>
                  <td style={{ color: "#2E90FF" }}>100%</td>
                </tr>
                <tr>
                  <td>3-4</td>
                  <td>0%</td>
                </tr>
                <tr>
                  <td>3-5</td>
                  <td>0%</td>
                </tr>
                <tr>
                  <td>3-6</td>
                  <td>33.3%</td>
                </tr>
                <tr>
                  <td>4-1</td>
                  <td>0%</td>
                </tr>
                <tr>
                  <td>4-2</td>
                  <td>0%</td>
                </tr>
                <tr>
                  <td style={{ color: "#2E90FF" }}>4-3</td>
                  <td style={{ color: "#2E90FF" }}>10%</td>
                </tr>
                <tr>
                  <td style={{ color: "#10D298" }}>4-4</td>
                  <td style={{ color: "#10D298" }}>0%</td>
                </tr>
                <tr>
                  <td>4-5</td>
                  <td>0%</td>
                </tr>
                <tr>
                  <td>4-6</td>
                  <td>0%</td>
                </tr>
                <tr>
                  <td>4-7</td>
                  <td>63.8%</td>
                </tr>
                <tr>
                  <td>5-1</td>
                  <td>0%</td>
                </tr>
                <tr>
                  <td>5-2</td>
                  <td>0%</td>
                </tr>
              </tbody>
            </Table>
          </SubjectList>

      </section>
    </SidebarContainer>
  );
};

export default UtilRate;
