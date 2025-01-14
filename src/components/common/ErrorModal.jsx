import React from "react";
import styled from "styled-components";

const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const ModalInner = styled.div`
  width: 600px;
`;
const ModalHead = styled.div`
  background: #fe575c;
  text-align: center;
  padding: 20px 0;
  color: #fff;
  border-radius: 16px 16px 0 0;
  font-size: 24px;
`;
const ModalContent = styled.div`
  background: #fff;
  padding: 30px 0;
  border-radius: 0 0 16px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #343434;

  > div {
    text-align: left;
    font-weight: 600;
  }

  > button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px;
    background: #d2d2d2;
    border-radius: 8px;
    color: #525252;
    font-size: 18px;
    min-width: 200px;
    cursor: pointer;
  }
`;
const ErrorModal = () => {
  return (
    <Modal>
      <ModalInner>
        <ModalHead>[입력 내용 오류]</ModalHead>
        <ModalContent>
          <div>
            <p>학교명, 교사명 : 공백, 특수 기호 없이 한글 또는 영문만 입력</p>
            <p>지역(시/도), 신청사유 : 필수 선택</p>
            <p>학급정보, 학생번호 : 숫자만 입력</p>
          </div>
          <button>확인</button>
        </ModalContent>
      </ModalInner>
    </Modal>
  );
};

export default ErrorModal;
