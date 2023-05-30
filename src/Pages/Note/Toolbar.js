import React from 'react';
import styled from 'styled-components';
import { FaPlus, FaTrash, FaBars } from 'react-icons/fa';

const StyledIcon = styled(FaPlus)`
  color: black;
  margin-right: 15px;
  font-size: 1em;

  &:hover {
    color: #ddd;
  }
`;

const StyledTrash = styled(FaTrash)`
  color: black;
  margin-right: 15px;
  font-size: 1em;

  &:hover {
    color: #ddd;
  }
`;

const StyledToggle = styled(FaBars)`
  color: black;
  margin-right: 15px;
  font-size: 1em;

  &:hover {
    color: #ddd;
  }
`;

const ToolbarContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
  color: #333;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const Toolbar = ({ handleNewNote, handleDeleteNote, toggleSidebar }) => {
  return (
    <ToolbarContainer>
      <StyledToggle onClick={toggleSidebar} />
      <StyledIcon onClick={handleNewNote} />
      <StyledTrash onClick={handleDeleteNote} />
    </ToolbarContainer>
  );
};

export default Toolbar;
