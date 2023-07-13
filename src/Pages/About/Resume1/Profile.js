import React from 'react';
import styled from 'styled-components';
import profileImage from './Profile.jpeg';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const ProfileCard = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #fff;
  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentContainer = styled.div`
  flex: 2;
  padding: 20px;
//   text-align: center;
`;

const ProfileImage = styled.img`
//   border-radius: 50%;
  width: 100%;
  height: 100%;
`;

const Name = styled.h1`
  margin-top: 20px;
`;

const Title = styled.h2`
  margin-top: 10px;
  color: #888;
`;

const Bio = styled.p`
  margin-top: 20px;
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;


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

const DownloadButton = styled.a`
  display: inline-block;
  background: #333;
  color: #fff;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  margin-right: 10px;
  &:hover {
    background: #444;
  }
`;


const Profile = () => {
    return (
      <ProfileCard>
        <ImageContainer>
          <ProfileImage src={profileImage} alt="Profile" />
        </ImageContainer>
        <ContentContainer>
          <Name>Vegar Berentsen</Name>
          <Title>Designr & Developer</Title>
          <Bio>
          I am a web designer and developer with experience in building and customizing websites. I love to create unique and modern designs. Am Currently Developing an app for macos and ios, called Mapr.
          </Bio>
          <SocialLinks>
            <DownloadButton href="/path/to/your/resume.pdf" download>Resume</DownloadButton>
            <StyledGithub />
            <StyledInstagram />
            <StyledLinkedin />
          </SocialLinks>
        </ContentContainer>
      </ProfileCard>
    );
  };
  
  

export default Profile;
