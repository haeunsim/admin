import React, { useState } from "react";
import Container from "../components/common/Container";
import Dropdown from "../components/common/Dropdown";
import styled from "styled-components";
import BorderTable from "../components/common/Table/BorderTable";

const FilterArea = styled.div`
  /* margin-top: 40px; */
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 20px;
  border-bottom: 2px dashed #ddd;

  > div {
    max-width: 100% !important;
  }
`;

const Flex = styled.div`
  display: flex;
  gap: 20px;
  height: 40px;
`;

const RadioCell = styled.div`
  border: 1px solid #dadada;
  border-radius: 8px;
  width: 100%;
  padding: 8px 32px;
  display: flex;
  align-items: center;
  gap: 24px;
  font-size: 16px;

  & input[type="radio"] {
    appearance: none;
    width: 16px;
    height: 16px;
    border: 2px solid #dadada;
    border-radius: 50%;
    margin: 0;
    cursor: pointer;
  }

  & input[type="radio"]:checked {
    border: 2px solid #2e90ff;
    background: white;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
      content: "";
      position: absolute;
      width: 8px;
      height: 8px;
      background: #2e90ff;
      border-radius: 50%;
    }
  }

  p,
  & label {
    white-space: nowrap;
  }

  & label {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
  }
`;

const TabList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 40px 42px 0;
  gap: 12px;
`;

const TabItem = styled.li`
  width: 300px;
  padding: 20px;
  border-radius: 12px 12px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: 500;
  color: ${(props) => (props.active ? "#fff" : "#9A9A9A")};
  background: ${(props) =>
    props.active ? "#1E90FF" : "rgba(163, 181, 208, 0.50)"};
`;

const TabContent = styled.div`
  border: 1px solid #c4e0ff;
  padding: 30px 42px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-height: 700px;

  h5 {
    font-size: 16px;
    color: #2E90FF;
  }
`;

const Textarea = styled.textarea`
  border: 1px solid #dadada;
  border-radius: 8px;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  &::placeholder {
  color: #dadada;
  }
