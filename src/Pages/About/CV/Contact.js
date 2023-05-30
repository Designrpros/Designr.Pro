import React from 'react';
import styled from 'styled-components';
import MapComponent from './Map';

const ContactContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 10px;
  padding: 40px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 560px;
`;

const InfoAndFormContainer = styled.div`
  width: 50%;
`;

const MapContainer = styled.div`
  width: 50%;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  text-align: left;
`;

const ContactInfo = styled.div`
  margin-bottom: 20px;
  text-align: left;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  padding: 40px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 560px;
  text-align: center;
  margin-top: 20px;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  width: 100%;
`;

const TextArea = styled.textarea`
  margin-bottom: 10px;
  padding: 10px;
  width: 100%;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const GetInTouch = () => {
  return (
    <>
      <ContactContainer>
        <Title>Get in Touch</Title>
        <InfoAndFormContainer>
          <ContactInfo>
            <p>Address . . . . . California, USA</p>
            <p>Email . . . . . . adlard@example.com</p>
            <p>Phone . . . . . +123 654 78900</p>
            <p>Freelance . . . . . Available</p>
          </ContactInfo>
        </InfoAndFormContainer>
        <MapContainer>
          <MapComponent />
        </MapContainer>
      </ContactContainer>
      <ContactForm>
        <Title>Contact Form</Title>
        <Input type="text" placeholder="Full Name" />
        <Input type="email" placeholder="Email" />
        <TextArea placeholder="Your Message" />
        <Button>SEND MESSAGE</Button>
      </ContactForm>
    </>
  );
};

export default GetInTouch;
