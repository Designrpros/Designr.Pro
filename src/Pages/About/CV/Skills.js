import React from 'react';
import styled from 'styled-components';

const SkillsContainer = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr); // change to two columns
  gap: 20px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  grid-column: span 2; // span across two columns
  text-align: left;
`;

const Section = styled.div`
`;

const SectionTitle = styled.h3`
  margin-bottom: 10px;
  text-align: left;
`;

const Skill = styled.div`
  margin-bottom: 10px;
`;

const SkillName = styled.span`
  font-weight: bold;
`;

const SkillLevel = styled.span`
  float: right;
`;

const Skills = () => {
  return (
    <SkillsContainer>
      <Title>My Skills</Title>
      <Section>
        <SectionTitle>DESIGN</SectionTitle>
        <Skill><SkillName>Web Design</SkillName></Skill>
        <Skill><SkillName>Write Music</SkillName></Skill>
        <Skill><SkillName>Photoshop</SkillName></Skill>
        <Skill><SkillName>Graphic Design</SkillName></Skill>
      </Section>
      <Section>
        <SectionTitle>LANGUAGES</SectionTitle>
        <Skill><SkillName>English</SkillName></Skill>
        <Skill><SkillName>German</SkillName></Skill>
        <Skill><SkillName>Italian</SkillName></Skill>
        <Skill><SkillName>French</SkillName></Skill>
      </Section>
      <Section>
        <SectionTitle>CODING</SectionTitle>
        <Skill><SkillName>WordPress</SkillName><SkillLevel>90%</SkillLevel></Skill>
        <Skill><SkillName>PHP / MYSQL</SkillName><SkillLevel>75%</SkillLevel></Skill>
        <Skill><SkillName>Angular / JavaScript</SkillName><SkillLevel>85%</SkillLevel></Skill>
        <Skill><SkillName>HTML / CSS</SkillName><SkillLevel>95%</SkillLevel></Skill>
      </Section>
      <Section>
        <SectionTitle>KNOWLEDGE</SectionTitle>
        <Skill><SkillName>Website hosting</SkillName></Skill>
        <Skill><SkillName>iOS and android apps</SkillName></Skill>
        <Skill><SkillName>Create logo design</SkillName></Skill>
        <Skill><SkillName>Design for print</SkillName></Skill>
        <Skill><SkillName>Modern and mobile-ready</SkillName></Skill>
        <Skill><SkillName>Advertising services include</SkillName></Skill>
        <Skill><SkillName>Graphics and animations</SkillName></Skill>
        <Skill><SkillName>Search engine marketing</SkillName></Skill>
      </Section>
    </SkillsContainer>
  );
};

export default Skills;
