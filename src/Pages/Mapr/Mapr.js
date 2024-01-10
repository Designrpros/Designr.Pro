import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import MaprImage from './MaprImage.png';
import BackgroundImage from './background.jpg'; // Replace with your high-quality background image

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #333;
  }
`;

const Landing = styled.div`
  background: url(${BackgroundImage}) no-repeat center center fixed;
  background-size: cover;
  color: white;
  text-align: center;
`;

const Header = styled.header`
  padding: 40px 20px;
  background: rgba(0, 0, 0, 0.6); /* Semi-transparent overlay for readability */
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 0.5em;
`;

const Subtitle = styled.p`
  font-size: 1.2em;
  margin-bottom: 2em;
`;

const IntroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  background: rgba(255, 255, 255, 0.9); /* Light background for content */
  border-radius: 15px;
  margin: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 500px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const FeaturesSection = styled.section`
  background: rgba(0, 0, 0, 0.7);
  padding: 40px 20px;
  margin: 30px;
  border-radius: 15px;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  text-align: left;

  li {
    margin-bottom: 15px;
    font-size: 18px;
  }
`;

const TestimonialsSection = styled.section`
  padding: 40px 20px;
  background: rgba(255, 255, 255, 0.9);
  margin: 30px;
  border-radius: 15px;
`;

const Footer = styled.footer`
  background-color: #222;
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
