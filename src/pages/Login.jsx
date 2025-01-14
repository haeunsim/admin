import React, { useState } from "react";
import styled from "styled-components";
import catImg from "../assets/images/cat2.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Icon from "../components/Icon/Icon";

const Login = () => {
  // 임시 로그인 기능 테스트
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    id: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.id === "admin" && formData.password === "admin01") {
      dispatch({ 
        type: 'LOGIN_SUCCESS', 
        payload: {
          id: formData.id,
          name: "테스트 사용자",
          email: "test@example.com",
          role: "teacher",
          isAuthenticated: true
        }
      });
      navigate("/home");
    } else {
      alert("아이디 또는 비밀번호가 일치하지 않습니다.");
    }
  };

  return (
    <section>
      <Center>
        <Title>AI 고양이 튜터</Title>
        <Text>관리용 Admin 페이지</Text>
        <p style={{ color: '#b8b8b8'}}>임시 계정 : admin / admin01</p>
        <ImgWrap>
          <img src={catImg} alt="고양이 일러스트" />
        </ImgWrap>

        <FormWrapper as="form" onSubmit={handleSubmit}>
          <Input 
            type="text" 
            name="id"
            value={formData.id}
            onChange={handleChange}
            placeholder="아이디를 입력해주세요" 
          />
          <Input 
            type="password" 
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="비밀번호를 입력해주세요" 
          />
          <LoginButton type="submit">로그인</LoginButton>
        </FormWrapper>
      </Center>
    </section>
  );
};

const Center = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  width: 100%;
  height: 100vh;
  justify-content: center;
`;

const Title = styled.h4`
  color: #292929;
  font-size: 32px;
  font-weight: 500;
  line-height: 1;
`;

const Text = styled.p`
  color: #2e90ff;
  font-size: 18px;
  text-align: center;
  font-weight: 600;
`;

const ImgWrap = styled.div`
  width: 252px;
  padding: 40px 0;

  > img {
    width: 100%;
  }
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 320px;
`;

const Input = styled.input`
  width: 100%;
  height: 48px;
  padding: 0 16px;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  box-sizing: border-box;

  &::placeholder {
    color: #e8e8e8;
  }

  &:focus {
    border-color: #2e90ff;
  }
`;

const LoginButton = styled.button`
  width: 100%;
  height: 48px;
  background-color: #2e90ff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #2576d3;
  }
`;

export default Login;
