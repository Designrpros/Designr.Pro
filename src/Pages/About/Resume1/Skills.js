import React from 'react';
import styled from 'styled-components';

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  background: #fff;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const TextContainer = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-size: 2em;
  font-weight: bold;
  color: #333;
`;

const Description = styled.p`
  margin-bottom: 20px;
  padding: 0 10px;
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  flex: 2;
`;

const SkillItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const SkillName = styled.span`
  font-size: 1.2em;
  color: #333;
  flex: 1;
`;

const SkillBarContainer = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  padding-left: 20px;
`;

const SkillBarBackground = styled.span`
  display: block;
  height: 20px;
  background: #ddd;
  width: 100%;
  border-radius: 10px;
  position: relative;
`;

const SkillBar = styled.span`
  display: block;
  height: 20px;
  background: #333;
  width: ${props => props.width};
  border-radius: 10px;
  position: absolute;
  left: 0;
  top: 0;
`;

const Skills = () => {
  return (
    <SkillsContainer>
      <TextContainer>
        <Title>Skills</Title>
        {/* <Description>The main skill sets outline the variety of skills performed during my journey as a Web and MacOS Developer.</Description> */}
      </TextContainer>
      <SkillsList>
        <SkillItem>
          <SkillName>ChatGPT</SkillName>
          <SkillBarContainer>
            <SkillBarBackground>
              <SkillBar width="85%" />
            </SkillBarBackground>
          </SkillBarContainer>
        </SkillItem>
        <SkillItem>
          <SkillName>SwiftUI</SkillName>
          <SkillBarContainer>
            <SkillBarBackground>
              <SkillBar width="70%" />
            </SkillBarBackground>
          </SkillBarContainer>
        </SkillItem>
        <SkillItem>
          <SkillName>React</SkillName>
          <SkillBarContainer>
            <SkillBarBackground>
              <SkillBar width="80%" />
            </SkillBarBackground>
          </SkillBarContainer>
        </SkillItem>
        <SkillItem>
          <SkillName>UX Design</SkillName>
          <SkillBarContainer>
            <SkillBarBackground>
              <SkillBar width="70%" />
            </SkillBarBackground>
          </SkillBarContainer>
        </SkillItem>
      </SkillsList>
    </SkillsContainer>
  );
};

export default Skills;
