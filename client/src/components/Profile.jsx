import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import reactLogo from './reactLogo.png'; // Ensure you have the logo image in the correct path

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
`;

const ProfileCard = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 40px;
  width: 400px;
  text-align: center;
`;

const Logo = styled.img`
  width: 100px;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
  font-family: 'Arial', sans-serif;
`;

const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Button = styled.button`
  padding: 12px 20px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background: #1877f2;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #166fe5;
  }
`;

const BackButton = styled(Button)`
  background: #333;
  &:hover {
    background: #555;
  }
`;

const Profile = () => {
  return (
    <ProfileContainer>
      <ProfileCard>
        <Logo src={reactLogo} alt="Logo" />
        <Title>Profile Page</Title>
        <ProfileContent>
          <Link to="/resetPassword/:token">
            <Button>Reset Password</Button>
          </Link>
          <Link to="/">
            <BackButton>Go Back to Home</BackButton>
          </Link>
        </ProfileContent>
      </ProfileCard>
    </ProfileContainer>
  );
};

export default Profile;
