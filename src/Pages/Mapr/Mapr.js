import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import MaprImage from './MaprImage.jpeg';
import Fist from './Fist.png'; // Placeholder for feature icons

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Courier New', Courier, monospace;
    background-color: #f0e4d7;
  }
`;

const Landing = styled.div`
  text-align: center;
  padding: 20px;
`;

const Header = styled.header`
  background-color: #008080;
  color: #fff;
  padding: 20px 0;
  border-bottom: 5px solid #f2b90c;
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 0.5em;
`;

const Subtitle = styled.p`
  font-size: 1.2em;
`;

const IntroSection = styled.section`
  background-color: #ff7e67;
  color: #fff;
  padding: 20px;
  margin-top: 20px;
`;

const ImageSection = styled.section`
  background-image: url(${MaprImage});
  background-size: cover;
  background-position: center;
  color: #fff;
  padding: 40px 20px;
  text-align: center;
`;

const FeaturesSection = styled.section`
  background-color: #f0e4d7;
  color: #333;
  padding: 20px;
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

const FeatureGroup = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const GroupTitle = styled.h3`
  color: #6b8e23;
  margin-bottom: 10px;
`;

const FeatureBullet = styled.li`
  margin-bottom: 10px;
  font-size: 16px;
  display: flex;
  align-items: center;

  img {
    width: 15px;
    margin-right: 10px;
  }
`;

const FeatureGroupGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureImage = styled.img`
  width: 100%;
  max-width: 150px;
  margin: 0 auto;
`;

const TestimonialsSection = styled.section`
  background-color: #008080;
  color: #fff;
  padding: 20px 0;
  margin-top: 20px;
`;

const Footer = styled.footer`
  background-color: #333;
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
          <div>
            <h2>Visualize Your Projects Geographically</h2>
            <p>Mapr offers a unique, map-based interface to manage projects across multiple sites, providing a spatial context to your project management.</p>
          </div>
        </IntroSection>

        <ImageSection />

        <FeaturesSection>
  <FeatureGroupGrid>
    <FeatureGroup>
      <GroupTitle>All Project Map View</GroupTitle>
      <FeatureImage src={Fist} alt="Map View" />
      <ul>
        <FeatureBullet>Project Overview</FeatureBullet>
        <FeatureBullet>Nearby stores</FeatureBullet>
        <FeatureBullet>Time estimate</FeatureBullet>
        <FeatureBullet>Get directions</FeatureBullet>
      </ul>
    </FeatureGroup>

    <FeatureGroup>
      <GroupTitle>Project Management</GroupTitle>
      <FeatureImage src={Fist} alt="Project Management" />
      <ul>
        <FeatureBullet>Contact information</FeatureBullet>
        <FeatureBullet>Participants</FeatureBullet>
        <FeatureBullet>Project description</FeatureBullet>
        <FeatureBullet>Storage</FeatureBullet>
        <FeatureBullet>Gallery</FeatureBullet>
        <FeatureBullet>Time Tracker</FeatureBullet>
        <FeatureBullet>Materials Management</FeatureBullet>
        <FeatureBullet>Checklists</FeatureBullet>
        <FeatureBullet>Project Summary and save as PDF</FeatureBullet>
      </ul>
    </FeatureGroup>

    <FeatureGroup>
      <GroupTitle>Contacts Information</GroupTitle>
      <FeatureImage src={Fist} alt="Contacts Information" />
      <ul>
        <FeatureBullet>View all contacts in its own tab</FeatureBullet>
        <FeatureBullet>Call, message, mail, get directions</FeatureBullet>
        <FeatureBullet>Sync contacts locally to Apple contacts</FeatureBullet>
      </ul>
    </FeatureGroup>

    <FeatureGroup>
      <GroupTitle>Custom Checklist</GroupTitle>
      <FeatureImage src={Fist} alt="Custom Checklist" />
      <ul>
        <FeatureBullet>Create custom checklists and import into a project</FeatureBullet>
      </ul>
    </FeatureGroup>

    <FeatureGroup>
      <GroupTitle>Calendar</GroupTitle>
      <FeatureImage src={Fist} alt="Calendar" />
      <ul>
        <FeatureBullet>View Each day</FeatureBullet>
        <FeatureBullet>View the entire month</FeatureBullet>
        <FeatureBullet>Sync calendar to Apple Calendar</FeatureBullet>
      </ul>
    </FeatureGroup>

    <FeatureGroup>
      <GroupTitle>Calculators</GroupTitle>
      <FeatureImage src={Fist} alt="Calculators" />
      <ul>
        <FeatureBullet>Heating Cable Calculator</FeatureBullet>
        <FeatureBullet>Ohms Law Calculator</FeatureBullet>
        <FeatureBullet>Voltage Drop Calculator</FeatureBullet>
        <FeatureBullet>Diagonal Calculator</FeatureBullet>
        <FeatureBullet>Right Angle Triangle Calculator</FeatureBullet>
        <FeatureBullet>Staircase Calculator</FeatureBullet>
        <FeatureBullet>Pipe Flow Rate Calculator</FeatureBullet>
        <FeatureBullet>Water Pressure Drop Calculator</FeatureBullet>
        <FeatureBullet>Concrete Calculator</FeatureBullet>
        <FeatureBullet>Tiling Calculator</FeatureBullet>
        <FeatureBullet>Paint Calculator</FeatureBullet>
        <FeatureBullet>Wallpaper Calculator</FeatureBullet>
      </ul>
    </FeatureGroup>
  </FeatureGroupGrid>
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
