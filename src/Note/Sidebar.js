import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FaStickyNote } from 'react-icons/fa';

const Aside = styled.aside`
  position: fixed;
  top: 120px; // Change this to the height of your toolbar
  left: 0;
  width: 200px;
  height: 100%;
  background-color: #333;
  color: #fff;
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '-100%')});
  transition: transform 0.3s ease-in-out;
  padding: 20px;
  z-index: 19;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const Note = styled.li`
  color: #fff;
  font-family: 'Rubik', sans-serif;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: #ddd;
  }
`;

const Sidebar = ({ isOpen, toggleSidebar, notes }) => {
    const ref = useRef();
  
    useEffect(() => {
  
    }, [isOpen, toggleSidebar]);

  return (
    <Aside isOpen={isOpen} ref={ref}>
      <List>
        {notes.map((note, index) => (
          <Note key={index} onClick={toggleSidebar}>
            <FaStickyNote /> {note.title}
          </Note>
        ))}
      </List>
    </Aside>
  );
};

export default Sidebar;
