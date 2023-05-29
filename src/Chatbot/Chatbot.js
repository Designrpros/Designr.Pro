import React, {useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import GPTAPI from './GPTAPI';

const ChatbotContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 300px;
  height: 400px;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;



const MessagesContainer = styled.div`
  flex-grow: 1;
  overflow-y: auto;
`;

const Message = styled.p`
  margin-bottom: 10px;
`;

const InputContainer = styled.div`
  display: flex;
  margin-top: 10px;
`;

const Input = styled.input`
  flex-grow: 1;
  padding: 10px;
  border-radius: 5px;
`;

const SendButton = styled.button`
  padding: 10px;
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;
`;

const Chatbot = ({ setIsChatbotOpen }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const chatbotRef = useRef();
  const gptApi = new GPTAPI(); // Create an instance of the GPTAPI class

  const sendMessage = async () => {
    setMessages([...messages, { text: input, sender: 'user' }]);
    const chatbotResponse = await gptApi.generateResponse('gpt-3.5-turbo', [{ 'role': 'assistant', 'content': 'You are a helpful assistant.' }, { 'role': 'user', 'content': input }], 150, 0.5, ['\n']);
    console.log('Chatbot response:', chatbotResponse); // Log the chatbot's response
    setMessages([...messages, { text: input, sender: 'user' }, { text: chatbotResponse, sender: 'chatbot' }]);
    setInput('');
  };
  

  // Close the chatbot when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatbotRef.current && !chatbotRef.current.contains(event.target)) {
        setIsChatbotOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [chatbotRef, setIsChatbotOpen]);
  
  return (
    <ChatbotContainer ref={chatbotRef}>
      <MessagesContainer>
        {messages.map((message, index) => (
          <Message key={index}>{message.sender === 'user' ? 'You: ' : 'Chatbot: '}{message.text}</Message>
        ))}
      </MessagesContainer>
      <InputContainer>
        <Input value={input} onChange={(e) => setInput(e.target.value)} />
        <SendButton onClick={sendMessage}>Send</SendButton>
      </InputContainer>
    </ChatbotContainer>
  );
};

export default Chatbot;
