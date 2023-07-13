import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';

const FormContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
//   gap: 20px;
  width: 100%;
  padding: 30px;
  background: #fff;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Title = styled.h1`
  font-size: 2em;
  font-weight: bold;
  color: #333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 20px;
  margin-top: 30px;
`;

const Input = styled.input`
  padding: 20px;
  margin-bottom: 20px;
  border: 2px solid #ccc;
  border-radius: 4px;
//   background-color: #FBF7F6;
  transition: background-color 0.3s ease;

  &:focus {
    outline: none;
    background-color: #FBF7F6;
    border-color: #555;
  }
`;

const TextArea = styled.textarea`
  padding: 20px;
  height: 100px;
  margin-bottom: 20px;
  border: 2px solid #ccc;
  border-radius: 4px;
//   background-color: #FBF7F6;
  transition: background-color 0.3s ease;

  &:focus {
    outline: none;
    background-color: #FBF7F6;
    border-color: #555;
  }
`;

const Button = styled.button`
  padding: 20px;
  background-color: #555;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }
`;


const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
  
    emailjs.send('service_5rn7vwb', 'template_8i03nto', {
      name: name,
      email: email,
      message: message
    }, 'qBalOK5z0utTf94im')
    .then((response) => {
       console.log('SUCCESS!', response.status, response.text);
       setName("");
       setEmail("");
       setMessage("");
    }, (err) => {
       console.log('FAILED...', err);
    });
  };
  

  return (
    <FormContainer>
      <Title>Contact</Title>
      <Form onSubmit={handleSubmit}>
        <Input id="name" type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} required />
        <Input id="email" type="email" placeholder="Your Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <TextArea id="message" placeholder="Your Message" value={message} onChange={e => setMessage(e.target.value)} required />
        <Button type="submit" onClick={handleSubmit}>Send Melding</Button>
      </Form>
    </FormContainer>
  );
};

export default Contact;