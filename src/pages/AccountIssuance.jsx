import React from "react";
import Container from "../components/common/Container";
import SearchInput from "../components/common/SearchInput";
import {
  StyledForm,
  InputGroup,
  FlexContainer,
  FileInput,
  StyledButton,
} from "../assets/styles/CommonStyles";

const AccountIssuance = () => {
  return (
    <Container
      title="User 계정관리 > 계정발급"
      subtitle="유료결제 학교의 계정을 발급합니다."
    >
      <div>
        <StyledForm>
          <InputGroup>
            <h5>
              학교 정보 업로드{" "}
              <span>! 견적 명수, 개월 수와 일치하는 지 먼저 확인해주세요.</span>
            </h5>

            <InputGroup>
              <label>학교 선택</label>
              <SearchInput placeholder="학교를 검색해주세요." />
            </InputGroup>

            <InputGroup>
              <label>파일 업로드</label>
              <FlexContainer>
                <FileInput type="file" placeholder="파일 업로드" />
                <StyledButton>정보 확인</StyledButton>
              </FlexContainer>
            </InputGroup>
          </InputGroup>

        </StyledForm>
      </div>
    </Container>
  );
};

export default AccountIssuance;
