import React, { useState } from "react";
import styled from "styled-components";
import StudentChatHistory from '../components/StudentChatHistory';

const ChatHistory = () => {
  const [selectedStudent, setSelectedStudent] = useState(null);

  const students = [
    { id: 1, name: "김민준", seat: 1 },
    { id: 2, name: "이서연", seat: 2 },
    { id: 3, name: "박지호", seat: 3 },
    { id: 4, name: "최수아", seat: 4 },
    { id: 5, name: "정우진", seat: 5 },
    { id: 6, name: "강하은", seat: 6 },
    { id: 7, name: "조현우", seat: 7 },
    { id: 8, name: "윤지민", seat: 8 },
    { id: 9, name: "임서준", seat: 9 },
    { id: 10, name: "한예린", seat: 10 },
    { id: 11, name: "신동현", seat: 11 },
    { id: 12, name: "백서윤", seat: 12 },
    { id: 13, name: "류지원", seat: 13 },
    { id: 14, name: "남소율", seat: 14 },
    { id: 15, name: "송민서", seat: 15 },
    { id: 16, name: "구예준", seat: 16 },
    { id: 17, name: "황도윤", seat: 17 },
    { id: 18, name: "안하린", seat: 18 },
    { id: 19, name: "오시우", seat: 19 },
    { id: 20, name: "문서현", seat: 20 },
  ];

  const studentClick = (student) => {
    if (student) {
      setSelectedStudent?.(student);
    }
  };

  return (
    <Container>
      <Title>
        <h2> {!selectedStudent ? "3학년 1반" : "학생 채팅 기록 열람"}</h2>
      </Title>
      {!selectedStudent ?       <ClassRoom>
        {[1, 2, 3, 4, 5].map((row) => (
          <Row key={row}>
            {[1, 2, 3, 4].map((col) => {
              const seatNumber = (row - 1) * 4 + col;
              const student = students.find((s) => s.seat === seatNumber);

              return (
                <Seat
                  key={col}
                  onClick={() => studentClick(student)}
                >
                  <Name>{student ? `${seatNumber}. ${student.name}` : ""}</Name>
                </Seat>
              );
            })}
          </Row>
        ))}
      </ClassRoom>
      : <StudentChatHistory/> }
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 20px;
`;
const Title = styled.div`
  font-weight: 500;
  text-align: center;
  padding: 24px 0;
  border-bottom: 2px dashed #ddd;
`;

const ClassRoom = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f8faff;
  gap: 0;
  border-radius: 16px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px dashed #ddd;

  & > div {
    border-right: 2px dashed #ddd;
    flex: 1;

    &:last-child {
      border-right: none;
    }
  }

  &:last-child {
    border-bottom: none;
  }
`;

const Seat = styled.div`
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Name = styled.button`
  width: 150px;
  height: 64px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-size: 20px;
  color: #525252;
  font-weight: 600;
`;
export default ChatHistory;
