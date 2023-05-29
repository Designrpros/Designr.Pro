import React from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { FaBars, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const StyledIcon = styled(FaBars)`
  color: black;
  margin-right: 15px;
  font-size: 1.5em;

  &:hover {
    color: #ddd;
  }
`;

const StyledGithub = styled(FaGithub)`
  color: black;
  margin-right: 15px;
  font-size: 1.5em;

  &:hover {
    color: #ddd;
  }
`;

const StyledInstagram = styled(FaInstagram)`
  color: black;
  margin-right: 15px;
  font-size: 1.5em;

  &:hover {
    color: #ddd;
  }
`;

const StyledLinkedin = styled(FaLinkedin)`
  color: black;
  margin-right: 15px;
  font-size: 1.5em;

  &:hover {
    color: #ddd;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
  color: #333;
  position: sticky; // Add this line
  top: 0; // And this line
  z-index: 10; // This ensures the navbar stays on top of other elements

  &:hover {
    color: #ddd;
  }
`;


const Link = styled(RouterLink)`
  color: #000;
  text-decoration: none;
  font-family: 'Rubik', sans-serif;
  font-weight: bold;

  &:hover {
    color: #ddd;
  }
`;


const Navbar = ({ toggleSidebar }) => {
  return (
<Nav>
  <StyledIcon onClick={toggleSidebar} />
  <Link to="/">Designr.Pro</Link>
  <div>
    <StyledGithub />
    <StyledInstagram />
    <StyledLinkedin />
  </div>
</Nav>

  );
};



export default Navbar;
