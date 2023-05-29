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

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLoginClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Router>
      <GlobalStyle />
      <Navbar toggleSidebar={toggleSidebar} handleLoginClick={handleLoginClick} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      {isChatbotOpen ? <Chatbot setIsChatbotOpen={setIsChatbotOpen} /> : <ChatbotIcon onClick={() => setIsChatbotOpen(true)} />}
      {isModalOpen && (
        <Modal>
          <h2>Login</h2>
          {/* Add your login form here */}
          <button onClick={handleCloseModal}>Close</button>
        </Modal>
      )}

      <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/note" element={<Note />} />
      </Routes>
    </Router>
  );
};

export default App;
