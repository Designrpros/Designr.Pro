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
      <Card to="/nomad" icon="home" title="Nomad"></Card>
      <Card to="/About/designrpro" icon="user" title="About"></Card>
      <Card to="/contact" icon="envelope" title="Contact"></Card>
      <Card to="/note" icon="note" title="Note"></Card>
      <Card to="/sketch" icon="envelope" title="Sketch"></Card>
      <Card to="/mindnode" icon="envelope" title="MindNode"></Card>
    </SliderContainer>
  );
};


export default Slider;
