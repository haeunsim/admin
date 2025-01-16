import React from "react";
import styled from "styled-components";
import BasicTable from "./common/Table/BasicTable";
import classNames from "classnames";
import { useLocation } from "react-router-dom";

const headers = [
  { label: "순번", width: "10%" },
  { label: "과목", width: "10%" },
  { label: "학년", width: "10%" },
  { label: "대단원", width: "25%" },
  { label: "중단원", width: "35%" },
  { label: "기록", width: "10%" },
];

const data = [
  {
    순번: "8",
    과목: "과학",
    학년: "3-1",
    대단원: "1. 힘과 우리 생활",
    중단원: "3. 수평을 잡아요",
    기록: "icon",
  },
  {
    순번: "7",
    과목: "과학",
    학년: "3-1",
    대단원: "1. 힘과 우리 생활",
    중단원: "3. 수평을 잡아요",
    기록: "icon",
  },
  {
    순번: "6",
    과목: "과학",
    학년: "3-1",
    대단원: "1. 힘과 우리 생활",
    중단원: "3. 수평을 잡아요",
    기록: "icon",
  },
  {
    순번: "5",
    과목: "과학",
    학년: "3-1",
    대단원: "1. 힘과 우리 생활",
    중단원: "3. 수평을 잡아요",
    기록: "icon",
  },
  {
    순번: "4",
    과목: "과학",
    학년: "3-1",
    대단원: "1. 힘과 우리 생활",
    중단원: "3. 수평을 잡아요",
    기록: "icon",
  },
  {
    순번: "3",
    과목: "과학",
    학년: "3-1",
    대단원: "1. 힘과 우리 생활",
    중단원: "3. 수평을 잡아요",
    기록: "icon",
  },
  {
    순번: "2",
    과목: "과학",
    학년: "3-1",
    대단원: "1. 힘과 우리 생활",
    중단원: "3. 수평을 잡아요",
    기록: "icon",
  },
  {
    순번: "1",
    과목: "과학",
    학년: "3-1",
    대단원: "1. 힘과 우리 생활",
    중단원: "3. 수평을 잡아요",
    기록: "icon",
  },
];

const messageData = [
  {
    from: { id: 2, name: "teacher" },
    message: {
      type: "text",
      value:
        "안녕하세요! 우리 주변에 있는 장소에 대해 관심 깊게 살펴 본 적 있나요?",
    },
  },
  {
    from: { id: 1, name: "학생" },
    message: { type: "text", value: "네 산책을 자주해서요." },
  },
  {
    from: { id: 2, name: "teacher" },
    message: {
      type: "text",
      value:
        "잘하고 있어요. 이번엔 문제를 읽고 ( ) 안의 보기 중 정답을 고르세요. [문제1] 실제 장소에 가서 직접 보고 조사해 자세한 정보를 얻는 활동을 (답사/장소)라고 합니다. ",
    },
  },
  {
    from: { id: 1, name: "학생" },
    message: { type: "text", value: "답사" },
  },
  {
    from: { id: 2, name: "teacher" },
    message: {
      type: "text",
      value:
        "맞아요. 다시 정리하면, 답사를 계획할 때는 답사 장소, 날짜와 시간, 조사 내용 등을 미리 정해야 합니다.",
    },
  },
  {
    from: { id: 1, name: "학생" },
    message: { type: "text", value: "넹" },
  },
];

const StudentChatHistory = () => {
  const currentUser = { id: 1 };
  const location = useLocation();
  const student = location.state?.student;

  return (
    <>
      <Flex>
        <ChatList>
          <h4>
            <span className="blue-text">{student?.name}</span> 채팅 수업 리스트
            <span className="small-text">(최신순)</span>
          </h4>
          <div>
            <BasicTable headers={headers} data={data} />
          </div>
        </ChatList>
        <ChatContent>
          <ChapterTitle>중단원 이름을 이곳에서 출력합니다.</ChapterTitle>
          {/* 기록 없을 때 */}
          {/* <ChatMessages>
            <p>좌측의 ‘기록 아이콘’을 클릭하면<br/>
            해당 채팅 내역이 이 영역에 표시됩니다.</p>
          </ChatMessages> */}
          <ChatMessages>
            <MessageList>
              {messageData.map((msg, index) => (
                <UserMessage
                  key={index}
                  message={msg}
                  currentUser={currentUser}
                  showTTS={msg.from.name === "teacher"}
                />
              ))}
            </MessageList>
          </ChatMessages>
        </ChatContent>
      </Flex>
    </>
  );
};

const UserMessage = ({ message, currentUser, showTTS }) => (
  <MessageItem
    className={classNames("clearfix", {
      "my-message": message.from.id === currentUser.id,
    })}
  >
    {showTTS ? (
      <TTSFlex>
        <div className="message-content">
          <div className="message-wrap">
            <MessageText>{message.message.value}</MessageText>
          </div>
        </div>
        <TTSButton>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
          >
            <path
              d="M12.8335 5.83398L7.00016 10.5007H2.3335V17.5007H7.00016L12.8335 22.1673V5.83398Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M26.8335 10.5L19.8335 17.5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.8335 10.5L26.8335 17.5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </TTSButton>
      </TTSFlex>
    ) : (
      <div className="message-content">
        <div className="message-wrap">
          <MessageText>{message.message.value}</MessageText>
        </div>
      </div>
    )}
  </MessageItem>
);

const Title = styled.div`
  text-align: center;
  padding: 24px 0;
  border-bottom: 2px dashed #ddd;
`;

const Flex = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  margin-top: 20px;
  padding: 20px;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

const ChatList = styled.div`
  width: 50%;

  @media screen and (max-width: 1200px) {
    width: 100%;
  }

  h4 {
    color: #525252;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 15px;

    .blue-text {
      color: #2e90ff;
      font-size: 20px;
    }

    .small-text {
      font-size: 15px;
      font-weight: 500;
    }
  }
`;
const ChatContent = styled.div`
  width: 50%;

  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;
const ChapterTitle = styled.div`
  background: #88c0ff;
  padding: 20px 24px;
  font-size: 18px;
  color: #343434;
  font-weight: 600;
  border-radius: 5px 5px 0 0;
`;

const ChatMessages = styled.div`
  background: #f1f8ff;
  width: 100%;
  height: 700px;
  border-radius: 0 0 5px 5px;
  font-size: 20px;
  line-height: 1.4;
`;

const MessageItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;

  .message-content {
    background: #fff;
    padding: 10px;
    border-radius: 12px;
    color: #343434;
    max-width: 70%;
  }

  &.my-message {
    align-items: flex-end;

    .message-content {
      background-color: #15cbf3;
    }
  }
`;

const MessageText = styled.p`
  margin: 0;
  font-size: 16px;
`;

const MessageList = styled.div``;
const TTSButton = styled.button`
  width: 45px;
  height: 45px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fe575c;
  border-radius: 50px;
  cursor: pointer;
`;
const TTSFlex = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export default StudentChatHistory;
