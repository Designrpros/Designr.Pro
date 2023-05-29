import React, { useState } from 'react';
import styled from 'styled-components';
import CV from './CV/CV'

const SegmentControllerContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  padding: 0;
  margin: 20px; // corrected here
  width: 100%;
`;



const SegmentButton = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: ${props => props.selected ? '#333' : '#ddd'};
  color: ${props => props.selected ? '#fff' : '#333'};
  cursor: pointer;

  &:hover {
    background-color: #333;
    color: #fff;
  }
`;

const CVContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const AboutContainer = styled.div`
  width: 100%;
`;

const About = () => {
  const [selectedSegment, setSelectedSegment] = useState('designr.pro');

  return (
    <AboutContainer>
      <SegmentControllerContainer>
        <SegmentButton selected={selectedSegment === 'designr.pro'} onClick={() => setSelectedSegment('designr.pro')}>
          Designr.Pro
        </SegmentButton>
        <SegmentButton selected={selectedSegment === 'cv'} onClick={() => setSelectedSegment('cv')}>
          CV
        </SegmentButton>
      </SegmentControllerContainer>
      <CVContainer>
        {selectedSegment === 'designr.pro' ? (
          <>
            <h2>About Designr.Pro</h2>
            <p>Designr.Pro is a web design company based in California, USA. We specialize in modern, mobile-ready websites that help you reach all of your marketing goals. 
              We also offer music writing, advertising, and game development services.</p>
          </>
        ) : (
          <>
            <CV />
          </>
        )}
      </CVContainer>
    </AboutContainer>
  );
};

export default About;
