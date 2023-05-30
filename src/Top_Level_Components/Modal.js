import React, {useRef, useState } from 'react';
import styled from 'styled-components';
import { FaApple, FaGithub, FaGoogle } from 'react-icons/fa';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  height: 350px;
  max-width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  width: 100%;
`;

const Button = styled.button`
  margin-bottom: 10px;
  padding: 10px;
  width: 100%;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const SocialIcon = styled.div`
  margin: 5px;
  cursor: pointer;
`;

const SocialIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

const Modal = ({ closeModal }) => {
  const [view, setView] = useState('login'); // 'login' or 'signup'

  const handleOutsideClick = (e) => {
    if (e.target.id === 'modal-overlay') {
        closeModal();// Close the modal
    }
  };

  return (
    <ModalOverlay id="modal-overlay" onClick={handleOutsideClick}>
      <ModalContainer>
        {view === 'login' ? (
          <>
            <h2>Login</h2>
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Button>Login</Button>
            <p>Or login with:</p>
            <SocialIconsContainer>
                <SocialIcon><FaApple /></SocialIcon>
                <SocialIcon><FaGithub /></SocialIcon>
                <SocialIcon><FaGoogle /></SocialIcon>
          </SocialIconsContainer>
            <p>Don't have an account? <span onClick={() => setView('signup')}>Sign up</span></p>
          </>
        ) : (
          <>
            <h2>Sign Up</h2>
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Button>Sign Up</Button>
            <p>Or sign up with:</p>
            <SocialIconsContainer>
                <SocialIcon><FaApple /></SocialIcon>
                <SocialIcon><FaGithub /></SocialIcon>
                <SocialIcon><FaGoogle /></SocialIcon>
          </SocialIconsContainer>
            <p>Already have an account? <span onClick={() => setView('login')}>Login</span></p>
          </>
        )}
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
