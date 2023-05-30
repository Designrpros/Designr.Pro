import React from 'react';
import styled from 'styled-components';
import { FaRobot } from 'react-icons/fa';

const ChatbotIconButton = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 70px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1000;
`;


const ChatbotIcon = ({ onClick }) => {
  return (
    <ChatbotIconButton onClick={onClick}>
      <FaRobot />
    </ChatbotIconButton>
  );
};

export default ChatbotIcon;
