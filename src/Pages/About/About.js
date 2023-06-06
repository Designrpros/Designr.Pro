import React from 'react';
import styled from 'styled-components';
import { Routes, Route, Link } from 'react-router-dom';
import CV from './CV/CV.js';
import DesignrPro from './DesignrPro/DesignrPro.js';
import Gallery from './Gallery/Gallery.js';
import Resume from './CV/Resume.js';
import Resume1 from './Resume1/Resume1.js';

const ToolbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  
  border-bottom: 1px solid #ddd;
`;

const ToolbarLink = styled(Link)`
  flex-grow: 1;
  padding: 10px 0;
  border: none;
  background-color: ${props => props.selected ? '#333' : '#FCFCFE'};
  color: ${props => props.selected ? '#FCFCFE' : '#333'};
  cursor: pointer;
  text-align: center;
  text-decoration: none;

  &:hover {
    background-color: #333;
    color: #fff;
  }
`;

const AboutContainer = styled.div`
  width: 100%;
`;



const About = () => {
  return (
    <AboutContainer>
      <ToolbarContainer>
        <ToolbarLink to="/about/designrpro">
          About
        </ToolbarLink>
        <ToolbarLink to="/about/cv">
          CV
        </ToolbarLink>
        <ToolbarLink to="/about/gallery">
          Gallery
        </ToolbarLink>
        <ToolbarLink to="/about/resume1">
          Resume
        </ToolbarLink>
      </ToolbarContainer>
      <Routes>
        <Route path="designrpro" element={<DesignrPro />} />
        <Route path="cv" element={<CV />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="resume1" element={<Resume1 />} />
      </Routes>
      </AboutContainer>
  );
};

export default About;
