import React, { useState } from "react";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import reactLogo from "./reactLogo.png";

const SignupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const SignupForm = styled.form`
  background-color: rgba(255, 255, 255, 0.9);
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
  width: 350px;
  text-align: center;
`;

const Logo = styled.img`
  width: 200px;
  height: 100px;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  color: #333;
  margin-bottom: 20px;
  font-family: 'Arial', sans-serif;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 8px 0;
  border: 1px solid #dddfe2;
  border-radius: 6px;
  font-size: 16px;
  transition: border-color 0.2s;

  &:focus {
    border-color: #1877f2;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #1877f2;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 16px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #166fe5;
  }
`;

const StyledLink = styled(Link)`
  display: block;
  text-align: center;
  color: #1877f2;
  margin-top: 16px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const LoginText = styled.p`
  text-align: center;
  margin-top: 20px;
  color: #1c1e21;
`;

const ErrorMessage = styled.p`
  color: red;
  text-align: center;
`;

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3000/auth/signup", {
      username,
      email,
      password,
    }).then(response => {
        if(response.data.status) {
            navigate('/login')
        }
    }).catch(err => {
        console.log(err)
    })
  };
  return (
    <SignupContainer>
      <SignupForm onSubmit={handleSubmit}>
      <Logo src={reactLogo} />
        <Title></Title>
        <Input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          
        />
        <Input
          type="email"
          autoComplete="off"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          
        />
        <Input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
         
        />
        <Button type="submit">Sign Up</Button>
        <LoginText>
          Already have an account? <StyledLink to="/login">Login</StyledLink>
        </LoginText>
      </SignupForm>
    </SignupContainer>
  );
};

export default Signup;