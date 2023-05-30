import React, { useState } from 'react';
import styled from 'styled-components';

const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FilterMenu = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  padding 10px;
`;

const FilterButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  margin: 0 10px;
  font-size: 16px;
  padding 10px;
`;

const GridItems = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  width: 100%;

`;

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd;
  padding: 10px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const AddButton = styled.button`
border: none;
background: none;
cursor: pointer;
font-size: 24px;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
`;

const FileInput = styled.input`
  display: block;
`;

const AddItemButton = styled.button`
  background: #007BFF;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
`;


const Gallery = () => {
  const [items, setItems] = useState([
    { id: 1, title: 'ZOSS Clothing Logo', type: 'Image', url: 'https://via.placeholder.com/150' },
    { id: 2, title: 'NUDE Branding Mockup', type: 'Video', url: 'https://via.placeholder.com/150' },
    { id: 3, title: 'Art Poster Mockup', type: 'Music', url: 'https://via.placeholder.com/150' },
    { id: 4, title: 'Normalcy Web Design', type: 'Content', url: 'https://via.placeholder.com/150' },
    // Add more items here
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleFileChange = (event) => {
    setSelectedFile(URL.createObjectURL(event.target.files[0]));
  };

  const handleAddClick = () => {
    setItems([...items, { id: items.length + 1, title: 'New Item', type: 'Image', url: selectedFile }]);
    setSelectedFile(null);
    setIsModalOpen(false);
  };

  return (
    <GalleryContainer>
      <Title>Recent Works</Title>
      <FilterMenu>
        <AddButton onClick={handleOpenModal}>+</AddButton>
        {isModalOpen && (
          <Modal>
            <ModalContent>
              <FileInput type="file" onChange={handleFileChange} />
              {selectedFile && <AddItemButton onClick={handleAddClick}>Add Item</AddItemButton>}
            </ModalContent>
          </Modal>
        )}
        <FilterButton>All</FilterButton>
        <FilterButton>Image</FilterButton>
        <FilterButton>Gallery</FilterButton>
        <FilterButton>Video</FilterButton>
        <FilterButton>Music</FilterButton>
        <FilterButton>Content</FilterButton>
      </FilterMenu>

      <GridItems>
        {items.map((item) => (
          <GridItem key={item.id}>
            <img src={item.url} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.type}</p>
          </GridItem>
        ))}
      </GridItems>
    </GalleryContainer>
  );
};

export default Gallery;
