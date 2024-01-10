import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import MaprImage from './MaprImage.png';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Courier New', Courier, monospace; // Retro-style font
    background-color: #f0e4d7; // Vintage paper-like background color
  }
`;

const Landing = styled.div`
  text-align: center;
  padding: 20px;
`;

const Header = styled.header`
  background-color: #008080; // Teal, popular in vintage designs
  color: #fff;
  padding: 20px 0;
  border-bottom: 5px solid #f2b90c; // Mustard yellow border
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 0.5em;
`;

const Subtitle = styled.p`
  font-size: 1.2em;
`;

const IntroSection = styled.section`
  background-color: #ff7e67; // Soft red, typical of the 60s-80s
  color: #fff;
  padding: 20px;
  margin-top: 20px;
`;

const Image = styled.img`
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;
  border: 5px solid #fff; // White border for the image
`;

const FeaturesSection = styled.section`
  background-color: #f2b90c; // Mustard yellow background
  color: #000;
  padding: 20px;
  margin-top: 20px;
  border-radius: 0; // Removed rounded borders
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  text-align: left;

  li {
    margin-bottom: 15px;
    font-size: 16px;
    border-bottom: 1px solid #333; // Adding a subtle border for each item
    padding-bottom: 10px;

    &:last-child {
      border-bottom: none; // No border for the last item
    }
  }
`;

const TestimonialsSection = styled.section`
  background-color: #008080; // Teal background
  color: #fff;
  padding: 20px 0;
  margin-top: 20px;
`;

const Footer = styled.footer`
  background-color: #333; // Dark footer for contrast
  color: white;
  padding: 20px 0;
  margin-top: 30px;
`;

const Mapr = () => {
  return (
    <>
      <GlobalStyle />
      <Landing>
        <Header>
          <Title>Mapr - Project Management, Redefined</Title>
          <Subtitle>Revolutionizing project management for Tradesmen with a map-based interface.</Subtitle>
        </Header>

        <IntroSection>
          <Image src={MaprImage} alt="Mapr Screenshot" />
          <div>
            <h2>Visualize Your Projects Geographically</h2>
            <p>Mapr offers a unique, map-based interface to manage projects across multiple sites, providing a spatial context to your project management.</p>
          </div>
        </IntroSection>

        <FeaturesSection>
          <h2>Key Features</h2>
          <FeatureList>
          <li><strong>Contact Information:</strong> Easily store and manage project contacts.</li>
          <li><strong>Project Description:</strong> Keep detailed descriptions and objectives.</li>
          <li><strong>Time Tracking:</strong> Monitor time spent on tasks for productivity analysis.</li>
          <li><strong>Materials Management:</strong> Track and budget project materials.</li>
          <li><strong>Task Checklist:</strong> Ensure all project tasks are completed.</li>
          <li><strong>Project Summary:</strong> Quick snapshot of project status.</li>
          <li><strong>Participants:</strong> Add team members to projects.</li>
          <li><strong>Nearby Stores:</strong> Find local suppliers for essential materials.</li>
          <li><strong>Custom Checklists:</strong> Tailor checklists to your project needs.</li>
          <li><strong>Calendar:</strong> View project timelines and deadlines.</li>
          <li><strong>Calculators:</strong> Access essential tools like the Norwegian Cable Calculator.</li>
        </FeatureList>
        </FeaturesSection>

        <TestimonialsSection>
          <h2>What Our Users Say</h2>
          <blockquote>
            "Clearly made by a tradesman! Convenient, easy to use, and keeps getting better with every update. It's free - doesn't get much better."
          </blockquote>
          <p>- A Satisfied User</p>
        </TestimonialsSection>

        <Footer>
          <p>© 2024 Mapr. All rights reserved.</p>
        </Footer>
      </Landing>
    </>
  );
};

export default Mapr;
