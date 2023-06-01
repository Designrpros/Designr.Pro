import React, { useState } from 'react';
import styled from 'styled-components';
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from '../../../FirebaseSDK';

const ImageViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const ImageViewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
`;

const ImageViewTitle = styled.h2`
  // 
`;

const ImageViewButtons = styled.div`
  display: flex;
  gap: 10px;
`;

const Image = styled.div`
  max-width: 100%;
  max-height: 100vh;

  img {
    width: 100%;
    object-fit: cover;
    height: 80vh;
  }
`;


const Title = styled.h2``;

const Description = styled.p``;

const EditForm = styled.form``;

const BackButton = styled.button``;

const DeleteButton = styled.button``;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 80%;
  margin: auto;
`;

const ImageView = ({ item, back }) => {
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(item.title);
  const [description, setDescription] = useState(item.description);

  const handleDelete = async () => {
    await deleteDoc(doc(db, 'images', item.id));
    back();
  };

  const handleEdit = async (event) => {
    event.preventDefault();
    await updateDoc(doc(db, 'images', item.id), {
      title: title,
      description: description
    });
    setEditMode(false);
  };

    return (
      <ImageViewContainer>
        <ImageViewHeader>
          <button onClick={back}>Back</button>
        </ImageViewHeader>
        <Image>
            <img src={item.url} alt={item.title} />
        </Image>
        <ImageViewButtons>
            <ImageViewTitle>{item.title}</ImageViewTitle>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </ImageViewButtons>
      </ImageViewContainer>
    );
  };

export default ImageView;
