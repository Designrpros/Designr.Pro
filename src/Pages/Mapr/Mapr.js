import React from 'react';
import styled from 'styled-components';
import MaprImage from './MaprImage.png';

const Landing = styled.div`
  text-align: center;
  padding: 20px;
`;

const Header = styled.header`
  background-color: #f8f9fa;
  padding: 20px 0;
`;

const Title = styled.h1`
  color: #333;
`;

const IntroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-right: 20px;
  }
`;

const FeaturesSection = styled.section`
  text-align: left;
`;

const TestimonialsSection = styled.section`
  background-color: #e9ecef;
  padding: 20px 0;
`;

const Footer = styled.footer`
  background-color: #343a40;
  color: white;
  padding: 10px 0;
`;

const Mapr = () => {
  return (
    <Landing>
      <Header>
        <Title>Mapr - Project Management, Redefined</Title>
        <p>Revolutionizing project management for Tradesmen with a map-based interface.</p>
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
        <ul>
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
        </ul>
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
  );
};

export default Mapr;
