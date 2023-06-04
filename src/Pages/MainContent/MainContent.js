import React from 'react';
import styled from 'styled-components';
import Slider from './Slider';

const Main = styled.main`
  padding: 2rem;
  color: #333;
  height: 83vh;
`;

const Title1 = styled.div`
  font-weight: bold;
  // font-size: 70px;
  font-family: New York;
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const HighlightedText = styled.span`
  font-weight: bold;
  font-size: 70px;
  font-family: New York;
  text-align: center;
`;

const Content = styled.div`
  font-weight: bold;
  // font-size: 70px;
  font-family: New York;
  position: flex;
`;

const Spacer = styled.div`
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
`;


const MainContent = () => {
  return (
    <Main>
      <Title1>
        <h1>Welcome to <br /><HighlightedText>Designr<br />.Pro</HighlightedText></h1>
      </Title1>
      <Spacer height="55vh" />
      <Content>
        {/* <h2>Pages</h2> */}
        <Slider />
      </Content>
    </Main>
  );
};  

export default MainContent;
