import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import MaprImage from './MaprImage.jpeg';
import Fist from './Fist.png';


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
  background-color: #7d7d7d; // Retro gray background
  color: #fff; // White text for better readability
  padding: 20px;
  margin-top: 20px;
  border-radius: 0;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  text-align: left;

  li {
    margin-bottom: 15px;
    font-size: 16px;
    border-bottom: 1px solid #eaeaea; // Light gray border for each item
    padding-bottom: 10px;

    &:last-child {
      border-bottom: none;
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
const ImageSection = styled.section`
  background-image: url(${MaprImage});
  background-size: cover;
  background-position: center;
  color: #fff;
  padding: 40px 20px;
  text-align: center;
`;
  
const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  color: #fff;

  &:nth-child(odd) {
    background-color: #6b8e23; // Olive green for odd items
  }

  &:nth-child(even) {
    background-color: #8b4513; // Saddle brown for even items
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const FeatureImage = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 20px;
  border-radius: 50%;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const FeatureText = styled.div`
  flex: 1;
`;

const Mapr = () => {

  const features = [
    { img: Fist, title: "Contact Information", desc: "Easily store and manage project contacts." },
    { img: Fist, title: "Project Description", desc: "Keep detailed descriptions and objectives." },
    { img: Fist, title: "Time Tracking", desc: "Monitor time spent on tasks for productivity analysis." },
    { img: Fist, title: "Materials Management", desc: "Track and budget project materials." },
    { img: Fist, title: "Task Checklist", desc: "Ensure all project tasks are completed." },
    { img: Fist, title: "Project Summary", desc: "Quick snapshot of project status." },
    { img: Fist, title: "Participants", desc: "Add team members to projects." },
    { img: Fist, title: "Nearby Stores", desc: "Find local suppliers for essential materials." },
    { img: Fist, title: "Custom Checklists", desc: "Tailor checklists to your project needs." },
    { img: Fist, title: "Calendar", desc: "View project timelines and deadlines." },
    { img: Fist, title: "Calculators", desc: "Access essential tools like the Norwegian Cable Calculator." }
  ];
  

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
        <ImageSection>
        </ImageSection>

        <FeaturesSection>
          <h2>Key Features</h2>
          {features.map((feature, index) => (
            <FeatureItem key={index}>
              <FeatureImage src={feature.img} alt={feature.title} />
              <FeatureText>
                <strong>{feature.title}:</strong> {feature.desc}
              </FeatureText>
            </FeatureItem>
          ))}
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
