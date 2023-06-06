import React from 'react';
import styled from 'styled-components';

const ResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  background: #fff;
  
`;

const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
  @media (max-width: 600px) {
    flex-direction: column;
    padding: 10px
  }
//   border-bottom: 1px solid #333f;
`;

const Column = styled.div`
  flex: 1;
  display: flex;
//   justify-content: center;
//   align-items: center;
  font-size: 2em;
  font-weight: bold;
  color: #333;
  padding-bottom: 10px;
  
`;

const ContentColumn = styled.div`
  flex: 2;
  padding-left: 20px;
  
`;

const ResumeItem = styled.div`
  margin-bottom: 20px;
`;

const ResumeTitle = styled.h2`
  margin: 0;
`;

const ResumeDate = styled.h3`
  margin: 0;
  color: #888;
`;

const ResumeDescription = styled.p`
`;

const Resume2 = () => {
  return (
    <ResumeContainer>
      <SectionContainer>
        <Column>Education</Column>
        <ContentColumn>
        <ResumeItem>
            <ResumeTitle>Tjenestedesign</ResumeTitle>
            <ResumeDate>2022 - 2023</ResumeDate>
            <ResumeDescription>Høyskolen Kristiania</ResumeDescription>
          </ResumeItem>
        <ResumeItem>
            <ResumeTitle>Påbygg, Generell Studiekompetanse</ResumeTitle>
            <ResumeDate>2019 - 2020</ResumeDate>
            <ResumeDescription>Bjørknes Privatskole</ResumeDescription>
          </ResumeItem>
        <ResumeItem>
            <ResumeTitle>Fagbrev Elektrofag, BM</ResumeTitle>
            <ResumeDate>2015</ResumeDate>
            <ResumeDescription>Bærum Elektropartner AS</ResumeDescription>
          </ResumeItem>
          <ResumeItem>
            <ResumeTitle>Electrician</ResumeTitle>
            <ResumeDate>2010 - 2012</ResumeDate>
            <ResumeDescription>Rud Vgs</ResumeDescription>
          </ResumeItem>
          {/* Add more ResumeItems as needed */}
        </ContentColumn>
      </SectionContainer>
      <SectionContainer>
        <Column>Work</Column>
        <ContentColumn>
          <ResumeItem>
            <ResumeTitle>Job Title 1</ResumeTitle>
            <ResumeDate>2020 - Present</ResumeDate>
            <ResumeDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</ResumeDescription>
          </ResumeItem>
          <ResumeItem>
            <ResumeTitle>Job Title 2</ResumeTitle>
            <ResumeDate>2018 - 2020</ResumeDate>
            <ResumeDescription>Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.</ResumeDescription>
          </ResumeItem>
          {/* Add more ResumeItems as needed */}
        </ContentColumn>
      </SectionContainer>
    </ResumeContainer>
  );
};

export default Resume2;
