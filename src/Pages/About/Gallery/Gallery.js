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
`;

const FilterButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  margin: 0 10px;
  font-size: 16px;
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

const Gallery = () => {
  const [items, setItems] = useState([
    { id: 1, title: 'ZOSS Clothing Logo', type: 'Image', url: 'https://via.placeholder.com/150' },
    { id: 2, title: 'NUDE Branding Mockup', type: 'Video', url: 'https://via.placeholder.com/150' },
    { id: 3, title: 'Art Poster Mockup', type: 'Music', url: 'https://via.placeholder.com/150' },
    { id: 4, title: 'Normalcy Web Design', type: 'Content', url: 'https://via.placeholder.com/150' },
    // Add more items here
  ]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <GalleryContainer>
      <Title>Recent Works</Title>
      <FilterMenu>
      <button onClick={() => addItem({ id: 5, title: 'New Item', type: 'Image', url: 'https://via.placeholder.com/150' })}>
        Add Item
      </button>
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
}

export default Gallery;
