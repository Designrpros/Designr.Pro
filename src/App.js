import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';
import MainContent from './MainContent/MainContent';
import About from './About/About';
import Contact from './About/CV/Contact';
import Chatbot from './Chatbot/Chatbot';
import ChatbotIcon from './Chatbot/ChatbotIcon';
import Note from './Note/Note.js';
import Nomad from './Nomad/Nomad.js';
import Sketch from './Sketch/Sketch.js';
import MindNode from './MindNode/MindNode.js';
import Modal from './Modal';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #FBF7F6;
  }
`;

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLoginClick = () => {
    setIsModalOpen(true);
  };



const handleLogin = () => {
  // Perform the login operation here and set isLoggedIn to true when done
  setIsLoggedIn(true);
};


  const handleCloseModal = () => {
    setIsModalOpen(false);
  };  

  return (
    <Router>
      <GlobalStyle />
      <Navbar toggleSidebar={toggleSidebar} handleLoginClick={handleLoginClick} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} handleLoginClick={handleLoginClick} isLoggedIn={isLoggedIn} />
      {isChatbotOpen ? <Chatbot setIsChatbotOpen={setIsChatbotOpen} /> : <ChatbotIcon onClick={() => setIsChatbotOpen(true)} />}
      {isModalOpen && (
        <Modal closeModal={handleCloseModal}>
          <h2>Login</h2>
          {/* Add your login form here */}
        </Modal>
      )}

      <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/nomad" element={<Nomad />} />
          <Route path="/note" element={<Note />} />
          <Route path="/mindnode" element={<MindNode />} />
          <Route path="/sketch" element={<Sketch />} />
      </Routes>
    </Router>
  );
};

export default App;
