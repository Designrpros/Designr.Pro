import React from 'react';
import styled from 'styled-components';

const ResumeContainer = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`;

const SectionTitle = styled.h3`
  margin-bottom: 20px;
  text-align: center;
`;

const Timeline = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); // change to two columns
  position: relative;
  max-width: 1200px;
  margin: 0 auto;

  &:after {
    content: '';
    position: absolute;
    width: 6px;
    background-color: #ddd;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
  }
`;

const Experience = styled.div`
  padding: 20px 40px;
  position: center;
  background-color: inherit;
  width: 80%; // change to 100%
`;
const JobTitle = styled.h4`
  margin-bottom: 5px;
`;

const JobDetails = styled.p`
  margin-bottom: 10px;
`;

const Resume = () => {
    return (
      <ResumeContainer>
        <Title>Resume</Title>
        <Timeline>
          <div>
            <SectionTitle>Work Experience</SectionTitle>
            <Experience>
              <JobTitle>2013 Present:<br /> Art Director at Facebook Inc.</JobTitle>
              <JobDetails>Collaborate with creative and development teams on the execution of ideas.</JobDetails>
            </Experience>
            <Experience>
              <JobTitle>2011 - 2012: Front-end Developer at Google Inc.</JobTitle>
              <JobDetails>Monitored technical aspects of the front-end delivery for several projects.</JobDetails>
            </Experience>
            <Experience>
              <JobTitle>2009 - 2010: Senior Developer at Abc Inc.</JobTitle>
              <JobDetails>Optimize website performance using latest technology.</JobDetails>
            </Experience>
          </div>
          <div>
            <SectionTitle>Education</SectionTitle>
            <Experience>
              <JobTitle>2006 - 2008: Art University, New York</JobTitle>
              <JobDetails>Bachelor's Degree in Computer Science ABC Technical Institute, Jefferson, Missouri</JobDetails>
            </Experience>
            <Experience>
              <JobTitle>2005 - 2006: Programming Course, Paris</JobTitle>
              <JobDetails>Coursework - Git, WordPress, Javascript, iOS, Android.</JobDetails>
            </Experience>
            <Experience>
              <JobTitle>2004 - 2005: Web Design Course, London</JobTitle>
              <JobDetails>Converted Photoshop layouts to web pages using HTML, CSS, and JavaScript</JobDetails>
            </Experience>
          </div>
        </Timeline>
      </ResumeContainer>
    );
  };
  

export default Resume;
