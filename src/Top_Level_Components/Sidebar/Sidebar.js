import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { FaHome, FaEnvelope, FaUserCircle, FaNotesMedical } from 'react-icons/fa';
import { BsFillPersonFill } from 'react-icons/bs';
import { auth } from '../../FirebaseSDK.js'; 

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

const Link = styled(RouterLink)`
  display: flex;
  color: #fff;
  padding: 10px;
  text-decoration: none;
  font-size: 1.2rem;
  align-items: center;
  &:hover {
    background-color: #ddd;
  }
  &.active {
    background-color: #ddd;
  }
`;

const Aside = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 200px;
  height: 100%;
  background-color: #333;
  color: #fff;
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '-100%')});
  transition: transform 0.3s ease-in-out;
  padding: 20px;
  z-index: 20;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  text-align: left;
`;


const LoginButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  margin-bottom: 20px;

  svg {
    margin-right: 10px;
  }
`;


const Sidebar = ({ isOpen, toggleSidebar, handleLoginClick }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        toggleSidebar();
      }
    };

    // Bind the event listener
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Unbind the event listener on clean up
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, ref]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setIsLoggedIn(!!user);
    });

    // Cleanup function to unsubscribe from the listener when the component unmounts
    return () => unsubscribe();
  }, []);


  return (
    <>
    {isOpen && <Overlay onClick={toggleSidebar} />}
      <Aside isOpen={isOpen}>
      {isLoggedIn ? (
        <LoginButton>
          <FaUserCircle size={50} />
          Logged In As {user ? user.email : 'User'}
        </LoginButton>
      ) : (
        <LoginButton onClick={handleLoginClick}>
          <FaUserCircle size={50} />
          Not Logged In
        </LoginButton>
      )}


      <List>
        <li><Link to="/" onClick={toggleSidebar}><FaHome /> Home</Link></li>
        <li><Link to="/About/designrpro" onClick={toggleSidebar}><BsFillPersonFill />  About</Link></li>
        <li><Link to="/contact" onClick={toggleSidebar}><FaEnvelope />  Contact</Link></li>
        <br />
        <li><Link to="/nomad" onClick={toggleSidebar}><FaNotesMedical />  Nomad</Link></li>
        <br />
        <li><Link to="/blog" onClick={toggleSidebar}><FaNotesMedical />  Blog</Link></li>
        <li><Link to="/sketch" onClick={toggleSidebar}><FaNotesMedical />  Sketch</Link></li>
        <li><Link to="/mindnode" onClick={toggleSidebar}><FaNotesMedical />  MindNode</Link></li>
        <br />
        <li><Link to="/dimension" onClick={toggleSidebar}><FaNotesMedical />  Dimension</Link></li>
      </List>
    </Aside>
    </>
  );
};

export default Sidebar;
