import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';
import MainContent from './MainContent/MainContent';
import About from './About/About';
import Contact from './About/CV/Contact';
import Chatbot from './Chatbot/Chatbot';
import ChatbotIcon from './Chatbot/ChatbotIcon';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #FBF7F6;
  }
 
  
`;

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <GlobalStyle />
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      {isChatbotOpen ? <Chatbot setIsChatbotOpen={setIsChatbotOpen} /> : <ChatbotIcon onClick={() => setIsChatbotOpen(true)} />}

      <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
