import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const SliderContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  padding: 20px;
  gap: 20px;
  scroll-snap-type: x mandatory;
`;



const Slider = () => {
  return (
    <SliderContainer>
      <Card to="/" icon="home" title="Home">This is the home card</Card>
      <Card to="/about" icon="user" title="User">This is the user card</Card>
      <Card to="/contact" icon="envelope" title="Contact">This is the contact card</Card>
    </SliderContainer>
  );
};


export default Slider;
