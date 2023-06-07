import React from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaPhone, FaHome } from 'react-icons/fa';

const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
  width: 100%;
  padding: 30px;
  background: #fff;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    margin-left: 20px;
  }
`;

const Title = styled.h1`
  font-size: 2em;
  font-weight: bold;
  color: #333;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 25px;
  @media (max-width: 600px) {
    margin-top: -10px;
    margin-left: 25px;
  }
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Icon = styled.span`
  margin-right: 10px;
  font-size: 1.2em;
`;

const About = () => {
  return (
    <AboutContainer>
      <Title>About</Title>
      <Content>
        <Item>
          <Icon><FaEnvelope /></Icon>
          <span>VegarBerentsen@gmail.com</span>
        </Item>
        <Item>
          <Icon><FaPhone /></Icon>
          <span>+47 485 96 755</span>
        </Item>
        <Item>
          <Icon><FaHome /></Icon>
          <span>Ovenbakken 31 A, Østerås, Norway</span>
        </Item>
      </Content>
    </AboutContainer>
  );
};

export default About;
