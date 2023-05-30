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

const Spacer = styled.div`
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
`;


const MainContent = () => {
  return (
    <Main>
      <div style={{ flex: 1 }}>
        <h1>Welcome to <br /><HighlightedText>Designr<br />.Pro</HighlightedText></h1>
      </div>
      <div style={{ flex: 1 }}>
        <iframe 
          src="https://embed.lottiefiles.com/animation/73347" 
          style={{ width: '100%', height: '200px', border: 'none' }} 
          allowFullScreen
        />
      </div>
      <Spacer height="2rem" />
      <div>
        <h2>Pages</h2>
        <Slider />
      </div>
    </Main>
  );
};  


export default MainContent;
