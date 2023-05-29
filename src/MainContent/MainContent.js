import React from 'react';
import styled from 'styled-components';
import Slider from './Slider';

const Main = styled.main`
  padding: 2rem;
  color: #333;
`;

const HighlightedText = styled.span`
  font-weight: bold;
  font-size: 70px;
  font-family: rubik;

`;

// const Spacer = styled.div`
//   width: ${({ width }) => width || 'auto'};
//   height: ${({ height }) => height || 'auto'};
// `;



const MainContent = () => {
  return (
    <Main>
      <h1>Welcome to <br /><HighlightedText>Designr.Pro</HighlightedText></h1>
      <br />
      <div>
        <h2>Pages</h2>
        <Slider />
      </div>
      <div>
        <h2>Map</h2>
        <Slider />
      </div>

    </Main>
  );
};

export default MainContent;
