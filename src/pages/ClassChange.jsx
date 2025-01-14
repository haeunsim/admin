import React, { useState } from "react";
import styled from "styled-components";
import BasicTables from "../components/common/Table/BasicTable";
import Dropdown from "../components/common/Dropdown";
import ErrorModal from "../components/common/ErrorModal";

const ClassChange = () => {
  const [formData, setFormData] = useState({
    schoolName: "",
    region: "",
    teacherName: "",
    grade: "",
    class: "",
    studentType: "전입생",
    studentName: "",
    transferCount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const headers = [
    { label: "순번", width: "10%" },
    { label: "신청사유", width: "15%" },
    { label: "학급정보", width: "15%" },
    { label: "학생번호", width: "15%" },
    { label: "학생명", width: "15%" },
    { label: "신청일", width: "20%" },
    { label: "신청", width: "10%" },
  ];

  const data = [
    {
      순번: "999",
      신청사유: "전출", // reason
      학급정보: "0-0", // classInfo
      학생번호: "000", // studentId
      학생명: "이학생", // studentName
      신청일: "0000.00.00", // date
      신청: "신청", // status
    },
  ];

  return (
    <>
      {/* <ErrorModal/> */}
      <Container>
        <Flex>
          <Item>
            <section>
              <h2>전입/편출 학생 입력 양식</h2>

              <Form onSubmit={handleSubmit}>
                <FormGrid>
                  <FormRow>
                    <Label>학교명</Label>
                    <div>
                      <Input
                        type="text"
                        name="schoolName"
                        value={formData.schoolName}
                        onChange={handleChange}
                        className="sm"
                      />
                      <Suffix>초등학교</Suffix>
                    </div>
                  </FormRow>

                  <FormRow>
                    <Label>지역(시/도)</Label>
                    <div>
                      <Select
                        name="region"
                        value={formData.region}
                        onChange={handleChange}
                      >
                        <option value="서울특별시">서울특별시</option>
                        <option value="부산광역시">부산광역시</option>
                        <option value="인천광역시">인천광역시</option>
                        <option value="광주광역시">광주광역시</option>
                        <option value="대전광역시">대전광역시</option>
                        <option value="울산광역시">울산광역시</option>
                        <option value="세종특별자치시">세종특별자치시</option>
                        <option value="경기도">경기도</option>
                        <option value="강원도">강원도</option>
                        <option value="충청북도">충청북도</option>
                        <option value="충청남도">충청남도</option>
                        <option value="전라북도">전라북도</option>
                        <option value="전라남도">전라남도</option>
                        <option value="경상북도">경상북도</option>
                        <option value="경상남도">경상남도</option>
                        <option value="제주특별자치도">제주특별자치도</option>
                      </Select>
                    </div>
                  </FormRow>

                  <FormRow>
                    <Label>교사명</Label>
                    <div>
                      <Input
                        type="text"
                        name="teacherName"
                        value={formData.teacherName}
                        onChange={handleChange}
                      />
                    </div>
                  </FormRow>

                  <FormRow>
                    <Label>학급정보</Label>
                    <div>
                      <ShortInput
                        type="number"
                        name="grade"
                        value={formData.grade}
                        onChange={handleChange}
                      />
                      <Suffix>학년</Suffix>
                      <ShortInput
                        type="number"
                        name="class"
                        value={formData.class}
                        onChange={handleChange}
                      />
                      <Suffix>반</Suffix>
                    </div>
                  </FormRow>

                  <FormRow>
                    <Label>신청사유</Label>
                    <div>
                      <RadioGroup>
                        <RadioLabel>
                          <input
                            type="radio"
                            name="studentType"
                            value="전입생"
                            checked={formData.studentType === "전입생"}
                            onChange={handleChange}
                          />
                          전입생
                        </RadioLabel>
                        <RadioLabel>
                          <input
                            type="radio"
                            name="studentType"
                            value="전출생"
                            checked={formData.studentType === "전출생"}
                            onChange={handleChange}
                          />
                          전출생
                        </RadioLabel>
                      </RadioGroup>
                    </div>
                  </FormRow>

                  <FormRow>
                    <Label>학생명</Label>
                    <div>
                      <Input
                        type="text"
                        name="studentName"
                        value={formData.studentName}
                        onChange={handleChange}
                      />
                    </div>
                  </FormRow>

                  <FormRow>
                    <Label>학생번호</Label>
                    <div>
                      <ShortInput
                        type="number"
                        name="transferCount"
                        value={formData.transferCount}
                        onChange={handleChange}
                      />
                      <Suffix>번</Suffix>
                    </div>
                  </FormRow>
                </FormGrid>

                <ButtonWrapper>
                  <SubmitButton type="submit">제출하기</SubmitButton>
                </ButtonWrapper>
              </Form>
            </section>
          </Item>
          <Item>
            <section>
              <h2>
                처리 현황{" "}
                <span className="sm-point">
                  (진행 단계 : 신청 - 접수 - 완료)
                </span>
              </h2>
              <div>
                {/* 신청 내역이 없습니다. */}
                <BasicTables headers={headers} data={data} />
              </div>
            </section>
          </Item>
        </Flex>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 100vh;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

const Item = styled.div`
  width: 50%;

  &:first-child {
    border-right: 2px dashed #bababa;
  }

  > section {
    padding: 48px 24px;
  }

  @media screen and (max-width: 1200px) {
    width: 100%;
    
    &:first-child {
      border-right: none;
    }
  }
`;

const Form = styled.form`
  width: 100%;
`;

const FormGrid = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #e8e8e8;
`;

const FormRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e8e8e8;

  > div {
    text-align: center;
    padding: 10px;
    flex: 1;
  }
`;

const Label = styled.label`
  min-width: 150px;
  padding: 30px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #c4e0ff;
  text-align: center;
  color: #525252;
  font-weight: 500;
  font-size: 16px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 220px;
  background: #f5f5f5;
  font-size: 16px;
  color: #2e90ff;
  font-weight: 500;
  text-align: center;

  &.sm {
    width: 140px;
    margin-right: 10px;
  }
`;

const ShortInput = styled(Input)`
  width: 80px;
`;

const Select = styled.select`
  width: 220px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  flex: 1;
  background: #f5f5f5;
  text-align: center;
  color: #525252;
  font-size: 16px;
  font-weight: 500;

  &::active {
    color: #2e90ff;
  }
  ::placeholder {
    color: #9a9a9a;
  }
`;

const Suffix = styled.span`
  margin: 0 4px;
  color: #525252;
  font-size: 16px;
  font-weight: 500;
`;

const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  font-size: 16px;
  color: #525252;
  font-weight: 500;
`;

const ButtonWrapper = styled.div`
  margin-top: 24px;
  text-align: center;
`;

const SubmitButton = styled.button`
  padding: 12px;
  background-color: #d2d2d2;
  color: #9a9a9a;
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  line-height: 1;
  width: 220px;
`;

export default ClassChange;
