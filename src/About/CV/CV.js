import React from 'react';
import styled from 'styled-components';
import profileImage from './Profile.jpeg';
import About from './About';
import Resume from './Resume';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Skills from './Skills';
import Contact from './Contact';

const StyledGithub = styled(FaGithub)`
  color: black;
  margin-right: 15px;
  font-size: 1.5em;

  &:hover {
    color: #ddd;
  }
`;

const StyledInstagram = styled(FaInstagram)`
  color: black;
  margin-right: 15px;
  font-size: 1.5em;

  &:hover {
    color: #ddd;
  }
`;

const StyledLinkedin = styled(FaLinkedin)`
  color: black;
  margin-right: 15px;
  font-size: 1.5em;

  &:hover {
    color: #ddd;
  }
`;

const CVContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ProfileCard = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
  text-align: center;
`;


const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
`;

const Name = styled.h1`
  margin-top: 20px;
`;

const Title = styled.h2`
  margin-top: 10px;
  color: #888;
`;

const CV = () => {
  return (
    <CVContainer>
      <ProfileCard>
        <ProfileImage src={profileImage} alt="Profile" />
        <ProfileInfo>
          <Name>Vegar Berentsen</Name>
          <Title>Designr & Developer</Title>
          <div>
            <StyledGithub />
            <StyledInstagram />
            <StyledLinkedin />
          </div>
        </ProfileInfo>
      </ProfileCard>
      <br />
      <About />
      <br />
      <Resume />
      <br />
      <Skills />
      <br />
      <Contact />
    </CVContainer>
  );
};

export default CV;
