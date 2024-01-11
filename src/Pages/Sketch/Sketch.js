import React from 'react';
import styled from 'styled-components';
import MaprHeaderImage from './MaprHeaderImage.jpeg'; // Replace with your header image path
import Fist from './Fist.png'; // Replace with your logo image path

const StyledLandingPage = styled.div`
  font-family: 'Arial', sans-serif;
`;

const Header = styled.header`
  background-image: url(${MaprHeaderImage});
  background-size: cover;
  color: white;
  text-align: center;
  padding: 60px 20px;
`;

const Logo = styled.img`
  max-width: 150px;
  margin-bottom: 20px;
`;

const MainTitle = styled.h1`
  font-size: 2.5em;
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: 1.2em;
  margin-top: 10px;
`;

const FeaturesSection = styled.section`
  padding: 40px 20px;
  background: #f8f8f8;
  text-align: center;
`;

const Feature = styled.div`
  margin-bottom: 30px;
`;

const FeatureTitle = styled.h2`
  color: #333;
  font-size: 1.8em;
`;

const FeatureDescription = styled.p`
  color: #666;
  font-size: 1em;
  max-width: 600px;
  margin: 10px auto;
`;

const MaprLandingPage = () => {
  return (
    <StyledLandingPage>
      <Header>
        <Logo src={Fist} alt="Mapr Logo" />
        <MainTitle>Mapr - Project Management, Redefined</MainTitle>
        <Subtitle>Revolutionizing project management for Tradesmen with a map-based interface.</Subtitle>
      </Header>

      <FeaturesSection>
        <Feature>
          <FeatureTitle>All Project Map View</FeatureTitle>
          <FeatureDescription>Visualize all your projects geographically to manage and track with ease.</FeatureDescription>
        </Feature>

        <Feature>
          <FeatureTitle>Project Management Tools</FeatureTitle>
          <FeatureDescription>Comprehensive tools including time tracking, materials management, and custom checklists.</FeatureDescription>
        </Feature>

        <Feature>
          <FeatureTitle>Seamless Integration</FeatureTitle>
          <FeatureDescription>Sync with Apple Contacts and Calendar for streamlined project management.</FeatureDescription>
        </Feature>

        {/* Add more features as needed */}
      </FeaturesSection>

      {/* Additional sections like Testimonials, Contact Info, etc., can be added here */}
    </StyledLandingPage>
  );
};

export default MaprLandingPage;
