import React, {createContext, useState, useEffect } from 'react';
import styled from 'styled-components';
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
import Nomad from './Pages/Nomad/Nomad.js';
import Sketch from './Pages/Sketch/Sketch.js';
import MindNode from './Pages/MindNode/MindNode.js';
import Dimension from './Pages/Dimension/Dimension.js';
import Modal from './Components/Modal';
import UserContext from './UserContext';
import Cookies from 'js-cookie';

import Group4 from './Assets/Group4.svg';


import { createGlobalStyle } from 'styled-components';
import Blog from './Pages/Dimension/Dimension.js';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #FCFCFE; 
    font-family: New York;
  }
`;

const Background1 = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${Group4});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
`;



const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const loggedInCookie = Cookies.get('isLoggedIn');
    if (loggedInCookie === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLoginClick = () => {
    setIsModalOpen(true);
};


  const handleLogin = () => {
    setIsLoggedIn(true);
    Cookies.set('isLoggedIn', 'true', { expires: 7 }); // Cookie will expire after 7 days
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    Cookies.remove('isLoggedIn');
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };  


  return (
    
    <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
    <Background1>
    <Router>
      <GlobalStyle />
      <Navbar toggleSidebar={toggleSidebar} handleLoginClick={handleLoginClick} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} handleLoginClick={handleLoginClick} isLoggedIn={isLoggedIn} />
      {isChatbotOpen ? <Chatbot setIsChatbotOpen={setIsChatbotOpen} /> : <ChatbotIcon onClick={() => setIsChatbotOpen(true)} />}
      {isModalOpen && (
        <Modal closeModal={handleCloseModal} handleLogin={handleLogin} />

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
    </Background1>
    </UserContext.Provider>
    
  );
};

export default App;
