import React, { useState } from 'react';
import styled from 'styled-components';
import About from './About.js';
import Resume2 from './Resume2.js';
import Skills from './Skills';
import Portfolio from './Portfolio.js';
import Profile from './Profile.js';

const CVContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const SegmentController = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 20px 0;
  background: #fff;
  flex-wrap: wrap;
`;

const SegmentButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2em;
  color: ${props => props.selected ? '#333' : '#333'};
  border-bottom: ${props => props.selected ? '2px solid #333' : 'none'};
  &:hover {
    color: #344;
  }
  @media (max-width: 600px) {
    font-size: 1em;
    margin-bottom: 10px;
  }
`;



const Resume1 = () => {
  const [selectedSegment, setSelectedSegment] = useState('all');

  const renderSegment = () => {
    switch (selectedSegment) {
      case 'all':
        return (
          <>
            <About />
            <Resume2 />
            <Skills />
            <Portfolio />
          </>
        );
      case 'about':
        return <About />;
      case 'resume':
        return <Resume2 />;
      case 'skills':
        return <Skills />;
      case 'portfolio':
        return <Portfolio  />;
      default:
        return null;
    }
  };

  return (
    <CVContainer>
      <Profile />
      <SegmentController>
        <SegmentButton selected={selectedSegment === 'all'} onClick={() => setSelectedSegment('all')}>All</SegmentButton>
        <SegmentButton selected={selectedSegment === 'about'} onClick={() => setSelectedSegment('about')}>About</SegmentButton>
        <SegmentButton selected={selectedSegment === 'resume'} onClick={() => setSelectedSegment('resume')}>Resume</SegmentButton>
        <SegmentButton selected={selectedSegment === 'skills'} onClick={() => setSelectedSegment('skills')}>Skills</SegmentButton>
        <SegmentButton selected={selectedSegment === 'portfolio'} onClick={() => setSelectedSegment('portfolio')}>Portfolio</SegmentButton>
      </SegmentController>
      {renderSegment()}
    </CVContainer>
  );
};

export default Resume1;
