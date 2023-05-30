import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding: 0 20px;
  box-sizing: border-box;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
`;

const Content = styled.p`
  font-size: 1.2em;
  line-height: 1.6;
`;

const About = () => {
  return (
    <AboutContainer>
      <Title>About Designr.Pro</Title>
      <Content>
      Designr.Pro is developed using React in Visual Studio Code. It serves as the digital home for Vegar Berentsen, showcasing his skills, creativity, and dedication to the craft of web development. Beyond being a personal portfolio, Designr.Pro is also a test project, a playground for exploring the vast capabilities of React. It's a space where new ideas are born, tested, and refined, demonstrating the power of React in building dynamic and interactive web experiences.      </Content>
    </AboutContainer>
  );
};

export default About;
