import React from 'react';
import styled from 'styled-components';

const PortfolioContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  width: 100%;
  padding: 20px;
  background: #fff;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 2fr;
    
  
  }
`;

const Title = styled.h1`
  grid-column: 1 / -1;
  font-size: 2em;
  font-weight: bold;
  color: #333;

  @media (min-width: 768px) {
    grid-column: 1 / 2;
  }
`;

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 25px;

  @media (min-width: 768px) {
    grid-column: 2 / 3;
  }
`;

const PortfolioItem = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border: 1px solid #333;
  border-radius: 10px;
  text-decoration: none;
  color: #333;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Portfolio = () => {
  return (
    <PortfolioContainer>
      <Title>Portfolio</Title>
      <PortfolioGrid>
        <PortfolioItem href="https://github.com/Designrpros/Buddy.git">
          <h2>Buddy</h2>
          <p>SwiftUI</p>
          <p>GitHub Repository</p>
        </PortfolioItem>
        <PortfolioItem href="https://github.com/Designrpros/Designr.Pro.git">
          <h2>Designr.Pro</h2>
          <p>React</p>
          <p>GitHub Repository</p>
        </PortfolioItem>
        <PortfolioItem href="https://github.com/Designrpros/Baerum_Byggfornyelse.git">
          <h2>Baerum Byggfornyelse</h2>
          <p>React</p>
          <p>GitHub Repository</p>
        </PortfolioItem>
        <PortfolioItem href="https://apps.apple.com/no/app/mapr/id6450910273?l=nb&mt=12">
          <h2>Mapr</h2>
          <p>SwiftUI</p>
          <p>AppStore</p>
        </PortfolioItem>
      </PortfolioGrid>
    </PortfolioContainer>
  );
};

export default Portfolio;
