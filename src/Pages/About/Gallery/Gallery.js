import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db, storage } from '../../../FirebaseSDK';
import ImageView from './ImageView';



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
  border-radius: 0px;

  img {
    width: 100%;
    object-fit: cover;
    height: 100%;
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
  const [selectedItem, setSelectedItem] = useState(null);

  const fileInputRef = useRef(null);

  // Fetch images from Firestore when component mounts
  useEffect(() => {
    const fetchImages = async () => {
      const querySnapshot = await getDocs(collection(db, "images"));
      const images = [];
      querySnapshot.forEach((doc) => {
        images.push(doc.data());
      });
      setItems(images);
    };

    fetchImages();
  }, []);

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files) {
      Array.from(files).forEach(file => {
        const storageRef = ref(storage, 'images/' + file.name);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed', 
          (snapshot) => {
            // Handle the upload progress
          }, 
          (error) => {
            // Handle unsuccessful uploads
          }, 
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              const newItem = { id: items.length + 1, title: 'New Item', type: 'Image', url: downloadURL };
              setItems(prevItems => [...prevItems, newItem]);

              // Add image metadata to Firestore
              addDoc(collection(db, "images"), newItem);
            });
          }
        );
      });
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
      </FilterMenu>

      {selectedItem ? (
        <ImageView item={selectedItem} back={() => setSelectedItem(null)} />
      ) : (
        view === 'grid' ? (
          <GridView>
            {items.map((item) => (
              <GridItem key={item.id} onClick={() => setSelectedItem(item)}>
                <img src={item.url} alt={item.title} />
              </GridItem>
            ))}
          </GridView>
        ) : (
          <RowView>
            {items.map((item) => (
              <GridItem key={item.id} onClick={() => setSelectedItem(item)}>
                <img src={item.url} alt={item.title} />
                <Title>{item.title}</Title>
                <ExplanationText>{item.type}</ExplanationText>
              </GridItem>
            ))}
          </RowView>
        )
      )}
    </GalleryContainer>
  );
}

export default Gallery;