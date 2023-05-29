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
      <Card to="/nomad" icon="home" title="Nomad">This is the Nomad card</Card>
      <Card to="/about" icon="user" title="User">This is the user card</Card>
      <Card to="/contact" icon="envelope" title="Contact">This is the contact card</Card>
      <Card to="/note" icon="note" title="Note">This is the contact card</Card>
      <Card to="/sketch" icon="envelope" title="Sketch">This is the contact card</Card>
      <Card to="/mindnode" icon="envelope" title="MindNode">This is the contact card</Card>
    </SliderContainer>
  );
};


export default Slider;
