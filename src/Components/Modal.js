import React, {useRef, useState } from 'react';
import styled from 'styled-components';
import { FaApple, FaGithub, FaGoogle } from 'react-icons/fa';
import { auth } from '../FirebaseSDK.js'; // adjust the path to your firebaseSDK.js file
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { logFirebaseEvent } from '../FirebaseSDK.js';

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
  const [email, setEmail] = useState(''); // email input value
  const [password, setPassword] = useState(''); // password input value
  const [error, setError] = useState(''); // error message

  const handleOutsideClick = (e) => {
    if (e.target.id === 'modal-overlay') {
        closeModal();// Close the modal
    }
  };

  const handleSignUp = async (email, password, closeModal) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // User account created successfully
      // Log an event
      logFirebaseEvent('sign_up', { method: 'email_password' });
      // You can close the modal here
      closeModal();
    } catch (error) {
      // Handle error (e.g., show error message)
      setError(error.message);
    }
  };

  const handleLogIn = async (email, password, closeModal) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // User signed in successfully
      // Log an event
      logFirebaseEvent('log_in', { method: 'email_password' });
      // You can close the modal here
      closeModal();
    } catch (error) {
      // Handle error (e.g., show error message)
      setError(error.message);
    }
  };

  return (
    <ModalOverlay id="modal-overlay" onClick={handleOutsideClick}>
      <ModalContainer>
        {error && <p>{error}</p>} {/* Display error message */}
        {view === 'login' ? (
          <>
            <h2>Login</h2>
            <Input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
            <Input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            <Button onClick={() => handleLogIn(email, password, closeModal)}>Log In</Button>
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
            <Input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
            <Input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            <Button onClick={() => handleSignUp(email, password, closeModal)}>Sign Up</Button>
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
