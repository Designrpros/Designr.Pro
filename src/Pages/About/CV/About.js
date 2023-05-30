import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
  text-align: left;
`;

const Section = styled.section`
  width: 100%;
`;

const Title = styled.h2`
  margin-bottom: 10px;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Text = styled.p`
  width: 65%;
  text-align: left;
`;

const Keynotes = styled.ul`
  width: 35%;
  list-style: none;
  padding: 0;
  text-align: left;
`;

const ProgressBar = styled.div`
  background-color: #ddd;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 10px;
`;

const Progress = styled.div`
  background-color: #333;
  height: 20px;
  width: ${props => props.width || '50%'};
`;


const About = () => {
  return (
    <AboutContainer>
      <Section>
        <Title>About Me</Title>
        <Content>
          <Text>
            I am a web designer and developer with experience in building and customizing websites. I love to create unique and modern designs. I like making stuff and putting it on the internet
          </Text>
          <Keynotes>
                <li>
                    Web Development
                    <ProgressBar>
                    <Progress width="90%" />
                    </ProgressBar>
                </li>
                <li>
                    Graphic Design
                    <ProgressBar>
                    <Progress width="80%" />
                    </ProgressBar>
                </li>
                <li>
                    WordPress
                    <ProgressBar>
                    <Progress width="70%" />
                    </ProgressBar>
                </li>
                <li>
                    SEO
                    <ProgressBar>
                    <Progress width="60%" />
                    </ProgressBar>
                </li>
          </Keynotes>
        </Content>
      </Section>
    </AboutContainer>
  );
};

export default About;
