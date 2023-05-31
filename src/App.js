import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Top_Level_Components/Navbar/Navbar';
import Sidebar from './Top_Level_Components/Sidebar/Sidebar';
import MainContent from './Pages/MainContent/MainContent';
import About from './Pages/About/About';
import DesignrPro from './Pages/About/DesignrPro/DesignrPro';
import Gallery from './Pages/About/Gallery/Gallery';
import CV from './Pages/About/CV/CV';
import Contact from './Pages/About/CV/Contact';
import Chatbot from './Top_Level_Components/Chatbot/Chatbot';
import ChatbotIcon from './Top_Level_Components/Chatbot/ChatbotIcon';
import BlogPage from './Pages/Blog/BlogPage.js';
import BlogEditor from './Pages/Blog/BlogEditor/BlogEditor';
import Nomad from './Pages/Nomad/Nomad.js';
import Sketch from './Pages/Sketch/Sketch.js';
import MindNode from './Pages/MindNode/MindNode.js';
import Dimension from './Pages/Dimension/Dimension.js';
import Modal from './Components/Modal';


import { createGlobalStyle } from 'styled-components';
import Blog from './Pages/Dimension/Dimension.js';

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
  <Route path="/about" element={<About />}>
    <Route path="designrpro" element={<DesignrPro />} />
    <Route path="cv" element={<CV />} />
    <Route path="gallery" element={<Gallery />} />
  </Route>
  <Route path="/contact" element={<Contact />} />
  <Route path="/nomad" element={<Nomad />} />
  <Route path="/blog/*" element={<BlogPage />} />
  <Route path="/mindnode" element={<MindNode />} />
  <Route path="/sketch" element={<Sketch />} />
  <Route path="/Dimension" element={<Dimension />} />
</Routes>


    </Router>
  );
};

export default App;
