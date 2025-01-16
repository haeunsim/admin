import React from "react";
import Container from "../components/common/Container";
import {
  StyledForm,
  InputGroup,
  FlexContainer,
  FileInput,
  StyledButton,
} from "../assets/styles/CommonStyles";
import SearchInput from "../components/common/SearchInput";

const AccountSettings = () => {
  return (
    <Container
      title="User 계정관리 > 계정 세팅/전달"
      subtitle="계정 특이사항 세팅 및 담당자 전달"
    >
      <StyledForm>
        <InputGroup>
          <h5>비밀번호 설정</h5>
          <FlexContainer>
            <InputGroup>
              <label>학교 선택 (USER)</label>
              <SearchInput placeholder="학교를 검색해주세요." />
            </InputGroup>
            <InputGroup>
              <label>비밀번호 설정</label>
              <SearchInput placeholder="6자리 이상, 영어 소문자/숫자 조합" />
            </InputGroup>
            <StyledButton>설정</StyledButton>
          </FlexContainer>
        </InputGroup>

        <InputGroup>
          <h5>방학중지 여부 설정</h5>
          <FlexContainer>
            <InputGroup>
              <label>학교 선택 (USER)</label>
              <SearchInput placeholder="학교를 검색해주세요." />
            </InputGroup>
            <InputGroup>
              <label>방학중지 여부 설정</label>
              <SearchInput placeholder="방학 중지 여부 선택" />
            </InputGroup>
            <StyledButton>설정</StyledButton>
          </FlexContainer>
        </InputGroup>

        <InputGroup>
          <h5>계정 전달</h5>
          <FlexContainer>
            <InputGroup>
              <label>학교 선택 (USER)</label>
              <SearchInput placeholder="학교를 검색해주세요." />
            </InputGroup>
          </FlexContainer>
        </InputGroup>
      </StyledForm>
    </Container>
  );
};

export default AccountSettings;
