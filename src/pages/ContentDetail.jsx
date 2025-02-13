import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "antd";
import EditTable from "../components/common/Table/EditTable";
import Container from "../components/common/Container";
import ChatTest from "../components/ChatTest";

const originData = Array.from({
  length: 15,
}).map((_, i) => ({
  key: i.toString(),
  유형: "학습활동",
  출제방식: "단답형",
  질문: `${i}. 두 물체 사이의 밀거나 당기는 것을 무엇이라 하나요?`,
  대답: "힘",
  이미지: "",
  해설: `해설 부분입니다. ${i}`,
}));


const ContentDetail = () => {
  const location = useLocation();
  const { item } = location.state || {};

  const [data, setData] = useState(originData);
  const [play, setPlay] = useState(false);

  const handleAdd = () => {
    const newData = {
      key: Date.now().toString(), 
      유형: "학습활동", 
      출제방식: "단답형",
      질문: "새로운 질문을 입력하세요.",
      대답: "새로운 대답을 입력하세요.",
      이미지: "",
      해설: "새로운 해설을 입력하세요.",
    };

    setData((prevData) => [newData, ...prevData]);
  }

  const handleSave = () => {
    // '최신 수정 내용(date)으로 채팅 콘텐츠 구성을 변경합니다. 변경취소/확인' 모달에서 확인 버튼을 누르면 저장
  };

  return (
    <Container title="콘텐츠 DB 상세보기">
      <div className="inner">

        <div style={{ background: "#e3edff", padding: '20px', display: 'flex', gap: '20px' }}>
            <p><span style={{fontWeight: '700'}}>[3-1 과학]</span></p>
            <p><span style={{fontWeight: '700'}}>대단원</span> : 힘과 우리 생활</p>
            <p><span style={{fontWeight: '700'}}>중단원</span> : 물체를 움직여볼까요?</p>
            <p><span style={{fontWeight: '700'}}>콘텐츠 고유코드</span> : {item.고유코드}</p>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <Button onClick={() => setPlay(!play)}>채팅시연</Button>
          </div>
          <div style={{ display: "flex", gap: '20px' }}>
            <Button onClick={handleAdd} type="primary">
              질문 / 대답 추가
            </Button>
            <Button onClick={handleSave}>저장하기</Button>
          </div>
        </div>

        { play ?  <ChatTest item={item} /> : <></> }

        {/* table data 순서를 드래그로 바꿀 수 있나? */}
        <EditTable data={data} setData={setData}/>
      </div>
    </Container>
  );
};

export default ContentDetail;
