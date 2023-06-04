import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaEnvelope } from 'react-icons/fa';

const CardContainer = styled(Link)`
  flex-shrink: 0;
  width: 200px;
  height: 200px;
  margin: 10px;
  background-color: #FCFCFE;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: inherit;
`;

const Card = ({ icon, title, children, to }) => {
    let Icon;
    switch (icon) {
      case 'user':
        Icon = FaUser;
        break;
      case 'envelope':
        Icon = FaEnvelope;
        break;
      default:
        Icon = FaHome;
    }
  
    return (
      <CardContainer to={to}>
        <Icon size={50} />
        <h2>{title}</h2>
        <p>{children}</p>
      </CardContainer>
    );
  };
  
  export default Card;

