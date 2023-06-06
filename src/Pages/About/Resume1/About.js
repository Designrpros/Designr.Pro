import React from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaPhone, FaHome } from 'react-icons/fa';

const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
  width: 100%;
  padding: 20px;
  background: #fff;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
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
          <span>vegar@designr.pro</span>
        </Item>
        <Item>
          <Icon><FaPhone /></Icon>
          <span>+47 123 45 678</span>
        </Item>
        <Item>
          <Icon><FaHome /></Icon>
          <span>123 Street, City, Country</span>
        </Item>
      </Content>
    </AboutContainer>
  );
};

export default About;