`
const ContentCreation = () => {
  const [selectedUnit, setSelectedUnit] = useState("");
  const [activeTab, setActiveTab] = useState(0);

  const [menuItems] = useState(["질문 & 대답 업로드", "채팅 콘텐츠 생성"]);

  const options = [
    "1. 힘과 우리 생활",
    "2. 동물의 생활",
    "3. 식물의 생활",
    "4. 생물의 한살이",
  ];

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" || 
          file.type === "application/vnd.ms-excel") {
        setSelectedFile(file);
      } else {
        alert("엑셀 파일(.xlsx, .xls)만 업로드 가능합니다.");
      }
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    try {
      const formData = new FormData();
      formData.append('file', selectedFile);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        alert('파일이 성공적으로 업로드되었습니다.');
        setSelectedFile(null);
      } else {
        throw new Error('업로드 실패');
      }
    } catch (error) {
      alert('파일 업로드 중 오류가 발생했습니다.');
      console.error(error);
    }
  };

  const headers = [
    { label: "선택", width: "7%" },
    { label: "유형", width: "7%" },
    { label: "출제방식", width: "10%" },
    { label: "질문", width: "40%" },
    { label: "정답", width: "16%" },
    { label: "해설", width: "5%" },
    { label: "이미지", width: "5%" },
    { label: "생성일", width: "10%" },
  ];
  
  const data = [
    {
      선택: "체크", // <input type="checkbox"/>
      유형: "핵심 개념어",
      출제방식: "단답형",
      질문: "긴 널빤지의 가운데를 받쳐 놓고 양쪽에 사람이 타고 오르락내리락하는 놀이 기구",
      정답: "시소",
      해설: "N",
      이미지: "N",
      생성일: "2024-12-31",
    },
    {
      선택: "체크", // <input type="checkbox"/>
      유형: "핵심 개념어",
      출제방식: "진위형",
      질문: "나무 판자의 수평을 잡으려면 받침대를 나무 판자의 가운데에 놓아야한다. (O, X)",
      정답: "O",
      해설: "Y",
      이미지: "N",
      생성일: "2024-12-31",
    },
    {
      선택: "체크", // <input type="checkbox"/>
      유형: "학습활동",
      출제방식: "서술형",
      질문: "무게가 같은 두 물체의 수평을 잡으려면 어떻게 해야할까요?",
      정답: "두 물체를 받침대로부터 같은 거리에 놓기	",
      해설: "N",
      이미지: "Y",
      생성일: "2024-12-31",
    },
    {
      선택: "체크", // <input type="checkbox"/>
      유형: "학습용어",
      출제방식: "초성",
      질문: "한쪽으로 기울지 않은 평평한 상태를 ( ㅅㅍ ) 이라고 합니다.",
      정답: "수평",
      해설: "Y",
      이미지: "Y",
      생성일: "2024-12-31",
    },
  ];
  return (
    <Container>
      <h2>
        콘텐츠 생성/업로드
        <span style={{ color: "#999999" }}>
          * 교사 LMS에서 열람 가능한 '완성형 채팅수업 콘텐츠(복수의 질문/대답set
          조합)을 직접 생성/관리하는 페이지입니다.'
        </span>
      </h2>

      <div>
        <TabList>
          {menuItems.map((tab, index) => (
            <TabItem
              key={index}
              onClick={() => {
                setActiveTab(index);
              }}
              active={activeTab === index}
            >
              {tab}
            </TabItem>
          ))}
        </TabList>

        <TabContent>
          <FilterArea>
            <Flex>
              <RadioCell>
                <p>학년</p>
                <label>
                  <input type="radio" name="grade" value="3" defaultChecked /> 3
                </label>
                <label>
                  <input type="radio" name="grade" value="4" /> 4
                </label>
                <label>
                  <input type="radio" name="grade" value="5" /> 5
                </label>
                <label>
                  <input type="radio" name="grade" value="6" /> 6
                </label>
              </RadioCell>
              <Dropdown
                label="과목"
                options={options}
                value={selectedUnit}
                onSelect={setSelectedUnit}
              />
            </Flex>
            <Flex>
              <Dropdown
                label="대단원명"
                options={options}
                value={selectedUnit}
                onSelect={setSelectedUnit}
              />
              <Dropdown
                label="중단원명"
                options={options}
                value={selectedUnit}
                onSelect={setSelectedUnit}
              />
            </Flex>
          </FilterArea>

          {/* 질문 & 대답 업로드 탭 */}
          <div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <span style={{ color: "#2E90FF" }}>저장한 질문 & 대답은 '채팅 콘텐츠 생성' 탭에서 확인 가능합니다.</span>
          </div>
            
          <div>
            <h5># 1. 직접 입력하기</h5>
            <Flex style={{ width: "500px", marginTop: "20px"}}>
              <Dropdown
                label="유형"
                options={options}
                value={selectedUnit}
                onSelect={setSelectedUnit}
              />
              <Dropdown
                label="출제방식"
                options={options}
                value={selectedUnit}
                onSelect={setSelectedUnit}
              />
            </Flex>
            <Flex style={{ marginTop: "20px" }}>
              <div style={{ width: "60%", height: "60px" }}><Textarea maxLength={255} placeholder="질문 입력란" /></div>
              <div style={{ width: "40%",  height: "60px"}}><Textarea maxLength={255} placeholder="대답 입력란"/></div>
            </Flex>
            <Flex style={{ marginTop: "40px"}}>
              <div style={{ width: "60%", height: "60px" }}>
                <Textarea maxLength={255} placeholder="(선택) 해설 입력란"/>
              </div>
              <div style={{ width: "40%",  height: "60px", display: "flex", gap: "20px" }}>
                <button style={{ width: "50%", height: "100%", borderRadius: "8px" }}>(선택) 이미지 첨부</button>
                <button style={{ width: "50%", height: "100%", borderRadius: "8px" }}>저장</button>
              </div>
            </Flex>
          </div>

          <div style={{ marginTop: "40px" }}>
            <h5># 2. 파일 업로드하기</h5>
            <FileUploadContainer>
              <FileInput type="file" id="fileInput" accept=".xlsx, .xls" onChange={handleFileChange} />
              <FileLabel htmlFor="fileInput">
                <UploadIcon />
                <p>엑셀 파일을 드래그하거나 클릭하여 업로드하세요</p>
                <span>* .xlsx, .xls 파일만 업로드 가능합니다.</span>
              </FileLabel>
              {selectedFile && (
                <FileInfo>
                  <p>{selectedFile.name}</p>
                  <button onClick={handleUpload}>업로드</button>
                </FileInfo>
              )}
            </FileUploadContainer>
          </div>
          </div>

          {/* 채팅 콘텐츠 생성 탭 */}
          <div>
            <div>
              <BorderTable headers={headers} data={data} />
            </div>
          </div>
        </TabContent>
      </div>
    </Container>
  );
};

const FileUploadContainer = styled.div`
  margin-top: 20px;
  border: 2px dashed #dadada;
  border-radius: 8px;
  padding: 20px;
`;

const FileInput = styled.input`
  display: none;
`;

const FileLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  padding: 20px;

  p {
    color: #525252;
    font-size: 16px;
    margin: 0;
  }

  span {
    color: #999;
    font-size: 14px;
  }
`;

const FileInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  padding: 10px;
  background: #f5f5f5;
  border-radius: 8px;

  p {
    margin: 0;
    color: #525252;
  }

  button {
    background: #2e90ff;
    color: white;
    padding: 8px 20px;
    border-radius: 4px;
    font-size: 14px;
  }
`;

const UploadIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #2e90ff;
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    background: white;
  }

  &::before {
    width: 2px;
    height: 20px;
    top: 10px;
    left: 19px;
  }

  &::after {
    width: 20px;
    height: 2px;
    top: 19px;
    left: 10px;
  }
`;
export default ContentCreation;
