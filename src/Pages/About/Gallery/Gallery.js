import React, { useState, useRef } from 'react';
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

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 0px; // Add border radius

  img {
    width: 100%; // Make the image take the full width of the card
    height: 300px; // Increase the fixed height
    object-fit: cover;
  }
`;


const Title = styled.h2`
  font-size: 20px; // Smaller title
  margin: 10px 0; // Add some margin to separate from the image
`;

const ExplanationText = styled.p`
  font-size: 12px; // Smaller explanation text
  margin: 0 10px 10px; // Add some margin
`;


const AddButton = styled.button`
border: none;
background: none;
cursor: pointer;
font-size: 24px;
`;


const GridView = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); // This will create 3 columns
  gap: 0px;
  width: 100%; // This will take 80% of the screen width
  margin: 0 auto; // This will center the grid
`;


const RowView = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0px;

`;



const Gallery = () => {
  const [view, setView] = useState('grid'); // 'grid' or 'row'
  const [items, setItems] = useState([]); // Initialize items as an empty array

  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setItems([...items, { id: items.length + 1, title: 'New Item', type: 'Image', url }]);
    }
  };

  const handleAddClick = () => {
    fileInputRef.current.click();
  };
  

  return (
    <GalleryContainer>
      <Title>Gallery</Title>
      <FilterMenu>
        <AddButton onClick={handleAddClick}>+</AddButton>
        <input type="file" onChange={handleFileChange} style={{ display: 'none' }} ref={fileInputRef} />
        <FilterButton onClick={() => setView('grid')}>Grid</FilterButton>
        <FilterButton onClick={() => setView('row')}>Row</FilterButton>
        {/* ... */}
      </FilterMenu>
  
      {view === 'grid' ? (
        <GridView>
          {items.map((item) => (
            <GridItem key={item.id}>
              <img src={item.url} alt={item.title} />
            </GridItem>
          ))}
        </GridView>
      ) : (
        <RowView>
          {items.map((item) => (
            <GridItem key={item.id}>
              <img src={item.url} alt={item.title} />
              <Title>{item.title}</Title>
              <ExplanationText>{item.type}</ExplanationText>
            </GridItem>
          ))}
        </RowView>
      )}
    </GalleryContainer>
  );
}

export default Gallery;