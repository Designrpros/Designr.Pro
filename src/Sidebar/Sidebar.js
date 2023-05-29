import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { FaHome, FaEnvelope, FaUserCircle, FaNotesMedical } from 'react-icons/fa';
import { BsFillPersonFill } from 'react-icons/bs';



const Link = styled(RouterLink)`
  color: #fff;
  text-decoration: none;
  font-family: 'Rubik', sans-serif;
  font-weight: bold;

  &:hover {
    color: #ddd;
  }
`;

const Aside = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 200px; // Set the width to your desired value
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


const Sidebar = ({ isOpen, toggleSidebar, handleLoginClick, isLoggedIn }) => {

  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = e => {
      if (isOpen && ref.current && !ref.current.contains(e.target)) {
        toggleSidebar();
      }
    }

    document.addEventListener("mousedown", checkIfClickedOutside)

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [isOpen, toggleSidebar]);

  return (
    <Aside isOpen={isOpen} ref={ref}>
      {isLoggedIn ? (
        <LoginButton>
          <FaUserCircle size={50} />
          Logged In As User
        </LoginButton>
      ) : (
        <LoginButton onClick={handleLoginClick}>
          <FaUserCircle size={50} />
          Not Logged In
        </LoginButton>
      )}


      <List>
        <li><Link to="/" onClick={toggleSidebar}><FaHome /> Home</Link></li>
        <li><Link to="/about" onClick={toggleSidebar}><BsFillPersonFill />  About</Link></li>
        <li><Link to="/contact" onClick={toggleSidebar}><FaEnvelope />  Contact</Link></li>
        <br />
        <li><Link to="/nomad" onClick={toggleSidebar}><FaNotesMedical />  Nomad</Link></li>
        <br />
        <li><Link to="/note" onClick={toggleSidebar}><FaNotesMedical />  Note</Link></li>
        <li><Link to="/sketch" onClick={toggleSidebar}><FaNotesMedical />  Sketch</Link></li>
        <li><Link to="/mindnode" onClick={toggleSidebar}><FaNotesMedical />  MindNode</Link></li>
      </List>
    </Aside>
  );
};

export default Sidebar;
